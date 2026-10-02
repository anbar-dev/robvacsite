const menuButton=document.querySelector('.menu-toggle');
const primaryNav=document.querySelector('.primary-nav');
if(menuButton&&primaryNav){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Open navigation':'Close navigation');primaryNav.classList.toggle('is-open',!open)});primaryNav.addEventListener('click',event=>{if(event.target.closest('a')){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');primaryNav.classList.remove('is-open')}})}

const clearanceBuffer=.2;
const productCatalog={
  q10:{name:'Roborock Q10 S5+',fit:'A mapped daily vacuum with an auto-empty dock and a vibrating mop that lifts on carpet.',url:'https://www.amazon.com/dp/B0DWXF15GF?tag=robvac93-20',budgetTier:600,height:3.9,mopWash:false,tradeoff:'The dock empties dust but does not wash the mop; you will need to rinse the vibrating pad by hand. Obstacle sensing can still miss small items and cables.'},
  qrevo:{name:'Roborock Qrevo S5V',fit:'A balanced vacuum-and-mop setup with spinning pads and a multifunction dock that empties dust, washes and warm-air dries the mops, and refills the robot.',url:'https://www.amazon.com/dp/B0DSP8J476?tag=robvac93-20',budgetTier:900,height:3.8,mopWash:true,tradeoff:'Its 10 mm mop lift is designed for short-pile carpet, and the multifunction dock needs space and routine care.'},
  dreame:{name:'Dreame L40 Ultra Gen 2',fit:'A pet-and-carpet-focused vacuum with a dock that washes and hot-air dries the mops.',url:'https://www.amazon.com/dp/B0FVFL86M9?tag=robvac93-20',budgetTier:900,height:3.82,mopWash:true,tradeoff:'You still service clean and dirty water tanks. The TriCut brush and automatic solution dispenser are separate extras.'},
  saros:{name:'Roborock Saros 10R',fit:'A low-profile pick with advanced obstacle recognition for homes where clearance and clutter matter.',url:'https://www.amazon.com/dp/B0DHCJ571Z?tag=robvac93-20',budgetTier:1600,height:3.14,mopWash:true,tradeoff:'Its recognition is not foolproof on every cable or small object, and it sits in the shortlist’s premium spend tier.'}
};

function rankProducts(answers){
  const budgetCap=answers.budget==='any'?Infinity:Number(answers.budget);
  const inBudget=Object.keys(productCatalog).filter(id=>productCatalog[id].budgetTier<=budgetCap);
  const afterMop=inBudget.filter(id=>answers.care!=='full'||productCatalog[id].mopWash);
  const measuredGap=Number(answers.clearance);
  const candidates=afterMop.filter(id=>answers.clearanceMode!=='measured'||productCatalog[id].height+clearanceBuffer<=measuredGap+.0001);
  const blockers=[];
  if(!inBudget.length)blockers.push('The selected budget reference tier has no match in this shortlist. A current retailer discount may differ, but the finder does not assume one.');
  else if(!afterMop.length)blockers.push(`Your budget tier leaves ${inBudget.map(id=>productCatalog[id].name).join(' and ')}; that model does not wash its mop at the dock. The mop-washing options fall outside this reference tier.`);
  else if(!candidates.length)blockers.push('The models left by your budget and mop-care choices do not clear the measured gap with the finder’s 0.2-inch allowance above published body height. Recheck the measurement; the finder will not ignore either limit.');
  if(!candidates.length)return{ranked:[],blockers};

  const scores=Object.fromEntries(candidates.map(id=>[id,0]));
  const add=(ids,points)=>ids.forEach(id=>{if(id in scores)scores[id]+=points});
  if(answers.surface==='carpet')add(['q10','dreame'],2);
  if(answers.surface==='mixed')add(['qrevo','dreame'],1);
  if(answers.surface==='hard')add(['qrevo','saros'],1);
  if(answers.mess==='pets')add(['q10','dreame'],3);
  if(answers.mess==='mop')add(['qrevo','dreame'],3);
  if(answers.mess==='clutter')add(['saros','dreame'],3);
  if(answers.mess==='simple')add(['q10','qrevo'],2);
  if(answers.care==='basic')add(['q10'],2);
  if(answers.care==='empty')add(['q10'],1);
  const ranked=candidates.sort((a,b)=>scores[b]-scores[a]||productCatalog[a].budgetTier-productCatalog[b].budgetTier);
  return{ranked,scores,blockers};
}

