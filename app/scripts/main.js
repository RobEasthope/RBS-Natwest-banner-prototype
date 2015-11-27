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
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TimelineLite.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/BezierPlugin.min.js",
    initDynamicContent
  );
}

// Load JS dependencies
loadJSDependencies();

// Load dynamic content
function initDynamicContent() {
  // Enabler profile ID
  Enabler.setProfileId(1062200);

  // Stash dynamic content array with settings
  var devDynamicContent = {};
  devDynamicContent.Feed_320x480 = [{}];
  devDynamicContent.Feed_320x480[0]._id = 0;
  devDynamicContent.Feed_320x480[0].id = 1;
  devDynamicContent.Feed_320x480[0].reporting_label = '???';
  devDynamicContent.Feed_320x480[0].startDate = {};
  devDynamicContent.Feed_320x480[0].startDate.RawValue = '';
  devDynamicContent.Feed_320x480[0].startDate.UtcValue = 0;
  devDynamicContent.Feed_320x480[0].endDate = {};
  devDynamicContent.Feed_320x480[0].endDate.RawValue = '';
  devDynamicContent.Feed_320x480[0].endDate.UtcValue = 0;

  // Declare file assets
  devDynamicContent.Feed_320x480[0].content = {
    // Test content
    "bkg": { "Type": "file", "Url": "images/bkg.jpg"},
    "logo": { "Type": "file", "Url": "images/logo.png"},
    "f1": { "Type": "file", "Url": "images/f1.png"},
    "f2": { "Type": "file", "Url": "images/f2.png"},
    "s1": { "Type": "file", "Url": "images/s1.png"},
    "s2": { "Type": "file", "Url": "images/s2.png"},
    "s3": { "Type": "file", "Url": "images/s3.png"},
    "legals": { "Type": "file", "Url": "images/legals.png"},
    "f4": { "Type": "file", "Url": "images/f4.png"},
    "f5": { "Type": "file", "Url": "images/f5.png"},
    "button": { "Type": "file", "Url": "images/button.png"},
    "arrow": { "Type": "file", "Url": "images/arrow.png"},

  };

  // ???
  devDynamicContent.Feed_320x480[0].DEFAULT = true;
  Enabler.setDevDynamicContent(devDynamicContent);

  // Add dynamic assets to DOM
  // Vodafone rhombus
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['bkg']['Url'] + " id='bkg' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['logo']['Url'] + " id='logo' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['f1']['Url'] + " id='f1' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['f2']['Url'] + " id='f2' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['s1']['Url'] + " id='s1' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['s2']['Url'] + " id='s2' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['s3']['Url'] + " id='s3' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['f4']['Url'] + " id='f4' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['f5']['Url'] + " id='f5' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['arrow']['Url'] + " id='arrow' class='absolute'></img>";
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['button']['Url'] + " id='button' class='absolute'></img>";

  animationSequence();
}



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
// Init timeline
function animationSequence(tl){

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

// Wire up event listeners and onCLick events
// Restart animation sequence on orientation change
window.addEventListener('resize', function() {
  console.log('Restart animation');
  tl.restart();
}, false);

// Wire up openCampaignLink() to DOM element
document.getElementById('campaign-link').onclick = function(){
  openCampaignLink();
};

// Wire up legalSection() to DOM element
document.getElementById('closeLegalSection').onclick = function(){
  toggleLegalSection();
};
