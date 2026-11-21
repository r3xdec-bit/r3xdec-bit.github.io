/* DOH! — the flavour room. All photographs remain in the document. */
(() => {
 'use strict';
 const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),finePointer=matchMedia('(hover: hover) and (pointer: fine)');
 const flavours=[
  {key:'strawberry',name:'Pink, please!',note:'THE CROWD FAVOURITE',description:'A silky strawberry dip, a cloud-soft centre and a little rainbow crunch. Your inner child has excellent taste.',texture:'Soft / silky / crunchy',price:'$4.50',colour:'#ffc2df'},
  {key:'chocolate',name:'Choco loco.',note:'CHOCOLATE, ALL THE WAY',description:'Glossy chocolate glaze meets generous little chocolate chips. Rich cocoa, soft dough and just the right amount of crunch.',texture:'Rich / glossy / chocolatey',price:'$4.75',colour:'#96c6ff'},
  {key:'pistachio',name:'Oh, pistachio!',note:'A LITTLE GREEN OBSESSION',description:'Creamy pistachio glaze, roasted kernels and golden crumbs. A little nutty, beautifully textured and very hard to share.',texture:'Creamy / roasted / nutty',price:'$5.00',colour:'#c8e6a0'},
  {key:'original',name:'Simply glazed.',note:'THE FOREVER CLASSIC',description:'Golden dough beneath a delicate veil of sugar. Light, tender and quietly irresistible. Sometimes simple says it all.',texture:'Pillowy / delicate / golden',price:'$3.75',colour:'#ffdf49'}
 ];
 const photos=$$('[data-room-image]'),room=$('#flavour-room'),dialog=$('#taste-dialog'),closeImage=$('#closeup-image'),photo=$('#room-photo');
 let selected=0,zoomed=false,lastFocus=null;
 const imageChecks=$$('img').map(async img=>{try{await img.decode();if(!img.naturalWidth)throw new Error('Empty image');return true;}catch{img.dataset.failed='true';return false;}});
 const assetsReady=Promise.all(imageChecks).then(results=>{const ready=results.every(Boolean);document.body.dataset.images=ready?'ready':'failed';return ready;});
 function checkIndex(index){if(!Number.isInteger(index)||index<0||index>=flavours.length)throw new Error('Unknown flavour');}
 function setZoom(value){zoomed=Boolean(value);$('#closeup-photo').classList.toggle('is-zoomed',zoomed);$('#zoom-detail').setAttribute('aria-pressed',String(zoomed));$('#zoom-detail').innerHTML=zoomed?'Zoom out <span aria-hidden="true">−</span>':'Zoom in <span aria-hidden="true">＋</span>';closeImage.style.transformOrigin='50% 50%';$('#closeup-hint').textContent=zoomed?(finePointer.matches?'Move across the photo to explore the details.':'Zoom out to see the whole donut.'):'A little closer. A lot more to love.';}
 function syncCloseup(){const f=flavours[selected];closeImage.src=photos[selected].src;closeImage.alt=photos[selected].alt;$('#closeup-title').textContent=f.name;$('#closeup-description').textContent=f.description;$('#closeup-texture').textContent=f.texture;$('#closeup-number').textContent=`0${selected+1} / 04`;dialog.style.setProperty('--flavour',f.colour);$$('[data-closeup]').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===selected)));setZoom(false);}
 function selectFlavour(index){
  checkIndex(index);selected=index;const f=flavours[index];room.dataset.selected=String(index);room.style.setProperty('--flavour',f.colour);
  photos.forEach((img,i)=>{img.classList.toggle('is-active',i===index);img.setAttribute('aria-hidden',String(i!==index));});
  $$('[data-taste]').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));
  $('#room-edition').textContent=`0${index+1}`;$('#room-name').textContent=f.name;$('#room-description').textContent=f.description;$('#room-note').textContent=f.note;$('#room-texture').textContent=f.texture.toUpperCase();$('#room-price').textContent=f.price;
  $('#room-watch').dataset.explore=String(index);photo.setAttribute('aria-label',`Open a close-up of ${f.name}`);
  if(dialog.open)syncCloseup();return f;
 }
 async function openCloseup(index=selected,zoom=false){
  checkIndex(index);selectFlavour(index);syncCloseup();
  if(!dialog.open){lastFocus=document.activeElement;dialog.showModal();document.body.classList.add('detail-open');}
  await closeImage.decode();if(!closeImage.naturalWidth)throw new Error('The photograph could not be displayed.');setZoom(zoom);
  return {flavour:flavours[index].name,action:'closeup',image:{loaded:true,width:closeImage.naturalWidth,height:closeImage.naturalHeight},zoomed};
 }
 function closeCloseup(){dialog.close();}
 photo.addEventListener('click',()=>{openCloseup().catch(()=>{$('#closeup-hint').textContent='The photo could not load. Please reopen the complete DOH! HTML.';});});
 $$('[data-taste]').forEach((button,i)=>{button.addEventListener('click',()=>selectFlavour(i));button.addEventListener('keydown',event=>{let next=i;if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(i+1)%4;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(i+3)%4;else if(event.key==='Home')next=0;else if(event.key==='End')next=3;else return;event.preventDefault();selectFlavour(next);$$('[data-taste]')[next].focus();});});
 $$('[data-closeup]').forEach((button,i)=>button.addEventListener('click',()=>{selectFlavour(i);}));
 $('.taste-close').addEventListener('click',closeCloseup);
 dialog.addEventListener('click',event=>{if(event.target===dialog)closeCloseup();});
 dialog.addEventListener('close',()=>{document.body.classList.remove('detail-open');setZoom(false);if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true});});
 $('#zoom-detail').addEventListener('click',()=>setZoom(!zoomed));
 $('#closeup-photo').addEventListener('pointermove',event=>{if(!zoomed||event.pointerType==='touch')return;const r=event.currentTarget.getBoundingClientRect();closeImage.style.transformOrigin=`${Math.max(12,Math.min(88,(event.clientX-r.left)/r.width*100))}% ${Math.max(12,Math.min(88,(event.clientY-r.top)/r.height*100))}%`;});
 $('#closeup-photo').addEventListener('pointerleave',()=>{closeImage.style.transformOrigin='50% 50%';});
 photo.addEventListener('pointermove',event=>{if(!finePointer.matches||reduced.matches||document.body.classList.contains('motion-paused'))return;const r=photo.getBoundingClientRect();photo.style.setProperty('--photo-x',`${((event.clientX-r.left)/r.width-.5)*10}px`);photo.style.setProperty('--photo-y',`${((event.clientY-r.top)/r.height-.5)*10}px`);});
 photo.addEventListener('pointerleave',()=>{photo.style.setProperty('--photo-x','0px');photo.style.setProperty('--photo-y','0px');});
 if('IntersectionObserver' in window&&!reduced.matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.12});
  $$('.content .section-heading,.manifesto>div,.method article,.ritual>div,.faq-section>div,.footer-top').forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',`${i%3*70}ms`);observer.observe(el);});
  reduced.addEventListener('change',()=>{if(reduced.matches){$$('.reveal').forEach(el=>el.classList.add('in-view'));observer.disconnect();}});
 }
 window.DohExperience={selectFlavour,openCloseup,assetsReady};
 const context=document.modelContext;
 if(context?.registerTool){const lifecycle=new AbortController();try{Promise.resolve(context.registerTool({name:'open_donut_closeup',title:'Get closer to a donut',description:'Choose a donut and open its full-size photograph. Optionally zoom into the glaze and toppings. Does not place an order.',inputSchema:{type:'object',properties:{flavour:{type:'string',enum:flavours.map(f=>f.key)},zoom:{type:'boolean'}},required:['flavour'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},async execute(input){if(!input||typeof input!=='object'||Object.keys(input).some(k=>!['flavour','zoom'].includes(k))||('zoom' in input&&typeof input.zoom!=='boolean'))throw new Error('Invalid input');const index=flavours.findIndex(f=>f.key===input.flavour);checkIndex(index);if(!await assetsReady)throw new Error('An embedded image could not be decoded.');return openCloseup(index,input.zoom||false);}},{signal:lifecycle.signal})).catch(()=>{});}catch{}window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});}
})();
