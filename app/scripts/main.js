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
  // What is all this? Possibly good defaults mixed in with old code
  Enabler.setProfileId(1062200);
  var devDynamicContent = {};
  devDynamicContent.Feed_320x480 = [{}];
  devDynamicContent.Feed_320x480[0]._id = 0;
  devDynamicContent.Feed_320x480[0].id = 1;
  devDynamicContent.Feed_320x480[0].reporting_label = "REPORTING_LABEL";
  devDynamicContent.Feed_320x480[0].startDate = {};
  devDynamicContent.Feed_320x480[0].startDate.RawValue = "";
  devDynamicContent.Feed_320x480[0].startDate.UtcValue = 0;
  devDynamicContent.Feed_320x480[0].endDate = {};
  devDynamicContent.Feed_320x480[0].endDate.RawValue = "";
  devDynamicContent.Feed_320x480[0].endDate.UtcValue = 0;
  devDynamicContent.Feed_320x480[0].youtubeId = "";

  // Declare file assets
  devDynamicContent.Feed_320x480[0].content = {
    // Vodafone rhombus
    "super-rhombus.png": { "Type": "file", "Url": "images/super-rhombus.png"},

    // Portrait assets
    "voda-logo-p.png": { "Type": "file", "Url": "images/portrait/voda-logo-p.png" },
    "voda-logo-copy-p.png": { "Type": "file", "Url": "images/portrait/voda-logo-copy-p.png"},
    "terms-p.png": { "Type": "file", "Url": "images/portrait/terms-p.png" },
    "gear-p.png": { "Type": "file", "Url": "images/portrait/gear-p.png"},
    "headphones-p.png": { "Type": "file", "Url": "images/portrait/headphones-p.png"},
    "main-title-p.png": { "Type": "file", "Url": "images/portrait/main-title-p.png"},
    "cta-button-p.png": { "Type": "file", "Url": "images/portrait/cta-button-p.png"},

    // Landscape assets
    "voda-logo-l.png": { "Type": "file", "Url": "images/landscape/voda-logo-l.png" },
    "voda-logo-copy-l.png": { "Type": "file", "Url": "images/landscape/voda-logo-copy-l.png"},
    "terms-l.png": { "Type": "file", "Url": "images/landscape/terms-l.png" },
    "gear-l.png": { "Type": "file", "Url": "images/landscape/gear-l.png"},
    "headphones-l.png": { "Type": "file", "Url": "images/landscape/headphones-l.png"},
    "main-title-l.png": { "Type": "file", "Url": "images/landscape/main-title-l.png"},
    "cta-button-l.png": { "Type": "file", "Url": "images/landscape/cta-button-l.png"},

  };

  // ???
  devDynamicContent.Feed_320x480[0].DEFAULT = true;
  Enabler.setDevDynamicContent(devDynamicContent);

  // Add dynamic assets to DOM
  // Vodafone rhombus
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['super-rhombus.png']['Url'] + " id='rhombus' class='absolute portrait rhombus'></img>";

  // Portrait image assets
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['voda-logo-p.png']['Url'] + " id='voda-logo-p' class='absolute portrait voda-logo'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['voda-logo-copy-p.png']['Url'] + " id='voda-logo-copy-p' class='absolute portrait voda-logo-copy'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['terms-p.png']['Url'] + " id='terms-p' class='absolute portrait terms'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['gear-p.png']['Url'] + " id='gear-p' class='absolute portrait gear'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['headphones-p.png']['Url'] + " id='headphones-p' class='absolute portrait headphones'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['main-title-p.png']['Url'] + " id='main-title-p' class='absolute portrait main-title'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['cta-button-p.png']['Url'] + " id='cta-button-p' class='absolute portrait cta-button'></img>";

  // Landscape image assets
  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['voda-logo-l.png']['Url'] + " id='voda-logo-l' class='absolute landscape voda-logo'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['voda-logo-copy-l.png']['Url'] + " id='voda-logo-copy-l' class='absolute landscape voda-logo-copy'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['terms-l.png']['Url'] + " id='terms-l' class='absolute landscape terms'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['gear-l.png']['Url'] + " id='gear-l' class='absolute landscape gear'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['headphones-l.png']['Url'] + " id='headphones-l' class='absolute landscape headphones'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['main-title-l.png']['Url'] + " id='main-title-l' class='absolute landscape main-title'></img>";

  document.getElementById("content").innerHTML += "<img src=" + dynamicContent.Feed_320x480[0].content['cta-button-l.png']['Url'] + " id='cta-button-l' class='absolute landscape cta-button'></img>";

  animation();
}

// Open campaign link
function openCampaignLink(){
  console.log('Open campaign link');
  Enabler.exit('clickthrough');
};

// Open and close legal section
function legalSection(){
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
};

// PORTRAIT & LANDSCAPE ANIMATIONS
// Init timeline
function animation(){
  var tl = new TimelineLite();

  // Start timeline and rotate rhombus
  tl.to("#rhombus", 1, { rotation: "360"})
    // Call in Voda title copy and terms at the same time
    .to(".voda-logo-copy", 0.4, {css: { transform: "translateZ(100px)" }})
    .to(".voda-logo-copy", 0.4, {css:{opacity: 1}}, "voda-logo-copy")
    .to(".terms", 0.4, {css:{opacity: 1}}, "voda-logo-copy")

    // Call in the rest of the assets
    .to(".gear", 1, {css:{left: 0}})
    .to(".headphones", 0.6, {css:{top: 0}})
    .to(".main-title", 0.4, {css:{opacity: 1}})
    .to(".cta-button", 0.4, {css:{opacity: 1}});

  // Restart animation sequence on orientation change
  window.addEventListener("resize", function() {
    console.log("Restart animation");
  	tl.restart();
  }, false);
};
