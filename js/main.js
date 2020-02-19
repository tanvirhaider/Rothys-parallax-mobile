"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stage =
/*#__PURE__*/
function () {
  function Stage(data) {
    _classCallCheck(this, Stage);

    var stage = document.createElement('div');

    if (data.id) {
      stage.setAttribute('id', data.id);
    } else {
      stage.setAttribute('id', "willow-ad-stage");
    }

    if (data.class) {
      stage.className += data.class;
    }

    this.stage = stage; // this.stageDefaultStyle();

    if (data.container) {
      var adContainer = document.querySelector(data.container);
      adContainer.appendChild(stage);
    } else {
      document.body.setAttribute('id', "ad-body");
      document.body.appendChild(stage);
    }

    if (data.click) {
      stage.addEventListener('click', data.click.function, false);
      stage.style.cursor = "pointer";
    }

    return stage;
  }

  _createClass(Stage, [{
    key: "stageDefaultStyle",
    value: function stageDefaultStyle() {
      // console.log("this.stage: ", this.stage);
      this.stage.style.margin = "0px";
      this.stage.style.padding = "0px";
    }
  }]);

  return Stage;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(data) {
    _classCallCheck(this, Sprite);

    var obj;
    var xval = 0;
    var yval = 0;
    var imgW, imgH;
    var style;

    if (data.element) {
      obj = document.createElement(data.element);
    } else {
      obj = document.createElement('div');
    }

    this.obj = obj;
    style = obj.style;

    if (data.id) {
      obj.setAttribute('id', data.id);
    } else {
      obj.setAttribute('id', '');
    }

    if (data.class) {
      obj.className += data.class;
    }

    if (data.position) {
      obj.style.position = data.position;
    }

    if (data.display) {
      obj.style.display = data.display;
    }

    if (data.width) {
      obj.width = data.width;
      obj.style.width = data.width + 'px';
    } else {
      this.width = 0;
    }

    if (data.height) {
      obj.height = data.height;
      obj.style.height = data.height + 'px';
    } else {
      this.height = 0;
    }

    if (data.image) {
      imgW = data.width + 'px';
      imgH = data.height + 'px';
      style.width = imgW;
      style.height = imgH;
      style.backgroundImage = 'url(' + data.image + ')';
      style.backgroundRepeat = 'no-repeat';

      if (!data.cover) {
        style.backgroundSize = imgW + ' ' + imgH;
      }
    }

    if (data.button) {
      var btn = document.createElement("button");

      if (data.button.text) {
        btn.innerHTML = data.button.text;
      }

      obj.appendChild(btn);
    } // text: {content:"Read More",color:"white",size:"14px",width:"200px",lineHeight:"100px",fontFamily:"Arial"}


    if (data.text) {
      if (data.text.color) {
        obj.style.color = data.text.color;
      }

      if (data.text.fontSize) {
        obj.style.fontSize = data.text.fontSize;
      }

      if (data.text.fontFamily) {
        obj.style.fontFamily = data.text.fontFamily;
      }

      if (data.text.maxWidth) {
        obj.style.maxWidth = data.text.width;
      }

      if (data.text.lineHeight) {
        obj.style.lineHeight = data.text.lineHeight;
      }

      if (data.text.fontWeight) {
        obj.style.fontWeight = data.text.fontWeight;
      }

      obj.innerHTML = data.text.content;
    }

    if (data.color) {
      imgW = data.width + 'px';
      imgH = data.height + 'px';
      style = obj.style;
      style.width = imgW;
      style.height = imgH;
      style.backgroundColor = data.color;
    } // gradient: {width:1024, height: 650, direction: "right", color1: "rgba(255,255,0,0)", color2: "rgba(255,10,0,1)" }


    if (data.gradient) {
      style = this.obj.style;
      style.width = data.gradient.width + "px";
      style.height = data.gradient.height + "px";
      style.background = '-webkit-linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
      style.background = '-o-linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
      style.background = '-moz-linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
      style.background = 'linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
    }

    if (data.container) {
      data.container.appendChild(obj);
    }

    if (data.border) {
      var borderObj = document.createElement('div');
      borderObj.setAttribute('id', data.id + "-Border");
      borderObj.style.width = data.width + 'px';
      borderObj.style.height = data.height + 'px';
      borderObj.style.position = 'absolute';
      borderObj.style.margin = '0px';
      borderObj.style.zIndex = 999999;
      borderObj.style.border = data.border.thickness + "px solid " + data.border.color + "";
      borderObj.style.boxSizing = "border-box";
      borderObj.style.pointerEvents = "none";

      if (data.border.radius) {
        borderObj.style.borderRadius = data.border.radius;
      }

      obj.appendChild(borderObj);
    }

    if (data.click) {
      //var obj = this.obj;
      obj.addEventListener('click', data.click.function, false);
      obj.style.cursor = "pointer";
    }

    if (data.over) {
      //var obj = this.obj;
      obj.addEventListener('mouseover', data.over.function, false);
      obj.style.cursor = "pointer";
    }

    if (data.out) {
      //var obj = this.obj;
      obj.addEventListener('mouseout', data.out.function, false);
      obj.style.cursor = "pointer";
    }

    if (data.mousemove) {
      //var obj = this.obj;
      obj.addEventListener('mousemove', data.mousemove.function, false); // obj.style.cursor="pointer";
    } // var rotationval = 0;


    if (data.x) {
      xval = data.x;
    }

    if (data.y) {
      yval = data.y;
    }

    if (data.z) {
      style = obj.style;
      style.zIndex = data.z;
    }

    if (data.x || data.y) {
      obj.style.transform = "translate(" + xval + "px," + yval + "px)";
    }

    if (data.mask) {
      obj.style.clip = 'rect(' + data.mask.y + 'px,' + (data.mask.x + data.mask.width) + 'px,' + (data.mask.y + data.mask.height) + 'px,' + data.mask.x + 'px)';
    }
  }

  _createClass(Sprite, [{
    key: "click",
    value: function click(f) {
      var obj = this.obj;
      obj.addEventListener('click', f);
      obj.style.cursor = "pointer";
    }
  }, {
    key: "over",
    value: function over(func) {
      var obj = this.obj;
      obj.addEventListener('mouseover', func);
      obj.style.cursor = "pointer";
    }
  }, {
    key: "out",
    value: function out(func) {
      var obj = this.obj;
      obj.addEventListener('mousemove', func);
    }
  }, {
    key: "html",
    value: function html(newtext) {
      var obj = this.obj;
      obj.innerHTML = newtext;
    }
  }, {
    key: "text",
    value: function text(newtext) {
      var obj = this.obj;
      obj.innerText = newtext;
    }
  }]);

  return Sprite;
}();
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function addCustomScriptEventListener(eventName, callback, interAd) {
  listenerQueue = listenerQueue || {};
  var data = {
    uid: uid,
    listenerId: Math.ceil(Math.random() * 1000000000),
    eventName: eventName,
    interAd: !!interAd,
    creativeIFrameId: creativeIFrameId
  };
  sendMessage("addCustomScriptEventListener", data);
  data.callback = callback;
  listenerQueue[data.listenerId] = data;
  return data.listenerId;
}

