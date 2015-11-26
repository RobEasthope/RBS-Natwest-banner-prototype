'use strict';

// SETUP
// Define JS dependencies
function loadJSDependencies() {
  head.load(
    'https://code.createjs.com/easeljs-0.8.1.min.js',
    'https://code.createjs.com/tweenjs-0.6.1.min.js',
    'https://code.createjs.com/movieclip-0.8.1.min.js',
    'https://code.createjs.com/preloadjs-0.4.1.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TimelineLite.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/BezierPlugin.min.js'
  );
}

// Define dynamic content
function initDynamicContent() {
  // Enabler profile ID
  Enabler.setProfileId(1062200);

  // Stash dynamic content array with settings
  var devDynamicContent = {};
  devDynamicContent.feed320x480 = [{}];
  devDynamicContent.feed320x480[0]._id = 0;
  devDynamicContent.feed320x480[0].id = 1;
  devDynamicContent.feed320x480[0].reporting_label = '???';
  devDynamicContent.feed320x480[0].startDate = {};
  devDynamicContent.feed320x480[0].startDate.RawValue = '';
  devDynamicContent.feed320x480[0].startDate.UtcValue = 0;
  devDynamicContent.feed320x480[0].endDate = {};
  devDynamicContent.feed320x480[0].endDate.RawValue = '';
  devDynamicContent.feed320x480[0].endDate.UtcValue = 0;

  // Declare dynamic content file assets
  devDynamicContent.feed320x480[0].content = {
    // Vodafone rhombus
    'bkg': { 'Type': 'file', 'Url': 'images/bkg.png'}
  };

  // ???
  devDynamicContent.feed320x480[0].DEFAULT = true;

  // ???
  Enabler.setDevDynamicContent(devDynamicContent);

  // Add dynamic assets to DOM
  // Bkg
  document.getElementById('bkg').innerHTML += "<img src=" + dynamicContent.feed320x480[0].content.bkg.png.Url + " id='rhombus' class='absolute portrait rhombus'> </img>";
}


// *


// ANIMATIONS
// Init timeline
var tl = new TimelineLite();

function animationSequence(){
  // Hide preloader
  tl.to('#preloader', 0, {css: { opacity: 1 }})

  // Background animation
  .to('#bkg', 1, {css: { left: 0, opacity: 1 }})

  // F1 - Copy
  .to('#F1', 1, {css: { left: 0, opacity: 1 }})
  // F2 - Copy
  .to('#F2', 1, {css: { left: 0, opacity: 1 }})
  // F3 - Stats 1/2/3/legalcopy
  .to('#S1', 1, {css: { left: 0, opacity: 1 }})
  .to('#S2', 1, {css: { left: 0, opacity: 1 }})
  .to('#S3', 1, {css: { left: 0, opacity: 1 }})
  .to('#legals', 1, {css: { left: 0, opacity: 1 }})
  // F4 - Copy
  .to('#F4', 1, {css: { left: 0, opacity: 1 }})
  // F5 - Copy/CTA button/Arrow
  .to('#F5', 1, {css: { left: 0, opacity: 1 }})
  .to('#cta', 1, {css: { left: 0, opacity: 1 }})
  .to('#arrow', 1, {css: { left: 0, opacity: 1 }});
}

// Restart animation sequence on orientation change
window.addEventListener('resize', function() {
  console.log('Restart animation');
  tl.restart();
}, false);


// *


// CAMPAIGN LINK
// Open campaign link
function openCampaignLink(){
  console.log('Open campaign link');
  Enabler.exit('clickthrough');
}

// Wire up openCampaignLink() to DOM element
document.getElementById('campaign-link').onclick = function(){
  openCampaignLink();
};


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

// Wire up legalSection() to DOM element
document.getElementById('closeLegalSection').onclick = function(){
  toggleLegalSection();
};


// *


// INITIALISE BANNER
// Load JS dependencies
loadJSDependencies();

// Load dynamic content
initDynamicContent();

// Start animation
animationSequence();
