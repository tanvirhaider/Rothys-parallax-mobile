

// ------- Custom Code here ----------------------------------------------


window.parallaxSpeed = 3;
window.topPlacement = -20;
window.adHeightInformation = screen.height;
var parallaxPercent = 0;
var reversePercentage = 100;
var rev_per_offset = 100;
var bannerDiv;
var adId, rnd, uid;
var listenerQueue;
var creativeIFrameId; //window.parallaxSpeed = 3;
window.updatedPercentage;
window.breakpoint = 1;
var TL;
var pauseStats;
var safeframe;
var parentIframe;
var SFgeom;
var currentPercentageData = 0;
window.notsure = 100;

function receiveMessage(event) {
  if (event === undefined) {} else {
    var theData = event.data;
    var jsobj = JSON.parse(theData);
    try {window.adHeightInformation = jsobj.data.viewPort.Height;} catch (Error) {}
  }
}



function settingMobileDimension() {
  parentIframe = document.body.ownerDocument.defaultView.frameElement.parentElement.parentElement.parentElement;
  var winW = document.body.ownerDocument.defaultView.frameElement.parentElement.parentElement.parentElement.offsetWidth;
}

function setupDOM() {
  var stage = new Stage({
    id: "banner",
    class: "banner-style",
    click: {function: function _function() {EB.clickthrough();}}
  });

  var background = new Sprite({
    id: "background",
    class: "background-style",
    container: stage
  });

  var adContent = new Sprite({
    id: "adContent",
    class: "adContent-style",
    container: stage
  });

  var product = new Sprite({
    id: "product",
    class: "product-style",
    container: adContent.obj
  });

  var overlay = new Sprite({
    id: "overlay",
    class: "overlay-style",
    container: adContent.obj
  });

  var logo = new Sprite({
    id: "logo",
    class: "logo-style",
    container: overlay.obj
  });

  var header = new Sprite({
    id: "header",
    class: "header-style",
    container: overlay.obj,
    text: {content:"From marine plastic</br>to instant classic."}
  });

  var subheader = new Sprite({
    id: "subheader",
    class: "subheader-style",
    container: overlay.obj,
    text: {content:"A chic bag collection sustainably</br>knit with 100% recycled materials."}
  });

  var cta = new Sprite({
    id: "cta",
    class: "cta-style",
    container: overlay.obj,
    text: {content:"SHOP ROTHY'S"}
  });

 
} //this function handles the parallax

function setParallax() {
  
  window.addEventListener("message", function () {
    try {
      var msg = JSON.parse(arguments[0].data);

      if (msg.type == "ScrollEvent") {
        var pVal = 100 * msg.data.data.vPercent;
        var pValrounded = Math.round(pVal);
        parallaxPercent = 100 * Math.max(0, Math.min(1, msg.data.data.vPercent));
        console.log("current window height :: ", window.adHeightInformation);

        if (window.adHeightInformation > 600) {
          var calHeightinformation = window.adHeightInformation - 600;
          var percentageinformation = calHeightinformation / 12 + 100;
          var unitapplied = 100 / percentageinformation * msg.data.data.vPercent * 100; //parallaxPercent = percentageinformation * Math.max(0, Math.min(1, msg.data.data.vPercent));
        }

        var oneTenth = Number(parallaxPercent / 10); //reversePercentage = 100 - pVal - oneTenth;

        reversePercentage = 100 - unitapplied;
        var modified = reversePercentage + window.topPlacement;
        var oneThethRev = (reversePercentage - 34) * 4;
        var calculatedVal = Number(48 + oneTenth + Math.log(oneTenth) * 4);

        if (adConfig.DEBUG) {
          console.log("actual value: ", pVal);
          console.log("parallaxPercent: ", parallaxPercent); //console.log("unit applied: ", unitapplied);
          console.log("reverse value: ", reversePercentage); //console.log("height based cal: ",percentageinformation);
        } // new code to calculate offset

        var heightAfterOffset = calHeightinformation - (adConfig.parallax.top + adConfig.parallax.bottom);
        var per_info_offset = heightAfterOffset / 12 + window.notsure;
        var unit_offset = 100 / per_info_offset * msg.data.data.vPercent * 100;
        rev_per_offset = 100 - unit_offset;
        console.log("rev offset: ", reversePercentage);
        TweenMax.set("#background", {css: {top: reversePercentage / window.parallaxSpeed + window.topPlacement + "%"}
        });
      }
    } catch (err) {}
  }, false);
}

window.addEventListener("message", receiveMessage, false);
window.adkit.onReady(function (e) {adkit.onVisibilityChanged(function (visibilityInfo) {});});
window.addEventListener("message", function () {try {eventManager.apply(this, arguments);} catch (e) {}}, false);
window.addEventListener("load", checkIfAdKitReady);
