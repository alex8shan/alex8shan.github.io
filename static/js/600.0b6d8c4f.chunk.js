(self.webpackChunkclient=self.webpackChunkclient||[]).push([[600],{9989:function(t,e,n){"use strict";n.r(e);var r,o=n(885),s=n(2982),i=n(168),a=n(2791),c=n(6444),u=n(6746),f=n(4358),l=(n(7032),n(4569)),p=n.n(l),d=n(918),h=n(184),m=(0,c.ZP)(f.Z)(r||(r=(0,i.Z)(['\n\tfont-family: "Hack", monospace;\n\t.simplebar-scrollbar:before {\n\t\tborder-radius: 10px;\n\t\tbackground-color: ',";\n\t}\n\toverflow: auto;\n\tcolor: ",";\n\theight: 100%;\n\twidth: 100%;\n\tpadding: 1rem;\n\tmax-height: 80vh;\n\ta {\n\t\tcolor: inherit;\n\t\tbackground: inherit;\n\t\ttext-decoration: none;\n\t}\n\t.style1 {\n\t\tcolor: ",";\n\t}\n\t.style2 {\n\t\tcolor: ",";\n\t}\n\t.style3 {\n\t\tcolor: ",";\n\t\tbackground: ",";\n\t}\n\t.style4 {\n\t\tcolor: ",";\n\t}\n\t.style5 {\n\t\tcolor: ",";\n\t}\n\t.style6 {\n\t\tcolor: ",";\n\t}\n\t.style7 {\n\t\tbackground: ",";\n\t\tbackground-size: 1800% 1800%;\n\t\tanimation: rainbow 15s ease infinite;\n\n\t\t@keyframes rainbow {\n\t\t\t0% {\n\t\t\t\tbackground-position: 0% 82%;\n\t\t\t}\n\t\t\t50% {\n\t\t\t\tbackground-position: 100% 19%;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\tbackground-position: 0% 82%;\n\t\t\t}\n\t\t}\n\t\tcolor: ",";\n\t}\n"])),d.Z.scrollbarThumb,d.Z.bodyFont1,d.Z.bodyFont1,d.Z.bodyFont2,d.Z.bodyFont2.darken(.75),d.Z.bodyFont1,d.Z.bodyFont3,d.Z.bodyFont4,d.Z.bodyFont5,d.Z.easterEgg,d.Z.bodyFont4);e.default=function(){var t=(0,a.useState)(),e=(0,o.Z)(t,2),n=e[0],r=e[1];return(0,a.useEffect)((function(){p().get("https://api.github.com/users/alex8shan/repos?per_page=100").then((function(t){var e=t.data.sort((function(t,e){var n=t.stargazers_count,r=e.stargazers_count;return n>r?-1:n<r?1:0})),n="",o=[].concat([{name:"Name",description:"Description",url:"Url",stars:"Stars"},{name:"",description:"",url:"",stars:""}],(0,s.Z)(e.map((function(t){return{name:t.name,description:t.description,url:t.html_url,stars:t.stargazers_count}})))),i=function(t){var e=t.map((function(t){return t.name.length})),n=Math.max.apply(Math,(0,s.Z)(e));return t.map((function(t){return Array(n-t.name.length+1).join(" ")+"\t"}))}(o);o.forEach((function(t,e){n+='<span class="'.concat(0!==e&&"style2",'"><a target="_blank" href="').concat(t.url,'">').concat(t.name,"</a></span>").concat(i[e],'<span class="').concat(0!==e&&"style5",'">').concat(0===t.stars?"-":t.stars,'</span>\t<span class="').concat(0!==e&&"style4",'">').concat(t.description?t.description:"","</span>\n")})),r(n)}))}),[]),(0,h.jsx)(u.Z,{children:(0,h.jsx)(m,{children:(0,h.jsx)("pre",{dangerouslySetInnerHTML:{__html:n}})})})}},6746:function(t,e,n){"use strict";var r,o=n(168),s=(n(2791),n(6444)),i=n(918),a=n(184),c=s.ZP.div(r||(r=(0,o.Z)(["\n\tdisplay: flex;\n\tflex: 1;\n\tmax-width: 100%;\n\tmin-height: 32rem;\n\theight: 100%;\n\tborder-radius: 0 0 0.3rem 0.3rem;\n\tborder: 1px solid ",";\n"])),i.Z.bodyBorder);e.Z=function(t){return(0,a.jsx)(c,{children:t.children})}},4569:function(t,e,n){t.exports=n(8036)},3381:function(t,e,n){"use strict";var r=n(3589),o=n(7297),s=n(9301),i=n(9774),a=n(1804),c=n(9145),u=n(5411),f=n(6467);t.exports=function(t){return new Promise((function(e,n){var l=t.data,p=t.headers,d=t.responseType;r.isFormData(l)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(t.auth){var m=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+g)}var y=a(t.baseURL,t.url);function v(){if(h){var r="getAllResponseHeaders"in h?c(h.getAllResponseHeaders()):null,s={data:d&&"text"!==d&&"json"!==d?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:r,config:t,request:h};o(e,n,s),h=null}}if(h.open(t.method.toUpperCase(),i(y,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,"onloadend"in h?h.onloadend=v:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(v)},h.onabort=function(){h&&(n(f("Request aborted",t,"ECONNABORTED",h)),h=null)},h.onerror=function(){n(f("Network Error",t,null,h)),h=null},h.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(f(e,t,t.transitional&&t.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var b=(t.withCredentials||u(y))&&t.xsrfCookieName?s.read(t.xsrfCookieName):void 0;b&&(p[t.xsrfHeaderName]=b)}"setRequestHeader"in h&&r.forEach(p,(function(t,e){"undefined"===typeof l&&"content-type"===e.toLowerCase()?delete p[e]:h.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),d&&"json"!==d&&(h.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){h&&(h.abort(),n(t),h=null)})),l||(l=null),h.send(l)}))}},8036:function(t,e,n){"use strict";var r=n(3589),o=n(4049),s=n(3773),i=n(777);function a(t){var e=new s(t),n=o(s.prototype.request,e);return r.extend(n,s.prototype,e),r.extend(n,e),n}var c=a(n(221));c.Axios=s,c.create=function(t){return a(i(c.defaults,t))},c.Cancel=n(9346),c.CancelToken=n(6857),c.isCancel=n(5517),c.all=function(t){return Promise.all(t)},c.spread=n(8089),c.isAxiosError=n(9580),t.exports=c,t.exports.default=c},9346:function(t){"use strict";function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},6857:function(t,e,n){"use strict";var r=n(9346);function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},5517:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},3773:function(t,e,n){"use strict";var r=n(3589),o=n(9774),s=n(7470),i=n(2733),a=n(777),c=n(7835),u=c.validators;function f(t){this.defaults=t,this.interceptors={request:new s,response:new s}}f.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=t.transitional;void 0!==e&&c.assertOptions(e,{silentJSONParsing:u.transitional(u.boolean,"1.0.0"),forcedJSONParsing:u.transitional(u.boolean,"1.0.0"),clarifyTimeoutError:u.transitional(u.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(r=r&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var o,s=[];if(this.interceptors.response.forEach((function(t){s.push(t.fulfilled,t.rejected)})),!r){var f=[i,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var l=t;n.length;){var p=n.shift(),d=n.shift();try{l=p(l)}catch(h){d(h);break}}try{o=i(l)}catch(h){return Promise.reject(h)}for(;s.length;)o=o.then(s.shift(),s.shift());return o},f.prototype.getUri=function(t){return t=a(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){f.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){f.prototype[t]=function(e,n,r){return this.request(a(r||{},{method:t,url:e,data:n}))}})),t.exports=f},7470:function(t,e,n){"use strict";var r=n(3589);function o(){this.handlers=[]}o.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},1804:function(t,e,n){"use strict";var r=n(4044),o=n(9549);t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},6467:function(t,e,n){"use strict";var r=n(6460);t.exports=function(t,e,n,o,s){var i=new Error(t);return r(i,e,n,o,s)}},2733:function(t,e,n){"use strict";var r=n(3589),o=n(6755),s=n(5517),i=n(221);function a(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return a(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||i.adapter)(t).then((function(e){return a(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return s(e)||(a(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},6460:function(t){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},777:function(t,e,n){"use strict";var r=n(3589);t.exports=function(t,e){e=e||{};var n={},o=["url","method","data"],s=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function u(o){r.isUndefined(e[o])?r.isUndefined(t[o])||(n[o]=c(void 0,t[o])):n[o]=c(t[o],e[o])}r.forEach(o,(function(t){r.isUndefined(e[t])||(n[t]=c(void 0,e[t]))})),r.forEach(s,u),r.forEach(i,(function(o){r.isUndefined(e[o])?r.isUndefined(t[o])||(n[o]=c(void 0,t[o])):n[o]=c(void 0,e[o])})),r.forEach(a,(function(r){r in e?n[r]=c(t[r],e[r]):r in t&&(n[r]=c(void 0,t[r]))}));var f=o.concat(s).concat(i).concat(a),l=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===f.indexOf(t)}));return r.forEach(l,u),n}},7297:function(t,e,n){"use strict";var r=n(6467);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},6755:function(t,e,n){"use strict";var r=n(3589),o=n(221);t.exports=function(t,e,n){var s=this||o;return r.forEach(n,(function(n){t=n.call(s,t,e)})),t}},221:function(t,e,n){"use strict";var r=n(3589),o=n(4341),s=n(6460),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:function(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(t=n(3381)),t}(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)||e&&"application/json"===e["Content-Type"]?(a(e,"application/json"),function(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional,n=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,i=!n&&"json"===this.responseType;if(i||o&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(i){if("SyntaxError"===a.name)throw s(a,this,"E_JSON_PARSE");throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){c.headers[t]=r.merge(i)})),t.exports=c},4049:function(t){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},9774:function(t,e,n){"use strict";var r=n(3589);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(r.isURLSearchParams(e))s=e.toString();else{var i=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),i.push(o(e)+"="+o(t))})))})),s=i.join("&")}if(s){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},9549:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},9301:function(t,e,n){"use strict";var r=n(3589);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,s,i){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},4044:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},9580:function(t){"use strict";t.exports=function(t){return"object"===typeof t&&!0===t.isAxiosError}},5411:function(t,e,n){"use strict";var r=n(3589);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},4341:function(t,e,n){"use strict";var r=n(3589);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},9145:function(t,e,n){"use strict";var r=n(3589),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,s,i={};return t?(r.forEach(t.split("\n"),(function(t){if(s=t.indexOf(":"),e=r.trim(t.substr(0,s)).toLowerCase(),n=r.trim(t.substr(s+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}})),i):i}},8089:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},7835:function(t,e,n){"use strict";var r=n(8593),o={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){o[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var s={},i=r.version.split(".");function a(t,e){for(var n=e?e.split("."):i,r=t.split("."),o=0;o<3;o++){if(n[o]>r[o])return!0;if(n[o]<r[o])return!1}return!1}o.transitional=function(t,e,n){var o=e&&a(e);function i(t,e){return"[Axios v"+r.version+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,a){if(!1===t)throw new Error(i(r," has been removed in "+e));return o&&!s[r]&&(s[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,a)}},t.exports={isOlderVersion:a,assertOptions:function(t,e,n){if("object"!==typeof t)throw new TypeError("options must be an object");for(var r=Object.keys(t),o=r.length;o-- >0;){var s=r[o],i=e[s];if(i){var a=t[s],c=void 0===a||i(a,s,t);if(!0!==c)throw new TypeError("option "+s+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+s)}},validators:o}},3589:function(t,e,n){"use strict";var r=n(4049),o=Object.prototype.toString;function s(t){return"[object Array]"===o.call(t)}function i(t){return"undefined"===typeof t}function a(t){return null!==t&&"object"===typeof t}function c(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function u(t){return"[object Function]"===o.call(t)}function f(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:function(t){return null!==t&&!i(t)&&null!==t.constructor&&!i(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!==typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"===typeof t},isNumber:function(t){return"number"===typeof t},isObject:a,isPlainObject:c,isUndefined:i,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:u,isStream:function(t){return a(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:f,merge:function t(){var e={};function n(n,r){c(e[r])&&c(n)?e[r]=t(e[r],n):c(n)?e[r]=t({},n):s(n)?e[r]=n.slice():e[r]=n}for(var r=0,o=arguments.length;r<o;r++)f(arguments[r],n);return e},extend:function(t,e,n){return f(e,(function(e,o){t[o]=n&&"function"===typeof e?r(e,n):e})),t},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},8593:function(t){"use strict";t.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}}]);
//# sourceMappingURL=600.0b6d8c4f.chunk.js.map