const canvas=document.getElementById('scene');
const origin=new URL(document.baseURI).origin;
let worker;
const fail=message=>{worker?.terminate();canvas.dataset.renderThread='fallback';canvas.dataset.workerError=String(message);console.error(message);parent.postMessage({channel:window.__RAVINE_CHANNEL,ravine:true,type:'error',message:'The live scene could not start. The story is still available.'},'*');};
try {
  if(!canvas.transferControlToOffscreen||!window.Worker)throw Error('Offscreen rendering is not supported');
  const response=await fetch(origin+'/landing-pages/ravine-assets/worker-runtime.mjs');if(!response.ok)throw Error('Scene worker could not load');
  const workerURL=URL.createObjectURL(new Blob([await response.text()],{type:'text/javascript'}));
  worker=new Worker(workerURL);URL.revokeObjectURL(workerURL);
  const byId=new Map();
  const nodes=[...document.querySelectorAll('[id], [data-view]')].map((element,index)=>{
    const id=element.id||'__scene-node-'+index;byId.set(id,element);element.dataset.workerNode=id;
    return {id,dataset:{...element.dataset},className:element.className,values:{value:element.value,hidden:element.hidden,textContent:element.tagName==='SCRIPT'?'':element.textContent}};
  });
  worker.onmessage=event=>{
    const data=event.data;
    if(data.workerDebug)canvas.dataset.workerDebug=data.workerDebug;
    if(data.sceneMessage){canvas.dataset.workerProgress=JSON.stringify(data.sceneMessage);parent.postMessage(data.sceneMessage,'*');if(data.sceneMessage.type==='error')console.error(data.sceneMessage.message);}
    if(data.workerError)fail(data.workerError);
    if(data.workerState)canvas.dataset.workerState=JSON.stringify(data.workerState);
    for(const [id,key,value]of data.workerDOM||[]){
      const element=byId.get(id);if(!element)continue;
      if(key.startsWith('style.'))element.style[key.slice(6)]=value;
      else if(key.startsWith('attribute.'))element.setAttribute(key.slice(10),value);
      else if(['focus','showModal','close'].includes(key))element[key]?.();
      else element[key]=value;
    }
  };
  worker.onerror=event=>fail(event.message);
  const offscreen=canvas.transferControlToOffscreen();
  worker.postMessage({workerInit:true,canvas:offscreen,width:innerWidth,height:innerHeight,dpr:devicePixelRatio,reduced:matchMedia('(prefers-reduced-motion: reduce)').matches,coarse:matchMedia('(pointer:coarse)').matches,hidden:document.hidden,origin,assets:window.__RAVINE_ASSETS,channel:window.__RAVINE_CHANNEL,nodes,modules:[...document.querySelectorAll('script[type="text/ravine-worker"]')].map(element=>element.textContent)},[offscreen]);
  for(const element of document.querySelectorAll('script[type="text/ravine-worker"]'))element.remove();
  addEventListener('message',event=>{if(event.source===parent&&event.data?.channel===window.__RAVINE_CHANNEL&&event.data.ravineCommand)worker.postMessage(event.data);});
  addEventListener('resize',()=>worker.postMessage({workerResize:true,width:innerWidth,height:innerHeight,dpr:devicePixelRatio}));
  document.addEventListener('visibilitychange',()=>worker.postMessage({workerHidden:document.hidden}));
  for(const type of ['pointerdown','pointermove','pointerup','pointercancel','wheel','keydown','keyup','click','input','change'])document.addEventListener(type,event=>{
    const element=event.target.closest?.('[data-worker-node]');if(!element)return;
    if(element===canvas){
      if(type==='pointerdown')canvas.setPointerCapture(event.pointerId);
      if(type==='wheel'||type==='keydown'&&['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-',' '].includes(event.key))event.preventDefault();
    }
    worker.postMessage({workerEvent:{type,targetId:element.dataset.workerNode,value:element.value,pointerId:event.pointerId,pointerType:event.pointerType,button:event.button,buttons:event.buttons,clientX:event.clientX,clientY:event.clientY,pageX:event.pageX,pageY:event.pageY,deltaX:event.deltaX,deltaY:event.deltaY,deltaMode:event.deltaMode,key:event.key,code:event.code,ctrlKey:event.ctrlKey,metaKey:event.metaKey,shiftKey:event.shiftKey,altKey:event.altKey}});
  },{passive:false});
  addEventListener('pagehide',event=>{if(!event.persisted)worker.terminate();});
  canvas.dataset.renderThread='worker';
} catch(error){worker?.terminate();fail(error.message);}
