'use strict';

// SETUP
// Declare variables for DoubleClick
var devDynamicContent = {};

// Declare variables for preloader
var manifest =[];
var loader;
var loadedImages = {};


//For JS dependencies for polite load
function loadJSDependencies() {
  head.load(
    "https://s0.2mdn.net/ads/richmedia/studio/40257085/preloadjs-0.6.1.min.js",
    "https://s0.2mdn.net/ads/richmedia/studio/40257085/CSSPlugin.min.js",
    "https://s0.2mdn.net/ads/richmedia/studio/40257085/TweenLite.min.js",
    "https://s0.2mdn.net/ads/richmedia/studio/40257085/TimelineMax.min.js",

    // Start loading of dynamic content immediately
    initDynamicContent
  );
}

// Load JS dependencies immediately
loadJSDependencies();

// Load dynamic content
function initDynamicContent() {
  // Enabler profile ID
  Enabler.setProfileId(1064719);

  devDynamicContent.Feed_300x600= [{}];
  devDynamicContent.Feed_300x600[0]._id = 0;
  devDynamicContent.Feed_300x600[0].id = 1;
  devDynamicContent.Feed_300x600[0].reportingLabel = "45102321_NW_VIP-Lounges";
  devDynamicContent.Feed_300x600[0].startDate = {};
  devDynamicContent.Feed_300x600[0].startDate.RawValue = "";
  devDynamicContent.Feed_300x600[0].startDate.UtcValue = 0;
  devDynamicContent.Feed_300x600[0].endDate = {};
  devDynamicContent.Feed_300x600[0].endDate.RawValue = "";
  devDynamicContent.Feed_300x600[0].endDate.UtcValue = 0;
  devDynamicContent.Feed_300x600[0].Content_path = {"logo.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40242685/23127894_20151201103143163_logo.png"},"legals.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40243606/23127894_20151201103135170_legals.png"},"f4.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40243605/23127894_20151201103123459_f4.png"},"f2.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40243139/23127894_20151201103110513_f2.png"},"f1.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40242945/23127894_20151201103102177_f1.png"},"disclaimer.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40243043/23127894_20151201103053827_disclaimer.png"},"button.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40243604/23127894_20151201103047275_button.png"},"bkg.jpg":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40242681/23127894_20151201103039563_bkg.jpg"},"arrow.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40242944/23127894_20151201103032245_arrow.png"},"f3.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40242946/23127894_20151201103117251_f3.png"},"f5.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/40239032/23127894_20151201084912828_f5.png"}};
  devDynamicContent.Feed_300x600[0].background_image = "bkg.jpg";
  devDynamicContent.Feed_300x600[0].logo_image = "logo.png";
  devDynamicContent.Feed_300x600[0].cta = "button.png";
  devDynamicContent.Feed_300x600[0].frame1 = "f1.png";
  devDynamicContent.Feed_300x600[0].frame2 = "f2.png";
  devDynamicContent.Feed_300x600[0].frame3 = "f3.png";
  devDynamicContent.Feed_300x600[0].frame4 = "f4.png";
  devDynamicContent.Feed_300x600[0].frame5 = "f5.png";
  devDynamicContent.Feed_300x600[0].frame5_disclaimer = "disclaimer.png";
  devDynamicContent.Feed_300x600[0].frame5_legals = "legals.png";
  devDynamicContent.Feed_300x600[0].arrow = "arrow.png";
  devDynamicContent.Feed_300x600[0].DEFAULT = true;

  Enabler.setDevDynamicContent(devDynamicContent);

  // Loop through assets to generate preload manifest list
  for (var key in dynamicContent.Feed_300x600[0].Content_path){
    var assetsObj = {};
    assetsObj.src = dynamicContent.Feed_300x600[0].Content_path[key]['Url'];
    assetsObj.id = key;
    manifest.push(assetsObj);
  }

  // Preloader functions
  loader = new createjs.LoadQueue(true,null,true);
  loader.addEventListener("fileload", handleFileLoad);
  loader.addEventListener("complete", handleComplete);
  loader.loadManifest(manifest);
}

