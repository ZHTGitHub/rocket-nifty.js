!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).nifty={})}(this,(function(e){"use strict";const t=e=>{const t=e?new Date(e):new Date,n=t.getFullYear(),r=t.getMonth(),o=t.getDay(),i=t.getDate(),c=t.getHours(),u=t.getMinutes(),s=t.getSeconds(),f=t.getMilliseconds(),l=t.getTime(),a=t;return{year:n,month:r,day:o,date:i,hours:c,minutes:u,seconds:s,milliseconds:f,time:l,normalMonth:r+1,am00Time:new Date(a.setHours(0,0,0,0)).getTime(),pm24Time:new Date(a.setHours(0,0,0,0)+864e5-1).getTime()}},n=function(e,t){if(!("object"==typeof e&&null!=e)||!("object"==typeof t&&null!=t))return e===t;if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let n in e){if(!this.isEqual(e[n],t[n]))return!1}return!0},r=function(e){if(void 0===e||null==e||""===e||!1===e)return!1;if(e instanceof Array){if(0===e.length)return!1}else if("object"==typeof e){if(0===Object.keys(e).length)return!1}return!0},o=function(){return window.pageXOffset?{x:window.pageXOffset,y:window.pageYOffset}:{x:document.body.scrollLeft+document.documentElement.scrollLeft,y:document.body.scrollTop+document.documentElement.scrollTop}},i=function(){return window.innerWidth?{width:window.innerWidth,height:window.innerHeight}:"BackCompat"===document.compatMode?{width:document.body.clientWidth,height:document.body.clientHeight}:{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}},c=function(e){const t={};return e.replace(/^\?/,"").split("&").map((e=>{const n=e.split("="),r=n[0],o=n[1];t[r]=o})),t},u=e=>new Promise(((t,n)=>{const r=new FileReader;r.onload=function(n){const r=new Blob([n.target.result],{type:e.type}),o=(window.URL||window.webkitURL).createObjectURL(r);t(o)},r.readAsArrayBuffer(e),r.onerror=function(e){n(e)}})),s=e=>new Promise(((t,n)=>{const r=new FileReader;r.onload=function(e){t(e.target.result)},r.readAsDataURL(e),r.onerror=function(e){n(e)}})),f=(e,t)=>{let n=e.split(","),r=n[0].match(/:(.*?);/)[1],o=atob(n[1]),i=o.length,c=new Uint8Array(i);for(;i--;)c[i]=o.charCodeAt(i);return new File([c],t,{type:r})},l=(e,t=.2)=>new Promise(((n,r)=>{const o=new FileReader;o.onload=r=>{const{target:{result:o}}=r,i=new Image;i.onload=async()=>{const r=document.createElement("canvas");r.width=i.width,r.height=i.height;r.getContext("2d").drawImage(i,0,0,i.width,i.height);const o=r.toDataURL("image/jpeg",t);n(fileEvents.base64ToFile(o,e.name))},i.src=o},o.readAsDataURL(e),o.onerror=function(e){r(e)}})),a=function(e){return Array.isArray(e)?e:e.replace(/\[/g,".").replace(/\]/g,"").split(".")},d=function(e,t,n){return"object"!=typeof e?n:a(t).reduce(((e,t)=>(e||{})[t]),e)||n},y=function(e,t,n){return"object"!=typeof e||a(t).reduce(((e,t,r,o)=>r===o.length-1?(e[t]=n,null):(t in e||(e[t]=/^[0-9]{1,}$/.test(o[r+1])?[]:{}),e[t])),e),e},m=function(e){switch(Object.prototype.toString.call(e)){case"[object Boolean]":return"boolean";case"[object Number]":return isNaN(e)?"NaN":"number";case"[object String]":return"string";case"[object Array]":return"array";case"[object Function]":return"function";case"[object Object]":return"object";case"[object Null]":return"null";case"[object Undefined]":return"undefined";case"[object Symbol]":return"symbol";default:return e}},b=function(e){return e instanceof Array},g=function(e){return"boolean"===m(e)},p=function(e){return"function"===m(e)},h=function(e){return"null"===m(e)},w=function(e){return"number"===m(e)},j=function(e){return"object"===m(e)},O=function(e){return"string"===m(e)},A=function(e){return"symbol"===m(e)},T=function(e){return"undefined"===m(e)},S=["undefined","number","string","boolean","symbol"],F=["object","function"],N=function(e={}){if("object"!=typeof e||null==e)return e;const t=e instanceof Array?[]:{};for(let n in e)e.hasOwnProperty(n)&&(t[n]=N(e[n]));return t},D=function(e,t,n=!1){if(b(t)){const[n,r]=t;for(let t of e)if(t[n]===r)return t}else if(j(t)){const n=Object.entries(t);for(let t of e){if(n.every((e=>{const[n,r]=e;return t[n]===r})))return t}}else for(let n of e)if("object"==typeof n){for(let e in n)if(n[e]===t)return n}else if(n===t)return n},x=function(e,t){if(b(t)){const[n,r]=t;for(let t in e)if(e[t][n]===r)return+t}else if(j(t)){const n=Object.entries(t);for(let t in e){if(n.every((n=>{const[r,o]=n;return e[t][r]===o})))return+t}}else for(let n in e){const r=e[n];if("object"==typeof r){for(let e in r)if(r[e]===t)return+n}else if(r===t)return+n}return-1},B=function(e=[],t=!1){if(!e.some((e=>e instanceof Array)))return e;const n=Array.prototype.concat.apply([],e);return B(n)},U=function(e=[],t=!1){if(!Array.isArray(e))return e;const n=[];for(let t of e)if(~S.indexOf(typeof t))n.includes(t)||n.push(t);else if(~F.indexOf(typeof t))if(n.length){n.some((e=>JSON.stringify(e)===JSON.stringify(t)))||n.push(t)}else n.push(t);return n};var v={date:t,isEqual:n,isYummy:r,getScrollOffset:o,getViewportSize:i,queryToObject:c,fileToBlob:u,fileToBase64:s,base64ToFile:f,compressFile:l,get:d,set:y,deepClone:N,find:D,findIndex:x,flatArray:B,removeDuplicate:U,getType:m,isArray:b,isBoolean:g,isFunction:p,isNull:h,isNumber:w,isObject:j,isString:O,isSymbol:A,isUndefined:T};e.base64ToFile=f,e.compressFile=l,e.date=t,e.deepClone=N,e.default=v,e.fileToBase64=s,e.fileToBlob=u,e.find=D,e.findIndex=x,e.flatArray=B,e.get=d,e.getScrollOffset=o,e.getType=m,e.getViewportSize=i,e.isArray=b,e.isBoolean=g,e.isEqual=n,e.isFunction=p,e.isNull=h,e.isNumber=w,e.isObject=j,e.isString=O,e.isSymbol=A,e.isUndefined=T,e.isYummy=r,e.queryToObject=c,e.removeDuplicate=U,e.set=y,Object.defineProperty(e,"__esModule",{value:!0})}));