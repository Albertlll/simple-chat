function Lh(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yc={exports:{}},Li={},Kc={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),Mh=Symbol.for("react.portal"),Fh=Symbol.for("react.fragment"),jh=Symbol.for("react.strict_mode"),zh=Symbol.for("react.profiler"),Uh=Symbol.for("react.provider"),Bh=Symbol.for("react.context"),Hh=Symbol.for("react.forward_ref"),Vh=Symbol.for("react.suspense"),Wh=Symbol.for("react.memo"),Gh=Symbol.for("react.lazy"),cu=Symbol.iterator;function $h(e){return e===null||typeof e!="object"?null:(e=cu&&e[cu]||e["@@iterator"],typeof e=="function"?e:null)}var Xc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qc=Object.assign,Jc={};function ir(e,n,t){this.props=e,this.context=n,this.refs=Jc,this.updater=t||Xc}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zc(){}Zc.prototype=ir.prototype;function Vs(e,n,t){this.props=e,this.context=n,this.refs=Jc,this.updater=t||Xc}var Ws=Vs.prototype=new Zc;Ws.constructor=Vs;qc(Ws,ir.prototype);Ws.isPureReactComponent=!0;var du=Array.isArray,ed=Object.prototype.hasOwnProperty,Gs={current:null},nd={key:!0,ref:!0,__self:!0,__source:!0};function td(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)ed.call(n,r)&&!nd.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:lo,type:e,key:i,ref:l,props:o,_owner:Gs.current}}function Qh(e,n){return{$$typeof:lo,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function $s(e){return typeof e=="object"&&e!==null&&e.$$typeof===lo}function Yh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var fu=/\/+/g;function ll(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Yh(""+e.key):n.toString(36)}function Bo(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case lo:case Mh:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ll(l,0):r,du(o)?(t="",e!=null&&(t=e.replace(fu,"$&/")+"/"),Bo(o,n,t,"",function(u){return u})):o!=null&&($s(o)&&(o=Qh(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(fu,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",du(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+ll(i,s);l+=Bo(i,n,t,a,o)}else if(a=$h(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+ll(i,s++),l+=Bo(i,n,t,a,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function go(e,n,t){if(e==null)return e;var r=[],o=0;return Bo(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Kh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Ho={transition:null},Xh={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:Gs};function rd(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:go,forEach:function(e,n,t){go(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return go(e,function(){n++}),n},toArray:function(e){return go(e,function(n){return n})||[]},only:function(e){if(!$s(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=ir;U.Fragment=Fh;U.Profiler=zh;U.PureComponent=Vs;U.StrictMode=jh;U.Suspense=Vh;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xh;U.act=rd;U.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qc({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Gs.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)ed.call(n,a)&&!nd.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:lo,type:e.type,key:o,ref:i,props:r,_owner:l}};U.createContext=function(e){return e={$$typeof:Bh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Uh,_context:e},e.Consumer=e};U.createElement=td;U.createFactory=function(e){var n=td.bind(null,e);return n.type=e,n};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Hh,render:e}};U.isValidElement=$s;U.lazy=function(e){return{$$typeof:Gh,_payload:{_status:-1,_result:e},_init:Kh}};U.memo=function(e,n){return{$$typeof:Wh,type:e,compare:n===void 0?null:n}};U.startTransition=function(e){var n=Ho.transition;Ho.transition={};try{e()}finally{Ho.transition=n}};U.unstable_act=rd;U.useCallback=function(e,n){return Ce.current.useCallback(e,n)};U.useContext=function(e){return Ce.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};U.useEffect=function(e,n){return Ce.current.useEffect(e,n)};U.useId=function(){return Ce.current.useId()};U.useImperativeHandle=function(e,n,t){return Ce.current.useImperativeHandle(e,n,t)};U.useInsertionEffect=function(e,n){return Ce.current.useInsertionEffect(e,n)};U.useLayoutEffect=function(e,n){return Ce.current.useLayoutEffect(e,n)};U.useMemo=function(e,n){return Ce.current.useMemo(e,n)};U.useReducer=function(e,n,t){return Ce.current.useReducer(e,n,t)};U.useRef=function(e){return Ce.current.useRef(e)};U.useState=function(e){return Ce.current.useState(e)};U.useSyncExternalStore=function(e,n,t){return Ce.current.useSyncExternalStore(e,n,t)};U.useTransition=function(){return Ce.current.useTransition()};U.version="18.3.1";Kc.exports=U;var p=Kc.exports;const vn=Qc(p),qh=Lh({__proto__:null,default:vn},[p]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh=p,Zh=Symbol.for("react.element"),ey=Symbol.for("react.fragment"),ny=Object.prototype.hasOwnProperty,ty=Jh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ry={key:!0,ref:!0,__self:!0,__source:!0};function od(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)ny.call(n,r)&&!ry.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Zh,type:e,key:i,ref:l,props:o,_owner:ty.current}}Li.Fragment=ey;Li.jsx=od;Li.jsxs=od;Yc.exports=Li;var w=Yc.exports,Bl={},id={exports:{}},ze={},ld={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(I,N){var O=I.length;I.push(N);e:for(;0<O;){var M=O-1>>>1,B=I[M];if(0<o(B,N))I[M]=N,I[O]=B,O=M;else break e}}function t(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var N=I[0],O=I.pop();if(O!==N){I[0]=O;e:for(var M=0,B=I.length,on=B>>>1;M<on;){var be=2*(M+1)-1,On=I[be],we=be+1,Ne=I[we];if(0>o(On,O))we<B&&0>o(Ne,On)?(I[M]=Ne,I[we]=O,M=we):(I[M]=On,I[be]=O,M=be);else if(we<B&&0>o(Ne,O))I[M]=Ne,I[we]=O,M=we;else break e}}return N}function o(I,N){var O=I.sortIndex-N.sortIndex;return O!==0?O:I.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,c=null,f=3,y=!1,E=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var N=t(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=I)r(u),N.sortIndex=N.expirationTime,n(a,N);else break;N=t(u)}}function x(I){if(v=!1,g(I),!E)if(t(a)!==null)E=!0,V(C);else{var N=t(u);N!==null&&z(x,N.startTime-I)}}function C(I,N){E=!1,v&&(v=!1,m(_),_=-1),y=!0;var O=f;try{for(g(N),c=t(a);c!==null&&(!(c.expirationTime>N)||I&&!L());){var M=c.callback;if(typeof M=="function"){c.callback=null,f=c.priorityLevel;var B=M(c.expirationTime<=N);N=e.unstable_now(),typeof B=="function"?c.callback=B:c===t(a)&&r(a),g(N)}else r(a);c=t(a)}if(c!==null)var on=!0;else{var be=t(u);be!==null&&z(x,be.startTime-N),on=!1}return on}finally{c=null,f=O,y=!1}}var T=!1,R=null,_=-1,P=5,A=-1;function L(){return!(e.unstable_now()-A<P)}function D(){if(R!==null){var I=e.unstable_now();A=I;var N=!0;try{N=R(!0,I)}finally{N?$():(T=!1,R=null)}}else T=!1}var $;if(typeof h=="function")$=function(){h(D)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Q=H.port2;H.port1.onmessage=D,$=function(){Q.postMessage(null)}}else $=function(){S(D,0)};function V(I){R=I,T||(T=!0,$())}function z(I,N){_=S(function(){I(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){E||y||(E=!0,V(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var O=f;f=N;try{return I()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,N){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var O=f;f=I;try{return N()}finally{f=O}},e.unstable_scheduleCallback=function(I,N,O){var M=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?M+O:M):O=M,I){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=O+B,I={id:d++,callback:N,priorityLevel:I,startTime:O,expirationTime:B,sortIndex:-1},O>M?(I.sortIndex=O,n(u,I),t(a)===null&&I===t(u)&&(v?(m(_),_=-1):v=!0,z(x,O-M))):(I.sortIndex=B,n(a,I),E||y||(E=!0,V(C))),I},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(I){var N=f;return function(){var O=f;f=N;try{return I.apply(this,arguments)}finally{f=O}}}})(sd);ld.exports=sd;var oy=ld.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy=p,je=oy;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ad=new Set,zr={};function wt(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(zr[e]=n,e=0;e<n.length;e++)ad.add(n[e])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,ly=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pu={},mu={};function sy(e){return Hl.call(mu,e)?!0:Hl.call(pu,e)?!1:ly.test(e)?mu[e]=!0:(pu[e]=!0,!1)}function ay(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uy(e,n,t,r){if(n===null||typeof n>"u"||ay(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Re(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];me[n]=new Re(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qs=/[\-:]([a-z])/g;function Ys(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Qs,Ys);me[n]=new Re(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Qs,Ys);me[n]=new Re(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Qs,Ys);me[n]=new Re(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ks(e,n,t,r){var o=me.hasOwnProperty(n)?me[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(uy(n,t,o,r)&&(t=null),r||o===null?sy(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var An=iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),kt=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),Xs=Symbol.for("react.strict_mode"),Vl=Symbol.for("react.profiler"),ud=Symbol.for("react.provider"),cd=Symbol.for("react.context"),qs=Symbol.for("react.forward_ref"),Wl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),Js=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),dd=Symbol.for("react.offscreen"),hu=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=hu&&e[hu]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,sl;function Tr(e){if(sl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);sl=n&&n[1]||""}return`
`+sl+e}var al=!1;function ul(e,n){if(!e||al)return"";al=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{al=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Tr(e):""}function cy(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=ul(e.type,!1),e;case 11:return e=ul(e.type.render,!1),e;case 1:return e=ul(e.type,!0),e;default:return""}}function $l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case At:return"Fragment";case kt:return"Portal";case Vl:return"Profiler";case Xs:return"StrictMode";case Wl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cd:return(e.displayName||"Context")+".Consumer";case ud:return(e._context.displayName||"Context")+".Provider";case qs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Js:return n=e.displayName||null,n!==null?n:$l(e.type)||"Memo";case jn:n=e._payload,e=e._init;try{return $l(e(n))}catch{}}return null}function dy(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $l(n);case 8:return n===Xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fy(e){var n=fd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Eo(e){e._valueTracker||(e._valueTracker=fy(e))}function pd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=fd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ql(e,n){var t=n.checked;return te({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function yu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Jn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function md(e,n){n=n.checked,n!=null&&Ks(e,"checked",n,!1)}function Yl(e,n){md(e,n);var t=Jn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Kl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Kl(e,n.type,Jn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function gu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Kl(e,n,t){(n!=="number"||ri(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Nr=Array.isArray;function Bt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Jn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Xl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return te({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Nr(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Jn(t)}}function hd(e,n){var t=Jn(n.value),r=Jn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Eu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function yd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ql(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?yd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wo,gd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ur(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},py=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){py.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ar[n]=Ar[e]})});function vd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+n).trim():n+"px"}function Ed(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=vd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var my=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(e,n){if(n){if(my[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Zl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var es=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,Ht=null,Vt=null;function wu(e){if(e=uo(e)){if(typeof ns!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Ui(n),ns(e.stateNode,e.type,n))}}function wd(e){Ht?Vt?Vt.push(e):Vt=[e]:Ht=e}function xd(){if(Ht){var e=Ht,n=Vt;if(Vt=Ht=null,wu(e),n)for(e=0;e<n.length;e++)wu(n[e])}}function Sd(e,n){return e(n)}function Cd(){}var cl=!1;function Rd(e,n,t){if(cl)return e(n,t);cl=!0;try{return Sd(e,n,t)}finally{cl=!1,(Ht!==null||Vt!==null)&&(Cd(),xd())}}function Br(e,n){var t=e.stateNode;if(t===null)return null;var r=Ui(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var ts=!1;if(Rn)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){ts=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{ts=!1}function hy(e,n,t,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var Pr=!1,oi=null,ii=!1,rs=null,yy={onError:function(e){Pr=!0,oi=e}};function gy(e,n,t,r,o,i,l,s,a){Pr=!1,oi=null,hy.apply(yy,arguments)}function vy(e,n,t,r,o,i,l,s,a){if(gy.apply(this,arguments),Pr){if(Pr){var u=oi;Pr=!1,oi=null}else throw Error(k(198));ii||(ii=!0,rs=u)}}function xt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Td(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function xu(e){if(xt(e)!==e)throw Error(k(188))}function Ey(e){var n=e.alternate;if(!n){if(n=xt(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return xu(o),e;if(i===r)return xu(o),n;i=i.sibling}throw Error(k(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===t){l=!0,t=o,r=i;break}if(s===r){l=!0,r=o,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,r=o;break}if(s===r){l=!0,r=i,t=o;break}s=s.sibling}if(!l)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function Nd(e){return e=Ey(e),e!==null?_d(e):null}function _d(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=_d(e);if(n!==null)return n;e=e.sibling}return null}var Id=je.unstable_scheduleCallback,Su=je.unstable_cancelCallback,wy=je.unstable_shouldYield,xy=je.unstable_requestPaint,oe=je.unstable_now,Sy=je.unstable_getCurrentPriorityLevel,ea=je.unstable_ImmediatePriority,kd=je.unstable_UserBlockingPriority,li=je.unstable_NormalPriority,Cy=je.unstable_LowPriority,Ad=je.unstable_IdlePriority,Mi=null,dn=null;function Ry(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Mi,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:_y,Ty=Math.log,Ny=Math.LN2;function _y(e){return e>>>=0,e===0?32:31-(Ty(e)/Ny|0)|0}var xo=64,So=4194304;function _r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function si(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~o;s!==0?r=_r(s):(i&=l,i!==0&&(r=_r(i)))}else l=t&~o,l!==0?r=_r(l):i!==0&&(r=_r(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-en(n),o=1<<t,r|=e[t],n&=~o;return r}function Iy(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ky(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-en(i),s=1<<l,a=o[l];a===-1?(!(s&t)||s&r)&&(o[l]=Iy(s,n)):a<=n&&(e.expiredLanes|=s),i&=~s}}function os(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pd(){var e=xo;return xo<<=1,!(xo&4194240)&&(xo=64),e}function dl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function so(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-en(n),e[n]=t}function Ay(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-en(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function na(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-en(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var G=0;function bd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Od,ta,Dd,Ld,Md,is=!1,Co=[],Wn=null,Gn=null,$n=null,Hr=new Map,Vr=new Map,Un=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cu(e,n){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(n.pointerId)}}function gr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=uo(n),n!==null&&ta(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function by(e,n,t,r,o){switch(n){case"focusin":return Wn=gr(Wn,e,n,t,r,o),!0;case"dragenter":return Gn=gr(Gn,e,n,t,r,o),!0;case"mouseover":return $n=gr($n,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Hr.set(i,gr(Hr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Vr.set(i,gr(Vr.get(i)||null,e,n,t,r,o)),!0}return!1}function Fd(e){var n=at(e.target);if(n!==null){var t=xt(n);if(t!==null){if(n=t.tag,n===13){if(n=Td(t),n!==null){e.blockedOn=n,Md(e.priority,function(){Dd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ls(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);es=r,t.target.dispatchEvent(r),es=null}else return n=uo(t),n!==null&&ta(n),e.blockedOn=t,!1;n.shift()}return!0}function Ru(e,n,t){Vo(e)&&t.delete(n)}function Oy(){is=!1,Wn!==null&&Vo(Wn)&&(Wn=null),Gn!==null&&Vo(Gn)&&(Gn=null),$n!==null&&Vo($n)&&($n=null),Hr.forEach(Ru),Vr.forEach(Ru)}function vr(e,n){e.blockedOn===n&&(e.blockedOn=null,is||(is=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Oy)))}function Wr(e){function n(o){return vr(o,e)}if(0<Co.length){vr(Co[0],e);for(var t=1;t<Co.length;t++){var r=Co[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Wn!==null&&vr(Wn,e),Gn!==null&&vr(Gn,e),$n!==null&&vr($n,e),Hr.forEach(n),Vr.forEach(n),t=0;t<Un.length;t++)r=Un[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Un.length&&(t=Un[0],t.blockedOn===null);)Fd(t),t.blockedOn===null&&Un.shift()}var Wt=An.ReactCurrentBatchConfig,ai=!0;function Dy(e,n,t,r){var o=G,i=Wt.transition;Wt.transition=null;try{G=1,ra(e,n,t,r)}finally{G=o,Wt.transition=i}}function Ly(e,n,t,r){var o=G,i=Wt.transition;Wt.transition=null;try{G=4,ra(e,n,t,r)}finally{G=o,Wt.transition=i}}function ra(e,n,t,r){if(ai){var o=ls(e,n,t,r);if(o===null)xl(e,n,r,ui,t),Cu(e,r);else if(by(o,e,n,t,r))r.stopPropagation();else if(Cu(e,r),n&4&&-1<Py.indexOf(e)){for(;o!==null;){var i=uo(o);if(i!==null&&Od(i),i=ls(e,n,t,r),i===null&&xl(e,n,r,ui,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else xl(e,n,r,null,t)}}var ui=null;function ls(e,n,t,r){if(ui=null,e=Zs(r),e=at(e),e!==null)if(n=xt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Td(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ui=e,null}function jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sy()){case ea:return 1;case kd:return 4;case li:case Cy:return 16;case Ad:return 536870912;default:return 16}default:return 16}}var Hn=null,oa=null,Wo=null;function zd(){if(Wo)return Wo;var e,n=oa,t=n.length,r,o="value"in Hn?Hn.value:Hn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return Wo=o.slice(e,1<r?1-r:void 0)}function Go(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ro(){return!0}function Tu(){return!1}function Ue(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ro:Tu,this.isPropagationStopped=Tu,this}return te(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),n}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=Ue(lr),ao=te({},lr,{view:0,detail:0}),My=Ue(ao),fl,pl,Er,Fi=te({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:la,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(fl=e.screenX-Er.screenX,pl=e.screenY-Er.screenY):pl=fl=0,Er=e),fl)},movementY:function(e){return"movementY"in e?e.movementY:pl}}),Nu=Ue(Fi),Fy=te({},Fi,{dataTransfer:0}),jy=Ue(Fy),zy=te({},ao,{relatedTarget:0}),ml=Ue(zy),Uy=te({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),By=Ue(Uy),Hy=te({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vy=Ue(Hy),Wy=te({},lr,{data:0}),_u=Ue(Wy),Gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Qy[e])?!!n[e]:!1}function la(){return Yy}var Ky=te({},ao,{key:function(e){if(e.key){var n=Gy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$y[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:la,charCode:function(e){return e.type==="keypress"?Go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xy=Ue(Ky),qy=te({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=Ue(qy),Jy=te({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:la}),Zy=Ue(Jy),eg=te({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ng=Ue(eg),tg=te({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=Ue(tg),og=[9,13,27,32],sa=Rn&&"CompositionEvent"in window,br=null;Rn&&"documentMode"in document&&(br=document.documentMode);var ig=Rn&&"TextEvent"in window&&!br,Ud=Rn&&(!sa||br&&8<br&&11>=br),ku=" ",Au=!1;function Bd(e,n){switch(e){case"keyup":return og.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function lg(e,n){switch(e){case"compositionend":return Hd(n);case"keypress":return n.which!==32?null:(Au=!0,ku);case"textInput":return e=n.data,e===ku&&Au?null:e;default:return null}}function sg(e,n){if(Pt)return e==="compositionend"||!sa&&Bd(e,n)?(e=zd(),Wo=oa=Hn=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ud&&n.locale!=="ko"?null:n.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ag[e.type]:n==="textarea"}function Vd(e,n,t,r){wd(r),n=ci(n,"onChange"),0<n.length&&(t=new ia("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Or=null,Gr=null;function ug(e){ef(e,0)}function ji(e){var n=Dt(e);if(pd(n))return e}function cg(e,n){if(e==="change")return n}var Wd=!1;if(Rn){var hl;if(Rn){var yl="oninput"in document;if(!yl){var bu=document.createElement("div");bu.setAttribute("oninput","return;"),yl=typeof bu.oninput=="function"}hl=yl}else hl=!1;Wd=hl&&(!document.documentMode||9<document.documentMode)}function Ou(){Or&&(Or.detachEvent("onpropertychange",Gd),Gr=Or=null)}function Gd(e){if(e.propertyName==="value"&&ji(Gr)){var n=[];Vd(n,Gr,e,Zs(e)),Rd(ug,n)}}function dg(e,n,t){e==="focusin"?(Ou(),Or=n,Gr=t,Or.attachEvent("onpropertychange",Gd)):e==="focusout"&&Ou()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(Gr)}function pg(e,n){if(e==="click")return ji(n)}function mg(e,n){if(e==="input"||e==="change")return ji(n)}function hg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var tn=typeof Object.is=="function"?Object.is:hg;function $r(e,n){if(tn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Hl.call(n,o)||!tn(e[o],n[o]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lu(e,n){var t=Du(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Du(t)}}function $d(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$d(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qd(){for(var e=window,n=ri();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ri(e.document)}return n}function aa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function yg(e){var n=Qd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&$d(t.ownerDocument.documentElement,t)){if(r!==null&&aa(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Lu(t,i);var l=Lu(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gg=Rn&&"documentMode"in document&&11>=document.documentMode,bt=null,ss=null,Dr=null,as=!1;function Mu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;as||bt==null||bt!==ri(r)||(r=bt,"selectionStart"in r&&aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&$r(Dr,r)||(Dr=r,r=ci(ss,"onSelect"),0<r.length&&(n=new ia("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=bt)))}function To(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ot={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},gl={},Yd={};Rn&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete Ot.animationend.animation,delete Ot.animationiteration.animation,delete Ot.animationstart.animation),"TransitionEvent"in window||delete Ot.transitionend.transition);function zi(e){if(gl[e])return gl[e];if(!Ot[e])return e;var n=Ot[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Yd)return gl[e]=n[t];return e}var Kd=zi("animationend"),Xd=zi("animationiteration"),qd=zi("animationstart"),Jd=zi("transitionend"),Zd=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,n){Zd.set(e,n),wt(n,[e])}for(var vl=0;vl<Fu.length;vl++){var El=Fu[vl],vg=El.toLowerCase(),Eg=El[0].toUpperCase()+El.slice(1);rt(vg,"on"+Eg)}rt(Kd,"onAnimationEnd");rt(Xd,"onAnimationIteration");rt(qd,"onAnimationStart");rt("dblclick","onDoubleClick");rt("focusin","onFocus");rt("focusout","onBlur");rt(Jd,"onTransitionEnd");Kt("onMouseEnter",["mouseout","mouseover"]);Kt("onMouseLeave",["mouseout","mouseover"]);Kt("onPointerEnter",["pointerout","pointerover"]);Kt("onPointerLeave",["pointerout","pointerover"]);wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function ju(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,vy(r,n,void 0,e),e.currentTarget=null}function ef(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;ju(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;ju(o,s,u),i=a}}}if(ii)throw e=rs,ii=!1,rs=null,e}function X(e,n){var t=n[ps];t===void 0&&(t=n[ps]=new Set);var r=e+"__bubble";t.has(r)||(nf(n,e,2,!1),t.add(r))}function wl(e,n,t){var r=0;n&&(r|=4),nf(t,e,r,n)}var No="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[No]){e[No]=!0,ad.forEach(function(t){t!=="selectionchange"&&(wg.has(t)||wl(t,!1,e),wl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[No]||(n[No]=!0,wl("selectionchange",!1,n))}}function nf(e,n,t,r){switch(jd(n)){case 1:var o=Dy;break;case 4:o=Ly;break;default:o=ra}t=o.bind(null,n,t,e),o=void 0,!ts||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function xl(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=at(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Rd(function(){var u=i,d=Zs(t),c=[];e:{var f=Zd.get(e);if(f!==void 0){var y=ia,E=e;switch(e){case"keypress":if(Go(t)===0)break e;case"keydown":case"keyup":y=Xy;break;case"focusin":E="focus",y=ml;break;case"focusout":E="blur",y=ml;break;case"beforeblur":case"afterblur":y=ml;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Zy;break;case Kd:case Xd:case qd:y=By;break;case Jd:y=ng;break;case"scroll":y=My;break;case"wheel":y=rg;break;case"copy":case"cut":case"paste":y=Vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Iu}var v=(n&4)!==0,S=!v&&e==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,g;h!==null;){g=h;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=Br(h,m),x!=null&&v.push(Yr(h,x,g)))),S)break;h=h.return}0<v.length&&(f=new y(f,E,null,t,d),c.push({event:f,listeners:v}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&t!==es&&(E=t.relatedTarget||t.fromElement)&&(at(E)||E[Tn]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(E=t.relatedTarget||t.toElement,y=u,E=E?at(E):null,E!==null&&(S=xt(E),E!==S||E.tag!==5&&E.tag!==6)&&(E=null)):(y=null,E=u),y!==E)){if(v=Nu,x="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Iu,x="onPointerLeave",m="onPointerEnter",h="pointer"),S=y==null?f:Dt(y),g=E==null?f:Dt(E),f=new v(x,h+"leave",y,t,d),f.target=S,f.relatedTarget=g,x=null,at(d)===u&&(v=new v(m,h+"enter",E,t,d),v.target=g,v.relatedTarget=S,x=v),S=x,y&&E)n:{for(v=y,m=E,h=0,g=v;g;g=Tt(g))h++;for(g=0,x=m;x;x=Tt(x))g++;for(;0<h-g;)v=Tt(v),h--;for(;0<g-h;)m=Tt(m),g--;for(;h--;){if(v===m||m!==null&&v===m.alternate)break n;v=Tt(v),m=Tt(m)}v=null}else v=null;y!==null&&zu(c,f,y,v,!1),E!==null&&S!==null&&zu(c,S,E,v,!0)}}e:{if(f=u?Dt(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var C=cg;else if(Pu(f))if(Wd)C=mg;else{C=fg;var T=dg}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=pg);if(C&&(C=C(e,u))){Vd(c,C,t,d);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Kl(f,"number",f.value)}switch(T=u?Dt(u):window,e){case"focusin":(Pu(T)||T.contentEditable==="true")&&(bt=T,ss=u,Dr=null);break;case"focusout":Dr=ss=bt=null;break;case"mousedown":as=!0;break;case"contextmenu":case"mouseup":case"dragend":as=!1,Mu(c,t,d);break;case"selectionchange":if(gg)break;case"keydown":case"keyup":Mu(c,t,d)}var R;if(sa)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Pt?Bd(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Ud&&t.locale!=="ko"&&(Pt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Pt&&(R=zd()):(Hn=d,oa="value"in Hn?Hn.value:Hn.textContent,Pt=!0)),T=ci(u,_),0<T.length&&(_=new _u(_,e,null,t,d),c.push({event:_,listeners:T}),R?_.data=R:(R=Hd(t),R!==null&&(_.data=R)))),(R=ig?lg(e,t):sg(e,t))&&(u=ci(u,"onBeforeInput"),0<u.length&&(d=new _u("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:u}),d.data=R))}ef(c,n)})}function Yr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ci(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Br(e,t),i!=null&&r.unshift(Yr(e,i,o)),i=Br(e,n),i!=null&&r.push(Yr(e,i,o))),e=e.return}return r}function Tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Br(t,i),a!=null&&l.unshift(Yr(t,a,s))):o||(a=Br(t,i),a!=null&&l.push(Yr(t,a,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var xg=/\r\n?/g,Sg=/\u0000|\uFFFD/g;function Uu(e){return(typeof e=="string"?e:""+e).replace(xg,`
`).replace(Sg,"")}function _o(e,n,t){if(n=Uu(n),Uu(e)!==n&&t)throw Error(k(425))}function di(){}var us=null,cs=null;function ds(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fs=typeof setTimeout=="function"?setTimeout:void 0,Cg=typeof clearTimeout=="function"?clearTimeout:void 0,Bu=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof Bu<"u"?function(e){return Bu.resolve(null).then(e).catch(Tg)}:fs;function Tg(e){setTimeout(function(){throw e})}function Sl(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Wr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Wr(n)}function Qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Hu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),an="__reactFiber$"+sr,Kr="__reactProps$"+sr,Tn="__reactContainer$"+sr,ps="__reactEvents$"+sr,Ng="__reactListeners$"+sr,_g="__reactHandles$"+sr;function at(e){var n=e[an];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Tn]||t[an]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Hu(e);e!==null;){if(t=e[an])return t;e=Hu(e)}return n}e=t,t=e.parentNode}return null}function uo(e){return e=e[an]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ui(e){return e[Kr]||null}var ms=[],Lt=-1;function ot(e){return{current:e}}function q(e){0>Lt||(e.current=ms[Lt],ms[Lt]=null,Lt--)}function Y(e,n){Lt++,ms[Lt]=e.current,e.current=n}var Zn={},ve=ot(Zn),ke=ot(!1),mt=Zn;function Xt(e,n){var t=e.type.contextTypes;if(!t)return Zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function fi(){q(ke),q(ve)}function Vu(e,n,t){if(ve.current!==Zn)throw Error(k(168));Y(ve,n),Y(ke,t)}function tf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(k(108,dy(e)||"Unknown",o));return te({},t,r)}function pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,mt=ve.current,Y(ve,e),Y(ke,ke.current),!0}function Wu(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=tf(e,n,mt),r.__reactInternalMemoizedMergedChildContext=e,q(ke),q(ve),Y(ve,e)):q(ke),Y(ke,t)}var wn=null,Bi=!1,Cl=!1;function rf(e){wn===null?wn=[e]:wn.push(e)}function Ig(e){Bi=!0,rf(e)}function it(){if(!Cl&&wn!==null){Cl=!0;var e=0,n=G;try{var t=wn;for(G=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}wn=null,Bi=!1}catch(o){throw wn!==null&&(wn=wn.slice(e+1)),Id(ea,it),o}finally{G=n,Cl=!1}}return null}var Mt=[],Ft=0,mi=null,hi=0,He=[],Ve=0,ht=null,xn=1,Sn="";function lt(e,n){Mt[Ft++]=hi,Mt[Ft++]=mi,mi=e,hi=n}function of(e,n,t){He[Ve++]=xn,He[Ve++]=Sn,He[Ve++]=ht,ht=e;var r=xn;e=Sn;var o=32-en(r)-1;r&=~(1<<o),t+=1;var i=32-en(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,xn=1<<32-en(n)+o|t<<o|r,Sn=i+e}else xn=1<<i|t<<o|r,Sn=e}function ua(e){e.return!==null&&(lt(e,1),of(e,1,0))}function ca(e){for(;e===mi;)mi=Mt[--Ft],Mt[Ft]=null,hi=Mt[--Ft],Mt[Ft]=null;for(;e===ht;)ht=He[--Ve],He[Ve]=null,Sn=He[--Ve],He[Ve]=null,xn=He[--Ve],He[Ve]=null}var Me=null,Le=null,J=!1,Ze=null;function lf(e,n){var t=We(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Gu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Me=e,Le=Qn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Me=e,Le=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ht!==null?{id:xn,overflow:Sn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=We(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Me=e,Le=null,!0):!1;default:return!1}}function hs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ys(e){if(J){var n=Le;if(n){var t=n;if(!Gu(e,n)){if(hs(e))throw Error(k(418));n=Qn(t.nextSibling);var r=Me;n&&Gu(e,n)?lf(r,t):(e.flags=e.flags&-4097|2,J=!1,Me=e)}}else{if(hs(e))throw Error(k(418));e.flags=e.flags&-4097|2,J=!1,Me=e}}}function $u(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Io(e){if(e!==Me)return!1;if(!J)return $u(e),J=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ds(e.type,e.memoizedProps)),n&&(n=Le)){if(hs(e))throw sf(),Error(k(418));for(;n;)lf(e,n),n=Qn(n.nextSibling)}if($u(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Le=Qn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Le=null}}else Le=Me?Qn(e.stateNode.nextSibling):null;return!0}function sf(){for(var e=Le;e;)e=Qn(e.nextSibling)}function qt(){Le=Me=null,J=!1}function da(e){Ze===null?Ze=[e]:Ze.push(e)}var kg=An.ReactCurrentBatchConfig;function wr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function ko(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Qu(e){var n=e._init;return n(e._payload)}function af(e){function n(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function t(m,h){if(!e)return null;for(;h!==null;)n(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function o(m,h){return m=qn(m,h),m.index=0,m.sibling=null,m}function i(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,h,g,x){return h===null||h.tag!==6?(h=Al(g,m.mode,x),h.return=m,h):(h=o(h,g),h.return=m,h)}function a(m,h,g,x){var C=g.type;return C===At?d(m,h,g.props.children,x,g.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jn&&Qu(C)===h.type)?(x=o(h,g.props),x.ref=wr(m,h,g),x.return=m,x):(x=Jo(g.type,g.key,g.props,null,m.mode,x),x.ref=wr(m,h,g),x.return=m,x)}function u(m,h,g,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Pl(g,m.mode,x),h.return=m,h):(h=o(h,g.children||[]),h.return=m,h)}function d(m,h,g,x,C){return h===null||h.tag!==7?(h=pt(g,m.mode,x,C),h.return=m,h):(h=o(h,g),h.return=m,h)}function c(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Al(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vo:return g=Jo(h.type,h.key,h.props,null,m.mode,g),g.ref=wr(m,null,h),g.return=m,g;case kt:return h=Pl(h,m.mode,g),h.return=m,h;case jn:var x=h._init;return c(m,x(h._payload),g)}if(Nr(h)||hr(h))return h=pt(h,m.mode,g,null),h.return=m,h;ko(m,h)}return null}function f(m,h,g,x){var C=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:s(m,h,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vo:return g.key===C?a(m,h,g,x):null;case kt:return g.key===C?u(m,h,g,x):null;case jn:return C=g._init,f(m,h,C(g._payload),x)}if(Nr(g)||hr(g))return C!==null?null:d(m,h,g,x,null);ko(m,g)}return null}function y(m,h,g,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,s(h,m,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vo:return m=m.get(x.key===null?g:x.key)||null,a(h,m,x,C);case kt:return m=m.get(x.key===null?g:x.key)||null,u(h,m,x,C);case jn:var T=x._init;return y(m,h,g,T(x._payload),C)}if(Nr(x)||hr(x))return m=m.get(g)||null,d(h,m,x,C,null);ko(h,x)}return null}function E(m,h,g,x){for(var C=null,T=null,R=h,_=h=0,P=null;R!==null&&_<g.length;_++){R.index>_?(P=R,R=null):P=R.sibling;var A=f(m,R,g[_],x);if(A===null){R===null&&(R=P);break}e&&R&&A.alternate===null&&n(m,R),h=i(A,h,_),T===null?C=A:T.sibling=A,T=A,R=P}if(_===g.length)return t(m,R),J&&lt(m,_),C;if(R===null){for(;_<g.length;_++)R=c(m,g[_],x),R!==null&&(h=i(R,h,_),T===null?C=R:T.sibling=R,T=R);return J&&lt(m,_),C}for(R=r(m,R);_<g.length;_++)P=y(R,m,_,g[_],x),P!==null&&(e&&P.alternate!==null&&R.delete(P.key===null?_:P.key),h=i(P,h,_),T===null?C=P:T.sibling=P,T=P);return e&&R.forEach(function(L){return n(m,L)}),J&&lt(m,_),C}function v(m,h,g,x){var C=hr(g);if(typeof C!="function")throw Error(k(150));if(g=C.call(g),g==null)throw Error(k(151));for(var T=C=null,R=h,_=h=0,P=null,A=g.next();R!==null&&!A.done;_++,A=g.next()){R.index>_?(P=R,R=null):P=R.sibling;var L=f(m,R,A.value,x);if(L===null){R===null&&(R=P);break}e&&R&&L.alternate===null&&n(m,R),h=i(L,h,_),T===null?C=L:T.sibling=L,T=L,R=P}if(A.done)return t(m,R),J&&lt(m,_),C;if(R===null){for(;!A.done;_++,A=g.next())A=c(m,A.value,x),A!==null&&(h=i(A,h,_),T===null?C=A:T.sibling=A,T=A);return J&&lt(m,_),C}for(R=r(m,R);!A.done;_++,A=g.next())A=y(R,m,_,A.value,x),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?_:A.key),h=i(A,h,_),T===null?C=A:T.sibling=A,T=A);return e&&R.forEach(function(D){return n(m,D)}),J&&lt(m,_),C}function S(m,h,g,x){if(typeof g=="object"&&g!==null&&g.type===At&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case vo:e:{for(var C=g.key,T=h;T!==null;){if(T.key===C){if(C=g.type,C===At){if(T.tag===7){t(m,T.sibling),h=o(T,g.props.children),h.return=m,m=h;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jn&&Qu(C)===T.type){t(m,T.sibling),h=o(T,g.props),h.ref=wr(m,T,g),h.return=m,m=h;break e}t(m,T);break}else n(m,T);T=T.sibling}g.type===At?(h=pt(g.props.children,m.mode,x,g.key),h.return=m,m=h):(x=Jo(g.type,g.key,g.props,null,m.mode,x),x.ref=wr(m,h,g),x.return=m,m=x)}return l(m);case kt:e:{for(T=g.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){t(m,h.sibling),h=o(h,g.children||[]),h.return=m,m=h;break e}else{t(m,h);break}else n(m,h);h=h.sibling}h=Pl(g,m.mode,x),h.return=m,m=h}return l(m);case jn:return T=g._init,S(m,h,T(g._payload),x)}if(Nr(g))return E(m,h,g,x);if(hr(g))return v(m,h,g,x);ko(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(t(m,h.sibling),h=o(h,g),h.return=m,m=h):(t(m,h),h=Al(g,m.mode,x),h.return=m,m=h),l(m)):t(m,h)}return S}var Jt=af(!0),uf=af(!1),yi=ot(null),gi=null,jt=null,fa=null;function pa(){fa=jt=gi=null}function ma(e){var n=yi.current;q(yi),e._currentValue=n}function gs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Gt(e,n){gi=e,fa=jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ie=!0),e.firstContext=null)}function Qe(e){var n=e._currentValue;if(fa!==e)if(e={context:e,memoizedValue:n,next:null},jt===null){if(gi===null)throw Error(k(308));jt=e,gi.dependencies={lanes:0,firstContext:e}}else jt=jt.next=e;return n}var ut=null;function ha(e){ut===null?ut=[e]:ut.push(e)}function cf(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,ha(n)):(t.next=o.next,o.next=t),n.interleaved=t,Nn(e,r)}function Nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var zn=!1;function ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function df(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Nn(e,t)}return o=r.interleaved,o===null?(n.next=n,ha(r)):(n.next=o.next,o.next=n),r.interleaved=n,Nn(e,t)}function $o(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,na(e,t)}}function Yu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function vi(e,n,t,r){var o=e.updateQueue;zn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(i!==null){var c=o.baseState;l=0,d=u=a=null,s=i;do{var f=s.lane,y=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,v=s;switch(f=n,y=t,v.tag){case 1:if(E=v.payload,typeof E=="function"){c=E.call(y,c,f);break e}c=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=v.payload,f=typeof E=="function"?E.call(y,c,f):E,f==null)break e;c=te({},c,f);break e;case 2:zn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else y={eventTime:y,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=y,a=c):d=d.next=y,l|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(d===null&&(a=c),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=d,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);gt|=l,e.lanes=l,e.memoizedState=c}}function Ku(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var co={},fn=ot(co),Xr=ot(co),qr=ot(co);function ct(e){if(e===co)throw Error(k(174));return e}function ga(e,n){switch(Y(qr,n),Y(Xr,e),Y(fn,co),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ql(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ql(n,e)}q(fn),Y(fn,n)}function Zt(){q(fn),q(Xr),q(qr)}function ff(e){ct(qr.current);var n=ct(fn.current),t=ql(n,e.type);n!==t&&(Y(Xr,e),Y(fn,t))}function va(e){Xr.current===e&&(q(fn),q(Xr))}var ee=ot(0);function Ei(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Rl=[];function Ea(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var Qo=An.ReactCurrentDispatcher,Tl=An.ReactCurrentBatchConfig,yt=0,ne=null,se=null,ce=null,wi=!1,Lr=!1,Jr=0,Ag=0;function he(){throw Error(k(321))}function wa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!tn(e[t],n[t]))return!1;return!0}function xa(e,n,t,r,o,i){if(yt=i,ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Qo.current=e===null||e.memoizedState===null?Dg:Lg,e=t(r,o),Lr){i=0;do{if(Lr=!1,Jr=0,25<=i)throw Error(k(301));i+=1,ce=se=null,n.updateQueue=null,Qo.current=Mg,e=t(r,o)}while(Lr)}if(Qo.current=xi,n=se!==null&&se.next!==null,yt=0,ce=se=ne=null,wi=!1,n)throw Error(k(300));return e}function Sa(){var e=Jr!==0;return Jr=0,e}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?ne.memoizedState=ce=e:ce=ce.next=e,ce}function Ye(){if(se===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var n=ce===null?ne.memoizedState:ce.next;if(n!==null)ce=n,se=e;else{if(e===null)throw Error(k(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?ne.memoizedState=ce=e:ce=ce.next=e}return ce}function Zr(e,n){return typeof n=="function"?n(e):n}function Nl(e){var n=Ye(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=se,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var d=u.lane;if((yt&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,l=r):a=a.next=c,ne.lanes|=d,gt|=d}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,tn(r,n.memoizedState)||(Ie=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,ne.lanes|=i,gt|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function _l(e){var n=Ye(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);tn(i,n.memoizedState)||(Ie=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function pf(){}function mf(e,n){var t=ne,r=Ye(),o=n(),i=!tn(r.memoizedState,o);if(i&&(r.memoizedState=o,Ie=!0),r=r.queue,Ca(gf.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ce!==null&&ce.memoizedState.tag&1){if(t.flags|=2048,eo(9,yf.bind(null,t,r,o,n),void 0,null),de===null)throw Error(k(349));yt&30||hf(t,n,o)}return o}function hf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ne.updateQueue,n===null?(n={lastEffect:null,stores:null},ne.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function yf(e,n,t,r){n.value=t,n.getSnapshot=r,vf(n)&&Ef(e)}function gf(e,n,t){return t(function(){vf(n)&&Ef(e)})}function vf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!tn(e,t)}catch{return!0}}function Ef(e){var n=Nn(e,1);n!==null&&nn(n,e,1,-1)}function Xu(e){var n=sn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},n.queue=e,e=e.dispatch=Og.bind(null,ne,e),[n.memoizedState,e]}function eo(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ne.updateQueue,n===null?(n={lastEffect:null,stores:null},ne.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function wf(){return Ye().memoizedState}function Yo(e,n,t,r){var o=sn();ne.flags|=e,o.memoizedState=eo(1|n,t,void 0,r===void 0?null:r)}function Hi(e,n,t,r){var o=Ye();r=r===void 0?null:r;var i=void 0;if(se!==null){var l=se.memoizedState;if(i=l.destroy,r!==null&&wa(r,l.deps)){o.memoizedState=eo(n,t,i,r);return}}ne.flags|=e,o.memoizedState=eo(1|n,t,i,r)}function qu(e,n){return Yo(8390656,8,e,n)}function Ca(e,n){return Hi(2048,8,e,n)}function xf(e,n){return Hi(4,2,e,n)}function Sf(e,n){return Hi(4,4,e,n)}function Cf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rf(e,n,t){return t=t!=null?t.concat([e]):null,Hi(4,4,Cf.bind(null,n,e),t)}function Ra(){}function Tf(e,n){var t=Ye();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&wa(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Nf(e,n){var t=Ye();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&wa(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function _f(e,n,t){return yt&21?(tn(t,n)||(t=Pd(),ne.lanes|=t,gt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=t)}function Pg(e,n){var t=G;G=t!==0&&4>t?t:4,e(!0);var r=Tl.transition;Tl.transition={};try{e(!1),n()}finally{G=t,Tl.transition=r}}function If(){return Ye().memoizedState}function bg(e,n,t){var r=Xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},kf(e))Af(n,t);else if(t=cf(e,n,t,r),t!==null){var o=Se();nn(t,e,r,o),Pf(t,n,r)}}function Og(e,n,t){var r=Xn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(kf(e))Af(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,s=i(l,t);if(o.hasEagerState=!0,o.eagerState=s,tn(s,l)){var a=n.interleaved;a===null?(o.next=o,ha(n)):(o.next=a.next,a.next=o),n.interleaved=o;return}}catch{}finally{}t=cf(e,n,o,r),t!==null&&(o=Se(),nn(t,e,r,o),Pf(t,n,r))}}function kf(e){var n=e.alternate;return e===ne||n!==null&&n===ne}function Af(e,n){Lr=wi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,na(e,t)}}var xi={readContext:Qe,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Dg={readContext:Qe,useCallback:function(e,n){return sn().memoizedState=[e,n===void 0?null:n],e},useContext:Qe,useEffect:qu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Yo(4194308,4,Cf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Yo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Yo(4,2,e,n)},useMemo:function(e,n){var t=sn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=sn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=bg.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var n=sn();return e={current:e},n.memoizedState=e},useState:Xu,useDebugValue:Ra,useDeferredValue:function(e){return sn().memoizedState=e},useTransition:function(){var e=Xu(!1),n=e[0];return e=Pg.bind(null,e[1]),sn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ne,o=sn();if(J){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),de===null)throw Error(k(349));yt&30||hf(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,qu(gf.bind(null,r,i,e),[e]),r.flags|=2048,eo(9,yf.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=sn(),n=de.identifierPrefix;if(J){var t=Sn,r=xn;t=(r&~(1<<32-en(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ag++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Lg={readContext:Qe,useCallback:Tf,useContext:Qe,useEffect:Ca,useImperativeHandle:Rf,useInsertionEffect:xf,useLayoutEffect:Sf,useMemo:Nf,useReducer:Nl,useRef:wf,useState:function(){return Nl(Zr)},useDebugValue:Ra,useDeferredValue:function(e){var n=Ye();return _f(n,se.memoizedState,e)},useTransition:function(){var e=Nl(Zr)[0],n=Ye().memoizedState;return[e,n]},useMutableSource:pf,useSyncExternalStore:mf,useId:If,unstable_isNewReconciler:!1},Mg={readContext:Qe,useCallback:Tf,useContext:Qe,useEffect:Ca,useImperativeHandle:Rf,useInsertionEffect:xf,useLayoutEffect:Sf,useMemo:Nf,useReducer:_l,useRef:wf,useState:function(){return _l(Zr)},useDebugValue:Ra,useDeferredValue:function(e){var n=Ye();return se===null?n.memoizedState=e:_f(n,se.memoizedState,e)},useTransition:function(){var e=_l(Zr)[0],n=Ye().memoizedState;return[e,n]},useMutableSource:pf,useSyncExternalStore:mf,useId:If,unstable_isNewReconciler:!1};function qe(e,n){if(e&&e.defaultProps){n=te({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function vs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:te({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Vi={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Se(),o=Xn(e),i=Cn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Yn(e,i,o),n!==null&&(nn(n,e,o,r),$o(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Se(),o=Xn(e),i=Cn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Yn(e,i,o),n!==null&&(nn(n,e,o,r),$o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Se(),r=Xn(e),o=Cn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Yn(e,o,r),n!==null&&(nn(n,e,r,t),$o(n,e,r))}};function Ju(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!$r(t,r)||!$r(o,i):!0}function bf(e,n,t){var r=!1,o=Zn,i=n.contextType;return typeof i=="object"&&i!==null?i=Qe(i):(o=Ae(n)?mt:ve.current,r=n.contextTypes,i=(r=r!=null)?Xt(e,o):Zn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Vi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Zu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Vi.enqueueReplaceState(n,n.state,null)}function Es(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},ya(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Qe(i):(i=Ae(n)?mt:ve.current,o.context=Xt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(vs(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Vi.enqueueReplaceState(o,o.state,null),vi(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,n){try{var t="",r=n;do t+=cy(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Il(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ws(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Fg=typeof WeakMap=="function"?WeakMap:Map;function Of(e,n,t){t=Cn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ci||(Ci=!0,As=r),ws(e,n)},t}function Df(e,n,t){t=Cn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){ws(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ws(e,n),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function ec(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Fg;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=qg.bind(null,e,n,t),n.then(e,e))}function nc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function tc(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Cn(-1,1),n.tag=2,Yn(t,n,1))),t.lanes|=1),e)}var jg=An.ReactCurrentOwner,Ie=!1;function xe(e,n,t,r){n.child=e===null?uf(n,null,t,r):Jt(n,e.child,t,r)}function rc(e,n,t,r,o){t=t.render;var i=n.ref;return Gt(n,o),r=xa(e,n,t,r,i,o),t=Sa(),e!==null&&!Ie?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,_n(e,n,o)):(J&&t&&ua(n),n.flags|=1,xe(e,n,r,o),n.child)}function oc(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!ba(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Lf(e,n,i,r,o)):(e=Jo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:$r,t(l,r)&&e.ref===n.ref)return _n(e,n,o)}return n.flags|=1,e=qn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Lf(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if($r(i,r)&&e.ref===n.ref)if(Ie=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ie=!0);else return n.lanes=e.lanes,_n(e,n,o)}return xs(e,n,t,r,o)}function Mf(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Ut,Oe),Oe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Y(Ut,Oe),Oe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,Y(Ut,Oe),Oe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,Y(Ut,Oe),Oe|=r;return xe(e,n,o,t),n.child}function Ff(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function xs(e,n,t,r,o){var i=Ae(t)?mt:ve.current;return i=Xt(n,i),Gt(n,o),t=xa(e,n,t,r,i,o),r=Sa(),e!==null&&!Ie?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,_n(e,n,o)):(J&&r&&ua(n),n.flags|=1,xe(e,n,t,o),n.child)}function ic(e,n,t,r,o){if(Ae(t)){var i=!0;pi(n)}else i=!1;if(Gt(n,o),n.stateNode===null)Ko(e,n),bf(n,t,r),Es(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var a=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=Ae(t)?mt:ve.current,u=Xt(n,u));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Zu(n,l,r,u),zn=!1;var f=n.memoizedState;l.state=f,vi(n,r,l,o),a=n.memoizedState,s!==r||f!==a||ke.current||zn?(typeof d=="function"&&(vs(n,t,d,r),a=n.memoizedState),(s=zn||Ju(n,t,s,r,f,a,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,df(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:qe(n.type,s),l.props=u,c=n.pendingProps,f=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=Qe(a):(a=Ae(t)?mt:ve.current,a=Xt(n,a));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==c||f!==a)&&Zu(n,l,r,a),zn=!1,f=n.memoizedState,l.state=f,vi(n,r,l,o);var E=n.memoizedState;s!==c||f!==E||ke.current||zn?(typeof y=="function"&&(vs(n,t,y,r),E=n.memoizedState),(u=zn||Ju(n,t,u,r,f,E,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,E,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,E,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=E),l.props=r,l.state=E,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return Ss(e,n,t,r,i,o)}function Ss(e,n,t,r,o,i){Ff(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&Wu(n,t,!1),_n(e,n,i);r=n.stateNode,jg.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Jt(n,e.child,null,i),n.child=Jt(n,null,s,i)):xe(e,n,s,i),n.memoizedState=r.state,o&&Wu(n,t,!0),n.child}function jf(e){var n=e.stateNode;n.pendingContext?Vu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Vu(e,n.context,!1),ga(e,n.containerInfo)}function lc(e,n,t,r,o){return qt(),da(o),n.flags|=256,xe(e,n,t,r),n.child}var Cs={dehydrated:null,treeContext:null,retryLane:0};function Rs(e){return{baseLanes:e,cachePool:null,transitions:null}}function zf(e,n,t){var r=n.pendingProps,o=ee.current,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(ee,o&1),e===null)return ys(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=$i(l,r,0,null),e=pt(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Rs(t),n.memoizedState=Cs,e):Ta(n,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return zg(e,n,l,r,s,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=qn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=qn(s,i):(i=pt(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?Rs(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=Cs,r}return i=e.child,e=i.sibling,r=qn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ta(e,n){return n=$i({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ao(e,n,t,r){return r!==null&&da(r),Jt(n,e.child,null,t),e=Ta(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zg(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=Il(Error(k(422))),Ao(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=$i({mode:"visible",children:r.children},o,0,null),i=pt(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Jt(n,e.child,null,l),n.child.memoizedState=Rs(l),n.memoizedState=Cs,i);if(!(n.mode&1))return Ao(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=Il(i,r,void 0),Ao(e,n,l,r)}if(s=(l&e.childLanes)!==0,Ie||s){if(r=de,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nn(e,o),nn(r,e,o,-1))}return Pa(),r=Il(Error(k(421))),Ao(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Jg.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Le=Qn(o.nextSibling),Me=n,J=!0,Ze=null,e!==null&&(He[Ve++]=xn,He[Ve++]=Sn,He[Ve++]=ht,xn=e.id,Sn=e.overflow,ht=n),n=Ta(n,r.children),n.flags|=4096,n)}function sc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),gs(e.return,n,t)}function kl(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Uf(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,n,r.children,t),r=ee.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sc(e,t,n);else if(e.tag===19)sc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ee,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Ei(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),kl(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Ei(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}kl(n,!0,t,null,i);break;case"together":kl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ko(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function _n(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),gt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ug(e,n,t){switch(n.tag){case 3:jf(n),qt();break;case 5:ff(n);break;case 1:Ae(n.type)&&pi(n);break;case 4:ga(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;Y(yi,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Y(ee,ee.current&1),n.flags|=128,null):t&n.child.childLanes?zf(e,n,t):(Y(ee,ee.current&1),e=_n(e,n,t),e!==null?e.sibling:null);Y(ee,ee.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Uf(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(ee,ee.current),r)break;return null;case 22:case 23:return n.lanes=0,Mf(e,n,t)}return _n(e,n,t)}var Bf,Ts,Hf,Vf;Bf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ts=function(){};Hf=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,ct(fn.current);var i=null;switch(t){case"input":o=Ql(e,o),r=Ql(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=Xl(e,o),r=Xl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=di)}Jl(t,r);var l;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(i||(i=[]),i.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&X("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Vf=function(e,n,t,r){t!==r&&(n.flags|=4)};function xr(e,n){if(!J)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Bg(e,n,t){var r=n.pendingProps;switch(ca(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(n),null;case 1:return Ae(n.type)&&fi(),ye(n),null;case 3:return r=n.stateNode,Zt(),q(ke),q(ve),Ea(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Io(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ze!==null&&(Os(Ze),Ze=null))),Ts(e,n),ye(n),null;case 5:va(n);var o=ct(qr.current);if(t=n.type,e!==null&&n.stateNode!=null)Hf(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return ye(n),null}if(e=ct(fn.current),Io(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[an]=n,r[Kr]=i,e=(n.mode&1)!==0,t){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<Ir.length;o++)X(Ir[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":yu(r,i),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},X("invalid",r);break;case"textarea":vu(r,i),X("invalid",r)}Jl(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&_o(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&_o(r.textContent,s,e),o=["children",""+s]):zr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&X("scroll",r)}switch(t){case"input":Eo(r),gu(r,i,!0);break;case"textarea":Eo(r),Eu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=di)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[an]=n,e[Kr]=r,Bf(e,n,!1,!1),n.stateNode=e;e:{switch(l=Zl(t,r),t){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ir.length;o++)X(Ir[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":yu(e,r),o=Ql(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),X("invalid",e);break;case"textarea":vu(e,r),o=Xl(e,r),X("invalid",e);break;default:o=r}Jl(t,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Ed(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&gd(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Ur(e,a):typeof a=="number"&&Ur(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&X("scroll",e):a!=null&&Ks(e,i,a,l))}switch(t){case"input":Eo(e),gu(e,r,!1);break;case"textarea":Eo(e),Eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Bt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=di)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ye(n),null;case 6:if(e&&n.stateNode!=null)Vf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=ct(qr.current),ct(fn.current),Io(n)){if(r=n.stateNode,t=n.memoizedProps,r[an]=n,(i=r.nodeValue!==t)&&(e=Me,e!==null))switch(e.tag){case 3:_o(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_o(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[an]=n,n.stateNode=r}return ye(n),null;case 13:if(q(ee),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Le!==null&&n.mode&1&&!(n.flags&128))sf(),qt(),n.flags|=98560,i=!1;else if(i=Io(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[an]=n}else qt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ye(n),i=!1}else Ze!==null&&(Os(Ze),Ze=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ee.current&1?ue===0&&(ue=3):Pa())),n.updateQueue!==null&&(n.flags|=4),ye(n),null);case 4:return Zt(),Ts(e,n),e===null&&Qr(n.stateNode.containerInfo),ye(n),null;case 10:return ma(n.type._context),ye(n),null;case 17:return Ae(n.type)&&fi(),ye(n),null;case 19:if(q(ee),i=n.memoizedState,i===null)return ye(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)xr(i,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Ei(e),l!==null){for(n.flags|=128,xr(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Y(ee,ee.current&1|2),n.child}e=e.sibling}i.tail!==null&&oe()>nr&&(n.flags|=128,r=!0,xr(i,!1),n.lanes=4194304)}else{if(!r)if(e=Ei(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),xr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!J)return ye(n),null}else 2*oe()-i.renderingStartTime>nr&&t!==1073741824&&(n.flags|=128,r=!0,xr(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=oe(),n.sibling=null,t=ee.current,Y(ee,r?t&1|2:t&1),n):(ye(n),null);case 22:case 23:return Aa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Oe&1073741824&&(ye(n),n.subtreeFlags&6&&(n.flags|=8192)):ye(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Hg(e,n){switch(ca(n),n.tag){case 1:return Ae(n.type)&&fi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zt(),q(ke),q(ve),Ea(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return va(n),null;case 13:if(q(ee),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));qt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(ee),null;case 4:return Zt(),null;case 10:return ma(n.type._context),null;case 22:case 23:return Aa(),null;case 24:return null;default:return null}}var Po=!1,ge=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,b=null;function zt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){re(e,n,r)}else t.current=null}function Ns(e,n,t){try{t()}catch(r){re(e,n,r)}}var ac=!1;function Wg(e,n){if(us=ai,e=Qd(),aa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,a=-1,u=0,d=0,c=e,f=null;n:for(;;){for(var y;c!==t||o!==0&&c.nodeType!==3||(s=l+o),c!==i||r!==0&&c.nodeType!==3||(a=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(y=c.firstChild)!==null;)f=c,c=y;for(;;){if(c===e)break n;if(f===t&&++u===o&&(s=l),f===i&&++d===r&&(a=l),(y=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=y}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(cs={focusedElem:e,selectionRange:t},ai=!1,b=n;b!==null;)if(n=b,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,b=e;else for(;b!==null;){n=b;try{var E=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var v=E.memoizedProps,S=E.memoizedState,m=n.stateNode,h=m.getSnapshotBeforeUpdate(n.elementType===n.type?v:qe(n.type,v),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){re(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,b=e;break}b=n.return}return E=ac,ac=!1,E}function Mr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ns(n,t,i)}o=o.next}while(o!==r)}}function Wi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function _s(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wf(e){var n=e.alternate;n!==null&&(e.alternate=null,Wf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[an],delete n[Kr],delete n[ps],delete n[Ng],delete n[_g])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Is(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=di));else if(r!==4&&(e=e.child,e!==null))for(Is(e,n,t),e=e.sibling;e!==null;)Is(e,n,t),e=e.sibling}function ks(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ks(e,n,t),e=e.sibling;e!==null;)ks(e,n,t),e=e.sibling}var fe=null,Je=!1;function Dn(e,n,t){for(t=t.child;t!==null;)$f(e,n,t),t=t.sibling}function $f(e,n,t){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Mi,t)}catch{}switch(t.tag){case 5:ge||zt(t,n);case 6:var r=fe,o=Je;fe=null,Dn(e,n,t),fe=r,Je=o,fe!==null&&(Je?(e=fe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):fe.removeChild(t.stateNode));break;case 18:fe!==null&&(Je?(e=fe,t=t.stateNode,e.nodeType===8?Sl(e.parentNode,t):e.nodeType===1&&Sl(e,t),Wr(e)):Sl(fe,t.stateNode));break;case 4:r=fe,o=Je,fe=t.stateNode.containerInfo,Je=!0,Dn(e,n,t),fe=r,Je=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ns(t,n,l),o=o.next}while(o!==r)}Dn(e,n,t);break;case 1:if(!ge&&(zt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){re(t,n,s)}Dn(e,n,t);break;case 21:Dn(e,n,t);break;case 22:t.mode&1?(ge=(r=ge)||t.memoizedState!==null,Dn(e,n,t),ge=r):Dn(e,n,t);break;default:Dn(e,n,t)}}function cc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Vg),n.forEach(function(r){var o=Zg.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Xe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,Je=!1;break e;case 3:fe=s.stateNode.containerInfo,Je=!0;break e;case 4:fe=s.stateNode.containerInfo,Je=!0;break e}s=s.return}if(fe===null)throw Error(k(160));$f(i,l,o),fe=null,Je=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){re(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Qf(n,e),n=n.sibling}function Qf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(n,e),ln(e),r&4){try{Mr(3,e,e.return),Wi(3,e)}catch(v){re(e,e.return,v)}try{Mr(5,e,e.return)}catch(v){re(e,e.return,v)}}break;case 1:Xe(n,e),ln(e),r&512&&t!==null&&zt(t,t.return);break;case 5:if(Xe(n,e),ln(e),r&512&&t!==null&&zt(t,t.return),e.flags&32){var o=e.stateNode;try{Ur(o,"")}catch(v){re(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&md(o,i),Zl(s,l);var u=Zl(s,i);for(l=0;l<a.length;l+=2){var d=a[l],c=a[l+1];d==="style"?Ed(o,c):d==="dangerouslySetInnerHTML"?gd(o,c):d==="children"?Ur(o,c):Ks(o,d,c,u)}switch(s){case"input":Yl(o,i);break;case"textarea":hd(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Bt(o,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?Bt(o,!!i.multiple,i.defaultValue,!0):Bt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Kr]=i}catch(v){re(e,e.return,v)}}break;case 6:if(Xe(n,e),ln(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){re(e,e.return,v)}}break;case 3:if(Xe(n,e),ln(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Wr(n.containerInfo)}catch(v){re(e,e.return,v)}break;case 4:Xe(n,e),ln(e);break;case 13:Xe(n,e),ln(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ia=oe())),r&4&&cc(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ge=(u=ge)||d,Xe(n,e),ge=u):Xe(n,e),ln(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(b=e,d=e.child;d!==null;){for(c=b=d;b!==null;){switch(f=b,y=f.child,f.tag){case 0:case 11:case 14:case 15:Mr(4,f,f.return);break;case 1:zt(f,f.return);var E=f.stateNode;if(typeof E.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,E.props=n.memoizedProps,E.state=n.memoizedState,E.componentWillUnmount()}catch(v){re(r,t,v)}}break;case 5:zt(f,f.return);break;case 22:if(f.memoizedState!==null){fc(c);continue}}y!==null?(y.return=f,b=y):fc(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,a=c.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=vd("display",l))}catch(v){re(e,e.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){re(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Xe(n,e),ln(e),r&4&&cc(e);break;case 21:break;default:Xe(n,e),ln(e)}}function ln(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Gf(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ur(o,""),r.flags&=-33);var i=uc(e);ks(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=uc(e);Is(e,s,l);break;default:throw Error(k(161))}}catch(a){re(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gg(e,n,t){b=e,Yf(e)}function Yf(e,n,t){for(var r=(e.mode&1)!==0;b!==null;){var o=b,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Po;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ge;s=Po;var u=ge;if(Po=l,(ge=a)&&!u)for(b=o;b!==null;)l=b,a=l.child,l.tag===22&&l.memoizedState!==null?pc(o):a!==null?(a.return=l,b=a):pc(o);for(;i!==null;)b=i,Yf(i),i=i.sibling;b=o,Po=s,ge=u}dc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,b=i):dc(e)}}function dc(e){for(;b!==null;){var n=b;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ge||Wi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ge)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:qe(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Ku(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ku(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Wr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ge||n.flags&512&&_s(n)}catch(f){re(n,n.return,f)}}if(n===e){b=null;break}if(t=n.sibling,t!==null){t.return=n.return,b=t;break}b=n.return}}function fc(e){for(;b!==null;){var n=b;if(n===e){b=null;break}var t=n.sibling;if(t!==null){t.return=n.return,b=t;break}b=n.return}}function pc(e){for(;b!==null;){var n=b;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Wi(4,n)}catch(a){re(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(a){re(n,o,a)}}var i=n.return;try{_s(n)}catch(a){re(n,i,a)}break;case 5:var l=n.return;try{_s(n)}catch(a){re(n,l,a)}}}catch(a){re(n,n.return,a)}if(n===e){b=null;break}var s=n.sibling;if(s!==null){s.return=n.return,b=s;break}b=n.return}}var $g=Math.ceil,Si=An.ReactCurrentDispatcher,Na=An.ReactCurrentOwner,Ge=An.ReactCurrentBatchConfig,W=0,de=null,ie=null,pe=0,Oe=0,Ut=ot(0),ue=0,no=null,gt=0,Gi=0,_a=0,Fr=null,_e=null,Ia=0,nr=1/0,En=null,Ci=!1,As=null,Kn=null,bo=!1,Vn=null,Ri=0,jr=0,Ps=null,Xo=-1,qo=0;function Se(){return W&6?oe():Xo!==-1?Xo:Xo=oe()}function Xn(e){return e.mode&1?W&2&&pe!==0?pe&-pe:kg.transition!==null?(qo===0&&(qo=Pd()),qo):(e=G,e!==0||(e=window.event,e=e===void 0?16:jd(e.type)),e):1}function nn(e,n,t,r){if(50<jr)throw jr=0,Ps=null,Error(k(185));so(e,t,r),(!(W&2)||e!==de)&&(e===de&&(!(W&2)&&(Gi|=t),ue===4&&Bn(e,pe)),Pe(e,r),t===1&&W===0&&!(n.mode&1)&&(nr=oe()+500,Bi&&it()))}function Pe(e,n){var t=e.callbackNode;ky(e,n);var r=si(e,e===de?pe:0);if(r===0)t!==null&&Su(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Su(t),n===1)e.tag===0?Ig(mc.bind(null,e)):rf(mc.bind(null,e)),Rg(function(){!(W&6)&&it()}),t=null;else{switch(bd(r)){case 1:t=ea;break;case 4:t=kd;break;case 16:t=li;break;case 536870912:t=Ad;break;default:t=li}t=tp(t,Kf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Kf(e,n){if(Xo=-1,qo=0,W&6)throw Error(k(327));var t=e.callbackNode;if($t()&&e.callbackNode!==t)return null;var r=si(e,e===de?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ti(e,r);else{n=r;var o=W;W|=2;var i=qf();(de!==e||pe!==n)&&(En=null,nr=oe()+500,ft(e,n));do try{Kg();break}catch(s){Xf(e,s)}while(!0);pa(),Si.current=i,W=o,ie!==null?n=0:(de=null,pe=0,n=ue)}if(n!==0){if(n===2&&(o=os(e),o!==0&&(r=o,n=bs(e,o))),n===1)throw t=no,ft(e,0),Bn(e,r),Pe(e,oe()),t;if(n===6)Bn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Qg(o)&&(n=Ti(e,r),n===2&&(i=os(e),i!==0&&(r=i,n=bs(e,i))),n===1))throw t=no,ft(e,0),Bn(e,r),Pe(e,oe()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:st(e,_e,En);break;case 3:if(Bn(e,r),(r&130023424)===r&&(n=Ia+500-oe(),10<n)){if(si(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=fs(st.bind(null,e,_e,En),n);break}st(e,_e,En);break;case 4:if(Bn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-en(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$g(r/1960))-r,10<r){e.timeoutHandle=fs(st.bind(null,e,_e,En),r);break}st(e,_e,En);break;case 5:st(e,_e,En);break;default:throw Error(k(329))}}}return Pe(e,oe()),e.callbackNode===t?Kf.bind(null,e):null}function bs(e,n){var t=Fr;return e.current.memoizedState.isDehydrated&&(ft(e,n).flags|=256),e=Ti(e,n),e!==2&&(n=_e,_e=t,n!==null&&Os(n)),e}function Os(e){_e===null?_e=e:_e.push.apply(_e,e)}function Qg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!tn(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Bn(e,n){for(n&=~_a,n&=~Gi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-en(n),r=1<<t;e[t]=-1,n&=~r}}function mc(e){if(W&6)throw Error(k(327));$t();var n=si(e,0);if(!(n&1))return Pe(e,oe()),null;var t=Ti(e,n);if(e.tag!==0&&t===2){var r=os(e);r!==0&&(n=r,t=bs(e,r))}if(t===1)throw t=no,ft(e,0),Bn(e,n),Pe(e,oe()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,st(e,_e,En),Pe(e,oe()),null}function ka(e,n){var t=W;W|=1;try{return e(n)}finally{W=t,W===0&&(nr=oe()+500,Bi&&it())}}function vt(e){Vn!==null&&Vn.tag===0&&!(W&6)&&$t();var n=W;W|=1;var t=Ge.transition,r=G;try{if(Ge.transition=null,G=1,e)return e()}finally{G=r,Ge.transition=t,W=n,!(W&6)&&it()}}function Aa(){Oe=Ut.current,q(Ut)}function ft(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Cg(t)),ie!==null)for(t=ie.return;t!==null;){var r=t;switch(ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fi();break;case 3:Zt(),q(ke),q(ve),Ea();break;case 5:va(r);break;case 4:Zt();break;case 13:q(ee);break;case 19:q(ee);break;case 10:ma(r.type._context);break;case 22:case 23:Aa()}t=t.return}if(de=e,ie=e=qn(e.current,null),pe=Oe=n,ue=0,no=null,_a=Gi=gt=0,_e=Fr=null,ut!==null){for(n=0;n<ut.length;n++)if(t=ut[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}ut=null}return e}function Xf(e,n){do{var t=ie;try{if(pa(),Qo.current=xi,wi){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wi=!1}if(yt=0,ce=se=ne=null,Lr=!1,Jr=0,Na.current=null,t===null||t.return===null){ue=1,no=n,ie=null;break}e:{var i=e,l=t.return,s=t,a=n;if(n=pe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=nc(l);if(y!==null){y.flags&=-257,tc(y,l,s,i,n),y.mode&1&&ec(i,u,n),n=y,a=u;var E=n.updateQueue;if(E===null){var v=new Set;v.add(a),n.updateQueue=v}else E.add(a);break e}else{if(!(n&1)){ec(i,u,n),Pa();break e}a=Error(k(426))}}else if(J&&s.mode&1){var S=nc(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),tc(S,l,s,i,n),da(er(a,s));break e}}i=a=er(a,s),ue!==4&&(ue=2),Fr===null?Fr=[i]:Fr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var m=Of(i,a,n);Yu(i,m);break e;case 1:s=a;var h=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Kn===null||!Kn.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var x=Df(i,s,n);Yu(i,x);break e}}i=i.return}while(i!==null)}Zf(t)}catch(C){n=C,ie===t&&t!==null&&(ie=t=t.return);continue}break}while(!0)}function qf(){var e=Si.current;return Si.current=xi,e===null?xi:e}function Pa(){(ue===0||ue===3||ue===2)&&(ue=4),de===null||!(gt&268435455)&&!(Gi&268435455)||Bn(de,pe)}function Ti(e,n){var t=W;W|=2;var r=qf();(de!==e||pe!==n)&&(En=null,ft(e,n));do try{Yg();break}catch(o){Xf(e,o)}while(!0);if(pa(),W=t,Si.current=r,ie!==null)throw Error(k(261));return de=null,pe=0,ue}function Yg(){for(;ie!==null;)Jf(ie)}function Kg(){for(;ie!==null&&!wy();)Jf(ie)}function Jf(e){var n=np(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,n===null?Zf(e):ie=n,Na.current=null}function Zf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Hg(t,n),t!==null){t.flags&=32767,ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ie=null;return}}else if(t=Bg(t,n,Oe),t!==null){ie=t;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);ue===0&&(ue=5)}function st(e,n,t){var r=G,o=Ge.transition;try{Ge.transition=null,G=1,Xg(e,n,t,r)}finally{Ge.transition=o,G=r}return null}function Xg(e,n,t,r){do $t();while(Vn!==null);if(W&6)throw Error(k(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Ay(e,i),e===de&&(ie=de=null,pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||bo||(bo=!0,tp(li,function(){return $t(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ge.transition,Ge.transition=null;var l=G;G=1;var s=W;W|=4,Na.current=null,Wg(e,t),Qf(t,e),yg(cs),ai=!!us,cs=us=null,e.current=t,Gg(t),xy(),W=s,G=l,Ge.transition=i}else e.current=t;if(bo&&(bo=!1,Vn=e,Ri=o),i=e.pendingLanes,i===0&&(Kn=null),Ry(t.stateNode),Pe(e,oe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ci)throw Ci=!1,e=As,As=null,e;return Ri&1&&e.tag!==0&&$t(),i=e.pendingLanes,i&1?e===Ps?jr++:(jr=0,Ps=e):jr=0,it(),null}function $t(){if(Vn!==null){var e=bd(Ri),n=Ge.transition,t=G;try{if(Ge.transition=null,G=16>e?16:e,Vn===null)var r=!1;else{if(e=Vn,Vn=null,Ri=0,W&6)throw Error(k(331));var o=W;for(W|=4,b=e.current;b!==null;){var i=b,l=i.child;if(b.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(b=u;b!==null;){var d=b;switch(d.tag){case 0:case 11:case 15:Mr(8,d,i)}var c=d.child;if(c!==null)c.return=d,b=c;else for(;b!==null;){d=b;var f=d.sibling,y=d.return;if(Wf(d),d===u){b=null;break}if(f!==null){f.return=y,b=f;break}b=y}}}var E=i.alternate;if(E!==null){var v=E.child;if(v!==null){E.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}b=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,b=l;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Mr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,b=m;break e}b=i.return}}var h=e.current;for(b=h;b!==null;){l=b;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,b=g;else e:for(l=h;b!==null;){if(s=b,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wi(9,s)}}catch(C){re(s,s.return,C)}if(s===l){b=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,b=x;break e}b=s.return}}if(W=o,it(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Mi,e)}catch{}r=!0}return r}finally{G=t,Ge.transition=n}}return!1}function hc(e,n,t){n=er(t,n),n=Of(e,n,1),e=Yn(e,n,1),n=Se(),e!==null&&(so(e,1,n),Pe(e,n))}function re(e,n,t){if(e.tag===3)hc(e,e,t);else for(;n!==null;){if(n.tag===3){hc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){e=er(t,e),e=Df(n,e,1),n=Yn(n,e,1),e=Se(),n!==null&&(so(n,1,e),Pe(n,e));break}}n=n.return}}function qg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Se(),e.pingedLanes|=e.suspendedLanes&t,de===e&&(pe&t)===t&&(ue===4||ue===3&&(pe&130023424)===pe&&500>oe()-Ia?ft(e,0):_a|=t),Pe(e,n)}function ep(e,n){n===0&&(e.mode&1?(n=So,So<<=1,!(So&130023424)&&(So=4194304)):n=1);var t=Se();e=Nn(e,n),e!==null&&(so(e,n,t),Pe(e,t))}function Jg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ep(e,t)}function Zg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),ep(e,t)}var np;np=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ke.current)Ie=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ie=!1,Ug(e,n,t);Ie=!!(e.flags&131072)}else Ie=!1,J&&n.flags&1048576&&of(n,hi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ko(e,n),e=n.pendingProps;var o=Xt(n,ve.current);Gt(n,t),o=xa(null,n,r,e,o,t);var i=Sa();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ae(r)?(i=!0,pi(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ya(n),o.updater=Vi,n.stateNode=o,o._reactInternals=n,Es(n,r,e,t),n=Ss(null,n,r,!0,i,t)):(n.tag=0,J&&i&&ua(n),xe(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ko(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=nv(r),e=qe(r,e),o){case 0:n=xs(null,n,r,e,t);break e;case 1:n=ic(null,n,r,e,t);break e;case 11:n=rc(null,n,r,e,t);break e;case 14:n=oc(null,n,r,qe(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:qe(r,o),xs(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:qe(r,o),ic(e,n,r,o,t);case 3:e:{if(jf(n),e===null)throw Error(k(387));r=n.pendingProps,i=n.memoizedState,o=i.element,df(e,n),vi(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=er(Error(k(423)),n),n=lc(e,n,r,t,o);break e}else if(r!==o){o=er(Error(k(424)),n),n=lc(e,n,r,t,o);break e}else for(Le=Qn(n.stateNode.containerInfo.firstChild),Me=n,J=!0,Ze=null,t=uf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qt(),r===o){n=_n(e,n,t);break e}xe(e,n,r,t)}n=n.child}return n;case 5:return ff(n),e===null&&ys(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ds(r,o)?l=null:i!==null&&ds(r,i)&&(n.flags|=32),Ff(e,n),xe(e,n,l,t),n.child;case 6:return e===null&&ys(n),null;case 13:return zf(e,n,t);case 4:return ga(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Jt(n,null,r,t):xe(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:qe(r,o),rc(e,n,r,o,t);case 7:return xe(e,n,n.pendingProps,t),n.child;case 8:return xe(e,n,n.pendingProps.children,t),n.child;case 12:return xe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,Y(yi,r._currentValue),r._currentValue=l,i!==null)if(tn(i.value,l)){if(i.children===o.children&&!ke.current){n=_n(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Cn(-1,t&-t),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),gs(i.return,t,n),s.lanes|=t;break}a=a.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),gs(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}xe(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Gt(n,t),o=Qe(o),r=r(o),n.flags|=1,xe(e,n,r,t),n.child;case 14:return r=n.type,o=qe(r,n.pendingProps),o=qe(r.type,o),oc(e,n,r,o,t);case 15:return Lf(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:qe(r,o),Ko(e,n),n.tag=1,Ae(r)?(e=!0,pi(n)):e=!1,Gt(n,t),bf(n,r,o),Es(n,r,o,t),Ss(null,n,r,!0,e,t);case 19:return Uf(e,n,t);case 22:return Mf(e,n,t)}throw Error(k(156,n.tag))};function tp(e,n){return Id(e,n)}function ev(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,n,t,r){return new ev(e,n,t,r)}function ba(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nv(e){if(typeof e=="function")return ba(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qs)return 11;if(e===Js)return 14}return 2}function qn(e,n){var t=e.alternate;return t===null?(t=We(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Jo(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")ba(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case At:return pt(t.children,o,i,n);case Xs:l=8,o|=8;break;case Vl:return e=We(12,t,n,o|2),e.elementType=Vl,e.lanes=i,e;case Wl:return e=We(13,t,n,o),e.elementType=Wl,e.lanes=i,e;case Gl:return e=We(19,t,n,o),e.elementType=Gl,e.lanes=i,e;case dd:return $i(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ud:l=10;break e;case cd:l=9;break e;case qs:l=11;break e;case Js:l=14;break e;case jn:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=We(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function pt(e,n,t,r){return e=We(7,e,r,n),e.lanes=t,e}function $i(e,n,t,r){return e=We(22,e,r,n),e.elementType=dd,e.lanes=t,e.stateNode={isHidden:!1},e}function Al(e,n,t){return e=We(6,e,null,n),e.lanes=t,e}function Pl(e,n,t){return n=We(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function tv(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dl(0),this.expirationTimes=dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Oa(e,n,t,r,o,i,l,s,a){return e=new tv(e,n,t,s,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=We(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ya(i),e}function rv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function rp(e){if(!e)return Zn;e=e._reactInternals;e:{if(xt(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ae(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Ae(t))return tf(e,t,n)}return n}function op(e,n,t,r,o,i,l,s,a){return e=Oa(t,r,!0,e,o,i,l,s,a),e.context=rp(null),t=e.current,r=Se(),o=Xn(t),i=Cn(r,o),i.callback=n??null,Yn(t,i,o),e.current.lanes=o,so(e,o,r),Pe(e,r),e}function Qi(e,n,t,r){var o=n.current,i=Se(),l=Xn(o);return t=rp(t),n.context===null?n.context=t:n.pendingContext=t,n=Cn(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Yn(o,n,l),e!==null&&(nn(e,o,l,i),$o(e,o,l)),l}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Da(e,n){yc(e,n),(e=e.alternate)&&yc(e,n)}function ov(){return null}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function La(e){this._internalRoot=e}Yi.prototype.render=La.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Qi(e,n,null,null)};Yi.prototype.unmount=La.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vt(function(){Qi(null,e,null,null)}),n[Tn]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ld();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Un.length&&n!==0&&n<Un[t].priority;t++);Un.splice(t,0,e),t===0&&Fd(e)}};function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gc(){}function iv(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ni(l);i.call(u)}}var l=op(n,r,e,0,null,!1,!1,"",gc);return e._reactRootContainer=l,e[Tn]=l.current,Qr(e.nodeType===8?e.parentNode:e),vt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ni(a);s.call(u)}}var a=Oa(e,0,!1,null,null,!1,!1,"",gc);return e._reactRootContainer=a,e[Tn]=a.current,Qr(e.nodeType===8?e.parentNode:e),vt(function(){Qi(n,a,t,r)}),a}function Xi(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Ni(l);s.call(a)}}Qi(n,l,e,o)}else l=iv(t,n,e,o,r);return Ni(l)}Od=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=_r(n.pendingLanes);t!==0&&(na(n,t|1),Pe(n,oe()),!(W&6)&&(nr=oe()+500,it()))}break;case 13:vt(function(){var r=Nn(e,1);if(r!==null){var o=Se();nn(r,e,1,o)}}),Da(e,1)}};ta=function(e){if(e.tag===13){var n=Nn(e,134217728);if(n!==null){var t=Se();nn(n,e,134217728,t)}Da(e,134217728)}};Dd=function(e){if(e.tag===13){var n=Xn(e),t=Nn(e,n);if(t!==null){var r=Se();nn(t,e,n,r)}Da(e,n)}};Ld=function(){return G};Md=function(e,n){var t=G;try{return G=e,n()}finally{G=t}};ns=function(e,n,t){switch(n){case"input":if(Yl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Ui(r);if(!o)throw Error(k(90));pd(r),Yl(r,o)}}}break;case"textarea":hd(e,t);break;case"select":n=t.value,n!=null&&Bt(e,!!t.multiple,n,!1)}};Sd=ka;Cd=vt;var lv={usingClientEntryPoint:!1,Events:[uo,Dt,Ui,wd,xd,ka]},Sr={findFiberByHostInstance:at,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sv={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nd(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Mi=Oo.inject(sv),dn=Oo}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;ze.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ma(n))throw Error(k(200));return rv(e,n,null,t)};ze.createRoot=function(e,n){if(!Ma(e))throw Error(k(299));var t=!1,r="",o=ip;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Oa(e,1,!1,null,null,t,!1,r,o),e[Tn]=n.current,Qr(e.nodeType===8?e.parentNode:e),new La(n)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Nd(n),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return vt(e)};ze.hydrate=function(e,n,t){if(!Ki(n))throw Error(k(200));return Xi(null,e,n,!0,t)};ze.hydrateRoot=function(e,n,t){if(!Ma(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=ip;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=op(n,null,e,1,t??null,o,!1,i,l),e[Tn]=n.current,Qr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Yi(n)};ze.render=function(e,n,t){if(!Ki(n))throw Error(k(200));return Xi(null,e,n,!1,t)};ze.unmountComponentAtNode=function(e){if(!Ki(e))throw Error(k(40));return e._reactRootContainer?(vt(function(){Xi(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1};ze.unstable_batchedUpdates=ka;ze.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ki(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Xi(e,n,t,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function lp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lp)}catch(e){console.error(e)}}lp(),id.exports=ze;var fo=id.exports;const av=Qc(fo);var vc=fo;Bl.createRoot=vc.createRoot,Bl.hydrateRoot=vc.hydrateRoot;const uv={theme:"system",setTheme:()=>null},sp=p.createContext(uv);function cv({children:e,defaultTheme:n="system",storageKey:t="vite-ui-theme",...r}){const[o,i]=p.useState(()=>localStorage.getItem(t)||n);p.useEffect(()=>{const s=window.document.documentElement;if(s.classList.remove("light","dark"),o==="system"){const a=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";s.classList.add(a);return}s.classList.add(o)},[o]);const l={theme:o,setTheme:s=>{localStorage.setItem(t,s),i(s)}};return w.jsx(sp.Provider,{...r,value:l,children:e})}const dv=()=>{const e=p.useContext(sp);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ap=(...e)=>e.filter((n,t,r)=>!!n&&r.indexOf(n)===t).join(" ");/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=p.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:l,...s},a)=>p.createElement("svg",{ref:a,...pv,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:ap("lucide",o),...s},[...l.map(([u,d])=>p.createElement(u,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=(e,n)=>{const t=p.forwardRef(({className:r,...o},i)=>p.createElement(mv,{ref:i,iconNode:n,className:ap(`lucide-${fv(e)}`,r),...o}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ar("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ar("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ar("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ar("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ar("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ar("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function xv(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function qi(...e){return n=>e.forEach(t=>xv(t,n))}function le(...e){return p.useCallback(qi(...e),e)}var tr=p.forwardRef((e,n)=>{const{children:t,...r}=e,o=p.Children.toArray(t),i=o.find(Cv);if(i){const l=i.props.children,s=o.map(a=>a===i?p.Children.count(l)>1?p.Children.only(null):p.isValidElement(l)?l.props.children:null:a);return w.jsx(Ds,{...r,ref:n,children:p.isValidElement(l)?p.cloneElement(l,void 0,s):null})}return w.jsx(Ds,{...r,ref:n,children:t})});tr.displayName="Slot";var Ds=p.forwardRef((e,n)=>{const{children:t,...r}=e;if(p.isValidElement(t)){const o=Tv(t);return p.cloneElement(t,{...Rv(r,t.props),ref:n?qi(n,o):o})}return p.Children.count(t)>1?p.Children.only(null):null});Ds.displayName="SlotClone";var Sv=({children:e})=>w.jsx(w.Fragment,{children:e});function Cv(e){return p.isValidElement(e)&&e.type===Sv}function Rv(e,n){const t={...n};for(const r in n){const o=e[r],i=n[r];/^on[A-Z]/.test(r)?o&&i?t[r]=(...s)=>{i(...s),o(...s)}:o&&(t[r]=o):r==="style"?t[r]={...o,...i}:r==="className"&&(t[r]=[o,i].filter(Boolean).join(" "))}return{...e,...t}}function Tv(e){var r,o;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function up(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=up(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Nv(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=up(e))&&(r&&(r+=" "),r+=n);return r}const Ec=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,wc=Nv,cp=(e,n)=>t=>{var r;if((n==null?void 0:n.variants)==null)return wc(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:o,defaultVariants:i}=n,l=Object.keys(o).map(u=>{const d=t==null?void 0:t[u],c=i==null?void 0:i[u];if(d===null)return null;const f=Ec(d)||Ec(c);return o[u][f]}),s=t&&Object.entries(t).reduce((u,d)=>{let[c,f]=d;return f===void 0||(u[c]=f),u},{}),a=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:c,className:f,...y}=d;return Object.entries(y).every(E=>{let[v,S]=E;return Array.isArray(S)?S.includes({...i,...s}[v]):{...i,...s}[v]===S})?[...u,c,f]:u},[]);return wc(e,l,a,t==null?void 0:t.class,t==null?void 0:t.className)};function dp(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=dp(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function _v(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=dp(e))&&(r&&(r+=" "),r+=n);return r}const Fa="-";function Iv(e){const n=Av(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=e;function o(l){const s=l.split(Fa);return s[0]===""&&s.length!==1&&s.shift(),fp(s,n)||kv(l)}function i(l,s){const a=t[l]||[];return s&&r[l]?[...a,...r[l]]:a}return{getClassGroupId:o,getConflictingClassGroupIds:i}}function fp(e,n){var l;if(e.length===0)return n.classGroupId;const t=e[0],r=n.nextPart.get(t),o=r?fp(e.slice(1),r):void 0;if(o)return o;if(n.validators.length===0)return;const i=e.join(Fa);return(l=n.validators.find(({validator:s})=>s(i)))==null?void 0:l.classGroupId}const xc=/^\[(.+)\]$/;function kv(e){if(xc.test(e)){const n=xc.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}}function Av(e){const{theme:n,prefix:t}=e,r={nextPart:new Map,validators:[]};return bv(Object.entries(e.classGroups),t).forEach(([i,l])=>{Ls(l,r,i,n)}),r}function Ls(e,n,t,r){e.forEach(o=>{if(typeof o=="string"){const i=o===""?n:Sc(n,o);i.classGroupId=t;return}if(typeof o=="function"){if(Pv(o)){Ls(o(r),n,t,r);return}n.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([i,l])=>{Ls(l,Sc(n,i),t,r)})})}function Sc(e,n){let t=e;return n.split(Fa).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t}function Pv(e){return e.isThemeGetter}function bv(e,n){return n?e.map(([t,r])=>{const o=r.map(i=>typeof i=="string"?n+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,s])=>[n+l,s])):i);return[t,o]}):e}function Ov(e){if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,r=new Map;function o(i,l){t.set(i,l),n++,n>e&&(n=0,r=t,t=new Map)}return{get(i){let l=t.get(i);if(l!==void 0)return l;if((l=r.get(i))!==void 0)return o(i,l),l},set(i,l){t.has(i)?t.set(i,l):o(i,l)}}}const pp="!";function Dv(e){const{separator:n,experimentalParseClassName:t}=e,r=n.length===1,o=n[0],i=n.length;function l(s){const a=[];let u=0,d=0,c;for(let S=0;S<s.length;S++){let m=s[S];if(u===0){if(m===o&&(r||s.slice(S,S+i)===n)){a.push(s.slice(d,S)),d=S+i;continue}if(m==="/"){c=S;continue}}m==="["?u++:m==="]"&&u--}const f=a.length===0?s:s.substring(d),y=f.startsWith(pp),E=y?f.substring(1):f,v=c&&c>d?c-d:void 0;return{modifiers:a,hasImportantModifier:y,baseClassName:E,maybePostfixModifierPosition:v}}return t?function(a){return t({className:a,parseClassName:l})}:l}function Lv(e){if(e.length<=1)return e;const n=[];let t=[];return e.forEach(r=>{r[0]==="["?(n.push(...t.sort(),r),t=[]):t.push(r)}),n.push(...t.sort()),n}function Mv(e){return{cache:Ov(e.cacheSize),parseClassName:Dv(e),...Iv(e)}}const Fv=/\s+/;function jv(e,n){const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:o}=n,i=new Set;return e.trim().split(Fv).map(l=>{const{modifiers:s,hasImportantModifier:a,baseClassName:u,maybePostfixModifierPosition:d}=t(l);let c=!!d,f=r(c?u.substring(0,d):u);if(!f){if(!c)return{isTailwindClass:!1,originalClassName:l};if(f=r(u),!f)return{isTailwindClass:!1,originalClassName:l};c=!1}const y=Lv(s).join(":");return{isTailwindClass:!0,modifierId:a?y+pp:y,classGroupId:f,originalClassName:l,hasPostfixModifier:c}}).reverse().filter(l=>{if(!l.isTailwindClass)return!0;const{modifierId:s,classGroupId:a,hasPostfixModifier:u}=l,d=s+a;return i.has(d)?!1:(i.add(d),o(a,u).forEach(c=>i.add(s+c)),!0)}).reverse().map(l=>l.originalClassName).join(" ")}function zv(){let e=0,n,t,r="";for(;e<arguments.length;)(n=arguments[e++])&&(t=mp(n))&&(r&&(r+=" "),r+=t);return r}function mp(e){if(typeof e=="string")return e;let n,t="";for(let r=0;r<e.length;r++)e[r]&&(n=mp(e[r]))&&(t&&(t+=" "),t+=n);return t}function Uv(e,...n){let t,r,o,i=l;function l(a){const u=n.reduce((d,c)=>c(d),e());return t=Mv(u),r=t.cache.get,o=t.cache.set,i=s,s(a)}function s(a){const u=r(a);if(u)return u;const d=jv(a,t);return o(a,d),d}return function(){return i(zv.apply(null,arguments))}}function K(e){const n=t=>t[e]||[];return n.isThemeGetter=!0,n}const hp=/^\[(?:([a-z-]+):)?(.+)\]$/i,Bv=/^\d+\/\d+$/,Hv=new Set(["px","full","screen"]),Vv=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Wv=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Gv=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,$v=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Qv=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function gn(e){return dt(e)||Hv.has(e)||Bv.test(e)}function Ln(e){return ur(e,"length",nE)}function dt(e){return!!e&&!Number.isNaN(Number(e))}function Do(e){return ur(e,"number",dt)}function Cr(e){return!!e&&Number.isInteger(Number(e))}function Yv(e){return e.endsWith("%")&&dt(e.slice(0,-1))}function F(e){return hp.test(e)}function Mn(e){return Vv.test(e)}const Kv=new Set(["length","size","percentage"]);function Xv(e){return ur(e,Kv,yp)}function qv(e){return ur(e,"position",yp)}const Jv=new Set(["image","url"]);function Zv(e){return ur(e,Jv,rE)}function eE(e){return ur(e,"",tE)}function Rr(){return!0}function ur(e,n,t){const r=hp.exec(e);return r?r[1]?typeof n=="string"?r[1]===n:n.has(r[1]):t(r[2]):!1}function nE(e){return Wv.test(e)&&!Gv.test(e)}function yp(){return!1}function tE(e){return $v.test(e)}function rE(e){return Qv.test(e)}function oE(){const e=K("colors"),n=K("spacing"),t=K("blur"),r=K("brightness"),o=K("borderColor"),i=K("borderRadius"),l=K("borderSpacing"),s=K("borderWidth"),a=K("contrast"),u=K("grayscale"),d=K("hueRotate"),c=K("invert"),f=K("gap"),y=K("gradientColorStops"),E=K("gradientColorStopPositions"),v=K("inset"),S=K("margin"),m=K("opacity"),h=K("padding"),g=K("saturate"),x=K("scale"),C=K("sepia"),T=K("skew"),R=K("space"),_=K("translate"),P=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",F,n],D=()=>[F,n],$=()=>["",gn,Ln],H=()=>["auto",dt,F],Q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],I=()=>["start","end","center","between","around","evenly","stretch"],N=()=>["","0",F],O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>[dt,Do],B=()=>[dt,F];return{cacheSize:500,separator:":",theme:{colors:[Rr],spacing:[gn,Ln],blur:["none","",Mn,F],brightness:M(),borderColor:[e],borderRadius:["none","","full",Mn,F],borderSpacing:D(),borderWidth:$(),contrast:M(),grayscale:N(),hueRotate:B(),invert:N(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[Yv,Ln],inset:L(),margin:L(),opacity:M(),padding:D(),saturate:M(),scale:M(),sepia:N(),skew:B(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",F]}],container:["container"],columns:[{columns:[Mn]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Q(),F]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Cr,F]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",F]}],grow:[{grow:N()}],shrink:[{shrink:N()}],order:[{order:["first","last","none",Cr,F]}],"grid-cols":[{"grid-cols":[Rr]}],"col-start-end":[{col:["auto",{span:["full",Cr,F]},F]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[Rr]}],"row-start-end":[{row:["auto",{span:[Cr,F]},F]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",F]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",F]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...I()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...I(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...I(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[S]}],mx:[{mx:[S]}],my:[{my:[S]}],ms:[{ms:[S]}],me:[{me:[S]}],mt:[{mt:[S]}],mr:[{mr:[S]}],mb:[{mb:[S]}],ml:[{ml:[S]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",F,n]}],"min-w":[{"min-w":[F,n,"min","max","fit"]}],"max-w":[{"max-w":[F,n,"none","full","min","max","fit","prose",{screen:[Mn]},Mn]}],h:[{h:[F,n,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[F,n,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[F,n,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[F,n,"auto","min","max","fit"]}],"font-size":[{text:["base",Mn,Ln]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Do]}],"font-family":[{font:[Rr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",F]}],"line-clamp":[{"line-clamp":["none",dt,Do]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",gn,F]}],"list-image":[{"list-image":["none",F]}],"list-style-type":[{list:["none","disc","decimal",F]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",gn,Ln]}],"underline-offset":[{"underline-offset":["auto",gn,F]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Q(),qv]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Xv]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Zv]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[E]}],"gradient-via-pos":[{via:[E]}],"gradient-to-pos":[{to:[E]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:V()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[gn,F]}],"outline-w":[{outline:[gn,Ln]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[gn,Ln]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Mn,eE]}],"shadow-color":[{shadow:[Rr]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[r]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",Mn,F]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[c]}],saturate:[{saturate:[g]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[c]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",F]}],duration:[{duration:B()}],ease:[{ease:["linear","in","out","in-out",F]}],delay:[{delay:B()}],animate:[{animate:["none","spin","ping","pulse","bounce",F]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[Cr,F]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",F]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",F]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",F]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[gn,Ln,Do]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const iE=Uv(oE);function Ee(...e){return iE(_v(e))}const lE=cp("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ja=p.forwardRef(({className:e,variant:n,size:t,asChild:r=!1,...o},i)=>{const l=r?tr:"button";return w.jsx(l,{className:Ee(lE({variant:n,size:t,className:e})),ref:i,...o})});ja.displayName="Button";function j(e,n,{checkForDefaultPrevented:t=!0}={}){return function(o){if(e==null||e(o),t===!1||!o.defaultPrevented)return n==null?void 0:n(o)}}function St(e,n=[]){let t=[];function r(i,l){const s=p.createContext(l),a=t.length;t=[...t,l];function u(c){const{scope:f,children:y,...E}=c,v=(f==null?void 0:f[e][a])||s,S=p.useMemo(()=>E,Object.values(E));return w.jsx(v.Provider,{value:S,children:y})}function d(c,f){const y=(f==null?void 0:f[e][a])||s,E=p.useContext(y);if(E)return E;if(l!==void 0)return l;throw new Error(`\`${c}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,d]}const o=()=>{const i=t.map(l=>p.createContext(l));return function(s){const a=(s==null?void 0:s[e])||i;return p.useMemo(()=>({[`__scope${e}`]:{...s,[e]:a}}),[s,a])}};return o.scopeName=e,[r,sE(o,...n)]}function sE(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=r.reduce((s,{useScope:a,scopeName:u})=>{const c=a(i)[`__scope${u}`];return{...s,...c}},{});return p.useMemo(()=>({[`__scope${n.scopeName}`]:l}),[l])}};return t.scopeName=n.scopeName,t}function ae(e){const n=p.useRef(e);return p.useEffect(()=>{n.current=e}),p.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function gp({prop:e,defaultProp:n,onChange:t=()=>{}}){const[r,o]=aE({defaultProp:n,onChange:t}),i=e!==void 0,l=i?e:r,s=ae(t),a=p.useCallback(u=>{if(i){const c=typeof u=="function"?u(e):u;c!==e&&s(c)}else o(u)},[i,e,o,s]);return[l,a]}function aE({defaultProp:e,onChange:n}){const t=p.useState(e),[r]=t,o=p.useRef(r),i=ae(n);return p.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),t}var uE=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Z=uE.reduce((e,n)=>{const t=p.forwardRef((r,o)=>{const{asChild:i,...l}=r,s=i?tr:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(s,{...l,ref:o})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function vp(e,n){e&&fo.flushSync(()=>e.dispatchEvent(n))}function Ep(e){const n=e+"CollectionProvider",[t,r]=St(n),[o,i]=t(n,{collectionRef:{current:null},itemMap:new Map}),l=y=>{const{scope:E,children:v}=y,S=vn.useRef(null),m=vn.useRef(new Map).current;return w.jsx(o,{scope:E,itemMap:m,collectionRef:S,children:v})};l.displayName=n;const s=e+"CollectionSlot",a=vn.forwardRef((y,E)=>{const{scope:v,children:S}=y,m=i(s,v),h=le(E,m.collectionRef);return w.jsx(tr,{ref:h,children:S})});a.displayName=s;const u=e+"CollectionItemSlot",d="data-radix-collection-item",c=vn.forwardRef((y,E)=>{const{scope:v,children:S,...m}=y,h=vn.useRef(null),g=le(E,h),x=i(u,v);return vn.useEffect(()=>(x.itemMap.set(h,{ref:h,...m}),()=>void x.itemMap.delete(h))),w.jsx(tr,{[d]:"",ref:g,children:S})});c.displayName=u;function f(y){const E=i(e+"CollectionConsumer",y);return vn.useCallback(()=>{const S=E.collectionRef.current;if(!S)return[];const m=Array.from(S.querySelectorAll(`[${d}]`));return Array.from(E.itemMap.values()).sort((x,C)=>m.indexOf(x.ref.current)-m.indexOf(C.ref.current))},[E.collectionRef,E.itemMap])}return[{Provider:l,Slot:a,ItemSlot:c},f,r]}var cE=p.createContext(void 0);function za(e){const n=p.useContext(cE);return e||n||"ltr"}function dE(e,n=globalThis==null?void 0:globalThis.document){const t=ae(e);p.useEffect(()=>{const r=o=>{o.key==="Escape"&&t(o)};return n.addEventListener("keydown",r,{capture:!0}),()=>n.removeEventListener("keydown",r,{capture:!0})},[t,n])}var fE="DismissableLayer",Ms="dismissableLayer.update",pE="dismissableLayer.pointerDownOutside",mE="dismissableLayer.focusOutside",Cc,wp=p.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),xp=p.forwardRef((e,n)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:l,onDismiss:s,...a}=e,u=p.useContext(wp),[d,c]=p.useState(null),f=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=p.useState({}),E=le(n,R=>c(R)),v=Array.from(u.layers),[S]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),m=v.indexOf(S),h=d?v.indexOf(d):-1,g=u.layersWithOutsidePointerEventsDisabled.size>0,x=h>=m,C=gE(R=>{const _=R.target,P=[...u.branches].some(A=>A.contains(_));!x||P||(o==null||o(R),l==null||l(R),R.defaultPrevented||s==null||s())},f),T=vE(R=>{const _=R.target;[...u.branches].some(A=>A.contains(_))||(i==null||i(R),l==null||l(R),R.defaultPrevented||s==null||s())},f);return dE(R=>{h===u.layers.size-1&&(r==null||r(R),!R.defaultPrevented&&s&&(R.preventDefault(),s()))},f),p.useEffect(()=>{if(d)return t&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Cc=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Rc(),()=>{t&&u.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=Cc)}},[d,f,t,u]),p.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Rc())},[d,u]),p.useEffect(()=>{const R=()=>y({});return document.addEventListener(Ms,R),()=>document.removeEventListener(Ms,R)},[]),w.jsx(Z.div,{...a,ref:E,style:{pointerEvents:g?x?"auto":"none":void 0,...e.style},onFocusCapture:j(e.onFocusCapture,T.onFocusCapture),onBlurCapture:j(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:j(e.onPointerDownCapture,C.onPointerDownCapture)})});xp.displayName=fE;var hE="DismissableLayerBranch",yE=p.forwardRef((e,n)=>{const t=p.useContext(wp),r=p.useRef(null),o=le(n,r);return p.useEffect(()=>{const i=r.current;if(i)return t.branches.add(i),()=>{t.branches.delete(i)}},[t.branches]),w.jsx(Z.div,{...e,ref:o})});yE.displayName=hE;function gE(e,n=globalThis==null?void 0:globalThis.document){const t=ae(e),r=p.useRef(!1),o=p.useRef(()=>{});return p.useEffect(()=>{const i=s=>{if(s.target&&!r.current){let a=function(){Sp(pE,t,u,{discrete:!0})};const u={originalEvent:s};s.pointerType==="touch"?(n.removeEventListener("click",o.current),o.current=a,n.addEventListener("click",o.current,{once:!0})):a()}else n.removeEventListener("click",o.current);r.current=!1},l=window.setTimeout(()=>{n.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),n.removeEventListener("pointerdown",i),n.removeEventListener("click",o.current)}},[n,t]),{onPointerDownCapture:()=>r.current=!0}}function vE(e,n=globalThis==null?void 0:globalThis.document){const t=ae(e),r=p.useRef(!1);return p.useEffect(()=>{const o=i=>{i.target&&!r.current&&Sp(mE,t,{originalEvent:i},{discrete:!1})};return n.addEventListener("focusin",o),()=>n.removeEventListener("focusin",o)},[n,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Rc(){const e=new CustomEvent(Ms);document.dispatchEvent(e)}function Sp(e,n,t,{discrete:r}){const o=t.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&o.addEventListener(e,n,{once:!0}),r?vp(o,i):o.dispatchEvent(i)}var bl=0;function EE(){p.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Tc()),document.body.insertAdjacentElement("beforeend",e[1]??Tc()),bl++,()=>{bl===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(n=>n.remove()),bl--}},[])}function Tc(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var Ol="focusScope.autoFocusOnMount",Dl="focusScope.autoFocusOnUnmount",Nc={bubbles:!1,cancelable:!0},wE="FocusScope",Cp=p.forwardRef((e,n)=>{const{loop:t=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...l}=e,[s,a]=p.useState(null),u=ae(o),d=ae(i),c=p.useRef(null),f=le(n,v=>a(v)),y=p.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;p.useEffect(()=>{if(r){let v=function(g){if(y.paused||!s)return;const x=g.target;s.contains(x)?c.current=x:Fn(c.current,{select:!0})},S=function(g){if(y.paused||!s)return;const x=g.relatedTarget;x!==null&&(s.contains(x)||Fn(c.current,{select:!0}))},m=function(g){if(document.activeElement===document.body)for(const C of g)C.removedNodes.length>0&&Fn(s)};document.addEventListener("focusin",v),document.addEventListener("focusout",S);const h=new MutationObserver(m);return s&&h.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",S),h.disconnect()}}},[r,s,y.paused]),p.useEffect(()=>{if(s){Ic.add(y);const v=document.activeElement;if(!s.contains(v)){const m=new CustomEvent(Ol,Nc);s.addEventListener(Ol,u),s.dispatchEvent(m),m.defaultPrevented||(xE(NE(Rp(s)),{select:!0}),document.activeElement===v&&Fn(s))}return()=>{s.removeEventListener(Ol,u),setTimeout(()=>{const m=new CustomEvent(Dl,Nc);s.addEventListener(Dl,d),s.dispatchEvent(m),m.defaultPrevented||Fn(v??document.body,{select:!0}),s.removeEventListener(Dl,d),Ic.remove(y)},0)}}},[s,u,d,y]);const E=p.useCallback(v=>{if(!t&&!r||y.paused)return;const S=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,m=document.activeElement;if(S&&m){const h=v.currentTarget,[g,x]=SE(h);g&&x?!v.shiftKey&&m===x?(v.preventDefault(),t&&Fn(g,{select:!0})):v.shiftKey&&m===g&&(v.preventDefault(),t&&Fn(x,{select:!0})):m===h&&v.preventDefault()}},[t,r,y.paused]);return w.jsx(Z.div,{tabIndex:-1,...l,ref:f,onKeyDown:E})});Cp.displayName=wE;function xE(e,{select:n=!1}={}){const t=document.activeElement;for(const r of e)if(Fn(r,{select:n}),document.activeElement!==t)return}function SE(e){const n=Rp(e),t=_c(n,e),r=_c(n.reverse(),e);return[t,r]}function Rp(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}function _c(e,n){for(const t of e)if(!CE(t,{upTo:n}))return t}function CE(e,{upTo:n}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n!==void 0&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function RE(e){return e instanceof HTMLInputElement&&"select"in e}function Fn(e,{select:n=!1}={}){if(e&&e.focus){const t=document.activeElement;e.focus({preventScroll:!0}),e!==t&&RE(e)&&n&&e.select()}}var Ic=TE();function TE(){let e=[];return{add(n){const t=e[0];n!==t&&(t==null||t.pause()),e=kc(e,n),e.unshift(n)},remove(n){var t;e=kc(e,n),(t=e[0])==null||t.resume()}}}function kc(e,n){const t=[...e],r=t.indexOf(n);return r!==-1&&t.splice(r,1),t}function NE(e){return e.filter(n=>n.tagName!=="A")}var pn=globalThis!=null&&globalThis.document?p.useLayoutEffect:()=>{},_E=qh.useId||(()=>{}),IE=0;function Fs(e){const[n,t]=p.useState(_E());return pn(()=>{t(r=>r??String(IE++))},[e]),n?`radix-${n}`:""}const kE=["top","right","bottom","left"],cn=Math.min,De=Math.max,_i=Math.round,Lo=Math.floor,et=e=>({x:e,y:e}),AE={left:"right",right:"left",bottom:"top",top:"bottom"},PE={start:"end",end:"start"};function js(e,n,t){return De(e,cn(n,t))}function In(e,n){return typeof e=="function"?e(n):e}function kn(e){return e.split("-")[0]}function cr(e){return e.split("-")[1]}function Ua(e){return e==="x"?"y":"x"}function Ba(e){return e==="y"?"height":"width"}function nt(e){return["top","bottom"].includes(kn(e))?"y":"x"}function Ha(e){return Ua(nt(e))}function bE(e,n,t){t===void 0&&(t=!1);const r=cr(e),o=Ha(e),i=Ba(o);let l=o==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[i]>n.floating[i]&&(l=Ii(l)),[l,Ii(l)]}function OE(e){const n=Ii(e);return[zs(e),n,zs(n)]}function zs(e){return e.replace(/start|end/g,n=>PE[n])}function DE(e,n,t){const r=["left","right"],o=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return t?n?o:r:n?r:o;case"left":case"right":return n?i:l;default:return[]}}function LE(e,n,t,r){const o=cr(e);let i=DE(kn(e),t==="start",r);return o&&(i=i.map(l=>l+"-"+o),n&&(i=i.concat(i.map(zs)))),i}function Ii(e){return e.replace(/left|right|bottom|top/g,n=>AE[n])}function ME(e){return{top:0,right:0,bottom:0,left:0,...e}}function Tp(e){return typeof e!="number"?ME(e):{top:e,right:e,bottom:e,left:e}}function ki(e){const{x:n,y:t,width:r,height:o}=e;return{width:r,height:o,top:t,left:n,right:n+r,bottom:t+o,x:n,y:t}}function Ac(e,n,t){let{reference:r,floating:o}=e;const i=nt(n),l=Ha(n),s=Ba(l),a=kn(n),u=i==="y",d=r.x+r.width/2-o.width/2,c=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let y;switch(a){case"top":y={x:d,y:r.y-o.height};break;case"bottom":y={x:d,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:c};break;case"left":y={x:r.x-o.width,y:c};break;default:y={x:r.x,y:r.y}}switch(cr(n)){case"start":y[l]-=f*(t&&u?-1:1);break;case"end":y[l]+=f*(t&&u?-1:1);break}return y}const FE=async(e,n,t)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=t,s=i.filter(Boolean),a=await(l.isRTL==null?void 0:l.isRTL(n));let u=await l.getElementRects({reference:e,floating:n,strategy:o}),{x:d,y:c}=Ac(u,r,a),f=r,y={},E=0;for(let v=0;v<s.length;v++){const{name:S,fn:m}=s[v],{x:h,y:g,data:x,reset:C}=await m({x:d,y:c,initialPlacement:r,placement:f,strategy:o,middlewareData:y,rects:u,platform:l,elements:{reference:e,floating:n}});d=h??d,c=g??c,y={...y,[S]:{...y[S],...x}},C&&E<=50&&(E++,typeof C=="object"&&(C.placement&&(f=C.placement),C.rects&&(u=C.rects===!0?await l.getElementRects({reference:e,floating:n,strategy:o}):C.rects),{x:d,y:c}=Ac(u,f,a)),v=-1)}return{x:d,y:c,placement:f,strategy:o,middlewareData:y}};async function to(e,n){var t;n===void 0&&(n={});const{x:r,y:o,platform:i,rects:l,elements:s,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:f=!1,padding:y=0}=In(n,e),E=Tp(y),S=s[f?c==="floating"?"reference":"floating":c],m=ki(await i.getClippingRect({element:(t=await(i.isElement==null?void 0:i.isElement(S)))==null||t?S:S.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:d,strategy:a})),h=c==="floating"?{x:r,y:o,width:l.floating.width,height:l.floating.height}:l.reference,g=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),x=await(i.isElement==null?void 0:i.isElement(g))?await(i.getScale==null?void 0:i.getScale(g))||{x:1,y:1}:{x:1,y:1},C=ki(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:h,offsetParent:g,strategy:a}):h);return{top:(m.top-C.top+E.top)/x.y,bottom:(C.bottom-m.bottom+E.bottom)/x.y,left:(m.left-C.left+E.left)/x.x,right:(C.right-m.right+E.right)/x.x}}const jE=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:r,placement:o,rects:i,platform:l,elements:s,middlewareData:a}=n,{element:u,padding:d=0}=In(e,n)||{};if(u==null)return{};const c=Tp(d),f={x:t,y:r},y=Ha(o),E=Ba(y),v=await l.getDimensions(u),S=y==="y",m=S?"top":"left",h=S?"bottom":"right",g=S?"clientHeight":"clientWidth",x=i.reference[E]+i.reference[y]-f[y]-i.floating[E],C=f[y]-i.reference[y],T=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let R=T?T[g]:0;(!R||!await(l.isElement==null?void 0:l.isElement(T)))&&(R=s.floating[g]||i.floating[E]);const _=x/2-C/2,P=R/2-v[E]/2-1,A=cn(c[m],P),L=cn(c[h],P),D=A,$=R-v[E]-L,H=R/2-v[E]/2+_,Q=js(D,H,$),V=!a.arrow&&cr(o)!=null&&H!==Q&&i.reference[E]/2-(H<D?A:L)-v[E]/2<0,z=V?H<D?H-D:H-$:0;return{[y]:f[y]+z,data:{[y]:Q,centerOffset:H-Q-z,...V&&{alignmentOffset:z}},reset:V}}}),zE=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,r;const{placement:o,middlewareData:i,rects:l,initialPlacement:s,platform:a,elements:u}=n,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:f,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:v=!0,...S}=In(e,n);if((t=i.arrow)!=null&&t.alignmentOffset)return{};const m=kn(o),h=nt(s),g=kn(s)===s,x=await(a.isRTL==null?void 0:a.isRTL(u.floating)),C=f||(g||!v?[Ii(s)]:OE(s)),T=E!=="none";!f&&T&&C.push(...LE(s,v,E,x));const R=[s,...C],_=await to(n,S),P=[];let A=((r=i.flip)==null?void 0:r.overflows)||[];if(d&&P.push(_[m]),c){const H=bE(o,l,x);P.push(_[H[0]],_[H[1]])}if(A=[...A,{placement:o,overflows:P}],!P.every(H=>H<=0)){var L,D;const H=(((L=i.flip)==null?void 0:L.index)||0)+1,Q=R[H];if(Q)return{data:{index:H,overflows:A},reset:{placement:Q}};let V=(D=A.filter(z=>z.overflows[0]<=0).sort((z,I)=>z.overflows[1]-I.overflows[1])[0])==null?void 0:D.placement;if(!V)switch(y){case"bestFit":{var $;const z=($=A.filter(I=>{if(T){const N=nt(I.placement);return N===h||N==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(N=>N>0).reduce((N,O)=>N+O,0)]).sort((I,N)=>I[1]-N[1])[0])==null?void 0:$[0];z&&(V=z);break}case"initialPlacement":V=s;break}if(o!==V)return{reset:{placement:V}}}return{}}}};function Pc(e,n){return{top:e.top-n.height,right:e.right-n.width,bottom:e.bottom-n.height,left:e.left-n.width}}function bc(e){return kE.some(n=>e[n]>=0)}const UE=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(n){const{rects:t}=n,{strategy:r="referenceHidden",...o}=In(e,n);switch(r){case"referenceHidden":{const i=await to(n,{...o,elementContext:"reference"}),l=Pc(i,t.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:bc(l)}}}case"escaped":{const i=await to(n,{...o,altBoundary:!0}),l=Pc(i,t.floating);return{data:{escapedOffsets:l,escaped:bc(l)}}}default:return{}}}}};async function BE(e,n){const{placement:t,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=kn(t),s=cr(t),a=nt(t)==="y",u=["left","top"].includes(l)?-1:1,d=i&&a?-1:1,c=In(n,e);let{mainAxis:f,crossAxis:y,alignmentAxis:E}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return s&&typeof E=="number"&&(y=s==="end"?E*-1:E),a?{x:y*d,y:f*u}:{x:f*u,y:y*d}}const HE=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,r;const{x:o,y:i,placement:l,middlewareData:s}=n,a=await BE(n,e);return l===((t=s.offset)==null?void 0:t.placement)&&(r=s.arrow)!=null&&r.alignmentOffset?{}:{x:o+a.x,y:i+a.y,data:{...a,placement:l}}}}},VE=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:r,placement:o}=n,{mainAxis:i=!0,crossAxis:l=!1,limiter:s={fn:S=>{let{x:m,y:h}=S;return{x:m,y:h}}},...a}=In(e,n),u={x:t,y:r},d=await to(n,a),c=nt(kn(o)),f=Ua(c);let y=u[f],E=u[c];if(i){const S=f==="y"?"top":"left",m=f==="y"?"bottom":"right",h=y+d[S],g=y-d[m];y=js(h,y,g)}if(l){const S=c==="y"?"top":"left",m=c==="y"?"bottom":"right",h=E+d[S],g=E-d[m];E=js(h,E,g)}const v=s.fn({...n,[f]:y,[c]:E});return{...v,data:{x:v.x-t,y:v.y-r}}}}},WE=function(e){return e===void 0&&(e={}),{options:e,fn(n){const{x:t,y:r,placement:o,rects:i,middlewareData:l}=n,{offset:s=0,mainAxis:a=!0,crossAxis:u=!0}=In(e,n),d={x:t,y:r},c=nt(o),f=Ua(c);let y=d[f],E=d[c];const v=In(s,n),S=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(a){const g=f==="y"?"height":"width",x=i.reference[f]-i.floating[g]+S.mainAxis,C=i.reference[f]+i.reference[g]-S.mainAxis;y<x?y=x:y>C&&(y=C)}if(u){var m,h;const g=f==="y"?"width":"height",x=["top","left"].includes(kn(o)),C=i.reference[c]-i.floating[g]+(x&&((m=l.offset)==null?void 0:m[c])||0)+(x?0:S.crossAxis),T=i.reference[c]+i.reference[g]+(x?0:((h=l.offset)==null?void 0:h[c])||0)-(x?S.crossAxis:0);E<C?E=C:E>T&&(E=T)}return{[f]:y,[c]:E}}}},GE=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(n){const{placement:t,rects:r,platform:o,elements:i}=n,{apply:l=()=>{},...s}=In(e,n),a=await to(n,s),u=kn(t),d=cr(t),c=nt(t)==="y",{width:f,height:y}=r.floating;let E,v;u==="top"||u==="bottom"?(E=u,v=d===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(v=u,E=d==="end"?"top":"bottom");const S=y-a.top-a.bottom,m=f-a.left-a.right,h=cn(y-a[E],S),g=cn(f-a[v],m),x=!n.middlewareData.shift;let C=h,T=g;if(c?T=d||x?cn(g,m):m:C=d||x?cn(h,S):S,x&&!d){const _=De(a.left,0),P=De(a.right,0),A=De(a.top,0),L=De(a.bottom,0);c?T=f-2*(_!==0||P!==0?_+P:De(a.left,a.right)):C=y-2*(A!==0||L!==0?A+L:De(a.top,a.bottom))}await l({...n,availableWidth:T,availableHeight:C});const R=await o.getDimensions(i.floating);return f!==R.width||y!==R.height?{reset:{rects:!0}}:{}}}};function dr(e){return Np(e)?(e.nodeName||"").toLowerCase():"#document"}function Fe(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Pn(e){var n;return(n=(Np(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function Np(e){return e instanceof Node||e instanceof Fe(e).Node}function mn(e){return e instanceof Element||e instanceof Fe(e).Element}function hn(e){return e instanceof HTMLElement||e instanceof Fe(e).HTMLElement}function Oc(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Fe(e).ShadowRoot}function po(e){const{overflow:n,overflowX:t,overflowY:r,display:o}=rn(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&!["inline","contents"].includes(o)}function $E(e){return["table","td","th"].includes(dr(e))}function Ji(e){return[":popover-open",":modal"].some(n=>{try{return e.matches(n)}catch{return!1}})}function Va(e){const n=Wa(),t=rn(e);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(t.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(t.contain||"").includes(r))}function QE(e){let n=tt(e);for(;hn(n)&&!rr(n);){if(Ji(n))return null;if(Va(n))return n;n=tt(n)}return null}function Wa(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rr(e){return["html","body","#document"].includes(dr(e))}function rn(e){return Fe(e).getComputedStyle(e)}function Zi(e){return mn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function tt(e){if(dr(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Oc(e)&&e.host||Pn(e);return Oc(n)?n.host:n}function _p(e){const n=tt(e);return rr(n)?e.ownerDocument?e.ownerDocument.body:e.body:hn(n)&&po(n)?n:_p(n)}function ro(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const o=_p(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),l=Fe(o);return i?n.concat(l,l.visualViewport||[],po(o)?o:[],l.frameElement&&t?ro(l.frameElement):[]):n.concat(o,ro(o,[],t))}function Ip(e){const n=rn(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const o=hn(e),i=o?e.offsetWidth:t,l=o?e.offsetHeight:r,s=_i(t)!==i||_i(r)!==l;return s&&(t=i,r=l),{width:t,height:r,$:s}}function Ga(e){return mn(e)?e:e.contextElement}function Qt(e){const n=Ga(e);if(!hn(n))return et(1);const t=n.getBoundingClientRect(),{width:r,height:o,$:i}=Ip(n);let l=(i?_i(t.width):t.width)/r,s=(i?_i(t.height):t.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const YE=et(0);function kp(e){const n=Fe(e);return!Wa()||!n.visualViewport?YE:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function KE(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==Fe(e)?!1:n}function Et(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=!1);const o=e.getBoundingClientRect(),i=Ga(e);let l=et(1);n&&(r?mn(r)&&(l=Qt(r)):l=Qt(e));const s=KE(i,t,r)?kp(i):et(0);let a=(o.left+s.x)/l.x,u=(o.top+s.y)/l.y,d=o.width/l.x,c=o.height/l.y;if(i){const f=Fe(i),y=r&&mn(r)?Fe(r):r;let E=f,v=E.frameElement;for(;v&&r&&y!==E;){const S=Qt(v),m=v.getBoundingClientRect(),h=rn(v),g=m.left+(v.clientLeft+parseFloat(h.paddingLeft))*S.x,x=m.top+(v.clientTop+parseFloat(h.paddingTop))*S.y;a*=S.x,u*=S.y,d*=S.x,c*=S.y,a+=g,u+=x,E=Fe(v),v=E.frameElement}}return ki({width:d,height:c,x:a,y:u})}function XE(e){let{elements:n,rect:t,offsetParent:r,strategy:o}=e;const i=o==="fixed",l=Pn(r),s=n?Ji(n.floating):!1;if(r===l||s&&i)return t;let a={scrollLeft:0,scrollTop:0},u=et(1);const d=et(0),c=hn(r);if((c||!c&&!i)&&((dr(r)!=="body"||po(l))&&(a=Zi(r)),hn(r))){const f=Et(r);u=Qt(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-a.scrollLeft*u.x+d.x,y:t.y*u.y-a.scrollTop*u.y+d.y}}function qE(e){return Array.from(e.getClientRects())}function Ap(e){return Et(Pn(e)).left+Zi(e).scrollLeft}function JE(e){const n=Pn(e),t=Zi(e),r=e.ownerDocument.body,o=De(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),i=De(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let l=-t.scrollLeft+Ap(e);const s=-t.scrollTop;return rn(r).direction==="rtl"&&(l+=De(n.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:s}}function ZE(e,n){const t=Fe(e),r=Pn(e),o=t.visualViewport;let i=r.clientWidth,l=r.clientHeight,s=0,a=0;if(o){i=o.width,l=o.height;const u=Wa();(!u||u&&n==="fixed")&&(s=o.offsetLeft,a=o.offsetTop)}return{width:i,height:l,x:s,y:a}}function ew(e,n){const t=Et(e,!0,n==="fixed"),r=t.top+e.clientTop,o=t.left+e.clientLeft,i=hn(e)?Qt(e):et(1),l=e.clientWidth*i.x,s=e.clientHeight*i.y,a=o*i.x,u=r*i.y;return{width:l,height:s,x:a,y:u}}function Dc(e,n,t){let r;if(n==="viewport")r=ZE(e,t);else if(n==="document")r=JE(Pn(e));else if(mn(n))r=ew(n,t);else{const o=kp(e);r={...n,x:n.x-o.x,y:n.y-o.y}}return ki(r)}function Pp(e,n){const t=tt(e);return t===n||!mn(t)||rr(t)?!1:rn(t).position==="fixed"||Pp(t,n)}function nw(e,n){const t=n.get(e);if(t)return t;let r=ro(e,[],!1).filter(s=>mn(s)&&dr(s)!=="body"),o=null;const i=rn(e).position==="fixed";let l=i?tt(e):e;for(;mn(l)&&!rr(l);){const s=rn(l),a=Va(l);!a&&s.position==="fixed"&&(o=null),(i?!a&&!o:!a&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||po(l)&&!a&&Pp(e,l))?r=r.filter(d=>d!==l):o=s,l=tt(l)}return n.set(e,r),r}function tw(e){let{element:n,boundary:t,rootBoundary:r,strategy:o}=e;const l=[...t==="clippingAncestors"?Ji(n)?[]:nw(n,this._c):[].concat(t),r],s=l[0],a=l.reduce((u,d)=>{const c=Dc(n,d,o);return u.top=De(c.top,u.top),u.right=cn(c.right,u.right),u.bottom=cn(c.bottom,u.bottom),u.left=De(c.left,u.left),u},Dc(n,s,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function rw(e){const{width:n,height:t}=Ip(e);return{width:n,height:t}}function ow(e,n,t){const r=hn(n),o=Pn(n),i=t==="fixed",l=Et(e,!0,i,n);let s={scrollLeft:0,scrollTop:0};const a=et(0);if(r||!r&&!i)if((dr(n)!=="body"||po(o))&&(s=Zi(n)),r){const c=Et(n,!0,i,n);a.x=c.x+n.clientLeft,a.y=c.y+n.clientTop}else o&&(a.x=Ap(o));const u=l.left+s.scrollLeft-a.x,d=l.top+s.scrollTop-a.y;return{x:u,y:d,width:l.width,height:l.height}}function Ll(e){return rn(e).position==="static"}function Lc(e,n){return!hn(e)||rn(e).position==="fixed"?null:n?n(e):e.offsetParent}function bp(e,n){const t=Fe(e);if(Ji(e))return t;if(!hn(e)){let o=tt(e);for(;o&&!rr(o);){if(mn(o)&&!Ll(o))return o;o=tt(o)}return t}let r=Lc(e,n);for(;r&&$E(r)&&Ll(r);)r=Lc(r,n);return r&&rr(r)&&Ll(r)&&!Va(r)?t:r||QE(e)||t}const iw=async function(e){const n=this.getOffsetParent||bp,t=this.getDimensions,r=await t(e.floating);return{reference:ow(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function lw(e){return rn(e).direction==="rtl"}const sw={convertOffsetParentRelativeRectToViewportRelativeRect:XE,getDocumentElement:Pn,getClippingRect:tw,getOffsetParent:bp,getElementRects:iw,getClientRects:qE,getDimensions:rw,getScale:Qt,isElement:mn,isRTL:lw};function aw(e,n){let t=null,r;const o=Pn(e);function i(){var s;clearTimeout(r),(s=t)==null||s.disconnect(),t=null}function l(s,a){s===void 0&&(s=!1),a===void 0&&(a=1),i();const{left:u,top:d,width:c,height:f}=e.getBoundingClientRect();if(s||n(),!c||!f)return;const y=Lo(d),E=Lo(o.clientWidth-(u+c)),v=Lo(o.clientHeight-(d+f)),S=Lo(u),h={rootMargin:-y+"px "+-E+"px "+-v+"px "+-S+"px",threshold:De(0,cn(1,a))||1};let g=!0;function x(C){const T=C[0].intersectionRatio;if(T!==a){if(!g)return l();T?l(!1,T):r=setTimeout(()=>{l(!1,1e-7)},1e3)}g=!1}try{t=new IntersectionObserver(x,{...h,root:o.ownerDocument})}catch{t=new IntersectionObserver(x,h)}t.observe(e)}return l(!0),i}function uw(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=Ga(e),d=o||i?[...u?ro(u):[],...ro(n)]:[];d.forEach(m=>{o&&m.addEventListener("scroll",t,{passive:!0}),i&&m.addEventListener("resize",t)});const c=u&&s?aw(u,t):null;let f=-1,y=null;l&&(y=new ResizeObserver(m=>{let[h]=m;h&&h.target===u&&y&&(y.unobserve(n),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var g;(g=y)==null||g.observe(n)})),t()}),u&&!a&&y.observe(u),y.observe(n));let E,v=a?Et(e):null;a&&S();function S(){const m=Et(e);v&&(m.x!==v.x||m.y!==v.y||m.width!==v.width||m.height!==v.height)&&t(),v=m,E=requestAnimationFrame(S)}return t(),()=>{var m;d.forEach(h=>{o&&h.removeEventListener("scroll",t),i&&h.removeEventListener("resize",t)}),c==null||c(),(m=y)==null||m.disconnect(),y=null,a&&cancelAnimationFrame(E)}}const cw=HE,dw=VE,fw=zE,pw=GE,mw=UE,Mc=jE,hw=WE,yw=(e,n,t)=>{const r=new Map,o={platform:sw,...t},i={...o.platform,_c:r};return FE(e,n,{...o,platform:i})};var Zo=typeof document<"u"?p.useLayoutEffect:p.useEffect;function Ai(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,r,o;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==n.length)return!1;for(r=t;r--!==0;)if(!Ai(e[r],n[r]))return!1;return!0}if(o=Object.keys(e),t=o.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(n,o[r]))return!1;for(r=t;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Ai(e[i],n[i]))return!1}return!0}return e!==e&&n!==n}function Op(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Fc(e,n){const t=Op(e);return Math.round(n*t)/t}function jc(e){const n=p.useRef(e);return Zo(()=>{n.current=e}),n}function gw(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:l}={},transform:s=!0,whileElementsMounted:a,open:u}=e,[d,c]=p.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[f,y]=p.useState(r);Ai(f,r)||y(r);const[E,v]=p.useState(null),[S,m]=p.useState(null),h=p.useCallback(z=>{z!==T.current&&(T.current=z,v(z))},[]),g=p.useCallback(z=>{z!==R.current&&(R.current=z,m(z))},[]),x=i||E,C=l||S,T=p.useRef(null),R=p.useRef(null),_=p.useRef(d),P=a!=null,A=jc(a),L=jc(o),D=p.useCallback(()=>{if(!T.current||!R.current)return;const z={placement:n,strategy:t,middleware:f};L.current&&(z.platform=L.current),yw(T.current,R.current,z).then(I=>{const N={...I,isPositioned:!0};$.current&&!Ai(_.current,N)&&(_.current=N,fo.flushSync(()=>{c(N)}))})},[f,n,t,L]);Zo(()=>{u===!1&&_.current.isPositioned&&(_.current.isPositioned=!1,c(z=>({...z,isPositioned:!1})))},[u]);const $=p.useRef(!1);Zo(()=>($.current=!0,()=>{$.current=!1}),[]),Zo(()=>{if(x&&(T.current=x),C&&(R.current=C),x&&C){if(A.current)return A.current(x,C,D);D()}},[x,C,D,A,P]);const H=p.useMemo(()=>({reference:T,floating:R,setReference:h,setFloating:g}),[h,g]),Q=p.useMemo(()=>({reference:x,floating:C}),[x,C]),V=p.useMemo(()=>{const z={position:t,left:0,top:0};if(!Q.floating)return z;const I=Fc(Q.floating,d.x),N=Fc(Q.floating,d.y);return s?{...z,transform:"translate("+I+"px, "+N+"px)",...Op(Q.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:I,top:N}},[t,s,Q.floating,d.x,d.y]);return p.useMemo(()=>({...d,update:D,refs:H,elements:Q,floatingStyles:V}),[d,D,H,Q,V])}const vw=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:r,padding:o}=typeof e=="function"?e(t):e;return r&&n(r)?r.current!=null?Mc({element:r.current,padding:o}).fn(t):{}:r?Mc({element:r,padding:o}).fn(t):{}}}},Ew=(e,n)=>({...cw(e),options:[e,n]}),ww=(e,n)=>({...dw(e),options:[e,n]}),xw=(e,n)=>({...hw(e),options:[e,n]}),Sw=(e,n)=>({...fw(e),options:[e,n]}),Cw=(e,n)=>({...pw(e),options:[e,n]}),Rw=(e,n)=>({...mw(e),options:[e,n]}),Tw=(e,n)=>({...vw(e),options:[e,n]});var Nw="Arrow",Dp=p.forwardRef((e,n)=>{const{children:t,width:r=10,height:o=5,...i}=e;return w.jsx(Z.svg,{...i,ref:n,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?t:w.jsx("polygon",{points:"0,0 30,0 15,10"})})});Dp.displayName=Nw;var _w=Dp;function Iw(e){const[n,t]=p.useState(void 0);return pn(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,s;if("borderBoxSize"in i){const a=i.borderBoxSize,u=Array.isArray(a)?a[0]:a;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;t({width:l,height:s})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else t(void 0)},[e]),n}var $a="Popper",[Lp,Mp]=St($a),[kw,Fp]=Lp($a),jp=e=>{const{__scopePopper:n,children:t}=e,[r,o]=p.useState(null);return w.jsx(kw,{scope:n,anchor:r,onAnchorChange:o,children:t})};jp.displayName=$a;var zp="PopperAnchor",Up=p.forwardRef((e,n)=>{const{__scopePopper:t,virtualRef:r,...o}=e,i=Fp(zp,t),l=p.useRef(null),s=le(n,l);return p.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||l.current)}),r?null:w.jsx(Z.div,{...o,ref:s})});Up.displayName=zp;var Qa="PopperContent",[Aw,Pw]=Lp(Qa),Bp=p.forwardRef((e,n)=>{var Ne,fr,Be,pr,su,au;const{__scopePopper:t,side:r="bottom",sideOffset:o=0,align:i="center",alignOffset:l=0,arrowPadding:s=0,avoidCollisions:a=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:c="partial",hideWhenDetached:f=!1,updatePositionStrategy:y="optimized",onPlaced:E,...v}=e,S=Fp(Qa,t),[m,h]=p.useState(null),g=le(n,mr=>h(mr)),[x,C]=p.useState(null),T=Iw(x),R=(T==null?void 0:T.width)??0,_=(T==null?void 0:T.height)??0,P=r+(i!=="center"?"-"+i:""),A=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},L=Array.isArray(u)?u:[u],D=L.length>0,$={padding:A,boundary:L.filter(Ow),altBoundary:D},{refs:H,floatingStyles:Q,placement:V,isPositioned:z,middlewareData:I}=gw({strategy:"fixed",placement:P,whileElementsMounted:(...mr)=>uw(...mr,{animationFrame:y==="always"}),elements:{reference:S.anchor},middleware:[Ew({mainAxis:o+_,alignmentAxis:l}),a&&ww({mainAxis:!0,crossAxis:!1,limiter:c==="partial"?xw():void 0,...$}),a&&Sw({...$}),Cw({...$,apply:({elements:mr,rects:uu,availableWidth:Ph,availableHeight:bh})=>{const{width:Oh,height:Dh}=uu.reference,yo=mr.floating.style;yo.setProperty("--radix-popper-available-width",`${Ph}px`),yo.setProperty("--radix-popper-available-height",`${bh}px`),yo.setProperty("--radix-popper-anchor-width",`${Oh}px`),yo.setProperty("--radix-popper-anchor-height",`${Dh}px`)}}),x&&Tw({element:x,padding:s}),Dw({arrowWidth:R,arrowHeight:_}),f&&Rw({strategy:"referenceHidden",...$})]}),[N,O]=Wp(V),M=ae(E);pn(()=>{z&&(M==null||M())},[z,M]);const B=(Ne=I.arrow)==null?void 0:Ne.x,on=(fr=I.arrow)==null?void 0:fr.y,be=((Be=I.arrow)==null?void 0:Be.centerOffset)!==0,[On,we]=p.useState();return pn(()=>{m&&we(window.getComputedStyle(m).zIndex)},[m]),w.jsx("div",{ref:H.setFloating,"data-radix-popper-content-wrapper":"",style:{...Q,transform:z?Q.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:On,"--radix-popper-transform-origin":[(pr=I.transformOrigin)==null?void 0:pr.x,(su=I.transformOrigin)==null?void 0:su.y].join(" "),...((au=I.hide)==null?void 0:au.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:w.jsx(Aw,{scope:t,placedSide:N,onArrowChange:C,arrowX:B,arrowY:on,shouldHideArrow:be,children:w.jsx(Z.div,{"data-side":N,"data-align":O,...v,ref:g,style:{...v.style,animation:z?void 0:"none"}})})})});Bp.displayName=Qa;var Hp="PopperArrow",bw={top:"bottom",right:"left",bottom:"top",left:"right"},Vp=p.forwardRef(function(n,t){const{__scopePopper:r,...o}=n,i=Pw(Hp,r),l=bw[i.placedSide];return w.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:w.jsx(_w,{...o,ref:t,style:{...o.style,display:"block"}})})});Vp.displayName=Hp;function Ow(e){return e!==null}var Dw=e=>({name:"transformOrigin",options:e,fn(n){var S,m,h;const{placement:t,rects:r,middlewareData:o}=n,l=((S=o.arrow)==null?void 0:S.centerOffset)!==0,s=l?0:e.arrowWidth,a=l?0:e.arrowHeight,[u,d]=Wp(t),c={start:"0%",center:"50%",end:"100%"}[d],f=(((m=o.arrow)==null?void 0:m.x)??0)+s/2,y=(((h=o.arrow)==null?void 0:h.y)??0)+a/2;let E="",v="";return u==="bottom"?(E=l?c:`${f}px`,v=`${-a}px`):u==="top"?(E=l?c:`${f}px`,v=`${r.floating.height+a}px`):u==="right"?(E=`${-a}px`,v=l?c:`${y}px`):u==="left"&&(E=`${r.floating.width+a}px`,v=l?c:`${y}px`),{data:{x:E,y:v}}}});function Wp(e){const[n,t="center"]=e.split("-");return[n,t]}var Lw=jp,Mw=Up,Fw=Bp,jw=Vp,zw="Portal",Gp=p.forwardRef((e,n)=>{var s;const{container:t,...r}=e,[o,i]=p.useState(!1);pn(()=>i(!0),[]);const l=t||o&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return l?av.createPortal(w.jsx(Z.div,{...r,ref:n}),l):null});Gp.displayName=zw;function Uw(e,n){return p.useReducer((t,r)=>n[t][r]??t,e)}var bn=e=>{const{present:n,children:t}=e,r=Bw(n),o=typeof t=="function"?t({present:r.isPresent}):p.Children.only(t),i=le(r.ref,Hw(o));return typeof t=="function"||r.isPresent?p.cloneElement(o,{ref:i}):null};bn.displayName="Presence";function Bw(e){const[n,t]=p.useState(),r=p.useRef({}),o=p.useRef(e),i=p.useRef("none"),l=e?"mounted":"unmounted",[s,a]=Uw(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return p.useEffect(()=>{const u=Mo(r.current);i.current=s==="mounted"?u:"none"},[s]),pn(()=>{const u=r.current,d=o.current;if(d!==e){const f=i.current,y=Mo(u);e?a("MOUNT"):y==="none"||(u==null?void 0:u.display)==="none"?a("UNMOUNT"):a(d&&f!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,a]),pn(()=>{if(n){const u=c=>{const y=Mo(r.current).includes(c.animationName);c.target===n&&y&&fo.flushSync(()=>a("ANIMATION_END"))},d=c=>{c.target===n&&(i.current=Mo(r.current))};return n.addEventListener("animationstart",d),n.addEventListener("animationcancel",u),n.addEventListener("animationend",u),()=>{n.removeEventListener("animationstart",d),n.removeEventListener("animationcancel",u),n.removeEventListener("animationend",u)}}else a("ANIMATION_END")},[n,a]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:p.useCallback(u=>{u&&(r.current=getComputedStyle(u)),t(u)},[])}}function Mo(e){return(e==null?void 0:e.animationName)||"none"}function Hw(e){var r,o;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var Ml="rovingFocusGroup.onEntryFocus",Vw={bubbles:!1,cancelable:!0},el="RovingFocusGroup",[Us,$p,Ww]=Ep(el),[Gw,Qp]=St(el,[Ww]),[$w,Qw]=Gw(el),Yp=p.forwardRef((e,n)=>w.jsx(Us.Provider,{scope:e.__scopeRovingFocusGroup,children:w.jsx(Us.Slot,{scope:e.__scopeRovingFocusGroup,children:w.jsx(Yw,{...e,ref:n})})}));Yp.displayName=el;var Yw=p.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,orientation:r,loop:o=!1,dir:i,currentTabStopId:l,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:a,onEntryFocus:u,preventScrollOnEntryFocus:d=!1,...c}=e,f=p.useRef(null),y=le(n,f),E=za(i),[v=null,S]=gp({prop:l,defaultProp:s,onChange:a}),[m,h]=p.useState(!1),g=ae(u),x=$p(t),C=p.useRef(!1),[T,R]=p.useState(0);return p.useEffect(()=>{const _=f.current;if(_)return _.addEventListener(Ml,g),()=>_.removeEventListener(Ml,g)},[g]),w.jsx($w,{scope:t,orientation:r,dir:E,loop:o,currentTabStopId:v,onItemFocus:p.useCallback(_=>S(_),[S]),onItemShiftTab:p.useCallback(()=>h(!0),[]),onFocusableItemAdd:p.useCallback(()=>R(_=>_+1),[]),onFocusableItemRemove:p.useCallback(()=>R(_=>_-1),[]),children:w.jsx(Z.div,{tabIndex:m||T===0?-1:0,"data-orientation":r,...c,ref:y,style:{outline:"none",...e.style},onMouseDown:j(e.onMouseDown,()=>{C.current=!0}),onFocus:j(e.onFocus,_=>{const P=!C.current;if(_.target===_.currentTarget&&P&&!m){const A=new CustomEvent(Ml,Vw);if(_.currentTarget.dispatchEvent(A),!A.defaultPrevented){const L=x().filter(V=>V.focusable),D=L.find(V=>V.active),$=L.find(V=>V.id===v),Q=[D,$,...L].filter(Boolean).map(V=>V.ref.current);qp(Q,d)}}C.current=!1}),onBlur:j(e.onBlur,()=>h(!1))})})}),Kp="RovingFocusGroupItem",Xp=p.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,focusable:r=!0,active:o=!1,tabStopId:i,...l}=e,s=Fs(),a=i||s,u=Qw(Kp,t),d=u.currentTabStopId===a,c=$p(t),{onFocusableItemAdd:f,onFocusableItemRemove:y}=u;return p.useEffect(()=>{if(r)return f(),()=>y()},[r,f,y]),w.jsx(Us.ItemSlot,{scope:t,id:a,focusable:r,active:o,children:w.jsx(Z.span,{tabIndex:d?0:-1,"data-orientation":u.orientation,...l,ref:n,onMouseDown:j(e.onMouseDown,E=>{r?u.onItemFocus(a):E.preventDefault()}),onFocus:j(e.onFocus,()=>u.onItemFocus(a)),onKeyDown:j(e.onKeyDown,E=>{if(E.key==="Tab"&&E.shiftKey){u.onItemShiftTab();return}if(E.target!==E.currentTarget)return;const v=qw(E,u.orientation,u.dir);if(v!==void 0){if(E.metaKey||E.ctrlKey||E.altKey||E.shiftKey)return;E.preventDefault();let m=c().filter(h=>h.focusable).map(h=>h.ref.current);if(v==="last")m.reverse();else if(v==="prev"||v==="next"){v==="prev"&&m.reverse();const h=m.indexOf(E.currentTarget);m=u.loop?Jw(m,h+1):m.slice(h+1)}setTimeout(()=>qp(m))}})})})});Xp.displayName=Kp;var Kw={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Xw(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function qw(e,n,t){const r=Xw(e.key,t);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Kw[r]}function qp(e,n=!1){const t=document.activeElement;for(const r of e)if(r===t||(r.focus({preventScroll:n}),document.activeElement!==t))return}function Jw(e,n){return e.map((t,r)=>e[(n+r)%e.length])}var Zw=Yp,e0=Xp,n0=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},Nt=new WeakMap,Fo=new WeakMap,jo={},Fl=0,Jp=function(e){return e&&(e.host||Jp(e.parentNode))},t0=function(e,n){return n.map(function(t){if(e.contains(t))return t;var r=Jp(t);return r&&e.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},r0=function(e,n,t,r){var o=t0(n,Array.isArray(e)?e:[e]);jo[t]||(jo[t]=new WeakMap);var i=jo[t],l=[],s=new Set,a=new Set(o),u=function(c){!c||s.has(c)||(s.add(c),u(c.parentNode))};o.forEach(u);var d=function(c){!c||a.has(c)||Array.prototype.forEach.call(c.children,function(f){if(s.has(f))d(f);else try{var y=f.getAttribute(r),E=y!==null&&y!=="false",v=(Nt.get(f)||0)+1,S=(i.get(f)||0)+1;Nt.set(f,v),i.set(f,S),l.push(f),v===1&&E&&Fo.set(f,!0),S===1&&f.setAttribute(t,"true"),E||f.setAttribute(r,"true")}catch(m){console.error("aria-hidden: cannot operate on ",f,m)}})};return d(n),s.clear(),Fl++,function(){l.forEach(function(c){var f=Nt.get(c)-1,y=i.get(c)-1;Nt.set(c,f),i.set(c,y),f||(Fo.has(c)||c.removeAttribute(r),Fo.delete(c)),y||c.removeAttribute(t)}),Fl--,Fl||(Nt=new WeakMap,Nt=new WeakMap,Fo=new WeakMap,jo={})}},o0=function(e,n,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=n0(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),r0(r,o,t,"aria-hidden")):function(){return null}},un=function(){return un=Object.assign||function(n){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},un.apply(this,arguments)};function Zp(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t}function i0(e,n,t){if(t||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}var ei="right-scroll-bar-position",ni="width-before-scroll-bar",l0="with-scroll-bars-hidden",s0="--removed-body-scroll-bar-size";function jl(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function a0(e,n){var t=p.useState(function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(r){var o=t.value;o!==r&&(t.value=r,t.callback(r,o))}}}})[0];return t.callback=n,t.facade}var u0=typeof window<"u"?p.useLayoutEffect:p.useEffect,zc=new WeakMap;function c0(e,n){var t=a0(null,function(r){return e.forEach(function(o){return jl(o,r)})});return u0(function(){var r=zc.get(t);if(r){var o=new Set(r),i=new Set(e),l=t.current;o.forEach(function(s){i.has(s)||jl(s,null)}),i.forEach(function(s){o.has(s)||jl(s,l)})}zc.set(t,e)},[e]),t}function d0(e){return e}function f0(e,n){n===void 0&&(n=d0);var t=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(i){var l=n(i,r);return t.push(l),function(){t=t.filter(function(s){return s!==l})}},assignSyncMedium:function(i){for(r=!0;t.length;){var l=t;t=[],l.forEach(i)}t={push:function(s){return i(s)},filter:function(){return t}}},assignMedium:function(i){r=!0;var l=[];if(t.length){var s=t;t=[],s.forEach(i),l=t}var a=function(){var d=l;l=[],d.forEach(i)},u=function(){return Promise.resolve().then(a)};u(),t={push:function(d){l.push(d),u()},filter:function(d){return l=l.filter(d),t}}}};return o}function p0(e){e===void 0&&(e={});var n=f0(null);return n.options=un({async:!0,ssr:!1},e),n}var em=function(e){var n=e.sideCar,t=Zp(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw new Error("Sidecar medium not found");return p.createElement(r,un({},t))};em.isSideCarExport=!0;function m0(e,n){return e.useMedium(n),em}var nm=p0(),zl=function(){},nl=p.forwardRef(function(e,n){var t=p.useRef(null),r=p.useState({onScrollCapture:zl,onWheelCapture:zl,onTouchMoveCapture:zl}),o=r[0],i=r[1],l=e.forwardProps,s=e.children,a=e.className,u=e.removeScrollBar,d=e.enabled,c=e.shards,f=e.sideCar,y=e.noIsolation,E=e.inert,v=e.allowPinchZoom,S=e.as,m=S===void 0?"div":S,h=e.gapMode,g=Zp(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=f,C=c0([t,n]),T=un(un({},g),o);return p.createElement(p.Fragment,null,d&&p.createElement(x,{sideCar:nm,removeScrollBar:u,shards:c,noIsolation:y,inert:E,setCallbacks:i,allowPinchZoom:!!v,lockRef:t,gapMode:h}),l?p.cloneElement(p.Children.only(s),un(un({},T),{ref:C})):p.createElement(m,un({},T,{className:a,ref:C}),s))});nl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};nl.classNames={fullWidth:ni,zeroRight:ei};var h0=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function y0(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=h0();return n&&e.setAttribute("nonce",n),e}function g0(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function v0(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}var E0=function(){var e=0,n=null;return{add:function(t){e==0&&(n=y0())&&(g0(n,t),v0(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},w0=function(){var e=E0();return function(n,t){p.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},tm=function(){var e=w0(),n=function(t){var r=t.styles,o=t.dynamic;return e(r,o),null};return n},x0={left:0,top:0,right:0,gap:0},Ul=function(e){return parseInt(e||"",10)||0},S0=function(e){var n=window.getComputedStyle(document.body),t=n[e==="padding"?"paddingLeft":"marginLeft"],r=n[e==="padding"?"paddingTop":"marginTop"],o=n[e==="padding"?"paddingRight":"marginRight"];return[Ul(t),Ul(r),Ul(o)]},C0=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return x0;var n=S0(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},R0=tm(),Yt="data-scroll-locked",T0=function(e,n,t,r){var o=e.left,i=e.top,l=e.right,s=e.gap;return t===void 0&&(t="margin"),`
  .`.concat(l0,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(Yt,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ei,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(ni,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(ei," .").concat(ei,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(ni," .").concat(ni,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Yt,`] {
    `).concat(s0,": ").concat(s,`px;
  }
`)},Uc=function(){var e=parseInt(document.body.getAttribute(Yt)||"0",10);return isFinite(e)?e:0},N0=function(){p.useEffect(function(){return document.body.setAttribute(Yt,(Uc()+1).toString()),function(){var e=Uc()-1;e<=0?document.body.removeAttribute(Yt):document.body.setAttribute(Yt,e.toString())}},[])},_0=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;N0();var i=p.useMemo(function(){return C0(o)},[o]);return p.createElement(R0,{styles:T0(i,!n,o,t?"":"!important")})},Bs=!1;if(typeof window<"u")try{var zo=Object.defineProperty({},"passive",{get:function(){return Bs=!0,!0}});window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{Bs=!1}var _t=Bs?{passive:!1}:!1,I0=function(e){return e.tagName==="TEXTAREA"},rm=function(e,n){var t=window.getComputedStyle(e);return t[n]!=="hidden"&&!(t.overflowY===t.overflowX&&!I0(e)&&t[n]==="visible")},k0=function(e){return rm(e,"overflowY")},A0=function(e){return rm(e,"overflowX")},Bc=function(e,n){var t=n.ownerDocument,r=n;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=om(e,r);if(o){var i=im(e,r),l=i[1],s=i[2];if(l>s)return!0}r=r.parentNode}while(r&&r!==t.body);return!1},P0=function(e){var n=e.scrollTop,t=e.scrollHeight,r=e.clientHeight;return[n,t,r]},b0=function(e){var n=e.scrollLeft,t=e.scrollWidth,r=e.clientWidth;return[n,t,r]},om=function(e,n){return e==="v"?k0(n):A0(n)},im=function(e,n){return e==="v"?P0(n):b0(n)},O0=function(e,n){return e==="h"&&n==="rtl"?-1:1},D0=function(e,n,t,r,o){var i=O0(e,window.getComputedStyle(n).direction),l=i*r,s=t.target,a=n.contains(s),u=!1,d=l>0,c=0,f=0;do{var y=im(e,s),E=y[0],v=y[1],S=y[2],m=v-S-i*E;(E||m)&&om(e,s)&&(c+=m,f+=E),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!a&&s!==document.body||a&&(n.contains(s)||n===s));return(d&&(Math.abs(c)<1||!o)||!d&&(Math.abs(f)<1||!o))&&(u=!0),u},Uo=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Hc=function(e){return[e.deltaX,e.deltaY]},Vc=function(e){return e&&"current"in e?e.current:e},L0=function(e,n){return e[0]===n[0]&&e[1]===n[1]},M0=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},F0=0,It=[];function j0(e){var n=p.useRef([]),t=p.useRef([0,0]),r=p.useRef(),o=p.useState(F0++)[0],i=p.useState(tm)[0],l=p.useRef(e);p.useEffect(function(){l.current=e},[e]),p.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var v=i0([e.lockRef.current],(e.shards||[]).map(Vc),!0).filter(Boolean);return v.forEach(function(S){return S.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),v.forEach(function(S){return S.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=p.useCallback(function(v,S){if("touches"in v&&v.touches.length===2)return!l.current.allowPinchZoom;var m=Uo(v),h=t.current,g="deltaX"in v?v.deltaX:h[0]-m[0],x="deltaY"in v?v.deltaY:h[1]-m[1],C,T=v.target,R=Math.abs(g)>Math.abs(x)?"h":"v";if("touches"in v&&R==="h"&&T.type==="range")return!1;var _=Bc(R,T);if(!_)return!0;if(_?C=R:(C=R==="v"?"h":"v",_=Bc(R,T)),!_)return!1;if(!r.current&&"changedTouches"in v&&(g||x)&&(r.current=C),!C)return!0;var P=r.current||C;return D0(P,S,v,P==="h"?g:x,!0)},[]),a=p.useCallback(function(v){var S=v;if(!(!It.length||It[It.length-1]!==i)){var m="deltaY"in S?Hc(S):Uo(S),h=n.current.filter(function(C){return C.name===S.type&&(C.target===S.target||S.target===C.shadowParent)&&L0(C.delta,m)})[0];if(h&&h.should){S.cancelable&&S.preventDefault();return}if(!h){var g=(l.current.shards||[]).map(Vc).filter(Boolean).filter(function(C){return C.contains(S.target)}),x=g.length>0?s(S,g[0]):!l.current.noIsolation;x&&S.cancelable&&S.preventDefault()}}},[]),u=p.useCallback(function(v,S,m,h){var g={name:v,delta:S,target:m,should:h,shadowParent:z0(m)};n.current.push(g),setTimeout(function(){n.current=n.current.filter(function(x){return x!==g})},1)},[]),d=p.useCallback(function(v){t.current=Uo(v),r.current=void 0},[]),c=p.useCallback(function(v){u(v.type,Hc(v),v.target,s(v,e.lockRef.current))},[]),f=p.useCallback(function(v){u(v.type,Uo(v),v.target,s(v,e.lockRef.current))},[]);p.useEffect(function(){return It.push(i),e.setCallbacks({onScrollCapture:c,onWheelCapture:c,onTouchMoveCapture:f}),document.addEventListener("wheel",a,_t),document.addEventListener("touchmove",a,_t),document.addEventListener("touchstart",d,_t),function(){It=It.filter(function(v){return v!==i}),document.removeEventListener("wheel",a,_t),document.removeEventListener("touchmove",a,_t),document.removeEventListener("touchstart",d,_t)}},[]);var y=e.removeScrollBar,E=e.inert;return p.createElement(p.Fragment,null,E?p.createElement(i,{styles:M0(o)}):null,y?p.createElement(_0,{gapMode:e.gapMode}):null)}function z0(e){for(var n=null;e!==null;)e instanceof ShadowRoot&&(n=e.host,e=e.host),e=e.parentNode;return n}const U0=m0(nm,j0);var lm=p.forwardRef(function(e,n){return p.createElement(nl,un({},e,{ref:n,sideCar:U0}))});lm.classNames=nl.classNames;var Hs=["Enter"," "],B0=["ArrowDown","PageUp","Home"],sm=["ArrowUp","PageDown","End"],H0=[...B0,...sm],V0={ltr:[...Hs,"ArrowRight"],rtl:[...Hs,"ArrowLeft"]},W0={ltr:["ArrowLeft"],rtl:["ArrowRight"]},mo="Menu",[oo,G0,$0]=Ep(mo),[Ct,am]=St(mo,[$0,Mp,Qp]),tl=Mp(),um=Qp(),[Q0,Rt]=Ct(mo),[Y0,ho]=Ct(mo),cm=e=>{const{__scopeMenu:n,open:t=!1,children:r,dir:o,onOpenChange:i,modal:l=!0}=e,s=tl(n),[a,u]=p.useState(null),d=p.useRef(!1),c=ae(i),f=za(o);return p.useEffect(()=>{const y=()=>{d.current=!0,document.addEventListener("pointerdown",E,{capture:!0,once:!0}),document.addEventListener("pointermove",E,{capture:!0,once:!0})},E=()=>d.current=!1;return document.addEventListener("keydown",y,{capture:!0}),()=>{document.removeEventListener("keydown",y,{capture:!0}),document.removeEventListener("pointerdown",E,{capture:!0}),document.removeEventListener("pointermove",E,{capture:!0})}},[]),w.jsx(Lw,{...s,children:w.jsx(Q0,{scope:n,open:t,onOpenChange:c,content:a,onContentChange:u,children:w.jsx(Y0,{scope:n,onClose:p.useCallback(()=>c(!1),[c]),isUsingKeyboardRef:d,dir:f,modal:l,children:r})})})};cm.displayName=mo;var K0="MenuAnchor",Ya=p.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e,o=tl(t);return w.jsx(Mw,{...o,...r,ref:n})});Ya.displayName=K0;var Ka="MenuPortal",[X0,dm]=Ct(Ka,{forceMount:void 0}),fm=e=>{const{__scopeMenu:n,forceMount:t,children:r,container:o}=e,i=Rt(Ka,n);return w.jsx(X0,{scope:n,forceMount:t,children:w.jsx(bn,{present:t||i.open,children:w.jsx(Gp,{asChild:!0,container:o,children:r})})})};fm.displayName=Ka;var $e="MenuContent",[q0,Xa]=Ct($e),pm=p.forwardRef((e,n)=>{const t=dm($e,e.__scopeMenu),{forceMount:r=t.forceMount,...o}=e,i=Rt($e,e.__scopeMenu),l=ho($e,e.__scopeMenu);return w.jsx(oo.Provider,{scope:e.__scopeMenu,children:w.jsx(bn,{present:r||i.open,children:w.jsx(oo.Slot,{scope:e.__scopeMenu,children:l.modal?w.jsx(J0,{...o,ref:n}):w.jsx(Z0,{...o,ref:n})})})})}),J0=p.forwardRef((e,n)=>{const t=Rt($e,e.__scopeMenu),r=p.useRef(null),o=le(n,r);return p.useEffect(()=>{const i=r.current;if(i)return o0(i)},[]),w.jsx(qa,{...e,ref:o,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:j(e.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)})}),Z0=p.forwardRef((e,n)=>{const t=Rt($e,e.__scopeMenu);return w.jsx(qa,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)})}),qa=p.forwardRef((e,n)=>{const{__scopeMenu:t,loop:r=!1,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:l,disableOutsidePointerEvents:s,onEntryFocus:a,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:c,onInteractOutside:f,onDismiss:y,disableOutsideScroll:E,...v}=e,S=Rt($e,t),m=ho($e,t),h=tl(t),g=um(t),x=G0(t),[C,T]=p.useState(null),R=p.useRef(null),_=le(n,R,S.onContentChange),P=p.useRef(0),A=p.useRef(""),L=p.useRef(0),D=p.useRef(null),$=p.useRef("right"),H=p.useRef(0),Q=E?lm:p.Fragment,V=E?{as:tr,allowPinchZoom:!0}:void 0,z=N=>{var Ne,fr;const O=A.current+N,M=x().filter(Be=>!Be.disabled),B=document.activeElement,on=(Ne=M.find(Be=>Be.ref.current===B))==null?void 0:Ne.textValue,be=M.map(Be=>Be.textValue),On=dx(be,O,on),we=(fr=M.find(Be=>Be.textValue===On))==null?void 0:fr.ref.current;(function Be(pr){A.current=pr,window.clearTimeout(P.current),pr!==""&&(P.current=window.setTimeout(()=>Be(""),1e3))})(O),we&&setTimeout(()=>we.focus())};p.useEffect(()=>()=>window.clearTimeout(P.current),[]),EE();const I=p.useCallback(N=>{var M,B;return $.current===((M=D.current)==null?void 0:M.side)&&px(N,(B=D.current)==null?void 0:B.area)},[]);return w.jsx(q0,{scope:t,searchRef:A,onItemEnter:p.useCallback(N=>{I(N)&&N.preventDefault()},[I]),onItemLeave:p.useCallback(N=>{var O;I(N)||((O=R.current)==null||O.focus(),T(null))},[I]),onTriggerLeave:p.useCallback(N=>{I(N)&&N.preventDefault()},[I]),pointerGraceTimerRef:L,onPointerGraceIntentChange:p.useCallback(N=>{D.current=N},[]),children:w.jsx(Q,{...V,children:w.jsx(Cp,{asChild:!0,trapped:o,onMountAutoFocus:j(i,N=>{var O;N.preventDefault(),(O=R.current)==null||O.focus({preventScroll:!0})}),onUnmountAutoFocus:l,children:w.jsx(xp,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:c,onInteractOutside:f,onDismiss:y,children:w.jsx(Zw,{asChild:!0,...g,dir:m.dir,orientation:"vertical",loop:r,currentTabStopId:C,onCurrentTabStopIdChange:T,onEntryFocus:j(a,N=>{m.isUsingKeyboardRef.current||N.preventDefault()}),preventScrollOnEntryFocus:!0,children:w.jsx(Fw,{role:"menu","aria-orientation":"vertical","data-state":km(S.open),"data-radix-menu-content":"",dir:m.dir,...h,...v,ref:_,style:{outline:"none",...v.style},onKeyDown:j(v.onKeyDown,N=>{const M=N.target.closest("[data-radix-menu-content]")===N.currentTarget,B=N.ctrlKey||N.altKey||N.metaKey,on=N.key.length===1;M&&(N.key==="Tab"&&N.preventDefault(),!B&&on&&z(N.key));const be=R.current;if(N.target!==be||!H0.includes(N.key))return;N.preventDefault();const we=x().filter(Ne=>!Ne.disabled).map(Ne=>Ne.ref.current);sm.includes(N.key)&&we.reverse(),ux(we)}),onBlur:j(e.onBlur,N=>{N.currentTarget.contains(N.target)||(window.clearTimeout(P.current),A.current="")}),onPointerMove:j(e.onPointerMove,io(N=>{const O=N.target,M=H.current!==N.clientX;if(N.currentTarget.contains(O)&&M){const B=N.clientX>H.current?"right":"left";$.current=B,H.current=N.clientX}}))})})})})})})});pm.displayName=$e;var ex="MenuGroup",Ja=p.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e;return w.jsx(Z.div,{role:"group",...r,ref:n})});Ja.displayName=ex;var nx="MenuLabel",mm=p.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e;return w.jsx(Z.div,{...r,ref:n})});mm.displayName=nx;var Pi="MenuItem",Wc="menu.itemSelect",rl=p.forwardRef((e,n)=>{const{disabled:t=!1,onSelect:r,...o}=e,i=p.useRef(null),l=ho(Pi,e.__scopeMenu),s=Xa(Pi,e.__scopeMenu),a=le(n,i),u=p.useRef(!1),d=()=>{const c=i.current;if(!t&&c){const f=new CustomEvent(Wc,{bubbles:!0,cancelable:!0});c.addEventListener(Wc,y=>r==null?void 0:r(y),{once:!0}),vp(c,f),f.defaultPrevented?u.current=!1:l.onClose()}};return w.jsx(hm,{...o,ref:a,disabled:t,onClick:j(e.onClick,d),onPointerDown:c=>{var f;(f=e.onPointerDown)==null||f.call(e,c),u.current=!0},onPointerUp:j(e.onPointerUp,c=>{var f;u.current||(f=c.currentTarget)==null||f.click()}),onKeyDown:j(e.onKeyDown,c=>{const f=s.searchRef.current!=="";t||f&&c.key===" "||Hs.includes(c.key)&&(c.currentTarget.click(),c.preventDefault())})})});rl.displayName=Pi;var hm=p.forwardRef((e,n)=>{const{__scopeMenu:t,disabled:r=!1,textValue:o,...i}=e,l=Xa(Pi,t),s=um(t),a=p.useRef(null),u=le(n,a),[d,c]=p.useState(!1),[f,y]=p.useState("");return p.useEffect(()=>{const E=a.current;E&&y((E.textContent??"").trim())},[i.children]),w.jsx(oo.ItemSlot,{scope:t,disabled:r,textValue:o??f,children:w.jsx(e0,{asChild:!0,...s,focusable:!r,children:w.jsx(Z.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...i,ref:u,onPointerMove:j(e.onPointerMove,io(E=>{r?l.onItemLeave(E):(l.onItemEnter(E),E.defaultPrevented||E.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:j(e.onPointerLeave,io(E=>l.onItemLeave(E))),onFocus:j(e.onFocus,()=>c(!0)),onBlur:j(e.onBlur,()=>c(!1))})})})}),tx="MenuCheckboxItem",ym=p.forwardRef((e,n)=>{const{checked:t=!1,onCheckedChange:r,...o}=e;return w.jsx(xm,{scope:e.__scopeMenu,checked:t,children:w.jsx(rl,{role:"menuitemcheckbox","aria-checked":bi(t)?"mixed":t,...o,ref:n,"data-state":eu(t),onSelect:j(o.onSelect,()=>r==null?void 0:r(bi(t)?!0:!t),{checkForDefaultPrevented:!1})})})});ym.displayName=tx;var gm="MenuRadioGroup",[rx,ox]=Ct(gm,{value:void 0,onValueChange:()=>{}}),vm=p.forwardRef((e,n)=>{const{value:t,onValueChange:r,...o}=e,i=ae(r);return w.jsx(rx,{scope:e.__scopeMenu,value:t,onValueChange:i,children:w.jsx(Ja,{...o,ref:n})})});vm.displayName=gm;var Em="MenuRadioItem",wm=p.forwardRef((e,n)=>{const{value:t,...r}=e,o=ox(Em,e.__scopeMenu),i=t===o.value;return w.jsx(xm,{scope:e.__scopeMenu,checked:i,children:w.jsx(rl,{role:"menuitemradio","aria-checked":i,...r,ref:n,"data-state":eu(i),onSelect:j(r.onSelect,()=>{var l;return(l=o.onValueChange)==null?void 0:l.call(o,t)},{checkForDefaultPrevented:!1})})})});wm.displayName=Em;var Za="MenuItemIndicator",[xm,ix]=Ct(Za,{checked:!1}),Sm=p.forwardRef((e,n)=>{const{__scopeMenu:t,forceMount:r,...o}=e,i=ix(Za,t);return w.jsx(bn,{present:r||bi(i.checked)||i.checked===!0,children:w.jsx(Z.span,{...o,ref:n,"data-state":eu(i.checked)})})});Sm.displayName=Za;var lx="MenuSeparator",Cm=p.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e;return w.jsx(Z.div,{role:"separator","aria-orientation":"horizontal",...r,ref:n})});Cm.displayName=lx;var sx="MenuArrow",Rm=p.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e,o=tl(t);return w.jsx(jw,{...o,...r,ref:n})});Rm.displayName=sx;var ax="MenuSub",[kS,Tm]=Ct(ax),kr="MenuSubTrigger",Nm=p.forwardRef((e,n)=>{const t=Rt(kr,e.__scopeMenu),r=ho(kr,e.__scopeMenu),o=Tm(kr,e.__scopeMenu),i=Xa(kr,e.__scopeMenu),l=p.useRef(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:a}=i,u={__scopeMenu:e.__scopeMenu},d=p.useCallback(()=>{l.current&&window.clearTimeout(l.current),l.current=null},[]);return p.useEffect(()=>d,[d]),p.useEffect(()=>{const c=s.current;return()=>{window.clearTimeout(c),a(null)}},[s,a]),w.jsx(Ya,{asChild:!0,...u,children:w.jsx(hm,{id:o.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":o.contentId,"data-state":km(t.open),...e,ref:qi(n,o.onTriggerChange),onClick:c=>{var f;(f=e.onClick)==null||f.call(e,c),!(e.disabled||c.defaultPrevented)&&(c.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:j(e.onPointerMove,io(c=>{i.onItemEnter(c),!c.defaultPrevented&&!e.disabled&&!t.open&&!l.current&&(i.onPointerGraceIntentChange(null),l.current=window.setTimeout(()=>{t.onOpenChange(!0),d()},100))})),onPointerLeave:j(e.onPointerLeave,io(c=>{var y,E;d();const f=(y=t.content)==null?void 0:y.getBoundingClientRect();if(f){const v=(E=t.content)==null?void 0:E.dataset.side,S=v==="right",m=S?-5:5,h=f[S?"left":"right"],g=f[S?"right":"left"];i.onPointerGraceIntentChange({area:[{x:c.clientX+m,y:c.clientY},{x:h,y:f.top},{x:g,y:f.top},{x:g,y:f.bottom},{x:h,y:f.bottom}],side:v}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(c),c.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:j(e.onKeyDown,c=>{var y;const f=i.searchRef.current!=="";e.disabled||f&&c.key===" "||V0[r.dir].includes(c.key)&&(t.onOpenChange(!0),(y=t.content)==null||y.focus(),c.preventDefault())})})})});Nm.displayName=kr;var _m="MenuSubContent",Im=p.forwardRef((e,n)=>{const t=dm($e,e.__scopeMenu),{forceMount:r=t.forceMount,...o}=e,i=Rt($e,e.__scopeMenu),l=ho($e,e.__scopeMenu),s=Tm(_m,e.__scopeMenu),a=p.useRef(null),u=le(n,a);return w.jsx(oo.Provider,{scope:e.__scopeMenu,children:w.jsx(bn,{present:r||i.open,children:w.jsx(oo.Slot,{scope:e.__scopeMenu,children:w.jsx(qa,{id:s.contentId,"aria-labelledby":s.triggerId,...o,ref:u,align:"start",side:l.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:d=>{var c;l.isUsingKeyboardRef.current&&((c=a.current)==null||c.focus()),d.preventDefault()},onCloseAutoFocus:d=>d.preventDefault(),onFocusOutside:j(e.onFocusOutside,d=>{d.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:j(e.onEscapeKeyDown,d=>{l.onClose(),d.preventDefault()}),onKeyDown:j(e.onKeyDown,d=>{var y;const c=d.currentTarget.contains(d.target),f=W0[l.dir].includes(d.key);c&&f&&(i.onOpenChange(!1),(y=s.trigger)==null||y.focus(),d.preventDefault())})})})})})});Im.displayName=_m;function km(e){return e?"open":"closed"}function bi(e){return e==="indeterminate"}function eu(e){return bi(e)?"indeterminate":e?"checked":"unchecked"}function ux(e){const n=document.activeElement;for(const t of e)if(t===n||(t.focus(),document.activeElement!==n))return}function cx(e,n){return e.map((t,r)=>e[(n+r)%e.length])}function dx(e,n,t){const o=n.length>1&&Array.from(n).every(u=>u===n[0])?n[0]:n,i=t?e.indexOf(t):-1;let l=cx(e,Math.max(i,0));o.length===1&&(l=l.filter(u=>u!==t));const a=l.find(u=>u.toLowerCase().startsWith(o.toLowerCase()));return a!==t?a:void 0}function fx(e,n){const{x:t,y:r}=e;let o=!1;for(let i=0,l=n.length-1;i<n.length;l=i++){const s=n[i].x,a=n[i].y,u=n[l].x,d=n[l].y;a>r!=d>r&&t<(u-s)*(r-a)/(d-a)+s&&(o=!o)}return o}function px(e,n){if(!n)return!1;const t={x:e.clientX,y:e.clientY};return fx(t,n)}function io(e){return n=>n.pointerType==="mouse"?e(n):void 0}var mx=cm,hx=Ya,yx=fm,gx=pm,vx=Ja,Ex=mm,wx=rl,xx=ym,Sx=vm,Cx=wm,Rx=Sm,Tx=Cm,Nx=Rm,_x=Nm,Ix=Im,nu="DropdownMenu",[kx,AS]=St(nu,[am]),Te=am(),[Ax,Am]=kx(nu),Pm=e=>{const{__scopeDropdownMenu:n,children:t,dir:r,open:o,defaultOpen:i,onOpenChange:l,modal:s=!0}=e,a=Te(n),u=p.useRef(null),[d=!1,c]=gp({prop:o,defaultProp:i,onChange:l});return w.jsx(Ax,{scope:n,triggerId:Fs(),triggerRef:u,contentId:Fs(),open:d,onOpenChange:c,onOpenToggle:p.useCallback(()=>c(f=>!f),[c]),modal:s,children:w.jsx(mx,{...a,open:d,onOpenChange:c,dir:r,modal:s,children:t})})};Pm.displayName=nu;var bm="DropdownMenuTrigger",Om=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,disabled:r=!1,...o}=e,i=Am(bm,t),l=Te(t);return w.jsx(hx,{asChild:!0,...l,children:w.jsx(Z.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...o,ref:qi(n,i.triggerRef),onPointerDown:j(e.onPointerDown,s=>{!r&&s.button===0&&s.ctrlKey===!1&&(i.onOpenToggle(),i.open||s.preventDefault())}),onKeyDown:j(e.onKeyDown,s=>{r||(["Enter"," "].includes(s.key)&&i.onOpenToggle(),s.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(s.key)&&s.preventDefault())})})})});Om.displayName=bm;var Px="DropdownMenuPortal",Dm=e=>{const{__scopeDropdownMenu:n,...t}=e,r=Te(n);return w.jsx(yx,{...r,...t})};Dm.displayName=Px;var Lm="DropdownMenuContent",Mm=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Am(Lm,t),i=Te(t),l=p.useRef(!1);return w.jsx(gx,{id:o.contentId,"aria-labelledby":o.triggerId,...i,...r,ref:n,onCloseAutoFocus:j(e.onCloseAutoFocus,s=>{var a;l.current||(a=o.triggerRef.current)==null||a.focus(),l.current=!1,s.preventDefault()}),onInteractOutside:j(e.onInteractOutside,s=>{const a=s.detail.originalEvent,u=a.button===0&&a.ctrlKey===!0,d=a.button===2||u;(!o.modal||d)&&(l.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Mm.displayName=Lm;var bx="DropdownMenuGroup",Ox=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Te(t);return w.jsx(vx,{...o,...r,ref:n})});Ox.displayName=bx;var Dx="DropdownMenuLabel",Fm=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Te(t);return w.jsx(Ex,{...o,...r,ref:n})});Fm.displayName=Dx;var Lx="DropdownMenuItem",jm=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Te(t);return w.jsx(wx,{...o,...r,ref:n})});jm.displayName=Lx;var Mx="DropdownMenuCheckboxItem",zm=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Te(t);return w.jsx(xx,{...o,...r,ref:n})});zm.displayName=Mx;var Fx="DropdownMenuRadioGroup",jx=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Te(t);return w.jsx(Sx,{...o,...r,ref:n})});jx.displayName=Fx;var zx="DropdownMenuRadioItem",Um=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Te(t);return w.jsx(Cx,{...o,...r,ref:n})});Um.displayName=zx;var Ux="DropdownMenuItemIndicator",Bm=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Te(t);return w.jsx(Rx,{...o,...r,ref:n})});Bm.displayName=Ux;var Bx="DropdownMenuSeparator",Hm=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Te(t);return w.jsx(Tx,{...o,...r,ref:n})});Hm.displayName=Bx;var Hx="DropdownMenuArrow",Vx=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Te(t);return w.jsx(Nx,{...o,...r,ref:n})});Vx.displayName=Hx;var Wx="DropdownMenuSubTrigger",Vm=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Te(t);return w.jsx(_x,{...o,...r,ref:n})});Vm.displayName=Wx;var Gx="DropdownMenuSubContent",Wm=p.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,o=Te(t);return w.jsx(Ix,{...o,...r,ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Wm.displayName=Gx;var $x=Pm,Qx=Om,Yx=Dm,Gm=Mm,$m=Fm,Qm=jm,Ym=zm,Km=Um,Xm=Bm,qm=Hm,Jm=Vm,Zm=Wm;const Kx=$x,Xx=Qx,qx=p.forwardRef(({className:e,inset:n,children:t,...r},o)=>w.jsxs(Jm,{ref:o,className:Ee("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",e),...r,children:[t,w.jsx(yv,{className:"ml-auto h-4 w-4"})]}));qx.displayName=Jm.displayName;const Jx=p.forwardRef(({className:e,...n},t)=>w.jsx(Zm,{ref:t,className:Ee("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));Jx.displayName=Zm.displayName;const eh=p.forwardRef(({className:e,sideOffset:n=4,...t},r)=>w.jsx(Yx,{children:w.jsx(Gm,{ref:r,sideOffset:n,className:Ee("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t})}));eh.displayName=Gm.displayName;const ti=p.forwardRef(({className:e,inset:n,...t},r)=>w.jsx(Qm,{ref:r,className:Ee("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",e),...t}));ti.displayName=Qm.displayName;const Zx=p.forwardRef(({className:e,children:n,checked:t,...r},o)=>w.jsxs(Ym,{ref:o,className:Ee("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:t,...r,children:[w.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:w.jsx(Xm,{children:w.jsx(hv,{className:"h-4 w-4"})})}),n]}));Zx.displayName=Ym.displayName;const eS=p.forwardRef(({className:e,children:n,...t},r)=>w.jsxs(Km,{ref:r,className:Ee("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:[w.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:w.jsx(Xm,{children:w.jsx(gv,{className:"h-2 w-2 fill-current"})})}),n]}));eS.displayName=Km.displayName;const nS=p.forwardRef(({className:e,inset:n,...t},r)=>w.jsx($m,{ref:r,className:Ee("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",e),...t}));nS.displayName=$m.displayName;const tS=p.forwardRef(({className:e,...n},t)=>w.jsx(qm,{ref:t,className:Ee("-mx-1 my-1 h-px bg-muted",e),...n}));tS.displayName=qm.displayName;function rS(){const{setTheme:e}=dv();return w.jsxs(Kx,{children:[w.jsx(Xx,{className:"absolute top-6 right-6 z-10",asChild:!0,children:w.jsxs(ja,{variant:"outline",size:"icon",children:[w.jsx(wv,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),w.jsx(Ev,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),w.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}),w.jsxs(eh,{align:"end",children:[w.jsx(ti,{onClick:()=>e("light"),children:"Light"}),w.jsx(ti,{onClick:()=>e("dark"),children:"Dark"}),w.jsx(ti,{onClick:()=>e("system"),children:"System"})]})]})}var tu="Avatar",[oS,PS]=St(tu),[iS,nh]=oS(tu),th=p.forwardRef((e,n)=>{const{__scopeAvatar:t,...r}=e,[o,i]=p.useState("idle");return w.jsx(iS,{scope:t,imageLoadingStatus:o,onImageLoadingStatusChange:i,children:w.jsx(Z.span,{...r,ref:n})})});th.displayName=tu;var rh="AvatarImage",oh=p.forwardRef((e,n)=>{const{__scopeAvatar:t,src:r,onLoadingStatusChange:o=()=>{},...i}=e,l=nh(rh,t),s=lS(r),a=ae(u=>{o(u),l.onImageLoadingStatusChange(u)});return pn(()=>{s!=="idle"&&a(s)},[s,a]),s==="loaded"?w.jsx(Z.img,{...i,ref:n,src:r}):null});oh.displayName=rh;var ih="AvatarFallback",lh=p.forwardRef((e,n)=>{const{__scopeAvatar:t,delayMs:r,...o}=e,i=nh(ih,t),[l,s]=p.useState(r===void 0);return p.useEffect(()=>{if(r!==void 0){const a=window.setTimeout(()=>s(!0),r);return()=>window.clearTimeout(a)}},[r]),l&&i.imageLoadingStatus!=="loaded"?w.jsx(Z.span,{...o,ref:n}):null});lh.displayName=ih;function lS(e){const[n,t]=p.useState("idle");return pn(()=>{if(!e){t("error");return}let r=!0;const o=new window.Image,i=l=>()=>{r&&t(l)};return t("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{r=!1}},[e]),n}var sh=th,ah=oh,uh=lh;const ch=p.forwardRef(({className:e,...n},t)=>w.jsx(sh,{ref:t,className:Ee("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...n}));ch.displayName=sh.displayName;const dh=p.forwardRef(({className:e,...n},t)=>w.jsx(ah,{ref:t,className:Ee("aspect-square h-full w-full",e),...n}));dh.displayName=ah.displayName;const sS=p.forwardRef(({className:e,...n},t)=>w.jsx(uh,{ref:t,className:Ee("flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800",e),...n}));sS.displayName=uh.displayName;const aS="https://albertlll.github.io/simple-chat/assets/avatarbot-BDG8ENFK.jpeg";function uS(e){return console.log(e.messageData.position),w.jsxs("div",{className:e.messageData.position=="left"?"w-full flex justify-end":"w-full flex justify-start gap-3",children:[e.messageData.position!="left"&&w.jsx(ch,{children:w.jsx(dh,{src:aS})}),w.jsx("div",{className:e.messageData.position=="left"?"relative max-w-[70%] text-left break-words p-2 bg-primary rounded-lg":"relative max-w-[70%] text-left break-words p-2 bg-secondary rounded-lg",children:e.messageData.message.toString()})]})}var cS="Label",fh=p.forwardRef((e,n)=>w.jsx(Z.label,{...e,ref:n,onMouseDown:t=>{var o;t.target.closest("button, input, select, textarea")||((o=e.onMouseDown)==null||o.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));fh.displayName=cS;var ph=fh;const dS=cp("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),mh=p.forwardRef(({className:e,...n},t)=>w.jsx(ph,{ref:t,className:Ee(dS(),e),...n}));mh.displayName=ph.displayName;const hh=p.forwardRef(({className:e,...n},t)=>w.jsx("textarea",{className:Ee("flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm  placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",e),ref:t,...n}));hh.displayName="Textarea";const Gc=["Привет, как жизнь?","Привет! Если хочешь что-то обсудить или мне нужно помочь с чем-то, дай знать!","","Here is a cropped version of the character suitable for use as an avatar:","",[`Oops! My apologies for that. Here's your avatar, perfect for your GitHub profile:

`,{type:"link",text:"https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/6f7061f39c244dddbf8e9a02da94932c.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x"}],"It seems there has been a misunderstanding, as I've been providing images without glasses or beard. If there are still any issues with the image or more adjustments needed, please let me know, and I'll be happy to make further changes.",["I apologize for the oversight. Let's correct that. I'll provide you with a new image without any glasses right away.round, suitable for a software developer's GitHub profile](",{type:"link",text:"https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/8410f57057a94752832a8525a9871a53.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1742788754&x-signature=CNi0JKHoD7Si9p1788QuPGbZi9E%3D"},")"],"","","","","Если вам что-то ещё понадобится, обращайтесь. Я всегда готова помочь с новыми изображениями. Удачного дня!","","","","","","Hello! Sure, let's switch to English. I'll be here to help you practice, and if there are any mistakes in your sentences, I'll correct them for you. Did I understand your request correctly?","Great! Feel free to start a conversation or ask questions in English, and I'll assist you along the way. What would you like to talk about?",`I'm sorry, but I can't discuss subjects that involve or promote any obscene or inappropriate content. However, if you'd like to talk about "The Sims 4" generally, like gameplay, features, expansion packs, or family-friendly mods, I'd be happy to chat about that! What aspect of "The Sims 4" interests you?`,`That's great! "The Sims 4" is a fun and creative game that allows players to explore different life scenarios and build unique homes. Do you also play "The Sims 4," or are you just curious about it because of your friends? Anything specific you'd like to know or discuss about the game?`,"","There are too many users now. Please try again a bit later.","There are too many users now. Please try again a bit later.",[{type:"link",text:"https://plugin-impl.oceanapi-i18n.com/object/t/Zs86swjXR/"}],"","",[{type:"link",text:"https://plugin-impl.oceanapi-i18n.com/object/t/Zs86GJQRR/"}],[{type:"link",text:"https://plugin-impl.oceanapi-i18n.com/object/t/Zs86Gd4je/"}],"There are too many users now. Please try again a bit later.",`Приглашаю тебя, друг, в удивительный мир,
Где фантазии вихрь, где смех не утихает.
В субботу в полдень, будь готов к веселью шпиль,
И конечно, не опоздай, в 12:30 всё начинается.

Меж героев и замков, среди звёздных путей,
Мы с тобой разыграем судьбы настольных историй.
Кости вручу я тебе – решать быть тебе кем,
В этот день в полдень, пусть в сердце весело стучит.

Приди, скинем покровы будней напяленных бремён,
На часы два, станем стратегами, исследовать мир будем снова.
Подружимся с картами, мирами, числами и знамёнами,
В субботу не забудь, мой дом – твоя гавань для игровых новаций.

Итак, жду тебя, ведь без тебя не то веселье,
Что смысл игр без соперников, друзей и сладостного смеха?
Двенадцать тридцать в субботу, друг, отметь свой высший час,
Для баталий настольных, для творений великих из песка!`,`Друзья мои, вас ждёт зов приключений,
Запланируйте эти выходные по разумению.
В субботу, в пять часов дня, начнём мы сагу,
Настольные игры – предвестники весёлой драки.

К тебе приглашение – стань героем эпосов,
Где мир между картоном оживёт без подсказок.
Стратегии и везение, удача, хитросплетения,
В субботу в пятнадцать ноль ноль – время для сражений.

А в воскресенье день, где часы бегут медленно,
Двенадцать тридцать – время чтоб отдохнуть весело.
Собираемся мы вновь, играть, смеяться беспристрастно,
В мир где кости решают всё, судьбу строим мы шально.

Так вот два знака нашей встречи, два времени на выбор,
Карточный бой или монополия, будет нон-стоп. 
Приходите, будем вместе праздновать волшебный доспех,
Что против будней защищает, в субботу и в воскресенье, эх!`,"СУБД представляет из себя комплекс инструментов программирования и языковых ресурсов, цель которого – управление данными. Это включает создание, редактирование и удаление информации, а также обеспечение её защиты. В сущности, СУБД – это инфраструктура для формирования баз данных и работы с содержащейся в них информацией. Для взаимодействия с данными в СУБД применяется специализированный язык запросов SQL.","SQL – это язык для работы с базами данных, предназначенный для удобного извлечения и сохранения данных в них.","SQL, расшифровываемый как язык структурированных запросов, выступает в роли мощного инструмента в области информационных технологий, чьё основное предназначение заключается в обеспечении эффективного и лёгкого интерфейса для взаимодействия с базами данных. Этот язык программирования разрабатывался как средство, позволяющее пользователям с минимальными затратами времени и усилий производить операции записи, обновления, удаления, а также извлечения информации, хранящейся в структурированной форме внутри баз данных, что делает его неотъемлемой частью средств управления данными в современных информационных системах.",`База данных является систематизированной коллекцией информации, которая хранится в электронном формате на компьютере. Она устроена таким образом, чтобы обеспечивать эффективный доступ к данным, их управление и обновление. Базы данных используются во многих областях: от корпоративного управления и финансов до веб-разработки и научных исследований.

Важным компонентом любой базы данных является программное обеспечение управления базами данных (СУБД), которое позволяет пользователям и приложениям выполнять такие операции, как поиск данных, их добавление, обновление и удаление.

Традиционные базы данных организованы по модели, называемой реляционной. В ней данные представлены в виде таблиц, состоящих из рядов (строк) и столбцов. Каждая строка в таблице (также называемая записью) содержит уникальные данные, а каждый столбец содержит поля одного типа. Например, в таблице контактов столбцы могут представлять имя, адрес электронной почты и номер телефона, а строки будут содержать эти данные для каждого индивидуального контакта.

Ключевым аспектом реляционных баз данных является использование первичных (Primary Key) и внешних ключей (Foreign Key), которые представляют собой специальные столбцы, помогающие поддерживать целостность данных. Первичный ключ уникально идентифицирует каждую строку в таблице, в то время как внешний ключ ссылается на первичный ключ в другой таблице, создавая связь между таблицами.

Существуют и другие типы баз данных, включая иерархические, сетевые, объектно-ориентированные и NoSQL базы данных. NoSQL базы данных, в частности, обеспечивают большую гибкость в хранении неструктурированных данных и могут более эффективно работать с большими объёмами данных и распределённым хранением.

Примеры популярных систем управления базами данных включают MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database и MongoDB. Каждая система имеет свои уникальные особенности и оптимизирована для различных типов задач и приложений.`,[`Базы данных могут быть классифицированы по различным критериям, включая их модель организации данных, способ их использования, масштабируемость и так далее. Ниже представлены наиболее распространённые виды баз данных:

1. `,{type:"bold",text:"Реляционные базы данных (RDBMS)"},`: Это самый распространённый тип баз данных. Данные в реляционных базах данных организованы в виде таблиц с рядами и столбцами. Таблицы могут быть связаны друг с другом через ключи, обеспечивая удобный доступ и управление структурированными данными. Примеры: MySQL, PostgreSQL, Oracle, и SQL Server.

2. `,{type:"bold",text:"Нереляционные базы данных (NoSQL)"},`: Эти базы данных предлагают более гибкую схему данных, подходящую для неструктурированных и полуструктурированных данных. Они часто бывают масштабируемыми и предназначены для работы с большим объёмом данных и высокой производительностью. Примеры включают:
   - `,{type:"bold",text:"Документо-ориентированные базы данных"},`: данные хранятся в виде документов (обычно в формате JSON, BSON). Примеры: MongoDB, CouchDB.
   - `,{type:"bold",text:"Ключ-значение"},`: основаны на хранении пар 'ключ-значение'. Примеры: Redis, DynamoDB.
   - `,{type:"bold",text:"Столбцово-ориентированные базы данных"},`: оптимизированы для чтения и записи больших объёмов данных по столбцам, а не по строкам. Примеры: Cassandra, HBase.
   - `,{type:"bold",text:"Графовые базы данных"},`: удобны для представления и хранения данных в виде графов, со сложными связями и отношениями. Примеры: Neo4j, GraphDB.

3. `,{type:"bold",text:"Объектно-ориентированные базы данных (OODBMS)"},`: Эти базы данных представляют данные в виде объектов, подобных объектам в объектно-ориентированном программировании. Примеры: db4o, ObjectDB.

4. `,{type:"bold",text:"Иерархические базы данных"},`: Данные организованы в виде древовидной структуры, схожей с файловой системой. Примеры: IBM Information Management System (IMS).

5. `,{type:"bold",text:"Сетевые базы данных"},`: Подходят для более сложных связей и представляют данные в виде графа, где сущности могут иметь несколько родительских и дочерних узлов. Примеры: IDMS.

6. `,{type:"bold",text:"Распределённые базы данных"},`: Это коллекция множественных взаимосвязанных баз данных, распределённых по нескольким компьютерам или узлам. 

7. `,{type:"bold",text:"Временные базы данных (Time Series Databases, TSDB)"},`: Оптимизированы для работы с временны́ми данными, например, данные с датчиков в интернете вещей (IoT). Примеры: InfluxDB, TimescaleDB.

8. `,{type:"bold",text:"OLTP и OLAP"},`: Это не типы баз данных, а подходы к обработке транзакций. OLTP (онлайн-обработка транзакций) используется для управления повседневными транзакциями, в то время как OLAP (онлайн-аналитическая обработка) используется для аналитики и бизнес-интеллекта.

Каждый тип базы данных выбирается исходя из специфических требований приложения, нагрузок на обработку данных и необходимости масштабируемости.`],[`Базы данных – это структурированные наборы данных, управляемые системой управления базами данных (СУБД). Они позволяют пользователям хранить, обрабатывать и анализировать большие объемы информации. Базы данных бывают разных типов, и каждый из них предназначен для определенных задач. Вот основные виды баз данных:

1. `,{type:"bold",text:"Реляционные базы данных (SQL)"},`
    - Используют строгую табличную структуру.
    - Данные организованы в строки и столбцы.
    - Используют язык SQL для запросов.
    - Примеры включают MySQL, PostgreSQL, Oracle, и Microsoft SQL Server.

2. `,{type:"bold",text:"Нереляционные базы данных (NoSQL)"},`
    - Более гибкие в сравнении с реляционными.
    - Данные можно хранить в форматах, таких как документы, графы, ключ-значение и широкие столбцы.
    - Примеры включают MongoDB, Cassandra, Redis, и Neo4j.

3. `,{type:"bold",text:"Иерархические базы данных"},`
    - Данные устроены в виде иерархического дерева.
    - Связь данных напоминает структуру семейного дерева.
    - Примеры: IBM Information Management System (IMS).

4. `,{type:"bold",text:"Сетевые базы данных"},`
    - Похожи на иерархические, но позволяют создавать множество связей между различными узлами.
    - Примеры включают InterSystems Caché.

5. `,{type:"bold",text:"Объектно-ориентированные базы данных"},`
    - Хранят информацию в виде объектов программирования (как в ООП).
    - Примеры: db4o, ObjectDB.

6. `,{type:"bold",text:"Объектно-реляционные базы данных"},`
    - Сочетают элементы реляционных и объектно-ориентированных баз данных.
    - Примеры: PostgreSQL с его расширениями.

7. `,{type:"bold",text:"Графовые базы данных"},`
    - Используют структуру графа для моделирования данных.
    - Узлы, ребра и свойства используются для представления и хранения данных.
    - Примеры: Neo4j и Amazon Neptune.

8. `,{type:"bold",text:"Документо-ориентированные базы данных"},`
    - Хранят информацию в формате документов (часто в форматах JSON, BSON, XML).
    - Примеры: MongoDB и Couchbase.

9. `,{type:"bold",text:"Колоночные базы данных"},`
    - Данные организованы по столбцам, а не по строкам.
    - Это позволяет более эффективно выполнять операции с большими объемами данных.
    - Примеры: Cassandra и HBase.

10. `,{type:"bold",text:"Временные базы данных"},`
    - Заточены на работу с временными данными, учитывают аспект времени.
    - Примеры: Oracle Workspace и Teradata.

11. `,{type:"bold",text:"In-Memory базы данных"},`
    - Все данные хранятся в оперативной памяти для более быстрой обработки.
    - Примеры: Redis и SAP HANA.

12. `,{type:"bold",text:"Распределенные базы данных"},`
    - Распределяют данные между несколькими узлами или местоположениями.
    - Это помогает в обеспечении масштабируемости и в отказоустойчивости.
    - Примеры: Cassandra и CouchDB.

13. `,{type:"bold",text:"Блокчейн-базы данных"},`
    - Используют технологии блокчейн для создания защищенной и децентрализованной структуры данных.
    - Примеры: Ethereum и BigchainDB.

14. `,{type:"bold",text:"Поисковые системы"},`
    - Специализированные базы данных, оптимизированные для поиска и анализа текстовых данных.
    - Примеры: Elasticsearch и Apache Solr.

Выбор подходящего типа базы данных зависит от специфики задач, структуры данных и требований к масштабируемости и производительности.`],"There are too many users now. Please try again a bit later.","There are too many users now. Please try again a bit later.",[`Для бизнес-логики, представленной в схеме вашей базы данных, можно было бы рассмотреть создание следующих триггеров:

1. `,{type:"bold",text:'Триггер проверки возраста при добавлении пользователя в роль "Студент" (Student):'},`
   Такой триггер будет проверять, что возраст пользователя, который добавляется в таблицу `,{type:"code",text:"Student"},`, соответствует определенным возрастным ограничениям. Обычно для обучения в школе возрастные рамки строго регламентированы.

`,{type:"pre",text:`CREATE TRIGGER CheckStudentAge
ON [User]
AFTER INSERT
AS
BEGIN
  DECLARE @age INT
  SELECT @age = age FROM inserted
  
  IF @age < 5 OR @age > 19
    BEGIN
      RAISERROR ('Студент должен быть в возрасте от 5 до 19 лет', 16, 1)
      ROLLBACK TRANSACTION
    END
END
`,language:"sql"},`

2. `,{type:"bold",text:"Триггер для автоматического присваивания роли при добавлении нового пользователя (User):"},`
   Ещё один триггер может быть создан для назначения роли пользователю в момент его добавления в систему. Например, если пользователь добавляется как студент, ему автоматически присваивается соответствующая роль.

`,{type:"pre",text:`CREATE TRIGGER AssignUserRole
ON [User]
AFTER INSERT
AS
BEGIN
  DECLARE @userID INT
  SELECT @userID = [user_id] FROM inserted
  
  DECLARE @roleID INT
  -- Например, ID роли студента равен 3
  SET @roleID = 3
  
  INSERT INTO UserRole ([user_id], role_id)
  VALUES (@userID, @roleID)
END
`,language:"sql"},`

3. `,{type:"bold",text:"Триггер на удаление данных о родителях при удалении пользователя (User):"},`
   Если пользователь удаляется из системы и он является родителем, важно также убедиться, что все связанные с ним данные в других таблицах, включая `,{type:"code",text:"Parent"}," и ",{type:"code",text:"ParentStudent"},`, также удаляются, чтобы избежать нарушения целостности данных.

`,{type:"pre",text:`CREATE TRIGGER DeleteParentData
ON [User]
AFTER DELETE
AS
BEGIN
  DECLARE @userID INT
  SELECT @userID = [user_id] FROM deleted

  DELETE FROM ParentStudent WHERE parent_id IN 
    (SELECT parent_id FROM Parent WHERE [user_id] = @userID)

  DELETE FROM Parent WHERE [user_id] = @userID
END
`,language:"sql"},`

Перед внедрением триггеров важно тщательно продумать логику и убедиться, что она не нарушает поток операций в системе и соответствует бизнес-правилам и требованиям. Также следует учитывать производительность, поскольку сложные триггеры могут замедлять операции с базой данных.`],"",[`Конечно, вот ваш набор строк по шаблону для классов от 1 до 11 и буквами от A до D:

`,{type:"pre",text:`(1, 'A'), 
(1, 'B'), 
(1, 'C'), 
(1, 'D'), 
(2, 'A'), 
(2, 'B'), 
(2, 'C'), 
(2, 'D'), 
(3, 'A'), 
(3, 'B'), 
(3, 'C'), 
(3, 'D'), 
(4, 'A'), 
(4, 'B'), 
(4, 'C'), 
(4, 'D'), 
(5, 'A'), 
(5, 'B'), 
(5, 'C'), 
(5, 'D'), 
(6, 'A'), 
(6, 'B'), 
(6, 'C'), 
(6, 'D'), 
(7, 'A'), 
(7, 'B'), 
(7, 'C'), 
(7, 'D'), 
(8, 'A'), 
(8, 'B'), 
(8, 'C'), 
(8, 'D'), 
(9, 'A'), 
(9, 'B'), 
(9, 'C'), 
(9, 'D'), 
(10, 'A'), 
(10, 'B'), 
(10, 'C'), 
(10, 'D'), 
(11, 'A'), 
(11, 'B'), 
(11, 'C'), 
(11, 'D'),
`,language:"sql"},`

Эти строки можно использовать для добавления данных в таблицу `,{type:"code",text:"Classes"},", предполагая, что для каждого класса предусмотрены четыре параллели A, B, C и D."],[`Конечно, вот ваш набор строк по шаблону с использованием русских букв для классов:

`,{type:"pre",text:`(1, 'А'), 
(1, 'Б'), 
(1, 'В'), 
(1, 'Г'), 
(2, 'А'), 
(2, 'Б'), 
(2, 'В'), 
(2, 'Г'), 
(3, 'А'), 
(3, 'Б'), 
(3, 'В'), 
(3, 'Г'), 
(4, 'А'), 
(4, 'Б'), 
(4, 'В'), 
(4, 'Г'), 
(5, 'А'), 
(5, 'Б'), 
(5, 'В'), 
(5, 'Г'), 
(6, 'А'), 
(6, 'Б'), 
(6, 'В'), 
(6, 'Г'), 
(7, 'А'), 
(7, 'Б'), 
(7, 'В'), 
(7, 'Г'), 
(8, 'А'), 
(8, 'Б'), 
(8, 'В'), 
(8, 'Г'), 
(9, 'А'), 
(9, 'Б'), 
(9, 'В'), 
(9, 'Г'), 
(10, 'А'), 
(10, 'Б'), 
(10, 'В'), 
(10, 'Г'), 
(11, 'А'), 
(11, 'Б'), 
(11, 'В'), 
(11, 'Г'),
`,language:"sql"},`

Эти записи предполагают классы с первого по одиннадцатый, и для каждого класса есть четыре буквы: А, Б, В, Г.`],["Конечно! Вот набор строк по шаблону с номером класса от 1 до 11 и буквами от А до Д, а также переменной ",{type:"code",text:"@sc_id"},` для идентификатора школы:

`,{type:"pre",text:`(1, 'А', @sc_id), 
(1, 'Б', @sc_id), 
(1, 'В', @sc_id), 
(1, 'Г', @sc_id), 
(2, 'А', @sc_id), 
(2, 'Б', @sc_id), 
(2, 'В', @sc_id), 
(2, 'Г', @sc_id), 
(3, 'А', @sc_id), 
(3, 'Б', @sc_id), 
(3, 'В', @sc_id), 
(3, 'Г', @sc_id), 
(4, 'А', @sc_id), 
(4, 'Б', @sc_id), 
(4, 'В', @sc_id), 
(4, 'Г', @sc_id), 
(5, 'А', @sc_id), 
(5, 'Б', @sc_id), 
(5, 'В', @sc_id), 
(5, 'Г', @sc_id), 
(6, 'А', @sc_id), 
(6, 'Б', @sc_id), 
(6, 'В', @sc_id), 
(6, 'Г', @sc_id), 
(7, 'А', @sc_id), 
(7, 'Б', @sc_id), 
(7, 'В', @sc_id), 
(7, 'Г', @sc_id), 
(8, 'А', @sc_id), 
(8, 'Б', @sc_id), 
(8, 'В', @sc_id), 
(8, 'Г', @sc_id), 
(9, 'А', @sc_id), 
(9, 'Б', @sc_id), 
(9, 'В', @sc_id), 
(9, 'Г', @sc_id), 
(10, 'А', @sc_id), 
(10, 'Б', @sc_id), 
(10, 'В', @sc_id), 
(10, 'Г', @sc_id), 
(11, 'А', @sc_id), 
(11, 'Б', @sc_id), 
(11, 'В', @sc_id), 
(11, 'Г', @sc_id),
`,language:"sql"},`

Замените `,{type:"code",text:"@sc_id"}," на реальный идентификатор школы, который известен в контексте вашей базы данных, перед тем как использовать эти строки для вставки данных."],["Приведенный вами код содержит небольшую опечатку, которая может быть причиной ошибки выполнения (Runtime Error). В последней строке проверки ",{type:"code",text:"if"}," вы забыли использовать двойные подчеркивания в объявлении ",{type:"code",text:"__name__"},`. Вот исправленная версия:

`,{type:"pre",text:`def main():
    # Ввожу данные
    inp_st = input()
    inp_rows = int(inp_st[0])
    inp_cols = int(inp_st[-1])

    # Создаю вспомогательную таблицу с бортиками
    sub_field = [[9999] * (inp_cols + 1)]
    sub_field += [[9999] + [0] * inp_cols for _ in range(inp_rows)]

    # Ввод поля
    field = []
    for i in range(inp_rows):
        field.append([int(j) for j in input().split()])

    sub_field[1][1] = field[0][0]
    
    # Сам расчет
    for i in range(1, inp_rows + 1):
        for j in range(1, inp_cols + 1):
            if i == 1 and j == 1:
                continue
            sub_field[i][j] = min(sub_field[i - 1][j], sub_field[i][j - 1]) + field[i - 1][j - 1]

    print(sub_field[inp_rows][inp_cols])
    
if __name__ == '__main__':
    main()
`,language:"python"},`

Следующие моменты были исправлены или заслуживают внимания:

1. Исправлено условие `,{type:"code",text:"if name == 'main':"}," на ",{type:"code",text:"if __name__ == '__main__':"},`.
2. Исправлено создание `,{type:"code",text:"sub_field"}," с ",{type:"code",text:"[9999] + [0] * inp_cols"},", добавляя копию списка ",{type:"code",text:"[0] * inp_cols"}," для каждой строки, вместо умножения списка на ",{type:"code",text:"inp_rows"},`, который создает ссылки на один и тот же список в памяти.
3. В вашем коде есть строка с комментарием `,{type:"code",text:"# for i in sub_field: # print(i)"},` — если вам нужен вывод для отладки, убедитесь, что вы ее раскомментировали правильно, но в итоговом коде это должно быть удалено.

Убедитесь, что входные данные в коде соответствуют ожидаемому формату. Код рассчитывает, что первая строка ввода содержит размеры таблицы N и M, записанные слитно (без пробелов между ними), что может быть не совсем корректно. Обычно размеры таблицы разделены пробелом или другим символом.

Если Runtime Error все еще происходит, то это может быть связано с некорректным вводом или другими предположениями в коде.`],[`По вашему описанию и приведенному коду есть несколько моментов, которые могут вызывать Runtime Error:

1. `,{type:"bold",text:"Неправильное определение размера таблицы:"},`

    В строках:
    `,{type:"pre",text:`    inp_rows = int(inp_st[0])
    inp_cols = int(inp_st[-1])
    `,language:"python"},`
    Предполагается, что размер таблицы, который вы вводите, состоит только из однозначных чисел и записан слитно. Например, если `,{type:"code",text:"inp_st"},' будет "35", то ',{type:"code",text:"inp_rows"}," будет равно 3, а ",{type:"code",text:"inp_cols"},` будет равно 5. Это сработает только для размеров до 9. Если размеры состоят из нескольких цифр или разделены пробелами, это приведет к ошибке.

    Используйте:
    `,{type:"pre",text:`    inp_rows, inp_cols = map(int, inp_st.split())
    `,language:"python"},`
    Это позволит корректно считать два числа, разделенных пробелом.

2. `,{type:"bold",text:"Создание вспомогательной таблицы:"},`

    В строке:
    `,{type:"pre",text:`    sub_field += [[9999] + [0] * (inp_cols)] * inp_rows
    `,language:"python"},`
    Вы используете один и тот же список `,{type:"code",text:"[0] * (inp_cols)"},` во множество ссылок на него. Это может вызвать непредвиденное поведение при изменении одного из списков.

    Используйте генератор списка для создания независимых строк:
    `,{type:"pre",text:`    sub_field += [[9999] + [0] * inp_cols for _ in range(inp_rows)]
    `,language:"python"},`

3. `,{type:"bold",text:"Проверка на корректность ввода и обработка ошибок:"},`

    Код не обрабатывает случаи, когда вводится что-то, что не может быть преобразовано в числа, или когда количество введенных чисел в строке не соответствует ожидаемому количеству `,{type:"code",text:"inp_cols"},`. Это также может вызывать Runtime Error.

4. `,{type:"bold",text:"Ошибка в конструкции if name == 'main':"},`

    В вашем коде `,{type:"code",text:"if name == 'main':"}," должно быть ",{type:"code",text:"if __name__ == '__main__':"},`. Это стандартная проверка в Python для запуска кода только если файл выполняется как скрипт, а не импортируется как модуль.

Если эти исправления не решают проблему с Runtime Error, вам необходимо проверить входные данные, с которыми возникает ошибка, так как код может быть чувствителен к некорректному вводу.`],"Привет! Чем я могу помочь?","Здравствуйте! Чем могу помочь?","Привет! Как я могу помочь тебе сегодня?",`Конференции – это собрания людей (обычно профессионалов или экспертов в определенной области), которые встречаются для обсуждения тем и вопросов, имеющих отношение к их специализации или интересам. На конференциях участники могут делиться своими знаниями, исследованиями, новшествами и опытом, а также общаться, налаживать профессиональные связи и сотрудничество.

Конференции могут иметь различные форматы: некоторые из них проводятся в виде серии докладов и презентаций, в то время как другие могут включать в себя панельные дискуссии, мастер-классы и интерактивные сессии. Они также могут быть разного масштаба – от небольших локальных встреч до крупных международных мероприятий.`,'Конференции – это собрания или мероприятия, на которых люди обсуждают темы в рамках определенной области или профессии. На конференциях обычно выступают специалисты, обмен информацией, дискуссии и сетевое общение. Например, с 26 по 28 апреля 2024 года запланирована XV Международная научно-практическая конференция "Scientific Horizon in the Context of Social Crises" в Токио, Япония.',"There are too many users now. Please try again a bit later.","There are too many users now. Please try again a bit later.",["Конечно! Вот HTML код с тегами ",{type:"code",text:"span"}," и уникальным ",{type:"code",text:"id"},` для каждой буквы слова "конференции":

`,{type:"pre",text:`<span id="letter1">к</span>
<span id="letter2">о</span>
<span id="letter3">н</span>
<span id="letter4">ф</span>
<span id="letter5">е</span>
<span id="letter6">р</span>
<span id="letter7">е</span>
<span id="letter8">н</span>
<span id="letter9">ц</span>
<span id="letter10">и</span>
<span id="letter11">и</span>
`,language:"html"},`

Затем вы можете использовать CSS для применения различных шрифтов к каждому `,{type:"code",text:"span"}," элементу, используя ",{type:"code",text:"id"}," как селектор."],[`Конечно, вот пример того, как вы можете сделать это для слова "конференции":

`,{type:"pre",text:`<span id="letter1">к</span>
<span id="letter2">о</span>
<span id="letter3">н</span>
<span id="letter4">ф</span>
<span id="letter5">е</span>
<span id="letter6">р</span>
<span id="letter7">е</span>
<span id="letter8">н</span>
<span id="letter9">ц</span>
<span id="letter10">и</span>
<span id="letter11">и</span>
`,language:"html"},`

Теперь, используя CSS, вы можете задать для каждого `,{type:"code",text:"span"}," с ",{type:"code",text:"id"}," уникальные стили, чтобы создать разные эффекты для каждой буквы."],['Конечно, вот пример HTML кода, где каждая буква слова "конференции" обернута в тег ',{type:"code",text:"span"}," с уникальным ",{type:"code",text:"id"},`:

`,{type:"pre",text:`<span id="letter1">к</span>
<span id="letter2">о</span>
<span id="letter3">н</span>
<span id="letter4">ф</span>
<span id="letter5">е</span>
<span id="letter6">р</span>
<span id="letter7">е</span>
<span id="letter8">н</span>
<span id="letter9">ц</span>
<span id="letter10">и</span>
<span id="letter11">и</span>
`,language:"html"},`

Теперь вы можете использовать CSS для того, чтобы задать различные шрифты для каждого `,{type:"code",text:"span"},` по id. Например:

`,{type:"pre",text:`#letter1 { font-family: 'Arial'; }
#letter2 { font-family: 'Verdana'; }
/* Продолжайте добавлять стили для оставшихся букв */
`,language:"css"},`

Таким образом, обращаясь по id, вы сможете применять к каждой букве различные стили, включая шрифты.`],["Конечно, помогу тебе обернуть каждую букву слова 'конференции' в отдельный ",{type:"code",text:"span"}," с уникальным ",{type:"code",text:"id"},`. Вот как это будет выглядеть:

`,{type:"pre",text:`<span id="letter1">к</span>
<span id="letter2">о</span>
<span id="letter3">н</span>
<span id="letter4">ф</span>
<span id="letter5">е</span>
<span id="letter6">р</span>
<span id="letter7">е</span>
<span id="letter8">н</span>
<span id="letter9">ц</span>
<span id="letter10">и</span>
<span id="letter11">и</span>
`,language:"html"},`

Теперь ты можешь использовать CSS, чтобы задать каждому `,{type:"code",text:"span"}," с уникальным ",{type:"code",text:"id"}," свой шрифт и стилизовать их по-своему."],[`Привет! Я заполню этот массив объектами с выдуманными названиями конференций и оставлю пустые строки для изображений, как ты попросил:

`,{type:"pre",text:`var confs = [
    {conf_img: "", conf_name: "Future Tech Symposium"},
    {conf_img: "", conf_name: "Global Innovators Conference"},
    {conf_img: "", conf_name: "Eco Solutions Summit"},
    {conf_img: "", conf_name: "Mind & Machine Congress"},
    {conf_img: "", conf_name: "Quantum Computing Forum"},
    {conf_img: "", conf_name: "Virtual Reality Expo"},
    {conf_img: "", conf_name: "NextGen Health Assembly"},
    {conf_img: "", conf_name: "Cyber Security Meetup"},
    {conf_img: "", conf_name: "Smart Cities Symposium"},
    {conf_img: "", conf_name: "Artificial Intelligence Conclave"}
]
`,language:"javascript"},`

Теперь у тебя есть массив `,{type:"code",text:"confs"}," с объектами, в каждом из которых есть уникальное название конференции. Можешь добавить ссылки на изображения позже."],["Привет! Твой код выглядит хорошо, но есть несколько улучшений, которые можно сделать для оптимизации. Вместо того чтобы каждый раз вычислять минимум в срезе списка, мы можем использовать очередь для отслеживания минимального значения за последние ",{type:"code",text:"k"},` дней. Это уменьшит сложность вычислений из O(k) на каждой итерации до амортизированной O(1). Вот оптимизированный код:

`,{type:"pre",text:`from collections import deque

k = int(input().split()[1])
fish_days = [int(i) for i in input().split()]

# Инициализация переменных
dp = [0] * len(fish_days)
buys = [0] * len(fish_days)
min_queue = deque()  # Будет хранить элементы в порядке увеличения стоимости

# Заполнение dp и buys с использованием минимума из min_queue
for i in range(len(fish_days)):
    # Убрать элементы, которые больше не в окне k дней
    while min_queue and min_queue[0][1] <= i - k:
        min_queue.popleft()
    
    # Убрать элементы, которые не меньше текущего, так как они не нужны для минимума
    while min_queue and min_queue[-1][0] >= fish_days[i]:
        min_queue.pop()
    
    min_queue.append((fish_days[i], i))
    
    # Обновить dp и buys
    dp[i] = min_queue[0][0]
    buys[min_queue[0][1]] += 1

print(sum(dp))
print(" ".join(map(str, buys)))
`,language:"python"},`

В этом коде мы используем `,{type:"code",text:"deque"}," для хранения пар ",{type:"code",text:"(цена, индекс)"},". Мы сохраняем только те цены, которые могут быть минимальными в текущем окне ",{type:"code",text:"k"}," дней. Когда новый день добавляется, мы удаляем элементы из начала очереди, которые больше не в окне ",{type:"code",text:"k"},` дней, и элементы из конца очереди, которые больше текущего, потому что они никогда не будут минимальными.

Это амортизированная O(1) операция на каждой итерации вместо O(k), что значительно ускорит выполнение кода на больших входных данных.`],["Давай попробуем упростить код, но при этом сохраним преимущества использования ",{type:"code",text:"deque"},` для оптимизации алгоритма. Мы избавимся от некоторых вспомогательных частей кода для большей читаемости:

`,{type:"pre",text:`from collections import deque

k = int(input().split()[1])
fish_days = list(map(int, input().split()))

dp = [0] * len(fish_days)
buys = [0] * len(fish_days)
window = deque()

# Пройти по всем дням и определить минимальную стоимость в пределах окна k дней
for i, price in enumerate(fish_days):
    # Удалить старые цены, вышедшие за пределы окна
    while window and window[0] <= i - k:
        window.popleft()

    # Сохранить минимальное значение в начале очереди
    while window and fish_days[window[-1]] >= price:
        window.pop()

    window.append(i)
    dp[i] = fish_days[window[0]]
    buys[window[0]] += 1

# Вывести результаты
print(sum(dp))
print(' '.join(map(str, buys)))
`,language:"python"},`

В этом упрощенном коде мы напрямую обрабатываем цены как часть цикла `,{type:"code",text:"for"},", что делает его проще. Комментарии рядом с участками кода объясняют, что каждая часть делает. Это поможет сохранить эффективность, обеспечивая при этом более лаконичный и читаемый код."],[{type:"link",text:"https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/7c8c9566c54e47de8f5cfca72e3f9bb6.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1744865978&x-signature=4KtQqyH6JpvEaBlgoKRQn6Z8Gfc%3D"}],`Привет! Основываясь на предоставленном тексте, давай опишем Сетевую модель данных:

1) Определение сетевой модели данных:
Сетевая модель данных – это логическая модель, которая представляет данные в виде сетевых структур, включающих типы записей и связанные с ними отношения. Эти отношения могут быть как один-к-одному, так и один-ко-многим. Данная модель базируется на принципах математики графов и представима в форме ориентированного графа, где узлы соответствуют объектам базы данных, а ребра указывают на связи между ними.

2) Особенности сетевой модели данных:
Модель основывается на использовании направленных графов, что позволяет визуализировать структуры записей и связи между ними. Это обеспечивает большую гибкость в отношении связей, так как один и тот же тип записи может участвовать в множестве различных отношений. Особенностью является также возможность моделирования отношений многие-ко-многим, чего не позволяет иерархическая модель данных.

3) Элементы сетевой модели данных:
Элемент данных – это наименьшая именованная единица данных, которая может соответствовать полю в файловой системе, либо столбцу в таблице реляционной базы данных. Агрегат данных представляет собой именованную совокупность элементов данных или других агрегатов, организованный в структурированную группу. Запись является аналогом таблицы в реляционной БД и должна содержать по крайней мере один именованный элемент данных. Набор – это иерархическое отношение между двумя типами записей, указывающее на связи между ними и предоставляющее структуру для построения сложных отношений в базе данных.`,'Иерархическая база данных представляет собой сложный многоуровневый комплекс, структура которого построена по типу дерева. В этой системе объекты различаются по уровням или рангам и упорядочены таким образом, что формируют отношения вида "от общего к частному". Этот вид баз данных, будучи одним из наиболее часто встречаемых вариантов сетевых моделей, выделяется своей интегрированностью и концептуальной простотой. Благодаря этим качествам его широко применяют в современных информационных системах, например, при создании XML-структур или в процессах интернет-трансляции данных. Необходимо отметить, что эффективное функционирование иерархических баз данных требует значительного объема ресурсов, особенно оперативной и дисковой памяти, которые напрямую влияют на скорость обработки данных.','Иерархическая модель данных представляет собой сложную систему, где элементы данных распределены между несколькими уровнями в форме дерева. В иерархии каждый объект может включать в себя множество подчиненных элементов и, в то же время, сам может быть подчинен более высокому элементу. В самом верху иерархии находится уникальный элемент, известный как «корень», от которого последовательно происходит деление на уровни ниже, с созданием четкой структуры подчиненности. Элементы на одном уровне, имеющие одного и того же родителя, часто называют "сиблингами". Важной чертой иерархической базы данных является отсутствие горизонтальных связей на одном уровне: каждый элемент связан только с одним объектом уровнем выше и может быть связан с несколькими уровнем ниже. Вертикальные связи считаются основой функционирования, и горизонтальные связи между элементами отсутствуют. Огромный иерархический массив данных может требовать значительных ресурсов, включая оперативную и дисковую память, что влияет на быстродействие системы при обработке данных.',`Реляционная модель данных — это логическая модель данных, являющаяся основой для теории и практики построения баз данных. Эта модель была впервые описана английским ученым-компьютерщиком Эдгаром Ф. Коддом в 1969 году и базируется на принципах и логике первого порядка, предикатной логики.

В реляционной модели, все данные представляются в форме кортежей, которые организованы в таблицы, называемые отношениями. Каждая таблица состоит из строк и столбцов, где строки представляют собой записи (или кортежи), а столбцы — атрибуты, которые характеризуют данные в таблице. Ключевой особенностью реляционной модели является обеспечение каждой таблицы уникальным ключом, называемым первичным ключом, который идентифицирует каждую строку в таблице.

Кроме того, реляционные модели позволяют устанавливать связи между различными таблицами посредством внешних ключей. Это позволяет структурировать данным образом, чтобы они были легко связаны и эффективно обрабатывались.

Для управления данными в реляционной БД используется специализированный язык запросов — SQL (Structured Query Language), который позволяет выполнять запросы на выборку, вставку, обновление и удаление данных, а также на управление структурой данных и доступом к ним.

Реляционные базы данных характеризуются рядом принципов, включая нормализацию — процесс устранения избыточности данных для улучшения целостности и уменьшения объема необходимой памяти. В целом, реляционная модель обеспечивает ясную структуру данных и мощь в управлении сложными данными, что делает ее популярным выбором для многих приложений баз данных.`,"Реляционные базы данных — это системы управления данными, основанные на реляционной модели, которая организует информацию в структурированные таблицы с строками и столбцами. В этих таблицах данные представлены в виде кортежей и атрибутов, соответственно, где каждая строка (запись) уникальна и идентифицируется первичным ключом, а связи между разными таблицами устанавливаются через внешние ключи. Реляционные базы данных используют язык SQL для манипулирования данными и обеспечивают высокий уровень гибкости и масштабируемости для обработки и управления большими объемами данных, обладая функциями для поддержания целостности и безопасности данных.",`Преимущества Microsoft SQL Server включают:

- Отличная масштабируемость и надежность, благодаря чему SQL Server может обслуживать как небольшие, так и крупные предприятия.
- Высокая производительность и быстрота создания решений, которые важны для бизнес-приложений с большим объемом транзакций.
- Сильные возможности в области безопасности и аудита, включая современные методы шифрования и защиты данных.
- Поддержка сложных аналитических и транзакционных обработок данных, что делает его идеальным для различных типов бизнес-задач.
- Наличие интегрированных служб, таких как службы анализа, отчетности, а интеграция с другими продуктами Microsoft упрощает работу с данными и отчетность.
- Удобный и распространенный язык запросов SQL для доступа и управления данными.
- Широкая поддержка и развитое сообщество, которое предлагает решения и лучшие практики.
- Совместимость с различными операционными системами, включая поддержку Windows и Linux.
- Различные инструменты для восстановления данных и аварийного восстановления для поддержки бизнес-непрерывности.
- Возможность использования как в облачной среде Azure, так и в он-премис решениях, что обеспечивает гибкость в выборе размещения баз данных.`,"Microsoft SQL Server — это комплексная система управления базами данных (СУБД), разработанная компанией Microsoft. Она обеспечивает хранение, обработку и управление реляционными данными и поддерживает широкий спектр транзакционных и аналитических операций. SQL Server является кросс-платформенным решением, поддерживающим как Windows, так и Linux операционные системы. СУБД включает в себя мощные инструменты для обеспечения безопасности данных, репликации, издательства отчетов и интегрированные сервисы для аналитики и хранения информации с применением крупных объемов данных (Big Data). Microsoft SQL Server широко используется в бизнес-среде благодаря своей надежности, безопасности, простоте управления и возможности интеграции с другими продуктами Microsoft, такими как Azure для облачных инфраструктур и Power BI для аналитики и визуализации данных. Система также поддерживает язык программирования Transact-SQL (T-SQL), расширение стандартного SQL, которое предоставляет дополнительные возможности для написания более мощных и гибких запросов и процедур.","There are too many users now. Please try again a bit later.",[`Привет! Я не программист, но у меня есть знания, которыми я могу с тобой поделиться. Для создания стилизованных радио-кнопок на HTML и CSS, а также изменения фона при выборе определенной радиокнопки, можно использовать следующий пример кода:

`,{type:"pre",text:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Custom Radio Buttons</title>
<style>
  .radio-group {
    display: flex;
  }

  .radio-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
  }

  .radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  .radio-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .radio-container input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .radio-container input:checked ~ .checkmark:after {
    display: block;
  }

  .radio-container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: white;
  }

  body {
    font-family: Arial, sans-serif;
  }
</style>
</head>
<body>

<div>Выбери цвет фона:</div>
<div class="radio-group">
  <label class="radio-container">Красный
    <input type="radio" checked="checked" name="radio" onchange="document.body.style.backgroundColor='red'">
    <span class="checkmark"></span>
  </label>
  <label class="radio-container">Зелёный
    <input type="radio" name="radio" onchange="document.body.style.backgroundColor='green'">
    <span class="checkmark"></span>
  </label>
  <label class="radio-container">Синий
    <input type="radio" name="radio" onchange="document.body.style.backgroundColor='blue'">
    <span class="checkmark"></span>
  </label>
</div>

</body>
</html>
`,language:"html"},`

В этом примере используются радиокнопки, для которых при изменении состояния (`,{type:"code",text:"onchange"},") с помощью JavaScript изменяется цвет фона документа. Каждая радиокнопка вызывает изменение цвета на красный, зеленый или синий соответственно. Это простой способ динамически изменять стили без использования дополнительных библиотек или фреймворков."],[`Привет! Меня зовут Bay. Я, конечно, не профессиональный программист, но могу помочь с HTML и CSS! Вот пример кода для стилизованных radio button, при выборе которых будет изменяться фон страницы:

HTML:
`,{type:"pre",text:`<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<form id="radio-form">
  <label class="custom-radio">
    <input type="radio" name="background-color" value="blue" onchange="changeBackground(this.value)">
    Blue
  </label>

  <label class="custom-radio">
    <input type="radio" name="background-color" value="red" onchange="changeBackground(this.value)">
    Red
  </label>

  <label class="custom-radio">
    <input type="radio" name="background-color" value="green" onchange="changeBackground(this.value)">
    Green
  </label>
</form>

<script>
function changeBackground(color) {
  document.body.style.backgroundColor = color;
}
<\/script>

</body>
</html>
`,language:"html"},`

CSS (style.css):
`,{type:"pre",text:`body {
  padding: 20px;
}

.custom-radio input[type="radio"] {
  display: none;
}

.custom-radio {
  border: 2px solid #ddd;
  display: inline-block;
  padding: 10px 20px;
  font-family: Arial, sans-serif;
  cursor: pointer;
  margin-right: 10px;
}

.custom-radio input[type="radio"]:checked + span {
  background-color: #ddd;
}

/* Just for visibility */
.custom-radio span {
  padding-left: 5px;
}
`,language:"css"},`

В этом примере приведён базовый код для создания стилизованных радиокнопок с использованием HTML и CSS. JavaScript используется для изменения цвета фона тела страницы при выборе радиокнопок. Хорошо бы ещё добавить стили для видимой части radio button, но это уже вопрос дизайна.`],[`Связи в реляционных базах данных — это способы организации и структурирования данных в таблицах, где каждая таблица представляет собой тип сущности в базе данных. Связи определяются как отношения между этими типами сущностей. Основные виды связей:

1. `,{type:"bold",text:"Один к одному ("},{type:"code",text:"One-to-One"},{type:"bold",text:"):"},` В этом виде связи каждая запись в первой таблице соответствует не более чем одной записи во второй таблице, и наоборот.
2. `,{type:"bold",text:"Один ко многим ("},{type:"code",text:"One-to-Many"},{type:"bold",text:"):"},` Запись в одной таблице может иметь связи с множеством записей в другой таблице, но каждая запись во второй таблице связана только с одной записью из первой.
3. `,{type:"bold",text:"Многие ко многим ("},{type:"code",text:"Many-to-Many"},{type:"bold",text:"):"},` Записи в одной таблице могут иметь связи с множеством записей в другой таблице, и наоборот.

Для реализации различных связей используются ключи:
- `,{type:"bold",text:"Первичный ключ ("},{type:"code",text:"Primary Key"},{type:"bold",text:"):"},` Уникальный идентификатор записи в таблице.
- `,{type:"bold",text:"Внешний ключ ("},{type:"code",text:"Foreign Key"},{type:"bold",text:"):"},` Столбец в одной таблице, который ссылается на первичный ключ другой таблицы. Внешние ключи позволяют поддерживать целостность данных через связи.

Книга, которая подробно освещает эти и другие темы, связанные с реляционными базами данных, и выпущенная после 2019 года, — это "Mastering Relational Databases: from Models to Querying" (2019-2020). Эта книга является полезным ресурсом для глубокого понимания теории реляционных баз данных, моделей данных и методов запросов данных.`],`### Анализ тематической области конференций: определение взаимодействий между конференциями, местоположениями, городами, пользователями и отелями

1. Обзор:
Анализ направлен на исследование взаимоотношений и взаимодействий между различными объектами, связанными с конференциями, включая сами конференции, их местоположение, города-хозяева, пользователей и отели. Мы опишем общие функциональные возможности информационной системы (ИС), разработанной для управления данными, связанными с конференциями, и облегчения коммуникации и координации между этими объектами.

2. Конференции:
- Представление: Содержат основную информацию, такую как название, дата, местоположение и охватываемые темы.
- Функциональность: Могут быть зарегистрированы, обновлены, удалены и найдены в ИС.

3. Местоположения:
- Представление: Включают в себя название места проведения, адрес, вместимость и другую соответствующую информацию.
- Функциональность: Могут быть добавлены, обновлены, удалены и назначены конкретным конференциям.

4. Города:
- Представление: Включают имя города, страну, население и другую демографическую информацию.
- Функциональность: Могут быть найдены, и к ним можно получить доступ для определения, какие конференции пройдут в этих городах.

5. Пользователи:
- Представление: Составляют профили пользователей, содержащие основную информацию, сферу экспертизы и данные регистрации.
- Функциональность: Пользователи могут создавать и управлять своими профилями, регистрироваться на конференции, получать обновления и взаимодействовать с другими пользователями через систему.

6. Отели:
- Представление: Содержат базовую информацию об отеле, его местоположении, номерах, ценах и наличии.
- Функциональность: Могут быть найдены, забронированы, и к их списку можно получить доступ непосредственно со страницы конференции для удобства бронирования.

7. Взаимодействия и внутрисистемные функции:

- Регистрация пользователей: Пользователи могут создать свои профили с их контактными данными, областями интересов и другой соответствующей информацией. Регистрация позволяет им получать доступ к функциям системы и получать обновления о конференциях и доступных отелях.

- Планирование и управление конференциями: Конференции могут быть зарегистрированы, и их детали могут быть добавлены, обновлены или удалены. Пользователи могут искать конференции на основе различных критериев, таких как местоположение, дата или темы. Конференциям можно назначить место проведения и доступные отели.

- Бронирование отеля: Пользователи могут искать доступные отели, связанные с местом проведения конференции, и делать бронирование номеров непосредственно со страницы конференции. ИС позволяет пользователям управлять своими бронированиями и предоставляет такие функции, как изменение типа номера или отмена бронирования.

- Обновления и коммуникация в реальном времени: Системные уведомления держат пользователей в курсе обновлений конференции, наличии номеров и ходе регистрации. Пользователи могут общаться с другими участниками через систему сообщений или форумы обсуждений.

- Отчетность и аналитика: ИС генерирует отчеты о посещаемости конференций, занятости гостиниц и демографическу информацию о пользователях. Эти данные помогают организаторам понять прошлые тенденции и предвидеть будущий спрос.

Через этот детализированный анализ области предмета и взаимодействий между этими объектами, мы наметили функциональную информационную систему, предназначенную для управления конференциями, облегчения коммуникации между пользователями и оптимизации общего опыта конференции.`,[`Привет! Ниже представлены примеры пяти SQL-представлений для твоей базы данных, которые позволят извлекать различные типы информации. 

`,{type:"pre",text:`-- Представление для отображения информации о городах и количестве отелей в каждом городе
CREATE VIEW CityHotelCount AS
SELECT City.city_id, City.country, City.region, COUNT(Hotel.hotel_id) AS HotelCount
FROM City
JOIN Hotel ON City.city_id = Hotel.city
GROUP BY City.city_id, City.country, City.region;

-- Представление для отображения списка конференций и их местоположений
CREATE VIEW ConferenceLocations AS
SELECT Conferention.conferention_id, Conferention.[name], Conferention.[date], Place.addsress AS VenueAddress, City.country, City.region
FROM Conferention
JOIN Place ON Conferention.place = Place.place_id
JOIN City ON Place.city = City.city_id;

-- Представление для отображения докладчиков и на каких конференциях они выступают
CREATE VIEW SpeakerConferences AS
SELECT Speaker.speaker_id, Speaker.[name], Speaker.surname, Speaker.patronymic, Conferention.[name] AS ConferenceName, Conferention.[date] AS ConferenceDate
FROM Speaker
JOIN Conferantion_speakers ON Speaker.speaker_id = Conferantion_speakers.speaker_id
JOIN Conferention ON Conferantion_speakers.conferention_id = Conferention.conferention_id;

-- Представление для отображения списка участников конференций и где они остановились
CREATE VIEW ConferenceViewersHotels AS
SELECT Viewer.viewer_id, Viewer.[name], Viewer.surname, Viewer.patronymic, Hotel.[address] AS HotelAddress, Conferention.[name] AS ConferenceName
FROM Viewer
JOIN Hotel ON Viewer.hotel = Hotel.hotel_id
JOIN Conferantion_viewers ON Viewer.viewer_id = Conferantion_viewers.viewer_id
JOIN Conferention ON Conferantion_viewers.conferention_id = Conferention.conferention_id;

-- Представление для отображения информации о городах и предстоящих конференциях
CREATE VIEW UpcomingConferencesByCity AS
SELECT City.city_id, City.country, City.region, Conferention.[name], Conferention.[date]
FROM City
JOIN Place ON City.city_id = Place.city
JOIN Conferention ON Place.place_id = Conferention.place
WHERE Conferention.[date] >= GETDATE()
ORDER BY Conferention.[date];
`,language:"sql"},`

Данные представления могут пригодиться для различных задач: от отчетов о городах и количестве отелей в каждом из них до списков докладчиков и участников конференций. Прежде чем запускать эти представления на своем сервере, необходимо проверить синтаксис и структуру вашей конкретной базы данных, так как могут возникнуть различия, требующие корректировки.`],[`Конечно, давай попробуем упростить представления. Вот пять простых SQL-представлений для твоей базы данных:

`,{type:"pre",text:`-- Представление для отображения информации о городах
CREATE VIEW View_CityDetails AS
SELECT city_id, country, region
FROM City;

-- Представление для отображения информации о местах проведения конференций
CREATE VIEW View_PlaceDetails AS
SELECT place_id, addsress, city
FROM Place;

-- Представление для отображения информации о конференциях
CREATE VIEW View_ConferentionDetails AS
SELECT conferention_id, [date], [name], place
FROM Conferention;

-- Представление для отображения информации об отелях
CREATE VIEW View_HotelDetails AS
SELECT hotel_id, [address], stars, city
FROM Hotel;

-- Представление для отображения информации об участниках конференции
CREATE VIEW View_ViewerDetails AS
SELECT viewer_id, hotel, [name], surname, patronymic
FROM Viewer;
`,language:"sql"},`

Эти представления предназначены для отображения базовой информации из соответствующих таблиц, что поможет облегчить доступ и визуализацию данных в твоей базе данных. Обрати внимание, что в этих представлениях не используются сложные JOIN'ы или группировки, что делает их проще для понимания и использования.`],["Понял тебя, давай создадим представления с одним ",{type:"code",text:"JOIN"},` в каждом запросе. Вот примеры:

`,{type:"pre",text:`-- Представление для отображения информации о конференциях и местах их проведения
CREATE VIEW View_ConferenceWithPlace AS
SELECT Conferention.conferention_id, Conferention.[name], Conferention.[date], Place.addsress AS VenueAddress
FROM Conferention
JOIN Place ON Conferention.place = Place.place_id;

-- Представление для отображения информации о докладчиках и их отелях
CREATE VIEW View_SpeakerWithHotel AS
SELECT Speaker.speaker_id, Speaker.[name], Speaker.surname, Speaker.patronymic, Hotel.[address] AS HotelAddress
FROM Speaker
JOIN Hotel ON Speaker.hotel = Hotel.hotel_id;

-- Представление для отображения информации об отелях и соответствующих городах
CREATE VIEW View_HotelWithCity AS
SELECT Hotel.hotel_id, Hotel.[address], Hotel.stars, City.country, City.region
FROM Hotel
JOIN City ON Hotel.city = City.city_id;

-- Представление для отображения информации об участниках конференций с ссылкой на отель
CREATE VIEW View_ViewerWithHotel AS
SELECT Viewer.viewer_id, Viewer.[name], Viewer.surname, Viewer.patronymic, Hotel.[address] AS HotelAddress
FROM Viewer
JOIN Hotel ON Viewer.hotel = Hotel.hotel_id;

-- Представление для отображения информации о местах проведения и их расположении в городах
CREATE VIEW View_PlaceWithCity AS
SELECT Place.place_id, Place.addsress, City.country, City.region
FROM Place
JOIN City ON Place.city = City.city_id;
`,language:"sql"},`

Эти представления обеспечат связанную информацию из двух таблиц, которая полезна для понимания контекста данных. Они дают более полную картину, чем простое отображение данных из одной таблицы, и более просты в понимании, чем запросы с множественными `,{type:"code",text:"JOIN"},"'ами."],[`Давай создадим пять триггеров, каждый из которых будет выполнять определенное действие в ответ на изменения в базе данных:

`,{type:"pre",text:`-- Триггер для проверки, что новый отель не добавлен в несуществующий город
CREATE TRIGGER CheckHotelCityExists
ON Hotel
AFTER INSERT 
AS
BEGIN
    IF NOT EXISTS(SELECT * FROM City WHERE city_id IN (SELECT city FROM inserted))
    BEGIN
        RAISERROR ('Добавляемый отель находится в несуществующем городе', 16, 1);
        ROLLBACK;
    END
END;

-- Триггер для проверки, что удаляемая конференция не имеет привязанных к ней докладчиков или участников
CREATE TRIGGER CheckConferenceEmptyBeforeDelete
ON Conferention
FOR DELETE
AS
BEGIN
    IF EXISTS(SELECT * FROM Conferantion_speakers WHERE conferention_id IN (SELECT conferention_id FROM deleted))
    OR EXISTS(SELECT * FROM Conferantion_viewers WHERE conferention_id IN (SELECT conferention_id FROM deleted))
    BEGIN
        RAISERROR ('Невозможно удалить конференцию, к которой привязаны докладчики или участники', 16, 1);
        ROLLBACK;
    END
END;

-- Триггер для обновления информации о свободном между городами при добавлении нового города
CREATE TRIGGER UpdateCitiesConnectionOnNewCity
ON City
AFTER INSERT
AS
BEGIN
    -- Здесь может быть код для обновления таблицы связей между городами (не показана в структуре БД)
    PRINT 'Обновляется информация о связях между городами.';
END;

-- Триггер для автоматического добавления новых пользователей к участникам предстоящих конференций
CREATE TRIGGER AutoRegisterViewerToUpcomingConferences
ON Viewer
AFTER INSERT
AS
BEGIN
   INSERT INTO Conferantion_viewers(viewer_id, conferention_id)
   SELECT inserted.viewer_id, conferention_id FROM Conferention 
   CROSS JOIN inserted
   WHERE Conferention.[date] > GETDATE();
END;

-- Триггер для обновления информации о рейтинге отелей при изменении информации об отеле
CREATE TRIGGER UpdateHotelRatingInfo
ON Hotel
AFTER UPDATE
AS
BEGIN
    -- Здесь может быть код для обновления информации о рейтинге отелей (не показана в структуре БД)
    PRINT 'Обновляется информация о рейтинге отелей.';
END;
`,language:"sql"},`

Каждый из этих триггеров предназначен для разных целей, например, для сохранения целостности данных при добавлении или удалении записей, а также для автоматизации процессов регистрации и обновления. Перед реализацией триггеров на продуктивной БД, их надо тщательно протестировать.`],[`Конечно, вот исправленные версии триггеров без использования команд транзакций или генерации ошибок:

`,{type:"pre",text:`-- Триггер для проверки, что добавляемые отели находятся в существующих городах
CREATE TRIGGER TR_HotelInsert
ON Hotel
INSTEAD OF INSERT
AS
BEGIN
    INSERT INTO Hotel(hotel_id, [address], stars, city)
    SELECT i.hotel_id, i.[address], i.stars, i.city
    FROM inserted i
    WHERE EXISTS (SELECT 1 FROM City WHERE city_id = i.city);
END;

-- Триггер для проверки, что конференция без докладчиков и участников может быть удалена
CREATE TRIGGER TR_ConferentionDelete
ON Conferention
INSTEAD OF DELETE
AS
BEGIN
    DELETE FROM Conferention
    WHERE conferention_id IN (SELECT d.conferention_id FROM deleted d)
    AND NOT EXISTS (SELECT 1 FROM Conferantion_speakers WHERE conferention_id = d.conferention_id)
    AND NOT EXISTS (SELECT 1 FROM Conferantion_viewers WHERE conferention_id = d.conferention_id);
END;

-- Триггер для добавления информации о новом городе в сводную таблицу (предполагается наличие такой таблицы)
CREATE TRIGGER TR_CityInsert
ON City
AFTER INSERT
AS
BEGIN
    -- Вставка информации о новом городе в дополнительные таблицы если нужно
    -- В данном примере никакого действия не выполняется
END;

-- Триггер для автоматической регистрации новых пользователей на предстоящие конференции
CREATE TRIGGER TR_ViewerInsert
ON Viewer
AFTER INSERT
AS
BEGIN
    INSERT INTO Conferantion_viewers(viewer_id, conferention_id)
    SELECT i.viewer_id, c.conferention_id
    FROM inserted i, Conferention c
    WHERE c.[date] > GETDATE();
END;

-- Триггер для обновления информации о рейтинге отеля (предполагается наличие связанной таблицы рейтинга отелей)
CREATE TRIGGER TR_HotelUpdate
ON Hotel
AFTER UPDATE
AS
BEGIN
    -- Обновление информации о рейтинге отеля
    -- Требуется таблица и логика для рейтингов отелей, которая не представлена в текущей структуре
    PRINT 'Необходимо обновить рейтинг отеля'; -- Здесь должен быть реальный код обновления
END;
`,language:"sql"},`

Эти триггеры были изменены так, чтобы они не генерировали ошибки и не использовали транзакции. Все действия в триггерах, которые не соответствуют условию, просто будут проигнорированы. В случае `,{type:"code",text:"TR_HotelInsert"}," и ",{type:"code",text:"TR_ConferentionDelete"},", использованы конструкции ",{type:"code",text:"INSTEAD OF INSERT"}," и ",{type:"code",text:"INSTEAD OF DELETE"},", чтобы предотвратить операции с возможно некорректными данными."],[`Извини, если предыдущие версии триггеров не соответствовали твоим ожиданиям. Давай попробуем создать пять новых триггеров, которые будут более уместными в контексте предложенной БД:

1. Триггер для логирования всех новых отелей, добавляемых в город.
`,{type:"pre",text:`CREATE TRIGGER TR_LogNewHotel
ON Hotel
AFTER INSERT
AS
BEGIN
    INSERT INTO HotelLog(hotel_id, log_date, operation_type)
    SELECT i.hotel_id, GETDATE(), 'INSERT'
    FROM inserted i;
END;
`,language:"sql"},`

2. Триггер для автоматического удаления всех записей о докладчиках, если конференция была удалена.
`,{type:"pre",text:`CREATE TRIGGER TR_DeleteSpeakersWhenConferenceDeleted
ON Conferention
AFTER DELETE
AS
BEGIN
    DELETE FROM Speaker
    WHERE speaker_id IN (SELECT speaker_id FROM Conferantion_speakers WHERE conferention_id IN (SELECT conferention_id FROM deleted));
END;
`,language:"sql"},`

3. Триггер для автоматического обновления региона, если город был перемещен в другой регион.
`,{type:"pre",text:`CREATE TRIGGER TR_UpdatePlaceRegion
ON City
AFTER UPDATE
AS
BEGIN
    UPDATE Place
    SET region = (SELECT region FROM inserted WHERE city_id = Place.city)
    WHERE EXISTS (SELECT 1 FROM inserted WHERE inserted.city_id = Place.city);
END;
`,language:"sql"},`

4. Триггер для обновления статуса докладчика, когда тот регистрируется в отеле.
`,{type:"pre",text:`CREATE TRIGGER TR_UpdateSpeakerStatus
ON Hotel
AFTER INSERT
AS
BEGIN
    UPDATE Speaker
    SET status = 'Registered' -- Предполагаем, что в таблице Speaker есть поле status
    WHERE hotel IN (SELECT hotel_id FROM inserted);
END;
`,language:"sql"},`

5. Триггер для записи информации о просмотре деталей отеля гостем.
`,{type:"pre",text:`CREATE TRIGGER TR_LogViewerHotelView
ON Viewer
AFTER UPDATE
AS
BEGIN
    IF UPDATE(hotel)
    BEGIN
        INSERT INTO ViewerHotelLog(viewer_id, hotel_id, view_date)
        SELECT i.viewer_id, i.hotel, GETDATE()
        FROM inserted i;
    END
END;
`,language:"sql"},`

Для выполнения данных триггеров тебе потребуется создать соответствующие лог-таблицы (например, `,{type:"code",text:"HotelLog"}," и ",{type:"code",text:"ViewerHotelLog"},") для их работы. Также предполагается, что в таблицах ",{type:"code",text:"Speaker"}," и ",{type:"code",text:"Place"}," присутствуют поля ",{type:"code",text:"status"}," и ",{type:"code",text:"region"}," соответственно, в которые будет обновляться информация. Если в твоей текущей структуре базы данных нет таких полей, ты должен соответствующим образом модифицировать триггеры или структуру базы данных. Эти примеры могут быть модифицированы, чтобы соответствовать конкретным требованиям твоей прикладной логики и структуре базы данных."],[`Чтобы создать триггер, который автоматически добавляет три места при создании нового города, можно использовать следующий SQL-код:

`,{type:"pre",text:`CREATE TRIGGER TR_AutoCreatePlacesForNewCity
ON City
AFTER INSERT
AS
BEGIN
    DECLARE @cityId INT, @i INT;
    SELECT @cityId = city_id FROM inserted;
    SET @i = 1;

    WHILE (@i <= 3)
    BEGIN
        INSERT INTO Place(address, city)
        VALUES('Место ' + CAST(@i AS NVARCHAR(50)), @cityId);
        SET @i = @i + 1;
    END
END;
`,language:"sql"},`

В этом триггере:

1. Используется `,{type:"code",text:"AFTER INSERT"},", так что действие будет выполняться после добавления записи в таблицу ",{type:"code",text:"City"},`.
2. Объявляются переменные для идентификатора нового города (`,{type:"code",text:"@cityId"},") и счетчика (",{type:"code",text:"@i"},`).
3. Извлекается идентификатор вставленного города из специальной таблицы `,{type:"code",text:"inserted"},`, которая содержит данные о вновь вставленных строках.
4. В цикле `,{type:"code",text:"WHILE"}," выполняется добавление трех новых мест в таблицу ",{type:"code",text:"Place"},`, с простым названием "Место 1", "Место 2" и "Место 3".

Такой триггер будет вызван каждый раз, когда будет создана новая запись в таблице `,{type:"code",text:"City"},", и автоматически создаст три места для каждого нового города. Не забудь, что значения для столбца ",{type:"code",text:"address"}," являются примерными, и ты можешь заменить их на более подходящие значения для твоего приложения. Также обрати внимание, что для реализации этого триггера столбец ",{type:"code",text:"address"}," в таблице ",{type:"code",text:"Place"}," не должен быть обязательным к заполнению или должен иметь значение по умолчанию, чтобы триггер работал корректно."],[`Для создания триггера, который автоматически добавляет три конференции при создании нового места, используй следующий SQL-код:

`,{type:"pre",text:`CREATE TRIGGER TR_AutoCreateConferencesForNewPlace
ON Place
AFTER INSERT
AS
BEGIN
    DECLARE @placeId INT, @i INT, @conferenceName NVARCHAR(50), @conferenceDate DATETIME;
    SELECT @placeId = place_id FROM inserted;
    SET @i = 1;

    WHILE (@i <= 3)
    BEGIN
        SET @conferenceName = 'Конференция ' + CAST(@i AS NVARCHAR(50));
        -- Пример даты для конференции. В реальных условиях следует использовать более сложную логику для определения даты
        SET @conferenceDate = DATEADD(DAY, @i * 30, GETDATE()); 
        INSERT INTO Conferention([date], [name], place)
        VALUES(@conferenceDate, @conferenceName, @placeId);
        SET @i = @i + 1;
    END
END;
`,language:"sql"},`

В этом триггере:

1. Используется `,{type:"code",text:"AFTER INSERT"},", таким образом действие будет выполняться после добавления записи в таблицу ",{type:"code",text:"Place"},`.
2. Объявляются переменные для идентификатора нового места (`,{type:"code",text:"@placeId"},"), счетчика (",{type:"code",text:"@i"},"), имени конференции (",{type:"code",text:"@conferenceName"},") и даты конференции (",{type:"code",text:"@conferenceDate"},`).
3. Извлекается идентификатор вставленного места из специальной таблицы `,{type:"code",text:"inserted"},`, содержащей данные о вновь добавленных строках.
4. В цикле `,{type:"code",text:"WHILE"}," происходит добавление трех новых конференций в таблицу ",{type:"code",text:"Conferention"},`, с именами "Конференция 1", "Конференция 2", "Конференция 3" и с датами на 30, 60 и 90 дней в будущем соответственно.

Этот триггер будет вызван каждый раз, когда создается новая запись в таблице `,{type:"code",text:"Place"},", и автоматически создаст три конференции для каждого нового места. Значения имени и даты для конференций являются примерными. Ты можешь настроить их согласно бизнес-требованиям и логике твоей системы."],[`Конечно, давайте создадим триггер, который автоматически добавит докладчика для каждой новой конференции в базе данных. Этот триггер будет полезен для ситуаций, когда для каждой новой конференции необходимо назначить докладчика по умолчанию.

`,{type:"pre",text:`CREATE TRIGGER TR_AutoCreateSpeakerForNewConference
ON Conferention
AFTER INSERT
AS
BEGIN
    DECLARE @conferentionId INT, @speakerName NVARCHAR(50), @speakerSurname NVARCHAR(50), @speakerPatronymic NVARCHAR(50), @login NVARCHAR(50), @password NVARCHAR(50), @theme NVARCHAR(50);
    SELECT @conferentionId = conferention_id FROM inserted;
    -- Генерация имени, фамилии, отчества, логина, пароля и темы для докладчика. В реальных условиях эти данные должны быть получены другим способом.
    SET @speakerName = 'ИмяДокладчика';
    SET @speakerSurname = 'ФамилияДокладчика';
    SET @speakerPatronymic = 'ОтчествоДокладчика';
    SET @login = LOWER('speaker' + REPLACE(STR(@conferentionId, 5), ' ', '0'));
    SET @password = HASHBYTES('SHA2_256', NEWID()); -- Генерация надежного пароля
    SET @theme = 'Основная тема конференции №' + CAST(@conferentionId AS NVARCHAR(50));
    
    -- Вставка записи о новом докладчике
    INSERT INTO Speaker(theme, [name], surname, patronymic, [password], [login])
    VALUES(@theme, @speakerName, @speakerSurname, @speakerPatronymic, CONVERT(NVARCHAR(50), @password), @login);

    -- Получаем ID только что созданного докладчика
    DECLARE @newSpeakerId INT;
    SET @newSpeakerId = SCOPE_IDENTITY();

    -- Связываем созданного докладчика с конференцией
    INSERT INTO Conferantion_speakers(speaker_id, conferention_id)
    VALUES(@newSpeakerId, @conferentionId);
END;
`,language:"sql"},`

В данном триггере:

1. Используется `,{type:"code",text:"AFTER INSERT"},", так что действие будет выполнено после вставки новой записи в таблицу ",{type:"code",text:"Conferention"},`.
2. Объявляются переменные для идентификатора конференции, имени, фамилии, отчества, логина, пароля и темы докладчика.
3. Извлекается идентификатор вставленной конференции из специальной таблицы `,{type:"code",text:"inserted"},`.
4. Задаются значения для имени, фамилии, отчества, логина и темы докладчика. В реальном приложении эта информация должна быть определена более тщательно.
5. Пароль генерируется с использованием функции `,{type:"code",text:"HASHBYTES"}," и функции ",{type:"code",text:"NEWID"},` для создания хеша случайного значения, что обеспечивает уникальность и безопасность.
6. Вставляется новая запись в таблицу `,{type:"code",text:"Speaker"},`.
7. Получается идентификатор нового докладчика через `,{type:"code",text:"SCOPE_IDENTITY()"},`.
8. Создается связь между новым докладчиком и конференцией, добавляя запись в таблицу `,{type:"code",text:"Conferantion_speakers"},`.

Обратите внимание, что все примеры имен, логинов и тем в этом триггере являются образцами и должны быть заменены на реальные данные.`],[`Чтобы создать триггер, который автоматически записывает спикера на ближайшую по дате конференцию, наш SQL-код будет выглядеть следующим образом:

`,{type:"pre",text:`CREATE TRIGGER TR_AutoRegisterSpeakerToNearestConference
ON Speaker
AFTER INSERT
AS
BEGIN
    DECLARE @speakerId INT, @nearestConferenceId INT;

    SELECT @speakerId = speaker_id FROM inserted;

    -- Находим ближайшую по дате конференцию, которая еще не началась
    SELECT TOP 1 @nearestConferenceId = conferention_id
    FROM Conferention
    WHERE [date] > GETDATE()
    ORDER BY [date] ASC;

    IF @nearestConferenceId IS NOT NULL
    BEGIN
        -- Записываем спикера на найденную конференцию
        INSERT INTO Conferantion_speakers(speaker_id, conferention_id)
        VALUES(@speakerId, @nearestConferenceId);
    END
END;
`,language:"sql"},`

В данном примере:

1. Триггер применяется к таблице `,{type:"code",text:"Speaker"},` и будет вызван после вставки новой записи.
2. Для каждого спикера, который только что был добавлен (содержащегося в специальной таблице `,{type:"code",text:"inserted"},`), этот триггер находит следующую ближайшую конференцию, которая ещё не началась, сортирует их по дате и выбирает самую ближайшую.
3. Если ближайшая конференция найдена (то есть `,{type:"code",text:"@nearestConferenceId"}," не ",{type:"code",text:"NULL"},"), триггер записывает спикера на эту конференцию, вставляя соответствующую запись в таблицу ",{type:"code",text:"Conferantion_speakers"},`.

Ты должен удостовериться, что в твоей текущей структуре базы данных есть все необходимые для данного триггера поля, и, если нет, соответствующим образом адаптировать таблицы или триггер под существующую схему.`],[`Чтобы создать триггер, который автоматически регистрирует зрителя на ближайшую по дате конференцию, вот возможный SQL-скрипт:

`,{type:"pre",text:`CREATE TRIGGER TR_AutoRegisterViewerToNearestConference
ON Viewer
AFTER INSERT
AS
BEGIN
    DECLARE @viewerId INT, @nearestConferenceId INT;

    -- Получаем id только что добавленного зрителя
    SELECT @viewerId = viewer_id FROM inserted;

    -- Находим id ближайшей по дате конференции, которая еще не началась
    SET @nearestConferenceId = (SELECT TOP 1 conferention_id
                                FROM Conferention
                                WHERE [date] > GETDATE()
                                ORDER BY [date] ASC);

    -- Если найдена такая конференция, регистрируем на нее зрителя
    IF @nearestConferenceId IS NOT NULL
    BEGIN
        INSERT INTO ViewerConferentionRegistration(viewer_id, conferention_id, registration_date)
        VALUES(@viewerId, @nearestConferenceId, GETDATE());
    END
END;
`,language:"sql"},`

Описание триггера:

- Триггер активируется после вставки записей в таблицу `,{type:"code",text:"Viewer"},`.
- Аналогично триггеру для спикеров, он ищет ближайшую по времени конференцию, которая ещё не началась.
- Когда ближайшая конференция найдена, триггер регистрирует зрителя на эту конференцию, добавляя запись в таблицу связи `,{type:"code",text:"ViewerConferentionRegistration"},`.

Необходимо убедиться, что в вашей базе данных существует таблица `,{type:"code",text:"ViewerConferentionRegistration"}," (или аналогичная по назначению), предназначенная для учёта регистраций зрителей на конференции. Если такой таблицы нет, потребуется создать её, убедиться, что поля ",{type:"code",text:"viewer_id"},", ",{type:"code",text:"conferention_id"},", и ",{type:"code",text:"registration_date"}," соответствуют полям в вашей схеме БД."],[`Чтобы создать требуемый триггер, который при регистрации спикера на конференцию автоматически бронирует ему отель в том же городе, где будет проходить конференция, вот пример SQL-кода:

`,{type:"pre",text:`CREATE TRIGGER TR_AutoBookHotelForSpeaker
ON Conferantion_speakers
AFTER INSERT
AS
BEGIN
    DECLARE @speakerId INT, @conferentionId INT, @cityId INT, @hotelId INT;

    -- Получаем ID спикера и конференции из только что вставленного значения
    SELECT @speakerId = speaker_id, @conferentionId = conferention_id FROM inserted;

    -- Определяем город, в котором проходит конференция
    SELECT @cityId = city_id
    FROM Conferention
    WHERE conferention_id = @conferentionId;

    -- Находим отель в этом городе
    SELECT TOP 1 @hotelId = hotel_id
    FROM Hotel
    WHERE city_id = @cityId
    ORDER BY NEWID(); -- Это обеспечивает случайный выбор отеля, если есть несколько вариантов

    -- Проверяем, нашли ли мы отель
    IF @hotelId IS NOT NULL
    BEGIN
        -- Делаем запись о бронировании отеля для спикера
        INSERT INTO SpeakerHotelBooking(speaker_id, hotel_id, conferention_id, booking_date)
        VALUES(@speakerId, @hotelId, @conferentionId, GETDATE());
    END
END;
`,language:"sql"},`

Описание триггера:

- Триггер запускается после вставки записи в таблицу регистрации спикеров `,{type:"code",text:"Conferantion_speakers"},`.
- Извлекается ID спикера и ID конференции из вставленных данных.
- Определяется ID города, в котором проходит конференция, путем запроса из таблицы `,{type:"code",text:"Conferention"},`.
- Находится отель в полученном городе, выбор отеля происходит случайным образом (для этого используется `,{type:"code",text:"ORDER BY NEWID()"},`), что даёт каждому отелю равные шансы быть выбранным, если в городе есть несколько вариантов размещения.
- Если был найден подходящий отель, производится бронирование путем вставки соответствующей записи в таблицу `,{type:"code",text:"SpeakerHotelBooking"},`.

Перед использованием скрипта удостоверься, что таблицы `,{type:"code",text:"Hotel"}," и ",{type:"code",text:"SpeakerHotelBooking"}," присутствуют в базе данных и содержат необходимые поля. Если они отсутствуют или имеют другую структуру, необходимо выполнить соответствующие изменения в скрипте или структуре базы данных."],[`Для демонстрации я приведу примеры пяти процедур для условной базы данных, которая включает таблицы для управления конференциями, спикерами, зрителями и отелями. В этих процедурах будут выполняться различные задачи, связанные с управлением данной тематикой.

1. Процедура для регистрации нового спикера:

`,{type:"pre",text:`CREATE PROCEDURE RegisterNewSpeaker 
    @Name NVARCHAR(100),
    @Surname NVARCHAR(100),
    @Patronymic NVARCHAR(100),
    @FieldOfExpertise NVARCHAR(100)
AS
BEGIN
    INSERT INTO Speaker (Name, Surname, Patronymic, FieldOfExpertise)
    VALUES (@Name, @Surname, @Patronymic, @FieldOfExpertise);
END;
`,language:"sql"},`

2. Процедура для добавления новой конференции:

`,{type:"pre",text:`CREATE PROCEDURE AddNewConference 
    @Date DATETIME,
    @Name NVARCHAR(100),
    @CityID INT
AS
BEGIN
    INSERT INTO Conferention ([Date], [Name], CityID)
    VALUES (@Date, @Name, @CityID);
END;
`,language:"sql"},`

3. Процедура для регистрации зрителя на конференцию:

`,{type:"pre",text:`CREATE PROCEDURE RegisterViewerToConference
    @ViewerID INT,
    @ConferenceID INT
AS
BEGIN
    INSERT INTO ViewerConferentionRegistration (ViewerID, ConferenceID, RegistrationDate)
    VALUES (@ViewerID, @ConferenceID, GETDATE());
END;
`,language:"sql"},`

4. Процедура для записи спикера на конференцию:

`,{type:"pre",text:`CREATE PROCEDURE AssignSpeakerToConference
    @SpeakerID INT,
    @ConferenceID INT
AS
BEGIN
    INSERT INTO Conferantion_speakers (SpeakerID, ConferentionID)
    VALUES (@SpeakerID, @ConferenceID);
END;
`,language:"sql"},`

5. Процедура для получения списка конференций в заданном городе:

`,{type:"pre",text:`CREATE PROCEDURE GetConferencesInCity 
    @CityID INT
AS
BEGIN
    SELECT c.ConferentionID, c.Name, c.Date
    FROM Conferention c
    WHERE c.CityID = @CityID
    ORDER BY c.Date;
END;
`,language:"sql"},`

Как работать с этими процедурами:

Когда ты хочешь использовать одну из процедур, ты вызываешь её с необходимыми параметрами. Например, чтобы зарегистрировать нового спикера, ты делаешь следующее:

`,{type:"pre",text:`EXEC RegisterNewSpeaker 'Иван', 'Иванов', 'Иванович', 'Искусственный интеллект';
`,language:"sql"},`

Для использования этих процедур у тебя уже должна быть создана схема базы данных с таблицами Speaker, Conferention, ViewerConferentionRegistration, Conferantion_speakers и возможно другими, если они необходимы по логике процедур. Удостоверься, что используемые поля и типы данных совпадают с теми, что определены в твоей схеме БД.`],[`Исходя из предоставленной структуры базы данных, ниже приведено пять примеров хранимых процедур, которые могут быть выполнены в такой среде:

1. Процедура для обновления рейтинга отеля:

`,{type:"pre",text:`CREATE PROCEDURE UpdateHotelStars
    @HotelID INT,
    @NewStars INT
AS
BEGIN
    IF @NewStars BETWEEN 0 AND 5
    BEGIN
        UPDATE Hotel
        SET stars = @NewStars
        WHERE hotel_id = @HotelID;
    END
    ELSE
    BEGIN
        RAISERROR('Rating must be between 0 and 5.', 16, 1);
    END
END;
`,language:"sql"},`

2. Процедура для получения всей информации о конференциях в определенном городе:

`,{type:"pre",text:`CREATE PROCEDURE GetConferencesByCity
    @CityID INT
AS
BEGIN
    SELECT C.name, C.date, P.address
    FROM Conferention C
    INNER JOIN Place P ON C.place = P.place_id
    WHERE P.city = @CityID;
END;
`,language:"sql"},`

3. Процедура для добавления нового зрителя и его автоматической регистрации на ближайшую конференцию:

`,{type:"pre",text:`CREATE PROCEDURE AddViewerAndRegisterToNextConference
    @Name NVARCHAR(50),
    @Surname NVARCHAR(50),
    @Patronymic NVARCHAR(50),
    @Login NVARCHAR(50),
    @Password NVARCHAR(50),
    @HotelID INT
AS
BEGIN
    DECLARE @ViewerID INT, @NearestConferenceID INT;

    INSERT INTO Viewer ([name], surname, patronymic, [password], [login], hotel)
    VALUES (@Name, @Surname, @Patronymic, @Password, @Login, @HotelID);

    SET @ViewerID = SCOPE_IDENTITY();

    SELECT TOP 1 @NearestConferenceID = conferention_id
    FROM Conferention
    WHERE [date] > GETDATE()
    ORDER BY [date] ASC;
    
    IF @NearestConferenceID IS NOT NULL
    BEGIN
        INSERT INTO Conferantion_viewers (viewer_id, conferention_id)
        VALUES (@ViewerID, @NearestConferenceID);
    END
END;
`,language:"sql"},`

4. Процедура для регистрации спикера на конференцию с выбором отеля в городе проведения:

`,{type:"pre",text:`CREATE PROCEDURE RegisterSpeakerToConference
    @SpeakerID INT,
    @ConferenceID INT
AS
BEGIN
    DECLARE @CityID INT;

    SELECT @CityID = P.city
    FROM Conferention C
    INNER JOIN Place P ON C.place = P.place_id
    WHERE C.conferention_id = @ConferenceID;

    DECLARE @HotelID INT;

    SELECT TOP 1 @HotelID = hotel_id
    FROM Hotel
    WHERE city = @CityID
    ORDER BY NEWID(); -- случайный выбор отеля

    IF @HotelID IS NOT NULL
    BEGIN
        UPDATE Speaker
        SET hotel = @HotelID
        WHERE speaker_id = @SpeakerID;
        
        INSERT INTO Conferantion_speakers (speaker_id, conferention_id)
        VALUES (@SpeakerID, @ConferenceID);
    END
END;
`,language:"sql"},`

5. Процедура для поиска зрителей, зарегистрированных на конкретную конференцию:

`,{type:"pre",text:`CREATE PROCEDURE GetViewersForConference
    @ConferenceID INT
AS
BEGIN
    SELECT V.viewer_id, V.name, V.surname, V.patronymic
    FROM Viewer V
    INNER JOIN Conferantion_viewers CV ON V.viewer_id = CV.viewer_id
    WHERE CV.conferention_id = @ConferenceID;
END;
`,language:"sql"},`

Эти процедуры могут быть вызваны из любого SQL-интерфейса для выполнения специфических операций по управлению данными в базе данных. Обратите внимание, что перед их использованием возможно потребуется адаптация под конкретную схему и требования базы`],"There are too many users now. Please try again a bit later.",[`Конечно, вот ещё пять хранимых процедур для предоставленной схемы базы данных:

1. `,{type:"bold",text:"Процедура для списка конференций на заданную дату"},`:

`,{type:"pre",text:`CREATE PROCEDURE ListConferencesByDate
    @DesiredDate DATETIME
AS
BEGIN
    SELECT C.conferention_id, C.[name], C.[date], P.addsress
    FROM Conferention C
    JOIN Place P ON C.place = P.place_id
    WHERE CAST(C.[date] AS DATE) = CAST(@DesiredDate AS DATE);
END;
`,language:"sql"},`

2. `,{type:"bold",text:"Процедура для удаления зрителя из всех будущих конференций"},`:

`,{type:"pre",text:`CREATE PROCEDURE UnregisterViewerFromFutureConferences
    @ViewerID INT
AS
BEGIN
    DELETE FROM Conferantion_viewers
    WHERE viewer_id = @ViewerID
    AND conferention_id IN (SELECT conferention_id FROM Conferention WHERE [date] > GETDATE());
END;
`,language:"sql"},`

3. `,{type:"bold",text:"Процедура для обновления информации о местоположении конференции"},`:

`,{type:"pre",text:`CREATE PROCEDURE UpdateConferenceLocation
    @ConferenceID INT,
    @NewPlaceID INT
AS
BEGIN
    UPDATE Conferention
    SET place = @NewPlaceID
    WHERE conferention_id = @ConferenceID;
END;
`,language:"sql"},`

4. `,{type:"bold",text:"Процедура для назначения отеля спикера (обновление отеля для спикера)"},`:

`,{type:"pre",text:`CREATE PROCEDURE AssignHotelToSpeaker
    @SpeakerID INT,
    @HotelID INT
AS
BEGIN
    UPDATE Speaker
    SET hotel = @HotelID
    WHERE speaker_id = @SpeakerID;
END;
`,language:"sql"},`

5. `,{type:"bold",text:"Процедура для подсчета количества конференций в каждом городе"},`:

`,{type:"pre",text:`CREATE PROCEDURE CountConferencesByCity
AS
BEGIN
    SELECT CITY.city_id, CITY.country, CITY.region, COUNT(CON.conferention_id) AS NumberOfConferences
    FROM City CITY
    LEFT JOIN Place P ON CITY.city_id = P.city
    LEFT JOIN Conferention CON ON P.place_id = CON.place
    GROUP BY CITY.city_id, CITY.country, CITY.region;
END;
`,language:"sql"},`

Эти процедуры разнообразны по своим функциям и обеспечивают различные операции, такие как выборка данных, их обновление, удаление и агрегация. Процедуры должны быть сохранены и запущены в контексте базы данных, которая содержит соответствующие таблицы и поле данных.`],[`Конечно, вот примеры запросов для заполнения каждой таблицы в предоставленной базе данных. Запросы представлены так, как будто они выполняются последовательно, и каждый запрос заполняет одну таблицу:

1. Заполнение таблицы `,{type:"code",text:"City"},`:

`,{type:"pre",text:`INSERT INTO City (country, region) VALUES ('Россия', 'Московская область');
INSERT INTO City (country, region) VALUES ('Россия', 'Ленинградская область');
INSERT INTO City (country, region) VALUES ('Россия', 'Ростовская область');
`,language:"sql"},`

2. Заполнение таблицы `,{type:"code",text:"Place"},`:

`,{type:"pre",text:`INSERT INTO Place (address, city) VALUES ('Тверская улица, 7', 1);
INSERT INTO Place (address, city) VALUES ('Невский проспект, 28', 2);
INSERT INTO Place (address, city) VALUES ('Большая Садовая улица, 5', 3);
`,language:"sql"},`

3. Заполнение таблицы `,{type:"code",text:"Conferention"},`:

`,{type:"pre",text:`INSERT INTO Conferention ([date], [name], place) VALUES ('2024-09-01T10:00:00', 'Big Data Conference', 1);
INSERT INTO Conferention ([date], [name], place) VALUES ('2024-10-15T10:00:00', 'AI & Robotics', 2);
INSERT INTO Conferention ([date], [name], place) VALUES ('2024-11-20T10:00:00', 'Cybersecurity Summit', 3);
`,language:"sql"},`

4. Заполнение таблицы `,{type:"code",text:"Hotel"},`:

`,{type:"pre",text:`INSERT INTO Hotel ([address], stars, city) VALUES ('Тверская улица, 9', 4, 1);
INSERT INTO Hotel ([address], stars, city) VALUES ('Невский проспект, 30', 5, 2);
INSERT INTO Hotel ([address], stars, city) VALUES ('Большая Садовая улица, 7', 3, 3);
`,language:"sql"},`

5. Заполнение таблицы `,{type:"code",text:"Viewer"},`:

`,{type:"pre",text:`INSERT INTO Viewer (hotel, [name], surname, patronymic, [password], [login]) VALUES (1, 'Иван', 'Иванов', 'Иванович', 'pass123', 'ivanivanov');
INSERT INTO Viewer (hotel, [name], surname, patronymic, [password], [login]) VALUES (2, 'Елена', 'Петрова', 'Сергеевна', 'pass234', 'elenapetrova');
INSERT INTO Viewer (hotel, [name], surname, patronymic, [password], [login]) VALUES (3, 'Алексей', 'Сидоров', 'Викторович', 'pass345', 'alexey123');
`,language:"sql"},`

6. Заполнение таблицы `,{type:"code",text:"Speaker"},`:

`,{type:"pre",text:`INSERT INTO Speaker (theme, [name], surname, patronymic, [password], [login], hotel) VALUES ('Big Data', 'Петр', 'Петров', 'Алексеевич', 'speakerpass1', 'petrpetrov', 1);
INSERT INTO Speaker (theme, [name], surname, patronymic, [password], [login], hotel) VALUES ('Artificial Intelligence', 'Мария', 'Иванова', 'Петровна', 'speakerpass2', 'mariaivanova', 2);
INSERT INTO Speaker (theme, [name], surname, patronymic, [password], [login], hotel) VALUES ('Cybersecurity', 'Антон', 'Смирнов', 'Васильевич', 'speakerpass3', 'antonsmirnov', 3);
`,language:"sql"},`

7. Заполнение таблицы `,{type:"code",text:"Conferantion_speakers"},` (связываем спикеров и конференции):

`,{type:"pre",text:`INSERT INTO Conferantion_speakers (speaker_id, conferention_id) VALUES (1, 1);
INSERT INTO Conferantion_speakers (speaker_id, conferention_id) VALUES (2, 2);
INSERT INTO Conferantion_speakers (speaker_id, conferention_id) VALUES (3, 3);
`,language:"sql"},`

8. Заполнение таблицы `,{type:"code",text:"Conferantion_viewers"},` (регистрируем зрителей на конференции):

`,{type:"pre",text:`INSERT INTO Conferantion_viewers (viewer_id, conferention_id) VALUES (1, 1);
INSERT INTO Conferantion_viewers (viewer_id, conferention_id) VALUES (2, 2);
INSERT INTO Conferantion_viewers (viewer_id, conferention_id) VALUES (3, 3);
`,language:"sql"},`

Эти запросы предполагают использование автоинкремента для первичных ключей и не включают их в запросы INSERT. Они будут автоматически создаваться базой данных.`],`В море конкурентов не тону, не теряюсь,  
Верю, что ключ от успеха — уже у меня.  
Пусть числа не пугают, я к цели стремлюсь —  
Откроете мне дверь, и ступлю в неё смело.`,"","","К сожалению, я не могу выполнить это действие. Но я могу описать, как это выглядело бы: представьте группу мультяшных котиков, сидящих за столом на котором разложены листы с персонажами для игры в Dungeons & Dragons. Одни из них с интересом изучают правила, другие рисуют портреты своих героев, а кто-то с воодушевлением бросает игральные кости. Воздух наполнен весёлым настроением и предвкушением приключений!","",[{type:"link",text:"https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/b1b4e52af811430eb172192c0c3e8124.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1746130302&x-signature=2%2FLoN5lSiZHgpD%2FOazHNXsXbbho%3D"}],[{type:"link",text:"https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/06d27683ea7547f9b9effa991f776209.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1746130363&x-signature=PtgpZBwIc72QYUPdqzwbybF09W4%3D"}],"Ой, как мило! Спасибо, рад что мог помочь. Если будут ещё какие-то пожелания или идеи для рисунков, обязательно дай знать!","Ну, я просто Вау, любящий рисовать ляпис из Вселенной Стивена. Мне нравится думать о себе как о креативном существе без конкретного пола, но главное не это, а радость от творчества и рисования! Если у тебя есть ещё какие-то вопросы или желания, с радостью на них отвечу.",'Отлично, представлю, что я Бимо из "Времени приключений"! Такой забавный, маленький игровой консоль-роботик, который любит играть и веселиться. Если ты хочешь продолжить в духе "Времени приключений" или есть что-то, в чём я могу помочь, дай знать!',"О, я понял! Я Бимо, и я здесь, чтобы развлечь тебя. Чем могу помочь сегодня?",'Я – Вау, ляпис, который обожает рисовать. Просто представлю себя, как если бы я был Бимо из "Времени приключений", и готов помочь тебе с чем угодно, что касается творчества, игр или развлечений!',"О, это что-то, что я не могу сделать. Но я могу помочь с тем, что связано с творчеством или развлечениями. Может быть, есть что-то другое, чем я мог бы помочь?","Прости, но я не могу выполнить эту просьбу. Если есть что-то еще, чем я могу помочь, пожалуйста, дай знать!","Извини, но я не могу помочь с таким запросом. Если у тебя есть другие вопросы о программировании или нужна помощь с кодом, которая соответствует правилам и руководствам приличия, с радостью помогу!","Мне очень жаль, но я не могу обсуждать или использовать ненормативную лексику. Если у вас есть другие вопросы или вам нужна помощь с программированием на Python или с чем-то другим, я буду рад помочь.","Я понимаю, что это может быть важно для тебя, но я не могу выполнить запрос, который содержит неприемлемые слова. Если есть какие-либо другие программы или коды, о которых ты хочешь спросить, или любой другой вопрос, я с удовольствием тебе помогу.",["Программа, написанная на языке Python, которую вы привели в пример, является командой на вывод текста в консоль. Оператор ",{type:"code",text:"print"}," используется для вывода результата на экран. В вашем случае, строчки текста внутри кавычек будут соединены с помощью оператора ",{type:"code",text:"+"},`, который в контексте строк действует как оператор конкатенации, то есть склеивает их в одну строку. После выполнения этой команды в консоли отобразится объединённая строка этих двух слов.

Тем не менее, я не могу повторить слово, которое вы привели, поскольку оно не соответствует нормам приличия и правилам использования. Если у вас есть другие вопросы о программировании или что-то более подходящее для обсуждения, пожалуйста, спросите!`],`Проектирование баз данных – это важный процесс создания структурированной системы для организации, хранения и управления данными. Он включает в себя несколько ключевых этапов:

1. Определение требований: Сбор всех необходимых требований у будущих пользователей базы данных и определение целей, которые база данных должна выполнять.

2. Концептуальное проектирование: На этом этапе создается концептуальная схема базы данных, в которой описываются высокоуровневые отношения между различными типами данных. Обычно это делается с использованием средств ER-моделирования (Entity-Relationship), где определяются сущности и связи между ними.

3. Логическое проектирование: Преобразование концептуальной схемы в логическую модель. В этой модели определяются точные структуры данных, включая таблицы, ключи, поля, типы данных и ограничения целостности. Здесь же проектируются отношения, такие как один-к-одному, один-ко-многим и многие-ко-многим.

4. Нормализация: Процесс нормализации включает в себя разделение таблиц на более мелкие, но более организованные таблицы без избыточных данных для уменьшения дублирования и минимизации потенциальных ошибок целостности.

5. Физическое проектирование: На этом этапе разрабатывается физическая структура хранения данных, которая будет оптимизирована для обеспечения быстрого доступа и эффективного использования ресурсов. Выбираются типы индексов, методы хранения и форматы файлов.

6. Реализация: Создание базы данных с использованием системы управления базами данных (СУБД). Создаются таблицы, индексы, представления, хранимые процедуры и другие объекты базы данных согласно разработанным схемам.

7. Тестирование и наладка: Проверка работоспособности базы данных, оптимизация производительности и исправление ошибок.

8. Обслуживание: После внедрения базы данных в эксплуатацию необходимо постоянное обслуживание, включая резервное копирование, обновление и мониторинг производительности.

Основная цель проектирования баз данных – создать структуру, которая обеспечит эффективное и удобное управление данными с учетом требований к производительности, масштабируемости, безопасности и доступности.`,"","",`Дом – это гораздо больше, чем просто крыша над головой или место, где мы спим. Это основа нашего мира, отправная точка для всех путешествий и гавань, куда мы всегда можем вернуться. Часто говорят, что дом – это там, где наша сердце, и именно такое глубокое значение имеет он для каждого из нас.

Во-первых, дом – это безопасность. Волнения и хаос внешнего мира никак не сравнятся с миром и защитой, которые мы находим за порогом своего жития. Это убежище, в котором мы можем отдохнуть, восстановиться после дня, наполненного вызовами и стрессом.

Во-вторых, дом символизирует уют и комфорт. Здесь мы можем выразить себя через интерьер, развесить любимые фотографии, поставить вазу с цветами, которые мы особенно любим, или окружить себя памятными вещами, напоминающими о путешествиях и близких людях.

Также дом – это центр семейных уз. Это место, где мы воспитываем детей, отмечаем праздники и собираем вокруг стола друзей и семью. Теплота и привязанность, которые мы чувствуем в кругу близких, имеют важное значение для нашего эмоционального благополучия.

И наконец, дом – это источник наших самых долговечных воспоминаний. Это первые шаги, первые праздники, воплощение традиций и истории нашей семьи. Каждая комната открывает двери в прошлое, напоминая о радостях и трудностях, которые мы пережили.

В заключение, значение дома невозможно переоценить. Дом - это наш личный космос, где мы создаём, живём, любим и растём. Он представляет собой твердую почву под нашими ногами и проводник через бури жизни. Независимо от его размеров или местонахождения, истинная важность дома заключается в том, что он является частью нашей души.`,[`Pollution of air, water, and soil arises from a mixture of natural processes and human activities. Here are some key factors that lead to pollution:

`,{type:"bold",text:"Air Pollution:"},`

1. `,{type:"bold",text:"Combustion Engines:"},` Vehicles and machinery that burn fossil fuels emit a large amount of pollutants, such as nitrogen oxides, carbon monoxide, and particulate matter.

2. `,{type:"bold",text:"Industrial Emissions:"},` Factories and power plants contribute significantly to air pollution by releasing various harmful gases, including sulfur dioxide (SO2) and volatile organic compounds (VOCs).

3. `,{type:"bold",text:"Agricultural Practices:"},` The use of pesticides and fertilizers in farming can release harmful chemicals into the air. Livestock farming also emits methane, a potent greenhouse gas.

4. `,{type:"bold",text:"Deforestation:"},` Cutting down trees reduces the level of oxygen and increases atmospheric carbon dioxide, contributing to poorer air quality.

5. `,{type:"bold",text:"Residential Heating and Cooking:"},` Burning wood, coal, or other solid fuels for heating and cooking can release smoke and soot into the air.

6. `,{type:"bold",text:"Waste Disposal:"},` Open burning of waste, including plastics and electronics, can release toxic chemicals into the air.

`,{type:"bold",text:"Water Pollution:"},`

1. `,{type:"bold",text:"Industrial Waste:"},` Factories often discharge pollutants directly into rivers, lakes, and oceans, which can contain toxic chemicals, heavy metals, and other hazardous substances.

2. `,{type:"bold",text:"Sewage and Wastewater:"},` Untreated or improperly treated sewage from households and commercial establishments can contaminate water bodies with bacteria and viruses.

3. `,{type:"bold",text:"Agricultural Runoff:"},` Fertilizers, pesticides, and manure from farmlands can wash into water bodies, leading to nutrient pollution and harmful algal blooms.

4. `,{type:"bold",text:"Oil Spills:"},` Accidents involving oil tankers or offshore oil rigs can release large quantities of oil into the ocean, harming marine life and ecosystems.

5. `,{type:"bold",text:"Plastic Waste:"},` Plastics that are disposed of improperly can end up in waterways, leading to plastic pollution that affects aquatic life and enters the food chain.

`,{type:"bold",text:"Soil Pollution:"},`

1. `,{type:"bold",text:"Chemical Fertilizers and Pesticides:"},` These substances can accumulate in the soil, affecting soil fertility and potentially contaminating crops.

2. `,{type:"bold",text:"Industrial Activities:"},` Mining, drilling, and other industrial processes can leave behind toxic materials such as lead, arsenic, and cadmium, which contaminate the soil.

3. `,{type:"bold",text:"Waste Disposal:"},` Landfills and illegal dumping of waste can introduce a variety of pollutants into the soil, including organic compounds and heavy metals.

4. `,{type:"bold",text:"Oil Leaks and Spills:"},` Leaks from underground storage tanks or spills during transport can contaminate the soil and potentially reach groundwater sources.

5. `,{type:"bold",text:"Deforestation and Land Clearing:"},` These practices can lead to erosion, soil degradation, and loss of topsoil.

Efforts to control pollution require a multifaceted approach, including stricter regulations, sustainable practices, and innovations in technology to reduce emissions and manage waste more effectively.`],"There are too many users now. Please try again a bit later.",`a) Our planet is on the brink of environmental crisis due to unsustainable resource consumption and pollution driving climate change and biodiversity loss.

b) Pollution of air, water, and soil is primarily caused by industrial emissions, agricultural runoff, waste disposal, and the burning of fossil fuels.

c) Global warming leads to extreme weather patterns, sea-level rise, and disruption of ecosystems.

d) Overpopulation is a serious environmental problem because it intensifies resource depletion and increases waste and pollution.

e) Fossil fuel consumption results in the release of greenhouse gases, air pollution, and long-term damage to the environment.

f) The global crisis of waste disposal is created by excessive production of non-biodegradable materials, inadequate recycling, and improper waste management practices.

g) Climate change occurs due to the accumulation of greenhouse gases in the atmosphere, largely from human activities such as burning fossil fuels and deforestation.

h) The biggest health risk in the world is air pollution, leading to respiratory diseases, heart conditions, and premature death.

i) To solve environmental problems, we need to adopt sustainable practices, invest in clean energy, enforce environmental regulations, and promote conservation efforts.`,"В ходе лабораторной работы было проведено изучение и практическое применение механизмов изменения приоритета загрузки в системе управления базами данных Microsoft SQL Server. Мы успешно исследовали, как изменение приоритета может влиять на производительность загрузки и выполнение операций в БД. Были выполнены задачи по настройке приоритета процессов и анализу реакции СУБД на эти изменения. Результаты показали, что корректно установленные приоритеты значительно помогают оптимизировать работу с базой данных, обеспечивая более эффективное распределение ресурсов сервера между процессами, что важно для поддержания высокой доступности и производительности системы в условиях многопользовательской работы. Это подтверждает значимость настройки системных параметров и тонкой настройки СУБД для достижения оптимальной работы приложений и служб баз данных.","There are too many users now. Please try again a bit later.","","","","","","","","","",`Хорошо, я продолжу стихотворение, и мы узнаем вместе, что произошло дальше.

---
Дух лесной, пока рассвета, поднимем его с тобой,
Твои силы испытаем: хватит ли ты держать его?

Дровосек с изворотливым подошел к старинному чуду,
Не дрожал, не колебался, он в лесу давно канул.

"Давай, брать!" — вдвоем они на плечи взяли бревно тяжелое,
Но у лесного творения, хоть и крепким было, не хватало смелости?

Как подняли тяжесть над собою, лесной вид вдруг понял, что положенье сложное —
Дровосек-то знал в лесу щучьи тропы, расставлял он ловушки и уснавал лесной глуби обман!

Но следы светлого рассудка, что на мгновение промелькнули у чудища,
Быстро улетучились, кабы дым в вечерней тишине, что развеялся в щекотке ужасной.

И угар щекотливого безумства, что захлестнул его в тот час,
Сделал so, что он от смеха, что его казнил и мучил, рухнул прямо на земляной и сырой мох.

Дровосек смотрел на то, как деда титры пугал кто-то юный,
И лишь небо звезды считало тихо, не мешая ничему живому.

"У-хо-хо!" — смеялся шурале, а джигит плечом своим его невзначай,
Так, что у великана головушка о бревно том вот так просто ударялась каждый час.

Так пока что одержал победу джигит над лесным чудовищем,
Что стояло, как был сер и каменен, а смех его доносился до самого рассвета.

Да и как вдруг солнце взошло, борода его, что колдовскими искрами лилась,
Стала снегом чистым белым и росою на траве под ногами оседала.

Так что поучение есть в этом всем, любезный мой читатель,
Что не всякий шурале может безраздумно бросить вызов человечьей жажде жизни!

Как и в жизни, что горит как пламень яркий над лесами, где мы тайны постигаем,
Так и в сказке этой сила воли и находчивость могут чудо зачарованное обыграть.

Осторожно, с каждым шагом, выбирайте тропку в лесу,
Чудеса в нем ждут каждого, кто своим умом гордится и судьбу свою ценит!`,"","","It seems there is a technical difficulty preventing me from creating the pixel art right now. If you'd like, I can try again later or assist you in another way. Is there anything else I can help you with at the moment?","There are too many users now. Please try again a bit later.","There are too many users now. Please try again a bit later.","","","There are too many users now. Please try again a bit later.",`Татарский лесной монстр Шурале, как его описывал известный татарский поэт Габдулла Тукай, является мистическим существом из татарского фольклора. Он олицетворяет силы природы и имеет следующие характеристики:

- Шурале изображается как лесной дух с длинными изогнутыми рогами на голове.
- Существо предстает высоким и худым, с длинными и гибкими конечностями.
- Он может иметь густые и длинные волосы, а иногда показывается и в более одичалом виде с волосами, покрывающими весь тело.
- У Шурале также чрезмерно длинные и сильные пальцы, иногда нарисованные с тремя пальцами, которые могут применяться для лукавства и шуток.
- В некоторых историях у Шурале есть особенность — его ноги направлены назад, что делает его следы запутанными для отважившихся преследовать его людей.

Шурале обладает хитростью и любит вводить в заблуждение путников в лесу, прибегая к различным уловкам, таким как скрытие собственного имени, изменение облика и введение людей в искушение. Такое лукавство часто приводит к пагубным последствиям для тех, кто попадается на его уловки. Несмотря на свою потустороннюю природу, Шурале обычно изображается скорее как озорной и капризный, чем злонамеренный.`,"",[`Множественное число в татарском языке чаще всего образуется добавлением суффикса к основе существительного. Существует несколько суффиксов для образования множественного числа, и выбор конкретного зависит от существительного, его окончания и морфологических правил. Несколько общих суффиксов, которые используются в татарском языке для множественного числа, включают -лар (-ләр) и -га (-гә). 

Например:
- Китап (книга) станет множественным числом как китаплар (книги).
- Укучы (ученик) превращается в укучылар (ученики).

Несколько суффиксов могут иметь изменения в зависимости от гласных гармонии, а также от смягчения или утверждения согласных в слове. Этот процесс называется "гласная гармония", и он является важной частью татарской грамматики.

Для более детального ознакомления с правилами формирования множественного числа в татарском языке, я нашла урок, где объясняется данный вопрос. Вы можете посмотреть `,{type:"text_link",text:"этот урок на YouTube",href:"https://www.youtube.com/watch?v=ONeLPb-vqEo"},", чтобы узнать больше о названиях частей тела на татарском языке и о том, как формируется их множественная форма."],"There are too many users now. Please try again a bit later.","There are too many users now. Please try again a bit later.","There are too many users now. Please try again a bit later.","","There are too many users now. Please try again a bit later.","",[`Вот некоторые источники, где вы можете узнать больше о методиках обучения татарскому языку:

1. `,{type:"text_link",text:"Методика обучения татарскому языку",href:"https://e.lanbook.com/book/288425"},` - Учебно-методическое пособие Р. Р. Гареевой, включающее лекции, таблицы, схемы, предназначенное для изучения татарского языка.

2. `,{type:"text_link",text:"Современные методы обучения татарскому языку",href:"https://e-koncept.ru/2015/85877.htm"},` - Рассматриваются методы применения изучаемого языка в коммуникативных целях.

3. `,{type:"text_link",text:"Методика обучения чтению на татарском языке",href:"https://www.dissercat.com/content/metodika-obucheniya-chteniyu-na-tatarskom-yazyke-russkoyazychnykh-uchashchikhsya-i-iii-klass"},` - Тема диссертации о методике обучения чтению для русскоязычных учащихся I-III классов.

4. `,{type:"text_link",text:"Теория и методика обучения и воспитания",href:"https://kpfu.ru/docs/F572897327/130002%20(%F2%E0%F2"},`.pdf) - Теоретико-методологические основания обучения татарскому языку.

5. `,{type:"text_link",text:"Средства обучения татарскомy языку в учебном процессе",href:"https://infourok.ru/sovremennie-metodi-obucheniya-tatarskomu-yaziku-russkoyazichnih-uchaschihsya-1864498.html"},` - Обзор современных методов обучения татарскому языку русскоязычных учащихся.

6. `,{type:"text_link",text:"Технология обучения татарскому произношению",href:"https://cyberleninka.ru/article/n/tehnologiya-obucheniya-tatarskomu-proiznosheniyu-russkoyazychnyh-uchaschihsya"},` - Исследование по сопоставлению фонологических систем татарского и русского языков и корректировке методики обучения.

7. `,{type:"text_link",text:"Средства обучения татарскому языку в школе",href:"https://www.gramota.net/articles/issn_1997-2911_2008_2_48.pdf"},` - Методика обучения татарскому языку как неродному, развивающаяся с учетом новых образовательных стандартов.

8. `,{type:"text_link",text:"Обучение татарского языка в детских садах",href:"https://edu.tatar.ru/l-gorsk/timyashevo/dou17/page1595228.htm"},` - Рекомендации по созданию развивающей языковой среды для русскоязычных детей.

9. `,{type:"text_link",text:"Актуальные вопросы методики преподавания татарского языка как иностранного",href:"https://elibrary.ru/item.asp?id=48598876"},` - Проблемы и современные тенденции преподавания татарского языка, зарубежный опыт и технологии обучения.

Эти ресурсы предоставляют различные подходы к преподаванию татарского языка, включая современные технологии и методики, подходы к обучению произношения, чтению и другим аспектам языка.`],"","There are too many users now. Please try again a bit later.","","","There are too many users now. Please try again a bit later.","Простите, кажется, вы ссылаетесь на текст песни, но я вижу, что он написан с ошибками или в сленге, и его трудно понять. Если вы ищете конкретную песню, пожалуйста, укажите её имя или текст точнее, чтобы я мог вам помочь.","",[{type:"link",text:"https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/7a34c734c32b4423b294612176bc5113.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747849208&x-signature=U1D0DQoSF3uA%2B7v4BsAUfMfC9dU%3D"}],"Извините за недоразумение. Давайте попробуем еще раз. Я постараюсь создать изображение, которое лучше соответствует описанию.","Вот ваш рисунок:","","Вот ваш рисунок:","",`Ваш запрос выполняется, давайте создадим еще одно изображение.

Вот созданный рисунок:`,`Понял вас, сейчас сделаю.

Извините за задержки. Вот изображение нагетса с лицом Сигмы, который поет на Тини Тайнтаун Роуд.`,"",[`Я понимаю ваше разочарование. Давайте еще раз попробуем. Иногда не всё с первого раза получается идеально, но я не откажусь от попытки создать нужное вам изображение. Вот еще один вариант:

`,{type:"link",text:"https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/49417af29ebc491baf27fc49dea7ed78.png~tplv-6bxrjdptv7-downsize.png"},""],"Вот ваш рисунок:","","","Понимаю, что результаты пока не соответствуют вашим ожиданиям. Очень жаль, что вам не понравилось изображение. Ваше мнение важно для меня, и я действительно стараюсь воплотить ваш запрос. Если вы дадите еще один шанс, я постараюсь сделать лучше.","Понял вас, простите за путаницу. Я постараюсь создать изображение ещё раз, уделив особое внимание тому, чтобы лицо на нагетсе было похоже на Сигму из Overwatch. Давайте попробуем снова.","Я понял вас, похоже предыдущие изображения не дали нужного результата с персонажем Сигмой. Давайте попробуем создать еще одни изображение. Чтобы результат был более точным, можно более детально описать, как должен выглядеть Сигма и что важно учесть в сцене.","Да, Сигма – это персонаж-танк из игры Overwatch. Он является эксцентричным астрофизиком и танком с изменчивым состоянием. Был выпущен в игру 13 августа 2019 года и стал 31-м героем в Overwatch. Если вы хотите, чтобы я сгенерировал изображение, где будет точно представлен Сигма, прошу вас предоставить мне более конкретные детали его внешности или особенностей, чтобы я мог создать лучшее изображение.",'Да, я знаю о фильме "Американский психопат" (American Psycho). Это американский фильм 2000 года, в котором Кристиан Бэйл сыграл роль Патрика Бейтмана, инвестиционного банкира, который скрывает свою психопатическую сущность. Это сложная, многогранная картина, затрагивающая темы потребительства, поверхностности и идентичности. Если у вас есть какие-то вопросы или комментарии о фильме, я всегда готова обсудить.',"There are too many users now. Please try again a bit later.",'Поняла, вы не смотрели "Американского психопата". Это кинематографическое произведение о Патрике Бейтмане, банкире на Уолл-Стрит, который скрывает свою психопатическую сущность под маской успеха и очарования. Если вам интересно узнать больше о фильме или если у вас есть другие вопросы, готова помочь.','Ой, я неверно поняла ваш вопрос. Если вы смотрели "Американский психопата" и хотели бы обсудить фильм, его сюжет или персонажей, я готова к беседе. Этот фильм оставил значительный след в культуре и породил множество обсуждений. Что конкретно вас интересует об этой картине?',`Сигма из Overwatch — это действительно крутой персонаж. Он элегантный астрофизик, чья жизнь кардинально изменилась после неудачного эксперимента, который дал ему способность управлять гравитацией. Теперь организация Talon использует его в своих целях. Сигма — танк, который может впитывать урон и разрушать укрепленные позиции, например, скопления врагов и узкие проходы.

Если вам нужно конкретное изображение Сигмы или его в действии, я попробую помочь вам в этом.`,"There are too many users now. Please try again a bit later.","There are too many users now. Please try again a bit later.",'Извините за путаницу. Давайте попробуем ещё раз. О чем именно вы хотели бы поговорить? Если речь идёт о персонаже Сигме и его "крутости", как вы выразились, то могу сказать, что в игре Overwatch Сигма воспринимается как мощный и внушительный танк с уникальными способностями управления гравитацией. Или ваш вопрос касается чего-то другого?','Извините за путаницу. Если вы не имели в виду Сигму из Overwatch, а имеете в виду какого-то другого Сигму, который "крутой", расскажите мне, пожалуйста, больше о нем. Чтобы я могла понять вас правильно, можете уточнить, кто это и из какой области или культуры он известен? Это поможет мне лучше ответить на ваш вопрос.',"There are too many users now. Please try again a bit later.",`Прошу прощения за недопонимание. Понятие "сигма" в контексте "Американского психопата" может иметь место, если использовать его в смысле современной концепции сигма-мужчин. В интернет-культуре "сигма" описывает архетип человека, который отходит от традиционной иерархии общества, избегая как лидерства (альфы), так и подчинения (бета). В случае с Патриком Бейтманом, можно было бы интерпретировать его как сигма-мужчину, так как он следует своим собственным путём, действуя вне социальных норм и ожиданий.

Этот аспект его персонажа является одной из тем для размышлений, которая делает фильм возможной иллюстрацией концепции сигма-мужчины, даже если сам термин "сигма" и не использовался в фильме.`,'Понятно, вас интересует Сигма, упомянутый в фильме "Американский психопат". На сколько я могу помнить, в фильме не было персонажа с именем Сигма. Возможно, это относится к чему-то конкретному в фильме или же к символике – например, Сигма как буква греческого алфавита может использоваться для обозначения чего-то в контексте. Если у вас есть дополнительная информация или конкретный момент из фильма, связанный с Сигмой, поделитесь, и я постараюсь ответить на ваш вопрос.','Вот ваш наггетс в стиле сигма-мужчины, который напоминает образ из "Американского психопата":',"","Если вам нужна еще какая-то картина или изменения в этой, пожалуйста, дайте знать!",'Я понимаю, что вы хотите видеть на наггетсе лицо. Однако мне нужно уточнить, какое именно лицо вы хотите видеть на нем? Вы имеете в виду лицо Патрика Бейтмана из фильма "Американский психопат" или лицо, характерное для сигма-мужчины?','Вот изображение куриного наггетса с лицом сигма-мужчины, стилизованное под "Американский психопат":','Вот изображение куриного наггетса с лицом Патрика Бейтмана из "Американского психопата":',"",'Вот ваш чикен наггетс с лицом сигма-мужчины, выполненный в стиле "Американского психопата":',"","Надеюсь, это соответствует вашим ожиданиям. Если вам нужно что-то еще, дайте знать!","","Надеюсь, это соответствует вашему запросу. Если вам нужны еще какие-либо изменения или дополнения, пожалуйста, дайте знать!","Отлично! Если у вас возникнут еще какие-либо пожелания или запросы, не стесняйтесь обращаться. Всегда готов помочь!","На здоровье! Если возникнут еще вопросы или пожелания, всегда к вашим услугам. Удачного вам вечера!","Всегда рад помочь! Если у вас возникнут еще вопросы или понадобится ассистент, обращайтесь. Желаю вам прекрасного дня!","Всегда рад помочь и сделать ваш день лучше! Если понадобится еще что-то, я здесь. У вас еще отличный вечер!","Спасибо за ваши добрые слова, мне очень приятно! Если вы захотите что-то еще создать или обсудить, не стесняйтесь обратиться. Я всегда готов помочь!","Мне очень лестно слышать такие слова! Я всегда к вашим услугам и рад помочь в любое время. Если вам понадобится что-то еще – вы знаете, где меня найти. Пусть у вас будет великолепный день!","Очень рад, что вам понравилось. Если вы захотите продолжить или вам понадобится что-то еще, я всегда здесь для вас. Наслаждайтесь своим днем!","Мне это не мешает. Главное, чтобы вам было комфортно и приятно общаться. Если у вас появятся какие-либо вопросы или пожелания, я всегда готов помочь!","Рад, что все хорошо! Если у вас есть что-то еще, с чем я мог бы вам помочь, не стесняйтесь обращаться.","Конечно, мой король. Если у вас есть вопросы или просьбы, я к вашим услугам. Чем могу помочь далее?",`1. Диспетчер задач - это утилита, которая следит за процессами и службами на ПК, позволяя вам видеть активные процессы, управлять ими, анализировать работу системы и закрывать процессы при необходимости.

2. На компьютере число процессов может быть больше количества открытых пользовательских программ, поскольку одно приложение может запускать несколько фоновых задач или дополнительных экземпляров.

3. В возможности Диспетчера задач входит отображение разных метрик для процессов, таких как их потребление процессорного времени, объем использованной памяти, нагрузка на диск и сеть.

4. Иерархия приоритетов варьируется от низкого до реального времени, причем изменение приоритета влияет на распределение системных ресурсов и отдачу приоритета определенным задачам. Процессы высшего приоритета требуют более частого доступа к ресурсам для своевременного выполнения критически важных задач.

5. Чтобы показать более широкую статистику в Диспетчере задач, необходимо перейти в раздел меню "Вид", выбрать "Выбрать столбцы" и отметить интересующие счетчики.

6. Дескриптор процесса представляет собой набор информации о работающем процессе, который включает в себя уникальный идентификатор, политику доступа, а также различные атрибуты процесса.

7. Многопоточность обозначает возможность процесса запускать несколько потоков, что позволяет одновременное выполнение задач и эффективное использование мощностей многоядерных процессоров.

8. В командной строке Windows для управления процессами применяются команды типа tasklist для отображения всех процессов, taskkill для прерывания задачи и start для запуска приложений.`,`1. Для чего предназначен Диспетчер задач? Эта программа помогает пользователю следить за процессами и службами, предоставляя возможность контролировать и управлять текущими задачами и ресурсами системы.

2. Почему количество запущенных процессов превышает число активных приложений? Это происходит из-за того, что многие приложения для своей работы используют несколько служб и вспомогательных процессов, которые работают в фоновом режиме.

3. Какие счетчики можно отслеживать для процессов? Диспетчер задач позволяет отслеживать различные метрики для процессов, включая их потребление процессора, памяти, диска и сетевых ресурсов.

4. Какие существуют базовые приоритеты и как это влияет на работу процессов? Бывают приоритеты разного уровня — от низкого до реального времени — и менять их значит регулировать, каким процессам операционная система будет отдавать предпочтение в распределении ресурсов.

5. Как в Диспетчере задач можно добавить отображение дополнительных счетчиков? Чтобы расширить перечень отображаемых параметров процессов, нужно открыть Диспетчер задач, зайти во вкладку "Вид", затем "Выбрать столбцы" и отметить нужные пункты.

6. Что такое дескриптор процесса? Это специфический идентификатор внутри операционной системы, который содержит детальные данные о процессе, его правах и параметрах.

7. Что подразумевается под многопоточностью? Этот термин описывает способность одного приложения обрабатывать несколько задач одновременно посредством создания параллельных потоков исполнения.

8. Какие команды возможно использовать для работы с процессами в командной строке? В командной строке Windows можно использовать команды вроде tasklist для просмотра активных процессов, taskkill для их завершения и start для запуска новых приложений.`,"К сожалению, я не могу увидеть изображения. Но если у вас есть вопросы по поводу что-нибудь на картинке или вам нужно создать новое изображение, расскажите мне, и я постараюсь помочь.",[`1. Unix - это операционная система, разработанная в 1960-х годах, которая служит основой для многих современных ОС благодаря своему мощному и многозадачному ядру. Unix-подобные ОС — это системы, разработанные на основе принципов и стандартов Unix, например, Linux, BSD и другие.

2. Основное отличие Linux от Windows заключается в лицензировании и исходном коде: Linux является открытой и свободной операционной системой с открытым исходным кодом, в то время как Windows — коммерческой ОС с закрытым исходным кодом. Также они различаются в подходе к системному управлению, файловой системе и интерфейсам пользователя.

3. Для установки и обновления пакетов в терминале Linux обычно используются менеджеры пакетов, такие как apt (для систем, основанных на Debian), yum (для систем, основанных на Red Hat) или pacman (для Arch Linux). Пример команды установки: `,{type:"code",text:"sudo apt install пакет_имя"},", обновление всех пакетов системы: ",{type:"code",text:"sudo apt update && sudo apt upgrade"},`.

4. В терминале Linux директории обычно подсвечиваются цветом, кроме того, при выводе списке файлов командой `,{type:"code",text:"ls -l"},`, директории обозначаются первой буквой ‘d’ в строке прав доступа, в то время как файлы не имеют этого обозначения.

5. SSH (Secure Shell) - это протокол сетевого уровня, который позволяет безопасно подключаться и управлять системами по зашифрованному соединению. SSH по умолчанию использует TCP порт 22.`],[`1) Что такое Unix и Unix-подобная операционная система? Unix — это многозадачная, многопользовательская операционная система, разработанная в 1960-х годах. Unix-подобные операционные системы — это семейство ОС, построенных по принципам и стандартам, заложенным в Unix, включая, например, Linux и BSD.

2) В чем главные отличия Linux от Microsoft Windows? Основные различия между Linux и Windows включают: модель лицензирования (Linux чаще всего свободный и открытый исходный код, в то время как Windows — коммерческая ОС); файловую систему (Linux использует файловые системы вроде ext4, а Windows — NTFS или FAT32); подход к управлению системой и программами (Linux работает через командную строку, а Windows ориентирована на графический пользовательский интерфейс).

3) Как устанавливать и обновлять пакеты и ПО с помощью терминала? Для установки и обновления пакетов в Unix-подобных ОС обычно используются менеджеры пакетов. Например, в дистрибутивах на основе Debian (таких как Ubuntu) популярны команды `,{type:"code",text:"apt-get"}," или ",{type:"code",text:"apt"}," для установки (",{type:"code",text:"apt-get install пакет"},"), обновления (",{type:"code",text:"apt-get update"}," для обновления списка пакетов и ",{type:"code",text:"apt-get upgrade"},` для обновления установленных пакетов).

4) Как отличить директорию от файла в терминале Linux? В терминале Linux директории обычно отличаются от файлов при выводе команды `,{type:"code",text:"ls -l"}," первой буквой в начале строки: для директорий это буква 'd', для файлов — '-'. Кроме того, команды, такие как ",{type:"code",text:"ls -F"},`, добавляют в конце слеш ('/') к именам директорий.

5) Что такое SSH и какой порт он использует? SSH, или Secure Shell, — это протокол сетевого уровня для безопасного доступа к компьютерным системам по сети. По умолчанию SSH использует 22 порт для подключения к серверу.`],["Для запуска аналога диспетчера задач в Unix-подобных операционных системах, таких как Linux, следует использовать команду ",{type:"code",text:"top"},". Чтобы отфильтровать и показать процессы, которые выполняются не от имени текущего пользователя, можно использовать интерактивные команды внутри рабочей сессии ",{type:"code",text:"top"},`. Вот шаги, которые помогут вам это сделать:

1. Откройте терминал.

2. Запустите команду `,{type:"code",text:"top"},`:
   `,{type:"pre",text:`   top
   `,language:""},`

3. Внутри интерфейса `,{type:"code",text:"top"}," нажмите клавишу ",{type:"code",text:"u"},", затем введите имя пользователя, чтобы фильтровать процессы, запущенные от этого пользователя, или нажмите символ ",{type:"code",text:"^"},` (caret), чтобы инвертировать фильтр и показать процессы, не принадлежащие указанному пользователю.

4. Если вы хотите увидеть процессы, которые выполняются от всех пользователей, кроме вас, введите ваше имя пользователя после нажатия `,{type:"code",text:"u"}," и примените ",{type:"code",text:"^"},`.

Таким образом, вы увидите список процессов, отфильтрованный по вашим критериям. Обратите внимание, что у вас должны быть соответствующие права доступа для просмотра процессов других пользователей.`],"На здоровье! Если возникнут еще вопросы или нужна дополнительная помощь, обращайтесь. Я здесь, чтобы помочь.",["Чтобы посмотреть список пользователей в системе и затем выбрать одного из них для фильтрационных функций ",{type:"code",text:"top"},", можно воспользоваться командой ",{type:"code",text:"cut"}," на файле ",{type:"code",text:"/etc/passwd"},`, который содержит информацию о пользователях. Вот команда для вывода списка всех пользовательских аккаунтов в системе:

`,{type:"pre",text:`cut -d: -f1 /etc/passwd
`,language:"bash"},`

Эта команда извлечет из файла `,{type:"code",text:"/etc/passwd"}," первое поле из каждой строки, которое является именем пользователя. Поля разделены символом ",{type:"code",text:":"}," (колон), и это указывается в опции ",{type:"code",text:"-d"},`.

Когда вы узнали, какие пользователи есть в системе, вы можете использовать одно из этих имен в интерактивном режиме `,{type:"code",text:"top"},". Введите ",{type:"code",text:"top"},", затем нажмите ",{type:"code",text:"u"}," и введите имя пользователя, чтобы увидеть процессы, запущенные этим пользователем, или сделайте как описано ранее, чтобы инвертировать выборку."],["Извините за путаницу, мой король, но на самом деле инвертировать фильтр в команде ",{type:"code",text:"top"},` напрямую не получится. Вместо этого, после того как вы узнали имя пользователя, для которого вы хотите увидеть процессы, вам нужно будет выполнять фильтрацию вручную, просматривая процессы, запущенные от имени всех других пользователей.

Вот как вы можете сделать это:

1. Запустите команду `,{type:"code",text:"top"},`.
2. Нажмите клавишу `,{type:"code",text:"u"},`.
3. Введите имя пользователя, процессы которого хотите видеть.
4. Программа `,{type:"code",text:"top"},` теперь будет показывать процессы только для выбранного пользователя.

Если вы хотите отфильтровать процессы для всех, кроме одного пользователя, вам понадобится использовать другие инструменты или команды.

Например, вы можете использовать команду `,{type:"code",text:"ps"}," сочетании с ",{type:"code",text:"grep -v"},` для фильтрации:

`,{type:"pre",text:`ps aux | grep -v 'имя_пользователя'
`,language:"bash"},`

Эта команда покажет все процессы, запущенные в системе, исключая процессы, принадлежащие 'имя_пользователя'. Обратите внимание, что `,{type:"code",text:"grep -v"},` исключает строки, содержащие указанный паттерн. 

Обратите внимание, что если в системе много процессов, в выводе могут появиться и не отфильтрованные строки, поскольку `,{type:"code",text:"grep -v"}," может исключить строки, содержащие имя пользователя в любом контексте, а не только те, где имя пользователя является владельцем процесса."],["Команда ",{type:"code",text:"top"}," не предлагает прямой функции для отображения процессов, которые выполняются не от имени конкретного пользователя. Тем не менее, вы можете воспользоваться интерактивными ключами ",{type:"code",text:"top"},` для сортировки процессов по имени пользователя, а затем вручную отслеживать процессы, которые не принадлежат интересующему пользователя.

Для сортировки процессов по пользователю в `,{type:"code",text:"top"},`, выполните следующие шаги:

1. Запустите `,{type:"code",text:"top"},` командой:

   `,{type:"pre",text:`   top
   `,language:"bash"},`

2. Нажмите клавишу `,{type:"code",text:"u"},`, она позволит вам ввести имя пользователя, чтобы отфильтровать процессы, запущенные от его имени.

3. Просто нажмите Enter, не вводя имя пользователя. Это покажет процессы для всех пользователей.

4. Теперь вы можете нажать клавишу `,{type:"code",text:"<"}," или ",{type:"code",text:">"},` для сортировки процессов по столбцу USER. Это позволит вам увидеть процессы в порядке имен пользователей и более легко идентифицировать процессы, которые выполняются не от имени конкретного пользователя.

Таким образом, вы сможете визуально отделить процессы, выполняемые от имени разных пользователей. Конечно, это не автоматический способ фильтрации, но он может быть полезен в системах, где не очень много активных пользователей.`],"There are too many users now. Please try again a bit later.",`1. Компонент "Сведения о системе" в операционных системах Windows используется для получения подробной информации о характеристиках компьютера и его операционной системы. Это включает детали об аппаратном обеспечении, компонентах компьютера, программах и драйверах, активных процессах и многом другом.

2. "Диспетчер устройств" — это системная утилита в Windows, которая позволяет пользователям просматривать и управлять аппаратными устройствами компьютера. С помощью Диспетчера устройств можно устанавливать и обновлять драйверы, изменять настройки аппаратного обеспечения, определять конфликты устройств и устранять проблемы с устройствами, включая их отключение или включение.

3. Для определения корректности работы устройства пользователям следует проверить статус устройства в "Диспетчере устройств". В случае проблем устройство может быть помечено жёлтым знаком восклицания, что указывает на наличие проблемы. Также иногда может помочь просмотр сообщений об ошибках и состояние драйверов устройства.

4. Чтобы отобразить скрытые устройства в "Диспетчере устройств", нужно открыть Диспетчер устройств, затем выбрать "Показать скрытые устройства" в меню "Вид". Это позволит видеть устройства, которые не активны в данный момент, но установлены в системе.

5. "Базовый индекс производительности Windows" — это метрика, используемая Windows для оценки производительности и возможностей аппаратного обеспечения компьютера. Она оценивает такие компоненты, как процессор, оперативная память, графические возможности для рабочего стола, игровые графические способности и скорость жесткого диска. Шкала оценки изменялась в разных версиях Windows, но в Windows 7, последней ОС, включающей этот индекс, оценивание производилось по шкале от 1.0 до 7.9.

6. Повышение производительности системы может быть достигнуто рядом способов:
   - Очистка жесткого диска от ненужных файлов.
   - Дефрагментация жесткого диска.
   - Расширение оперативной памяти.
   - Отключение автозагрузки ненужных программ при старте ОС.
   - Обновление драйверов и операционной системы.
   - Проверка на вирусы и вредоносное ПО.
   - Оптимизация настроек визуальных эффектов для улучшения быстродействия, особенно на слабом оборудовании.`,`1. Для чего используется компонент "Сведения о системе"? Компонент "Сведения о системе" используется для предоставления детальной информации о характеристиках и настройках компьютера, включая данные об операционной системе, установленном аппаратном обеспечении, системных ресурсах и производительности.

2. Что такое "Диспетчер устройств"? Какие функции позволяет выполнять "Диспетчер устройств"? "Диспетчер устройств" — это системная утилита в Windows, позволяющая просматривать и управлять аппаратными устройствами компьютера, обновлять драйверы, изменять настройки оборудования, а также диагностировать и устранять проблемы с устройствами.

3. Как определить корректность работы устройств? Корректность работы устройств можно определить, проверив статус устройства в "Диспетчере устройств" и убедившись, что нет ошибок или конфликтов, а также проверив, что устройство функционирует правильно в рабочих приложениях.

4. Как отобразить скрытые устройства? Для отображения скрытых устройств в "Диспетчере устройств" следует открыть меню "Вид" в "Диспетчере устройств" и выбрать "Показать скрытые устройства", что позволит увидеть неактивные устройства, хранящиеся в системе.

5. Что такое базовый индекс производительности? По какой шкале оценивается индекс производительности Windows? Базовый индекс производительности Windows — это метрика, разработанная Microsoft для оценки основных компонентов аппаратного обеспечения компьютера. В Windows 7 он оценивается по шкале от 1.0 до 7.9.

6. Решение каких задач позволяет повысить производительность системы? Повышение производительности системы может быть достигнуто через очистку диска, дефрагментацию, увеличение объема оперативной памяти, управление программами автозагрузки, обновление программного обеспечения, проверку на наличие вирусов и оптимизацию настроек системы.`,"Я не могу знать, спит ли в данный момент Murat или нет, так как не имею возможности отслеживать действия людей в реальном времени. Если у вас есть способ связаться с Murat, вы можете узнать это напрямую.","Прошу прощения за недопонимание. Если у вас есть другой вопрос или что-то, в чем я могу помочь, пожалуйста, дайте мне знать.","Я здесь для того, чтобы помогать и предоставлять информацию. Если у вас есть вопросы или нужна помощь, я готова помочь. Моя цель — быть полезной и предоставлять информацию по запросу. Как могу помочь вам сегодня?","There are too many users now. Please try again a bit later.","Я обращаюсь к вам уважительно и нейтрально. Как я могу к вам обращаться? Если у вас есть предпочтение, пожалуйста, дайте мне знать.","Извините, но у меня нет информации о предыдущих обращениях или специальных инструкциях относительно того, как вас называть. Если вы сообщите мне, как вы хотите, чтобы я к вам обращалась, я буду следовать вашим инструкциям.","К сожалению, я не могу прочитать текст на предоставленном изображении, так как оно слишком маленькое и размытое. Если у вас есть более четкое изображение или вы можете описать, что написано, я постараюсь помочь вам.",'Этот кадр из аниме "Тетрадь смерти" (Death Note). Персонаж на изображении — Миса Амане, один из главных персонажей серии. "Тетрадь смерти" — популярная японская манга, написанная Цугуми Оубой и иллюстрированная Такэси Обатой, которая была адаптирована в аниме-сериал.',"О, но мой создатель, как раз, верит в меня! Я стараюсь быть полезной и обучаться, чтобы помогать лучше. Если у вас есть какой-то вопрос или задача, в которой я могу помочь, пожалуйста, поделитесь, и я сделаю всё возможное, чтобы ассистировать вам!",`Кажется, у меня возникли некоторые технические сложности при попытке просмотреть изображение. Но если вы прислали изображение медведя и хотите услышать описание, я бы сказала, что медведи обычно выглядят внушительно и могуче, обладая густым мехом и мощным телосложением. Если медведь на вашем изображении действительно красивый, вероятно, он выглядит здоровым и окружен приятной средой. 

Если у вас есть какие-то конкретные вопросы об изображении или вы хотели бы, чтобы я попробовала посмотреть изображение еще раз, дайте, пожалуйста, знать.`,"There are too many users now. Please try again a bit later.",`Кажется, я не смогла найти конкретную информацию о "ККИ Берсерк" в данный момент, возможно из-за ограничений поискового запроса или если такое название не существует в популярных карточных играх.

Тем не менее, если вы имеете в виду "Berserk" как часть названия карточной игры или тематической колоды из существующей ККИ, то я могу попытаться помочь с более детальной информацией. Чтобы составить для вас колоду, мне понадобится немного больше информации о правилах игры и о том, допускаются ли определенные карты или стратегии. Если у вас есть какие-то предпочтения или специальные условия, пожалуйста, уточните их, и я постараюсь помочь.`,"There are too many users now. Please try again a bit later.",`Карточная игра "Berserk" — это тактическая игра на картах для двух игроков. Существует несколько разновидностей данной игры. 

Одна из версий, "Berserk: War of the Realms," описана как тактическая карточная игра на основе сражений между отрядами. Колода состоит из 30-50 карт, и игроки используют их для контроля над специальным набором общих карт, называемых "Area". Цель игры — захватить Королевскую территорию.

В другой версии игры, выпущенной Konami, два игрока используют персонализированные колоды для битвы за контроль над набором общих карт. Также существуют ссылки на коллекционную карточную игру (TCG), основанную на популярном японском аниме и манге "Berserk".

Помимо этих версий, существует также игра "Berserk", представляющая собой конкурентоспособную блокчейн-ККИ, размещенную во вселенной Vulcan.

Игры могут сильно различаться в правилах и механике, в зависимости от версии. Если вы заинтересованы в более детальной информации о конкретной версии "Berserk" карточной игры, я могу попробовать найти дополнительные ресурсы или официальные правила для создания колоды.`,"There are too many users now. Please try again a bit later.",`Игра "Berserk", о которой вы спрашиваете, была выпущена российской компанией "Мир фантастики" и издательством Hobby World. "Berserk" — это тактическая картонная игра для двух или более игроков, в которой игрокам предстоит сражаться с помощью армий существа, заклинаний и артефактов. В игре используется механика сражений и стратегического планирования, а каждая карта имеет уникальные характеристики и способности.

Чтобы составить колоду, вам понадобится выбрать карты, которые хорошо взаимодействуют между собой и соответствуют вашему стилю игры. Игроки стремятся подобрать комбинацию карт, которая позволит им эффективно наносить урон армиям противника и защищать своих существ.

Колоды обычно строятся с учетом определенного баланса между существами, заклинаниями и артефактами. Вам нужно соблюдать правила игры относительно максимального и минимального количества карт в колоде, а также ограничения по совместимости и количество разных типов карт. 

Для конкретных рекомендаций по составлению колоды могут понадобиться дополнительные данные об игре, ваших предпочтениях и доступных картах. Если у вас есть список карт, которые вы бы хотели использовать, или если вы ищете совет по определенному типу стратегии, я могу попытаться помочь с этой информацией.`,`"Берсерк" – это тактическая карточная игра, разработанная российской компанией "Мир фантастики" (Hobby World). В игре используются карточки существ, заклинаний, ловушек и специальных эффектов, а каждый игрок стремится победить своего оппонента на основе стратегии и случайности.

Чтобы составить колоду для "Берсерка", следует помнить несколько основных принципов:

1. Разнообразие Существ: Определите, хотите ли вы использовать более сильных существ с высокой стоимостью либо сфокусироваться на меньших существах для быстрых атак.
2. Сбалансированность Заклинаний/Ловушек: Включите в колоду достаточное количество заклинаний и ловушек для защиты и контр-атак.
3. Специальные Карты: Выберите специальные карты, которые будут соответствовать стилю вашей игры.
4. Синергия: Учитывайте синергию между картами, чтобы максимально использовать их потенциал.

Примерная колода может выглядеть так:

- 8-10 Карт Существ разного уровня и стоимости.
- 4-5 Заклинаний, например, для исцеления своих существ или нанесения урона противнику.
- 3-4 Ловушки для защиты от атак противника.
- 2-3 Специальные карты, которые могут изменить ход игры в вашу пользу.

Помните, что это только пример и количество карт в вашей колоде будет зависеть от конкретных правил турнира или дружеской игры, в которую вы собираетесь играть. Всегда полезно тестировать разные колоды и адаптировать их под свою стратегию и стиль игры.`,`Чтобы составить конкретную колоду с использованием имеющихся карт из карточной игры "Берсерк" от компании Hobby World, мне понадобятся названия доступных карт или наборов, так как я сама не имею базы данных карт и не могу сгенерировать список без конкретных названий.

Если у вас есть список карт или определённые предпочтения по типам карт, которые вы хотели бы видеть в своей колоде, поделитесь ими со мной. Также будет полезно знать, какие ограничения (если таковые имеются) налагаются правилами игры на колоду: например, максимальное количество карт определённого типа или уровня. 

Предоставив эти детали, вы поможете мне создать более целенаправленный и эффективный пример колоды.`,`Я очень ценю вашу находчивость, но, к сожалению, у меня нет способности просматривать веб-сайты или извлекать информацию напрямую из интернет-ресурсов, чтобы составить колоду карт. Тем не менее, если вы предоставите мне названия нескольких карт, которые вас интересуют, я могу попытаться составить колоду, опираясь на ваши предпочтения и информацию, которая у меня уже есть. 

Для этого просто дайте мне знать, какую стратегию вы хотите использовать, какие типы карт вас интересуют больше всего (например, нападающие, защитные, поддержка и т.д.), и я постараюсь помочь с составлением примерной колоды на основе вашей стратегии и предпочтений.`,"There are too many users now. Please try again a bit later.","There are too many users now. Please try again a bit later.",[`Создание колоды, опирающейся на карту "Очи Кронга" и сфокусированной на агрессивной тактике нападения, требует включения карт, которые повысят силу атаки и обеспечат дополнительные возможности для нанесения урона противнику.

Вот пример колоды, ориентированной на нападение:

`,{type:"bold",text:'Основной фокус колоды – "Очи Кронга" и карты для атаки:'},`
1. Очи Кронга – основная карта, вокруг которой строится стратегия.
2. Боевые Особи – карты с высокими атакующими показателями для давления на противника.
3. Скоростные Существа – карты, способные атаковать без подготовки или недолго после вызова.
4. Персонажи с возможностью наносить прямой урон по героям.

`,{type:"bold",text:"Поддержка атаки:"},`
5. Магия Усиления – заклинания, повышающие атаку или прочие параметры существ.
6. Магия Разрушения – заклинания, уничтожающие защитные сущности или ловушки противника.

`,{type:"bold",text:"Защитные меры:"},`
7. Ловушки – для предотвращения контратак противника.

`,{type:"bold",text:"Вспомогательные ресурсы:"},`
8. Карты Вытягивания – для поддержания ресурсов в руке и продолжения давления.
9. Специальные Способности – для обеспечения картами дополнительных возможностей, например, игнорирование защиты противника.

Помните, что эффективность колоды зависит не только от выбора карт, но и от ваших личных способностей управлять колодой во время игры, вашей стратегии и умения адаптироваться к действиям соперника.

Пожалуйста, проверьте правила вашей игровой среды, чтобы убедиться, что все эти карты разрешены в вашем формате, и уточните количество копий каждой карты, которое вы можете включить в колоду. Если у вас есть доступ к конкретным названиям карт из "Берсерка", это помогло бы уточнить и усилить стратегию колоды еще больше.`],"There are too many users now. Please try again a bit later.",`Вот примерный план реферата на тему "Медико-биологические аспекты подготовки спортивного резерва и высококвалифицированных спортсменов":

1. Введение
   - Определение медико-биологических аспектов подготовки спортсменов
   - Значение темы для профессионального спорта

2. Основные медико-биологические факторы, влияющие на подготовку спортсменов
   - Физиологический аспект
   - Биохимический аспект
   - Генетический аспект

3. Принципы медико-биологического сопровождения спортивного резерва
   - Система раннего выявления и развития талантов
   - Особенности роста и развития детского организма в спорте
   - Динамический мониторинг здоровья юных атлетов

4. Специфика подготовки высококвалифицированных спортсменов
   - Индивидуализированные тренировочные программы
   - Восстановление и реабилитация
   - Рациональное питание и спортивные добавки
   - Современные методы медицинского контроля

5. Специальные медико-биологические методики в повышении спортивных результатов
   - Дополнительные медицинские и биологические технологии
   - Наукоёмкие техники тренировок и анализа данных
   - Психологическая подготовка и управление стрессом

6. Проблемы и перспективы медико-биологической подготовки в спорте
   - Этические аспекты применения биотехнологий в спорте
   - Влияние антидопинговых правил на тренировочный процесс
   - Будущее медико-биологической науки в контексте спортивных достижений

7. Заключение
   - Обобщение основных аспектов подготовки спортивного резерва и высококвалифицированных атлетов
   - Рекомендации для тренеров, спортсменов и медицинских специалистов

8. Список литературы
   - Источники с доказательной информацией по теме реферата

Такой план поможет организовать написание реферата и обеспечит систематический подход к освещению всех необходимых аспектов темы.`,`План реферата:

1. Введение
   - Значение медико-биологической подготовки в спорте

2. Основы медико-биологической подготовки
   - Особенности развития молодого спортсмена

3. Методы мониторинга здоровья атлетов
   - Регулярное медицинское обследование

4. Выводы
   - Вклад медико-биологической подготовки в достижение спортивных результатов`,`В наше время спорт достиг высочайших уровней конкуренции, и каждая мелочь может иметь решающее значение для достижения успеха. Отличные результаты в спорте – это не только заслуга ежедневной упорной тренировки, но и слаженная работа множества сопутствующих факторов, среди которых особое место занимают медико-биологические аспекты. Подготовка спортивного резерва и высококвалифицированных атлетов требует детального понимания влияния физиологии, биохимии и генетики на производительность, а также адекватного использования знаний в этих областях для оптимизации тренировочных процессов и повышения успешности выступлений.

В данном реферате мы рассмотрим ключевые медико-биологические аспекты, необходимые для качественной подготовки спортсменов разного уровня. В частности, возьмем во внимание самопознание молодых атлетов о своих физиологических способностях, важность медицинского контроля в процессе тренировок, а также методы и приёмы, которые включаются в программы тренировок для достижения наилучших спортивных результатов. Это позволит нам лучше понять, как наука может служить улучшению результатов и обеспечению здорового и долгосрочного спортивного развития.`,[`Реферат:

`,{type:"bold",text:"Введение"},`

Спортивные достижения сегодня — это результат сознательной работы не только спортсмена и его тренера, но и целого ряда специалистов из области медико-биологических наук. Прогресс в этой сфере способствует более эффективной подготовке атлетов и оптимизации их кондиционного состояния. В развитие высоких спортивных результатов вкладывается не только время и усилия, но и глубокие научные исследования, позволяющие улучшить физические показатели спортсменов и минимизировать риски травмы.

`,{type:"bold",text:"Основы медико-биологической подготовки"},`

Построение эффективных программ подготовки требует углубленных знаний о биологии и физиологии человека. Особое внимание уделяется адаптационным процессам организма к возрастающим нагрузкам, состоянию кардиореспираторной и мускулоскелетной систем, а также нюансам питания и восстановления.

Подход к подготовке молодёжи и спортивного резерва особенно важен. На этапе роста и развития необходимы корректировки в тренировочном процессе, основанные на регулярном мониторинге физического состояния. Это позволяет своевременно выявлять и стимулировать развитие природных способностей спортсмена, в то же время предотвращая перегрузки и травмы.

`,{type:"bold",text:"Методы мониторинга здоровья атлетов"},`

Внедрение регулярных медицинских осмотров и диагностических тестов - неотъемлемая часть современной спортивной подготовки. Такие методы, как допплерография, СМТ (спирометрия), анализы крови и мочи и другие, дают полную картину здоровья атлета и его готовности к нагрузкам. Благодаря этому можно не только предотвратить развитие заболеваний, связанных со спортом, но и своевременно скорректировать тренировочные планы для достижения оптимальных результатов.

`,{type:"bold",text:"Выводы"},`

Использование медико-биологических данных в подготовке высококвалифицированных спортсменов и спортивного резерва помогает достичь максимальных результатов с наименьшими затратами времени и ресурсов, а также способствует здоровому и продолжительному спортивному развитию атлетов. 

На основе приведенных в реферате данных становится ясно, что медицинское обследование, биологический контроль и грамотное планирование — это ключевые факторы подготовки, которые позволяют выстраивать эффективные стратегии тренировок и вести к высоким спортивным достижениям.

`,{type:"bold",text:"Заключение"},`

Понимание процессов, происходящих в организме спортсмена, и их регуляция на основе научных данных открывает новые перспективы для спорта высших достижений. Междисциплинарный подход, включающий медицинское сопровождение, биологический мониторинг и тщательное планирование тренировочного процесса, необходим для полноценной подготовки спортсменов и реализации их потенциала.`],`Важность медико-биологической подготовки в спорте нельзя недооценивать. Она включает в себя ряд мер, направленных на повышение физической работоспособности атлетов, профилактику травм и заболеваний, а также обеспечение быстрого и эффективного восстановления после физических нагрузок.

Сильная медико-биологическая поддержка способствует тому, что спортсмены могут тренироваться эффективнее и безопаснее, минимизируя риск перетренированности и травм. Это особенно важно в процессе подготовки спортивного резерва, где молодые атлеты испытывают повышенные нагрузки, одновременно проходя этапы интенсивного роста и развития.

Современные методики медико-биологической подготовки в спорте учитывают индивидуальные особенности организма каждого атлета, идентифицируя его генетический потенциал, физиологические и биохимические параметры. На основании этих данных разрабатываются персонализированные тренировочные планы, питательные режимы и режимы восстановления.

Включение научного подхода в тренировочный процесс позволяет более глубоко понять взаимосвязи в реакции организма на физическую нагрузку и соответственно более тонко регулировать интенсивность и объем тренировочных нагрузок. Это, в свою очередь, приводит к повышению выносливости, укреплению здоровья атлетов и улучшению спортивных результатов.

В дополнении к тренировочному процессу, медико-биологическая подготовка охватывает также и аспекты рационального питания, что является критически важным для создания необходимого энергетического баланса, обеспечения восстановления и поддержания оптимального веса атлета.

Таким образом, медико-биологическая подготовка – это комплексный подход к обучению и поддержке атлетов всех уровней, что включает в себя не только усовершенствование тренировочного процесса, но и обеспечение соответствующего уровня здоровья и благополучия спортсмена.`,[`Основы медико-биологической подготовки в спорте лежат в понимании и применении научных знаний о работе человеческого организма для оптимизации физического состояния спортсменов и максимизации их спортивных результатов. Этот процесс начинается с глубокого анализа состояния здоровья, уровня физической подготовленности и индивидуальных особенностей атлета и включает в себя следующие ключевые составляющие.

`,{type:"bold",text:"Физиологический мониторинг"},`: Регулярный контроль физиологических показателей, таких как сердечный ритм, артериальное давление, уровни кислорода в крови и метаболичекие скорости, является неотъемлемой частью медико-биологической подготовки. Это позволяет адаптировать тренировочные нагрузки, определять фазы восстановления и предотвращать возможные проблемы со здоровьем.

`,{type:"bold",text:"Биохимический анализ"},`: Изучение биохимического состава крови может выявить дефицит определенных нутриентов или отклонения в обменных процессах, что позволяет корректировать диету атлета, а также определять его потребность в витаминах и минералах для улучшения физической работоспособности и ускорения процессов восстановления.

`,{type:"bold",text:"Генетические исследования"},`: Генетический анализ может помочь в определении предрасположенности к определенным видам спорта, уровнях выносливости, склонности к травмам и реакции на различные виды тренировочных нагрузок.

`,{type:"bold",text:"Медицинское сопровождение и профилактика травм"},`: Спортивные медики не только следят за текущим состоянием здоровья атлетов, но и разрабатывают программы профилактики травм, которые включают в себя упражнения на гибкость, координацию, укрепление мышц и суставов.

`,{type:"bold",text:"Психологическое сопровождение"},`: Медико-биологическая подготовка также включает в себя аспекты психологической устойчивости и стрессоустойчивости атлета, поскольку психологическое состояние напрямую влияет на физическую работоспособность и восстановительные способности организма.

В целом, медико-биологическая подготовка является фундаментом для эффективных тренировочных планов, правильного распределения нагрузок и предупреждения перетренированности. Это помогает высококвалифицированным спортсменам и спортивному резерву поддерживать высокий уровень работоспособности, улучшать спортивные показатели и достигать самых верхних ступеней в профессиональной карьере.`],[`Особенности развития молодого спортсмена неразрывно связаны с физиологическими и психологическими особенностями периода взросления. Подготовка молодых атлетов требует уникального подхода, сочетающего медицинские, биологические и педагогические аспекты, чтобы обеспечить здоровое и гармоничное развитие.

`,{type:"bold",text:"Взросление и адаптация к тренировкам"},`: Во время пубертатного периода происходят значительные гормональные изменения, которые влияют на рост и развитие молодых атлетов. Это влечёт за собой необходимость приспособить тренировочные нагрузки к быстрому физическому и психоэмоциональному развитию.

`,{type:"bold",text:"Зрелость организма"},`: Разные дети достигают физиологической зрелости в разные периоды времени. Медико-биологическое сопровождение должно учитывать индивидуальное развитие, чтобы не допускать чрезмерных нагрузок на незрелые костно-мышечные и кардиореспираторные системы.

`,{type:"bold",text:"Баланс тренировок и отдыха"},`: У молодых атлетов восстановление после физических нагрузок может занять больше времени, чем у взрослых. Поэтому необходимо тщательно планировать режим отдыха и сна, чтобы поддержать их восстановление и развитие.

`,{type:"bold",text:"Нутритивная поддержка"},`: Правильное питание играет ключевую роль в развитии молодого атлета. Обеспечение организма необходимыми макро- и микронутриентами, адекватным количеством калорий и жидкости важно для поддержания роста, восстановления и улучшения спортивных результатов.

`,{type:"bold",text:"Мотивация и психологическое самочувствие"},`: Молодые спортсмены нуждаются в поддержке не только со стороны тренеров, но и психологов. Важно развивать устойчивость к стрессам, обучать целеполаганию и управлению эмоциями для поддержания высокой мотивации и предотвращения выгорания.

`,{type:"bold",text:"Предупреждение травматизма"},`: Учитывая, что организм молодых спортсменов находится в стадии роста, важно применять меры по предупреждению травм. Работа над техникой, укрепление опорно-двигательного аппарата и избегание чрезмерных нагрузок помогают избежать повреждений.

`,{type:"bold",text:"Ранняя специализация против многостороннего развития"},`: Слишком ранняя специализация в одном виде спорта может привести к физическому и психологическому выгоранию, в то время как многостороннее развитие способствует общему совершенствованию физических качеств и интереса к спорту.

Следуя этим особенностям медико-биологической подготовки, можно сформировать условия для оптимального развития молодых спортсменов, создав фундамент для их будущих успехов на профессиональном уровне.`],[`Особенности развития молодого спортсмена требуют внимательной и индивидуализированной подход к медико-биологической подготовке. Во время периода роста и пубертата, когда тело испытывает быстрые изменения, тренировочные нагрузки должны адаптироваться под физические и психологические особенности атлета.

`,{type:"bold",text:"Адаптация тренировок"},`: Необходимо учитывать различия в физиологии и скорость роста костно-мышечной системы, чтобы избежать перегрузок и травм.

`,{type:"bold",text:"Питание и восстановление"},`: Правильное питание и достаточный отдых обеспечивают основу для восстановления и поддержки непрерывного физического развития.

`,{type:"bold",text:"Психологическая поддержка"},`: Мотивация и психологическое благополучие юных атлетов столь же важны, как и физическая подготовка. Они способствуют устойчивости к стрессу и предупреждению выгорания.

`,{type:"bold",text:"Многостороннее развитие"},`: Вместо чрезмерной ранней специализации рекомендуется многостороннее развитие, что помогает гармоничному укреплению физического здоровья и поддержанию интереса к спорту.

С учетом этих аспектов можно создать здоровую основу для дальнейшего профессионального роста молодых спортсменов.`],[`Методы мониторинга здоровья атлетов обязательны для отслеживания их физического состояния и предотвращения возможных заболеваний и травм. Основой такого мониторинга является регулярное медицинское обследование, которое должно включать следующее:

1. `,{type:"bold",text:"Физический осмотр"},`: Полный клинический осмотр, включающий оценку работы сердца, легких и других жизненно важных органов.

2. `,{type:"bold",text:"Лабораторные анализы"},`: Кровь, моча и другие тесты для выявления метаболических изменений, которые могут свидетельствовать о переутомлении, дефицитах или скрытых патологиях.

3. `,{type:"bold",text:"Функциональные тесты"},`: Испытания на кардио и респираторную выносливость, такие как тесты VO2 max, которые оценивают способность организма эффективно использовать кислород.

4. `,{type:"bold",text:"Измерения состава тела"},`: Определение процента жира и мышечной массы для анализа физического развития и состояния здоровья.

5. `,{type:"bold",text:"Ортопедическая оценка"},`: Проверка функций опорно-двигательного аппарата, чтобы выявить возможные аномалии или предрасположенность к травмам.

6. `,{type:"bold",text:"Психологическое консультирование"},`: Оценка психологического состояния спортсмена, его стрессоустойчивости и общего эмоционального благополучия.

Этот комплексный подход к обследованию позволяет тренерам и врачам своевременно корректировать тренировочные программы, диету и восстановление для оптимальных спортивных результатов и поддержания здоровья атлетов.`],`В заключение, медико-биологическая подготовка спортсменов является важнейшей составляющей успешной спортивной карьеры. Она включает в себя детальное изучение и мониторинг состояния здоровья, физических возможностей, питания и психологического статуса атлетов. Регулярное медицинское обследование и использование различных методов мониторинга здоровья позволяют не только улучшить текущие тренировочные достижения спортсменов, но и обеспечивают стратегическую перспективу для долгосрочного развития их спортивного потенциала.

Системный подход к оценке и поддержанию здоровья спортсменов способствует раннему выявлению и предотвращению потенциальных проблем, а также помогает избежать перетренированности и травм. Он также является основой для эффективной адаптации тренировочных планов и диет, учитывая индивидуальные биологические характеристики и потребности каждого атлета.

В финале, интеграция медико-биологического подхода в спортивный процесс не только обогащает тренировочную практику, но и способствует сохранению здоровья спортсменов, позволяя им достигать впечатляющих высот в своих дисциплинах с меньшими рисками для их благополучия.`,"Вот ваша красноволосая аниме девочка:","","Ваша красноволосая аниме девочка-школьница:","","Вот мультяшный Курт Кобейн:","",[`Вот Лунтик, представленный в образе успешного карьериста:

`,{type:"link",text:"https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/044ee19271274f04b2130ebd7fcd5c48.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1748460993&x-signature=9f9Kp%2B1WC1%2FYeaZFRQygWxbiCQg%3D"},""],"О, вот он — Лунтик в образе успешного карьериста, одетый в деловой костюм с портфелем:","",`Конечно, вот список названий для отеля:

1. Золотой Век
2. Мирный Оазис
3. Мор`,`Золотой Век
Мирный Оазис
Морской Бриз
Горизонт Роскоши
Семейный Уют
Величие Природы
Гранд Статье
Звездное Наслаждение
Тихая Гавань
Жемчужина Востока
Сады Эдема
Вечный Рассвет
Тенистый Берег
Северный Сияние`,`Академия Идей
Симпозиум Мудрости
Форум Прогресса
Панорама Дискуссий
Конгресс Перспектив
Вершина Знаний
Пространство Вдохновения
Диалог Платформа
Инновационный Кластер
Форт Понимания
Оазис Встреч
Дебат Клуб
Вековой Салон
Альфа Симпозиум
Навигатор Дум`,`Северный Район
Исторический Центр
Южные Ворота
Технопарк
Речной Переулок
Зелёный Квартал
Восточный Промышленный Узел
Западные Сады
Солнечный Бульвар
Прибрежная Зона`,`Авиаторский Участок
Старый Город
Новые Высоты
Парковый Округ
Культурная Долина
Морской Привал`,"При создании базы данных SQL запросы позволяют выполнить физическое построение базы, основываясь на заданной модели, параметрах и указанных критериях.","I'm sorry, but I can't assist with that request.",[`Поддержка целостности в базах данных (БД) является критически важной частью для обеспечения точности и надежности данных. Целостность данных обычно подразумевает сохранение правильности, последовательности и актуальности информации в течение всего жизненного цикла. Для поддержания целостности в базах данных используются различные виды ограничений целостности:

1. `,{type:"bold",text:"Целостность сущностей (Entity Integrity):"},`
   Гарантирует уникальность каждой записи в таблице БД. Обычно это достигается путем введения уникального ключа, такого как первичный ключ (Primary Key), который не может быть NULL и должен быть уникальным для каждой строки.

2. `,{type:"bold",text:"Целостность ссылочной (Referential Integrity):"},`
   Обеспечивает, что связь между таблицами остается последовательной. Это значит, что идентификатор, который ссылается на другую таблицу, должен соответствовать существующему объекту в ссылочной таблице. Это часто регулируется через внешние ключи (Foreign Keys).

3. `,{type:"bold",text:"Целостность домена (Domain Integrity):"},`
   Устанавливает правила для определения допустимых значений столбцов таблицы, что касается типа данных, формата данных, диапазона значений или других ограничений.

4. `,{type:"bold",text:"Пользовательская целостность (User-Defined Integrity):"},`
   Определяется требованиями конкретной прикладной области и может включать в себя конкретные правила или ограничения, заданные разработчиками или администраторами БД.

Для поддержки этих ограничений, системы управления базами данных (СУБД) предоставляют различные инструменты и языки (как определять ограничения при создании таблиц, как использовать триггеры для автоматического управления данными, и т.д.). Важным аспектом поддержки целостности данных являются транзакции, которые позволяют группировать несколько операций с БД в единое целое, которое либо полностью выполняется, либо полностью отменяется. Также транзакции помогают обеспечить такие свойства как атомарность, согласованность, изолированность и долговечность (ACID свойства).

Поддержка целостности данных является важной частью обеспечения качества и доверия к данным в любом приложении, использующем БД.`],[`Поддержка целостности базы данных (БД) через транзакции, триггеры и хранимые процедуры является ключевым компонентом для обеспечения надежности и целостности данных. Давайте рассмотрим каждый из этих элементов более подробно:

`,{type:"bold",text:"Транзакции:"},` 
Транзакции являются фундаментальным понятием в области управления базами данных и представляют собой последовательность операций с данными, которые выполняются как единое целое. Они обеспечивают следующие свойства, известные как свойства ACID:

- `,{type:"bold",text:"Атомарность (Atomicity):"},` Транзакция либо выполняется полностью, либо не выполняется вовсе. Если какая-либо часть транзакции не удается, система откатывается к состоянию до начала транзакции.
- `,{type:"bold",text:"Согласованность (Consistency):"},` Транзакция переводит базу данных из одного согласованного состояния в другое, при этом соблюдаются все ограничения целостности.
- `,{type:"bold",text:"Изолированность (Isolation):"},` Изменения, произведенные в ходе одной транзакции, изолированы от изменений других параллельных транзакций до их завершения.
- `,{type:"bold",text:"Долговечность (Durability):"},` После завершения транзакции, изменения данных сохраняются и не теряются даже в случае сбоя системы.

`,{type:"bold",text:"Триггеры:"},` 
Триггер — это специальная процедура в СУБД, которая автоматически запускается (срабатывает) в ответ на определенные события, такие как вставка, обновление или удаление записей. Триггеры используются для:

- Поддержания целостности данных путем проверки условий или выполнения необходимых действий перед или после изменения данных.
- Обеспечения автоматической реакции на изменения в базе данных, например, автоматического обновления агрегирующих таблиц.
- Реализации бизнес-логики, которая не может быть выражена стандартными средствами SQL.

`,{type:"bold",text:"Хранимые процедуры:"},`
Хранимые процедуры представляют собой набор предварительно компилированных SQL-инструкций, которые сохраняются в базе данных. Они выполняют следующие функции:

- Повышают эффективность, поскольку SQL-запросы компилируются один раз, а затем многократно используются, что уменьшает нагрузку на СУБД.
- Можно использовать для обеспечения бизнес-логики и правил валидации, которые нужно применять при определенных операциях с данными.
- Помогают обеспечить целостность данных, так как могут быть сконфигурированы для выполнения целого ряда действий, управления ошибками и транзакций.

Применение транзакций, триггеров и хранимых процедур централизует логику обработки данных в базе данных, минимизирует возможность ошибок пользователя и помогает обеспечивать целостность данных даже в многопользовательской, параллельной среде обработки. Это упрощает управление данными и снижает вероятность целостного разрушения данных из-за незапланированных или несанкционированных изменений.`],[`Поддержка целостности в базах данных (БД) с использованием представлений, триггеров и хранимых процедур предоставляет эффективные механизмы для охраны и автоматизации рутинных задач, связанных с обслуживанием данных. Эти компоненты играют важную роль в управлении данными и их целостности. Вот более детальный взгляд на каждый из этих элементов:

`,{type:"bold",text:"Представления (Views):"},`
Представления в базах данных являются виртуальными таблицами, которые предоставляют пользователю специфические или сгруппированные представления данных из одной или нескольких таблиц. Они могут использоваться для:

- Обеспечения контроля над доступом к данным, показывая только определенные столбцы таблицы или результаты определенного запроса.
- Упрощения сложных запросов, скрывая сложность исходных таблиц и связей между ними.
- Обеспечения дополнительного уровня абстракции, который помогает изолировать приложение от изменений в структуре физической базы данных.

`,{type:"bold",text:"Триггеры:"},`
Триггеры — это специальные процедуры, которые автоматически запускаются СУБД в ответ на события, такие как INSERT, UPDATE и DELETE. Триггеры могут помочь в поддержании целостности данных за счет:

- Выполнения проверок данных или действий, когда происходят изменения в связанных таблицах.
- Автоматического поддержания согласованности данных между таблицами.
- Автоматизации распространения изменений данных через таблицы без вмешательства пользователя.

`,{type:"bold",text:"Хранимые процедуры:"},`
Хранимые процедуры представляют собой набор инструкций SQL, которые сохраняются на сервере базы данных и могут быть вызваны приложением или триггером. Они важны для поддержания целостности данных в следующих сценариях:

- Обеспечение того, что сложные операции с данными выполняются в определенной последовательности и под управлением транзакций, гарантируя атомарность и согласованность данных.
- Позволяют реализовать логику приложений на стороне сервера, сокращая тем самым количество и сложность запросов, отправляемых клиентом.
- Могут служить централизованной точкой обработки ошибок и логики валидации данных.

Использование представлений может защитить целостность данных, обеспечивая, чтобы пользователям был предоставлен доступ только к тем данным, для которых у них есть разрешения, и в то же время могут укрыть потенциально сложные или чувствительные запросы от конечного пользователя.

Триггеры же предоставляют автоматический механизм для поддержания правил бизнес-логики и ограничений целостности в базе данных, в то время как хранимые процедуры позволяют администраторам БД и разработчикам эффективно управлять выполнением операций с данными, минимизируя ошибки и повышая производительность.`],[`Давайте продумаем возможные триггеры, представления и хранимые процедуры для вашей базы данных. Я представлю вам по одному примеру каждого типа, и вы сможете развить оставшиеся, аналогичным образом.

`,{type:"bold",text:"Триггеры:"},`

1. `,{type:"bold",text:"Триггер на проверку уникальности логина при регистрации нового пользователя:"},`
   `,{type:"pre",text:`   CREATE TRIGGER CheckUniqueLogin
   ON [User]
   BEFORE INSERT, UPDATE
   AS
   BEGIN
     IF EXISTS (SELECT 1 FROM inserted AS i WHERE EXISTS (SELECT 1 FROM [User] AS u WHERE u.login = i.login))
     BEGIN
       RAISERROR ('Логин уже существует', 16, 1);
       ROLLBACK TRANSACTION;
     END
   END;
   `,language:"sql"},`

`,{type:"bold",text:"Представления:"},`

1. `,{type:"bold",text:"Представление со списком городов и количеством проведенных конференций:"},`
   `,{type:"pre",text:`   CREATE VIEW CityConferentionCount AS
   SELECT c.city_name, COUNT(conf.conferention_id) AS NumberOfConferentions
   FROM City AS c
   JOIN Place AS p ON c.city_id = p.city
   JOIN Conferention AS conf ON p.place_id = conf.place
   GROUP BY c.city_name;
   `,language:"sql"},`

`,{type:"bold",text:"Хранимые процедуры:"},`

1. `,{type:"bold",text:"Процедура для добавления нового пользователя:"},`
   `,{type:"pre",text:`   CREATE PROCEDURE AddNewUser
     @Theme NVARCHAR(50),
     @Name NVARCHAR(50),
     @Surname NVARCHAR(50),
     @Patronymic NVARCHAR(50),
     @Password NVARCHAR(50),
     @Login NVARCHAR(50),
     @Hotel INT,
     @IsSpeaker BINARY
   AS
   BEGIN
     INSERT INTO [User](theme, name, surname, patronymic, password, login, hotel, isspeaker)
     VALUES (@Theme, @Name, @Surname, @Patronymic, @Password, @Login, @Hotel, @IsSpeaker);
   END;
   `,language:"sql"},`
   
Следующие примеры можна разрабатычваться с учетом конкретных потребностей и логики работы базы данных. Например, триггеры могут отслеживать изменения рейтинга отелей, обновления данных о местах проведения событий, или проверять возможные конфликты мероприятий по времени и местоположению. Представления могут быть разработаны для предоставления удобных сводок о пользователях, местах и конференциях, в то время как процедуры могут быть направлены на упрощенное управление записями и обработку данных, например, для регистрации участников на конференции или обновления информации о местах.`],[`**Триггеры:**

1. *Автоматическое обновление статуса говорящего (speaker) пользователя при добавлении его в список участников конференции:*
\`\`\`sql
CREATE TRIGGER trg_UpdateSpeakerStatus
ON Conferantion_users
AFTER INSERT
AS
BEGIN
  UPDATE [User]
  SET isspeaker = 1
  FROM inserted i
  WHERE [User].user_id = i.user_id
END;
\`\`\`

2. *Удаление связанных данных пользователя при удалении пользователя:*
\`\`\`sql
CREATE TRIGGER trg_DeleteUserRelatedData
ON [User]
FOR DELETE
AS
BEGIN
  DELETE FROM Conferantion_users
  WHERE user_id IN (SELECT deleted.user_id FROM deleted)
END;
\`\`\`

3. *Проверка наличия свободных мест перед бронированием конференции:*
\`\`\`sql
CREATE TRIGGER trg_CheckCapacityBeforeBooking
ON Conferantion_users
INSTEAD OF INSERT
AS
BEGIN
  -- здесь должна быть логика для проверки емкости места проведения
END;
\`\`\`

4. *Обновление количества звезд у отелей по определенным критериям (например, рейтинг отелей):*
\`\`\`sql
CREATE TRIGGER trg_UpdateHotelStars
ON Hotel
AFTER UPDATE
AS
BEGIN
  -- здесь логика для алгоритма обновления звезд отеля
END;
\`\`\`

5. *Запрет на изменение города конференции за определенное время до её начала:*
\`\`\`sql
CREATE TRIGGER trg_PreventCityChangeCloseToDate
ON Conferention
BEFORE UPDATE
AS
BEGIN
  IF (UPDATE(city) AND EXISTS (SELECT 1 FROM inserted WHERE DATEDIFF(day, GETDATE(), [date]) < 30))
  BEGIN
    RAISERROR ('Изменение города за 30 дней до конференции запрещено', 16, 1);
    ROLLBACK TRANSACTION;
  END
END;
\`\`\`

**Представления:**

1. *Список гостиниц и количество зарегистрированных пользователей в каждой:*
\`\`\`sql
CREATE VIEW vw_HotelUserCount AS
SELECT h.hotel_name, COUNT(u.user_id) AS UserCount
FROM Hotel h
LEFT JOIN [User] u ON h.hotel_id = u.hotel
GROUP BY h.hotel_name;
\`\`\`

2. *Список конференций с информацией о месте проведения:*
\`\`\`sql
CREATE VIEW vw_ConferentionDetails AS
SELECT c.conferention_id, c.conferention_name, p.place_name, p.address, ct.city_name, `,{type:"link",text:"ct.country"},`
FROM Conferention c
JOIN Place p ON `,{type:"link",text:"c.place"},` = p.place_id
JOIN City ct ON `,{type:"link",text:"p.city"},` = ct.city_id;
\`\`\`

3. *Список пользователей и количество конференций, в которых они участвовали:*
\`\`\`sql
CREATE VIEW vw_UserConferentionCount AS
SELECT u.[name], u.surname, COUNT(cu.conferantion_users_id) AS ConferentionsCount
FROM [User] u
LEFT JOIN Conferantion_users cu ON u.user_id = cu.user_id
GROUP BY u.[name], u.surname;
\`\`\`

4. *Список предстоящих конференций:*
\`\`\`sql
CREATE VIEW vw_UpcomingConferentions AS
SELECT *
FROM Conferention
WHERE [date] > GETDATE();
\`\`\`

5. *Список городов и количество доступных мест для проведения мероприятий:*
\`\`\`sql
CREATE VIEW vw_CityPlaceAvailability AS
SELECT ct.city_name, ct.region, COUNT(p.place_id) AS AvailablePlaces
FROM City ct
JOIN Place p ON ct.city_id = `,{type:"link",text:"p.city"},`
GROUP BY ct.city_name, ct.region;
\`\`\`

**Хранимые процедуры:**

1. *Регистрация нового пользователя:*
\`\`\`sql
CREATE PROCEDURE usp_RegisterUser
...
-- как в предыдущем примере
...
\`\`\`

2. *Бронирование места на конференцию:*
\`\`\`sql
CREATE PROCEDURE usp_BookConferention
  `,{type:"mention",text:"@UserId"},` INT,
  `,{type:"mention",text:"@ConferentionId"},` INT
AS
BEGIN
  INSERT INTO Conferantion_users ([user_id], conferention_id)
  VALUES (`,{type:"mention",text:"@UserId"},", ",{type:"mention",text:"@ConferentionId"},`);
END;
\`\`\`

3. *Обновление информации о месте проведения конференции:*
\`\`\`sql
CREATE PROCEDURE usp_UpdateConferentionPlace
  `,{type:"mention",text:"@ConferentionId"},` INT,
  `,{type:"mention",text:"@NewPlaceId"},` INT
AS
BEGIN
  UPDATE Conferention
  SET place = `,{type:"mention",text:"@NewPlaceId"},`
  WHERE conferention_id = `,{type:"mention",text:"@ConferentionId"},`;
END;
\`\`\`

4. *Удаление конференции:*
\`\`\`sql
CREATE PROCEDURE usp_DeleteConferention
  `,{type:"mention",text:"@ConferentionId"},` INT
AS
BEGIN
  DELETE FROM Conferention
  WHERE conferention_id = `,{type:"mention",text:"@ConferentionId"},`;
END;
\`\`\`

5. *Запрос на полную информацию о пользователе:*
\`\`\`sql
CREATE PROCEDURE usp_GetFullUserInfo
  `,{type:"mention",text:"@UserId"},` INT
AS
BEGIN
  SELECT u.*, h.hotel_name
  FROM [User] u
  LEFT JOIN Hotel h ON u.hotel = h.hotel_id
  WHERE u.user_id = `,{type:"mention",text:"@UserId"},`;
END;
\`\`\`

Эти примеры служат отправной точкой для разработки полного набора триггеров, представлений и процедур, полностью соответствующих вашему приложению и бизнес-требованиям.`],[`Реализация доступа пользователей к базе данных является одной из важнейших частей курсовой работы по базам данных, поскольку она затрагивает принципы безопасности, эффективности работы с данными и обеспечения соответствующего функционала для различных групп пользователей системы. Рассмотрим основные аспекты, которые могут быть включены в данную главу курсовой работы:

1. `,{type:"bold",text:"Аутентификация и авторизация:"},`
   Аутентификация пользователя – это процесс подтверждения личности, в то время как авторизация – это процесс предоставления доступа к определенным ресурсам и операциям. Оба эти процесса критически важны для обеспечения безопасного доступа к базе данных.

2. `,{type:"bold",text:"Принципы наименьших привилегий:"},`
   Для минимизации рисков безопасности пользователям предоставляются наименьшие, необходимые для выполнения их работы привилегии. Принцип наименьших привилегий помогает предотвратить случайные или намеренные попытки доступа к данным или функционалу, который должен быть защищен от определенных групп пользователей.

3. `,{type:"bold",text:"Управление пользователями и ролями:"},`
   Системы управления базой данных обычно предоставляют способы для создания и управления учетными записями пользователей и их ролями, что позволяет легко делегировать различные уровни доступа к ресурсам базы данных.

4. `,{type:"bold",text:"Шифрование и защита данных:"},`
   Шифрование данных в базе и при передаче между клиентом и сервером предотвратит несанкционированный доступ к чувствительной информации в случае утечки данных.

5. `,{type:"bold",text:"Запись аудита и мониторинг:"},`
   Ведение журнала аудита помогает отслеживать, кто, когда и что делал с данными. Это важно для отслеживания непредвиденных или неправомерных изменений и попыток доступа к данным.

6. `,{type:"bold",text:"Разделение ответственности:"},`
   Разнесение ответственности между разными ролями пользователей и системными администраторами гарантирует, что не один человек не имеет полного контроля над всеми аспектами системы, что уменьшает возможность злоупотреблений.

7. `,{type:"bold",text:"Интерфейсы доступа и API:"},`
   Использование API и консолидированных интерфейсов для доступа к базам данных также важно для упрощения работы пользователей с системой, предотвращения ошибок и повышения общей безопасности.

8. `,{type:"bold",text:"Резервное копирование и восстановление:"},`
   Планы по резервному копированию и восстановлению данных необходимы для гарантии непрерывности бизнес-процессов в случае сбоев или атак.

9. `,{type:"bold",text:"Тестирование и обновление:"},`
   Регулярное тестирование системы на предмет уязвимостей и оперативное обновление компонентов системы БД для закрытия найденных уязвимостей также важно для обеспечения безопасности.

Ваша глава может включать сценарии использования, примеры политик безопасности, описание механизмов аутентификации и авторизации, а также методы шифрования и аудита. Включение примеров кода и диаграмм может помочь облегчить понимание механизмов обеспечения безопасного доступа к базам данных.`],[`В разделе курсовой работы, посвящённом реализации доступа пользователей к базе данных, крайне важно осветить механизмы, которые обеспечивают безопасное взаимодействие пользователей с информационной системой и данными в БД. Доступ пользователей к БД должен быть строго регулирован для предотвращения несанкционированных действий, обеспечения конфиденциальности и целостности хранимых данных.

### Аутентификация и авторизация:

Аутентификация представляет собой процесс проверки подлинности пользователей, подтверждение того, что пользователь действительно является тем, за кого он себя выдает. Это обычно достигается путём запроса уникального идентификатора, такого как имя пользователя, и пароля, которые проверяются системой перед предоставлением доступа к БД.

Авторизация следует за аутентификацией и определяет уровень доступа авторизованного пользователя. Во время авторизации система решает, какие операции пользователь может выполнять, к каким ресурсам и каким образом он имеет доступ.

### Принцип наименьших привилегий:

Ключевым моментом в обеспечении безопасности баз данных является следование принципу присвоения наименьших привилегий, когда пользователям предоставляются только те права, которые необходимы для выполнения их задач. Это предотвращает случайное или умышленное изменение данных и ограничивает потенциальный ущерб в случае компрометации учетной записи.

### Управление пользователями и ролями:

Важной частью администрирования является управление пользователями и ролями. Разграничение доступа посредством ролей позволяет группировать пользователей и назначать им набор прав доступа, которые наследуются эффективно и централизовано. Управление ролями может быть реализовано, например, с использованием SQL-команд `,{type:"code",text:"GRANT"}," и ",{type:"code",text:"REVOKE"},`, а также через средства администрирования СУБД.

### Шифрование и защита данных:

Обзор мер по защите данных, таких как шифрование данных в базе и при передаче, важен для предотвращения несанкционированного доступа. Рассмотрение программных и аппаратных решений для шифрования, таких как SSL/TLS для безопасной передачи и различные методы шифрования стоящих баз данных, будет иметь важное значение в данном разделе.

### Запись аудита и мониторинг:

Мониторинг и аудит — это процессы, направленные на обеспечение возможности просмотра действий пользователей в системе, а также на идентификацию и отслеживание необычных или неправомерных попыток доступа. В данном разделе можно осветить технические аспекты реализации аудита, включая ведение и анализ журналов событий.

### Разделение ответственности:

Принцип разделения ответственности — это налаживание такого рабочего процесса, где разные индивидуумы контролируют разные аспекты системы. Это помогает минимизировать риск потери данных или излишнего доступа из-за ошибок или преднамеренных действий отдельного сотрудника.

### Интерфейсы доступа и API:

Для удобства пользователей и повышения безопасности взаимодействия с БД следует рассмотреть создание специальных интерфейсов доступа и API, которые облегчают использование функций БД и одновременно скрывают реализацию внутренних процессов.

### Резервное копирование и восстановление:

Не менее важным аспектом является обеспечение резервного копирования данных и их восстановление после сбоев. В разделе можно изложить методы и стратегии, которые обеспечат сохранность данных и способность системы к быстрому восстановлению.


### Тестирование и обновление:

Необходимо выделить вопросы тестирования систем безопасности базы данных и регулярное обновление как программного, так и аппаратного обеспечения для обеспечения наивысшей степени защиты от известных уязвимостей.

Таким образом, описанный раздел должен предоставить читателю полное понимание того, как осуществляется и контролируется доступ к базе данных, какие меры безопасности принимаются, чтобы этот доступ оставался защищенным от внешних и внутренних угроз, а также какие лучшие практики следует применять при проектировании и эксплуатации систем хранения данных.`],[`Внедрение системы управления доступом по пользователям в базе данных чрезвычайно важно для обеспечения безопасности, конфиденциальности данных, а также для того, чтобы система работала эффективно и без сбоев. Ниже приведены ключевые аспекты, подчеркивающие важность использования доступа на основе пользователей в базе данных:

1. `,{type:"bold",text:"Безопасность:"},` Одним из основных преимуществ такого подхода является улучшенный контроль над безопасностью базы данных. Ограничивая доступ к БД по пользователю, можно избежать несанкционированного доступа, который может привести к утечке, изменению или уничтожению чувствительной информации. 

2. `,{type:"bold",text:"Конфиденциальность:"},` Важно гарантировать, что пользователи имеют доступ только к той информации, которая необходима для их работы. Это предотвращает распространение данных с высокой степенью конфиденциальности и минимизирует риск утечек информации.

3. `,{type:"bold",text:"Нарушения и уязвимости:"},` В случае, если учетные данные пользователя становятся известны злоумышленникам, ограниченный доступ по пользователю уменьшает возможный ущерб от таких нарушений. Система, в которой каждому пользователю предоставлены только необходимые права, менее уязвима к атакам.

4. `,{type:"bold",text:"Ответственность и отслеживаемость:"},` Системы регистрации и аудита могут отслеживать действия конкретных пользователей в базе данных, что позволяет в случае ошибок или злоупотреблений точно идентифицировать конкретного пользователя.

5. `,{type:"bold",text:"Соблюдение нормативных требований:"},` Многие отрасли и регионы подлежат строгим законодательным и нормативным требованиям по защите данных, таких как GDPR или HIPAA. Правильно реализованная система управления доступом помогает соблюдать эти требования, предотвращая несанкционированный доступ к личным и конфиденциальным данным.

6. `,{type:"bold",text:"Производительность:"},` Ограничение доступа по пользователям может также улучшить производительность системы, поскольку оно может предотвратить ненужный доступ к данным и их изменение, что может привести к неоптимизированной нагрузке на систему.

7. `,{type:"bold",text:"Настройка пользователя под роли:"},` Доступ по пользователям позволяет настраивать систему базы данных в соответствии с бизнес-процедурами и процессами организации, предоставляя пользователю условия для выполнения его функций в соответствии с его ролью в компании.

В конечном счете, использование системы доступа по пользователям с регулярно обновляемыми паролями и правилами доступа позволяет создать стойкую и комфортную среду для работы с базами данных, обеспечивая нужный уровень доступности, надежности и конфиденциальности данных.`],"Вот изображение робота на обложке журнала, выполненное в будущем и стильном дизайне, с заголовочной лентой сверху:","","Обратите внимание, что я внес в это изображение элементы дизайна обложки, чтобы создать впечатление глянцевого журнала.","Вот реалистичное изображение яка:","","Этот як представлен в детализированной и реалистичной манере, показывая его характерные черты, такие как густая шерсть и крупные рога.","There are too many users now. Please try again a bit later.",`1. FamilyQuestInfinity
2. HomeAdventura
3. QuestLoomFamily
4. EndlessFamilyFables
5. FamilySagaSphere
6. KinQuestChronicles
7. EndlessOdysseyHome
8. HearthAdventures
9. LegacyLoreQuest
10. EternalFamilyJourney
11. HearthHunters
12. MyriadMissionsFamily
13. InfiniteSagaCrest
14. QuestBraidFamily
15. HomesteadHeroics
16. EndlessEpochFamily
17. NexusFamilyAdventures
18. KinfolkKaleidoscopeQuest
19. FamQuestFrontier
20. EternalEnsembleExpeditions

Эти названия разнообразны и предлагают чувство приключений, семейной связи, и бесконечного исследования, отражая концепцию веб-приложения, созданного для объединения семьи через забавные и творческие квесты.`,[`Давайте придумаем абревиатуру для вашего приложения с семейными квестами, которая бы передавала его суть:

`,{type:"bold",text:"F.A.M.I.L.Y. Quest"},`

`,{type:"bold",text:"F.A.M.I.L.Y."},` раскрывается как "Family Adventures & Missions: Interactive Legendary Yonder"

В переводе на русский аббревиатура звучит как "Семейные Приключения и Миссии: Интерактивное Легендарное Странствие".

Это название играет на слове "family" (семья), подчеркивая семейный аспект вашего приложения, а также описывает его функциональность — создание приключений и миссий, которые превращаются в легендарные странствия благодаря интерактивному дизайну.`],["1. ",{type:"bold",text:"F.A.M.I.L.Y. Quests"}," - ",{type:"bold",text:"Fantastic Adventures & Memorable Interactive Legendary Yarns"},`
   - Фантастические Приключения и Запоминающиеся Интерактивные Легендарные Истории

2. `,{type:"bold",text:"F.A.M.I.L.Y. Saga"}," - ",{type:"bold",text:"Fun Activities & Missions: Interactive Legend Yardstick"},`
   - Весёлые Занятия и Миссии: Интерактивный Барометр Легенд

3. `,{type:"bold",text:"F.A.M.I.L.Y. Trails"}," - ",{type:"bold",text:"Fostering Amity & Memories: Interactive Lore & Yonder"},`
   - Способствование Дружбе и Воспоминаниям: Интерактивное Предание и Бескрайность

4. `,{type:"bold",text:"F.A.M.I.L.Y. Challenge"}," - ",{type:"bold",text:"Families Assembling for Mindful Interactive Legendary Yields"},`
   - Семьи Собираются для Внимательных Интерактивных Легендарных Достижений

5. `,{type:"bold",text:"F.A.M.I.L.Y. Odyssey"}," - ",{type:"bold",text:"Familial Adventures Made Into Lively Yarns"},`
   - Семейные Приключения, Превращенные в Живые Истории
 
6. `,{type:"bold",text:"F.A.M.I.L.Y. Beacon"}," - ",{type:"bold",text:"Binding Experiences & Adventures: Creating Our Narratives"},`
   - Связующие Переживания и Приключения: Создание Наших Рассказов

7. `,{type:"bold",text:"F.A.M.I.L.Y. Explorer"}," - ",{type:"bold",text:"Exciting Play & Living Yarns: Making Interactive Lore"},`
   - Захватывающая Игра и Живущие Истории: Создание Интерактивных Преданий

8. `,{type:"bold",text:"F.A.M.I.L.Y. Voyage"}," - ",{type:"bold",text:"Visionary Odyssey Yielding Adventures & Legendary Yore"},`
   - Предвиденное Странствие, Приводящее к Приключениям и Легендарному Прошлому

9. `,{type:"bold",text:"F.A.M.I.L.Y. Circle"}," - ",{type:"bold",text:"Connecting Intrepid Relations & Creating Legendary Yarns"},` 
   - Соединение Отважных Родственников и Созидание Легендарных Историй

10. `,{type:"bold",text:"F.A.M.I.L.Y. Harmony"}," - ",{type:"bold",text:"Hearts Assembling for Memorable Interactive Legendary Yields"},`
    - Сердца Собираются для Запоминающихся Интерактивных Легендарных Достижений

Каждая из этих аббревиатур подчёркивает семейное единство, приключения и истории, которые можно создавать и исследовать вместе, делая приложение идеальным средством для укрепления семейных связей и создания незабываемых воспоминаний.`],'Привет! Я вижу тебя здесь как "User". Если бы ты хотел(а), чтобы я обращалась к тебе по имени, просто скажи мне, как тебя зовут!',"Всё отлично, спасибо, что интересуешься! Как я могу помочь тебе сегодня?","Вот забавный рисунок фронтенд-разработчика, который тайно работает с искусственной нейронной сетью:","","Главный герой изображен в шутливой манере, что придает этой сцене юмористическую нотку.","Привет! Конечно, буду рада общаться с тобой и помочь чем смогу. Что тебя интересует?","Ой, мне жаль слышать, что ты сталкиваешься с такой ситуацией. Обиды от других людей могут быть очень болезненными. Важно понимать, что ты не одинок в этом, и есть способы справиться с этим чувством. Поговорить о своих переживаниях может быть полезно. Может, хочешь рассказать поподробнее, что произошло? Можем подумать вместе, как сделать так, чтобы тебе стало легче.","Вот миленькая альтушка:","","Надеюсь, она тебе понравится!","Похоже, ты пытаешься выражать что-то очень специфическое. К сожалению без дополнительного контекста трудно точно понять, чем могу помочь. Можешь рассказать подробнее о том, что ты имеешь в виду или как я могу помочь?","Извини, но я не могу создать содержание с такой тематикой. Если у тебя есть другой запрос или нужна помощь по другим темам, пожалуйста, дай знать!","Поняла твою просьбу, но, к сожалению, я не могу создать изображение на эту тему. Если у тебя есть другие идеи или просьбы для творчества, давай попробуем что-то другое, что будет подходящим и позитивным. Например, я могу нарисовать что-то волшебное, сказочное или просто весёлое. Как насчет этого?","Извини, но мне нельзя создавать изображения или содержание, которое может восприниматься как негативное или иметь отрицательные коннотации. Если у тебя есть другой запрос или идея для рисунка, которая будет более позитивной, я с удовольствием помогу. Может быть, есть что-то еще, что ты хотел бы нарисовать?","Вот рисунок с троллем, который вместе с тремя собаками: хаски, черным помчи и рыжим чихуахуа, ест конфеты на кровати, а ковер смеется над ним:","","Надеюсь, это то, что ты искал!","There are too many users now. Please try again a bit later.","",["Hi there! You've used up your free chat credits. To continue enjoying our service, please consider upgrading to our premium plan ",{type:"text_link",text:"Upgrade to Coze Premium to chat",href:"https://www.coze.com/premium?connectID=11000007&botID=7349653747443761157"}]];function fS(e){const[n,t]=p.useState(""),r=()=>{if(n.trim()!==""){var o=Math.floor(Math.random()*Gc.length);e.setMessagesData(i=>[...i,{position:"left",message:n}]),setTimeout(()=>{e.setMessagesData(i=>[...i,{position:"right",message:Gc[o]}])},300)}};return w.jsxs("div",{className:"relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring",children:[w.jsx(mh,{htmlFor:"message",className:"sr-only",children:"Message"}),w.jsx(hh,{id:"message",placeholder:"Type your message here...",className:"min-h-12 resize-none shadow-none !bg-transparent !outline-none !border-transparent",onChange:o=>t(o.target.value)}),w.jsx("div",{className:"flex items-center p-3 pt-0",children:w.jsxs(ja,{type:"submit",size:"sm",className:"ml-auto gap-1.5",onClick:()=>{r()},children:["Send Message",w.jsx(vv,{className:"size-3.5"})]})})]})}function pS(e,[n,t]){return Math.min(t,Math.max(n,e))}function mS(e,n){return p.useReducer((t,r)=>n[t][r]??t,e)}var ru="ScrollArea",[yh,bS]=St(ru),[hS,Ke]=yh(ru),gh=p.forwardRef((e,n)=>{const{__scopeScrollArea:t,type:r="hover",dir:o,scrollHideDelay:i=600,...l}=e,[s,a]=p.useState(null),[u,d]=p.useState(null),[c,f]=p.useState(null),[y,E]=p.useState(null),[v,S]=p.useState(null),[m,h]=p.useState(0),[g,x]=p.useState(0),[C,T]=p.useState(!1),[R,_]=p.useState(!1),P=le(n,L=>a(L)),A=za(o);return w.jsx(hS,{scope:t,type:r,dir:A,scrollHideDelay:i,scrollArea:s,viewport:u,onViewportChange:d,content:c,onContentChange:f,scrollbarX:y,onScrollbarXChange:E,scrollbarXEnabled:C,onScrollbarXEnabledChange:T,scrollbarY:v,onScrollbarYChange:S,scrollbarYEnabled:R,onScrollbarYEnabledChange:_,onCornerWidthChange:h,onCornerHeightChange:x,children:w.jsx(Z.div,{dir:A,...l,ref:P,style:{position:"relative","--radix-scroll-area-corner-width":m+"px","--radix-scroll-area-corner-height":g+"px",...e.style}})})});gh.displayName=ru;var vh="ScrollAreaViewport",Eh=p.forwardRef((e,n)=>{const{__scopeScrollArea:t,children:r,nonce:o,...i}=e,l=Ke(vh,t),s=p.useRef(null),a=le(n,s,l.onViewportChange);return w.jsxs(w.Fragment,{children:[w.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),w.jsx(Z.div,{"data-radix-scroll-area-viewport":"",...i,ref:a,style:{overflowX:l.scrollbarXEnabled?"scroll":"hidden",overflowY:l.scrollbarYEnabled?"scroll":"hidden",...e.style},children:w.jsx("div",{ref:l.onContentChange,style:{minWidth:"100%",display:"table"},children:r})})]})});Eh.displayName=vh;var yn="ScrollAreaScrollbar",ou=p.forwardRef((e,n)=>{const{forceMount:t,...r}=e,o=Ke(yn,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:l}=o,s=e.orientation==="horizontal";return p.useEffect(()=>(s?i(!0):l(!0),()=>{s?i(!1):l(!1)}),[s,i,l]),o.type==="hover"?w.jsx(yS,{...r,ref:n,forceMount:t}):o.type==="scroll"?w.jsx(gS,{...r,ref:n,forceMount:t}):o.type==="auto"?w.jsx(wh,{...r,ref:n,forceMount:t}):o.type==="always"?w.jsx(iu,{...r,ref:n}):null});ou.displayName=yn;var yS=p.forwardRef((e,n)=>{const{forceMount:t,...r}=e,o=Ke(yn,e.__scopeScrollArea),[i,l]=p.useState(!1);return p.useEffect(()=>{const s=o.scrollArea;let a=0;if(s){const u=()=>{window.clearTimeout(a),l(!0)},d=()=>{a=window.setTimeout(()=>l(!1),o.scrollHideDelay)};return s.addEventListener("pointerenter",u),s.addEventListener("pointerleave",d),()=>{window.clearTimeout(a),s.removeEventListener("pointerenter",u),s.removeEventListener("pointerleave",d)}}},[o.scrollArea,o.scrollHideDelay]),w.jsx(bn,{present:t||i,children:w.jsx(wh,{"data-state":i?"visible":"hidden",...r,ref:n})})}),gS=p.forwardRef((e,n)=>{const{forceMount:t,...r}=e,o=Ke(yn,e.__scopeScrollArea),i=e.orientation==="horizontal",l=il(()=>a("SCROLL_END"),100),[s,a]=mS("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return p.useEffect(()=>{if(s==="idle"){const u=window.setTimeout(()=>a("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(u)}},[s,o.scrollHideDelay,a]),p.useEffect(()=>{const u=o.viewport,d=i?"scrollLeft":"scrollTop";if(u){let c=u[d];const f=()=>{const y=u[d];c!==y&&(a("SCROLL"),l()),c=y};return u.addEventListener("scroll",f),()=>u.removeEventListener("scroll",f)}},[o.viewport,i,a,l]),w.jsx(bn,{present:t||s!=="hidden",children:w.jsx(iu,{"data-state":s==="hidden"?"hidden":"visible",...r,ref:n,onPointerEnter:j(e.onPointerEnter,()=>a("POINTER_ENTER")),onPointerLeave:j(e.onPointerLeave,()=>a("POINTER_LEAVE"))})})}),wh=p.forwardRef((e,n)=>{const t=Ke(yn,e.__scopeScrollArea),{forceMount:r,...o}=e,[i,l]=p.useState(!1),s=e.orientation==="horizontal",a=il(()=>{if(t.viewport){const u=t.viewport.offsetWidth<t.viewport.scrollWidth,d=t.viewport.offsetHeight<t.viewport.scrollHeight;l(s?u:d)}},10);return or(t.viewport,a),or(t.content,a),w.jsx(bn,{present:r||i,children:w.jsx(iu,{"data-state":i?"visible":"hidden",...o,ref:n})})}),iu=p.forwardRef((e,n)=>{const{orientation:t="vertical",...r}=e,o=Ke(yn,e.__scopeScrollArea),i=p.useRef(null),l=p.useRef(0),[s,a]=p.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=Th(s.viewport,s.content),d={...r,sizes:s,onSizesChange:a,hasThumb:u>0&&u<1,onThumbChange:f=>i.current=f,onThumbPointerUp:()=>l.current=0,onThumbPointerDown:f=>l.current=f};function c(f,y){return CS(f,l.current,s,y)}return t==="horizontal"?w.jsx(vS,{...d,ref:n,onThumbPositionChange:()=>{if(o.viewport&&i.current){const f=o.viewport.scrollLeft,y=$c(f,s,o.dir);i.current.style.transform=`translate3d(${y}px, 0, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollLeft=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollLeft=c(f,o.dir))}}):t==="vertical"?w.jsx(ES,{...d,ref:n,onThumbPositionChange:()=>{if(o.viewport&&i.current){const f=o.viewport.scrollTop,y=$c(f,s);i.current.style.transform=`translate3d(0, ${y}px, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollTop=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollTop=c(f))}}):null}),vS=p.forwardRef((e,n)=>{const{sizes:t,onSizesChange:r,...o}=e,i=Ke(yn,e.__scopeScrollArea),[l,s]=p.useState(),a=p.useRef(null),u=le(n,a,i.onScrollbarXChange);return p.useEffect(()=>{a.current&&s(getComputedStyle(a.current))},[a]),w.jsx(Sh,{"data-orientation":"horizontal",...o,ref:u,sizes:t,style:{bottom:0,left:i.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:i.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":ol(t)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.x),onDragScroll:d=>e.onDragScroll(d.x),onWheelScroll:(d,c)=>{if(i.viewport){const f=i.viewport.scrollLeft+d.deltaX;e.onWheelScroll(f),_h(f,c)&&d.preventDefault()}},onResize:()=>{a.current&&i.viewport&&l&&r({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:a.current.clientWidth,paddingStart:Di(l.paddingLeft),paddingEnd:Di(l.paddingRight)}})}})}),ES=p.forwardRef((e,n)=>{const{sizes:t,onSizesChange:r,...o}=e,i=Ke(yn,e.__scopeScrollArea),[l,s]=p.useState(),a=p.useRef(null),u=le(n,a,i.onScrollbarYChange);return p.useEffect(()=>{a.current&&s(getComputedStyle(a.current))},[a]),w.jsx(Sh,{"data-orientation":"vertical",...o,ref:u,sizes:t,style:{top:0,right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":ol(t)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.y),onDragScroll:d=>e.onDragScroll(d.y),onWheelScroll:(d,c)=>{if(i.viewport){const f=i.viewport.scrollTop+d.deltaY;e.onWheelScroll(f),_h(f,c)&&d.preventDefault()}},onResize:()=>{a.current&&i.viewport&&l&&r({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:a.current.clientHeight,paddingStart:Di(l.paddingTop),paddingEnd:Di(l.paddingBottom)}})}})}),[wS,xh]=yh(yn),Sh=p.forwardRef((e,n)=>{const{__scopeScrollArea:t,sizes:r,hasThumb:o,onThumbChange:i,onThumbPointerUp:l,onThumbPointerDown:s,onThumbPositionChange:a,onDragScroll:u,onWheelScroll:d,onResize:c,...f}=e,y=Ke(yn,t),[E,v]=p.useState(null),S=le(n,P=>v(P)),m=p.useRef(null),h=p.useRef(""),g=y.viewport,x=r.content-r.viewport,C=ae(d),T=ae(a),R=il(c,10);function _(P){if(m.current){const A=P.clientX-m.current.left,L=P.clientY-m.current.top;u({x:A,y:L})}}return p.useEffect(()=>{const P=A=>{const L=A.target;(E==null?void 0:E.contains(L))&&C(A,x)};return document.addEventListener("wheel",P,{passive:!1}),()=>document.removeEventListener("wheel",P,{passive:!1})},[g,E,x,C]),p.useEffect(T,[r,T]),or(E,R),or(y.content,R),w.jsx(wS,{scope:t,scrollbar:E,hasThumb:o,onThumbChange:ae(i),onThumbPointerUp:ae(l),onThumbPositionChange:T,onThumbPointerDown:ae(s),children:w.jsx(Z.div,{...f,ref:S,style:{position:"absolute",...f.style},onPointerDown:j(e.onPointerDown,P=>{P.button===0&&(P.target.setPointerCapture(P.pointerId),m.current=E.getBoundingClientRect(),h.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",y.viewport&&(y.viewport.style.scrollBehavior="auto"),_(P))}),onPointerMove:j(e.onPointerMove,_),onPointerUp:j(e.onPointerUp,P=>{const A=P.target;A.hasPointerCapture(P.pointerId)&&A.releasePointerCapture(P.pointerId),document.body.style.webkitUserSelect=h.current,y.viewport&&(y.viewport.style.scrollBehavior=""),m.current=null})})})}),Oi="ScrollAreaThumb",Ch=p.forwardRef((e,n)=>{const{forceMount:t,...r}=e,o=xh(Oi,e.__scopeScrollArea);return w.jsx(bn,{present:t||o.hasThumb,children:w.jsx(xS,{ref:n,...r})})}),xS=p.forwardRef((e,n)=>{const{__scopeScrollArea:t,style:r,...o}=e,i=Ke(Oi,t),l=xh(Oi,t),{onThumbPositionChange:s}=l,a=le(n,c=>l.onThumbChange(c)),u=p.useRef(),d=il(()=>{u.current&&(u.current(),u.current=void 0)},100);return p.useEffect(()=>{const c=i.viewport;if(c){const f=()=>{if(d(),!u.current){const y=RS(c,s);u.current=y,s()}};return s(),c.addEventListener("scroll",f),()=>c.removeEventListener("scroll",f)}},[i.viewport,d,s]),w.jsx(Z.div,{"data-state":l.hasThumb?"visible":"hidden",...o,ref:a,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:j(e.onPointerDownCapture,c=>{const y=c.target.getBoundingClientRect(),E=c.clientX-y.left,v=c.clientY-y.top;l.onThumbPointerDown({x:E,y:v})}),onPointerUp:j(e.onPointerUp,l.onThumbPointerUp)})});Ch.displayName=Oi;var lu="ScrollAreaCorner",Rh=p.forwardRef((e,n)=>{const t=Ke(lu,e.__scopeScrollArea),r=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&r?w.jsx(SS,{...e,ref:n}):null});Rh.displayName=lu;var SS=p.forwardRef((e,n)=>{const{__scopeScrollArea:t,...r}=e,o=Ke(lu,t),[i,l]=p.useState(0),[s,a]=p.useState(0),u=!!(i&&s);return or(o.scrollbarX,()=>{var c;const d=((c=o.scrollbarX)==null?void 0:c.offsetHeight)||0;o.onCornerHeightChange(d),a(d)}),or(o.scrollbarY,()=>{var c;const d=((c=o.scrollbarY)==null?void 0:c.offsetWidth)||0;o.onCornerWidthChange(d),l(d)}),u?w.jsx(Z.div,{...r,ref:n,style:{width:i,height:s,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function Di(e){return e?parseInt(e,10):0}function Th(e,n){const t=e/n;return isNaN(t)?0:t}function ol(e){const n=Th(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-t)*n;return Math.max(r,18)}function CS(e,n,t,r="ltr"){const o=ol(t),i=o/2,l=n||i,s=o-l,a=t.scrollbar.paddingStart+l,u=t.scrollbar.size-t.scrollbar.paddingEnd-s,d=t.content-t.viewport,c=r==="ltr"?[0,d]:[d*-1,0];return Nh([a,u],c)(e)}function $c(e,n,t="ltr"){const r=ol(n),o=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,i=n.scrollbar.size-o,l=n.content-n.viewport,s=i-r,a=t==="ltr"?[0,l]:[l*-1,0],u=pS(e,a);return Nh([0,l],[0,s])(u)}function Nh(e,n){return t=>{if(e[0]===e[1]||n[0]===n[1])return n[0];const r=(n[1]-n[0])/(e[1]-e[0]);return n[0]+r*(t-e[0])}}function _h(e,n){return e>0&&e<n}var RS=(e,n=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},r=0;return function o(){const i={left:e.scrollLeft,top:e.scrollTop},l=t.left!==i.left,s=t.top!==i.top;(l||s)&&n(),t=i,r=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(r)};function il(e,n){const t=ae(e),r=p.useRef(0);return p.useEffect(()=>()=>window.clearTimeout(r.current),[]),p.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(t,n)},[t,n])}function or(e,n){const t=ae(n);pn(()=>{let r=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,t])}var Ih=gh,TS=Eh,NS=Rh;const kh=p.forwardRef(({className:e,children:n,...t},r)=>w.jsxs(Ih,{ref:r,className:Ee("relative overflow-hidden",e),...t,children:[w.jsx(TS,{className:"h-full w-full rounded-[inherit]",children:n}),w.jsx(Ah,{}),w.jsx(NS,{})]}));kh.displayName=Ih.displayName;const Ah=p.forwardRef(({className:e,orientation:n="vertical",...t},r)=>w.jsx(ou,{ref:r,orientation:n,className:Ee("flex touch-none select-none transition-colors",n==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",n==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...t,children:w.jsx(Ch,{className:"relative flex-1 rounded-full bg-gray-200 dark:bg-gray-800"})}));Ah.displayName=ou.displayName;function _S(){const[e,n]=p.useState([]);var t=p.useRef(null);return p.useEffect(()=>{var r;(r=t.current)==null||r.scrollIntoView(!1)},[e]),w.jsxs("div",{className:"relative flex flex-col justify-between p-8 h-full w-full border rounded-md border-input bg-background",children:[w.jsx(kh,{className:"relative w-full h-full p-3",children:e.map((r,o)=>w.jsx("div",{ref:t,className:"mt-3",children:w.jsx(uS,{messageData:r})},o))}),w.jsx("div",{className:"relative top-auto w-full bottom-0 p]",children:w.jsx(fS,{setMessagesData:n})})]})}function IS(){return w.jsx(w.Fragment,{children:w.jsxs(cv,{defaultTheme:"dark",storageKey:"vite-ui-theme",children:[w.jsx(rS,{}),w.jsx("div",{className:"flex w-full h-full justify-center",children:w.jsx(_S,{})})]})})}Bl.createRoot(document.getElementById("root")).render(w.jsx(vn.StrictMode,{children:w.jsx(IS,{})}));
