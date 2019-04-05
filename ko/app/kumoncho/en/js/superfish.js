/*
 * jQuery Superfish Menu Plugin - v1.7.9
 * Copyright (c) 2016 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */
!function(e,s){"use strict";var n=function(){var n={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},t=function(){var s=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);return s&&e("html").css("cursor","pointer").on("click",e.noop),s}(),o=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),i=function(){return!!s.PointerEvent}(),r=function(e,s,t){var o,i=n.menuClass;s.cssArrows&&(i+=" "+n.menuArrowClass),o=t?"addClass":"removeClass",e[o](i)},a=function(s,t){return s.find("li."+t.pathClass).slice(0,t.pathLevels).addClass(t.hoverClass+" "+n.bcClass).filter(function(){return e(this).children(t.popUpSelector).hide().show().length}).removeClass(t.pathClass)},l=function(e,s){var t=s?"addClass":"removeClass";e.children("a")[t](n.anchorClass)},h=function(e){var s=e.css("ms-touch-action"),n=e.css("touch-action");n=n||s,n="pan-y"===n?"auto":"pan-y",e.css({"ms-touch-action":n,"touch-action":n})},u=function(e){return e.closest("."+n.menuClass)},p=function(e){return u(e).data("sfOptions")},c=function(){var s=e(this),n=p(s);clearTimeout(n.sfTimer),s.siblings().superfish("hide").end().superfish("show")},f=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(u(this)),s.$path.length&&e.proxy(c,s.$path)())},d=function(){var s=e(this),n=p(s);t?e.proxy(f,s,n)():(clearTimeout(n.sfTimer),n.sfTimer=setTimeout(e.proxy(f,s,n),n.delay))},v=function(s){var n=e(this),t=p(n),o=n.siblings(s.data.popUpSelector);if(!1===t.onHandleTouch.call(o))return this;o.length>0&&o.is(":hidden")&&(n.one("click.superfish",!1),"MSPointerDown"===s.type||"pointerdown"===s.type?n.trigger("focus"):e.proxy(c,n.parent("li"))())},m=function(s,n){var r="li:has("+n.popUpSelector+")";e.fn.hoverIntent&&!n.disableHI?s.hoverIntent(c,d,r):s.on("mouseenter.superfish",r,c).on("mouseleave.superfish",r,d);var a="MSPointerDown.superfish";i&&(a="pointerdown.superfish"),t||(a+=" touchend.superfish"),o&&(a+=" mousedown.superfish"),s.on("focusin.superfish","li",c).on("focusout.superfish","li",d).on(a,"a",n,v)};return{hide:function(s){if(this.length){var n=this,t=p(n);if(!t)return this;var o=!0===t.retainPath?t.$path:"",i=n.find("li."+t.hoverClass).add(this).not(o).removeClass(t.hoverClass).children(t.popUpSelector),r=t.speedOut;if(s&&(i.show(),r=0),t.retainPath=!1,!1===t.onBeforeHide.call(i))return this;i.stop(!0,!0).animate(t.animationOut,r,function(){var s=e(this);t.onHide.call(s)})}return this},show:function(){var e=p(this);if(!e)return this;var s=this.addClass(e.hoverClass),n=s.children(e.popUpSelector);return!1===e.onBeforeShow.call(n)?this:(n.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(n)}),this)},destroy:function(){return this.each(function(){var s,t=e(this),o=t.data("sfOptions");if(!o)return!1;s=t.find(o.popUpSelector).parent("li"),clearTimeout(o.sfTimer),r(t,o),l(s),h(t),t.off(".superfish").off(".hoverIntent"),s.children(o.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),o.$path.removeClass(o.hoverClass+" "+n.bcClass).addClass(o.pathClass),t.find("."+o.hoverClass).removeClass(o.hoverClass),o.onDestroy.call(t),t.removeData("sfOptions")})},init:function(s){return this.each(function(){var t=e(this);if(t.data("sfOptions"))return!1;var o=e.extend({},e.fn.superfish.defaults,s),i=t.find(o.popUpSelector).parent("li");o.$path=a(t,o),t.data("sfOptions",o),r(t,o,!0),l(i,!0),h(t),m(t,o),i.not("."+n.bcClass).superfish("hide",!0),o.onInit.call(this)})}}}();e.fn.superfish=function(s){return n[s]?n[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof s&&s?e.error("Method "+s+" does not exist on jQuery.fn.superfish"):n.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop,onHandleTouch:e.noop}}(jQuery,window);