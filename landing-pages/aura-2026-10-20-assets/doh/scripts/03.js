/* DOH! — adaptation of the supplied Bagel.html.
   Retains its embedded Three.js runtime, continuous scroll story, procedural
   ring construction, photo-derived dough and detailed physical materials. */
(() => {
'use strict';
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const dialog=$('#order-dialog');
$$('[data-order]').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
$('#visit-button').addEventListener('click',()=>{dialog.close();$('#collection').scrollIntoView({behavior:reduced.matches?'instant':'smooth'});});
const story=$('#story'),stage=$('#stage'),header=$('#header'),canvas=$('#webgl');
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const mix=(a,b,t)=>a+(b-a)*t;
const smooth=(a,b,x)=>{let t=clamp((x-a)/(b-a));return t*t*(3-2*t);};
const TAU=Math.PI*2;
let seed=48071;
const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
const flavors=[
 {name:'Pink, please!',description:'Strawberry glaze. A sprinkle party. An instant smile.',icing:'#ee859c',background:'#ff98c9',thumb:'#ffc2df',sprinkles:['#fff8e6','#ffd124','#175bae','#de283b','#299945','#8044b8','#ff8629','#ef5b9c']},
 {name:'Choco loco.',description:'Glossy chocolate glaze. Generous little chocolate chips.',icing:'#50220f',background:'#96c6ff',thumb:'#96c6ff',sprinkles:[]},
 {name:'Oh, pistachio!',description:'Creamy pistachio glaze. Roasted kernels, golden crumbs.',icing:'#afa65e',background:'#c8e6a0',thumb:'#c8e6a0',sprinkles:[]},
 {name:'Simply glazed.',description:'A delicate veil of sugar. All that pillowy softness.',icing:'#fff0d6',background:'#ffdf49',thumb:'#ffdf49',sprinkles:[]}
];
let travel=1,target=0,progress=0,paused=reduced.matches,dirty=true;
const stops=[.255,.345,.435,.525];
let spin=0,spinTarget=0,autoA=0,dragging=false,dragX=0,dragOrigin=0,dragMoved=false;
const spinButton=$('#spin-donut');
spinButton.addEventListener('pointerdown',event=>{if(event.pointerType==='touch'||event.button!==0)return;dragging=true;dragMoved=false;dragX=event.clientX;dragOrigin=spinTarget;spinButton.setPointerCapture(event.pointerId);});
spinButton.addEventListener('pointermove',event=>{if(!dragging)return;const dx=event.clientX-dragX;dragMoved=dragMoved||Math.abs(dx)>4;spinTarget=dragOrigin+dx*.012;dirty=true;});
function finishSpin(event){dragging=false;if(spinButton.hasPointerCapture(event.pointerId))spinButton.releasePointerCapture(event.pointerId);}
spinButton.addEventListener('pointerup',finishSpin);spinButton.addEventListener('pointercancel',finishSpin);
spinButton.addEventListener('click',()=>{if(!dragMoved){spinTarget+=reduced.matches?Math.PI/4:TAU;dirty=true;}dragMoved=false;});
spinButton.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();spinTarget+=(event.key==='ArrowRight'?1:-1)*Math.PI/6;dirty=true;}});
function jumpTo(value){if(value>.17)spinTarget=0;window.scrollTo({top:story.offsetTop+value*travel,behavior:reduced.matches?'instant':'smooth'});}
function exploreFlavor(index){if(!Number.isInteger(index)||index<0||index>3)throw new Error('Unknown flavour');window.DohExperience?.selectFlavour(index);jumpTo(stops[index]);return {flavor:flavors[index].name};}
$$('[data-flavor]').forEach(button=>button.addEventListener('click',()=>exploreFlavor(Number(button.dataset.flavor))));
$$('[data-explore]').forEach(button=>button.addEventListener('click',()=>exploreFlavor(Number(button.dataset.explore))));
$$('[data-step]').forEach(button=>button.addEventListener('click',()=>jumpTo([0,.255,.72,.93][Number(button.dataset.step)])));
function updatePause(){const button=$('#motion-toggle');button.setAttribute('aria-pressed',String(paused));button.setAttribute('aria-label',paused?'Resume automatic motion':'Pause automatic motion');button.innerHTML=paused?'Resume <span aria-hidden="true">▷</span>':'Pause <span aria-hidden="true">Ⅱ</span>';document.body.classList.toggle('motion-paused',paused);dirty=true;}
$('#motion-toggle').addEventListener('click',()=>{paused=!paused;updatePause();});
reduced.addEventListener('change',()=>{paused=reduced.matches;updatePause();});updatePause();
function scrollUpdate(){target=clamp((window.scrollY-story.offsetTop)/travel);header.classList.toggle('solid',scrollY>story.offsetTop+story.offsetHeight-110);dirty=true;}
window.addEventListener('scroll',scrollUpdate,{passive:true});
let renderer;
try {
 if(!window.THREE)throw new Error('3D runtime unavailable');
 renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance',preserveDrawingBuffer:true});
}catch(error){document.body.classList.add('no-webgl');$('#error').hidden=false;$$('[data-explore]').forEach(b=>{b.hidden=true;});window.addEventListener('scroll',()=>header.classList.toggle('solid',scrollY>100),{passive:true});console.info('DOH! uses its static presentation because WebGL is unavailable.');return;}
const renderErrors=[];
renderer.debug.onShaderError=(gl,program,vertex,fragment)=>{const detail=[gl.getProgramInfoLog(program),gl.getShaderInfoLog(vertex),gl.getShaderInfoLog(fragment)].filter(Boolean).join('\n');renderErrors.push(detail);console.error('DOH! material error:',detail);document.body.classList.remove('scene-ready');$('#error').hidden=false;};
renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));window.DohGL={renderer,resize:()=>resize()};
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=.98;
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.setClearColor(0x000000,0);
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(34,1,.05,80);
const look=new THREE.Vector3();
const ambient=new THREE.HemisphereLight(0xfff2df,0x5e3544,.68);scene.add(ambient);
const key=new THREE.DirectionalLight(0xffecd7,3.6);key.position.set(-4,6,7);key.castShadow=true;key.shadow.mapSize.set(innerWidth<=800?1536:3072,innerWidth<=800?1536:3072);Object.assign(key.shadow.camera,{left:-3.5,right:3.5,top:3.5,bottom:-3.5,near:.5,far:25});key.shadow.bias=-.00003;key.shadow.normalBias=.002;key.shadow.radius=2;scene.add(key,key.target);
const fill=new THREE.DirectionalLight(0xfff4e8,.85);fill.position.set(6,2,3);scene.add(fill);
const rim=new THREE.DirectionalLight(0xffe3d2,1.7);rim.position.set(0,5,-5);scene.add(rim);
const envScene=new THREE.Scene();envScene.background=new THREE.Color('#403339');
function envPanel(w,h,x,y,z,power){const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:new THREE.Color().setRGB(power,power*.96,power*.93),side:THREE.DoubleSide}));mesh.position.set(x,y,z);mesh.lookAt(0,0,0);envScene.add(mesh);}
envPanel(3.8,5.2,-4,5,5,5);envPanel(1.2,5,5,2,2,1.6);envPanel(5,1.4,0,6,-4,3.4);
const pmrem=new THREE.PMREMGenerator(renderer);const environment=pmrem.fromScene(envScene,.04);scene.environment=environment.texture;pmrem.dispose();envScene.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});
function field(size){const a=new Float32Array(size*size);for(let i=0;i<a.length;i++)a[i]=random();return (x,y)=>{x=((x%size)+size)%size;y=((y%size)+size)%size;const ix=x|0,iy=y|0;let fx=x-ix,fy=y-iy;fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);return mix(mix(a[iy*size+ix],a[iy*size+(ix+1)%size],fx),mix(a[((iy+1)%size)*size+ix],a[((iy+1)%size)*size+(ix+1)%size],fx),fy);};}
const noise=field(128);
function canvasTexture(c,srgb=true){const texture=new THREE.CanvasTexture(c);if(srgb)texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());return texture;}
// A high-resolution baked base retains an uneven proof line under the photograph.
function doughTextures(){
 const width=1536,height=768,c=document.createElement('canvas'),b=document.createElement('canvas'),r=document.createElement('canvas');
 for(const texture of [c,b,r]){texture.width=width;texture.height=height;}
 const cx=c.getContext('2d'),bx=b.getContext('2d'),rx=r.getContext('2d'),im=cx.createImageData(width,height),bi=bx.createImageData(width,height),ri=rx.createImageData(width,height);
 for(let y=0;y<height;y++)for(let x=0;x<width;x++){
  const u=x/width*TAU,v=(1-y/height)*TAU,n=noise(x*.014,y*.014),fine=noise(x*.24,y*.24),grain=random();
  const proof=Math.exp(-Math.pow((Math.sin(v)+.045+.028*Math.sin(u*5)+.028*(n-.5))/(.095+n*.04),2));
  const brown=clamp(.18+Math.abs(Math.sin(v))*.25+(n-.5)*.37+.03*Math.sin(u*9));
  const gold=[233,154,66],toast=[182,85,26],pale=[249,218,164],i=(y*width+x)*4;
  for(let k=0;k<3;k++)im.data[i+k]=mix(mix(gold[k],toast[k],brown),pale[k],proof*.65)+(fine-.5)*13+(grain-.5)*5;
  im.data[i+3]=255;const bump=142+(fine-.5)*45+(n-.5)*23+(grain-.5)*22;bi.data[i]=bi.data[i+1]=bi.data[i+2]=bump;bi.data[i+3]=255;
  const rough=162+n*34+fine*16;ri.data[i]=ri.data[i+1]=ri.data[i+2]=rough;ri.data[i+3]=255;
 }
 cx.putImageData(im,0,0);bx.putImageData(bi,0,0);rx.putImageData(ri,0,0);
 // Tiny fried blisters have raised skins, delicate rims and recessed pores.
 for(let i=0;i<7800;i++){
  const x=random()*width,y=random()*height,radius=.4+Math.pow(random(),3)*3.8;
  const gradient=bx.createRadialGradient(x-radius*.16,y-radius*.16,.1,x,y,radius);
  gradient.addColorStop(0,'rgba(214,214,214,.68)');gradient.addColorStop(.65,'rgba(171,171,171,.25)');gradient.addColorStop(.84,'rgba(58,58,58,.40)');gradient.addColorStop(1,'rgba(142,142,142,0)');bx.fillStyle=gradient;bx.fillRect(x-radius,y-radius,radius*2,radius*2);
 }
 return {map:canvasTexture(c),bumpMap:canvasTexture(b,false),roughnessMap:canvasTexture(r,false)};
}
const doughMaps=doughTextures();
const doughMaterial=new THREE.MeshPhysicalMaterial({...doughMaps,bumpScale:.021,roughness:.91,metalness:0,clearcoat:.16,clearcoatRoughness:.55,envMapIntensity:.45});
const doughPhotoUniform={value:null},photoReadyUniform={value:0};
// The generated dough photograph supplies real-looking fine fissures and blisters.
const doughPhoto=new THREE.TextureLoader().load('https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/aura-2026-10-27/9c13c89b202b799c49663415ac8a9b34d208bef0535807fe19ea8e72b1229d58.webp',texture=>{
 texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.anisotropy=Math.min(12,renderer.capabilities.getMaxAnisotropy());texture.needsUpdate=true;doughPhotoUniform.value=texture;photoReadyUniform.value=1;dirty=true;canvas.dataset.photoTexture='ready';
},undefined,()=>{canvas.dataset.photoTexture='fallback';dirty=true;});
const fallbackPhoto=doughMaps.map;doughPhotoUniform.value=fallbackPhoto;
const photoShaderPrefix='uniform sampler2D doughPhoto;uniform float doughPhotoReady;\n';
const photoMapFragment=`
 #include <map_fragment>
 vec2 photoUv=vMapUv*vec2(3.0,1.7);
 vec3 photographedDough=texture2D(doughPhoto,photoUv).rgb;
 float proofLine=exp(-pow((sin((1.0-vMapUv.y)*6.283185)+.045+.03*sin(vMapUv.x*31.4159))/.12,2.0));
 diffuseColor.rgb=mix(diffuseColor.rgb,photographedDough*vec3(.92,.94,.97),.80*doughPhotoReady*(1.0-proofLine*.69));
`;
const photoNormalFragment=`
 #include <normal_fragment_maps>
 float photoRelief=dot(texture2D(doughPhoto,vMapUv*vec2(3.0,1.7)).rgb,vec3(.2126,.7152,.0722));
 normal=perturbNormalArb(-vViewPosition,normal,vec2(dFdx(photoRelief),dFdy(photoRelief))*.032*doughPhotoReady,faceDirection);
`;
// Shared shader definition is also checked against the embedded Three.js version.
function applyDoughShader(shader){shader.uniforms.doughPhoto=doughPhotoUniform;shader.uniforms.doughPhotoReady=photoReadyUniform;shader.fragmentShader=photoShaderPrefix+shader.fragmentShader.replace('#include <map_fragment>',photoMapFragment).replace('#include <normal_fragment_maps>',photoNormalFragment);}
doughMaterial.onBeforeCompile=applyDoughShader;doughMaterial.customProgramCacheKey=()=> 'doh-photo-dough-v2';
// Broad irregularities define a handmade silhouette; smaller variations catch light.
function surface(u,v,offset=0){
 const major=.934+.024*Math.sin(3*u+.4)+.012*Math.cos(7*u),tube=.565*(1+.038*Math.sin(5*u)+.016*Math.cos(9*u+.8));
 const relief=.004*Math.sin(u*19+v*5)+.0026*Math.sin(u*37-v*11)+.0018*Math.sin(u*67+v*29);
 const radius=major+(tube+relief+offset)*Math.cos(v);
 let y=(.495+offset)*Math.sin(v)*(1+.039*Math.sin(u*4+.7))+.01*Math.sin(u*7)*Math.sin(v)**2;
 if(y<-.37)y=-.37+(y+.37)*.72;
 return new THREE.Vector3(radius*Math.cos(u)*1.02,y,radius*Math.sin(u)*.985);
}
function surfaceNormal(u,v){const d=.0001,du=surface(u+d,v).sub(surface(u-d,v)),dv=surface(u,v+d).sub(surface(u,v-d));return dv.cross(du).normalize();}
function gridGeometry(nu,nv,point,uvMap){const positions=[],uv=[],indices=[];for(let i=0;i<=nu;i++)for(let j=0;j<=nv;j++){const u=i/nu*TAU,t=j/nv,p=point(u,t);positions.push(p.x,p.y,p.z);uv.push(...uvMap(i/nu,t));}for(let i=0;i<nu;i++)for(let j=0;j<nv;j++){const a=i*(nv+1)+j,b=(i+1)*(nv+1)+j;indices.push(a,a+1,b,a+1,b+1,b);}const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometry.setIndex(indices);geometry.computeVertexNormals();geometry.setAttribute('uv1',geometry.attributes.uv.clone());geometry.setAttribute('uv2',geometry.attributes.uv.clone());return geometry;}
const doughGeometry=gridGeometry(256,112,(u,t)=>surface(u,t*TAU),(u,t)=>[u,1-t]);
function circularPeak(u,center,width){const d=Math.atan2(Math.sin(u-center),Math.cos(u-center));return Math.exp(-d*d/(width*width));}
function icingBounds(u){
 let outside=.19+.052*Math.sin(u*8+.3)+.035*Math.sin(u*13),inside=Math.PI-.19+.055*Math.cos(u*7);
 for(let i=0;i<11;i++)outside-=(.16+(i%4)*.087)*circularPeak(u,i*TAU/11+.22*Math.sin(i*5),.065+(i%3)*.039);
 for(let i=0;i<7;i++)inside+=(.12+(i%2)*.16)*circularPeak(u,i*TAU/7+.25,.09+(i%3)*.02);
 return [outside,inside];
}
// A thin glaze shell, with short heavy drips and a rounded meniscus at the edge.
const icingGeometry=gridGeometry(320,96,(u,t)=>{const [start,end]=icingBounds(u),edge=Math.sin(Math.PI*t),v=mix(start,end,t);const coat=.008+.018*smooth(0,.13,edge)+.0023*Math.sin(u*13+v*7)*edge+.0018*Math.sin(u*31-v*12)*edge;return surface(u,v,coat);},(u,t)=>[u,t]);
const edgeGeometry=(inner)=>gridGeometry(320,9,(u,t)=>{const v=icingBounds(u)[inner?1:0];return surface(u,v+(inner?1:-1)*.012*Math.sin(t*Math.PI),.008*(1-t));},(u,t)=>[u,t]);
const classicIcingGeometry=gridGeometry(256,112,(u,t)=>surface(u,t*TAU,.008+.0015*Math.sin(u*37+t*59)),(u,t)=>[u,1-t]);
const glazeUniform={value:1},coatYUniform={value:new THREE.Vector2(0,.55),ready:false},COAT_FN='float coatFront(vec3 p){float a=mod(atan(p.z,p.x)+6.283185,6.283185)/6.283185;float hn=clamp((p.y-coatY.x)/max(.001,coatY.y-coatY.x),0.,1.);float side=1.-hn;float lag=.095*side*side+.007*sin(a*56.5+1.3)+.004*sin(a*144.5+.4)+.003*sin(p.y*40.);float tongue=pow(max(0.,sin(a*81.68+.7)),14.)*.045*side*side;return coatProgress-a-lag+tongue;}\n';
function glazeTextures(index){
 const w=1024,h=512,c=document.createElement('canvas'),b=document.createElement('canvas'),r=document.createElement('canvas');for(const t of [c,b,r]){t.width=w;t.height=h;}
 const cx=c.getContext('2d'),bx=b.getContext('2d'),rx=r.getContext('2d'),im=cx.createImageData(w,h),bi=bx.createImageData(w,h),ri=rx.createImageData(w,h);
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){
  const n=noise(x*.018,y*.025),medium=noise(x*.095,y*.13),fine=noise(x*.61,y*.55),grain=random(),p=(y*w+x)*4;
  const colour=245+(n-.5)*13+(medium-.5)*7;
  im.data[p]=im.data[p+1]=im.data[p+2]=colour;im.data[p+3]=index===3?clamp(75+(n-.5)*130+(fine-.5)*22,0,255):255;
  const bump=147+(medium-.5)*11+(fine-.5)*8+(grain-.5)*5;bi.data[p]=bi.data[p+1]=bi.data[p+2]=bump;bi.data[p+3]=255;
  const rough=96+n*48+fine*15;ri.data[p]=ri.data[p+1]=ri.data[p+2]=rough;ri.data[p+3]=255;
 }
 cx.putImageData(im,0,0);bx.putImageData(bi,0,0);rx.putImageData(ri,0,0);
 // Fruit flecks, toasted nut dust and tiny sugar crystals break up the reflections.
 for(let i=0;i<(index===0?1550:index===1?500:index===2?1800:1700);i++){
  const x=random()*w,y=random()*h,rad=.24+Math.pow(random(),3)*1.4;
  cx.fillStyle=index===0?'rgba(155,34,57,.24)':index===1?'rgba(203,151,105,.16)':index===2?'rgba(82,74,30,.23)':'rgba(255,255,255,.50)';cx.beginPath();cx.ellipse(x,y,rad,rad*(.4+random()*.6),random()*TAU,0,TAU);cx.fill();
  bx.fillStyle='rgba(195,195,195,.38)';bx.fillRect(x,y,rad,rad);
 }
 if(index===3){
  // Fine, irregular hairline fractures in the clear sugar crust.
  for(let i=0;i<550;i++){let x=random()*w,y=random()*h;cx.strokeStyle='rgba(255,255,255,.34)';cx.lineWidth=.35+random()*.65;cx.beginPath();cx.moveTo(x,y);for(let j=0;j<4;j++){x+=(random()-.5)*11;y+=random()*7;cx.lineTo(x,y);}cx.stroke();}
 }
 return {map:canvasTexture(c),bumpMap:canvasTexture(b,false),roughnessMap:canvasTexture(r,false)};
}
const glazeMaps=flavors.map((_,i)=>glazeTextures(i));
function icingMaterial(flavor,index){
 const material=new THREE.MeshPhysicalMaterial({...glazeMaps[index],color:flavor.icing,metalness:0,bumpScale:index===3?.009:index===2?.008:.006,roughness:index===1?.38:index===2?.47:.53,clearcoat:1,clearcoatRoughness:index===2?.21:index===1?.12:.16,envMapIntensity:index===1?1.05:.88,ior:1.46,side:THREE.DoubleSide,transparent:index===3,opacity:index===3?.73:1,depthWrite:index!==3});
 material.onBeforeCompile=shader=>{shader.uniforms.coatProgress=glazeUniform;shader.uniforms.coatY=coatYUniform;shader.vertexShader='uniform float coatProgress;uniform vec2 coatY;varying vec3 vCoatPosition;varying float vCoatD;\n'+COAT_FN+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvCoatPosition=position;float cd=coatProgress<.999?coatFront(position):1.;vCoatD=cd;float bead=smoothstep(0.,.022,cd)*(1.-smoothstep(.022,.085,cd))*.013;float taper=(1.-smoothstep(0.,.03,cd))*.012;transformed+=objectNormal*(bead-taper);');shader.fragmentShader='uniform float coatProgress;varying vec3 vCoatPosition;varying float vCoatD;\n'+shader.fragmentShader.replace('#include <clipping_planes_fragment>','#include <clipping_planes_fragment>\nif(coatProgress<.999 && vCoatD<0.)discard;').replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor*=mix(.45,1.,smoothstep(0.,.12,vCoatD));');};material.customProgramCacheKey=()=> 'doh-glaze-flow-v3-'+index;return material;
}
const dummy=new THREE.Object3D(),up=new THREE.Vector3(0,1,0),scratch=new THREE.Vector3();
const sprinkleGeometry=new THREE.CapsuleGeometry(.018,.075,5,9);
// Subtle tooling lines and imperfect tips make each sugar rod catch light unevenly.
{const p=sprinkleGeometry.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),r=1+.019*Math.sin(y*410)+.016*Math.sin(Math.atan2(z,x)*5);p.setXYZ(i,x*r,y,z*r);}sprinkleGeometry.computeVertexNormals();}
// Each chocolate chip has a rolled circular base, tapered shoulders and a bent tip.
function closeToppingNormals(geometry,columns,rows,axis){
 const n=geometry.attributes.normal,a=new THREE.Vector3(),b=new THREE.Vector3();
 for(let row=0;row<=rows;row++){const last=columns*(rows+1)+row;a.fromBufferAttribute(n,row);b.fromBufferAttribute(n,last);a.add(b).normalize();n.setXYZ(row,a.x,a.y,a.z);n.setXYZ(last,a.x,a.y,a.z);}
 for(let col=0;col<=columns;col++){
  const first=col*(rows+1),last=first+rows;
  if(axis==='y'){n.setXYZ(first,0,-1,0);n.setXYZ(last,.20,.9798,0);}
  else{n.setXYZ(first,0,0,1);n.setXYZ(last,0,0,-1);}
 }
 return geometry;
}
function chocolateChipGeometry(variant=0){
 const profile=[[0,0],[.050,0],[.070,.002],[.077,.009],[.076,.017],[.070,.029],[.060,.045],[.047,.066],[.031,.087],[.017,.108],[.006,.123],[0,.128]];
 const curve=new THREE.SplineCurve(profile.map(p=>new THREE.Vector2(...p)));
 const points=curve.getPoints(42).map(p=>new THREE.Vector2(Math.max(0,p.x),p.y));
 const geometry=new THREE.LatheGeometry(points,48),p=geometry.attributes.position;
 for(let i=0;i<p.count;i++){
  const x=p.getX(i),y=p.getY(i),z=p.getZ(i),t=clamp(y/.128),angle=Math.atan2(z,x);
  const groove=1+.010*Math.cos(angle*17+t*4)+.006*Math.sin(angle*31-t*8);
  p.setXYZ(i,x*groove+.022*Math.pow(t,3),y,z*groove+.006*Math.pow(t,4)*Math.sin(variant+1));
 }
 geometry.computeVertexNormals();return closeToppingNormals(geometry,48,42,'y');
}
// Shelled kernels lie lengthwise on the glaze. The upper groove separates two lobes.
// Lengthwise halves expose a flatter, golden cut face inside the papery skin edge.
function pistachioKernelGeometry(half=false,variant=0){
 const geometry=gridGeometry(56,40,(angle,t)=>{
  const theta=t*Math.PI,cross=Math.pow(Math.max(0,Math.sin(theta)),.84),z=Math.cos(theta)*.145;
  const asymmetry=1+.08*Math.cos(theta+variant)+.026*Math.sin(theta*7+variant);
  const fiber=1+.022*Math.sin(angle*14+theta*2)+.011*Math.sin(angle*27-theta*5);
  const x=.065*cross*Math.cos(angle)*asymmetry*fiber+.007*Math.sin(theta*2);
  const upper=Math.max(0,Math.sin(angle));
  const cleft=Math.exp(-Math.pow((x-.002*Math.sin(theta*3))/.009,2))*.014*cross*upper;
  let y=.045+(Math.sin(angle)>0?(half?.010:.044):.043)*cross*Math.sin(angle)*fiber;
  y-=cleft*(half?.26:1);if(half&&upper>.2)y+=.0015*Math.sin(theta*20)*cross;
  return new THREE.Vector3(x,y,z+.008*cross*Math.cos(angle));
 },(u,t)=>[u+variant*.23,t]);
 const colours=[],cutFace=[];const p=geometry.attributes.position;
 for(let i=0;i<p.count;i++){
  const x=p.getX(i),y=p.getY(i),z=p.getZ(i),nearTop=clamp((y-.044)/.017),seam=Math.exp(-Math.pow(x/.008,2))*nearTop*clamp(1-Math.pow(Math.abs(z)/.15,4));
  const c=new THREE.Color('#ffffff').lerp(new THREE.Color('#725329'),seam*.42);colours.push(c.r,c.g,c.b);
  cutFace.push(half?smooth(.043,.049,y):0);
 }
 geometry.setAttribute('color',new THREE.Float32BufferAttribute(colours,3));
 geometry.setAttribute('cutFace',new THREE.Float32BufferAttribute(cutFace,1));return closeToppingNormals(geometry,56,40,'z');
}
const toppingLoads=[],toppingTextureState={};
function toppingPhoto(path,name){
 toppingTextureState[name]='loading';let done;
 toppingLoads.push(new Promise(resolve=>{done=resolve;}));
 return new THREE.TextureLoader().load(path,texture=>{
  texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
  texture.anisotropy=Math.min(12,renderer.capabilities.getMaxAnisotropy());texture.needsUpdate=true;
  toppingTextureState[name]='ready';dirty=true;done();
 },undefined,()=>{toppingTextureState[name]='failed';dirty=true;done();});
}
const chocolatePhoto=toppingPhoto('https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/aura-2026-10-27/4a8fde2fbcde20640292a5215de4fd33a36164c10f0eda35c24a97770ad983ae.webp','chocolate');
const pistachioPhoto=toppingPhoto('https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/aura-2026-10-27/0b67817c664c1216f82da9d930b481d20a44d5c224ba0e2dc629ae5c5a0a2c77.webp','pistachio');
function toppingMicrotexture(nut){
 const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d'),im=ctx.createImageData(512,512);
 for(let y=0;y<512;y++)for(let x=0;x<512;x++){
  const grain=random(),n=noise(x*.16,y*(nut?.025:.14));
  const fiber=nut?Math.sin(x*.51+noise(x*.02,y*.008)*6)*8:Math.sin(y*.14+x*.2)*2;
  const value=128+(n-.5)*(nut?54:19)+(grain-.5)*(nut?20:14)+fiber,i=(y*512+x)*4;
  im.data[i]=im.data[i+1]=im.data[i+2]=value;im.data[i+3]=255;
 }
 ctx.putImageData(im,0,0);const texture=canvasTexture(c,false);texture.wrapS=texture.wrapT=THREE.RepeatWrapping;return texture;
}
const chipMaterial=new THREE.MeshPhysicalMaterial({map:chocolatePhoto,bumpMap:toppingMicrotexture(false),bumpScale:.0014,roughness:.64,clearcoat:.08,clearcoatRoughness:.55,envMapIntensity:.65,metalness:0});
const kernelMaterial=new THREE.MeshPhysicalMaterial({map:pistachioPhoto,bumpMap:toppingMicrotexture(true),bumpScale:.0036,roughness:.83,clearcoat:.07,clearcoatRoughness:.7,envMapIntensity:.48,vertexColors:true,metalness:0});
kernelMaterial.onBeforeCompile=shader=>{
 shader.uniforms.kernelFlesh={value:new THREE.Color('#ded477')};
 shader.vertexShader='attribute float cutFace;varying float vCutFace;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvCutFace=cutFace;');
 shader.fragmentShader='varying float vCutFace;uniform vec3 kernelFlesh;\n'+shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
  float fiberLight=dot(texture2D(map,vMapUv).rgb,vec3(.2126,.7152,.0722));
  diffuseColor.rgb=mix(diffuseColor.rgb,kernelFlesh*(.82+fiberLight*.55),vCutFace*.94);`);
};kernelMaterial.customProgramCacheKey=()=> 'doh-pistachio-cut-face-v3';
const chipGeometries=[0,1,2].map(chocolateChipGeometry);
const kernelGeometries=[pistachioKernelGeometry(false,0),pistachioKernelGeometry(true,1),pistachioKernelGeometry(false,2),pistachioKernelGeometry(true,3)];
function toppingAO(){const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=512;const ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,1024,512);return {canvas,ctx};}
function stampContact(ctx,u,v,radius,strength=.48){
 const [a,b]=icingBounds(u),x=u/TAU*1024,y=(1-(v-a)/(b-a))*512;
 for(const dx of [-1024,0,1024]){const xx=x+dx,shade=ctx.createRadialGradient(xx,y,0,xx,y,radius);shade.addColorStop(0,`rgba(0,0,0,${strength})`);shade.addColorStop(.45,`rgba(0,0,0,${strength*.45})`);shade.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=shade;ctx.fillRect(xx-radius,y-radius,radius*2,radius*2);}
}
function realisticToppings(index){
 const chocolate=index===1,count=chocolate?64:32,crumbCount=chocolate?0:68,mesh=new THREE.Group(),ao=toppingAO(),placed=[];
 const geometries=chocolate?chipGeometries:kernelGeometries,material=chocolate?chipMaterial:kernelMaterial;
 const batches=geometries.map(geometry=>new THREE.InstancedMesh(geometry,material,count+crumbCount));
 const used=geometries.map(()=>0);
 for(let i=0;i<count+crumbCount;i++){
  const crumb=i>=count,s=crumb?.15+Math.pow(random(),1.8)*.29:.88+random()*.30;
  let u,v,pos;
  for(let attempt=0;attempt<100;attempt++){
   u=random()*TAU;v=.52+random()*(Math.PI-1.04);pos=surface(u,v,.025);
   if(crumb||placed.every(p=>p.distanceTo(pos)>(chocolate?.185:.235)*s))break;
  }
  if(!crumb)placed.push(pos.clone());
  const normal=surfaceNormal(u,v),spin=random()*TAU;
  const q=new THREE.Quaternion().setFromUnitVectors(up,normal).multiply(new THREE.Quaternion().setFromAxisAngle(up,spin));
  // Some chips rest on their shoulders, revealing their characteristic circular bases.
  const sideways=chocolate&&i%4===0,tilt=sideways?.95+random()*.35:(random()-.5)*(chocolate?.30:.28);
  q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),tilt));
  pos.addScaledVector(normal,sideways?.052*s:chocolate?.001:-.002);
  dummy.position.copy(pos);dummy.quaternion.copy(q);dummy.scale.set(s*(.93+random()*.13),s,s*(.93+random()*.13));dummy.updateMatrix();
  const batch=i%geometries.length,slot=used[batch]++;batches[batch].setMatrixAt(slot,dummy.matrix);
  const tint=new THREE.Color().setRGB(.88+random()*.12,.88+random()*.10,.84+random()*.12);batches[batch].setColorAt(slot,tint);
  stampContact(ao.ctx,u,v,(chocolate?6.4:7.0)*s,crumb?.24:.55);
 }
 batches.forEach((batch,i)=>{batch.count=used[i];batch.frustumCulled=false;batch.castShadow=batch.receiveShadow=true;batch.instanceMatrix.needsUpdate=true;mesh.add(batch);});
 return {mesh,items:[],aoMap:canvasTexture(ao.canvas,false)};
}
function sprinkleSet(index){
 if(index===1||index===2)return realisticToppings(index);
 const cfg=flavors[index],count=index===0?255:0;
 const material=new THREE.MeshPhysicalMaterial({roughness:.43,metalness:0,clearcoat:.28,clearcoatRoughness:.35,envMapIntensity:.35});
 const mesh=new THREE.InstancedMesh(sprinkleGeometry,material,count),items=[],ao=toppingAO();mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.frustumCulled=false;mesh.castShadow=mesh.receiveShadow=true;
 for(let i=0;i<count;i++){
  const u=random()*TAU,v=.34+random()*(Math.PI-.68),normal=surfaceNormal(u,v),pos=surface(u,v,.027).addScaledVector(normal,.015),tangent=new THREE.Vector3(-Math.sin(u),0,Math.cos(u)),across=normal.clone().cross(tangent),spin=random()*TAU;
  const dir=tangent.multiplyScalar(Math.cos(spin)).addScaledVector(across,Math.sin(spin)).normalize(),q=new THREE.Quaternion().setFromUnitVectors(up,dir),s=.68+random()*.68;
  const scale=new THREE.Vector3(s*(.7+random()*.5),s*(.75+random()*.45),s),fall=new THREE.Vector3((random()-.5)*1.4,1.5+random()*3.7,(random()-.5)*1.4);items.push({pos,q,scale,fall,delay:random()*.35});
  dummy.position.copy(pos);dummy.quaternion.copy(q);dummy.scale.copy(scale);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);mesh.setColorAt(i,new THREE.Color(cfg.sprinkles[i%cfg.sprinkles.length]));stampContact(ao.ctx,u,v,3.3*s);
 }
 mesh.instanceMatrix.needsUpdate=true;return {mesh,items,aoMap:canvasTexture(ao.canvas,false)};
}
const donuts=flavors.map((flavor,index)=>{
 const group=new THREE.Group(),dough=new THREE.Mesh(doughGeometry,doughMaterial),material=icingMaterial(flavor,index),icing=new THREE.Group();
 if(index===3)icing.add(new THREE.Mesh(classicIcingGeometry,material));else icing.add(new THREE.Mesh(icingGeometry,material),new THREE.Mesh(edgeGeometry(false),material),new THREE.Mesh(edgeGeometry(true),material));
 const sprinkles=sprinkleSet(index);material.aoMap=sprinkles.aoMap;material.aoMapIntensity=.6;
 dough.castShadow=dough.receiveShadow=true;icing.children.forEach(mesh=>{mesh.receiveShadow=true;});
 group.add(dough,icing,sprinkles.mesh);scene.add(group);return {group,icing,sprinkles,material};
});
function updateSprinkles(donut,amount){donut.material.aoMapIntensity=.6*amount;donut.sprinkles.mesh.visible=amount>0;for(let i=0;i<donut.sprinkles.items.length;i++){const item=donut.sprinkles.items[i],t=smooth(item.delay,Math.min(.99,item.delay+.52),amount),offset=(1-t)*(1-t);dummy.position.copy(item.pos).addScaledVector(item.fall,offset);dummy.quaternion.copy(item.q);if(offset>0)dummy.rotateX(offset*5);dummy.scale.copy(item.scale).multiplyScalar(smooth(0,.045,amount));dummy.updateMatrix();donut.sprinkles.mesh.setMatrixAt(i,dummy.matrix);}donut.sprinkles.mesh.instanceMatrix.needsUpdate=true;}
const streamTime={value:0},streamMat=new THREE.MeshPhysicalMaterial({color:flavors[0].icing,roughness:.14,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.05,sheen:.35,sheenRoughness:.4,sheenColor:new THREE.Color('#ffd6e8')});
streamMat.onBeforeCompile=sh=>{sh.uniforms.uT=streamTime;sh.vertexShader='uniform float uT;\n'+sh.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nfloat sy=position.y+.5;float neck=mix(.78,1.15,pow(sy,.45));float ripple=1.+.08*sin(position.y*38.-uT*15.)+.04*sin(position.y*91.-uT*23.);float splay=1.+1.6*pow(1.-smoothstep(0.,.035,sy),2.);transformed.xz*=neck*ripple*splay;float sw=sin(sy*3.14159);transformed.x+=sin(position.y*6.-uT*4.2)*.016*sw;transformed.z+=cos(position.y*5.-uT*3.6)*.012*sw;');};
streamMat.customProgramCacheKey=()=>'doh-stream-v2';
const stream=new THREE.Mesh(new THREE.CylinderGeometry(.068,.068,1,32,90,true),streamMat);scene.add(stream);
const glazePool=new THREE.Mesh(new THREE.SphereGeometry(.13,40,20),streamMat);glazePool.scale.set(1,.34,1);scene.add(glazePool);
function shadowTexture(){const c=document.createElement('canvas');c.width=c.height=256;const ctx=c.getContext('2d'),gradient=ctx.createRadialGradient(128,128,0,128,128,124);gradient.addColorStop(0,'rgba(58,17,35,.4)');gradient.addColorStop(.35,'rgba(58,17,35,.20)');gradient.addColorStop(1,'rgba(58,17,35,0)');ctx.fillStyle=gradient;ctx.fillRect(0,0,256,256);return canvasTexture(c);}
const shadow=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({map:shadowTexture(),transparent:true,depthWrite:false,opacity:.6}));shadow.rotation.x=-Math.PI/2;scene.add(shadow);
const stageColors=flavors.map(f=>new THREE.Color(f.background));
const pinkColor=new THREE.Color('#ff98c9'),blueColor=new THREE.Color('#96c6ff'),yellowColor=new THREE.Color('#ffdf49'),background=new THREE.Color();
const chapterEls=$$('.chapter'),stepButtons=$$('[data-step]');
let active=-1,activeFlavor=-1,lastSprinkle=-1,lastBackground='';
function carouselIndex(p){return smooth(.285,.323,p)+smooth(.375,.413,p)+smooth(.465,.503,p);}
function updateCopy(p,index){const opacity=[1-smooth(.125,.185,p),smooth(.17,.22,p)*(1-smooth(.55,.6,p)),smooth(.60,.65,p)*(1-smooth(.78,.82,p)),smooth(.815,.86,p)];const current=p<.175?0:p<.6?1:p<.82?2:3;
 chapterEls.forEach((el,i)=>{const o=opacity[i];el.style.opacity=o.toFixed(4);el.classList.toggle('active',o>.5);el.inert=o<.5;el.setAttribute('aria-hidden',String(o<.5));});
 if(active!==current){stepButtons.forEach((button,i)=>{if(i===current)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});$('#chapter-label').textContent=['01 / LOVE AT FIRST BITE','02 / FOUR WAYS TO SAY YES','03 / DIPPED IN HAPPINESS','04 / THE SPRINKLE OF JOY'][current];active=current;}
 const flavor=Math.round(index);if(activeFlavor!==flavor){$('#flavor-name').textContent=flavors[flavor].name;$('#flavor-description').textContent=flavors[flavor].description;$('#flavor-number').textContent=`0${flavor+1} / 04`;$$('[data-flavor]').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===flavor)));activeFlavor=flavor;}
 $('.stage-word').style.opacity=(.4*(1-smooth(.13,.20,p))).toFixed(3);$('#scroll-progress').style.transform=`scaleX(${p})`;
}
function pose(p,time=0){const mobile=stage.clientWidth<=800,carPresence=smooth(.12,.23,p)*(1-smooth(.55,.625,p)),index=carouselIndex(p),process=smooth(.57,.635,p),finish=smooth(.80,.89,p);const f=clamp(Math.floor(index),0,3),next=Math.min(f+1,3);background.copy(pinkColor).lerp(stageColors[f].clone().lerp(stageColors[next],index-f),carPresence).lerp(blueColor,process).lerp(yellowColor,finish);const color='#'+background.getHexString();if(color!==lastBackground){stage.style.background=color;lastBackground=color;}
 const aspect=camera.aspect,heroY=.10;
 camera.position.set(0,mobile?2.7:3.3,mobile?11:10.2);look.set(0,0,0);camera.lookAt(look);
 const frameHeight=2*camera.position.distanceTo(look)*Math.tan(THREE.MathUtils.degToRad(camera.fov)*.5),frameWidth=frameHeight*aspect;
 const direction=camera.position.clone().sub(look).normalize(),right=new THREE.Vector3(0,1,0).cross(direction).normalize(),screenUp=direction.clone().cross(right).normalize();
 const heroOnly=1-smooth(.12,.23,p);const xNdc=mobile?mix(.30,0,carPresence):mix(mix(.41,.27,heroOnly),0,carPresence),yNdc=mobile?mix(-.36,-.025,carPresence):mix(mix(heroY,-.02,heroOnly),.04,carPresence);
 const center=new THREE.Vector3().addScaledVector(right,xNdc*frameWidth*.5).addScaledVector(screenUp,yNdc*frameHeight*.5);
 const targetDiameter=(mobile?Math.min(stage.clientWidth*.68,stage.clientHeight*.34):Math.min(stage.clientWidth*.45,stage.clientHeight*.67))*mix(1,mobile?1.06:1.2,heroOnly);
 const baseScale=(targetDiameter/stage.clientWidth)*frameWidth/3.05;
 const mainScale=baseScale*mix(1,mobile?.90:.85,carPresence),gap=mobile?3.65:4.1;
 const float=paused?0:Math.sin(time*.0009)*.055;
 // The original-glazed donut becomes the bare preparation donut in place.
 // Both meshes share the same pose at the handoff; no intersecting or teleporting rings.
 donuts.forEach(({group},i)=>{
  group.visible=true;group.scale.setScalar(mainScale);
  group.rotation.set(mix(.90,i===1||i===2?.53:1.08,carPresence),-.17+spin+Math.sin(time*.00035)*(paused?0:.022),mix(-.29,-.12,carPresence));
  if(autoA)group.rotateY(autoA);group.position.copy(center).addScaledVector(right,(i-index)*gap*mainScale);group.position.y+=float;
  if(p>=.57){
   group.visible=(i===3&&p<.637)||(i===0&&p>=.637);
   if(group.visible){
    group.position.copy(center);group.position.x=mix(center.x,mobile?0:frameWidth*.205,process);group.position.y=mix(center.y,mobile?-.78:0,process)+float;
    group.rotation.set(mix(mix(.90,1.08,carPresence),.22,process*(1-finish*.7)),mix(-.17,-.2,process),mix(mix(-.29,-.12,carPresence),mix(-.14,-.3,finish),process));
    group.scale.setScalar(mix(mainScale,baseScale*(mobile?.95:1.01),process));
   }
  }
 });
 donuts[3].material.opacity=.73*(1-smooth(.57,.632,p));
 // During the carousel, hidden neighbours remain outside the camera's framing.
 if(p<.125){donuts.forEach((d,i)=>{d.group.visible=i===0;});}
 if(!coatYUniform.ready){let lo=1e9,hi=-1e9;donuts[0].icing.traverse(o=>{if(o.geometry){o.geometry.computeBoundingBox();lo=Math.min(lo,o.geometry.boundingBox.min.y);hi=Math.max(hi,o.geometry.boundingBox.max.y);}});if(hi>lo){coatYUniform.value.set(lo,hi);coatYUniform.ready=true;}}
 const coating=p>=.637?smooth(.645,.775,p):1;glazeUniform.value=coating;streamTime.value=time*.001;
 donuts[0].icing.visible=coating>.001;
 const sprinkleAmount=process>0?smooth(.823,.956,p):1;
 if(Math.abs(sprinkleAmount-lastSprinkle)>.0002){updateSprinkles(donuts[0],sprinkleAmount);lastSprinkle=sprinkleAmount;}
 stream.visible=p>.646&&p<.777;glazePool.visible=stream.visible;
 if(stream.visible){const u=coating*TAU;donuts[0].group.updateMatrixWorld(true);scratch.copy(surface(u,Math.PI*.5,.058));donuts[0].group.localToWorld(scratch);const length=mix(6,.12,smooth(.763,.777,p));stream.scale.setScalar(1);stream.scale.y=length;stream.position.copy(scratch);stream.position.y+=length*.5;scratch.copy(surface(u,Math.PI*.5,.014));donuts[0].group.localToWorld(scratch);const pk=(1-smooth(.758,.777,p))*(1+.1*Math.sin(time*.011));glazePool.position.copy(scratch);glazePool.scale.set(pk,.34*pk,pk);}
 shadow.visible=true;shadow.position.copy(donuts[p>=.637?0:Math.round(index)].group.position);shadow.position.y-=1.6*baseScale;shadow.scale.set(3.7*baseScale,1.9*baseScale,1);shadow.material.opacity=.36;
 const litDonut=donuts[p>=.637?0:Math.round(index)].group;key.target.position.copy(litDonut.position);key.position.copy(litDonut.position).add(new THREE.Vector3(-4,6,7));
 updateCopy(p,index);canvas.dataset.progress=p.toFixed(4);canvas.dataset.flavor=flavors[Math.round(index)].name;canvas.dataset.glaze=coating.toFixed(4);canvas.dataset.sprinkles=sprinkleAmount.toFixed(4);
}
function resize(){const w=stage.clientWidth,h=stage.clientHeight,pr=renderer.getPixelRatio(),same=w===resize.w&&h===resize.h&&pr===resize.pr;resize.w=w;resize.h=h;resize.pr=pr;if(!same)renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();travel=Math.max(1,story.offsetHeight-h-(window.DohTail?DohTail():0));scrollUpdate();dirty=true;}
window.addEventListener('resize',resize,{passive:true});
let last=0,frames=0,raf=0;
function frame(now){raf=requestAnimationFrame(frame);if(document.hidden)return;const dt=Math.min((now-last)/1000,.05);last=now;const delta=target-progress;if(Math.abs(delta)>.000008){progress=reduced.matches?target:progress+delta*(1-Math.exp(-dt*12));dirty=true;}else if(progress!==target){progress=target;dirty=true;}
 const spinDelta=spinTarget-spin;if(Math.abs(spinDelta)>.0001){spin=reduced.matches?spinTarget:spin+spinDelta*(1-Math.exp(-dt*10));dirty=true;}
 if(!paused){const h=1-smooth(.12,.23,progress),near=Math.round(autoA/6.283185)*6.283185;autoA+=dt*.42*h;autoA+=(near-autoA)*(1-Math.exp(-dt*4))*(1-h);}
 const onStage=window.scrollY<story.offsetTop+story.offsetHeight-(window.DohTail?DohTail():0);
 if((dirty||(!paused&&onStage))&&!(window.DohCover&&DohCover())){pose(progress,paused?0:now);renderer.render(scene,camera);canvas.dataset.frame=String(++frames);dirty=false;}
}
resize();progress=target;pose(progress);renderer.render(scene,camera);if(!renderErrors.length)document.body.classList.add('scene-ready');requestAnimationFrame(frame);
document.addEventListener('visibilitychange',()=>{last=performance.now();dirty=true;});
canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();cancelAnimationFrame(raf);$('#error').hidden=false;});
canvas.addEventListener('webglcontextrestored',()=>location.reload());
window.addEventListener('pageshow',()=>{resize();dirty=true;});
// Optional, page-scoped navigation tools use exactly the same flavor controls.
const context=document.modelContext;
if(context?.registerTool){const lifecycle=new AbortController();const tool={name:'navigate_to_donut_flavor',title:'Explore a flavour',description:'Show one of four donut flavours in the 3D story. Does not place an order or take payment.',inputSchema:{type:'object',properties:{flavor:{type:'string',enum:['strawberry','chocolate','pistachio','original']}},required:['flavor'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},async execute(input){await Promise.all(toppingLoads);if(!input||typeof input!=='object'||Object.keys(input).some(k=>k!=='flavor'))throw new Error('Invalid input');const index=['strawberry','chocolate','pistachio','original'].indexOf(input.flavor);if(index<0)throw new Error('Unknown flavour');window.DohExperience?.selectFlavour(index);if(window.DohExperience&&!await window.DohExperience.assetsReady)throw new Error('An embedded image could not be decoded.');spinTarget=spin=0;const top=story.offsetTop+stops[index]*travel;window.scrollTo({top,behavior:'instant'});target=progress=stops[index];pose(progress);renderer.render(scene,camera);dirty=true;if(renderErrors.length)throw new Error(renderErrors[renderErrors.length-1]);if(Object.values(toppingTextureState).some(state=>state!=='ready'))throw new Error('A topping material could not be loaded.');if(canvas.dataset.photoTexture==='fallback')throw new Error('The dough texture could not be loaded.');return {flavor:flavors[index].name,action:'navigation'};}};try{Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});}
})();
