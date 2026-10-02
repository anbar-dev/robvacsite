const menuButton=document.querySelector('.menu-toggle');
const primaryNav=document.querySelector('.primary-nav');
if(menuButton&&primaryNav){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Open navigation':'Close navigation');primaryNav.classList.toggle('is-open',!open)});primaryNav.addEventListener('click',event=>{if(event.target.closest('a')){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');primaryNav.classList.remove('is-open')}})}

const productCatalog={
  q10:{name:'Roborock Q10 S5+',fit:'A mapped daily vacuum with an auto-empty dock. A sensible starting point when hands-free mop cleaning and advanced object recognition are not your priorities.',url:'https://www.amazon.com/s?k=Roborock+Q10+S5%2B+Robot+Vacuum&tag=robvac93-20'},
  qrevo:{name:'Roborock Qrevo S5V',fit:'A balanced vacuum-and-mop setup with spinning pads and a multifunction dock that handles several routine chores.',url:'https://www.amazon.com/s?k=Roborock+Qrevo+S5V+Robot+Vacuum&tag=robvac93-20'},
  dreame:{name:'Dreame L40 Ultra Gen 2',fit:'A feature-rich fit for pet hair and carpet when you also want the dock to take care of mop washing and drying.',url:'https://www.amazon.com/s?k=Dreame+L40+Ultra+Gen+2+Robot+Vacuum&tag=robvac93-20'},
  saros:{name:'Roborock Saros 10R',fit:'The shortlist pick when low furniture and household clutter make navigation a bigger concern than keeping the upfront spend low.',url:'https://www.amazon.com/s?k=Roborock+Saros+10R+Robot+Vacuum&tag=robvac93-20'}
};
const finder=document.querySelector('#finder-form');
if(finder){finder.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(finder);const scores={q10:0,qrevo:0,dreame:0,saros:0};const add=(ids,points)=>ids.forEach(id=>scores[id]+=points);
  if(data.get('surface')==='carpet')add(['q10','dreame'],2);if(data.get('surface')==='hard')add(['qrevo','saros'],1);if(data.get('surface')==='mixed')add(['qrevo','dreame'],1);
  if(data.get('mess')==='pets')add(['q10','dreame'],3);if(data.get('mess')==='mop')add(['qrevo','dreame'],3);if(data.get('mess')==='clutter')add(['saros','dreame'],3);if(data.get('mess')==='simple')add(['q10','qrevo'],1);
  if(data.get('care')==='basic')add(['q10'],2);if(data.get('care')==='empty')add(['q10','qrevo','dreame'],1);if(data.get('care')==='full')add(['qrevo','dreame','saros'],2);
  const choice=Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];const product=productCatalog[choice];const result=document.querySelector('#finder-result');result.innerHTML=`<div><div class="result-overline">YOUR BEST PLACE TO START</div><h3>${product.name}</h3><p>${product.fit}</p><p class="link-disclosure">We may earn a commission if you buy through this Amazon link.</p></div><a class="button button-dark" href="${product.url}" target="_blank" rel="sponsored nofollow noopener">Check Amazon <span aria-hidden="true">↗</span></a>`;result.hidden=false;result.scrollIntoView({behavior:'smooth',block:'nearest'});
});}
