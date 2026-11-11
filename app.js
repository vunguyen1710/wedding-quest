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