function reasonsFor(id,answers){
  const product=productCatalog[id];
  const reasons=[];
  if(answers.clearanceMode==='measured'){
    const spare=(Number(answers.clearance)-product.height).toFixed(1);
    reasons.push(`Its published body height is ${product.height.toFixed(2)} in; your ${Number(answers.clearance).toFixed(1)}-in opening leaves ${spare} in above the robot, meeting the finder’s buffer.`);
  }
  const messReasons={
    pets:{q10:'You prioritized pet hair; the Q10 pairs dual anti-tangle brushes with auto-emptying.',qrevo:'You prioritized pet hair; the Qrevo uses a triple anti-tangle system.',dreame:'You prioritized pet hair; the Dreame has a rubber main brush, with an optional TriCut brush for a different hair-handling setup.',saros:'You prioritized pet hair; the Saros combines a DuoDivide main brush and an anti-tangle side brush.'},
    mop:{q10:'You prioritized sticky floors; the Q10 has a vibrating mop, but its pad needs hand-washing.',qrevo:'You prioritized sticky floors; its spinning mops and wash-and-dry dock suit regular mopping.',dreame:'You prioritized sticky floors; its dual mops and hot-water wash dock suit a more involved mopping routine.',saros:'You prioritized sticky floors; its spinning mops and dock wash-and-dry routine handle recurring mop care.'},
    clutter:{q10:'You prioritized cables and small objects; the Q10 has Reactive Tech sensing, but it can still miss small items.',qrevo:'You prioritized cables and small objects; the Qrevo has Reactive Tech sensing, though no robot guarantees cable avoidance.',dreame:'You prioritized cables and small objects; Dreame’s 3DAdapt structured-light system is designed to recognize obstacles.',saros:'You prioritized cables and small objects; the Saros combines 3D ToF and RGB obstacle recognition, which still is not foolproof.'},
    simple:{q10:'For daily dust, the Q10 keeps the setup simpler with mapped vacuuming and auto-emptying.',qrevo:'For daily dust on mixed floors, the Qrevo adds a dock that also manages mop care.',dreame:'For daily dust, the Dreame adds a more involved mop-washing dock and carpet-focused features.',saros:'For daily dust, the Saros adds a low body and advanced object recognition; those features may be more than you need.'}
  };
  if(messReasons[answers.mess]?.[id])reasons.push(messReasons[answers.mess][id]);
  const surfaceReasons={
    carpet:{q10:'Your carpet priority is served by a mop that lifts on carpet; the pad still needs hand-washing.',qrevo:'Your carpet priority is served by a 10 mm mop lift intended for short-pile carpet.',dreame:'Your carpet priority is served by mop lift and an intensive carpet-cleaning mode.',saros:'Your carpet priority is served by mop mounts that detach automatically for carpet.'},
    mixed:{q10:'Your mixed floors get mapped vacuuming and a mop that lifts on carpet.',qrevo:'You have mixed floors and this dock handles dust and routine mop care.',dreame:'You have mixed floors; the Dreame combines vacuuming with a wash-and-dry mop dock.',saros:'You have mixed floors; the Saros combines vacuuming with a dock that handles mop care.'},
    hard:{q10:'On hard floors, the Q10 adds a vibrating mop, with hand-washing left to you.',qrevo:'Your hard-floor priority pairs well with spinning mops and a wash-and-dry dock.',dreame:'Your hard-floor priority pairs well with dual mops and the dock’s hot-water wash routine.',saros:'Your hard-floor priority pairs well with spinning mops and the dock’s mop-care routine.'}
  };
  if(surfaceReasons[answers.surface]?.[id])reasons.push(surfaceReasons[answers.surface][id]);
  if(answers.care==='full'&&product.mopWash)reasons.push('You asked the dock to wash the mop; this model includes that function.');
  if(answers.care==='empty')reasons.push('You asked to reduce dustbin chores; this model has an auto-empty dock.');
  return reasons.slice(0,3);
}

function alternativeDifference(primaryId,alternativeId,answers){
  if(primaryId==='qrevo'&&alternativeId==='dreame'||primaryId==='dreame'&&alternativeId==='qrevo')return answers.mess==='pets'||answers.surface==='carpet'?'Lean toward the Dreame if pet hair and carpet are your bigger concern; choose the Qrevo for a balanced mixed-floor mop routine. Both need routine dock care.':'Choose the Qrevo for a balanced mixed-floor mop routine; choose the Dreame when you want its carpet-focused features and are comfortable servicing its water tanks.';
  if(primaryId==='saros'||alternativeId==='saros')return answers.mess==='clutter'?'The Saros is the low-profile, clutter-focused option. Choose the other model if its floor-care or upkeep strengths matter more; neither robot guarantees cable avoidance.':'The Saros is the low-profile, clutter-focused option. The other pick makes more sense when its floor-care strengths matter more than clearance.';
  if(primaryId==='q10'||alternativeId==='q10')return answers.mess==='pets'||answers.surface==='carpet'?'The Q10 is the lower reference-spend option with dual anti-tangle brushes and a carpet-lifting mop. Choose the other model if dock-based mop washing matters more.':'The Q10 is the lower reference-spend, simpler auto-empty choice. The other pick adds dock-based mop washing if that chore matters to you.';
  return'Compare their dock routines and carpet handling on the side-by-side page before choosing.';
}

