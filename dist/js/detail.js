!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=45)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<e.length;r++){var c=e[r];null!=c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),t.push(c))}},t}},function(e,t,n){var o,r,i,c={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),l=(i={},function(e,t){if("function"==typeof e)return e();if(void 0===i[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}i[e]=n}return i[e]}),s=null,u=0,f=[],d=n(3);function p(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=c[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(A(o.parts[i],t))}else{var a=[];for(i=0;i<o.parts.length;i++)a.push(A(o.parts[i],t));c[o.id]={id:o.id,refs:1,parts:a}}}}function h(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[c]?o[c].parts.push(a):n.push(o[c]={id:c,parts:[a]})}return n}function m(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(e.insertAt.before,n);n.insertBefore(t,r)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);0<=t&&f.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=n.nc;o&&(e.attrs.nonce=o)}return v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function A(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var c=u++;n=s=s||b(t),o=j.bind(null,n,c,!1),r=j.bind(null,n,c,!0)}else r=e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=d(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var c=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}.bind(null,n,t),function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),o=function(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),function(){g(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var i=n[r];(a=c[i.id]).refs--,o.push(a)}for(e&&p(h(e,t),t),r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var y,w=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function j(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}},function(e,t,n){"use strict";e.exports={tplReplace:function(){return/{{(.*?)}}/g},thumbShow:function(e){e.on("load",function(){$(this).css("opacity",1)})},scrollToBottom:function(e){(function(){var e=0,t=0;return document.body&&(e=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),0<e-t?e:t})()+("CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight)==function(){var e=0,t=0;return document.body&&(e=document.body.scrollHeight),document.documentElement&&(t=document.documentElement.scrollHeight),0<e-t?e:t}()&&e()},getUrlQueryValue:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?decodeURIComponent(n[2]):null}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(5));n(8);var r=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return{name:"header",tpl:function(e){return(0,o.default)().replace(r.default.tplReplace(),function(t,n){return{title:e.title,showLeftIcon:!e.showLeftIcon&&"none",showRightIcon:!e.showRightIcon&&"none"}[n]})}}}},function(module,exports,__webpack_require__){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<header class="header">\r\n    <div class="icon left">\r\n        <a href="javascript:history.back(-1)">\r\n        <img src="'+(null==(__t=__webpack_require__(6))?"":__t)+'"\r\n        class="img-icon" style="display: {{showLeftIcon}}"/>\r\n        </a>\r\n    </div>\r\n    \r\n    <div class="title">\r\n        <h1>{{title}}</h1>\r\n    </div>\r\n    \r\n    <div class="icon right">\r\n        <a href="collections.html ">\r\n            <img src="'+(null==(__t=__webpack_require__(7))?"":__t)+'"\r\n                 class="img-icon" style="display: {{showRightIcon}}"/>\r\n        </a>\r\n    </div>\r\n</header>';return __p}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABFFBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+2eZYUAAAAW3RSTlMA1J8cDwkl3RXKZ+U5kP7srC65B/dSAfIDWPz52UtFEvU/NNACpu/7vxkMxZfiBfB+KrP9X+khfwhueOqkbYJDqIZ7wS+7eryHmFaLuCnzti1aTnwkeXdoqWZZr6od1wAAAgdJREFUaN7V2udSAkEQBOAl55xBEJBkQqKimHPO+d7/PURx9s6fWtVd5b7AV0Vxfdszp9Qvjuv12vOmsGd0YEzONha5NL7ODtLYnRrGGdCwfxtGB2eExFjxwowNMYw7mDHQxjrMSPXFOIUZpaYYSzAjmBQjCjNiGTHiWZThjoixmEAZjoAYcwsow+sRY2YWZThtYizPo4yET4zhKsrIxsVodFFGOipGuYoP90IFH+75IszYFyOcgxl+He5+mJELi7EGM4p5QrgXxKgTwr1Xw4d7q40Pd58LH+42Jz7cPbBbnEuHe8CBMtotMSJulFHriZGJwR6QuhjJID7cmyWY0RGjnyKE+4AQ7s+EcA/BjIoOdzvMqJZ1O0ijjG4D3w4cQ3w7MMMd1w7McMe1AzPcce1AnYgxfoQZL3qccYubmWzi24HZD4BvEKVS+uc6BCq6so3dOITyF6Y8jJxYsd5+cQFpvcfjon7SSAgvLc7rl3ORsF6JnoAKo7kr9aBnECmgwrhwW+ZCyOA3J1zAEqSyhDrHKaacis0ZFnDGHpwBDmcUZd2Y1IGPfokwHuQMOlnBf0wYPnPG6JyFAGe1QVnScNZNnMUZZwXIWWZy1rI/Fsz/P/ibjOA3P1/YAyqMDzGsn5S8A5ULHWPAh9IM/nMgooP/XiHPzTTDXFBkdPR5Db9S4LPV+VOb/ABO2DgasIfSNQAAAABJRU5ErkJggg=="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAVFBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////+DS+nTAAAAG3RSTlMAoGDwECDvgEAwr9Cwv1/fwHBQn+BPz5CPb39uEnW0AAACLUlEQVRo3u3ZbZOCIBAA4DRQMN9Kyzr///88bw5vpBDYZXHuA/vRaXpCV9jdTqeDQzy7mSi6QRgJNsykUbFPQz5m4njIj3WQG4vyvpZsjhCZbvA5SnANKeMgpYb061VBEutv7jWkMN5EfKhHXGgXjcsLiHUpCUlIQhLyLxBZLae3jIvkv5/LYyL5ehrl8RD5d+QVMhYii9lXQSNbw6VgEd1wKEjk3bArOEQUnwVPIUgR0ZjrqkaQIXuEhYEibWOvEo0MDGk9+qJHG4RIz9ark3hE+JfWAo0AWsgOjUC6BHkEwrHIxd8Yj3jwOT6Fe+RCQIhAZjDsja/9jD5oW+G4hQD3Lq8hQha4QfIz+B1BbPUlZiFQhDmXcmbhh9bkQmqCk9F5v0oCRAB3lDiIoKhWXAijQFzpRVJ39cB9C4Vk8AyGIyU8g+HIDZ7BcETCMxhRcI/WnYuoqt/cr366CnGdesfdwvQnYvnSS12KzbnBRVkvFdN4S7OVhCQkIQk5DGHts/mJ4SvWDJK11XY68KSf3OmCcl6cEDEJakD0YiTIvqD+Em9D+xOXoJx7AHKvZs8ohjsKuQ+FqQLKyiVMQxct3byQPWEtTvjV6Hxxb8QlqMJyGo3pxj0QP0E52Xkn3WxIBRBUdWl2Ggti7D9yZt/P8tqzC8MKq3NBI36CLd1cCETYTzcbAhd20m0XuVx5wJmop5sZCRM+0s2AEAir05sRMmGbbvosm1ZQzjSejotveK2EHMLE6DUAAAAASUVORK5CYII="},function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.i,o,""]]);n(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'@charset "UTF-8";\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 4.4rem;\n  background-color: #cf5f55; }\n  .header .title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    /*垂直水平居中*/\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    color: #fff; }\n    .header .title .h1 {\n      font-size: 1.8rem; }\n  .header .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    top: 0;\n    width: 4.4rem;\n    height: 4.4rem; }\n    .header .icon.left {\n      left: 0; }\n      .header .icon.left a {\n        font-size: 0; }\n      .header .icon.left .img-icon {\n        width: 1.5rem;\n        height: 1.5rem; }\n    .header .icon.right {\n      right: 0; }\n      .header .icon.right .img-icon {\n        width: 2rem;\n        height: 2rem;\n        margin-top: 2px; }\n',""])},,,,,,,,function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n(46);var o=a(n(4)),r=a(n(48)),i=a(n(52)),c=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}var l,s,u,f,d,p,h,m,g,b,v,A,y=new o.default,w=new r.default,j=new i.default;function x(){console.log(1),h=p[d]?(delete p[d],!1):(p[d]=JSON.parse(localStorage.getItem("target")),!0),localStorage.setItem("collections",JSON.stringify(p)),j.changeCollector(h)}l=Zepto,(s=l("#app")).children(".frame-wrapper"),u=JSON.parse(localStorage.getItem("target")),f=c.default.getUrlQueryValue("news_url")||u.url,d=c.default.getUrlQueryValue("uniquekey")||u.uniquekey,p=JSON.parse(localStorage.getItem("collections"))||{},h=Boolean(p[d]),m=function(){return new Promise(function(e,t){b(),v(f),A(h),e()})},g=function(){l(".collector").on("click",x)},b=function(){s.append(y.tpl({title:"新闻详情",showLeftIcon:!0,showRightIcon:!1}))},v=function(e){s.append(w.tpl(e))},A=function(e){s.append(j.tpl(e))},m().then(g)},function(e,t,n){var o=n(47);"string"==typeof o&&(o=[[e.i,o,""]]);n(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"html {\n  height: 100%;\n  font-size: 1.2rem; }\n  html body {\n    height: 100%;\n    margin: 0px; }\n    html body h1,\n    html body h2,\n    html body h3,\n    html body h4,\n    html body h5,\n    html body h6,\n    html body p {\n      font-weight: normal;\n      margin: 0; }\n    html body a {\n      text-decoration: none;\n      color: #000; }\n    html body img {\n      width: 100%; }\n    html body .app {\n      position: relative;\n      height: 100%;\n      background-color: #f5f7f8; }\n      html body .app .list {\n        overflow-y: auto;\n        background-color: #fff; }\n\n.frame-wrapper {\n  height: 100%;\n  margin-top: 4.4rem; }\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(49));n(50);var r=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return{name:"newsFrame",tpl:function(e){return(0,o.default)().replace(r.default.tplReplace(),e)}}}},function(module,exports){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<iframe src="{{news_url}}" frameborder="0" width="100%" height="100%" id="js-news-frame"></iframe>';return __p}},function(e,t,n){var o=n(51);"string"==typeof o&&(o=[[e.i,o,""]]);n(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(53));n(54);var r=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return{name:"collector",tpl:function(e){return(0,o.default)().replace(r.default.tplReplace(),e?"full":"o")},changeCollector:function(e){$(".collector").addClass(e?"full":"o").removeClass(e?"o":"full")}}}},function(module,exports){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<div class="collector {{type_class}}"></div>';return __p}},function(e,t,n){var o=n(55);"string"==typeof o&&(o=[[e.i,o,""]]);n(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(0)(!1);var o=n(17),r=o(n(56)),i=o(n(57));t.push([e.i,".collector {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  z-index: 3;\n  width: 2rem;\n  height: 2rem;\n  background-repeat: no-repeat;\n  background-size: 2rem 2rem;\n  background-position: 0 0; }\n  .collector.o {\n    background-image: url("+r+"); }\n  .collector.full {\n    background-image: url("+i+"); }\n",""])},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAASFBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////8FevL4AAAAF3RSTlMAgGAgv/DvQDDA3+B/XxA/oG9wn7BQz+ozB50AAAKBSURBVGje7ZnteoMgDEZVUIpa1+7z/u90nUw+NLEkkv4yv/Z0kMPrziawqjrrrLPOQmvsurs0w/w8yghD9B9EvyCIdBTtIPoFQWSj6AWiXxBEMsocxFrRKC6IMaJRXJCqkoziE0hGWYJIRonWLxclBJGLkqxeKkocRCrKau0yUdIgMlE2K5eIsg4iEQVYd/ko2yDlo4CrLh0FClI0ytt11PCaXRQ9Xt8Otu/9+9ZuB1j/zZ6BStujL3WzGpKLgtpjQeIomSi0/VyfEzRn+kQnAKiLRkcPtm52PDVNbQd0slbQpo3QPgsVG85v/wwF/QSZ7VFU7Itq3WeXUn8jLq5fq5IPHaUrRLl0jrFqV5SCMIpSUEZByg6jGGWXUYjyhFGE8pRRgJLBOEzJYhykZDIOUbIZBygEBptCYjApRAaLQmYEisqdoOgMT8nehGoGw1Nyh7MYVfU1v/JzR88v9S/yb1aD7hvRvWRDhtR/02qZ0cy10XL76knnqHmD35MhJLnIw6OlDfnjB84BkvqQWXpRdWHpRV0ZS6+e+IxZepFtYeiFyjWNXTdOZfTCHvF9fm9A/wti6AXLcvXH4/5aQC9oXSY5vmpzWK+tXErvnp85eq1dUR++9+3mv/xQR/RayfVQyh9nH32VPyzHopH1Sh/wPSCWy+eAubP1ilUJSg1Ri2ZYi0bWK6zKfC/N2vd0zHubikbWa5ErXOy09ebXfKrbWDSyXs6UWClwL6kS0Yh6GWfOT6wUsj2NROtoejXppd3uRJNe3zU0uQClkCXF1081TS5QKbiCaAS9elwpuIJoPU0uTCnEgNv2qi7jcVlF+pP6L5qljLecO8jHtKk666ylfgHmjngwzNM+FwAAAABJRU5ErkJggg=="},function(e,t,n){e.exports=n.p+"img/star_full-4342ed070d0cad24.png"}]);