function sendMessage(type, data) {
  if (!data.type) data.type = type;

  window.EB._sendMessage(type, data);
}

function dispatchCustomScriptEvent(eventName, params) {
  params = params || {};
  params.uid = uid;
  params.eventName = eventName;
  params.creativeIFrameId = creativeIFrameId;
  sendMessage("dispatchCustomScriptEvent", params);
}

function removeCustomScriptEventListener(listenerId) {
  var params = {
    uid: uid,
    listenerId: listenerId,
    creativeIFrameId: creativeIFrameId
  };
  sendMessage("removeCustomScriptEventListener", params);

  if (listenerQueue[listenerId]) {
    delete listenerQueue[listenerId];
  }
}

function displayDimensions() {
  var iw = window.innerWidth;
  var ih = window.innerHeight; //add readout of parallax percentage

  var str = iw + "x" + ih + " | Parallax " + parallaxPercent + "%"; //dimensions.innerHTML = str;

  if (adConfig.DEBUG) {
    console.log(str);
  }
}

function setCreativeVersion() {
  sendMessage("setCreativeVersion", {
    creativeId: adConfig.id + " - " + adConfig.templateName,
    creativeVersion: adConfig.version,
    creativeLastModified: adConfig.lastModified,
    uid: uid
  });
}

function handleUserActionButtonClick(event) {
  EB.userActionCounter("UserAction");
}

function onPageScroll(event) {
  displayDimensions();
}