const finder=document.querySelector('#finder-form');
if(finder){
  const steps=[...finder.querySelectorAll('.finder-step')];
  const feedback=finder.querySelector('#finder-feedback');
  const result=finder.querySelector('#finder-result');
  const clearanceModeInputs=[...finder.querySelectorAll('input[name="clearance-mode"]')];
  const clearanceDetails=finder.querySelector('#clearance-details');
  const clearanceInput=finder.querySelector('#clearance-input');
  let submissionAttempted=false;

  const updateClearanceControl=()=>{
    const measured=clearanceModeInputs.some(input=>input.checked&&input.value==='measured');
    clearanceDetails.hidden=!measured;
    clearanceInput.disabled=!measured;
    clearanceInput.required=measured;
  };
  const unansweredSteps=()=>steps.filter(step=>{
    const radios=[...step.querySelectorAll('input[type="radio"]')];
    if(radios.length&&!radios.some(input=>input.checked))return true;
    const numberInput=step.querySelector('input[type="number"]:required');
    return Boolean(numberInput&&!numberInput.validity.valid);
  });
  const updateFeedback=()=>{
    const missing=unansweredSteps();
    feedback.hidden=missing.length===0;
    feedback.textContent=missing.length
      ? `Please choose or complete an answer for: ${missing.map(step=>step.querySelector('legend').textContent.replace(/\s+/g,' ').trim()).join('; ')}.`
      : '';
  };
  const hideOldResult=()=>{
    result.hidden=true;
    if(submissionAttempted)updateFeedback();
  };

  updateClearanceControl();
  finder.addEventListener('invalid',()=>{
    submissionAttempted=true;
    updateFeedback();
  },true);
  finder.addEventListener('change',()=>{
    updateClearanceControl();
    hideOldResult();
  });
  clearanceInput.addEventListener('input',hideOldResult);
  finder.addEventListener('submit',event=>{
    event.preventDefault();
    submissionAttempted=true;
    const missing=unansweredSteps();
    if(missing.length){
      updateFeedback();
      missing[0].querySelector(':invalid')?.focus();
      return;
    }
    feedback.hidden=true;
    feedback.textContent='';
    const data=new FormData(finder);
    const answers=Object.fromEntries(data.entries());
    const {ranked,scores,blockers}=rankProducts(answers);
    if(!ranked.length){
      result.innerHTML=`<div class="no-fit-result"><div class="result-overline">NO SHORTLIST PICK MEETS EVERY REQUIREMENT</div><h3>We won’t push you to a pricier or less suitable model.</h3><p>${blockers.join(' ')}</p><p>Keep your budget and practical limits intact. If one requirement is flexible, review the comparison and decide what you can change before rerunning the finder.</p><a class="button button-outline" href="compare.html">Review the comparison <span aria-hidden="true">↗</span></a></div>`;
      result.hidden=false;
      result.scrollIntoView({behavior:'smooth',block:'nearest'});
      return;
    }

    const primaryId=ranked[0];
    const primary=productCatalog[primaryId];
    const tied=ranked.length>1&&scores[primaryId]===scores[ranked[1]];
    const alternativeId=ranked.length>1&&scores[primaryId]-scores[ranked[1]]<=2?ranked[1]:null;
    const primaryReasons=reasonsFor(primaryId,answers);
    if(!primaryReasons.length)primaryReasons.push('This is the strongest match among the models that meet your selected budget and requirements.');
    const clearanceCaveat=answers.clearanceMode==='unknown'?'<p class="budget-caveat">You marked clearance as uncertain. Measure the tightest gap and compare it with the published body height before buying.</p>':'';
    const tieNote=tied?'<p class="tie-note">The leading picks tie on these stated priorities. Use the difference below to decide between them.</p>':'';
    let alternativeMarkup='';
    if(alternativeId){
      const alternative=productCatalog[alternativeId];
      const alternativeLabel=tied?'ALSO A TOP MATCH':'A CLOSE ALTERNATIVE';
      alternativeMarkup=`<section class="finder-alternative"><div class="result-overline">${alternativeLabel}</div><h4>${alternative.name}</h4><p>${alternativeDifference(primaryId,alternativeId,answers)}</p><p class="tradeoff"><strong>Trade-off:</strong> ${alternative.tradeoff}</p><a class="button button-outline" href="${alternative.url}" target="_blank" rel="sponsored nofollow noopener">Check Amazon <span aria-hidden="true">↗</span></a><p class="link-disclosure">We may earn a commission if you buy through this Amazon link.</p></section>`;
    }
    const resultLabel=tied?'TIED TOP MATCH':'YOUR BEST PLACE TO START';
    result.innerHTML=`<section class="finder-primary"><div class="result-overline">${resultLabel} · WITHIN YOUR REFERENCE BUDGET</div><h3>${primary.name}</h3>${primaryReasons.map(reason=>`<p>${reason}</p>`).join('')}<p class="tradeoff"><strong>Trade-off:</strong> ${primary.tradeoff}</p><p class="budget-caveat">Budget fit uses broad, non-sale reference tiers, not a live Amazon price or guarantee. Check the exact listing, seller, and bundle before buying.</p>${clearanceCaveat}${tieNote}<a class="button button-dark" href="${primary.url}" target="_blank" rel="sponsored nofollow noopener">Check Amazon <span aria-hidden="true">↗</span></a><p class="link-disclosure">We may earn a commission if you buy through this Amazon link.</p></section>${alternativeMarkup}`;
    result.hidden=false;
    result.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
}
