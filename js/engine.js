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
      if (data.text.color) {obj.style.color = data.text.color;}

      if (data.text.fontSize) {obj.style.fontSize = data.text.fontSize;}

      if (data.text.fontFamily) {obj.style.fontFamily = data.text.fontFamily;}

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

