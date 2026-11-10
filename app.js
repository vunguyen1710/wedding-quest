(() => {
'use strict';
const $ = id => document.getElementById(id);
const site=$('site'), entry=$('entry'), gate=$('envelope'), seal=$('openInvitation');
const CFG=window.WEDDING_CONFIG||{};
const groom=CFG.groom||'Vũ', bride=CFG.bride||'Thương';
const weddingDate=new Date(CFG.weddingDate||'2027-02-14T17:30:00+07:00');
const guest=new URLSearchParams(location.search).get('to');
const family=CFG.family||{};
const familyFields={groomParents:'groomParents',groomFamilyAddress:'groomAddress',brideParents:'brideParents',brideFamilyAddress:'brideAddress',groomFamilyTime:'groomTime',brideFamilyTime:'brideTime'};
for(const [id,key] of Object.entries(familyFields)){const value=family[key];if(typeof value==='string'&&value.trim())document.getElementById(id).textContent=value.trim()}
document.title=`${groom} & ${bride} | Thiệp cưới`;
const set=(id,value)=>{const el=$(id);if(el)el.textContent=value};
set('groomHero',groom);set('brideHero',bride);set('footerNames',`${groom} & ${bride}`);
if(guest){set('entryGuest',`Trân trọng gửi ${guest.slice(0,100)}`);set('heroGuest',`Thiệp mời dành cho ${guest.slice(0,100)}`)}
if(!isNaN(weddingDate.getTime())){
 const fmt=new Intl.DateTimeFormat('vi-VN',{day:'2-digit',month:'long',year:'numeric',timeZone:'Asia/Ho_Chi_Minh'});
 set('heroDate',fmt.format(weddingDate).toUpperCase());
 set('footerDate',new Intl.DateTimeFormat('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric',timeZone:'Asia/Ho_Chi_Minh'}).format(weddingDate).replaceAll('/',' · '));
}
function countdown(){
 let sec=Math.max(0,Math.floor((weddingDate.getTime()-Date.now())/1000));
 if(!Number.isFinite(sec))sec=0;
 set('days',String(Math.floor(sec/86400)).padStart(3,'0'));
 set('hours',String(Math.floor(sec%86400/3600)).padStart(2,'0'));
 set('mins',String(Math.floor(sec%3600/60)).padStart(2,'0'));
 set('secs',String(sec%60).padStart(2,'0'));
}
countdown();setInterval(countdown,1000);
let timers=[],busy=false;
function clearTimers(){timers.forEach(clearTimeout);timers=[]}
function after(ms,fn){timers.push(setTimeout(fn,ms))}
function open(){
 if(busy)return;
 busy=true;seal.disabled=true;
 site.classList.remove('is-hidden'); site.inert=true;
 gate.classList.add('seal-activated');
 after(1500,()=>{gate.classList.add('seal-complete','opened');entry.classList.add('opening')});
 after(4000,()=>entry.classList.add('leaving'));
 after(4480,()=>{entry.hidden=true;entry.style.display='none';entry.style.pointerEvents='none';site.inert=false;seal.disabled=false;busy=false;void 0});
}
seal.addEventListener('change',()=>{if(seal.checked)open()});
entry.addEventListener('click', event=>{
  if(busy || entry.hidden)return;
  if(event.target.closest('#openInvitation'))return;
  if(!seal.checked){seal.checked=true;open()}
});
entry.addEventListener('keydown',event=>{
  if((event.key==='Enter'||event.key===' ')&&!busy){event.preventDefault();seal.checked=true;open()}
});

$('replayOpening')?.addEventListener('click',()=>{
 clearTimers();busy=false;gate.classList.add('resetting');
 gate.classList.remove('seal-activated','seal-complete','opened');
 entry.classList.remove('opening','leaving');entry.hidden=false;entry.style.display='grid';entry.style.pointerEvents='auto';
 site.classList.add('is-hidden');site.inert=true;seal.checked=false;seal.disabled=false;
 window.scrollTo(0,0);void gate.offsetWidth;
 requestAnimationFrame(()=>requestAnimationFrame(()=>gate.classList.remove('resetting')));
});
const share=$('shareInvite');
share?.addEventListener('click',async()=>{
 const url=location.href.split('#')[0];
 if(navigator.share){try{await navigator.share({title:`${groom} & ${bride}`,url});return}catch{}}
 try{await navigator.clipboard.writeText(url);alert('Đã sao chép đường dẫn thiệp cưới.')}catch{prompt('Sao chép đường dẫn thiệp cưới:',url)}
});
const theme=$('themeToggle');
theme?.addEventListener('click',()=>{const next=document.body.dataset.theme==='day'?'night':'day';document.body.dataset.theme=next;theme.textContent=next==='day'?'☾':'☼'});

// V63: articulated mechanism animation, real-time SVG geometry, once on viewport entrance.
(function(){
  const section=document.getElementById('families'), svg=document.getElementById('famArt');
  if(!section||!svg)return;
  const $id=id=>document.getElementById(id);
  const pathIds=[['famRodLeft','famRodLeftShade','famRodLeftShine'],['famRodRight','famRodRightShade','famRodRightShine']];
  const joints=[$id('famJointsLeft'),$id('famJointsRight')];
  const lamp=[$id('famLampLeft'),$id('famLampRight')];
  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let started=false,finished=false,rafId=0,completeTimer=0,observer=null;
  const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
  const ease=t=>1-Math.pow(1-clamp(t),3);
  const oldLeft=[[54,74],[85,36],[121,106],[159,42],[196,74]];
  const rightOld=oldLeft.map(([x,y])=>[1000-x,y]);
  const leftEnd=[[54,74],[166,74],[278,74],[389,74],[500,74]];
  const rightEnd=leftEnd.map(([x,y])=>[1000-x,y]);
  function points(start,end,t){return start.map((p,i)=>[p[0]+(end[i][0]-p[0])*t,p[1]+(end[i][1]-p[1])*t])}
  function drawRod(side,pts){
    const d=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(2)+','+p[1].toFixed(2)).join(' ');
    pathIds[side].forEach(id=>$id(id).setAttribute('d',d));
    joints[side].innerHTML=pts.slice(1,-1).map(([x,y])=>'<circle cx="'+x.toFixed(2)+'" cy="'+y.toFixed(2)+'" r="7" fill="url(#famMetal)" stroke="#fff2cb" stroke-width="1.5"/><circle cx="'+x.toFixed(2)+'" cy="'+y.toFixed(2)+'" r="2.4" fill="#784219"/>').join('');
  }
  function frame(elapsed){
    const t=ease((elapsed-160)/1460);
    drawRod(0,points(oldLeft,leftEnd,t));
    drawRod(1,points(rightOld,rightEnd,t));
    const lampT=ease((elapsed-1900)/1020);
    lamp[0].setAttribute('transform','translate('+(500-250*lampT).toFixed(1)+' 74)');
    lamp[1].setAttribute('transform','translate('+(500+250*lampT).toFixed(1)+' 74)');
    if(elapsed>=1620)section.classList.add('fam-joined');
    if(elapsed>=2940)section.classList.add('fam-light-on');
    if(elapsed>=3180)section.classList.add('fam-info-on');
    if(elapsed>=4440){finished=true;rafId=0;return;}
  }
  function start(){
    if(started)return;started=true;
    if(observer)observer.disconnect();
    if(reduce){frame(5000);return;}
    const t0=performance.now();
    const animate=now=>{frame(now-t0);if(!finished)rafId=requestAnimationFrame(animate)};
    rafId=requestAnimationFrame(animate);
  }
  function check(){
    if(started||site.classList.contains('is-hidden')||site.inert)return;
    const r=section.getBoundingClientRect(),vh=innerHeight||document.documentElement.clientHeight;
    if(r.top<vh*.82&&r.bottom>vh*.12)start();
  }
  function reset(){
    if(rafId)cancelAnimationFrame(rafId);
    started=false;finished=false;
    section.classList.remove('fam-joined','fam-light-on','fam-info-on');
    frame(0);
    section.scrollIntoView({behavior:'smooth',block:'center'});
    setTimeout(start,350);
  }
  $id('famReplay')?.addEventListener('click',reset);
  // Non-JS default always displays text. Hide only after the script has initialized the SVG.
  frame(0);
  section.classList.add('fam-armed');
  if('IntersectionObserver' in window){
    observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)check()})},{threshold:[0,.08,.25]});
    observer.observe(section);
  }
  window.addEventListener('scroll',check,{passive:true});
  window.addEventListener('resize',check,{passive:true});
  window.addEventListener('touchmove',check,{passive:true});
  setInterval(()=>{if(!started)check()},650);
  if(reduce){section.classList.add('fam-info-on','fam-light-on','fam-joined');frame(5000)}
})();

// Compact ambient melody: only plays after a direct user tap.
let ctx=null,musicTimer=null,note=0;
const tones=[261.63,329.63,392,523.25,440,392,329.63,293.66];
$('musicToggle')?.addEventListener('click',async()=>{
 const button=$('musicToggle');
 if(musicTimer){clearInterval(musicTimer);musicTimer=null;set('musicIcon','♫');button.setAttribute('aria-label','Bật nhạc nền');return}
 try{
  const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
  ctx=ctx||new AC();await ctx.resume();
  function tick(){const osc=ctx.createOscillator(),g=ctx.createGain();osc.type='sine';osc.frequency.value=tones[note++%tones.length];g.gain.setValueAtTime(.0001,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.016,ctx.currentTime+.06);g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+.47);osc.connect(g);g.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+.5)}
  tick();musicTimer=setInterval(tick,620);set('musicIcon','♪');button.setAttribute('aria-label','Tắt nhạc nền');
 }catch(err){console.warn('Music unavailable',err)}
});
site.inert=true;
document.documentElement.classList.add('app-ready');
})();
