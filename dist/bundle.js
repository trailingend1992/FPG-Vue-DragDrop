webpackJsonp([1,2],{108:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}n(65);var s=n(64),u=i(s),a=n(62),o=i(a),r=n(63),l=i(r),c=n(15),d=n(6),h=i(d);window.platform=(0,c.testPlatform)(),(0,h.default)(window).on("load",function(){var e=new o.default("#demo-expblk-ctnr"),t=new l.default("#first-grad-text"),n=new u.default(".nav-bar-ctnr");e.init(),t.init(),n.init()})},15:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.testPlatform=t.print=t.isValidUrl=void 0;var s=n(6);i(s),t.isValidUrl=function(e){return/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)},t.print=function(e,t,n){console.log("=== From "+e+" "+t+" - "+n+" ===")},t.testPlatform=function(){var e=window.navigator.userAgent.toLowerCase(),t={isAndroid412:null!==e.match(/android 4\.1\.2/i),isDuos:null!==e.match(/gt\-s7562/i),isI9300:null!==e.match(/gt\-i9300/i),isI9500:null!==e.match(/gt\-i9500/i),hasTouch:"ontouchstart"in window,isiPod:null!==e.match(/ipod/i),isiPad:null!==e.match(/ipad/i),isiPhone:null!==e.match(/iphone/i),isAndroid:null!==e.match(/android/i),isBustedAndroid:null!==e.match(/android 2\.[12]/),isIE:window.navigator.appName.indexOf("Microsoft")!=-1,isIE10:null!==e.match(/msie 10/),isIE11:null!==e.match(/trident.*rv\:11\./),isEdge:e.indexOf("edge/")>0,isChrome:null!==e.match(/Chrome/gi),isFirefox:null!==e.match(/firefox/gi),isSafari:e.indexOf("safari")!=-1&&e.indexOf("chrome")==-1,isWebkit:null!==e.match(/webkit/gi),isGecko:null!==e.match(/gecko/gi),isOpera:null!==e.match(/opera/gi),isMac:null!==e.match("mac"),isIOS8:null!==e.match(/(iphone|ipod|ipad).* os 8_/),isIOS10:null!==e.match(/(iphone|ipod|ipad).* os 10_/),supportsSvg:!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect};return t.isMobile=t.isiPhone||t.isAndroid,t.isTablet=t.isiPad,t.isDesktop=!(t.isMobile||t.isTablet),t.isIE=t.isIE10||t.isIE11||t.isEdge,t.isIos=t.isiPhone||t.isiPad,window.platform=t,t}},62:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(6),o=i(a),r=n(15),l=function(){function e(t){s(this,e),this.container=(0,o.default)(t),this.openers=this.container.find(".expblk-opener"),this.expanders=this.container.find(".expblk-expander"),this.pluses=this.container.find(".expblk-plus"),this.closes=this.container.find(".expblk-close"),this.selectedOpenerIndex=-1,this.settings={height:400,speed:"350ms",easing:"linear"},this.cssAdjust()}return u(e,[{key:"init",value:function(e){var t=this;this.settings=o.default.extend(!0,{},this.settings,e);var n=o.default.Deferred();n.then(function(){t.reset()}).then(function(){t.setTransition(),t.addEventListeners()}),n.resolve()}},{key:"open",value:function(e){e.css("height",this.calcHeight(!0))}},{key:"close",value:function(e){e.css("height",this.calcHeight(!1))}},{key:"addEventListeners",value:function(){var e,t,n,i=this;this.pluses.on("click",function(){e=i.pluses.index((0,o.default)(this)),t=i.openers.eq(e),n=i.expanders.eq(e),setTimeout(function(){i.open(n)},50)}),this.closes.on("click",function(){e=i.closes.index((0,o.default)(this)),t=i.openers.eq(e),n=i.expanders.eq(e),setTimeout(function(){i.close(n)},50)})}},{key:"calcHeight",value:function(e){return e?this.settings.height:0}},{key:"setTransition",value:function(){this.expanders.css("transition","height "+this.settings.speed+" "+this.settings.easing)}},{key:"onResize",value:function(){this.reset()}},{key:"reset",value:function(){this.expanders.css("height",this.calcHeight(!1))}},{key:"cssAdjust",value:function(){}},{key:"print",value:function(e,t){(0,r.print)("expanding-block",e,t)}}]),e}();t.default=l},63:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(6),o=i(a),r=n(15),l=function(){function e(t){s(this,e),this.container=(0,o.default)(t),this.textToChange=this.container.find(".grad-text-lower"),this.settings={styleIndex:0,styleClassList:["text-color-1","text-color-2"]},this.cssAdjust()}return u(e,[{key:"init",value:function(e){var t=this;this.settings=o.default.extend(!0,{},this.settings,e);var n=o.default.Deferred();n.then(function(){t.reset()}).then(function(){t.addEventListeners()}),n.resolve()}},{key:"reset",value:function(){this.container.addClass(this.settings.styleClassList[this.settings.styleIndex])}},{key:"addEventListeners",value:function(){var e=this;(0,o.default)(".grad-num-btn").on("click",function(){var t=(0,o.default)(".grad-text-numb").val();t>=0&&t<=100&&e.updateNumber(t)}),(0,o.default)(".grad-style-btn").on("click",function(){var t=(0,o.default)(".grad-text-styl").val();t>=1&&t<=2&&e.updateStyle(t)})}},{key:"updateNumber",value:function(e){this.textToChange.html(e)}},{key:"updateStyle",value:function(e){this.removeOldStyles(),this.container.addClass(this.settings.styleClassList[e-1]),console.log(e)}},{key:"removeOldStyles",value:function(){var e=this;this.settings.styleClassList.forEach(function(t,n){e.container.removeClass(t)})}},{key:"onResize",value:function(){this.reset()}},{key:"cssAdjust",value:function(){}},{key:"print",value:function(e,t){(0,r.print)("gradient-text",e,t)}}]),e}();t.default=l},64:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(6),o=i(a),r=n(15),l=function(){function e(t){s(this,e),this.container=(0,o.default)(t),this.outterCtnr=this.container.find(".nav-menu-items"),this.outterItems=this.container.find(".nav-menu-item"),this.parentItems=this.outterItems.filter(function(e,t){return!(0,o.default)(t).find("span").hasClass("hidden")}),this.selectedParentIndex=-1,this.selectedChild=null,this.childCtnrs=this.parentItems.find(".nav-inner-items"),this.heights=this.saveHeights(),this.settings={height:0,speed:"350ms",easing:"linear"},this.cssAdjust()}return u(e,[{key:"init",value:function(e){var t=this;this.settings=o.default.extend(!0,{},this.settings,e);var n=o.default.Deferred();n.then(function(){t.reset()}).then(function(){t.setTransition(),t.addEventListeners()}),n.resolve()}},{key:"open",value:function(e,t){t!=this.selectedParentIndex&&e.css("height",this.calcHeight(!0,t))}},{key:"close",value:function(e){this.selectedParentIndex!=-1&&e.css("height",this.calcHeight(!1,this.selectedParentIndex))}},{key:"addEventListeners",value:function(){var e,t,n,i=this;this.parentItems.on("click",function(s){var u=this;s.stopPropagation();var a=o.default.Deferred();a.then(function(){i.close(i.selectedChild),e=i.parentItems.index((0,o.default)(u)),t=(0,o.default)(u),n=i.childCtnrs.eq(e)}).then(function(){i.open(n,e)}).then(function(){i.updateSelected(e,n)}),a.resolve()}),(0,o.default)(document).on("click",function(e){i.close(i.selectedChild)})}},{key:"updateSelected",value:function(e,t){this.selectedParentIndex=e,this.selectedChild=t}},{key:"calcHeight",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return e?this.heights[t]:0}},{key:"setTransition",value:function(){this.childCtnrs.css("transition","height "+this.settings.speed+" "+this.settings.easing)}},{key:"onResize",value:function(){this.reset()}},{key:"reset",value:function(){var e=this;this.childCtnrs.each(function(t,n){(0,o.default)(n).css("height",e.calcHeight(!1,t))})}},{key:"cssAdjust",value:function(){}},{key:"saveHeights",value:function(){var e=[];return this.childCtnrs.each(function(t,n){e.push((0,o.default)(n).height())}),e}},{key:"print",value:function(e,t){(0,r.print)("navigation",e,t)}}]),e}();t.default=l},65:function(e,t){}},[108]);