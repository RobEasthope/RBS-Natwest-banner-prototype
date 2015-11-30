'use strict';

// SETUP
//For JS dependencies for polite load
function loadJSDependencies() {
  head.load(
    "https://code.createjs.com/easeljs-0.8.1.min.js",
    "https://code.createjs.com/tweenjs-0.6.1.min.js",
    "https://code.createjs.com/movieclip-0.8.1.min.js",
    "https://code.createjs.com/preloadjs-0.4.1.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TimelineMax.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/BezierPlugin.min.js",
    initDynamicContent
  );
}

// Load JS dependencies immediately
loadJSDependencies();

// Load dynamic content
function initDynamicContent() {
  // Enabler profile ID
  Enabler.setProfileId(1062200);

  // Stash dynamic content array with settings
  var devDynamicContent = {};
  devDynamicContent.Feed_160x600 = [{}];
  devDynamicContent.Feed_160x600[0]._id = 0;
  devDynamicContent.Feed_160x600[0].id = 1;
  devDynamicContent.Feed_160x600[0].reporting_label = '???';
  devDynamicContent.Feed_160x600[0].startDate = {};
  devDynamicContent.Feed_160x600[0].startDate.RawValue = '';
  devDynamicContent.Feed_160x600[0].startDate.UtcValue = 0;
  devDynamicContent.Feed_160x600[0].endDate = {};
  devDynamicContent.Feed_160x600[0].endDate.RawValue = '';
  devDynamicContent.Feed_160x600[0].endDate.UtcValue = 0;

  // *

  // Declare file assets
  devDynamicContent.Feed_160x600[0].content = {
    // Test content
    "bkg": { "Type": "file", "Url": "bkg.jpg"},
    "logo": { "Type": "file", "Url": "logo.png"},
    "f1": { "Type": "file", "Url": "f1.png"},
    "f2": { "Type": "file", "Url": "f2.png"},
    "f3": { "Type": "file", "Url": "f3.png"},
    "f4": { "Type": "file", "Url": "f4.png"},
    "f5": { "Type": "file", "Url": "f5.png"},
    "button": { "Type": "file", "Url": "button.png"},
    "arrow": { "Type": "file", "Url": "arrow.png"},
    "legals": { "Type": "file", "Url": "legals.png"},
    "disclaimer": { "Type": "file", "Url": "disclaimer.png"}
  };

  // ???
  devDynamicContent.Feed_160x600[0].DEFAULT = true;
  Enabler.setDevDynamicContent(devDynamicContent);

  // Add dynamic assets to DOM
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['bkg']['Url'] + " id='bkg' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['logo']['Url'] + " id='logo' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['f1']['Url'] + " id='F1' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['f2']['Url'] + " id='F2' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['f3']['Url'] + " id='F3' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['f4']['Url'] + " id='F4' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['f5']['Url'] + " id='F5' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['button']['Url'] + " id='button' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['arrow']['Url'] + " id='arrow' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['legals']['Url'] + " id='legals' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['disclaimer']['Url'] + " id='disclaimer' class='absolute'></img>";

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

  // Animation timings
  var initialFadeIn = 0.4;
  var bkgAnimationTiming = 1;
  var frameAnimationTiming = 0.6;
  var holdTime = "+=2";
  var finalHoldTime = 3;

  // Init timeline
  var tl = new TimelineMax({repeat:1, repeatDelay: finalHoldTime});

  // *

  // Hide preloader
  tl.to('#preloader', 0, {css: { opacity: 0 }})
  .to('#preloader-bkg', initialFadeIn, {css: { opacity: 0 }})

  // Slide in background
  .to('#bkg', bkgAnimationTiming, {css: { left: 0 }})

  // Frame #1
  .to('#F1', frameAnimationTiming, {css: { top: 0, left: 0, opacity: 1 }})
  .to('#F1', frameAnimationTiming, {css: { top: movementDistance, opacity: 0 }}, holdTime)

  // Frame #2
  .to('#F2', frameAnimationTiming, {css: { top: 0, left: 0, opacity: 1 }})
  .to('#F2', frameAnimationTiming, {css: { top: movementDistance, opacity: 0 }}, holdTime)

  // Frame #3
  .to('#F3', frameAnimationTiming, {css: { top: 0, left: 0, opacity: 1 }})
  .to('#F3', frameAnimationTiming, {css: { top: movementDistance, opacity: 0 }}, holdTime)

  // Frame #4
  .to('#F4', frameAnimationTiming, {css: { top: 0, left: 0, opacity: 1 }})
  .to('#F4', frameAnimationTiming, {css: { top: movementDistance, opacity: 0 }}, holdTime)

  // Frame #5
  .to('#F5', frameAnimationTiming, {css: { top: 0, left: 0, opacity: 1 }}, 'f5')
  .to('#legals', frameAnimationTiming, {css: { top: 0, left: 0, opacity: 1 }}, 'f5')
  .to('#disclaimer', frameAnimationTiming, {css: { top: 0, left: 0, opacity: 1 }}, 'f5')
  .from('#button', frameAnimationTiming, {css: { scaleX: 0, scaleY: 0, opacity: 0 }}, 'f5')
  .to('#arrow', frameAnimationTiming, {css: { top: 0, left: 0, opacity: 1 }}, 'f5');
}

// Wire up event listeners and onClick events
// Wire up openCampaignLink() to DOM element
document.getElementById('campaign-link').onclick = function(){
  openCampaignLink();
};