function eventManager(event) {
  var msg;

  if (_typeof(event) == "object" && event.data) {
    msg = JSON.parse(event.data);
  } else {
    // this is safe frame.
    msg = {
      type: event.type,
      data: event
    };
  }

  if (msg.type && msg.data && (!uid || msg.data.uid && msg.data.uid == uid)) {
    switch (msg.type) {
      case "sendCreativeId":
        creativeIFrameId = msg.data.creativeIFrameId;
        addCustomScriptEventListener('pageScroll', onPageScroll);
        sendMessage("dispatchScrollPos", {
          uid: uid
        });
        if (creativeContainerReady) creativeContainerReady();
        break;

      case "eventCallback":
        // Handle Callback
        var list = msg.data.listenerIds;
        var length = list.length;

        for (var i = 0; i < length; i++) {
          try {
            var t = listenerQueue[list[i]];
            if (!t) continue;
            t.callback(msg.data);
          } catch (e) {}
        }

        break;
    }
  }
}

function checkIfAdKitReady(event) {
  if (window.adkit) {
    adkit.onReady(initializeCreative);
  } else {
    initializeCreative();
  }
}

function initializeCreative(event) {
  EBG.pm.bind("sendCreativeId", function () {
    eventManager.apply(this, arguments);
  }, this);
  EBG.pm.bind("eventCallback", function () {
    eventManager.apply(this, arguments);
  }, this);
  (typeof Modernizr === "undefined" ? "undefined" : _typeof(Modernizr)) == "object" && (Modernizr.touch = Modernizr.touch || "ontouchstart" in window);
  initializeGlobalVariables();

  window.registerInteraction = function () {}; //overwrite rI function because it will never actually be called


  displayDimensions(); 

  setupDOM(); 

  setParallax();
}

function initializeGlobalVariables() {
  try {
    adId = EB._adConfig.adId;
  } catch (Error) {}

  try {
    rnd = EB._adConfig.rnd;
  } catch (Error) {}

  try {
    uid = EB._adConfig.uid;
  } catch (Error) {}
}

window.addEventListener("message", function () {
  try {
    eventManager.apply(this, arguments);
  } catch (e) {}
}, false);
window.addEventListener("load", checkIfAdKitReady);
"use strict";

// @codekit-prepend  "willow-js/stage.js"
// @codekit-prepend  "willow-js/sprite.js"
// @codekit-prepend  "sizmek.js"
var adConfig = {
  DEBUG: true,
  id: "DeluxeBanner",
  developer: "tanvir haider",
  version: "7.0",
  type: "parallax",
  // "parallax", "animated",
  lastModified: "2019-09-09",
  lastUploaded: "2019-09-09",
  templateName: "cf_deluxe_banner_basic_1x1_2.3_6266",
  parallax: {
    top: 0,
    bottom: 0
  }
};
console.log("not sure: ", adConfig.parallax.top);
window.adHeightInformation = screen.height;
/*******************
VARIABLES
*******************/

var parallaxPercent = 0;
var reversePercentage = 100;
var rev_per_offset = 100;
var bannerDiv;
var adId, rnd, uid;
var listenerQueue;
var creativeIFrameId; //window.rate = 3;

window.rate = 3;
window.mod = -20;
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
  //console.log('tanvir');
  if (event === undefined) {//console.log("event is undefined");
  } else {
    var theData = event.data;
    var jsobj = JSON.parse(theData);

    try {
      //	console.log("height of window: ",jsobj.data.viewPort.Height);
      window.adHeightInformation = jsobj.data.viewPort.Height;
    } catch (Error) {}
  }
}

window.addEventListener("message", receiveMessage, false);
window.adkit.onReady(function (e) {
  adkit.onVisibilityChanged(function (visibilityInfo) {//console.log("visibility percentage: ",visibilityInfo.percentage);
  });
});

function settingMobileDimension() {
  parentIframe = document.body.ownerDocument.defaultView.frameElement.parentElement.parentElement.parentElement;
  var winW = document.body.ownerDocument.defaultView.frameElement.parentElement.parentElement.parentElement.offsetWidth;
}

function setupDOM() {
  var stage = new Stage({
    id: "banner",
    // id for the stage
    class: "banner-style",
    // css class style for the stage
    click: {
      function: function _function() {
        if (adConfig.DEBUG) {
          console.log(" clickthrough clicked");
        }

        EB.clickthrough();
      }
    }
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
  var logo = new Sprite({
    id: "logo",
    class: "logo-style",
    container: adContent.obj
  });
} //this function handles the parallax


function setParallax() {
  if (adConfig.DEBUG) {
    console.log("parallax Debug init");
    console.log("ad version: ", adConfig.version);
  }

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
        var modified = reversePercentage + window.mod;
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
        TweenMax.set("#product", {
          css: {
            top: reversePercentage / window.rate + window.mod + "%"
          }
        });
      }
    } catch (err) {
      /*ignore messages not of the formatting/etc we're after...some may not be JSON*/
    }
  }, false);
}

//# sourceMappingURL=main.js.map
//alert(window.location);