// *

function handleFileLoad(evt) {
  if (evt.item.type == "image") { loadedImages[evt.item.id] = evt.result; }
}

// List assets and ID's for DOM insertion
function prepAssets(){
  // Bkg
  document.getElementById("content").innerHTML += "<div id='bkg'></div>";
  document.getElementById('bkg').appendChild(loadedImages[dynamicContent.Feed_300x600[0].background_image]);
  // Logo
  document.getElementById("content").innerHTML += "<div id='logo'></div>";
  document.getElementById('logo').appendChild(loadedImages[dynamicContent.Feed_300x600[0].logo_image]);
  // F1
  document.getElementById("content").innerHTML += "<div id='F1'></div>";
  document.getElementById('F1').appendChild(loadedImages[dynamicContent.Feed_300x600[0].frame1]);
  // F2
  document.getElementById("content").innerHTML += "<div id='F2'></div>";
  document.getElementById('F2').appendChild(loadedImages[dynamicContent.Feed_300x600[0].frame2]);
  // F3
  document.getElementById("content").innerHTML += "<div id='F3'></div>";
  document.getElementById('F3').appendChild(loadedImages[dynamicContent.Feed_300x600[0].frame3]);
  // F4
  document.getElementById("content").innerHTML += "<div id='F4'></div>";
  document.getElementById('F4').appendChild(loadedImages[dynamicContent.Feed_300x600[0].frame4]);
  // F5
  document.getElementById("content").innerHTML += "<div id='F5'></div>";
  document.getElementById('F5').appendChild(loadedImages[dynamicContent.Feed_300x600[0].frame5]);
  // CTA button
  document.getElementById("content").innerHTML += "<div id='button'></div>";
  document.getElementById('button').appendChild(loadedImages[dynamicContent.Feed_300x600[0].cta]);
  // Arrow
  document.getElementById("content").innerHTML += "<div id='arrow'></div>";
  document.getElementById('arrow').appendChild(loadedImages[dynamicContent.Feed_300x600[0].arrow]);
  // Legal copy (Frame 5)
  document.getElementById("content").innerHTML += "<div id='legals'></div>";
  document.getElementById('legals').appendChild(loadedImages[dynamicContent.Feed_300x600[0].frame5_legals]);
  // Disclaimer copy (Frame 5)
  document.getElementById("content").innerHTML += "<div id='disclaimer'></div>";
  document.getElementById('disclaimer').appendChild(loadedImages[dynamicContent.Feed_300x600[0].frame5_disclaimer]);
}

// *

// CAMPAIGN LINK
// Open campaign link
function openCampaignLink(){
  console.log('Open campaign link');
  Enabler.exit('clickthrough');
}

// *

// ANIMATIONS
function animationSequence(){
  // SETTINGS
  // Animation settings
  var movementDistance = 10;

  // Bit of math to cover element entrances and exits
  var entranceDistance = 0 - movementDistance;
  var exitDistance = movementDistance;

  // Arrow/Chevron
  var arrowMovementX = 0 - (movementDistance * 2);
  var arrowMovementY = movementDistance * 2;

  // Animation timings
  var initialFadeIn = 0.4;
  var bkgAnimationTiming = 1;
  var frameAnimationTiming = 0.5;
  var holdTime = '+=1.8';
  var finalHoldTime = '+=2';

  // *

  // Init timeline
  var tl = new TimelineMax();

  // TIMELINE
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

// *

// Wire up event listeners and onClick events
// Wire up openCampaignLink() to DOM element
document.getElementById('campaign-link').onclick = function(){
  openCampaignLink();
};

// WE ARE GO! a.k.a Init banner...
function handleComplete() {
  // Load assets
  prepAssets();

  // Start animation sequence
  animationSequence();
}
