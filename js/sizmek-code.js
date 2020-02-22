

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
  var params = {uid: uid,listenerId: listenerId,creativeIFrameId: creativeIFrameId};
  sendMessage("removeCustomScriptEventListener", params);

  if (listenerQueue[listenerId]) {delete listenerQueue[listenerId];}
}

function displayDimensions() {
  var iw = window.innerWidth;
  var ih = window.innerHeight; //add readout of parallax percentage

  var str = iw + "x" + ih + " | Parallax " + parallaxPercent + "%"; //dimensions.innerHTML = str;
  if (adConfig.DEBUG) {console.log(str);}
}

function setCreativeVersion() {
  sendMessage("setCreativeVersion", {
    creativeId: adConfig.id + " - " + adConfig.templateName,
    creativeVersion: adConfig.version,
    creativeLastModified: adConfig.lastModified,
    uid: uid
  });
}

function handleUserActionButtonClick(event) {EB.userActionCounter("UserAction");}
function onPageScroll(event) {displayDimensions();}

function eventManager(event) {
  var msg;

  if (_typeof(event) == "object" && event.data) {msg = JSON.parse(event.data);} else {msg = {type: event.type,data: event};}

  if (msg.type && msg.data && (!uid || msg.data.uid && msg.data.uid == uid)) {
    switch (msg.type) {
      case "sendCreativeId":
        creativeIFrameId = msg.data.creativeIFrameId;
        addCustomScriptEventListener('pageScroll', onPageScroll);
        sendMessage("dispatchScrollPos", {uid: uid});
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

function checkIfAdKitReady(event) {if (window.adkit) {adkit.onReady(initializeCreative);} else {initializeCreative();}}

function initializeCreative(event) {
  EBG.pm.bind("sendCreativeId", function () {eventManager.apply(this, arguments);}, this);
  EBG.pm.bind("eventCallback", function () {eventManager.apply(this, arguments);}, this);
  (typeof Modernizr === "undefined" ? "undefined" : _typeof(Modernizr)) == "object" && (Modernizr.touch = Modernizr.touch || "ontouchstart" in window);
  initializeGlobalVariables();
  window.registerInteraction = function () {}; //overwrite rI function because it will never actually be called
  displayDimensions(); //setCreativeVersion();
  setupDOM(); //setupTimeline ();
  setParallax();
}

function initializeGlobalVariables() {
  try {adId = EB._adConfig.adId;} catch (Error) {}
  try {rnd = EB._adConfig.rnd;} catch (Error) {}
  try {uid = EB._adConfig.uid;} catch (Error) {}
}