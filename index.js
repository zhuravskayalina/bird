(()=>{var e={178:()=>{var e=document.querySelector(".header__burger"),t=document.querySelector(".header__popup"),r=document.querySelector(".header__wrapper"),n=document.querySelector(".background");function a(){t.classList.toggle("header__popup_hidden"),t.classList.toggle("hidden"),r.classList.toggle("header__wrapper_border"),e.classList.toggle("header__burger_close"),n.classList.toggle("hidden")}e.addEventListener("click",a),n.addEventListener("click",a)}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";r(178);r.p,r.p;const e=r.p+"audio/499d4af4c7c3a003d11d16acb8798320.mp3";r.p;function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}document.querySelector(".levels__list"),document.querySelector(".game-page__win-popup"),document.querySelector(".win-popup__score-data"),document.querySelector(".header__nav").addEventListener("click",(function(t){var r;"A"===t.target.tagName&&((r=new Audio).src=e,r.play())}));var n=document.querySelectorAll(".menu__lang-btn"),a=document.querySelectorAll("[data-lang]"),o=localStorage.getItem("lang");o||(o="eng");var c=document.querySelector('[data-gamelang="'.concat(o,'"]'));function i(){"ru"===o?a.forEach((function(e){"ru"===e.dataset.lang?e.classList.remove("hidden"):"eng"===e.dataset.lang&&e.classList.add("hidden")})):a.forEach((function(e){"ru"===e.dataset.lang?e.classList.add("hidden"):"eng"===e.dataset.lang&&e.classList.remove("hidden")}))}i(),c.classList.add("menu__lang-btn_active"),n.forEach((function(e){e.addEventListener("click",(function(){var r=e.dataset.gamelang;localStorage.setItem("lang",r),o=r,function(e){var r,a=function(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw c}}}}(n);try{for(a.s();!(r=a.n()).done;)r.value.classList.remove("menu__lang-btn_active")}catch(e){a.e(e)}finally{a.f()}e.classList.add("menu__lang-btn_active")}(e),i()}))}))})()})();