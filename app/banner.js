'use strict';

// SETUP
//For JS dependencies for polite load
function loadJSDependencies() {
  head.load(
    "https://s0.2mdn.net/ads/richmedia/studio/40257085/preloadjs-0.4.1.min.js",
    "https://s0.2mdn.net/ads/richmedia/studio/40257085/CSSPlugin.min.js",
    "https://s0.2mdn.net/ads/richmedia/studio/40257085/TweenLite.min.js",
    "https://s0.2mdn.net/ads/richmedia/studio/40257085/TimelineMax.min.js",
    initDynamicContent
  );
}

// Load JS dependencies immediately
loadJSDependencies();

// Load dynamic content
function initDynamicContent() {
  // Enabler profile ID
  Enabler.setProfileId(1064716);

  // Stash dynamic content array with settings
  devDynamicContent.Feed_160x600= [{}];
  devDynamicContent.Feed_160x600[0]._id = 0;
  devDynamicContent.Feed_160x600[0].id = 1;
  devDynamicContent.Feed_160x600[0].reportingLabel = "45102321_RBS_VIP-Lounges";
  devDynamicContent.Feed_160x600[0].startDate = {};
  devDynamicContent.Feed_160x600[0].startDate.RawValue = "";
  devDynamicContent.Feed_160x600[0].startDate.UtcValue = 0;
  devDynamicContent.Feed_160x600[0].endDate = {};
  devDynamicContent.Feed_160x600[0].endDate.RawValue = "";
  devDynamicContent.Feed_160x600[0].endDate.UtcValue = 0;
  devDynamicContent.Feed_160x600[0].Content_path = {"arrow.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40240601/23127894_20151201084933700_arrow.png"},"bkg.jpg":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40239636/23127894_20151201084940945_bkg.jpg"},"logo.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40239635/23127894_20151201084927609_logo.png"},"legals.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40239033/23127894_20151201084920037_legals.png"},"f5.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40239032/23127894_20151201084912828_f5.png"},"f4.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40238142/23127894_20151201084906857_f4.png"},"f3.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40240600/23127894_20151201084859482_f3.png"},"f2.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40238136/23127894_20151201084852435_f2.png"},"f1.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40238658/23127894_20151201084845685_f1.png"},"disclaimer.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40239633/23127894_20151201084837554_disclaimer.png"},"button.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40238382/23127894_20151201084830815_button.png"}};
  devDynamicContent.Feed_160x600[0].background_image = "bkg.jpg";
  devDynamicContent.Feed_160x600[0].logo_image = "logo.png";
  devDynamicContent.Feed_160x600[0].cta = "button.png";
  devDynamicContent.Feed_160x600[0].frame1 = "f1.png";
  devDynamicContent.Feed_160x600[0].frame2 = "f2.png";
  devDynamicContent.Feed_160x600[0].frame3 = "f3.png";
  devDynamicContent.Feed_160x600[0].frame4 = "f4.png";
  devDynamicContent.Feed_160x600[0].frame5 = "f5.png";
  devDynamicContent.Feed_160x600[0].frame5_disclaimer = "disclaimer.png";
  devDynamicContent.Feed_160x600[0].frame5_legals = "legals.png";
  devDynamicContent.Feed_160x600[0].arrow = "arrow.png";
  devDynamicContent.Feed_160x600[0].DEFAULT = true;
  Enabler.setDevDynamicContent(devDynamicContent);

  // *

  // Declare file assets
  // devDynamicContent.Feed_160x600[0].content = {
  //   // Test content
  //   "bkg": { "Type": "file", "Url": "bkg.jpg"},
  //   "logo": { "Type": "file", "Url": "logo.png"},
  //   "f1": { "Type": "file", "Url": "f1.png"},
  //   "f2": { "Type": "file", "Url": "f2.png"},
  //   "f3": { "Type": "file", "Url": "f3.png"},
  //   "f4": { "Type": "file", "Url": "f4.png"},
  //   "f5": { "Type": "file", "Url": "f5.png"},
  //   "button": { "Type": "file", "Url": "button.png"},
  //   "arrow": { "Type": "file", "Url": "arrow.png"},
  //   "legals": { "Type": "file", "Url": "legals.png"},
  //   "disclaimer": { "Type": "file", "Url": "disclaimer.png"}
  // };


  // Add dynamic assets to DOM
  console.log('>>>>>>>>>> '+devDynamicContent.Feed_160x600[0].Content_path[devDynamicContent.Feed_160x600[0].background_image]['Url'])

  document.getElementById("content").innerHTML += "<img src='" + dynamicContent.Feed_160x600[0].Content_path[dynamicContent.Feed_160x600[0].background_image]['Url'] + "' id='bkg' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].Content_path[dynamicContent.Feed_160x600[0].logo_image]['Url'] + " id='logo' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].Content_path[dynamicContent.Feed_160x600[0].frame1]['Url'] + " id='F1' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].Content_path[dynamicContent.Feed_160x600[0].frame2]['Url'] + " id='F2' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].Content_path[dynamicContent.Feed_160x600[0].frame3]['Url'] + " id='F3' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].Content_path[dynamicContent.Feed_160x600[0].frame4]['Url'] + " id='F4' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].Content_path[dynamicContent.Feed_160x600[0].frame5]['Url'] + " id='F5' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].Content_path[dynamicContent.Feed_160x600[0].cta]['Url'] + " id='button' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].Content_path[dynamicContent.Feed_160x600[0].arrow]['Url'] + " id='arrow' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].Content_path[dynamicContent.Feed_160x600[0].frame5_legals]['Url'] + " id='legals' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].Content_path[dynamicContent.Feed_160x600[0].frame5_disclaimer]['Url'] + " id='disclaimer' class='absolute'></img>";

  // Begin animation sequence
  animationSequence();
}

// *

// CAMPAIGN LINK
// Open campaign link
function openCampaignLink(){
  console.log('Open campaign link');
  Enabler.exit('clickthrough');
}

// LEGAL SECTION
// Open and close legal section functionality
function toggleLegalSection(){
  // Get legal section ID
  var legalSection = document.getElementById('legalSection');

  // Open legal section
  if (legalSection.classList.contains('legal-section-closed')) {
    legalSection.classList.remove('legal-section-closed');
    legalSection.classList.add('legal-section-open');
    console.log('Open legal section');
  } else {
    legalSection.classList.remove('legal-section-open');
    legalSection.classList.add('legal-section-closed');
    console.log('Close legal section');
  }
}

// *

// ANIMATIONS
function animationSequence(){

  // SETTINGS
  // Animation settings
  var movementDistance = 10;

  var entranceDistance = 0 - movementDistance;
  var exitDistance = movementDistance;

  var arrowMovementX = 0 - (movementDistance * 2);
  var arrowMovementY = movementDistance * 2;

  // Animation timings
  var initialFadeIn = 0.4;
  var bkgAnimationTiming = 1;
  var frameAnimationTiming = 0.5;
  var holdTime = '+=1.8';
  var finalHoldTime = '+=2';

  // Init timeline
  var tl = new TimelineMax();

  // *

  // Hide preloader
  tl.to('#preloader', 0, {css: { opacity: 0 }})
  .to('#preloader-bkg', initialFadeIn, {css: { opacity: 0 }})

  // LOOP ONE
  // Slide in background
  .to('#bkg', bkgAnimationTiming, {css: { left: 0 }})

  // Frame #1
  .from('#F1', frameAnimationTiming, {css: { top: entranceDistance, left: 0, opacity: 0 }})
  .to('#F1', frameAnimationTiming, {css: { top: exitDistance, opacity: 0 }}, holdTime)

  // Frame #2
  .from('#F2', frameAnimationTiming, {css: { top: entranceDistance, left: 0, opacity: 0 }})
  .to('#F2', frameAnimationTiming, {css: { top: exitDistance, opacity: 0 }}, holdTime)

  // Frame #3
  .from('#F3', frameAnimationTiming, {css: { top: entranceDistance, left: 0, opacity: 0 }})
  .to('#F3', frameAnimationTiming, {css: { top: exitDistance, opacity: 0 }}, holdTime)

  // Frame #4
  .from('#F4', frameAnimationTiming, {css: { top: entranceDistance, left: 0, opacity: 0 }})
  .to('#F4', frameAnimationTiming, {css: { top: exitDistance, opacity: 0 }}, holdTime)

  // Frame #5
  .from('#F5', frameAnimationTiming, {css: { top: entranceDistance, left: 0, opacity: 0 }}, 'f5')
  .from('#legals', frameAnimationTiming, {css: { top: 0, left: entranceDistance, opacity: 0 }}, 'f5')
  .from('#disclaimer', frameAnimationTiming, {css: { top: 0, left: entranceDistance, opacity: 0 }}, 'f5')
  .from('#button', frameAnimationTiming, {css: { scaleX: 0, scaleY: 0, opacity: 0 }}, 'f5')
  .from('#arrow', frameAnimationTiming, {css: { top: arrowMovementY, left: arrowMovementX, opacity: 0 }}, 'f5')

  // Dummy code to hold at final frame
  .to('#content', 0, {css: { left: 0 }}, finalHoldTime)

  // Fade out final frame
  .to('#F5', frameAnimationTiming, {css: { top: movementDistance, left: 0, opacity: 0 }},'f5-exit')
  .to('#legals', frameAnimationTiming, {css: { top: 0, left: 0, opacity: 0 }},'f5-exit')
  .to('#disclaimer', frameAnimationTiming, {css: { top: 0, left: 0, opacity: 0 }}, 'f5-exit')
  .to('#button', frameAnimationTiming, {css: { scaleX: 0, scaleY: 0, opacity: 0 }}, 'f5-exit')
  .to('#arrow', frameAnimationTiming, {css: { top: -10, left: 10, opacity: 0 }}, 'f5-exit')

  // *

  // LOOP TWO
  // Slide in background
  .to('#bkg', bkgAnimationTiming, {css: { left: 0 }})

  // Frame #1
  .fromTo('#F1', frameAnimationTiming, {css: { top: entranceDistance, left: 0, opacity: 0 }}, {css: { top: 0, left: 0, opacity: 1 }})
  .to('#F1', frameAnimationTiming, {css: { top: exitDistance, opacity: 0 }}, holdTime)

  // Frame #2
  .fromTo('#F2', frameAnimationTiming, {css: { top: entranceDistance, left: 0, opacity: 0 }}, {css: { top: 0, left: 0, opacity: 1 }})
  .to('#F2', frameAnimationTiming, {css: { top: exitDistance, opacity: 0 }}, holdTime)

  // Frame #3
  .fromTo('#F3', frameAnimationTiming, {css: { top: entranceDistance, left: 0, opacity: 0 }}, {css: { top: 0, left: 0, opacity: 1 }})
  .to('#F3', frameAnimationTiming, {css: { top: exitDistance, opacity: 0 }}, holdTime)

  // Frame #4
  .fromTo('#F4', frameAnimationTiming, {css: { top: entranceDistance, left: 0, opacity: 0 }}, {css: { top: 0, left: 0, opacity: 1 }})
  .to('#F4', frameAnimationTiming, {css: { top: exitDistance, opacity: 0 }}, holdTime)

  // Frame #5
  .fromTo('#F5', frameAnimationTiming, {css: { top: 0, left: 0, opacity: 0 }}, {css: { top: 0, left: 0, opacity: 1 }}, 'f5-final')
  .fromTo('#legals', frameAnimationTiming, {css: { top: 0, left: entranceDistance, opacity: 0 }}, {css: { top: 0, left: 0, opacity: 1 }}, 'f5-final')
  .fromTo('#disclaimer', frameAnimationTiming, {css: { top: 0, left: entranceDistance, opacity: 0 }}, {css: { top: 0, left: 0, opacity: 1 }}, 'f5-final')
  .fromTo('#button', frameAnimationTiming, {css: { scaleX: 0, scaleY: 0, opacity: 0 }}, {css: { scaleX: 1, scaleY: 1, opacity: 1 }}, 'f5-final')
  .fromTo('#arrow', frameAnimationTiming, {css: { top: arrowMovementY, left: arrowMovementX, opacity: 0 }}, {css: { top: 0, left: 0, opacity: 1 }}, 'f5-final');
}

// Wire up event listeners and onClick events
// Wire up openCampaignLink() to DOM element
document.getElementById('campaign-link').onclick = function(){
  openCampaignLink();
};
