function Hx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function bh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ih={exports:{}},$s={},kh={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ni=Symbol.for("react.element"),Wx=Symbol.for("react.portal"),Gx=Symbol.for("react.fragment"),$x=Symbol.for("react.strict_mode"),Kx=Symbol.for("react.profiler"),Yx=Symbol.for("react.provider"),Qx=Symbol.for("react.context"),Xx=Symbol.for("react.forward_ref"),qx=Symbol.for("react.suspense"),Zx=Symbol.for("react.memo"),Jx=Symbol.for("react.lazy"),_d=Symbol.iterator;function ew(e){return e===null||typeof e!="object"?null:(e=_d&&e[_d]||e["@@iterator"],typeof e=="function"?e:null)}var _h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dh=Object.assign,Mh={};function zr(e,t,n){this.props=e,this.context=t,this.refs=Mh,this.updater=n||_h}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oh(){}Oh.prototype=zr.prototype;function Vu(e,t,n){this.props=e,this.context=t,this.refs=Mh,this.updater=n||_h}var ju=Vu.prototype=new Oh;ju.constructor=Vu;Dh(ju,zr.prototype);ju.isPureReactComponent=!0;var Dd=Array.isArray,Lh=Object.prototype.hasOwnProperty,Bu={current:null},Fh={key:!0,ref:!0,__self:!0,__source:!0};function Vh(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Lh.call(t,r)&&!Fh.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ni,type:e,key:i,ref:s,props:o,_owner:Bu.current}}function tw(e,t){return{$$typeof:ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Uu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ni}function nw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Md=/\/+/g;function Aa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?nw(""+e.key):t.toString(36)}function Hi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ni:case Wx:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Aa(s,0):r,Dd(o)?(n="",e!=null&&(n=e.replace(Md,"$&/")+"/"),Hi(o,t,n,"",function(u){return u})):o!=null&&(Uu(o)&&(o=tw(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Md,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Dd(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+Aa(i,a);s+=Hi(i,t,n,l,o)}else if(l=ew(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+Aa(i,a++),s+=Hi(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function gi(e,t,n){if(e==null)return e;var r=[],o=0;return Hi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function rw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Wi={transition:null},ow={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Wi,ReactCurrentOwner:Bu};function jh(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:gi,forEach:function(e,t,n){gi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gi(e,function(){t++}),t},toArray:function(e){return gi(e,function(t){return t})||[]},only:function(e){if(!Uu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=zr;H.Fragment=Gx;H.Profiler=Kx;H.PureComponent=Vu;H.StrictMode=$x;H.Suspense=qx;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ow;H.act=jh;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dh({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Bu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Lh.call(t,l)&&!Fh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ni,type:e.type,key:o,ref:i,props:r,_owner:s}};H.createContext=function(e){return e={$$typeof:Qx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yx,_context:e},e.Consumer=e};H.createElement=Vh;H.createFactory=function(e){var t=Vh.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Xx,render:e}};H.isValidElement=Uu;H.lazy=function(e){return{$$typeof:Jx,_payload:{_status:-1,_result:e},_init:rw}};H.memo=function(e,t){return{$$typeof:Zx,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Wi.transition;Wi.transition={};try{e()}finally{Wi.transition=t}};H.unstable_act=jh;H.useCallback=function(e,t){return ke.current.useCallback(e,t)};H.useContext=function(e){return ke.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};H.useEffect=function(e,t){return ke.current.useEffect(e,t)};H.useId=function(){return ke.current.useId()};H.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return ke.current.useMemo(e,t)};H.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};H.useRef=function(e){return ke.current.useRef(e)};H.useState=function(e){return ke.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return ke.current.useTransition()};H.version="18.3.1";kh.exports=H;var h=kh.exports;const bt=bh(h),iw=Hx({__proto__:null,default:bt},[h]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sw=h,aw=Symbol.for("react.element"),lw=Symbol.for("react.fragment"),uw=Object.prototype.hasOwnProperty,cw=sw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dw={key:!0,ref:!0,__self:!0,__source:!0};function Bh(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)uw.call(t,r)&&!dw.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:aw,type:e,key:i,ref:s,props:o,_owner:cw.current}}$s.Fragment=lw;$s.jsx=Bh;$s.jsxs=Bh;Ih.exports=$s;var S=Ih.exports,El={},Uh={exports:{}},Ye={},zh={exports:{}},Hh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,P){var D=N.length;N.push(P);e:for(;0<D;){var j=D-1>>>1,G=N[j];if(0<o(G,P))N[j]=P,N[D]=G,D=j;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var P=N[0],D=N.pop();if(D!==P){N[0]=D;e:for(var j=0,G=N.length,mt=G>>>1;j<mt;){var Be=2*(j+1)-1,Qt=N[Be],Ne=Be+1,Me=N[Ne];if(0>o(Qt,D))Ne<G&&0>o(Me,Qt)?(N[j]=Me,N[Ne]=D,j=Ne):(N[j]=Qt,N[Be]=D,j=Be);else if(Ne<G&&0>o(Me,D))N[j]=Me,N[Ne]=D,j=Ne;else break e}}return P}function o(N,P){var D=N.sortIndex-P.sortIndex;return D!==0?D:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,v=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=N)r(u),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(u)}}function E(N){if(x=!1,y(N),!v)if(n(l)!==null)v=!0,V(C);else{var P=n(u);P!==null&&F(E,P.startTime-N)}}function C(N,P){v=!1,x&&(x=!1,m(T),T=-1),g=!0;var D=f;try{for(y(P),d=n(l);d!==null&&(!(d.expirationTime>P)||N&&!O());){var j=d.callback;if(typeof j=="function"){d.callback=null,f=d.priorityLevel;var G=j(d.expirationTime<=P);P=e.unstable_now(),typeof G=="function"?d.callback=G:d===n(l)&&r(l),y(P)}else r(l);d=n(l)}if(d!==null)var mt=!0;else{var Be=n(u);Be!==null&&F(E,Be.startTime-P),mt=!1}return mt}finally{d=null,f=D,g=!1}}var R=!1,A=null,T=-1,k=5,b=-1;function O(){return!(e.unstable_now()-b<k)}function M(){if(A!==null){var N=e.unstable_now();b=N;var P=!0;try{P=A(!0,N)}finally{P?K():(R=!1,A=null)}}else R=!1}var K;if(typeof p=="function")K=function(){p(M)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,B=W.port2;W.port1.onmessage=M,K=function(){B.postMessage(null)}}else K=function(){w(M,0)};function V(N){A=N,R||(R=!0,K())}function F(N,P){T=w(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,V(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var D=f;f=P;try{return N()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var D=f;f=N;try{return P()}finally{f=D}},e.unstable_scheduleCallback=function(N,P,D){var j=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?j+D:j):D=j,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=D+G,N={id:c++,callback:P,priorityLevel:N,startTime:D,expirationTime:G,sortIndex:-1},D>j?(N.sortIndex=D,t(u,N),n(l)===null&&N===n(u)&&(x?(m(T),T=-1):x=!0,F(E,D-j))):(N.sortIndex=G,t(l,N),v||g||(v=!0,V(C))),N},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(N){var P=f;return function(){var D=f;f=P;try{return N.apply(this,arguments)}finally{f=D}}}})(Hh);zh.exports=Hh;var fw=zh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pw=h,$e=fw;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wh=new Set,Io={};function qn(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(Io[e]=t,e=0;e<t.length;e++)Wh.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sl=Object.prototype.hasOwnProperty,hw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Od={},Ld={};function mw(e){return Sl.call(Ld,e)?!0:Sl.call(Od,e)?!1:hw.test(e)?Ld[e]=!0:(Od[e]=!0,!1)}function gw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yw(e,t,n,r){if(t===null||typeof t>"u"||gw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var zu=/[\-:]([a-z])/g;function Hu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zu,Hu);xe[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zu,Hu);xe[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zu,Hu);xe[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wu(e,t,n,r){var o=xe.hasOwnProperty(t)?xe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yw(t,n,o,r)&&(n=null),r||o===null?mw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yi=Symbol.for("react.element"),sr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),Cl=Symbol.for("react.profiler"),Gh=Symbol.for("react.provider"),$h=Symbol.for("react.context"),$u=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),Ku=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Kh=Symbol.for("react.offscreen"),Fd=Symbol.iterator;function Jr(e){return e===null||typeof e!="object"?null:(e=Fd&&e[Fd]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Pa;function co(e){if(Pa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pa=t&&t[1]||""}return`
`+Pa+e}var Na=!1;function ba(e,t){if(!e||Na)return"";Na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Na=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?co(e):""}function vw(e){switch(e.tag){case 5:return co(e.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return e=ba(e.type,!1),e;case 11:return e=ba(e.type.render,!1),e;case 1:return e=ba(e.type,!0),e;default:return""}}function Al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case sr:return"Portal";case Cl:return"Profiler";case Gu:return"StrictMode";case Tl:return"Suspense";case Rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $h:return(e.displayName||"Context")+".Consumer";case Gh:return(e._context.displayName||"Context")+".Provider";case $u:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ku:return t=e.displayName||null,t!==null?t:Al(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return Al(e(t))}catch{}}return null}function xw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Al(t);case 8:return t===Gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ww(e){var t=Yh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vi(e){e._valueTracker||(e._valueTracker=ww(e))}function Qh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xh(e,t){t=t.checked,t!=null&&Wu(e,"checked",t,!1)}function Nl(e,t){Xh(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||ls(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fo=Array.isArray;function Sr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Il(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(fo(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function qh(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ud(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xi,Jh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xi=xi||document.createElement("div"),xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ko(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ew=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(e){Ew.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yo[t]=yo[e]})});function em(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yo.hasOwnProperty(e)&&yo[e]?(""+t).trim():t+"px"}function tm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=em(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Sw=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(e,t){if(t){if(Sw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Dl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function Yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ol=null,Cr=null,Tr=null;function zd(e){if(e=ii(e)){if(typeof Ol!="function")throw Error(I(280));var t=e.stateNode;t&&(t=qs(t),Ol(e.stateNode,e.type,t))}}function nm(e){Cr?Tr?Tr.push(e):Tr=[e]:Cr=e}function rm(){if(Cr){var e=Cr,t=Tr;if(Tr=Cr=null,zd(e),t)for(e=0;e<t.length;e++)zd(t[e])}}function om(e,t){return e(t)}function im(){}var Ia=!1;function sm(e,t,n){if(Ia)return e(t,n);Ia=!0;try{return om(e,t,n)}finally{Ia=!1,(Cr!==null||Tr!==null)&&(im(),rm())}}function _o(e,t){var n=e.stateNode;if(n===null)return null;var r=qs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Ll=!1;if(jt)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Ll=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Ll=!1}function Cw(e,t,n,r,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var vo=!1,us=null,cs=!1,Fl=null,Tw={onError:function(e){vo=!0,us=e}};function Rw(e,t,n,r,o,i,s,a,l){vo=!1,us=null,Cw.apply(Tw,arguments)}function Aw(e,t,n,r,o,i,s,a,l){if(Rw.apply(this,arguments),vo){if(vo){var u=us;vo=!1,us=null}else throw Error(I(198));cs||(cs=!0,Fl=u)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function am(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hd(e){if(Zn(e)!==e)throw Error(I(188))}function Pw(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Hd(o),e;if(i===r)return Hd(o),t;i=i.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function lm(e){return e=Pw(e),e!==null?um(e):null}function um(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=um(e);if(t!==null)return t;e=e.sibling}return null}var cm=$e.unstable_scheduleCallback,Wd=$e.unstable_cancelCallback,Nw=$e.unstable_shouldYield,bw=$e.unstable_requestPaint,le=$e.unstable_now,Iw=$e.unstable_getCurrentPriorityLevel,Qu=$e.unstable_ImmediatePriority,dm=$e.unstable_UserBlockingPriority,ds=$e.unstable_NormalPriority,kw=$e.unstable_LowPriority,fm=$e.unstable_IdlePriority,Ks=null,Et=null;function _w(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ks,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Ow,Dw=Math.log,Mw=Math.LN2;function Ow(e){return e>>>=0,e===0?32:31-(Dw(e)/Mw|0)|0}var wi=64,Ei=4194304;function po(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=po(a):(i&=s,i!==0&&(r=po(i)))}else s=n&~o,s!==0?r=po(s):i!==0&&(r=po(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),o=1<<n,r|=e[n],t&=~o;return r}function Lw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-dt(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=Lw(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pm(){var e=wi;return wi<<=1,!(wi&4194240)&&(wi=64),e}function ka(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Vw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-dt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Xu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function hm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mm,qu,gm,ym,vm,jl=!1,Si=[],un=null,cn=null,dn=null,Do=new Map,Mo=new Map,on=[],jw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Do.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(t.pointerId)}}function to(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ii(t),t!==null&&qu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Bw(e,t,n,r,o){switch(t){case"focusin":return un=to(un,e,t,n,r,o),!0;case"dragenter":return cn=to(cn,e,t,n,r,o),!0;case"mouseover":return dn=to(dn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Do.set(i,to(Do.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Mo.set(i,to(Mo.get(i)||null,e,t,n,r,o)),!0}return!1}function xm(e){var t=Fn(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=am(n),t!==null){e.blockedOn=t,vm(e.priority,function(){gm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ml=r,n.target.dispatchEvent(r),Ml=null}else return t=ii(n),t!==null&&qu(t),e.blockedOn=n,!1;t.shift()}return!0}function $d(e,t,n){Gi(e)&&n.delete(t)}function Uw(){jl=!1,un!==null&&Gi(un)&&(un=null),cn!==null&&Gi(cn)&&(cn=null),dn!==null&&Gi(dn)&&(dn=null),Do.forEach($d),Mo.forEach($d)}function no(e,t){e.blockedOn===t&&(e.blockedOn=null,jl||(jl=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Uw)))}function Oo(e){function t(o){return no(o,e)}if(0<Si.length){no(Si[0],e);for(var n=1;n<Si.length;n++){var r=Si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&no(un,e),cn!==null&&no(cn,e),dn!==null&&no(dn,e),Do.forEach(t),Mo.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)xm(n),n.blockedOn===null&&on.shift()}var Rr=$t.ReactCurrentBatchConfig,ps=!0;function zw(e,t,n,r){var o=Q,i=Rr.transition;Rr.transition=null;try{Q=1,Zu(e,t,n,r)}finally{Q=o,Rr.transition=i}}function Hw(e,t,n,r){var o=Q,i=Rr.transition;Rr.transition=null;try{Q=4,Zu(e,t,n,r)}finally{Q=o,Rr.transition=i}}function Zu(e,t,n,r){if(ps){var o=Bl(e,t,n,r);if(o===null)Ua(e,t,r,hs,n),Gd(e,r);else if(Bw(o,e,t,n,r))r.stopPropagation();else if(Gd(e,r),t&4&&-1<jw.indexOf(e)){for(;o!==null;){var i=ii(o);if(i!==null&&mm(i),i=Bl(e,t,n,r),i===null&&Ua(e,t,r,hs,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ua(e,t,r,null,n)}}var hs=null;function Bl(e,t,n,r){if(hs=null,e=Yu(r),e=Fn(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=am(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hs=e,null}function wm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iw()){case Qu:return 1;case dm:return 4;case ds:case kw:return 16;case fm:return 536870912;default:return 16}default:return 16}}var an=null,Ju=null,$i=null;function Em(){if($i)return $i;var e,t=Ju,n=t.length,r,o="value"in an?an.value:an.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return $i=o.slice(e,1<r?1-r:void 0)}function Ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ci(){return!0}function Kd(){return!1}function Qe(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ci:Kd,this.isPropagationStopped=Kd,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=Qe(Hr),oi=ie({},Hr,{view:0,detail:0}),Ww=Qe(oi),_a,Da,ro,Ys=ie({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(_a=e.screenX-ro.screenX,Da=e.screenY-ro.screenY):Da=_a=0,ro=e),_a)},movementY:function(e){return"movementY"in e?e.movementY:Da}}),Yd=Qe(Ys),Gw=ie({},Ys,{dataTransfer:0}),$w=Qe(Gw),Kw=ie({},oi,{relatedTarget:0}),Ma=Qe(Kw),Yw=ie({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qw=Qe(Yw),Xw=ie({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qw=Qe(Xw),Zw=ie({},Hr,{data:0}),Qd=Qe(Zw),Jw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tE[e])?!!t[e]:!1}function tc(){return nE}var rE=ie({},oi,{key:function(e){if(e.key){var t=Jw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(e){return e.type==="keypress"?Ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oE=Qe(rE),iE=ie({},Ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=Qe(iE),sE=ie({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),aE=Qe(sE),lE=ie({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uE=Qe(lE),cE=ie({},Ys,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dE=Qe(cE),fE=[9,13,27,32],nc=jt&&"CompositionEvent"in window,xo=null;jt&&"documentMode"in document&&(xo=document.documentMode);var pE=jt&&"TextEvent"in window&&!xo,Sm=jt&&(!nc||xo&&8<xo&&11>=xo),qd=" ",Zd=!1;function Cm(e,t){switch(e){case"keyup":return fE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function hE(e,t){switch(e){case"compositionend":return Tm(t);case"keypress":return t.which!==32?null:(Zd=!0,qd);case"textInput":return e=t.data,e===qd&&Zd?null:e;default:return null}}function mE(e,t){if(lr)return e==="compositionend"||!nc&&Cm(e,t)?(e=Em(),$i=Ju=an=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sm&&t.locale!=="ko"?null:t.data;default:return null}}var gE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gE[e.type]:t==="textarea"}function Rm(e,t,n,r){nm(r),t=ms(t,"onChange"),0<t.length&&(n=new ec("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wo=null,Lo=null;function yE(e){Lm(e,0)}function Qs(e){var t=dr(e);if(Qh(t))return e}function vE(e,t){if(e==="change")return t}var Am=!1;if(jt){var Oa;if(jt){var La="oninput"in document;if(!La){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),La=typeof ef.oninput=="function"}Oa=La}else Oa=!1;Am=Oa&&(!document.documentMode||9<document.documentMode)}function tf(){wo&&(wo.detachEvent("onpropertychange",Pm),Lo=wo=null)}function Pm(e){if(e.propertyName==="value"&&Qs(Lo)){var t=[];Rm(t,Lo,e,Yu(e)),sm(yE,t)}}function xE(e,t,n){e==="focusin"?(tf(),wo=t,Lo=n,wo.attachEvent("onpropertychange",Pm)):e==="focusout"&&tf()}function wE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qs(Lo)}function EE(e,t){if(e==="click")return Qs(t)}function SE(e,t){if(e==="input"||e==="change")return Qs(t)}function CE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:CE;function Fo(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Sl.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function nf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rf(e,t){var n=nf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nf(n)}}function Nm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bm(){for(var e=window,t=ls();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ls(e.document)}return t}function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function TE(e){var t=bm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nm(n.ownerDocument.documentElement,n)){if(r!==null&&rc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=rf(n,i);var s=rf(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var RE=jt&&"documentMode"in document&&11>=document.documentMode,ur=null,Ul=null,Eo=null,zl=!1;function of(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zl||ur==null||ur!==ls(r)||(r=ur,"selectionStart"in r&&rc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Fo(Eo,r)||(Eo=r,r=ms(Ul,"onSelect"),0<r.length&&(t=new ec("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function Ti(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:Ti("Animation","AnimationEnd"),animationiteration:Ti("Animation","AnimationIteration"),animationstart:Ti("Animation","AnimationStart"),transitionend:Ti("Transition","TransitionEnd")},Fa={},Im={};jt&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Xs(e){if(Fa[e])return Fa[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Im)return Fa[e]=t[n];return e}var km=Xs("animationend"),_m=Xs("animationiteration"),Dm=Xs("animationstart"),Mm=Xs("transitionend"),Om=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){Om.set(e,t),qn(t,[e])}for(var Va=0;Va<sf.length;Va++){var ja=sf[Va],AE=ja.toLowerCase(),PE=ja[0].toUpperCase()+ja.slice(1);An(AE,"on"+PE)}An(km,"onAnimationEnd");An(_m,"onAnimationIteration");An(Dm,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Mm,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function af(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Aw(r,t,void 0,e),e.currentTarget=null}function Lm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;af(o,a,u),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;af(o,a,u),i=l}}}if(cs)throw e=Fl,cs=!1,Fl=null,e}function Z(e,t){var n=t[Kl];n===void 0&&(n=t[Kl]=new Set);var r=e+"__bubble";n.has(r)||(Fm(t,e,2,!1),n.add(r))}function Ba(e,t,n){var r=0;t&&(r|=4),Fm(n,e,r,t)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function Vo(e){if(!e[Ri]){e[Ri]=!0,Wh.forEach(function(n){n!=="selectionchange"&&(NE.has(n)||Ba(n,!1,e),Ba(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ri]||(t[Ri]=!0,Ba("selectionchange",!1,t))}}function Fm(e,t,n,r){switch(wm(t)){case 1:var o=zw;break;case 4:o=Hw;break;default:o=Zu}n=o.bind(null,t,n,e),o=void 0,!Ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ua(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Fn(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}sm(function(){var u=i,c=Yu(n),d=[];e:{var f=Om.get(e);if(f!==void 0){var g=ec,v=e;switch(e){case"keypress":if(Ki(n)===0)break e;case"keydown":case"keyup":g=oE;break;case"focusin":v="focus",g=Ma;break;case"focusout":v="blur",g=Ma;break;case"beforeblur":case"afterblur":g=Ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=$w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=aE;break;case km:case _m:case Dm:g=Qw;break;case Mm:g=uE;break;case"scroll":g=Ww;break;case"wheel":g=dE;break;case"copy":case"cut":case"paste":g=qw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Xd}var x=(t&4)!==0,w=!x&&e==="scroll",m=x?f!==null?f+"Capture":null:f;x=[];for(var p=u,y;p!==null;){y=p;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,m!==null&&(E=_o(p,m),E!=null&&x.push(jo(p,E,y)))),w)break;p=p.return}0<x.length&&(f=new g(f,v,null,n,c),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==Ml&&(v=n.relatedTarget||n.fromElement)&&(Fn(v)||v[Bt]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Fn(v):null,v!==null&&(w=Zn(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=Yd,E="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Xd,E="onPointerLeave",m="onPointerEnter",p="pointer"),w=g==null?f:dr(g),y=v==null?f:dr(v),f=new x(E,p+"leave",g,n,c),f.target=w,f.relatedTarget=y,E=null,Fn(c)===u&&(x=new x(m,p+"enter",v,n,c),x.target=y,x.relatedTarget=w,E=x),w=E,g&&v)t:{for(x=g,m=v,p=0,y=x;y;y=nr(y))p++;for(y=0,E=m;E;E=nr(E))y++;for(;0<p-y;)x=nr(x),p--;for(;0<y-p;)m=nr(m),y--;for(;p--;){if(x===m||m!==null&&x===m.alternate)break t;x=nr(x),m=nr(m)}x=null}else x=null;g!==null&&lf(d,f,g,x,!1),v!==null&&w!==null&&lf(d,w,v,x,!0)}}e:{if(f=u?dr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=vE;else if(Jd(f))if(Am)C=SE;else{C=wE;var R=xE}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=EE);if(C&&(C=C(e,u))){Rm(d,C,n,c);break e}R&&R(e,f,u),e==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&bl(f,"number",f.value)}switch(R=u?dr(u):window,e){case"focusin":(Jd(R)||R.contentEditable==="true")&&(ur=R,Ul=u,Eo=null);break;case"focusout":Eo=Ul=ur=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,of(d,n,c);break;case"selectionchange":if(RE)break;case"keydown":case"keyup":of(d,n,c)}var A;if(nc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else lr?Cm(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Sm&&n.locale!=="ko"&&(lr||T!=="onCompositionStart"?T==="onCompositionEnd"&&lr&&(A=Em()):(an=c,Ju="value"in an?an.value:an.textContent,lr=!0)),R=ms(u,T),0<R.length&&(T=new Qd(T,e,null,n,c),d.push({event:T,listeners:R}),A?T.data=A:(A=Tm(n),A!==null&&(T.data=A)))),(A=pE?hE(e,n):mE(e,n))&&(u=ms(u,"onBeforeInput"),0<u.length&&(c=new Qd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}Lm(d,t)})}function jo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ms(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=_o(e,n),i!=null&&r.unshift(jo(e,i,o)),i=_o(e,t),i!=null&&r.push(jo(e,i,o))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lf(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=_o(n,i),l!=null&&s.unshift(jo(n,l,a))):o||(l=_o(n,i),l!=null&&s.push(jo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var bE=/\r\n?/g,IE=/\u0000|\uFFFD/g;function uf(e){return(typeof e=="string"?e:""+e).replace(bE,`
`).replace(IE,"")}function Ai(e,t,n){if(t=uf(t),uf(e)!==t&&n)throw Error(I(425))}function gs(){}var Hl=null,Wl=null;function Gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,kE=typeof clearTimeout=="function"?clearTimeout:void 0,cf=typeof Promise=="function"?Promise:void 0,_E=typeof queueMicrotask=="function"?queueMicrotask:typeof cf<"u"?function(e){return cf.resolve(null).then(e).catch(DE)}:$l;function DE(e){setTimeout(function(){throw e})}function za(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Oo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Oo(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),vt="__reactFiber$"+Wr,Bo="__reactProps$"+Wr,Bt="__reactContainer$"+Wr,Kl="__reactEvents$"+Wr,ME="__reactListeners$"+Wr,OE="__reactHandles$"+Wr;function Fn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[vt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function ii(e){return e=e[vt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function qs(e){return e[Bo]||null}var Yl=[],fr=-1;function Pn(e){return{current:e}}function J(e){0>fr||(e.current=Yl[fr],Yl[fr]=null,fr--)}function X(e,t){fr++,Yl[fr]=e.current,e.current=t}var wn={},Ae=Pn(wn),Fe=Pn(!1),Gn=wn;function kr(e,t){var n=e.type.contextTypes;if(!n)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function ys(){J(Fe),J(Ae)}function ff(e,t,n){if(Ae.current!==wn)throw Error(I(168));X(Ae,t),X(Fe,n)}function Vm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,xw(e)||"Unknown",o));return ie({},n,r)}function vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,Gn=Ae.current,X(Ae,e),X(Fe,Fe.current),!0}function pf(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=Vm(e,t,Gn),r.__reactInternalMemoizedMergedChildContext=e,J(Fe),J(Ae),X(Ae,e)):J(Fe),X(Fe,n)}var kt=null,Zs=!1,Ha=!1;function jm(e){kt===null?kt=[e]:kt.push(e)}function LE(e){Zs=!0,jm(e)}function Nn(){if(!Ha&&kt!==null){Ha=!0;var e=0,t=Q;try{var n=kt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,Zs=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),cm(Qu,Nn),o}finally{Q=t,Ha=!1}}return null}var pr=[],hr=0,xs=null,ws=0,Je=[],et=0,$n=null,_t=1,Dt="";function _n(e,t){pr[hr++]=ws,pr[hr++]=xs,xs=e,ws=t}function Bm(e,t,n){Je[et++]=_t,Je[et++]=Dt,Je[et++]=$n,$n=e;var r=_t;e=Dt;var o=32-dt(r)-1;r&=~(1<<o),n+=1;var i=32-dt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,_t=1<<32-dt(t)+o|n<<o|r,Dt=i+e}else _t=1<<i|n<<o|r,Dt=e}function oc(e){e.return!==null&&(_n(e,1),Bm(e,1,0))}function ic(e){for(;e===xs;)xs=pr[--hr],pr[hr]=null,ws=pr[--hr],pr[hr]=null;for(;e===$n;)$n=Je[--et],Je[et]=null,Dt=Je[--et],Je[et]=null,_t=Je[--et],Je[et]=null}var We=null,He=null,ee=!1,ct=null;function Um(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,He=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:_t,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,He=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xl(e){if(ee){var t=He;if(t){var n=t;if(!hf(e,t)){if(Ql(e))throw Error(I(418));t=fn(n.nextSibling);var r=We;t&&hf(e,t)?Um(r,n):(e.flags=e.flags&-4097|2,ee=!1,We=e)}}else{if(Ql(e))throw Error(I(418));e.flags=e.flags&-4097|2,ee=!1,We=e}}}function mf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function Pi(e){if(e!==We)return!1;if(!ee)return mf(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gl(e.type,e.memoizedProps)),t&&(t=He)){if(Ql(e))throw zm(),Error(I(418));for(;t;)Um(e,t),t=fn(t.nextSibling)}if(mf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=We?fn(e.stateNode.nextSibling):null;return!0}function zm(){for(var e=He;e;)e=fn(e.nextSibling)}function _r(){He=We=null,ee=!1}function sc(e){ct===null?ct=[e]:ct.push(e)}var FE=$t.ReactCurrentBatchConfig;function oo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gf(e){var t=e._init;return t(e._payload)}function Hm(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=gn(m,p),m.index=0,m.sibling=null,m}function i(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,E){return p===null||p.tag!==6?(p=Xa(y,m.mode,E),p.return=m,p):(p=o(p,y),p.return=m,p)}function l(m,p,y,E){var C=y.type;return C===ar?c(m,p,y.props.children,E,y.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tn&&gf(C)===p.type)?(E=o(p,y.props),E.ref=oo(m,p,y),E.return=m,E):(E=es(y.type,y.key,y.props,null,m.mode,E),E.ref=oo(m,p,y),E.return=m,E)}function u(m,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=qa(y,m.mode,E),p.return=m,p):(p=o(p,y.children||[]),p.return=m,p)}function c(m,p,y,E,C){return p===null||p.tag!==7?(p=Hn(y,m.mode,E,C),p.return=m,p):(p=o(p,y),p.return=m,p)}function d(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xa(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yi:return y=es(p.type,p.key,p.props,null,m.mode,y),y.ref=oo(m,null,p),y.return=m,y;case sr:return p=qa(p,m.mode,y),p.return=m,p;case tn:var E=p._init;return d(m,E(p._payload),y)}if(fo(p)||Jr(p))return p=Hn(p,m.mode,y,null),p.return=m,p;Ni(m,p)}return null}function f(m,p,y,E){var C=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(m,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yi:return y.key===C?l(m,p,y,E):null;case sr:return y.key===C?u(m,p,y,E):null;case tn:return C=y._init,f(m,p,C(y._payload),E)}if(fo(y)||Jr(y))return C!==null?null:c(m,p,y,E,null);Ni(m,y)}return null}function g(m,p,y,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(y)||null,a(p,m,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case yi:return m=m.get(E.key===null?y:E.key)||null,l(p,m,E,C);case sr:return m=m.get(E.key===null?y:E.key)||null,u(p,m,E,C);case tn:var R=E._init;return g(m,p,y,R(E._payload),C)}if(fo(E)||Jr(E))return m=m.get(y)||null,c(p,m,E,C,null);Ni(p,E)}return null}function v(m,p,y,E){for(var C=null,R=null,A=p,T=p=0,k=null;A!==null&&T<y.length;T++){A.index>T?(k=A,A=null):k=A.sibling;var b=f(m,A,y[T],E);if(b===null){A===null&&(A=k);break}e&&A&&b.alternate===null&&t(m,A),p=i(b,p,T),R===null?C=b:R.sibling=b,R=b,A=k}if(T===y.length)return n(m,A),ee&&_n(m,T),C;if(A===null){for(;T<y.length;T++)A=d(m,y[T],E),A!==null&&(p=i(A,p,T),R===null?C=A:R.sibling=A,R=A);return ee&&_n(m,T),C}for(A=r(m,A);T<y.length;T++)k=g(A,m,T,y[T],E),k!==null&&(e&&k.alternate!==null&&A.delete(k.key===null?T:k.key),p=i(k,p,T),R===null?C=k:R.sibling=k,R=k);return e&&A.forEach(function(O){return t(m,O)}),ee&&_n(m,T),C}function x(m,p,y,E){var C=Jr(y);if(typeof C!="function")throw Error(I(150));if(y=C.call(y),y==null)throw Error(I(151));for(var R=C=null,A=p,T=p=0,k=null,b=y.next();A!==null&&!b.done;T++,b=y.next()){A.index>T?(k=A,A=null):k=A.sibling;var O=f(m,A,b.value,E);if(O===null){A===null&&(A=k);break}e&&A&&O.alternate===null&&t(m,A),p=i(O,p,T),R===null?C=O:R.sibling=O,R=O,A=k}if(b.done)return n(m,A),ee&&_n(m,T),C;if(A===null){for(;!b.done;T++,b=y.next())b=d(m,b.value,E),b!==null&&(p=i(b,p,T),R===null?C=b:R.sibling=b,R=b);return ee&&_n(m,T),C}for(A=r(m,A);!b.done;T++,b=y.next())b=g(A,m,T,b.value,E),b!==null&&(e&&b.alternate!==null&&A.delete(b.key===null?T:b.key),p=i(b,p,T),R===null?C=b:R.sibling=b,R=b);return e&&A.forEach(function(M){return t(m,M)}),ee&&_n(m,T),C}function w(m,p,y,E){if(typeof y=="object"&&y!==null&&y.type===ar&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case yi:e:{for(var C=y.key,R=p;R!==null;){if(R.key===C){if(C=y.type,C===ar){if(R.tag===7){n(m,R.sibling),p=o(R,y.props.children),p.return=m,m=p;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tn&&gf(C)===R.type){n(m,R.sibling),p=o(R,y.props),p.ref=oo(m,R,y),p.return=m,m=p;break e}n(m,R);break}else t(m,R);R=R.sibling}y.type===ar?(p=Hn(y.props.children,m.mode,E,y.key),p.return=m,m=p):(E=es(y.type,y.key,y.props,null,m.mode,E),E.ref=oo(m,p,y),E.return=m,m=E)}return s(m);case sr:e:{for(R=y.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=o(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=qa(y,m.mode,E),p.return=m,m=p}return s(m);case tn:return R=y._init,w(m,p,R(y._payload),E)}if(fo(y))return v(m,p,y,E);if(Jr(y))return x(m,p,y,E);Ni(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,y),p.return=m,m=p):(n(m,p),p=Xa(y,m.mode,E),p.return=m,m=p),s(m)):n(m,p)}return w}var Dr=Hm(!0),Wm=Hm(!1),Es=Pn(null),Ss=null,mr=null,ac=null;function lc(){ac=mr=Ss=null}function uc(e){var t=Es.current;J(Es),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t){Ss=e,ac=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(ac!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(Ss===null)throw Error(I(308));mr=e,Ss.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var Vn=null;function cc(e){Vn===null?Vn=[e]:Vn.push(e)}function Gm(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,cc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $m(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ut(e,n)}return o=r.interleaved,o===null?(t.next=t,cc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ut(e,n)}function Yi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xu(e,n)}}function yf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Cs(e,t,n,r){var o=e.updateQueue;nn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;s=0,c=u=l=null,a=i;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=ie({},d,f);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,s|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Yn|=s,e.lanes=s,e.memoizedState=d}}function vf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var si={},St=Pn(si),Uo=Pn(si),zo=Pn(si);function jn(e){if(e===si)throw Error(I(174));return e}function fc(e,t){switch(X(zo,t),X(Uo,e),X(St,si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kl(t,e)}J(St),X(St,t)}function Mr(){J(St),J(Uo),J(zo)}function Km(e){jn(zo.current);var t=jn(St.current),n=kl(t,e.type);t!==n&&(X(Uo,e),X(St,n))}function pc(e){Uo.current===e&&(J(St),J(Uo))}var ne=Pn(0);function Ts(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wa=[];function hc(){for(var e=0;e<Wa.length;e++)Wa[e]._workInProgressVersionPrimary=null;Wa.length=0}var Qi=$t.ReactCurrentDispatcher,Ga=$t.ReactCurrentBatchConfig,Kn=0,oe=null,de=null,he=null,Rs=!1,So=!1,Ho=0,VE=0;function we(){throw Error(I(321))}function mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function gc(e,t,n,r,o,i){if(Kn=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qi.current=e===null||e.memoizedState===null?zE:HE,e=n(r,o),So){i=0;do{if(So=!1,Ho=0,25<=i)throw Error(I(301));i+=1,he=de=null,t.updateQueue=null,Qi.current=WE,e=n(r,o)}while(So)}if(Qi.current=As,t=de!==null&&de.next!==null,Kn=0,he=de=oe=null,Rs=!1,t)throw Error(I(300));return e}function yc(){var e=Ho!==0;return Ho=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?oe.memoizedState=he=e:he=he.next=e,he}function it(){if(de===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?oe.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(I(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?oe.memoizedState=he=e:he=he.next=e}return he}function Wo(e,t){return typeof t=="function"?t(e):t}function $a(e){var t=it(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=de,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,u=i;do{var c=u.lane;if((Kn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,oe.lanes|=c,Yn|=c}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=a,pt(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,Yn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ka(e){var t=it(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);pt(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ym(){}function Qm(e,t){var n=oe,r=it(),o=t(),i=!pt(r.memoizedState,o);if(i&&(r.memoizedState=o,Le=!0),r=r.queue,vc(Zm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Go(9,qm.bind(null,n,r,o,t),void 0,null),me===null)throw Error(I(349));Kn&30||Xm(n,t,o)}return o}function Xm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qm(e,t,n,r){t.value=n,t.getSnapshot=r,Jm(t)&&eg(e)}function Zm(e,t,n){return n(function(){Jm(t)&&eg(e)})}function Jm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function eg(e){var t=Ut(e,1);t!==null&&ft(t,e,1,-1)}function xf(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:e},t.queue=e,e=e.dispatch=UE.bind(null,oe,e),[t.memoizedState,e]}function Go(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tg(){return it().memoizedState}function Xi(e,t,n,r){var o=yt();oe.flags|=e,o.memoizedState=Go(1|t,n,void 0,r===void 0?null:r)}function Js(e,t,n,r){var o=it();r=r===void 0?null:r;var i=void 0;if(de!==null){var s=de.memoizedState;if(i=s.destroy,r!==null&&mc(r,s.deps)){o.memoizedState=Go(t,n,i,r);return}}oe.flags|=e,o.memoizedState=Go(1|t,n,i,r)}function wf(e,t){return Xi(8390656,8,e,t)}function vc(e,t){return Js(2048,8,e,t)}function ng(e,t){return Js(4,2,e,t)}function rg(e,t){return Js(4,4,e,t)}function og(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ig(e,t,n){return n=n!=null?n.concat([e]):null,Js(4,4,og.bind(null,t,e),n)}function xc(){}function sg(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ag(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lg(e,t,n){return Kn&21?(pt(n,t)||(n=pm(),oe.lanes|=n,Yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function jE(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Ga.transition;Ga.transition={};try{e(!1),t()}finally{Q=n,Ga.transition=r}}function ug(){return it().memoizedState}function BE(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cg(e))dg(t,n);else if(n=Gm(e,t,n,r),n!==null){var o=Ie();ft(n,e,r,o),fg(n,t,r)}}function UE(e,t,n){var r=mn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cg(e))dg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,pt(a,s)){var l=t.interleaved;l===null?(o.next=o,cc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Gm(e,t,o,r),n!==null&&(o=Ie(),ft(n,e,r,o),fg(n,t,r))}}function cg(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function dg(e,t){So=Rs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xu(e,n)}}var As={readContext:ot,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},zE={readContext:ot,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:wf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4194308,4,og.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xi(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=BE.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:xf,useDebugValue:xc,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=xf(!1),t=e[0];return e=jE.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=yt();if(ee){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),me===null)throw Error(I(349));Kn&30||Xm(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,wf(Zm.bind(null,r,i,e),[e]),r.flags|=2048,Go(9,qm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yt(),t=me.identifierPrefix;if(ee){var n=Dt,r=_t;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=VE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},HE={readContext:ot,useCallback:sg,useContext:ot,useEffect:vc,useImperativeHandle:ig,useInsertionEffect:ng,useLayoutEffect:rg,useMemo:ag,useReducer:$a,useRef:tg,useState:function(){return $a(Wo)},useDebugValue:xc,useDeferredValue:function(e){var t=it();return lg(t,de.memoizedState,e)},useTransition:function(){var e=$a(Wo)[0],t=it().memoizedState;return[e,t]},useMutableSource:Ym,useSyncExternalStore:Qm,useId:ug,unstable_isNewReconciler:!1},WE={readContext:ot,useCallback:sg,useContext:ot,useEffect:vc,useImperativeHandle:ig,useInsertionEffect:ng,useLayoutEffect:rg,useMemo:ag,useReducer:Ka,useRef:tg,useState:function(){return Ka(Wo)},useDebugValue:xc,useDeferredValue:function(e){var t=it();return de===null?t.memoizedState=e:lg(t,de.memoizedState,e)},useTransition:function(){var e=Ka(Wo)[0],t=it().memoizedState;return[e,t]},useMutableSource:Ym,useSyncExternalStore:Qm,useId:ug,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ea={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=mn(e),i=Ot(r,o);i.payload=t,n!=null&&(i.callback=n),t=pn(e,i,o),t!==null&&(ft(t,e,o,r),Yi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=mn(e),i=Ot(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=pn(e,i,o),t!==null&&(ft(t,e,o,r),Yi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=mn(e),o=Ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=pn(e,o,r),t!==null&&(ft(t,e,r,n),Yi(t,e,r))}};function Ef(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Fo(n,r)||!Fo(o,i):!0}function pg(e,t,n){var r=!1,o=wn,i=t.contextType;return typeof i=="object"&&i!==null?i=ot(i):(o=Ve(t)?Gn:Ae.current,r=t.contextTypes,i=(r=r!=null)?kr(e,o):wn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ea,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Sf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ea.enqueueReplaceState(t,t.state,null)}function Jl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},dc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ot(i):(i=Ve(t)?Gn:Ae.current,o.context=kr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Zl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ea.enqueueReplaceState(o,o.state,null),Cs(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Or(e,t){try{var n="",r=t;do n+=vw(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ya(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function eu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var GE=typeof WeakMap=="function"?WeakMap:Map;function hg(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ns||(Ns=!0,cu=r),eu(e,t)},n}function mg(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){eu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){eu(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Cf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new GE;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=iS.bind(null,e,t,n),t.then(e,e))}function Tf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rf(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var $E=$t.ReactCurrentOwner,Le=!1;function be(e,t,n,r){t.child=e===null?Wm(t,null,n,r):Dr(t,e.child,n,r)}function Af(e,t,n,r,o){n=n.render;var i=t.ref;return Ar(t,o),r=gc(e,t,n,r,i,o),n=yc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(ee&&n&&oc(t),t.flags|=1,be(e,t,r,o),t.child)}function Pf(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Pc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,gg(e,t,i,r,o)):(e=es(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(s,r)&&e.ref===t.ref)return zt(e,t,o)}return t.flags|=1,e=gn(i,r),e.ref=t.ref,e.return=t,t.child=e}function gg(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Fo(i,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,zt(e,t,o)}return tu(e,t,n,r,o)}function yg(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(yr,Ue),Ue|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(yr,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(yr,Ue),Ue|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(yr,Ue),Ue|=r;return be(e,t,o,n),t.child}function vg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tu(e,t,n,r,o){var i=Ve(n)?Gn:Ae.current;return i=kr(t,i),Ar(t,o),n=gc(e,t,n,r,i,o),r=yc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(ee&&r&&oc(t),t.flags|=1,be(e,t,n,o),t.child)}function Nf(e,t,n,r,o){if(Ve(n)){var i=!0;vs(t)}else i=!1;if(Ar(t,o),t.stateNode===null)qi(e,t),pg(t,n,r),Jl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Ve(n)?Gn:Ae.current,u=kr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Sf(t,s,r,u),nn=!1;var f=t.memoizedState;s.state=f,Cs(t,r,s,o),l=t.memoizedState,a!==r||f!==l||Fe.current||nn?(typeof c=="function"&&(Zl(t,n,c,r),l=t.memoizedState),(a=nn||Ef(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,$m(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:lt(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ot(l):(l=Ve(n)?Gn:Ae.current,l=kr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Sf(t,s,r,l),nn=!1,f=t.memoizedState,s.state=f,Cs(t,r,s,o);var v=t.memoizedState;a!==d||f!==v||Fe.current||nn?(typeof g=="function"&&(Zl(t,n,g,r),v=t.memoizedState),(u=nn||Ef(t,n,u,r,f,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return nu(e,t,n,r,i,o)}function nu(e,t,n,r,o,i){vg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&pf(t,n,!1),zt(e,t,i);r=t.stateNode,$E.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Dr(t,e.child,null,i),t.child=Dr(t,null,a,i)):be(e,t,a,i),t.memoizedState=r.state,o&&pf(t,n,!0),t.child}function xg(e){var t=e.stateNode;t.pendingContext?ff(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ff(e,t.context,!1),fc(e,t.containerInfo)}function bf(e,t,n,r,o){return _r(),sc(o),t.flags|=256,be(e,t,n,r),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function ou(e){return{baseLanes:e,cachePool:null,transitions:null}}function wg(e,t,n){var r=t.pendingProps,o=ne.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(ne,o&1),e===null)return Xl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=ra(s,r,0,null),e=Hn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ou(n),t.memoizedState=ru,e):wc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return KE(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=gn(a,i):(i=Hn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?ou(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=ru,r}return i=e.child,e=i.sibling,r=gn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wc(e,t){return t=ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bi(e,t,n,r){return r!==null&&sc(r),Dr(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function KE(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ya(Error(I(422))),bi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ra({mode:"visible",children:r.children},o,0,null),i=Hn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Dr(t,e.child,null,s),t.child.memoizedState=ou(s),t.memoizedState=ru,i);if(!(t.mode&1))return bi(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(I(419)),r=Ya(i,r,void 0),bi(e,t,s,r)}if(a=(s&e.childLanes)!==0,Le||a){if(r=me,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ut(e,o),ft(r,e,o,-1))}return Ac(),r=Ya(Error(I(421))),bi(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sS.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,He=fn(o.nextSibling),We=t,ee=!0,ct=null,e!==null&&(Je[et++]=_t,Je[et++]=Dt,Je[et++]=$n,_t=e.id,Dt=e.overflow,$n=t),t=wc(t,r.children),t.flags|=4096,t)}function If(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function Qa(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Eg(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(be(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&If(e,n,t);else if(e.tag===19)If(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ts(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Qa(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ts(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Qa(t,!0,n,null,i);break;case"together":Qa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function YE(e,t,n){switch(t.tag){case 3:xg(t),_r();break;case 5:Km(t);break;case 1:Ve(t.type)&&vs(t);break;case 4:fc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(Es,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?wg(e,t,n):(X(ne,ne.current&1),e=zt(e,t,n),e!==null?e.sibling:null);X(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Eg(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,yg(e,t,n)}return zt(e,t,n)}var Sg,iu,Cg,Tg;Sg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};iu=function(){};Cg=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,jn(St.current);var i=null;switch(n){case"input":o=Pl(e,o),r=Pl(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=Il(e,o),r=Il(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gs)}_l(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Io.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Io.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Tg=function(e,t,n,r){n!==r&&(t.flags|=4)};function io(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function QE(e,t,n){var r=t.pendingProps;switch(ic(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ve(t.type)&&ys(),Ee(t),null;case 3:return r=t.stateNode,Mr(),J(Fe),J(Ae),hc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(pu(ct),ct=null))),iu(e,t),Ee(t),null;case 5:pc(t);var o=jn(zo.current);if(n=t.type,e!==null&&t.stateNode!=null)Cg(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Ee(t),null}if(e=jn(St.current),Pi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[vt]=t,r[Bo]=i,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(o=0;o<ho.length;o++)Z(ho[o],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Vd(r,i),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Z("invalid",r);break;case"textarea":Bd(r,i),Z("invalid",r)}_l(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ai(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ai(r.textContent,a,e),o=["children",""+a]):Io.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Z("scroll",r)}switch(n){case"input":vi(r),jd(r,i,!0);break;case"textarea":vi(r),Ud(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=gs)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[vt]=t,e[Bo]=r,Sg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Dl(n,r),n){case"dialog":Z("cancel",e),Z("close",e),o=r;break;case"iframe":case"object":case"embed":Z("load",e),o=r;break;case"video":case"audio":for(o=0;o<ho.length;o++)Z(ho[o],e);o=r;break;case"source":Z("error",e),o=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=r;break;case"details":Z("toggle",e),o=r;break;case"input":Vd(e,r),o=Pl(e,r),Z("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),Z("invalid",e);break;case"textarea":Bd(e,r),o=Il(e,r),Z("invalid",e);break;default:o=r}_l(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?tm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jh(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ko(e,l):typeof l=="number"&&ko(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Io.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Z("scroll",e):l!=null&&Wu(e,i,l,s))}switch(n){case"input":vi(e),jd(e,r,!1);break;case"textarea":vi(e),Ud(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Sr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=gs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Tg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=jn(zo.current),jn(St.current),Pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(i=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:Ai(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ai(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Ee(t),null;case 13:if(J(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&He!==null&&t.mode&1&&!(t.flags&128))zm(),_r(),t.flags|=98560,i=!1;else if(i=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[vt]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else ct!==null&&(pu(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?pe===0&&(pe=3):Ac())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Mr(),iu(e,t),e===null&&Vo(t.stateNode.containerInfo),Ee(t),null;case 10:return uc(t.type._context),Ee(t),null;case 17:return Ve(t.type)&&ys(),Ee(t),null;case 19:if(J(ne),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)io(i,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ts(e),s!==null){for(t.flags|=128,io(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&le()>Lr&&(t.flags|=128,r=!0,io(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ts(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),io(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ee)return Ee(t),null}else 2*le()-i.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,io(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,n=ne.current,X(ne,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Rc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function XE(e,t){switch(ic(t),t.tag){case 1:return Ve(t.type)&&ys(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mr(),J(Fe),J(Ae),hc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pc(t),null;case 13:if(J(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ne),null;case 4:return Mr(),null;case 10:return uc(t.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var Ii=!1,Ce=!1,qE=typeof WeakSet=="function"?WeakSet:Set,_=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function su(e,t,n){try{n()}catch(r){se(e,t,r)}}var kf=!1;function ZE(e,t){if(Hl=ps,e=bm(),rc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var g;d!==n||o!==0&&d.nodeType!==3||(a=s+o),d!==i||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===e)break t;if(f===n&&++u===o&&(a=s),f===i&&++c===r&&(l=s),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wl={focusedElem:e,selectionRange:n},ps=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,w=v.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:lt(t.type,x),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(E){se(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return v=kf,kf=!1,v}function Co(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&su(t,n,i)}o=o.next}while(o!==r)}}function ta(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function au(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rg(e){var t=e.alternate;t!==null&&(e.alternate=null,Rg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Bo],delete t[Kl],delete t[ME],delete t[OE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ag(e){return e.tag===5||e.tag===3||e.tag===4}function _f(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gs));else if(r!==4&&(e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}function uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(uu(e,t,n),e=e.sibling;e!==null;)uu(e,t,n),e=e.sibling}var ge=null,ut=!1;function Xt(e,t,n){for(n=n.child;n!==null;)Pg(e,t,n),n=n.sibling}function Pg(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ks,n)}catch{}switch(n.tag){case 5:Ce||gr(n,t);case 6:var r=ge,o=ut;ge=null,Xt(e,t,n),ge=r,ut=o,ge!==null&&(ut?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(ut?(e=ge,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),Oo(e)):za(ge,n.stateNode));break;case 4:r=ge,o=ut,ge=n.stateNode.containerInfo,ut=!0,Xt(e,t,n),ge=r,ut=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&su(n,t,s),o=o.next}while(o!==r)}Xt(e,t,n);break;case 1:if(!Ce&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Xt(e,t,n),Ce=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function Df(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qE),t.forEach(function(r){var o=aS.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ge=a.stateNode,ut=!1;break e;case 3:ge=a.stateNode.containerInfo,ut=!0;break e;case 4:ge=a.stateNode.containerInfo,ut=!0;break e}a=a.return}if(ge===null)throw Error(I(160));Pg(i,s,o),ge=null,ut=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){se(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ng(t,e),t=t.sibling}function Ng(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),gt(e),r&4){try{Co(3,e,e.return),ta(3,e)}catch(x){se(e,e.return,x)}try{Co(5,e,e.return)}catch(x){se(e,e.return,x)}}break;case 1:at(t,e),gt(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(at(t,e),gt(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var o=e.stateNode;try{ko(o,"")}catch(x){se(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Xh(o,i),Dl(a,s);var u=Dl(a,i);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?tm(o,d):c==="dangerouslySetInnerHTML"?Jh(o,d):c==="children"?ko(o,d):Wu(o,c,d,u)}switch(a){case"input":Nl(o,i);break;case"textarea":qh(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Sr(o,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?Sr(o,!!i.multiple,i.defaultValue,!0):Sr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Bo]=i}catch(x){se(e,e.return,x)}}break;case 6:if(at(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){se(e,e.return,x)}}break;case 3:if(at(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(t.containerInfo)}catch(x){se(e,e.return,x)}break;case 4:at(t,e),gt(e);break;case 13:at(t,e),gt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Cc=le())),r&4&&Df(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||c,at(t,e),Ce=u):at(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(_=e,c=e.child;c!==null;){for(d=_=c;_!==null;){switch(f=_,g=f.child,f.tag){case 0:case 11:case 14:case 15:Co(4,f,f.return);break;case 1:gr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){se(r,n,x)}}break;case 5:gr(f,f.return);break;case 22:if(f.memoizedState!==null){Of(d);continue}}g!==null?(g.return=f,_=g):Of(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=em("display",s))}catch(x){se(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){se(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:at(t,e),gt(e),r&4&&Df(e);break;case 21:break;default:at(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ag(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ko(o,""),r.flags&=-33);var i=_f(e);uu(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=_f(e);lu(e,a,s);break;default:throw Error(I(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function JE(e,t,n){_=e,bg(e)}function bg(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Ii;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Ce;a=Ii;var u=Ce;if(Ii=s,(Ce=l)&&!u)for(_=o;_!==null;)s=_,l=s.child,s.tag===22&&s.memoizedState!==null?Lf(o):l!==null?(l.return=s,_=l):Lf(o);for(;i!==null;)_=i,bg(i),i=i.sibling;_=o,Ii=a,Ce=u}Mf(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):Mf(e)}}function Mf(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||ta(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&vf(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vf(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Oo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ce||t.flags&512&&au(t)}catch(f){se(t,t.return,f)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Of(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Lf(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ta(4,t)}catch(l){se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){se(t,o,l)}}var i=t.return;try{au(t)}catch(l){se(t,i,l)}break;case 5:var s=t.return;try{au(t)}catch(l){se(t,s,l)}}}catch(l){se(t,t.return,l)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var eS=Math.ceil,Ps=$t.ReactCurrentDispatcher,Ec=$t.ReactCurrentOwner,nt=$t.ReactCurrentBatchConfig,$=0,me=null,ue=null,ve=0,Ue=0,yr=Pn(0),pe=0,$o=null,Yn=0,na=0,Sc=0,To=null,Oe=null,Cc=0,Lr=1/0,It=null,Ns=!1,cu=null,hn=null,ki=!1,ln=null,bs=0,Ro=0,du=null,Zi=-1,Ji=0;function Ie(){return $&6?le():Zi!==-1?Zi:Zi=le()}function mn(e){return e.mode&1?$&2&&ve!==0?ve&-ve:FE.transition!==null?(Ji===0&&(Ji=pm()),Ji):(e=Q,e!==0||(e=window.event,e=e===void 0?16:wm(e.type)),e):1}function ft(e,t,n,r){if(50<Ro)throw Ro=0,du=null,Error(I(185));ri(e,n,r),(!($&2)||e!==me)&&(e===me&&(!($&2)&&(na|=n),pe===4&&sn(e,ve)),je(e,r),n===1&&$===0&&!(t.mode&1)&&(Lr=le()+500,Zs&&Nn()))}function je(e,t){var n=e.callbackNode;Fw(e,t);var r=fs(e,e===me?ve:0);if(r===0)n!==null&&Wd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wd(n),t===1)e.tag===0?LE(Ff.bind(null,e)):jm(Ff.bind(null,e)),_E(function(){!($&6)&&Nn()}),n=null;else{switch(hm(r)){case 1:n=Qu;break;case 4:n=dm;break;case 16:n=ds;break;case 536870912:n=fm;break;default:n=ds}n=Fg(n,Ig.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ig(e,t){if(Zi=-1,Ji=0,$&6)throw Error(I(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=fs(e,e===me?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Is(e,r);else{t=r;var o=$;$|=2;var i=_g();(me!==e||ve!==t)&&(It=null,Lr=le()+500,zn(e,t));do try{rS();break}catch(a){kg(e,a)}while(!0);lc(),Ps.current=i,$=o,ue!==null?t=0:(me=null,ve=0,t=pe)}if(t!==0){if(t===2&&(o=Vl(e),o!==0&&(r=o,t=fu(e,o))),t===1)throw n=$o,zn(e,0),sn(e,r),je(e,le()),n;if(t===6)sn(e,r);else{if(o=e.current.alternate,!(r&30)&&!tS(o)&&(t=Is(e,r),t===2&&(i=Vl(e),i!==0&&(r=i,t=fu(e,i))),t===1))throw n=$o,zn(e,0),sn(e,r),je(e,le()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Dn(e,Oe,It);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=Cc+500-le(),10<t)){if(fs(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=$l(Dn.bind(null,e,Oe,It),t);break}Dn(e,Oe,It);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-dt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eS(r/1960))-r,10<r){e.timeoutHandle=$l(Dn.bind(null,e,Oe,It),r);break}Dn(e,Oe,It);break;case 5:Dn(e,Oe,It);break;default:throw Error(I(329))}}}return je(e,le()),e.callbackNode===n?Ig.bind(null,e):null}function fu(e,t){var n=To;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=Is(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&pu(t)),e}function pu(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function tS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!pt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~Sc,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Ff(e){if($&6)throw Error(I(327));Pr();var t=fs(e,0);if(!(t&1))return je(e,le()),null;var n=Is(e,t);if(e.tag!==0&&n===2){var r=Vl(e);r!==0&&(t=r,n=fu(e,r))}if(n===1)throw n=$o,zn(e,0),sn(e,t),je(e,le()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,Oe,It),je(e,le()),null}function Tc(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Lr=le()+500,Zs&&Nn())}}function Qn(e){ln!==null&&ln.tag===0&&!($&6)&&Pr();var t=$;$|=1;var n=nt.transition,r=Q;try{if(nt.transition=null,Q=1,e)return e()}finally{Q=r,nt.transition=n,$=t,!($&6)&&Nn()}}function Rc(){Ue=yr.current,J(yr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kE(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(ic(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ys();break;case 3:Mr(),J(Fe),J(Ae),hc();break;case 5:pc(r);break;case 4:Mr();break;case 13:J(ne);break;case 19:J(ne);break;case 10:uc(r.type._context);break;case 22:case 23:Rc()}n=n.return}if(me=e,ue=e=gn(e.current,null),ve=Ue=t,pe=0,$o=null,Sc=na=Yn=0,Oe=To=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Vn=null}return e}function kg(e,t){do{var n=ue;try{if(lc(),Qi.current=As,Rs){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Rs=!1}if(Kn=0,he=de=oe=null,So=!1,Ho=0,Ec.current=null,n===null||n.return===null){pe=1,$o=t,ue=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=ve,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Tf(s);if(g!==null){g.flags&=-257,Rf(g,s,a,i,t),g.mode&1&&Cf(i,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Cf(i,u,t),Ac();break e}l=Error(I(426))}}else if(ee&&a.mode&1){var w=Tf(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Rf(w,s,a,i,t),sc(Or(l,a));break e}}i=l=Or(l,a),pe!==4&&(pe=2),To===null?To=[i]:To.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=hg(i,l,t);yf(i,m);break e;case 1:a=l;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(hn===null||!hn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=mg(i,a,t);yf(i,E);break e}}i=i.return}while(i!==null)}Mg(n)}catch(C){t=C,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function _g(){var e=Ps.current;return Ps.current=As,e===null?As:e}function Ac(){(pe===0||pe===3||pe===2)&&(pe=4),me===null||!(Yn&268435455)&&!(na&268435455)||sn(me,ve)}function Is(e,t){var n=$;$|=2;var r=_g();(me!==e||ve!==t)&&(It=null,zn(e,t));do try{nS();break}catch(o){kg(e,o)}while(!0);if(lc(),$=n,Ps.current=r,ue!==null)throw Error(I(261));return me=null,ve=0,pe}function nS(){for(;ue!==null;)Dg(ue)}function rS(){for(;ue!==null&&!Nw();)Dg(ue)}function Dg(e){var t=Lg(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Mg(e):ue=t,Ec.current=null}function Mg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=XE(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ue=null;return}}else if(n=QE(n,t,Ue),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);pe===0&&(pe=5)}function Dn(e,t,n){var r=Q,o=nt.transition;try{nt.transition=null,Q=1,oS(e,t,n,r)}finally{nt.transition=o,Q=r}return null}function oS(e,t,n,r){do Pr();while(ln!==null);if($&6)throw Error(I(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Vw(e,i),e===me&&(ue=me=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ki||(ki=!0,Fg(ds,function(){return Pr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=nt.transition,nt.transition=null;var s=Q;Q=1;var a=$;$|=4,Ec.current=null,ZE(e,n),Ng(n,e),TE(Wl),ps=!!Hl,Wl=Hl=null,e.current=n,JE(n),bw(),$=a,Q=s,nt.transition=i}else e.current=n;if(ki&&(ki=!1,ln=e,bs=o),i=e.pendingLanes,i===0&&(hn=null),_w(n.stateNode),je(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ns)throw Ns=!1,e=cu,cu=null,e;return bs&1&&e.tag!==0&&Pr(),i=e.pendingLanes,i&1?e===du?Ro++:(Ro=0,du=e):Ro=0,Nn(),null}function Pr(){if(ln!==null){var e=hm(bs),t=nt.transition,n=Q;try{if(nt.transition=null,Q=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,bs=0,$&6)throw Error(I(331));var o=$;for($|=4,_=e.current;_!==null;){var i=_,s=i.child;if(_.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_=u;_!==null;){var c=_;switch(c.tag){case 0:case 11:case 15:Co(8,c,i)}var d=c.child;if(d!==null)d.return=c,_=d;else for(;_!==null;){c=_;var f=c.sibling,g=c.return;if(Rg(c),c===u){_=null;break}if(f!==null){f.return=g,_=f;break}_=g}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}_=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,_=s;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Co(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,_=m;break e}_=i.return}}var p=e.current;for(_=p;_!==null;){s=_;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,_=y;else e:for(s=p;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ta(9,a)}}catch(C){se(a,a.return,C)}if(a===s){_=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,_=E;break e}_=a.return}}if($=o,Nn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ks,e)}catch{}r=!0}return r}finally{Q=n,nt.transition=t}}return!1}function Vf(e,t,n){t=Or(n,t),t=hg(e,t,1),e=pn(e,t,1),t=Ie(),e!==null&&(ri(e,1,t),je(e,t))}function se(e,t,n){if(e.tag===3)Vf(e,e,n);else for(;t!==null;){if(t.tag===3){Vf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=Or(n,e),e=mg(t,e,1),t=pn(t,e,1),e=Ie(),t!==null&&(ri(t,1,e),je(t,e));break}}t=t.return}}function iS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ve&n)===n&&(pe===4||pe===3&&(ve&130023424)===ve&&500>le()-Cc?zn(e,0):Sc|=n),je(e,t)}function Og(e,t){t===0&&(e.mode&1?(t=Ei,Ei<<=1,!(Ei&130023424)&&(Ei=4194304)):t=1);var n=Ie();e=Ut(e,t),e!==null&&(ri(e,t,n),je(e,n))}function sS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Og(e,n)}function aS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Og(e,n)}var Lg;Lg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,YE(e,t,n);Le=!!(e.flags&131072)}else Le=!1,ee&&t.flags&1048576&&Bm(t,ws,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qi(e,t),e=t.pendingProps;var o=kr(t,Ae.current);Ar(t,n),o=gc(null,t,r,e,o,n);var i=yc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,vs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,dc(t),o.updater=ea,t.stateNode=o,o._reactInternals=t,Jl(t,r,e,n),t=nu(null,t,r,!0,i,n)):(t.tag=0,ee&&i&&oc(t),be(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=uS(r),e=lt(r,e),o){case 0:t=tu(null,t,r,e,n);break e;case 1:t=Nf(null,t,r,e,n);break e;case 11:t=Af(null,t,r,e,n);break e;case 14:t=Pf(null,t,r,lt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),tu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Nf(e,t,r,o,n);case 3:e:{if(xg(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,$m(e,t),Cs(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Or(Error(I(423)),t),t=bf(e,t,r,n,o);break e}else if(r!==o){o=Or(Error(I(424)),t),t=bf(e,t,r,n,o);break e}else for(He=fn(t.stateNode.containerInfo.firstChild),We=t,ee=!0,ct=null,n=Wm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===o){t=zt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return Km(t),e===null&&Xl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Gl(r,o)?s=null:i!==null&&Gl(r,i)&&(t.flags|=32),vg(e,t),be(e,t,s,n),t.child;case 6:return e===null&&Xl(t),null;case 13:return wg(e,t,n);case 4:return fc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Af(e,t,r,o,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,X(Es,r._currentValue),r._currentValue=s,i!==null)if(pt(i.value,s)){if(i.children===o.children&&!Fe.current){t=zt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Ot(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),ql(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ql(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}be(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ar(t,n),o=ot(o),r=r(o),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),Pf(e,t,r,o,n);case 15:return gg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),qi(e,t),t.tag=1,Ve(r)?(e=!0,vs(t)):e=!1,Ar(t,n),pg(t,r,o),Jl(t,r,o,n),nu(null,t,r,!0,e,n);case 19:return Eg(e,t,n);case 22:return yg(e,t,n)}throw Error(I(156,t.tag))};function Fg(e,t){return cm(e,t)}function lS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new lS(e,t,n,r)}function Pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uS(e){if(typeof e=="function")return Pc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$u)return 11;if(e===Ku)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function es(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Pc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ar:return Hn(n.children,o,i,t);case Gu:s=8,o|=8;break;case Cl:return e=tt(12,n,t,o|2),e.elementType=Cl,e.lanes=i,e;case Tl:return e=tt(13,n,t,o),e.elementType=Tl,e.lanes=i,e;case Rl:return e=tt(19,n,t,o),e.elementType=Rl,e.lanes=i,e;case Kh:return ra(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gh:s=10;break e;case $h:s=9;break e;case $u:s=11;break e;case Ku:s=14;break e;case tn:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=tt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Hn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function ra(e,t,n,r){return e=tt(22,e,r,t),e.elementType=Kh,e.lanes=n,e.stateNode={isHidden:!1},e}function Xa(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function qa(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cS(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Nc(e,t,n,r,o,i,s,a,l){return e=new cS(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dc(i),e}function dS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vg(e){if(!e)return wn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Vm(e,n,t)}return t}function jg(e,t,n,r,o,i,s,a,l){return e=Nc(n,r,!0,e,o,i,s,a,l),e.context=Vg(null),n=e.current,r=Ie(),o=mn(n),i=Ot(r,o),i.callback=t??null,pn(n,i,o),e.current.lanes=o,ri(e,o,r),je(e,r),e}function oa(e,t,n,r){var o=t.current,i=Ie(),s=mn(o);return n=Vg(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(o,t,s),e!==null&&(ft(e,o,s,i),Yi(e,o,s)),s}function ks(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bc(e,t){jf(e,t),(e=e.alternate)&&jf(e,t)}function fS(){return null}var Bg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ic(e){this._internalRoot=e}ia.prototype.render=Ic.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));oa(e,t,null,null)};ia.prototype.unmount=Ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){oa(null,e,null,null)}),t[Bt]=null}};function ia(e){this._internalRoot=e}ia.prototype.unstable_scheduleHydration=function(e){if(e){var t=ym();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&xm(e)}};function kc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bf(){}function pS(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ks(s);i.call(u)}}var s=jg(t,r,e,0,null,!1,!1,"",Bf);return e._reactRootContainer=s,e[Bt]=s.current,Vo(e.nodeType===8?e.parentNode:e),Qn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=ks(l);a.call(u)}}var l=Nc(e,0,!1,null,null,!1,!1,"",Bf);return e._reactRootContainer=l,e[Bt]=l.current,Vo(e.nodeType===8?e.parentNode:e),Qn(function(){oa(t,l,n,r)}),l}function aa(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=ks(s);a.call(l)}}oa(t,s,e,o)}else s=pS(n,t,e,o,r);return ks(s)}mm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=po(t.pendingLanes);n!==0&&(Xu(t,n|1),je(t,le()),!($&6)&&(Lr=le()+500,Nn()))}break;case 13:Qn(function(){var r=Ut(e,1);if(r!==null){var o=Ie();ft(r,e,1,o)}}),bc(e,1)}};qu=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Ie();ft(t,e,134217728,n)}bc(e,134217728)}};gm=function(e){if(e.tag===13){var t=mn(e),n=Ut(e,t);if(n!==null){var r=Ie();ft(n,e,t,r)}bc(e,t)}};ym=function(){return Q};vm=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Ol=function(e,t,n){switch(t){case"input":if(Nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=qs(r);if(!o)throw Error(I(90));Qh(r),Nl(r,o)}}}break;case"textarea":qh(e,n);break;case"select":t=n.value,t!=null&&Sr(e,!!n.multiple,t,!1)}};om=Tc;im=Qn;var hS={usingClientEntryPoint:!1,Events:[ii,dr,qs,nm,rm,Tc]},so={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mS={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lm(e),e===null?null:e.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||fS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{Ks=_i.inject(mS),Et=_i}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hS;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kc(t))throw Error(I(200));return dS(e,t,null,n)};Ye.createRoot=function(e,t){if(!kc(e))throw Error(I(299));var n=!1,r="",o=Bg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Nc(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,Vo(e.nodeType===8?e.parentNode:e),new Ic(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=lm(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Qn(e)};Ye.hydrate=function(e,t,n){if(!sa(t))throw Error(I(200));return aa(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!kc(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Bg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=jg(t,null,e,1,n??null,o,!1,i,s),e[Bt]=t.current,Vo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ia(t)};Ye.render=function(e,t,n){if(!sa(t))throw Error(I(200));return aa(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!sa(e))throw Error(I(40));return e._reactRootContainer?(Qn(function(){aa(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Tc;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sa(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return aa(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function Ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)}catch(e){console.error(e)}}Ug(),Uh.exports=Ye;var ai=Uh.exports;const gS=bh(ai);var Uf=ai;El.createRoot=Uf.createRoot,El.hydrateRoot=Uf.hydrateRoot;const yS={theme:"system",setTheme:()=>null},zg=h.createContext(yS);function vS({children:e,defaultTheme:t="system",storageKey:n="vite-ui-theme",...r}){const[o,i]=h.useState(()=>localStorage.getItem(n)||t);h.useEffect(()=>{const a=window.document.documentElement;if(a.classList.remove("light","dark"),o==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a.classList.add(l);return}a.classList.add(o)},[o]);const s={theme:o,setTheme:a=>{localStorage.setItem(n,a),i(a)}};return S.jsx(zg.Provider,{...r,value:s,children:e})}const xS=()=>{const e=h.useContext(zg);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hg=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ES={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=h.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...a},l)=>h.createElement("svg",{ref:l,...ES,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Hg("lucide",o),...a},[...s.map(([u,c])=>h.createElement(u,c)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=(e,t)=>{const n=h.forwardRef(({className:r,...o},i)=>h.createElement(SS,{ref:i,iconNode:t,className:Hg(`lucide-${wS(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=Gr("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=Gr("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=Gr("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=Gr("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=Gr("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=Gr("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function bS(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function la(...e){return t=>e.forEach(n=>bS(n,t))}function ce(...e){return h.useCallback(la(...e),e)}var Fr=h.forwardRef((e,t)=>{const{children:n,...r}=e,o=h.Children.toArray(n),i=o.find(kS);if(i){const s=i.props.children,a=o.map(l=>l===i?h.Children.count(s)>1?h.Children.only(null):h.isValidElement(s)?s.props.children:null:l);return S.jsx(hu,{...r,ref:t,children:h.isValidElement(s)?h.cloneElement(s,void 0,a):null})}return S.jsx(hu,{...r,ref:t,children:n})});Fr.displayName="Slot";var hu=h.forwardRef((e,t)=>{const{children:n,...r}=e;if(h.isValidElement(n)){const o=DS(n);return h.cloneElement(n,{..._S(r,n.props),ref:t?la(t,o):o})}return h.Children.count(n)>1?h.Children.only(null):null});hu.displayName="SlotClone";var IS=({children:e})=>S.jsx(S.Fragment,{children:e});function kS(e){return h.isValidElement(e)&&e.type===IS}function _S(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function DS(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Wg(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Wg(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function MS(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Wg(e))&&(r&&(r+=" "),r+=t);return r}const zf=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,Hf=MS,Gg=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Hf(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:i}=t,s=Object.keys(o).map(u=>{const c=n==null?void 0:n[u],d=i==null?void 0:i[u];if(c===null)return null;const f=zf(c)||zf(d);return o[u][f]}),a=n&&Object.entries(n).reduce((u,c)=>{let[d,f]=c;return f===void 0||(u[d]=f),u},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,c)=>{let{class:d,className:f,...g}=c;return Object.entries(g).every(v=>{let[x,w]=v;return Array.isArray(w)?w.includes({...i,...a}[x]):{...i,...a}[x]===w})?[...u,d,f]:u},[]);return Hf(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};function $g(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=$g(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function OS(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=$g(e))&&(r&&(r+=" "),r+=t);return r}const _c="-";function LS(e){const t=VS(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;function o(s){const a=s.split(_c);return a[0]===""&&a.length!==1&&a.shift(),Kg(a,t)||FS(s)}function i(s,a){const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}return{getClassGroupId:o,getConflictingClassGroupIds:i}}function Kg(e,t){var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?Kg(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(_c);return(s=t.validators.find(({validator:a})=>a(i)))==null?void 0:s.classGroupId}const Wf=/^\[(.+)\]$/;function FS(e){if(Wf.test(e)){const t=Wf.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function VS(e){const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return BS(Object.entries(e.classGroups),n).forEach(([i,s])=>{mu(s,r,i,t)}),r}function mu(e,t,n,r){e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:Gf(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(jS(o)){mu(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,s])=>{mu(s,Gf(t,i),n,r)})})}function Gf(e,t){let n=e;return t.split(_c).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function jS(e){return e.isThemeGetter}function BS(e,t){return t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([s,a])=>[t+s,a])):i);return[n,o]}):e}function US(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;function o(i,s){n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)}return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return o(i,s),s},set(i,s){n.has(i)?n.set(i,s):o(i,s)}}}const Yg="!";function zS(e){const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],i=t.length;function s(a){const l=[];let u=0,c=0,d;for(let w=0;w<a.length;w++){let m=a[w];if(u===0){if(m===o&&(r||a.slice(w,w+i)===t)){l.push(a.slice(c,w)),c=w+i;continue}if(m==="/"){d=w;continue}}m==="["?u++:m==="]"&&u--}const f=l.length===0?a:a.substring(c),g=f.startsWith(Yg),v=g?f.substring(1):f,x=d&&d>c?d-c:void 0;return{modifiers:l,hasImportantModifier:g,baseClassName:v,maybePostfixModifierPosition:x}}return n?function(l){return n({className:l,parseClassName:s})}:s}function HS(e){if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t}function WS(e){return{cache:US(e.cacheSize),parseClassName:zS(e),...LS(e)}}const GS=/\s+/;function $S(e,t){const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=new Set;return e.trim().split(GS).map(s=>{const{modifiers:a,hasImportantModifier:l,baseClassName:u,maybePostfixModifierPosition:c}=n(s);let d=!!c,f=r(d?u.substring(0,c):u);if(!f){if(!d)return{isTailwindClass:!1,originalClassName:s};if(f=r(u),!f)return{isTailwindClass:!1,originalClassName:s};d=!1}const g=HS(a).join(":");return{isTailwindClass:!0,modifierId:l?g+Yg:g,classGroupId:f,originalClassName:s,hasPostfixModifier:d}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:u}=s,c=a+l;return i.has(c)?!1:(i.add(c),o(l,u).forEach(d=>i.add(a+d)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function KS(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Qg(t))&&(r&&(r+=" "),r+=n);return r}function Qg(e){if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Qg(e[r]))&&(n&&(n+=" "),n+=t);return n}function YS(e,...t){let n,r,o,i=s;function s(l){const u=t.reduce((c,d)=>d(c),e());return n=WS(u),r=n.cache.get,o=n.cache.set,i=a,a(l)}function a(l){const u=r(l);if(u)return u;const c=$S(l,n);return o(l,c),c}return function(){return i(KS.apply(null,arguments))}}function q(e){const t=n=>n[e]||[];return t.isThemeGetter=!0,t}const Xg=/^\[(?:([a-z-]+):)?(.+)\]$/i,QS=/^\d+\/\d+$/,XS=new Set(["px","full","screen"]),qS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ZS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,JS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,eC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,tC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Nt(e){return Bn(e)||XS.has(e)||QS.test(e)}function qt(e){return $r(e,"length",uC)}function Bn(e){return!!e&&!Number.isNaN(Number(e))}function Di(e){return $r(e,"number",Bn)}function ao(e){return!!e&&Number.isInteger(Number(e))}function nC(e){return e.endsWith("%")&&Bn(e.slice(0,-1))}function U(e){return Xg.test(e)}function Zt(e){return qS.test(e)}const rC=new Set(["length","size","percentage"]);function oC(e){return $r(e,rC,qg)}function iC(e){return $r(e,"position",qg)}const sC=new Set(["image","url"]);function aC(e){return $r(e,sC,dC)}function lC(e){return $r(e,"",cC)}function lo(){return!0}function $r(e,t,n){const r=Xg.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1}function uC(e){return ZS.test(e)&&!JS.test(e)}function qg(){return!1}function cC(e){return eC.test(e)}function dC(e){return tC.test(e)}function fC(){const e=q("colors"),t=q("spacing"),n=q("blur"),r=q("brightness"),o=q("borderColor"),i=q("borderRadius"),s=q("borderSpacing"),a=q("borderWidth"),l=q("contrast"),u=q("grayscale"),c=q("hueRotate"),d=q("invert"),f=q("gap"),g=q("gradientColorStops"),v=q("gradientColorStopPositions"),x=q("inset"),w=q("margin"),m=q("opacity"),p=q("padding"),y=q("saturate"),E=q("scale"),C=q("sepia"),R=q("skew"),A=q("space"),T=q("translate"),k=()=>["auto","contain","none"],b=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",U,t],M=()=>[U,t],K=()=>["",Nt,qt],W=()=>["auto",Bn,U],B=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],F=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],P=()=>["","0",U],D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],j=()=>[Bn,Di],G=()=>[Bn,U];return{cacheSize:500,separator:":",theme:{colors:[lo],spacing:[Nt,qt],blur:["none","",Zt,U],brightness:j(),borderColor:[e],borderRadius:["none","","full",Zt,U],borderSpacing:M(),borderWidth:K(),contrast:j(),grayscale:P(),hueRotate:G(),invert:P(),gap:M(),gradientColorStops:[e],gradientColorStopPositions:[nC,qt],inset:O(),margin:O(),opacity:j(),padding:M(),saturate:j(),scale:j(),sepia:P(),skew:G(),space:M(),translate:M()},classGroups:{aspect:[{aspect:["auto","square","video",U]}],container:["container"],columns:[{columns:[Zt]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...B(),U]}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ao,U]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",U]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",ao,U]}],"grid-cols":[{"grid-cols":[lo]}],"col-start-end":[{col:["auto",{span:["full",ao,U]},U]}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":[lo]}],"row-start-end":[{row:["auto",{span:[ao,U]},U]}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",U]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",U]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[p]}],px:[{px:[p]}],py:[{py:[p]}],ps:[{ps:[p]}],pe:[{pe:[p]}],pt:[{pt:[p]}],pr:[{pr:[p]}],pb:[{pb:[p]}],pl:[{pl:[p]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",U,t]}],"min-w":[{"min-w":[U,t,"min","max","fit"]}],"max-w":[{"max-w":[U,t,"none","full","min","max","fit","prose",{screen:[Zt]},Zt]}],h:[{h:[U,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[U,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[U,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[U,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Zt,qt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Di]}],"font-family":[{font:[lo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",U]}],"line-clamp":[{"line-clamp":["none",Bn,Di]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Nt,U]}],"list-image":[{"list-image":["none",U]}],"list-style-type":[{list:["none","disc","decimal",U]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Nt,qt]}],"underline-offset":[{"underline-offset":["auto",Nt,U]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",U]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",U]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...B(),iC]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",oC]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},aC]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:V()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[Nt,U]}],"outline-w":[{outline:[Nt,qt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[Nt,qt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Zt,lC]}],"shadow-color":[{shadow:[lo]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...F(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":F()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Zt,U]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[d]}],saturate:[{saturate:[y]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",U]}],duration:[{duration:G()}],ease:[{ease:["linear","in","out","in-out",U]}],delay:[{delay:G()}],animate:[{animate:["none","spin","ping","pulse","bounce",U]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[E]}],"scale-x":[{"scale-x":[E]}],"scale-y":[{"scale-y":[E]}],rotate:[{rotate:[ao,U]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[R]}],"skew-y":[{"skew-y":[R]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",U]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",U]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",U]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Nt,qt,Di]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const pC=YS(fC);function Pe(...e){return pC(OS(e))}const hC=Gg("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Dc=h.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>{const s=r?Fr:"button";return S.jsx(s,{className:Pe(hC({variant:t,size:n,className:e})),ref:i,...o})});Dc.displayName="Button";function z(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Jn(e,t=[]){let n=[];function r(i,s){const a=h.createContext(s),l=n.length;n=[...n,s];function u(d){const{scope:f,children:g,...v}=d,x=(f==null?void 0:f[e][l])||a,w=h.useMemo(()=>v,Object.values(v));return S.jsx(x.Provider,{value:w,children:g})}function c(d,f){const g=(f==null?void 0:f[e][l])||a,v=h.useContext(g);if(v)return v;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,c]}const o=()=>{const i=n.map(s=>h.createContext(s));return function(a){const l=(a==null?void 0:a[e])||i;return h.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,mC(o,...t)]}function mC(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((a,{useScope:l,scopeName:u})=>{const d=l(i)[`__scope${u}`];return{...a,...d}},{});return h.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function fe(e){const t=h.useRef(e);return h.useEffect(()=>{t.current=e}),h.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Zg({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=gC({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,a=fe(n),l=h.useCallback(u=>{if(i){const d=typeof u=="function"?u(e):u;d!==e&&a(d)}else o(u)},[i,e,o,a]);return[s,l]}function gC({defaultProp:e,onChange:t}){const n=h.useState(e),[r]=n,o=h.useRef(r),i=fe(t);return h.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}var yC=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],te=yC.reduce((e,t)=>{const n=h.forwardRef((r,o)=>{const{asChild:i,...s}=r,a=i?Fr:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),S.jsx(a,{...s,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Jg(e,t){e&&ai.flushSync(()=>e.dispatchEvent(t))}function ey(e){const t=e+"CollectionProvider",[n,r]=Jn(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=g=>{const{scope:v,children:x}=g,w=bt.useRef(null),m=bt.useRef(new Map).current;return S.jsx(o,{scope:v,itemMap:m,collectionRef:w,children:x})};s.displayName=t;const a=e+"CollectionSlot",l=bt.forwardRef((g,v)=>{const{scope:x,children:w}=g,m=i(a,x),p=ce(v,m.collectionRef);return S.jsx(Fr,{ref:p,children:w})});l.displayName=a;const u=e+"CollectionItemSlot",c="data-radix-collection-item",d=bt.forwardRef((g,v)=>{const{scope:x,children:w,...m}=g,p=bt.useRef(null),y=ce(v,p),E=i(u,x);return bt.useEffect(()=>(E.itemMap.set(p,{ref:p,...m}),()=>void E.itemMap.delete(p))),S.jsx(Fr,{[c]:"",ref:y,children:w})});d.displayName=u;function f(g){const v=i(e+"CollectionConsumer",g);return bt.useCallback(()=>{const w=v.collectionRef.current;if(!w)return[];const m=Array.from(w.querySelectorAll(`[${c}]`));return Array.from(v.itemMap.values()).sort((E,C)=>m.indexOf(E.ref.current)-m.indexOf(C.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:s,Slot:l,ItemSlot:d},f,r]}var vC=h.createContext(void 0);function Mc(e){const t=h.useContext(vC);return e||t||"ltr"}function xC(e,t=globalThis==null?void 0:globalThis.document){const n=fe(e);h.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var wC="DismissableLayer",gu="dismissableLayer.update",EC="dismissableLayer.pointerDownOutside",SC="dismissableLayer.focusOutside",$f,ty=h.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),ny=h.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:s,onDismiss:a,...l}=e,u=h.useContext(ty),[c,d]=h.useState(null),f=(c==null?void 0:c.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,g]=h.useState({}),v=ce(t,A=>d(A)),x=Array.from(u.layers),[w]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),m=x.indexOf(w),p=c?x.indexOf(c):-1,y=u.layersWithOutsidePointerEventsDisabled.size>0,E=p>=m,C=RC(A=>{const T=A.target,k=[...u.branches].some(b=>b.contains(T));!E||k||(o==null||o(A),s==null||s(A),A.defaultPrevented||a==null||a())},f),R=AC(A=>{const T=A.target;[...u.branches].some(b=>b.contains(T))||(i==null||i(A),s==null||s(A),A.defaultPrevented||a==null||a())},f);return xC(A=>{p===u.layers.size-1&&(r==null||r(A),!A.defaultPrevented&&a&&(A.preventDefault(),a()))},f),h.useEffect(()=>{if(c)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&($f=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(c)),u.layers.add(c),Kf(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=$f)}},[c,f,n,u]),h.useEffect(()=>()=>{c&&(u.layers.delete(c),u.layersWithOutsidePointerEventsDisabled.delete(c),Kf())},[c,u]),h.useEffect(()=>{const A=()=>g({});return document.addEventListener(gu,A),()=>document.removeEventListener(gu,A)},[]),S.jsx(te.div,{...l,ref:v,style:{pointerEvents:y?E?"auto":"none":void 0,...e.style},onFocusCapture:z(e.onFocusCapture,R.onFocusCapture),onBlurCapture:z(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:z(e.onPointerDownCapture,C.onPointerDownCapture)})});ny.displayName=wC;var CC="DismissableLayerBranch",TC=h.forwardRef((e,t)=>{const n=h.useContext(ty),r=h.useRef(null),o=ce(t,r);return h.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),S.jsx(te.div,{...e,ref:o})});TC.displayName=CC;function RC(e,t=globalThis==null?void 0:globalThis.document){const n=fe(e),r=h.useRef(!1),o=h.useRef(()=>{});return h.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let l=function(){ry(EC,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function AC(e,t=globalThis==null?void 0:globalThis.document){const n=fe(e),r=h.useRef(!1);return h.useEffect(()=>{const o=i=>{i.target&&!r.current&&ry(SC,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Kf(){const e=new CustomEvent(gu);document.dispatchEvent(e)}function ry(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Jg(o,i):o.dispatchEvent(i)}var Za=0;function PC(){h.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Yf()),document.body.insertAdjacentElement("beforeend",e[1]??Yf()),Za++,()=>{Za===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Za--}},[])}function Yf(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var Ja="focusScope.autoFocusOnMount",el="focusScope.autoFocusOnUnmount",Qf={bubbles:!1,cancelable:!0},NC="FocusScope",oy=h.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...s}=e,[a,l]=h.useState(null),u=fe(o),c=fe(i),d=h.useRef(null),f=ce(t,x=>l(x)),g=h.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;h.useEffect(()=>{if(r){let x=function(y){if(g.paused||!a)return;const E=y.target;a.contains(E)?d.current=E:Jt(d.current,{select:!0})},w=function(y){if(g.paused||!a)return;const E=y.relatedTarget;E!==null&&(a.contains(E)||Jt(d.current,{select:!0}))},m=function(y){if(document.activeElement===document.body)for(const C of y)C.removedNodes.length>0&&Jt(a)};document.addEventListener("focusin",x),document.addEventListener("focusout",w);const p=new MutationObserver(m);return a&&p.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",x),document.removeEventListener("focusout",w),p.disconnect()}}},[r,a,g.paused]),h.useEffect(()=>{if(a){qf.add(g);const x=document.activeElement;if(!a.contains(x)){const m=new CustomEvent(Ja,Qf);a.addEventListener(Ja,u),a.dispatchEvent(m),m.defaultPrevented||(bC(MC(iy(a)),{select:!0}),document.activeElement===x&&Jt(a))}return()=>{a.removeEventListener(Ja,u),setTimeout(()=>{const m=new CustomEvent(el,Qf);a.addEventListener(el,c),a.dispatchEvent(m),m.defaultPrevented||Jt(x??document.body,{select:!0}),a.removeEventListener(el,c),qf.remove(g)},0)}}},[a,u,c,g]);const v=h.useCallback(x=>{if(!n&&!r||g.paused)return;const w=x.key==="Tab"&&!x.altKey&&!x.ctrlKey&&!x.metaKey,m=document.activeElement;if(w&&m){const p=x.currentTarget,[y,E]=IC(p);y&&E?!x.shiftKey&&m===E?(x.preventDefault(),n&&Jt(y,{select:!0})):x.shiftKey&&m===y&&(x.preventDefault(),n&&Jt(E,{select:!0})):m===p&&x.preventDefault()}},[n,r,g.paused]);return S.jsx(te.div,{tabIndex:-1,...s,ref:f,onKeyDown:v})});oy.displayName=NC;function bC(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Jt(r,{select:t}),document.activeElement!==n)return}function IC(e){const t=iy(e),n=Xf(t,e),r=Xf(t.reverse(),e);return[n,r]}function iy(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Xf(e,t){for(const n of e)if(!kC(n,{upTo:t}))return n}function kC(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function _C(e){return e instanceof HTMLInputElement&&"select"in e}function Jt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&_C(e)&&t&&e.select()}}var qf=DC();function DC(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Zf(e,t),e.unshift(t)},remove(t){var n;e=Zf(e,t),(n=e[0])==null||n.resume()}}}function Zf(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function MC(e){return e.filter(t=>t.tagName!=="A")}var Tt=globalThis!=null&&globalThis.document?h.useLayoutEffect:()=>{},OC=iw.useId||(()=>{}),LC=0;function yu(e){const[t,n]=h.useState(OC());return Tt(()=>{n(r=>r??String(LC++))},[e]),t?`radix-${t}`:""}const FC=["top","right","bottom","left"],wt=Math.min,ze=Math.max,_s=Math.round,Mi=Math.floor,En=e=>({x:e,y:e}),VC={left:"right",right:"left",bottom:"top",top:"bottom"},jC={start:"end",end:"start"};function vu(e,t,n){return ze(e,wt(t,n))}function Ht(e,t){return typeof e=="function"?e(t):e}function Wt(e){return e.split("-")[0]}function Kr(e){return e.split("-")[1]}function Oc(e){return e==="x"?"y":"x"}function Lc(e){return e==="y"?"height":"width"}function Sn(e){return["top","bottom"].includes(Wt(e))?"y":"x"}function Fc(e){return Oc(Sn(e))}function BC(e,t,n){n===void 0&&(n=!1);const r=Kr(e),o=Fc(e),i=Lc(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=Ds(s)),[s,Ds(s)]}function UC(e){const t=Ds(e);return[xu(e),t,xu(t)]}function xu(e){return e.replace(/start|end/g,t=>jC[t])}function zC(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:s;default:return[]}}function HC(e,t,n,r){const o=Kr(e);let i=zC(Wt(e),n==="start",r);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(xu)))),i}function Ds(e){return e.replace(/left|right|bottom|top/g,t=>VC[t])}function WC(e){return{top:0,right:0,bottom:0,left:0,...e}}function sy(e){return typeof e!="number"?WC(e):{top:e,right:e,bottom:e,left:e}}function Ms(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function Jf(e,t,n){let{reference:r,floating:o}=e;const i=Sn(t),s=Fc(t),a=Lc(s),l=Wt(t),u=i==="y",c=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[a]/2-o[a]/2;let g;switch(l){case"top":g={x:c,y:r.y-o.height};break;case"bottom":g={x:c,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:d};break;case"left":g={x:r.x-o.width,y:d};break;default:g={x:r.x,y:r.y}}switch(Kr(t)){case"start":g[s]-=f*(n&&u?-1:1);break;case"end":g[s]+=f*(n&&u?-1:1);break}return g}const GC=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,a=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:d}=Jf(u,r,l),f=r,g={},v=0;for(let x=0;x<a.length;x++){const{name:w,fn:m}=a[x],{x:p,y,data:E,reset:C}=await m({x:c,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:g,rects:u,platform:s,elements:{reference:e,floating:t}});c=p??c,d=y??d,g={...g,[w]:{...g[w],...E}},C&&v<=50&&(v++,typeof C=="object"&&(C.placement&&(f=C.placement),C.rects&&(u=C.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):C.rects),{x:c,y:d}=Jf(u,f,l)),x=-1)}return{x:c,y:d,placement:f,strategy:o,middlewareData:g}};async function Ko(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:s,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:g=0}=Ht(t,e),v=sy(g),w=a[f?d==="floating"?"reference":"floating":d],m=Ms(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:l})),p=d==="floating"?{x:r,y:o,width:s.floating.width,height:s.floating.height}:s.reference,y=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),E=await(i.isElement==null?void 0:i.isElement(y))?await(i.getScale==null?void 0:i.getScale(y))||{x:1,y:1}:{x:1,y:1},C=Ms(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:p,offsetParent:y,strategy:l}):p);return{top:(m.top-C.top+v.top)/E.y,bottom:(C.bottom-m.bottom+v.bottom)/E.y,left:(m.left-C.left+v.left)/E.x,right:(C.right-m.right+v.right)/E.x}}const $C=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:s,elements:a,middlewareData:l}=t,{element:u,padding:c=0}=Ht(e,t)||{};if(u==null)return{};const d=sy(c),f={x:n,y:r},g=Fc(o),v=Lc(g),x=await s.getDimensions(u),w=g==="y",m=w?"top":"left",p=w?"bottom":"right",y=w?"clientHeight":"clientWidth",E=i.reference[v]+i.reference[g]-f[g]-i.floating[v],C=f[g]-i.reference[g],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let A=R?R[y]:0;(!A||!await(s.isElement==null?void 0:s.isElement(R)))&&(A=a.floating[y]||i.floating[v]);const T=E/2-C/2,k=A/2-x[v]/2-1,b=wt(d[m],k),O=wt(d[p],k),M=b,K=A-x[v]-O,W=A/2-x[v]/2+T,B=vu(M,W,K),V=!l.arrow&&Kr(o)!=null&&W!==B&&i.reference[v]/2-(W<M?b:O)-x[v]/2<0,F=V?W<M?W-M:W-K:0;return{[g]:f[g]+F,data:{[g]:B,centerOffset:W-B-F,...V&&{alignmentOffset:F}},reset:V}}}),KC=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...w}=Ht(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const m=Wt(o),p=Sn(a),y=Wt(a)===a,E=await(l.isRTL==null?void 0:l.isRTL(u.floating)),C=f||(y||!x?[Ds(a)]:UC(a)),R=v!=="none";!f&&R&&C.push(...HC(a,x,v,E));const A=[a,...C],T=await Ko(t,w),k=[];let b=((r=i.flip)==null?void 0:r.overflows)||[];if(c&&k.push(T[m]),d){const W=BC(o,s,E);k.push(T[W[0]],T[W[1]])}if(b=[...b,{placement:o,overflows:k}],!k.every(W=>W<=0)){var O,M;const W=(((O=i.flip)==null?void 0:O.index)||0)+1,B=A[W];if(B)return{data:{index:W,overflows:b},reset:{placement:B}};let V=(M=b.filter(F=>F.overflows[0]<=0).sort((F,N)=>F.overflows[1]-N.overflows[1])[0])==null?void 0:M.placement;if(!V)switch(g){case"bestFit":{var K;const F=(K=b.filter(N=>{if(R){const P=Sn(N.placement);return P===p||P==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(P=>P>0).reduce((P,D)=>P+D,0)]).sort((N,P)=>N[1]-P[1])[0])==null?void 0:K[0];F&&(V=F);break}case"initialPlacement":V=a;break}if(o!==V)return{reset:{placement:V}}}return{}}}};function ep(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function tp(e){return FC.some(t=>e[t]>=0)}const YC=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Ht(e,t);switch(r){case"referenceHidden":{const i=await Ko(t,{...o,elementContext:"reference"}),s=ep(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:tp(s)}}}case"escaped":{const i=await Ko(t,{...o,altBoundary:!0}),s=ep(i,n.floating);return{data:{escapedOffsets:s,escaped:tp(s)}}}default:return{}}}}};async function QC(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=Wt(n),a=Kr(n),l=Sn(n)==="y",u=["left","top"].includes(s)?-1:1,c=i&&l?-1:1,d=Ht(t,e);let{mainAxis:f,crossAxis:g,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),l?{x:g*c,y:f*u}:{x:f*u,y:g*c}}const XC=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:s,middlewareData:a}=t,l=await QC(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:s}}}}},qC=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:w=>{let{x:m,y:p}=w;return{x:m,y:p}}},...l}=Ht(e,t),u={x:n,y:r},c=await Ko(t,l),d=Sn(Wt(o)),f=Oc(d);let g=u[f],v=u[d];if(i){const w=f==="y"?"top":"left",m=f==="y"?"bottom":"right",p=g+c[w],y=g-c[m];g=vu(p,g,y)}if(s){const w=d==="y"?"top":"left",m=d==="y"?"bottom":"right",p=v+c[w],y=v-c[m];v=vu(p,v,y)}const x=a.fn({...t,[f]:g,[d]:v});return{...x,data:{x:x.x-n,y:x.y-r}}}}},ZC=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:s}=t,{offset:a=0,mainAxis:l=!0,crossAxis:u=!0}=Ht(e,t),c={x:n,y:r},d=Sn(o),f=Oc(d);let g=c[f],v=c[d];const x=Ht(a,t),w=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:0,crossAxis:0,...x};if(l){const y=f==="y"?"height":"width",E=i.reference[f]-i.floating[y]+w.mainAxis,C=i.reference[f]+i.reference[y]-w.mainAxis;g<E?g=E:g>C&&(g=C)}if(u){var m,p;const y=f==="y"?"width":"height",E=["top","left"].includes(Wt(o)),C=i.reference[d]-i.floating[y]+(E&&((m=s.offset)==null?void 0:m[d])||0)+(E?0:w.crossAxis),R=i.reference[d]+i.reference[y]+(E?0:((p=s.offset)==null?void 0:p[d])||0)-(E?w.crossAxis:0);v<C?v=C:v>R&&(v=R)}return{[f]:g,[d]:v}}}},JC=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:s=()=>{},...a}=Ht(e,t),l=await Ko(t,a),u=Wt(n),c=Kr(n),d=Sn(n)==="y",{width:f,height:g}=r.floating;let v,x;u==="top"||u==="bottom"?(v=u,x=c===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(x=u,v=c==="end"?"top":"bottom");const w=g-l.top-l.bottom,m=f-l.left-l.right,p=wt(g-l[v],w),y=wt(f-l[x],m),E=!t.middlewareData.shift;let C=p,R=y;if(d?R=c||E?wt(y,m):m:C=c||E?wt(p,w):w,E&&!c){const T=ze(l.left,0),k=ze(l.right,0),b=ze(l.top,0),O=ze(l.bottom,0);d?R=f-2*(T!==0||k!==0?T+k:ze(l.left,l.right)):C=g-2*(b!==0||O!==0?b+O:ze(l.top,l.bottom))}await s({...t,availableWidth:R,availableHeight:C});const A=await o.getDimensions(i.floating);return f!==A.width||g!==A.height?{reset:{rects:!0}}:{}}}};function Yr(e){return ay(e)?(e.nodeName||"").toLowerCase():"#document"}function Ge(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Kt(e){var t;return(t=(ay(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ay(e){return e instanceof Node||e instanceof Ge(e).Node}function Rt(e){return e instanceof Element||e instanceof Ge(e).Element}function At(e){return e instanceof HTMLElement||e instanceof Ge(e).HTMLElement}function np(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ge(e).ShadowRoot}function li(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=ht(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function e1(e){return["table","td","th"].includes(Yr(e))}function ua(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Vc(e){const t=jc(),n=ht(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function t1(e){let t=Cn(e);for(;At(t)&&!Vr(t);){if(ua(t))return null;if(Vc(t))return t;t=Cn(t)}return null}function jc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Vr(e){return["html","body","#document"].includes(Yr(e))}function ht(e){return Ge(e).getComputedStyle(e)}function ca(e){return Rt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Cn(e){if(Yr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||np(e)&&e.host||Kt(e);return np(t)?t.host:t}function ly(e){const t=Cn(e);return Vr(t)?e.ownerDocument?e.ownerDocument.body:e.body:At(t)&&li(t)?t:ly(t)}function Yo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=ly(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),s=Ge(o);return i?t.concat(s,s.visualViewport||[],li(o)?o:[],s.frameElement&&n?Yo(s.frameElement):[]):t.concat(o,Yo(o,[],n))}function uy(e){const t=ht(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=At(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,a=_s(n)!==i||_s(r)!==s;return a&&(n=i,r=s),{width:n,height:r,$:a}}function Bc(e){return Rt(e)?e:e.contextElement}function Nr(e){const t=Bc(e);if(!At(t))return En(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=uy(t);let s=(i?_s(n.width):n.width)/r,a=(i?_s(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const n1=En(0);function cy(e){const t=Ge(e);return!jc()||!t.visualViewport?n1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function r1(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ge(e)?!1:t}function Xn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Bc(e);let s=En(1);t&&(r?Rt(r)&&(s=Nr(r)):s=Nr(e));const a=r1(i,n,r)?cy(i):En(0);let l=(o.left+a.x)/s.x,u=(o.top+a.y)/s.y,c=o.width/s.x,d=o.height/s.y;if(i){const f=Ge(i),g=r&&Rt(r)?Ge(r):r;let v=f,x=v.frameElement;for(;x&&r&&g!==v;){const w=Nr(x),m=x.getBoundingClientRect(),p=ht(x),y=m.left+(x.clientLeft+parseFloat(p.paddingLeft))*w.x,E=m.top+(x.clientTop+parseFloat(p.paddingTop))*w.y;l*=w.x,u*=w.y,c*=w.x,d*=w.y,l+=y,u+=E,v=Ge(x),x=v.frameElement}}return Ms({width:c,height:d,x:l,y:u})}function o1(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",s=Kt(r),a=t?ua(t.floating):!1;if(r===s||a&&i)return n;let l={scrollLeft:0,scrollTop:0},u=En(1);const c=En(0),d=At(r);if((d||!d&&!i)&&((Yr(r)!=="body"||li(s))&&(l=ca(r)),At(r))){const f=Xn(r);u=Nr(r),c.x=f.x+r.clientLeft,c.y=f.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+c.x,y:n.y*u.y-l.scrollTop*u.y+c.y}}function i1(e){return Array.from(e.getClientRects())}function dy(e){return Xn(Kt(e)).left+ca(e).scrollLeft}function s1(e){const t=Kt(e),n=ca(e),r=e.ownerDocument.body,o=ze(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=ze(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+dy(e);const a=-n.scrollTop;return ht(r).direction==="rtl"&&(s+=ze(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:a}}function a1(e,t){const n=Ge(e),r=Kt(e),o=n.visualViewport;let i=r.clientWidth,s=r.clientHeight,a=0,l=0;if(o){i=o.width,s=o.height;const u=jc();(!u||u&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:i,height:s,x:a,y:l}}function l1(e,t){const n=Xn(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=At(e)?Nr(e):En(1),s=e.clientWidth*i.x,a=e.clientHeight*i.y,l=o*i.x,u=r*i.y;return{width:s,height:a,x:l,y:u}}function rp(e,t,n){let r;if(t==="viewport")r=a1(e,n);else if(t==="document")r=s1(Kt(e));else if(Rt(t))r=l1(t,n);else{const o=cy(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Ms(r)}function fy(e,t){const n=Cn(e);return n===t||!Rt(n)||Vr(n)?!1:ht(n).position==="fixed"||fy(n,t)}function u1(e,t){const n=t.get(e);if(n)return n;let r=Yo(e,[],!1).filter(a=>Rt(a)&&Yr(a)!=="body"),o=null;const i=ht(e).position==="fixed";let s=i?Cn(e):e;for(;Rt(s)&&!Vr(s);){const a=ht(s),l=Vc(s);!l&&a.position==="fixed"&&(o=null),(i?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||li(s)&&!l&&fy(e,s))?r=r.filter(c=>c!==s):o=a,s=Cn(s)}return t.set(e,r),r}function c1(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const s=[...n==="clippingAncestors"?ua(t)?[]:u1(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((u,c)=>{const d=rp(t,c,o);return u.top=ze(d.top,u.top),u.right=wt(d.right,u.right),u.bottom=wt(d.bottom,u.bottom),u.left=ze(d.left,u.left),u},rp(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function d1(e){const{width:t,height:n}=uy(e);return{width:t,height:n}}function f1(e,t,n){const r=At(t),o=Kt(t),i=n==="fixed",s=Xn(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const l=En(0);if(r||!r&&!i)if((Yr(t)!=="body"||li(o))&&(a=ca(t)),r){const d=Xn(t,!0,i,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else o&&(l.x=dy(o));const u=s.left+a.scrollLeft-l.x,c=s.top+a.scrollTop-l.y;return{x:u,y:c,width:s.width,height:s.height}}function tl(e){return ht(e).position==="static"}function op(e,t){return!At(e)||ht(e).position==="fixed"?null:t?t(e):e.offsetParent}function py(e,t){const n=Ge(e);if(ua(e))return n;if(!At(e)){let o=Cn(e);for(;o&&!Vr(o);){if(Rt(o)&&!tl(o))return o;o=Cn(o)}return n}let r=op(e,t);for(;r&&e1(r)&&tl(r);)r=op(r,t);return r&&Vr(r)&&tl(r)&&!Vc(r)?n:r||t1(e)||n}const p1=async function(e){const t=this.getOffsetParent||py,n=this.getDimensions,r=await n(e.floating);return{reference:f1(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function h1(e){return ht(e).direction==="rtl"}const m1={convertOffsetParentRelativeRectToViewportRelativeRect:o1,getDocumentElement:Kt,getClippingRect:c1,getOffsetParent:py,getElementRects:p1,getClientRects:i1,getDimensions:d1,getScale:Nr,isElement:Rt,isRTL:h1};function g1(e,t){let n=null,r;const o=Kt(e);function i(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),i();const{left:u,top:c,width:d,height:f}=e.getBoundingClientRect();if(a||t(),!d||!f)return;const g=Mi(c),v=Mi(o.clientWidth-(u+d)),x=Mi(o.clientHeight-(c+f)),w=Mi(u),p={rootMargin:-g+"px "+-v+"px "+-x+"px "+-w+"px",threshold:ze(0,wt(1,l))||1};let y=!0;function E(C){const R=C[0].intersectionRatio;if(R!==l){if(!y)return s();R?s(!1,R):r=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(E,{...p,root:o.ownerDocument})}catch{n=new IntersectionObserver(E,p)}n.observe(e)}return s(!0),i}function y1(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=Bc(e),c=o||i?[...u?Yo(u):[],...Yo(t)]:[];c.forEach(m=>{o&&m.addEventListener("scroll",n,{passive:!0}),i&&m.addEventListener("resize",n)});const d=u&&a?g1(u,n):null;let f=-1,g=null;s&&(g=new ResizeObserver(m=>{let[p]=m;p&&p.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var y;(y=g)==null||y.observe(t)})),n()}),u&&!l&&g.observe(u),g.observe(t));let v,x=l?Xn(e):null;l&&w();function w(){const m=Xn(e);x&&(m.x!==x.x||m.y!==x.y||m.width!==x.width||m.height!==x.height)&&n(),x=m,v=requestAnimationFrame(w)}return n(),()=>{var m;c.forEach(p=>{o&&p.removeEventListener("scroll",n),i&&p.removeEventListener("resize",n)}),d==null||d(),(m=g)==null||m.disconnect(),g=null,l&&cancelAnimationFrame(v)}}const v1=XC,x1=qC,w1=KC,E1=JC,S1=YC,ip=$C,C1=ZC,T1=(e,t,n)=>{const r=new Map,o={platform:m1,...n},i={...o.platform,_c:r};return GC(e,t,{...o,platform:i})};var ts=typeof document<"u"?h.useLayoutEffect:h.useEffect;function Os(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Os(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Os(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function hy(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function sp(e,t){const n=hy(e);return Math.round(t*n)/n}function ap(e){const t=h.useRef(e);return ts(()=>{t.current=e}),t}function R1(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:s}={},transform:a=!0,whileElementsMounted:l,open:u}=e,[c,d]=h.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,g]=h.useState(r);Os(f,r)||g(r);const[v,x]=h.useState(null),[w,m]=h.useState(null),p=h.useCallback(F=>{F!==R.current&&(R.current=F,x(F))},[]),y=h.useCallback(F=>{F!==A.current&&(A.current=F,m(F))},[]),E=i||v,C=s||w,R=h.useRef(null),A=h.useRef(null),T=h.useRef(c),k=l!=null,b=ap(l),O=ap(o),M=h.useCallback(()=>{if(!R.current||!A.current)return;const F={placement:t,strategy:n,middleware:f};O.current&&(F.platform=O.current),T1(R.current,A.current,F).then(N=>{const P={...N,isPositioned:!0};K.current&&!Os(T.current,P)&&(T.current=P,ai.flushSync(()=>{d(P)}))})},[f,t,n,O]);ts(()=>{u===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,d(F=>({...F,isPositioned:!1})))},[u]);const K=h.useRef(!1);ts(()=>(K.current=!0,()=>{K.current=!1}),[]),ts(()=>{if(E&&(R.current=E),C&&(A.current=C),E&&C){if(b.current)return b.current(E,C,M);M()}},[E,C,M,b,k]);const W=h.useMemo(()=>({reference:R,floating:A,setReference:p,setFloating:y}),[p,y]),B=h.useMemo(()=>({reference:E,floating:C}),[E,C]),V=h.useMemo(()=>{const F={position:n,left:0,top:0};if(!B.floating)return F;const N=sp(B.floating,c.x),P=sp(B.floating,c.y);return a?{...F,transform:"translate("+N+"px, "+P+"px)",...hy(B.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:N,top:P}},[n,a,B.floating,c.x,c.y]);return h.useMemo(()=>({...c,update:M,refs:W,elements:B,floatingStyles:V}),[c,M,W,B,V])}const A1=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?ip({element:r.current,padding:o}).fn(n):{}:r?ip({element:r,padding:o}).fn(n):{}}}},P1=(e,t)=>({...v1(e),options:[e,t]}),N1=(e,t)=>({...x1(e),options:[e,t]}),b1=(e,t)=>({...C1(e),options:[e,t]}),I1=(e,t)=>({...w1(e),options:[e,t]}),k1=(e,t)=>({...E1(e),options:[e,t]}),_1=(e,t)=>({...S1(e),options:[e,t]}),D1=(e,t)=>({...A1(e),options:[e,t]});var M1="Arrow",my=h.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...i}=e;return S.jsx(te.svg,{...i,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:S.jsx("polygon",{points:"0,0 30,0 15,10"})})});my.displayName=M1;var O1=my;function L1(e){const[t,n]=h.useState(void 0);return Tt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let s,a;if("borderBoxSize"in i){const l=i.borderBoxSize,u=Array.isArray(l)?l[0]:l;s=u.inlineSize,a=u.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Uc="Popper",[gy,yy]=Jn(Uc),[F1,vy]=gy(Uc),xy=e=>{const{__scopePopper:t,children:n}=e,[r,o]=h.useState(null);return S.jsx(F1,{scope:t,anchor:r,onAnchorChange:o,children:n})};xy.displayName=Uc;var wy="PopperAnchor",Ey=h.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=vy(wy,n),s=h.useRef(null),a=ce(t,s);return h.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:S.jsx(te.div,{...o,ref:a})});Ey.displayName=wy;var zc="PopperContent",[V1,j1]=gy(zc),Sy=h.forwardRef((e,t)=>{var Me,Xr,Xe,qr,bd,Id;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:i="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:c=0,sticky:d="partial",hideWhenDetached:f=!1,updatePositionStrategy:g="optimized",onPlaced:v,...x}=e,w=vy(zc,n),[m,p]=h.useState(null),y=ce(t,Zr=>p(Zr)),[E,C]=h.useState(null),R=L1(E),A=(R==null?void 0:R.width)??0,T=(R==null?void 0:R.height)??0,k=r+(i!=="center"?"-"+i:""),b=typeof c=="number"?c:{top:0,right:0,bottom:0,left:0,...c},O=Array.isArray(u)?u:[u],M=O.length>0,K={padding:b,boundary:O.filter(U1),altBoundary:M},{refs:W,floatingStyles:B,placement:V,isPositioned:F,middlewareData:N}=R1({strategy:"fixed",placement:k,whileElementsMounted:(...Zr)=>y1(...Zr,{animationFrame:g==="always"}),elements:{reference:w.anchor},middleware:[P1({mainAxis:o+T,alignmentAxis:s}),l&&N1({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?b1():void 0,...K}),l&&I1({...K}),k1({...K,apply:({elements:Zr,rects:kd,availableWidth:jx,availableHeight:Bx})=>{const{width:Ux,height:zx}=kd.reference,mi=Zr.floating.style;mi.setProperty("--radix-popper-available-width",`${jx}px`),mi.setProperty("--radix-popper-available-height",`${Bx}px`),mi.setProperty("--radix-popper-anchor-width",`${Ux}px`),mi.setProperty("--radix-popper-anchor-height",`${zx}px`)}}),E&&D1({element:E,padding:a}),z1({arrowWidth:A,arrowHeight:T}),f&&_1({strategy:"referenceHidden",...K})]}),[P,D]=Ry(V),j=fe(v);Tt(()=>{F&&(j==null||j())},[F,j]);const G=(Me=N.arrow)==null?void 0:Me.x,mt=(Xr=N.arrow)==null?void 0:Xr.y,Be=((Xe=N.arrow)==null?void 0:Xe.centerOffset)!==0,[Qt,Ne]=h.useState();return Tt(()=>{m&&Ne(window.getComputedStyle(m).zIndex)},[m]),S.jsx("div",{ref:W.setFloating,"data-radix-popper-content-wrapper":"",style:{...B,transform:F?B.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Qt,"--radix-popper-transform-origin":[(qr=N.transformOrigin)==null?void 0:qr.x,(bd=N.transformOrigin)==null?void 0:bd.y].join(" "),...((Id=N.hide)==null?void 0:Id.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:S.jsx(V1,{scope:n,placedSide:P,onArrowChange:C,arrowX:G,arrowY:mt,shouldHideArrow:Be,children:S.jsx(te.div,{"data-side":P,"data-align":D,...x,ref:y,style:{...x.style,animation:F?void 0:"none"}})})})});Sy.displayName=zc;var Cy="PopperArrow",B1={top:"bottom",right:"left",bottom:"top",left:"right"},Ty=h.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,i=j1(Cy,r),s=B1[i.placedSide];return S.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:S.jsx(O1,{...o,ref:n,style:{...o.style,display:"block"}})})});Ty.displayName=Cy;function U1(e){return e!==null}var z1=e=>({name:"transformOrigin",options:e,fn(t){var w,m,p;const{placement:n,rects:r,middlewareData:o}=t,s=((w=o.arrow)==null?void 0:w.centerOffset)!==0,a=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[u,c]=Ry(n),d={start:"0%",center:"50%",end:"100%"}[c],f=(((m=o.arrow)==null?void 0:m.x)??0)+a/2,g=(((p=o.arrow)==null?void 0:p.y)??0)+l/2;let v="",x="";return u==="bottom"?(v=s?d:`${f}px`,x=`${-l}px`):u==="top"?(v=s?d:`${f}px`,x=`${r.floating.height+l}px`):u==="right"?(v=`${-l}px`,x=s?d:`${g}px`):u==="left"&&(v=`${r.floating.width+l}px`,x=s?d:`${g}px`),{data:{x:v,y:x}}}});function Ry(e){const[t,n="center"]=e.split("-");return[t,n]}var H1=xy,W1=Ey,G1=Sy,$1=Ty,K1="Portal",Ay=h.forwardRef((e,t)=>{var a;const{container:n,...r}=e,[o,i]=h.useState(!1);Tt(()=>i(!0),[]);const s=n||o&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?gS.createPortal(S.jsx(te.div,{...r,ref:t}),s):null});Ay.displayName=K1;function Y1(e,t){return h.useReducer((n,r)=>t[n][r]??n,e)}var Yt=e=>{const{present:t,children:n}=e,r=Q1(t),o=typeof n=="function"?n({present:r.isPresent}):h.Children.only(n),i=ce(r.ref,X1(o));return typeof n=="function"||r.isPresent?h.cloneElement(o,{ref:i}):null};Yt.displayName="Presence";function Q1(e){const[t,n]=h.useState(),r=h.useRef({}),o=h.useRef(e),i=h.useRef("none"),s=e?"mounted":"unmounted",[a,l]=Y1(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return h.useEffect(()=>{const u=Oi(r.current);i.current=a==="mounted"?u:"none"},[a]),Tt(()=>{const u=r.current,c=o.current;if(c!==e){const f=i.current,g=Oi(u);e?l("MOUNT"):g==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(c&&f!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),Tt(()=>{if(t){const u=d=>{const g=Oi(r.current).includes(d.animationName);d.target===t&&g&&ai.flushSync(()=>l("ANIMATION_END"))},c=d=>{d.target===t&&(i.current=Oi(r.current))};return t.addEventListener("animationstart",c),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",c),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:h.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function Oi(e){return(e==null?void 0:e.animationName)||"none"}function X1(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var nl="rovingFocusGroup.onEntryFocus",q1={bubbles:!1,cancelable:!0},da="RovingFocusGroup",[wu,Py,Z1]=ey(da),[J1,Ny]=Jn(da,[Z1]),[eT,tT]=J1(da),by=h.forwardRef((e,t)=>S.jsx(wu.Provider,{scope:e.__scopeRovingFocusGroup,children:S.jsx(wu.Slot,{scope:e.__scopeRovingFocusGroup,children:S.jsx(nT,{...e,ref:t})})}));by.displayName=da;var nT=h.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:l,onEntryFocus:u,preventScrollOnEntryFocus:c=!1,...d}=e,f=h.useRef(null),g=ce(t,f),v=Mc(i),[x=null,w]=Zg({prop:s,defaultProp:a,onChange:l}),[m,p]=h.useState(!1),y=fe(u),E=Py(n),C=h.useRef(!1),[R,A]=h.useState(0);return h.useEffect(()=>{const T=f.current;if(T)return T.addEventListener(nl,y),()=>T.removeEventListener(nl,y)},[y]),S.jsx(eT,{scope:n,orientation:r,dir:v,loop:o,currentTabStopId:x,onItemFocus:h.useCallback(T=>w(T),[w]),onItemShiftTab:h.useCallback(()=>p(!0),[]),onFocusableItemAdd:h.useCallback(()=>A(T=>T+1),[]),onFocusableItemRemove:h.useCallback(()=>A(T=>T-1),[]),children:S.jsx(te.div,{tabIndex:m||R===0?-1:0,"data-orientation":r,...d,ref:g,style:{outline:"none",...e.style},onMouseDown:z(e.onMouseDown,()=>{C.current=!0}),onFocus:z(e.onFocus,T=>{const k=!C.current;if(T.target===T.currentTarget&&k&&!m){const b=new CustomEvent(nl,q1);if(T.currentTarget.dispatchEvent(b),!b.defaultPrevented){const O=E().filter(V=>V.focusable),M=O.find(V=>V.active),K=O.find(V=>V.id===x),B=[M,K,...O].filter(Boolean).map(V=>V.ref.current);_y(B,c)}}C.current=!1}),onBlur:z(e.onBlur,()=>p(!1))})})}),Iy="RovingFocusGroupItem",ky=h.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:i,...s}=e,a=yu(),l=i||a,u=tT(Iy,n),c=u.currentTabStopId===l,d=Py(n),{onFocusableItemAdd:f,onFocusableItemRemove:g}=u;return h.useEffect(()=>{if(r)return f(),()=>g()},[r,f,g]),S.jsx(wu.ItemSlot,{scope:n,id:l,focusable:r,active:o,children:S.jsx(te.span,{tabIndex:c?0:-1,"data-orientation":u.orientation,...s,ref:t,onMouseDown:z(e.onMouseDown,v=>{r?u.onItemFocus(l):v.preventDefault()}),onFocus:z(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:z(e.onKeyDown,v=>{if(v.key==="Tab"&&v.shiftKey){u.onItemShiftTab();return}if(v.target!==v.currentTarget)return;const x=iT(v,u.orientation,u.dir);if(x!==void 0){if(v.metaKey||v.ctrlKey||v.altKey||v.shiftKey)return;v.preventDefault();let m=d().filter(p=>p.focusable).map(p=>p.ref.current);if(x==="last")m.reverse();else if(x==="prev"||x==="next"){x==="prev"&&m.reverse();const p=m.indexOf(v.currentTarget);m=u.loop?sT(m,p+1):m.slice(p+1)}setTimeout(()=>_y(m))}})})})});ky.displayName=Iy;var rT={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function oT(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function iT(e,t,n){const r=oT(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return rT[r]}function _y(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function sT(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var aT=by,lT=ky,uT=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},rr=new WeakMap,Li=new WeakMap,Fi={},rl=0,Dy=function(e){return e&&(e.host||Dy(e.parentNode))},cT=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Dy(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},dT=function(e,t,n,r){var o=cT(t,Array.isArray(e)?e:[e]);Fi[n]||(Fi[n]=new WeakMap);var i=Fi[n],s=[],a=new Set,l=new Set(o),u=function(d){!d||a.has(d)||(a.add(d),u(d.parentNode))};o.forEach(u);var c=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(f){if(a.has(f))c(f);else try{var g=f.getAttribute(r),v=g!==null&&g!=="false",x=(rr.get(f)||0)+1,w=(i.get(f)||0)+1;rr.set(f,x),i.set(f,w),s.push(f),x===1&&v&&Li.set(f,!0),w===1&&f.setAttribute(n,"true"),v||f.setAttribute(r,"true")}catch(m){console.error("aria-hidden: cannot operate on ",f,m)}})};return c(t),a.clear(),rl++,function(){s.forEach(function(d){var f=rr.get(d)-1,g=i.get(d)-1;rr.set(d,f),i.set(d,g),f||(Li.has(d)||d.removeAttribute(r),Li.delete(d)),g||d.removeAttribute(n)}),rl--,rl||(rr=new WeakMap,rr=new WeakMap,Li=new WeakMap,Fi={})}},fT=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=uT(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),dT(r,o,n,"aria-hidden")):function(){return null}},xt=function(){return xt=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xt.apply(this,arguments)};function My(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function pT(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ns="right-scroll-bar-position",rs="width-before-scroll-bar",hT="with-scroll-bars-hidden",mT="--removed-body-scroll-bar-size";function ol(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function gT(e,t){var n=h.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var yT=typeof window<"u"?h.useLayoutEffect:h.useEffect,lp=new WeakMap;function vT(e,t){var n=gT(null,function(r){return e.forEach(function(o){return ol(o,r)})});return yT(function(){var r=lp.get(n);if(r){var o=new Set(r),i=new Set(e),s=n.current;o.forEach(function(a){i.has(a)||ol(a,null)}),i.forEach(function(a){o.has(a)||ol(a,s)})}lp.set(n,e)},[e]),n}function xT(e){return e}function wT(e,t){t===void 0&&(t=xT);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var s=t(i,r);return n.push(s),function(){n=n.filter(function(a){return a!==s})}},assignSyncMedium:function(i){for(r=!0;n.length;){var s=n;n=[],s.forEach(i)}n={push:function(a){return i(a)},filter:function(){return n}}},assignMedium:function(i){r=!0;var s=[];if(n.length){var a=n;n=[],a.forEach(i),s=n}var l=function(){var c=s;s=[],c.forEach(i)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(c){s.push(c),u()},filter:function(c){return s=s.filter(c),n}}}};return o}function ET(e){e===void 0&&(e={});var t=wT(null);return t.options=xt({async:!0,ssr:!1},e),t}var Oy=function(e){var t=e.sideCar,n=My(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return h.createElement(r,xt({},n))};Oy.isSideCarExport=!0;function ST(e,t){return e.useMedium(t),Oy}var Ly=ET(),il=function(){},fa=h.forwardRef(function(e,t){var n=h.useRef(null),r=h.useState({onScrollCapture:il,onWheelCapture:il,onTouchMoveCapture:il}),o=r[0],i=r[1],s=e.forwardProps,a=e.children,l=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,g=e.noIsolation,v=e.inert,x=e.allowPinchZoom,w=e.as,m=w===void 0?"div":w,p=e.gapMode,y=My(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=f,C=vT([n,t]),R=xt(xt({},y),o);return h.createElement(h.Fragment,null,c&&h.createElement(E,{sideCar:Ly,removeScrollBar:u,shards:d,noIsolation:g,inert:v,setCallbacks:i,allowPinchZoom:!!x,lockRef:n,gapMode:p}),s?h.cloneElement(h.Children.only(a),xt(xt({},R),{ref:C})):h.createElement(m,xt({},R,{className:l,ref:C}),a))});fa.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};fa.classNames={fullWidth:rs,zeroRight:ns};var CT=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function TT(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=CT();return t&&e.setAttribute("nonce",t),e}function RT(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function AT(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var PT=function(){var e=0,t=null;return{add:function(n){e==0&&(t=TT())&&(RT(t,n),AT(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},NT=function(){var e=PT();return function(t,n){h.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Fy=function(){var e=NT(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},bT={left:0,top:0,right:0,gap:0},sl=function(e){return parseInt(e||"",10)||0},IT=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[sl(n),sl(r),sl(o)]},kT=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return bT;var t=IT(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},_T=Fy(),br="data-scroll-locked",DT=function(e,t,n,r){var o=e.left,i=e.top,s=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(hT,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(br,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ns,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(rs,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(ns," .").concat(ns,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(rs," .").concat(rs,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(br,`] {
    `).concat(mT,": ").concat(a,`px;
  }
`)},up=function(){var e=parseInt(document.body.getAttribute(br)||"0",10);return isFinite(e)?e:0},MT=function(){h.useEffect(function(){return document.body.setAttribute(br,(up()+1).toString()),function(){var e=up()-1;e<=0?document.body.removeAttribute(br):document.body.setAttribute(br,e.toString())}},[])},OT=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;MT();var i=h.useMemo(function(){return kT(o)},[o]);return h.createElement(_T,{styles:DT(i,!t,o,n?"":"!important")})},Eu=!1;if(typeof window<"u")try{var Vi=Object.defineProperty({},"passive",{get:function(){return Eu=!0,!0}});window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{Eu=!1}var or=Eu?{passive:!1}:!1,LT=function(e){return e.tagName==="TEXTAREA"},Vy=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!LT(e)&&n[t]==="visible")},FT=function(e){return Vy(e,"overflowY")},VT=function(e){return Vy(e,"overflowX")},cp=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=jy(e,r);if(o){var i=By(e,r),s=i[1],a=i[2];if(s>a)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},jT=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},BT=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},jy=function(e,t){return e==="v"?FT(t):VT(t)},By=function(e,t){return e==="v"?jT(t):BT(t)},UT=function(e,t){return e==="h"&&t==="rtl"?-1:1},zT=function(e,t,n,r,o){var i=UT(e,window.getComputedStyle(t).direction),s=i*r,a=n.target,l=t.contains(a),u=!1,c=s>0,d=0,f=0;do{var g=By(e,a),v=g[0],x=g[1],w=g[2],m=x-w-i*v;(v||m)&&jy(e,a)&&(d+=m,f+=v),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!l&&a!==document.body||l&&(t.contains(a)||t===a));return(c&&(Math.abs(d)<1||!o)||!c&&(Math.abs(f)<1||!o))&&(u=!0),u},ji=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},dp=function(e){return[e.deltaX,e.deltaY]},fp=function(e){return e&&"current"in e?e.current:e},HT=function(e,t){return e[0]===t[0]&&e[1]===t[1]},WT=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},GT=0,ir=[];function $T(e){var t=h.useRef([]),n=h.useRef([0,0]),r=h.useRef(),o=h.useState(GT++)[0],i=h.useState(Fy)[0],s=h.useRef(e);h.useEffect(function(){s.current=e},[e]),h.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var x=pT([e.lockRef.current],(e.shards||[]).map(fp),!0).filter(Boolean);return x.forEach(function(w){return w.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),x.forEach(function(w){return w.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=h.useCallback(function(x,w){if("touches"in x&&x.touches.length===2)return!s.current.allowPinchZoom;var m=ji(x),p=n.current,y="deltaX"in x?x.deltaX:p[0]-m[0],E="deltaY"in x?x.deltaY:p[1]-m[1],C,R=x.target,A=Math.abs(y)>Math.abs(E)?"h":"v";if("touches"in x&&A==="h"&&R.type==="range")return!1;var T=cp(A,R);if(!T)return!0;if(T?C=A:(C=A==="v"?"h":"v",T=cp(A,R)),!T)return!1;if(!r.current&&"changedTouches"in x&&(y||E)&&(r.current=C),!C)return!0;var k=r.current||C;return zT(k,w,x,k==="h"?y:E,!0)},[]),l=h.useCallback(function(x){var w=x;if(!(!ir.length||ir[ir.length-1]!==i)){var m="deltaY"in w?dp(w):ji(w),p=t.current.filter(function(C){return C.name===w.type&&(C.target===w.target||w.target===C.shadowParent)&&HT(C.delta,m)})[0];if(p&&p.should){w.cancelable&&w.preventDefault();return}if(!p){var y=(s.current.shards||[]).map(fp).filter(Boolean).filter(function(C){return C.contains(w.target)}),E=y.length>0?a(w,y[0]):!s.current.noIsolation;E&&w.cancelable&&w.preventDefault()}}},[]),u=h.useCallback(function(x,w,m,p){var y={name:x,delta:w,target:m,should:p,shadowParent:KT(m)};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(E){return E!==y})},1)},[]),c=h.useCallback(function(x){n.current=ji(x),r.current=void 0},[]),d=h.useCallback(function(x){u(x.type,dp(x),x.target,a(x,e.lockRef.current))},[]),f=h.useCallback(function(x){u(x.type,ji(x),x.target,a(x,e.lockRef.current))},[]);h.useEffect(function(){return ir.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",l,or),document.addEventListener("touchmove",l,or),document.addEventListener("touchstart",c,or),function(){ir=ir.filter(function(x){return x!==i}),document.removeEventListener("wheel",l,or),document.removeEventListener("touchmove",l,or),document.removeEventListener("touchstart",c,or)}},[]);var g=e.removeScrollBar,v=e.inert;return h.createElement(h.Fragment,null,v?h.createElement(i,{styles:WT(o)}):null,g?h.createElement(OT,{gapMode:e.gapMode}):null)}function KT(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const YT=ST(Ly,$T);var Uy=h.forwardRef(function(e,t){return h.createElement(fa,xt({},e,{ref:t,sideCar:YT}))});Uy.classNames=fa.classNames;var Su=["Enter"," "],QT=["ArrowDown","PageUp","Home"],zy=["ArrowUp","PageDown","End"],XT=[...QT,...zy],qT={ltr:[...Su,"ArrowRight"],rtl:[...Su,"ArrowLeft"]},ZT={ltr:["ArrowLeft"],rtl:["ArrowRight"]},ui="Menu",[Qo,JT,eR]=ey(ui),[er,Hy]=Jn(ui,[eR,yy,Ny]),pa=yy(),Wy=Ny(),[tR,tr]=er(ui),[nR,ci]=er(ui),Gy=e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:i,modal:s=!0}=e,a=pa(t),[l,u]=h.useState(null),c=h.useRef(!1),d=fe(i),f=Mc(o);return h.useEffect(()=>{const g=()=>{c.current=!0,document.addEventListener("pointerdown",v,{capture:!0,once:!0}),document.addEventListener("pointermove",v,{capture:!0,once:!0})},v=()=>c.current=!1;return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",v,{capture:!0}),document.removeEventListener("pointermove",v,{capture:!0})}},[]),S.jsx(H1,{...a,children:S.jsx(tR,{scope:t,open:n,onOpenChange:d,content:l,onContentChange:u,children:S.jsx(nR,{scope:t,onClose:h.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:s,children:r})})})};Gy.displayName=ui;var rR="MenuAnchor",Hc=h.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,o=pa(n);return S.jsx(W1,{...o,...r,ref:t})});Hc.displayName=rR;var Wc="MenuPortal",[oR,$y]=er(Wc,{forceMount:void 0}),Ky=e=>{const{__scopeMenu:t,forceMount:n,children:r,container:o}=e,i=tr(Wc,t);return S.jsx(oR,{scope:t,forceMount:n,children:S.jsx(Yt,{present:n||i.open,children:S.jsx(Ay,{asChild:!0,container:o,children:r})})})};Ky.displayName=Wc;var rt="MenuContent",[iR,Gc]=er(rt),Yy=h.forwardRef((e,t)=>{const n=$y(rt,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,i=tr(rt,e.__scopeMenu),s=ci(rt,e.__scopeMenu);return S.jsx(Qo.Provider,{scope:e.__scopeMenu,children:S.jsx(Yt,{present:r||i.open,children:S.jsx(Qo.Slot,{scope:e.__scopeMenu,children:s.modal?S.jsx(sR,{...o,ref:t}):S.jsx(aR,{...o,ref:t})})})})}),sR=h.forwardRef((e,t)=>{const n=tr(rt,e.__scopeMenu),r=h.useRef(null),o=ce(t,r);return h.useEffect(()=>{const i=r.current;if(i)return fT(i)},[]),S.jsx($c,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:z(e.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),aR=h.forwardRef((e,t)=>{const n=tr(rt,e.__scopeMenu);return S.jsx($c,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),$c=h.forwardRef((e,t)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:s,disableOutsidePointerEvents:a,onEntryFocus:l,onEscapeKeyDown:u,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:f,onDismiss:g,disableOutsideScroll:v,...x}=e,w=tr(rt,n),m=ci(rt,n),p=pa(n),y=Wy(n),E=JT(n),[C,R]=h.useState(null),A=h.useRef(null),T=ce(t,A,w.onContentChange),k=h.useRef(0),b=h.useRef(""),O=h.useRef(0),M=h.useRef(null),K=h.useRef("right"),W=h.useRef(0),B=v?Uy:h.Fragment,V=v?{as:Fr,allowPinchZoom:!0}:void 0,F=P=>{var Me,Xr;const D=b.current+P,j=E().filter(Xe=>!Xe.disabled),G=document.activeElement,mt=(Me=j.find(Xe=>Xe.ref.current===G))==null?void 0:Me.textValue,Be=j.map(Xe=>Xe.textValue),Qt=xR(Be,D,mt),Ne=(Xr=j.find(Xe=>Xe.textValue===Qt))==null?void 0:Xr.ref.current;(function Xe(qr){b.current=qr,window.clearTimeout(k.current),qr!==""&&(k.current=window.setTimeout(()=>Xe(""),1e3))})(D),Ne&&setTimeout(()=>Ne.focus())};h.useEffect(()=>()=>window.clearTimeout(k.current),[]),PC();const N=h.useCallback(P=>{var j,G;return K.current===((j=M.current)==null?void 0:j.side)&&ER(P,(G=M.current)==null?void 0:G.area)},[]);return S.jsx(iR,{scope:n,searchRef:b,onItemEnter:h.useCallback(P=>{N(P)&&P.preventDefault()},[N]),onItemLeave:h.useCallback(P=>{var D;N(P)||((D=A.current)==null||D.focus(),R(null))},[N]),onTriggerLeave:h.useCallback(P=>{N(P)&&P.preventDefault()},[N]),pointerGraceTimerRef:O,onPointerGraceIntentChange:h.useCallback(P=>{M.current=P},[]),children:S.jsx(B,{...V,children:S.jsx(oy,{asChild:!0,trapped:o,onMountAutoFocus:z(i,P=>{var D;P.preventDefault(),(D=A.current)==null||D.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:S.jsx(ny,{asChild:!0,disableOutsidePointerEvents:a,onEscapeKeyDown:u,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:f,onDismiss:g,children:S.jsx(aT,{asChild:!0,...y,dir:m.dir,orientation:"vertical",loop:r,currentTabStopId:C,onCurrentTabStopIdChange:R,onEntryFocus:z(l,P=>{m.isUsingKeyboardRef.current||P.preventDefault()}),preventScrollOnEntryFocus:!0,children:S.jsx(G1,{role:"menu","aria-orientation":"vertical","data-state":cv(w.open),"data-radix-menu-content":"",dir:m.dir,...p,...x,ref:T,style:{outline:"none",...x.style},onKeyDown:z(x.onKeyDown,P=>{const j=P.target.closest("[data-radix-menu-content]")===P.currentTarget,G=P.ctrlKey||P.altKey||P.metaKey,mt=P.key.length===1;j&&(P.key==="Tab"&&P.preventDefault(),!G&&mt&&F(P.key));const Be=A.current;if(P.target!==Be||!XT.includes(P.key))return;P.preventDefault();const Ne=E().filter(Me=>!Me.disabled).map(Me=>Me.ref.current);zy.includes(P.key)&&Ne.reverse(),yR(Ne)}),onBlur:z(e.onBlur,P=>{P.currentTarget.contains(P.target)||(window.clearTimeout(k.current),b.current="")}),onPointerMove:z(e.onPointerMove,Xo(P=>{const D=P.target,j=W.current!==P.clientX;if(P.currentTarget.contains(D)&&j){const G=P.clientX>W.current?"right":"left";K.current=G,W.current=P.clientX}}))})})})})})})});Yy.displayName=rt;var lR="MenuGroup",Kc=h.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return S.jsx(te.div,{role:"group",...r,ref:t})});Kc.displayName=lR;var uR="MenuLabel",Qy=h.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return S.jsx(te.div,{...r,ref:t})});Qy.displayName=uR;var Ls="MenuItem",pp="menu.itemSelect",ha=h.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:r,...o}=e,i=h.useRef(null),s=ci(Ls,e.__scopeMenu),a=Gc(Ls,e.__scopeMenu),l=ce(t,i),u=h.useRef(!1),c=()=>{const d=i.current;if(!n&&d){const f=new CustomEvent(pp,{bubbles:!0,cancelable:!0});d.addEventListener(pp,g=>r==null?void 0:r(g),{once:!0}),Jg(d,f),f.defaultPrevented?u.current=!1:s.onClose()}};return S.jsx(Xy,{...o,ref:l,disabled:n,onClick:z(e.onClick,c),onPointerDown:d=>{var f;(f=e.onPointerDown)==null||f.call(e,d),u.current=!0},onPointerUp:z(e.onPointerUp,d=>{var f;u.current||(f=d.currentTarget)==null||f.click()}),onKeyDown:z(e.onKeyDown,d=>{const f=a.searchRef.current!=="";n||f&&d.key===" "||Su.includes(d.key)&&(d.currentTarget.click(),d.preventDefault())})})});ha.displayName=Ls;var Xy=h.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:r=!1,textValue:o,...i}=e,s=Gc(Ls,n),a=Wy(n),l=h.useRef(null),u=ce(t,l),[c,d]=h.useState(!1),[f,g]=h.useState("");return h.useEffect(()=>{const v=l.current;v&&g((v.textContent??"").trim())},[i.children]),S.jsx(Qo.ItemSlot,{scope:n,disabled:r,textValue:o??f,children:S.jsx(lT,{asChild:!0,...a,focusable:!r,children:S.jsx(te.div,{role:"menuitem","data-highlighted":c?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...i,ref:u,onPointerMove:z(e.onPointerMove,Xo(v=>{r?s.onItemLeave(v):(s.onItemEnter(v),v.defaultPrevented||v.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:z(e.onPointerLeave,Xo(v=>s.onItemLeave(v))),onFocus:z(e.onFocus,()=>d(!0)),onBlur:z(e.onBlur,()=>d(!1))})})})}),cR="MenuCheckboxItem",qy=h.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:r,...o}=e;return S.jsx(nv,{scope:e.__scopeMenu,checked:n,children:S.jsx(ha,{role:"menuitemcheckbox","aria-checked":Fs(n)?"mixed":n,...o,ref:t,"data-state":Qc(n),onSelect:z(o.onSelect,()=>r==null?void 0:r(Fs(n)?!0:!n),{checkForDefaultPrevented:!1})})})});qy.displayName=cR;var Zy="MenuRadioGroup",[dR,fR]=er(Zy,{value:void 0,onValueChange:()=>{}}),Jy=h.forwardRef((e,t)=>{const{value:n,onValueChange:r,...o}=e,i=fe(r);return S.jsx(dR,{scope:e.__scopeMenu,value:n,onValueChange:i,children:S.jsx(Kc,{...o,ref:t})})});Jy.displayName=Zy;var ev="MenuRadioItem",tv=h.forwardRef((e,t)=>{const{value:n,...r}=e,o=fR(ev,e.__scopeMenu),i=n===o.value;return S.jsx(nv,{scope:e.__scopeMenu,checked:i,children:S.jsx(ha,{role:"menuitemradio","aria-checked":i,...r,ref:t,"data-state":Qc(i),onSelect:z(r.onSelect,()=>{var s;return(s=o.onValueChange)==null?void 0:s.call(o,n)},{checkForDefaultPrevented:!1})})})});tv.displayName=ev;var Yc="MenuItemIndicator",[nv,pR]=er(Yc,{checked:!1}),rv=h.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:r,...o}=e,i=pR(Yc,n);return S.jsx(Yt,{present:r||Fs(i.checked)||i.checked===!0,children:S.jsx(te.span,{...o,ref:t,"data-state":Qc(i.checked)})})});rv.displayName=Yc;var hR="MenuSeparator",ov=h.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return S.jsx(te.div,{role:"separator","aria-orientation":"horizontal",...r,ref:t})});ov.displayName=hR;var mR="MenuArrow",iv=h.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,o=pa(n);return S.jsx($1,{...o,...r,ref:t})});iv.displayName=mR;var gR="MenuSub",[ck,sv]=er(gR),mo="MenuSubTrigger",av=h.forwardRef((e,t)=>{const n=tr(mo,e.__scopeMenu),r=ci(mo,e.__scopeMenu),o=sv(mo,e.__scopeMenu),i=Gc(mo,e.__scopeMenu),s=h.useRef(null),{pointerGraceTimerRef:a,onPointerGraceIntentChange:l}=i,u={__scopeMenu:e.__scopeMenu},c=h.useCallback(()=>{s.current&&window.clearTimeout(s.current),s.current=null},[]);return h.useEffect(()=>c,[c]),h.useEffect(()=>{const d=a.current;return()=>{window.clearTimeout(d),l(null)}},[a,l]),S.jsx(Hc,{asChild:!0,...u,children:S.jsx(Xy,{id:o.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":o.contentId,"data-state":cv(n.open),...e,ref:la(t,o.onTriggerChange),onClick:d=>{var f;(f=e.onClick)==null||f.call(e,d),!(e.disabled||d.defaultPrevented)&&(d.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:z(e.onPointerMove,Xo(d=>{i.onItemEnter(d),!d.defaultPrevented&&!e.disabled&&!n.open&&!s.current&&(i.onPointerGraceIntentChange(null),s.current=window.setTimeout(()=>{n.onOpenChange(!0),c()},100))})),onPointerLeave:z(e.onPointerLeave,Xo(d=>{var g,v;c();const f=(g=n.content)==null?void 0:g.getBoundingClientRect();if(f){const x=(v=n.content)==null?void 0:v.dataset.side,w=x==="right",m=w?-5:5,p=f[w?"left":"right"],y=f[w?"right":"left"];i.onPointerGraceIntentChange({area:[{x:d.clientX+m,y:d.clientY},{x:p,y:f.top},{x:y,y:f.top},{x:y,y:f.bottom},{x:p,y:f.bottom}],side:x}),window.clearTimeout(a.current),a.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(d),d.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:z(e.onKeyDown,d=>{var g;const f=i.searchRef.current!=="";e.disabled||f&&d.key===" "||qT[r.dir].includes(d.key)&&(n.onOpenChange(!0),(g=n.content)==null||g.focus(),d.preventDefault())})})})});av.displayName=mo;var lv="MenuSubContent",uv=h.forwardRef((e,t)=>{const n=$y(rt,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,i=tr(rt,e.__scopeMenu),s=ci(rt,e.__scopeMenu),a=sv(lv,e.__scopeMenu),l=h.useRef(null),u=ce(t,l);return S.jsx(Qo.Provider,{scope:e.__scopeMenu,children:S.jsx(Yt,{present:r||i.open,children:S.jsx(Qo.Slot,{scope:e.__scopeMenu,children:S.jsx($c,{id:a.contentId,"aria-labelledby":a.triggerId,...o,ref:u,align:"start",side:s.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:c=>{var d;s.isUsingKeyboardRef.current&&((d=l.current)==null||d.focus()),c.preventDefault()},onCloseAutoFocus:c=>c.preventDefault(),onFocusOutside:z(e.onFocusOutside,c=>{c.target!==a.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:z(e.onEscapeKeyDown,c=>{s.onClose(),c.preventDefault()}),onKeyDown:z(e.onKeyDown,c=>{var g;const d=c.currentTarget.contains(c.target),f=ZT[s.dir].includes(c.key);d&&f&&(i.onOpenChange(!1),(g=a.trigger)==null||g.focus(),c.preventDefault())})})})})})});uv.displayName=lv;function cv(e){return e?"open":"closed"}function Fs(e){return e==="indeterminate"}function Qc(e){return Fs(e)?"indeterminate":e?"checked":"unchecked"}function yR(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function vR(e,t){return e.map((n,r)=>e[(t+r)%e.length])}function xR(e,t,n){const o=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let s=vR(e,Math.max(i,0));o.length===1&&(s=s.filter(u=>u!==n));const l=s.find(u=>u.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}function wR(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const a=t[i].x,l=t[i].y,u=t[s].x,c=t[s].y;l>r!=c>r&&n<(u-a)*(r-l)/(c-l)+a&&(o=!o)}return o}function ER(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return wR(n,t)}function Xo(e){return t=>t.pointerType==="mouse"?e(t):void 0}var SR=Gy,CR=Hc,TR=Ky,RR=Yy,AR=Kc,PR=Qy,NR=ha,bR=qy,IR=Jy,kR=tv,_R=rv,DR=ov,MR=iv,OR=av,LR=uv,Xc="DropdownMenu",[FR,dk]=Jn(Xc,[Hy]),De=Hy(),[VR,dv]=FR(Xc),fv=e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:o,defaultOpen:i,onOpenChange:s,modal:a=!0}=e,l=De(t),u=h.useRef(null),[c=!1,d]=Zg({prop:o,defaultProp:i,onChange:s});return S.jsx(VR,{scope:t,triggerId:yu(),triggerRef:u,contentId:yu(),open:c,onOpenChange:d,onOpenToggle:h.useCallback(()=>d(f=>!f),[d]),modal:a,children:S.jsx(SR,{...l,open:c,onOpenChange:d,dir:r,modal:a,children:n})})};fv.displayName=Xc;var pv="DropdownMenuTrigger",hv=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...o}=e,i=dv(pv,n),s=De(n);return S.jsx(CR,{asChild:!0,...s,children:S.jsx(te.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...o,ref:la(t,i.triggerRef),onPointerDown:z(e.onPointerDown,a=>{!r&&a.button===0&&a.ctrlKey===!1&&(i.onOpenToggle(),i.open||a.preventDefault())}),onKeyDown:z(e.onKeyDown,a=>{r||(["Enter"," "].includes(a.key)&&i.onOpenToggle(),a.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(a.key)&&a.preventDefault())})})})});hv.displayName=pv;var jR="DropdownMenuPortal",mv=e=>{const{__scopeDropdownMenu:t,...n}=e,r=De(t);return S.jsx(TR,{...r,...n})};mv.displayName=jR;var gv="DropdownMenuContent",yv=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=dv(gv,n),i=De(n),s=h.useRef(!1);return S.jsx(RR,{id:o.contentId,"aria-labelledby":o.triggerId,...i,...r,ref:t,onCloseAutoFocus:z(e.onCloseAutoFocus,a=>{var l;s.current||(l=o.triggerRef.current)==null||l.focus(),s.current=!1,a.preventDefault()}),onInteractOutside:z(e.onInteractOutside,a=>{const l=a.detail.originalEvent,u=l.button===0&&l.ctrlKey===!0,c=l.button===2||u;(!o.modal||c)&&(s.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});yv.displayName=gv;var BR="DropdownMenuGroup",UR=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=De(n);return S.jsx(AR,{...o,...r,ref:t})});UR.displayName=BR;var zR="DropdownMenuLabel",vv=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=De(n);return S.jsx(PR,{...o,...r,ref:t})});vv.displayName=zR;var HR="DropdownMenuItem",xv=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=De(n);return S.jsx(NR,{...o,...r,ref:t})});xv.displayName=HR;var WR="DropdownMenuCheckboxItem",wv=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=De(n);return S.jsx(bR,{...o,...r,ref:t})});wv.displayName=WR;var GR="DropdownMenuRadioGroup",$R=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=De(n);return S.jsx(IR,{...o,...r,ref:t})});$R.displayName=GR;var KR="DropdownMenuRadioItem",Ev=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=De(n);return S.jsx(kR,{...o,...r,ref:t})});Ev.displayName=KR;var YR="DropdownMenuItemIndicator",Sv=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=De(n);return S.jsx(_R,{...o,...r,ref:t})});Sv.displayName=YR;var QR="DropdownMenuSeparator",Cv=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=De(n);return S.jsx(DR,{...o,...r,ref:t})});Cv.displayName=QR;var XR="DropdownMenuArrow",qR=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=De(n);return S.jsx(MR,{...o,...r,ref:t})});qR.displayName=XR;var ZR="DropdownMenuSubTrigger",Tv=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=De(n);return S.jsx(OR,{...o,...r,ref:t})});Tv.displayName=ZR;var JR="DropdownMenuSubContent",Rv=h.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=De(n);return S.jsx(LR,{...o,...r,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Rv.displayName=JR;var eA=fv,tA=hv,nA=mv,Av=yv,Pv=vv,Nv=xv,bv=wv,Iv=Ev,kv=Sv,_v=Cv,Dv=Tv,Mv=Rv;const rA=eA,oA=tA,iA=h.forwardRef(({className:e,inset:t,children:n,...r},o)=>S.jsxs(Dv,{ref:o,className:Pe("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...r,children:[n,S.jsx(TS,{className:"ml-auto h-4 w-4"})]}));iA.displayName=Dv.displayName;const sA=h.forwardRef(({className:e,...t},n)=>S.jsx(Mv,{ref:n,className:Pe("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));sA.displayName=Mv.displayName;const Ov=h.forwardRef(({className:e,sideOffset:t=4,...n},r)=>S.jsx(nA,{children:S.jsx(Av,{ref:r,sideOffset:t,className:Pe("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));Ov.displayName=Av.displayName;const os=h.forwardRef(({className:e,inset:t,...n},r)=>S.jsx(Nv,{ref:r,className:Pe("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...n}));os.displayName=Nv.displayName;const aA=h.forwardRef(({className:e,children:t,checked:n,...r},o)=>S.jsxs(bv,{ref:o,className:Pe("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...r,children:[S.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:S.jsx(kv,{children:S.jsx(CS,{className:"h-4 w-4"})})}),t]}));aA.displayName=bv.displayName;const lA=h.forwardRef(({className:e,children:t,...n},r)=>S.jsxs(Iv,{ref:r,className:Pe("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[S.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:S.jsx(kv,{children:S.jsx(RS,{className:"h-2 w-2 fill-current"})})}),t]}));lA.displayName=Iv.displayName;const uA=h.forwardRef(({className:e,inset:t,...n},r)=>S.jsx(Pv,{ref:r,className:Pe("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...n}));uA.displayName=Pv.displayName;const cA=h.forwardRef(({className:e,...t},n)=>S.jsx(_v,{ref:n,className:Pe("-mx-1 my-1 h-px bg-muted",e),...t}));cA.displayName=_v.displayName;function dA(){const{setTheme:e}=xS();return S.jsxs(rA,{children:[S.jsx(oA,{className:"absolute top-6 right-6 z-10",asChild:!0,children:S.jsxs(Dc,{variant:"outline",size:"icon",children:[S.jsx(NS,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),S.jsx(PS,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),S.jsx("span",{className:"sr-only",children:"Переключение темы"})]})}),S.jsxs(Ov,{align:"end",children:[S.jsx(os,{onClick:()=>e("light"),children:"Светлая"}),S.jsx(os,{onClick:()=>e("dark"),children:"Темная"}),S.jsx(os,{onClick:()=>e("system"),children:"Системная"})]})]})}var qc="Avatar",[fA,fk]=Jn(qc),[pA,Lv]=fA(qc),Fv=h.forwardRef((e,t)=>{const{__scopeAvatar:n,...r}=e,[o,i]=h.useState("idle");return S.jsx(pA,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:i,children:S.jsx(te.span,{...r,ref:t})})});Fv.displayName=qc;var Vv="AvatarImage",jv=h.forwardRef((e,t)=>{const{__scopeAvatar:n,src:r,onLoadingStatusChange:o=()=>{},...i}=e,s=Lv(Vv,n),a=hA(r),l=fe(u=>{o(u),s.onImageLoadingStatusChange(u)});return Tt(()=>{a!=="idle"&&l(a)},[a,l]),a==="loaded"?S.jsx(te.img,{...i,ref:t,src:r}):null});jv.displayName=Vv;var Bv="AvatarFallback",Uv=h.forwardRef((e,t)=>{const{__scopeAvatar:n,delayMs:r,...o}=e,i=Lv(Bv,n),[s,a]=h.useState(r===void 0);return h.useEffect(()=>{if(r!==void 0){const l=window.setTimeout(()=>a(!0),r);return()=>window.clearTimeout(l)}},[r]),s&&i.imageLoadingStatus!=="loaded"?S.jsx(te.span,{...o,ref:t}):null});Uv.displayName=Bv;function hA(e){const[t,n]=h.useState("idle");return Tt(()=>{if(!e){n("error");return}let r=!0;const o=new window.Image,i=s=>()=>{r&&n(s)};return n("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{r=!1}},[e]),t}var zv=Fv,Hv=jv,Wv=Uv;const Gv=h.forwardRef(({className:e,...t},n)=>S.jsx(zv,{ref:n,className:Pe("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...t}));Gv.displayName=zv.displayName;const $v=h.forwardRef(({className:e,...t},n)=>S.jsx(Hv,{ref:n,className:Pe("aspect-square h-full w-full",e),...t}));$v.displayName=Hv.displayName;const mA=h.forwardRef(({className:e,...t},n)=>S.jsx(Wv,{ref:n,className:Pe("flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800",e),...t}));mA.displayName=Wv.displayName;const gA="https://albertlll.github.io/simple-chat/assets/avatarbot-BDG8ENFK.jpeg",Zc=h.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ma=h.createContext({}),ga=h.createContext(null),Jc=typeof document<"u",ed=Jc?h.useLayoutEffect:h.useEffect,Kv=h.createContext({strict:!1}),ya=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),yA="framerAppearId",Yv="data-"+ya(yA),vA={skipAnimations:!1,useManualTiming:!1};function xA(e){let t=new Set,n=new Set,r=!1,o=!1;const i=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){i.has(u)&&(l.schedule(u),e()),u(s)}const l={schedule:(u,c=!1,d=!1)=>{const g=d&&r?t:n;return c&&i.add(u),g.has(u)||g.add(u),u},cancel:u=>{n.delete(u),i.delete(u)},process:u=>{if(s=u,r){o=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(a),r=!1,o&&(o=!1,l.process(u))}};return l}const Bi=["read","resolveKeyframes","update","preRender","render","postRender"],wA=40;function Qv(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=()=>n=!0,s=Bi.reduce((m,p)=>(m[p]=xA(i),m),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:f}=s,g=()=>{const m=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(m-o.timestamp,wA),1),o.timestamp=m,o.isProcessing=!0,a.process(o),l.process(o),u.process(o),c.process(o),d.process(o),f.process(o),o.isProcessing=!1,n&&t&&(r=!1,e(g))},v=()=>{n=!0,r=!0,o.isProcessing||e(g)};return{schedule:Bi.reduce((m,p)=>{const y=s[p];return m[p]=(E,C=!1,R=!1)=>(n||v(),y.schedule(E,C,R)),m},{}),cancel:m=>{for(let p=0;p<Bi.length;p++)s[Bi[p]].cancel(m)},state:o,steps:s}}const{schedule:td,cancel:pk}=Qv(queueMicrotask,!1);function vr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const Xv=h.createContext({});let hp=!1;function EA(e,t,n,r,o){const{visualElement:i}=h.useContext(ma),s=h.useContext(Kv),a=h.useContext(ga),l=h.useContext(Zc).reducedMotion,u=h.useRef();r=r||s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:i,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const c=u.current,d=h.useContext(Xv);c&&!c.projection&&o&&(c.type==="html"||c.type==="svg")&&CA(u.current,n,o,d),h.useInsertionEffect(()=>{c&&c.update(n,a)});const f=h.useRef(!!(n[Yv]&&!window.HandoffComplete));return ed(()=>{c&&(c.updateFeatures(),td.render(c.render),f.current&&c.animationState&&c.animationState.animateChanges())}),h.useEffect(()=>{c&&(!f.current&&c.animationState&&c.animationState.animateChanges(),f.current&&(f.current=!1,hp||(hp=!0,queueMicrotask(SA))))}),c}function SA(){window.HandoffComplete=!0}function CA(e,t,n,r){const{layoutId:o,layout:i,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:qv(e.parent)),e.projection.setOptions({layoutId:o,layout:i,alwaysMeasureLayout:!!s||a&&vr(a),visualElement:e,scheduleRender:()=>e.scheduleRender(),animationType:typeof i=="string"?i:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function qv(e){if(e)return e.options.allowProjection!==!1?e.projection:qv(e.parent)}function TA(e,t,n){return h.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):vr(n)&&(n.current=r))},[t])}function qo(e){return typeof e=="string"||Array.isArray(e)}function Zo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const nd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],rd=["initial",...nd];function va(e){return Zo(e.animate)||rd.some(t=>qo(e[t]))}function Zv(e){return!!(va(e)||e.variants)}function RA(e,t){if(va(e)){const{initial:n,animate:r}=e;return{initial:n===!1||qo(n)?n:void 0,animate:qo(r)?r:void 0}}return e.inherit!==!1?t:{}}function AA(e){const{initial:t,animate:n}=RA(e,h.useContext(ma));return h.useMemo(()=>({initial:t,animate:n}),[mp(t),mp(n)])}function mp(e){return Array.isArray(e)?e.join(" "):e}const gp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},jr={};for(const e in gp)jr[e]={isEnabled:t=>gp[e].some(n=>!!t[n])};function PA(e){for(const t in e)jr[t]={...jr[t],...e[t]}}const od=h.createContext({}),NA=Symbol.for("motionComponentSymbol"),Re=e=>e;let Cu=Re;function bA({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&PA(e);function i(a,l){let u;const c={...h.useContext(Zc),...a,layoutId:IA(a)},{isStatic:d}=c,f=AA(a),g=r(a,d);if(!d&&Jc){kA();const v=_A(c);u=v.MeasureLayout,f.visualElement=EA(o,g,c,t,v.ProjectionNode)}return S.jsxs(ma.Provider,{value:f,children:[u&&f.visualElement?S.jsx(u,{visualElement:f.visualElement,...c}):null,n(o,a,TA(g,f.visualElement,l),g,d,f.visualElement)]})}const s=h.forwardRef(i);return s[NA]=o,s}function IA({layoutId:e}){const t=h.useContext(od).id;return t&&e!==void 0?t+"-"+e:e}function kA(e,t){h.useContext(Kv).strict}function _A(e){const{drag:t,layout:n}=jr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function DA(e){function t(r,o={}){return bA(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const MA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function id(e){return typeof e!="string"||e.includes("-")?!1:!!(MA.indexOf(e)>-1||/[A-Z]/u.test(e))}const Vs={};function OA(e){Object.assign(Vs,e)}const di=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],bn=new Set(di);function Jv(e,{layout:t,layoutId:n}){return bn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Vs[e]||e==="opacity")}const Te=e=>!!(e&&e.getVelocity),LA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},FA=di.length;function VA(e,t,n){let r="";for(let o=0;o<FA;o++){const i=di[o];if(e[i]!==void 0){const s=LA[i]||i;r+=`${s}(${e[i]}) `}}return r=r.trim(),n?r=n(e,t?"":r):t&&(r="none"),r}const e0=e=>t=>typeof t=="string"&&t.startsWith(e),t0=e0("--"),jA=e0("var(--"),sd=e=>jA(e)?BA.test(e.split("/*")[0].trim()):!1,BA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,UA=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Tn=(e,t,n)=>n>t?t:n<e?e:n,Qr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ao={...Qr,transform:e=>Tn(0,1,e)},Ui={...Qr,default:1},Po=e=>Math.round(e*1e5)/1e5,ad=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,zA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,HA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function fi(e){return typeof e=="string"}function WA(e){return e==null}const pi=e=>({test:t=>fi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),en=pi("deg"),Ct=pi("%"),L=pi("px"),GA=pi("vh"),$A=pi("vw"),yp={...Ct,parse:e=>Ct.parse(e)/100,transform:e=>Ct.transform(e*100)},vp={...Qr,transform:Math.round},n0={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,size:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,rotate:en,rotateX:en,rotateY:en,rotateZ:en,scale:Ui,scaleX:Ui,scaleY:Ui,scaleZ:Ui,skew:en,skewX:en,skewY:en,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:Ao,originX:yp,originY:yp,originZ:L,zIndex:vp,backgroundPositionX:L,backgroundPositionY:L,fillOpacity:Ao,strokeOpacity:Ao,numOctaves:vp};function ld(e,t,n){const{style:r,vars:o,transform:i,transformOrigin:s}=e;let a=!1,l=!1,u=!0;for(const c in t){const d=t[c];if(t0(c)){o[c]=d;continue}const f=n0[c],g=UA(d,f);if(bn.has(c)){if(a=!0,i[c]=g,!u)continue;d!==(f.default||0)&&(u=!1)}else c.startsWith("origin")?(l=!0,s[c]=g):r[c]=g}if(t.transform||(a||n?r.transform=VA(e.transform,u,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:d="50%",originZ:f=0}=s;r.transformOrigin=`${c} ${d} ${f}`}}const ud=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function r0(e,t,n){for(const r in t)!Te(t[r])&&!Jv(r,n)&&(e[r]=t[r])}function KA({transformTemplate:e},t){return h.useMemo(()=>{const n=ud();return ld(n,t,e),Object.assign({},n.vars,n.style)},[t])}function YA(e,t){const n=e.style||{},r={};return r0(r,n,e),Object.assign(r,KA(e,t)),r}function QA(e,t){const n={},r=YA(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const XA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function js(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||XA.has(e)}let o0=e=>!js(e);function qA(e){e&&(o0=t=>t.startsWith("on")?!js(t):e(t))}try{qA(require("@emotion/is-prop-valid").default)}catch{}function ZA(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(o0(o)||n===!0&&js(o)||!t&&!js(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function xp(e,t,n){return typeof e=="string"?e:L.transform(t+n*e)}function JA(e,t,n){const r=xp(t,e.x,e.width),o=xp(n,e.y,e.height);return`${r} ${o}`}const eP={offset:"stroke-dashoffset",array:"stroke-dasharray"},tP={offset:"strokeDashoffset",array:"strokeDasharray"};function nP(e,t,n=1,r=0,o=!0){e.pathLength=1;const i=o?eP:tP;e[i.offset]=L.transform(-r);const s=L.transform(t),a=L.transform(n);e[i.array]=`${s} ${a}`}function cd(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:i,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(ld(e,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:g,dimensions:v}=e;f.transform&&(v&&(g.transform=f.transform),delete f.transform),v&&(o!==void 0||i!==void 0||g.transform)&&(g.transformOrigin=JA(v,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),s!==void 0&&nP(f,s,a,l,!1)}const i0=()=>({...ud(),attrs:{}}),dd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function rP(e,t,n,r){const o=h.useMemo(()=>{const i=i0();return cd(i,t,dd(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};r0(i,e.style,e),o.style={...i,...o.style}}return o}function oP(e=!1){return(n,r,o,{latestValues:i},s)=>{const l=(id(n)?rP:QA)(r,i,s,n),u=ZA(r,typeof n=="string",e),c=n!==h.Fragment?{...u,...l,ref:o}:{},{children:d}=r,f=h.useMemo(()=>Te(d)?d.get():d,[d]);return h.createElement(n,{...c,children:f})}}function s0(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const a0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function l0(e,t,n,r){s0(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(a0.has(o)?o:ya(o),t.attrs[o])}function fd(e,t,n){var r;const{style:o}=e,i={};for(const s in o)(Te(o[s])||t.style&&Te(t.style[s])||Jv(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(i[s]=o[s]);return n&&o&&typeof o.willChange=="string"&&(n.applyWillChange=!1),i}function u0(e,t,n){const r=fd(e,t,n);for(const o in e)if(Te(e[o])||Te(t[o])){const i=di.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[i]=e[o]}return r}function wp(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function pd(e,t,n,r){if(typeof t=="function"){const[o,i]=wp(r);t=t(n!==void 0?n:e.custom,o,i)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,i]=wp(r);t=t(n!==void 0?n:e.custom,o,i)}return t}function c0(e){const t=h.useRef(null);return t.current===null&&(t.current=e()),t.current}const Tu=e=>Array.isArray(e),iP=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),sP=e=>Tu(e)?e[e.length-1]||0:e;function is(e){const t=Te(e)?e.get():e;return iP(t)?t.toValue():t}const d0=new Set(["opacity","clipPath","filter","transform"]);function f0(e){if(bn.has(e))return"transform";if(d0.has(e))return ya(e)}function xa(e,t){e.indexOf(t)===-1&&e.push(t)}function wa(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}function aP({applyWillChange:e=!1,scrapeMotionValuesFromProps:t,createRenderState:n,onMount:r},o,i,s,a){const l={latestValues:uP(o,i,s,a?!1:e,t),renderState:n()};return r&&(l.mount=u=>r(o,u,l)),l}const p0=e=>(t,n)=>{const r=h.useContext(ma),o=h.useContext(ga),i=()=>aP(e,t,r,o,n);return n?i():c0(i)};function lP(e,t){const n=f0(t);n&&xa(e,n)}function Ep(e,t,n){const r=Array.isArray(t)?t:[t];for(let o=0;o<r.length;o++){const i=pd(e,r[o]);if(i){const{transitionEnd:s,transition:a,...l}=i;n(l,s)}}}function uP(e,t,n,r,o){var i;const s={},a=[],l=r&&((i=e.style)===null||i===void 0?void 0:i.willChange)===void 0,u=o(e,{});for(const w in u)s[w]=is(u[w]);let{initial:c,animate:d}=e;const f=va(e),g=Zv(e);t&&g&&!f&&e.inherit!==!1&&(c===void 0&&(c=t.initial),d===void 0&&(d=t.animate));let v=n?n.initial===!1:!1;v=v||c===!1;const x=v?d:c;return x&&typeof x!="boolean"&&!Zo(x)&&Ep(e,x,(w,m)=>{for(const p in w){let y=w[p];if(Array.isArray(y)){const E=v?y.length-1:0;y=y[E]}y!==null&&(s[p]=y)}for(const p in m)s[p]=m[p]}),l&&(d&&c!==!1&&!Zo(d)&&Ep(e,d,w=>{for(const m in w)lP(a,m)}),a.length&&(s.willChange=a.join(","))),s}const{schedule:Y,cancel:Gt,state:ye,steps:al}=Qv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Re,!0),cP={useVisualState:p0({scrapeMotionValuesFromProps:u0,createRenderState:i0,onMount:(e,t,{renderState:n,latestValues:r})=>{Y.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Y.render(()=>{cd(n,r,dd(t.tagName),e.transformTemplate),l0(t,n)})}})},dP={useVisualState:p0({applyWillChange:!0,scrapeMotionValuesFromProps:fd,createRenderState:ud})};function fP(e,{forwardMotionProps:t=!1},n,r){return{...id(e)?cP:dP,preloadedFeatures:n,useRender:oP(t),createVisualElement:r,Component:e}}function Mt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const h0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ea(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const pP=e=>t=>h0(t)&&e(t,Ea(t));function Lt(e,t,n,r){return Mt(e,t,pP(n),r)}const hP=(e,t)=>n=>t(e(n)),Ft=(...e)=>e.reduce(hP);function m0(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Sp=m0("dragHorizontal"),Cp=m0("dragVertical");function g0(e){let t=!1;if(e==="y")t=Cp();else if(e==="x")t=Sp();else{const n=Sp(),r=Cp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function y0(){const e=g0(!0);return e?(e(),!1):!0}class In{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Tp(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",o=(i,s)=>{if(i.pointerType==="touch"||y0())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const l=a[r];l&&Y.postRender(()=>l(i,s))};return Lt(e.current,n,o,{passive:!e.getProps()[r]})}class mP extends In{mount(){this.unmount=Ft(Tp(this.node,!0),Tp(this.node,!1))}unmount(){}}class gP extends In{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ft(Mt(this.node.current,"focus",()=>this.onFocus()),Mt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const v0=(e,t)=>t?e===t?!0:v0(e,t.parentElement):!1;function ll(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ea(n))}class yP extends In{constructor(){super(...arguments),this.removeStartListeners=Re,this.removeEndListeners=Re,this.removeAccessibleListeners=Re,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=Lt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps(),f=!d&&!v0(this.node.current,a.target)?c:u;f&&Y.update(()=>f(a,l))},{passive:!(r.onTap||r.onPointerUp)}),s=Lt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Ft(i,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=i=>{if(i.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||ll("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&Y.postRender(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=Mt(this.node.current,"keyup",s),ll("down",(a,l)=>{this.startPress(a,l)})},n=Mt(this.node.current,"keydown",t),r=()=>{this.isPressing&&ll("cancel",(i,s)=>this.cancelPress(i,s))},o=Mt(this.node.current,"blur",r);this.removeAccessibleListeners=Ft(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Y.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!y0()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Y.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Lt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Mt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ft(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Ru=new WeakMap,ul=new WeakMap,vP=e=>{const t=Ru.get(e.target);t&&t(e)},xP=e=>{e.forEach(vP)};function wP({root:e,...t}){const n=e||document;ul.has(n)||ul.set(n,{});const r=ul.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(xP,{root:e,...t})),r[o]}function EP(e,t,n){const r=wP(t);return Ru.set(e,n),r.observe(e),()=>{Ru.delete(e),r.unobserve(e)}}const SP={some:0,all:1};class CP extends In{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:i}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:SP[o]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return EP(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(TP(t,n))&&this.startObserver()}unmount(){}}function TP({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const RP={inView:{Feature:CP},tap:{Feature:yP},focus:{Feature:gP},hover:{Feature:mP}};function x0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Sa(e,t,n){const r=e.getProps();return pd(r,t,n!==void 0?n:r.custom,e)}const yn=e=>e*1e3,Vt=e=>e/1e3,AP={type:"spring",stiffness:500,damping:25,restSpeed:10},PP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),NP={type:"keyframes",duration:.8},bP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},IP=(e,{keyframes:t})=>t.length>2?NP:bn.has(e)?e.startsWith("scale")?PP(t[1]):AP:bP;function kP({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:i,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function hd(e,t){return e[t]||e.default||e}const _P=e=>e!==null;function Ca(e,{repeat:t,repeatType:n="loop"},r){const o=e.filter(_P),i=t&&n!=="loop"&&t%2===1?0:o.length-1;return!i||r===void 0?o[i]:r}let ss;function DP(){ss=void 0}const vn={now:()=>(ss===void 0&&vn.set(ye.isProcessing||vA.useManualTiming?ye.timestamp:performance.now()),ss),set:e=>{ss=e,queueMicrotask(DP)}},w0=e=>/^0[^.\s]+$/u.test(e);function MP(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||w0(e):!0}const E0=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),OP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function LP(e){const t=OP.exec(e);if(!t)return[,];const[,n,r,o]=t;return[`--${n??r}`,o]}function S0(e,t,n=1){const[r,o]=LP(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const s=i.trim();return E0(s)?parseFloat(s):s}return sd(o)?S0(o,t,n+1):o}const FP=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Rp=e=>e===Qr||e===L,Ap=(e,t)=>parseFloat(e.split(", ")[t]),Pp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return Ap(o[1],t);{const i=r.match(/^matrix\((.+)\)$/u);return i?Ap(i[1],e):0}},VP=new Set(["x","y","z"]),jP=di.filter(e=>!VP.has(e));function BP(e){const t=[];return jP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Br={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Pp(4,13),y:Pp(5,14)};Br.translateX=Br.x;Br.translateY=Br.y;const C0=e=>t=>t.test(e),UP={test:e=>e==="auto",parse:e=>e},T0=[Qr,L,Ct,en,$A,GA,UP],Np=e=>T0.find(C0(e)),Wn=new Set;let Au=!1,Pu=!1;function R0(){if(Pu){const e=Array.from(Wn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const o=BP(r);o.length&&(n.set(r,o),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const o=n.get(r);o&&o.forEach(([i,s])=>{var a;(a=r.getValue(i))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Pu=!1,Au=!1,Wn.forEach(e=>e.complete()),Wn.clear()}function A0(){Wn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Pu=!0)})}function zP(){A0(),R0()}class md{constructor(t,n,r,o,i,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=o,this.element=i,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Wn.add(this),Au||(Au=!0,Y.read(A0),Y.resolveKeyframes(R0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:o}=this;for(let i=0;i<t.length;i++)if(t[i]===null)if(i===0){const s=o==null?void 0:o.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),o&&s===void 0&&o.set(t[0])}else t[i]=t[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Wn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Wn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const gd=(e,t)=>n=>!!(fi(n)&&HA.test(n)&&n.startsWith(e)||t&&!WA(n)&&Object.prototype.hasOwnProperty.call(n,t)),P0=(e,t,n)=>r=>{if(!fi(r))return r;const[o,i,s,a]=r.match(ad);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},HP=e=>Tn(0,255,e),cl={...Qr,transform:e=>Math.round(HP(e))},Un={test:gd("rgb","red"),parse:P0("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+cl.transform(e)+", "+cl.transform(t)+", "+cl.transform(n)+", "+Po(Ao.transform(r))+")"};function WP(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Nu={test:gd("#"),parse:WP,transform:Un.transform},xr={test:gd("hsl","hue"),parse:P0("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ct.transform(Po(t))+", "+Ct.transform(Po(n))+", "+Po(Ao.transform(r))+")"},Se={test:e=>Un.test(e)||Nu.test(e)||xr.test(e),parse:e=>Un.test(e)?Un.parse(e):xr.test(e)?xr.parse(e):Nu.parse(e),transform:e=>fi(e)?e:e.hasOwnProperty("red")?Un.transform(e):xr.transform(e)};function GP(e){var t,n;return isNaN(e)&&fi(e)&&(((t=e.match(ad))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(zA))===null||n===void 0?void 0:n.length)||0)>0}const N0="number",b0="color",$P="var",KP="var(",bp="${}",YP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Jo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},o=[];let i=0;const a=t.replace(YP,l=>(Se.test(l)?(r.color.push(i),o.push(b0),n.push(Se.parse(l))):l.startsWith(KP)?(r.var.push(i),o.push($P),n.push(l)):(r.number.push(i),o.push(N0),n.push(parseFloat(l))),++i,bp)).split(bp);return{values:n,split:a,indexes:r,types:o}}function I0(e){return Jo(e).values}function k0(e){const{split:t,types:n}=Jo(e),r=t.length;return o=>{let i="";for(let s=0;s<r;s++)if(i+=t[s],o[s]!==void 0){const a=n[s];a===N0?i+=Po(o[s]):a===b0?i+=Se.transform(o[s]):i+=o[s]}return i}}const QP=e=>typeof e=="number"?0:e;function XP(e){const t=I0(e);return k0(e)(t.map(QP))}const Rn={test:GP,parse:I0,createTransformer:k0,getAnimatableNone:XP},qP=new Set(["brightness","contrast","saturate","opacity"]);function ZP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(ad)||[];if(!r)return e;const o=n.replace(r,"");let i=qP.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const JP=/\b([a-z-]*)\(.*?\)/gu,bu={...Rn,getAnimatableNone:e=>{const t=e.match(JP);return t?t.map(ZP).join(" "):e}},eN={...n0,color:Se,backgroundColor:Se,outlineColor:Se,fill:Se,stroke:Se,borderColor:Se,borderTopColor:Se,borderRightColor:Se,borderBottomColor:Se,borderLeftColor:Se,filter:bu,WebkitFilter:bu},yd=e=>eN[e];function _0(e,t){let n=yd(e);return n!==bu&&(n=Rn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const tN=new Set(["auto","none","0"]);function nN(e,t,n){let r=0,o;for(;r<e.length&&!o;){const i=e[r];typeof i=="string"&&!tN.has(i)&&Jo(i).values.length&&(o=e[r]),r++}if(o&&n)for(const i of t)e[i]=_0(n,o)}class D0 extends md{constructor(t,n,r,o){super(t,n,r,o,o==null?void 0:o.owner,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),sd(u))){const c=S0(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!FP.has(r)||t.length!==2)return;const[o,i]=t,s=Np(o),a=Np(i);if(s!==a)if(Rp(s)&&Rp(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let o=0;o<t.length;o++)MP(t[o])&&r.push(o);r.length&&nN(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Br[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(r,o).jump(o,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:o}=this;if(!n.current)return;const i=n.getValue(r);i&&i.jump(this.measuredOrigin,!1);const s=o.length-1,a=o[s];o[s]=Br[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function M0(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ip=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Rn.test(e)||e==="0")&&!e.startsWith("url("));function rN(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function oN(e,t,n,r){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const i=e[e.length-1],s=Ip(o,t),a=Ip(i,t);return!s||!a?!1:rN(e)||n==="spring"&&r}class O0{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:o=0,repeatDelay:i=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:t,delay:n,type:r,repeat:o,repeatDelay:i,repeatType:s,...a},this.updateFinishedPromise()}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&zP(),this._resolved}onKeyframesResolved(t,n){this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:i,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!oN(t,r,o,i))if(s)this.options.duration=0;else{l==null||l(Ca(t,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function L0(e,t){return t?e*(1e3/t):0}const iN=5;function F0(e,t,n){const r=Math.max(t-iN,0);return L0(n-e(r),t-r)}const dl=.001,sN=.01,aN=10,lN=.05,uN=1;function cN({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,i,s=1-t;s=Tn(lN,uN,s),e=Tn(sN,aN,Vt(e)),s<1?(o=u=>{const c=u*s,d=c*e,f=c-n,g=Iu(u,s),v=Math.exp(-d);return dl-f/g*v},i=u=>{const d=u*s*e,f=d*n+n,g=Math.pow(s,2)*Math.pow(u,2)*e,v=Math.exp(-d),x=Iu(Math.pow(u,2),s);return(-o(u)+dl>0?-1:1)*((f-g)*v)/x}):(o=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-dl+c*d},i=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=fN(o,i,a);if(e=yn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const dN=12;function fN(e,t,n){let r=n;for(let o=1;o<dN;o++)r=r-e(r)/t(r);return r}function Iu(e,t){return e*Math.sqrt(1-t*t)}const pN=["duration","bounce"],hN=["stiffness","damping","mass"];function kp(e,t){return t.some(n=>e[n]!==void 0)}function mN(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!kp(e,hN)&&kp(e,pN)){const n=cN(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function V0({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],i=e[e.length-1],s={done:!1,value:o},{stiffness:a,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:f}=mN({...r,velocity:-Vt(r.velocity||0)}),g=d||0,v=l/(2*Math.sqrt(a*u)),x=i-o,w=Vt(Math.sqrt(a/u)),m=Math.abs(x)<5;n||(n=m?.01:2),t||(t=m?.005:.5);let p;if(v<1){const y=Iu(w,v);p=E=>{const C=Math.exp(-v*w*E);return i-C*((g+v*w*x)/y*Math.sin(y*E)+x*Math.cos(y*E))}}else if(v===1)p=y=>i-Math.exp(-w*y)*(x+(g+w*x)*y);else{const y=w*Math.sqrt(v*v-1);p=E=>{const C=Math.exp(-v*w*E),R=Math.min(y*E,300);return i-C*((g+v*w*x)*Math.sinh(R)+y*x*Math.cosh(R))/y}}return{calculatedDuration:f&&c||null,next:y=>{const E=p(y);if(f)s.done=y>=c;else{let C=g;y!==0&&(v<1?C=F0(p,y,E):C=0);const R=Math.abs(C)<=n,A=Math.abs(i-E)<=t;s.done=R&&A}return s.value=s.done?i:E,s}}}function _p({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},g=T=>a!==void 0&&T<a||l!==void 0&&T>l,v=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let x=n*t;const w=d+x,m=s===void 0?w:s(w);m!==w&&(x=m-d);const p=T=>-x*Math.exp(-T/r),y=T=>m+p(T),E=T=>{const k=p(T),b=y(T);f.done=Math.abs(k)<=u,f.value=f.done?m:b};let C,R;const A=T=>{g(f.value)&&(C=T,R=V0({keyframes:[f.value,v(f.value)],velocity:F0(y,T,f.value),damping:o,stiffness:i,restDelta:u,restSpeed:c}))};return A(0),{calculatedDuration:null,next:T=>{let k=!1;return!R&&C===void 0&&(k=!0,E(T),A(T)),C!==void 0&&T>=C?R.next(T-C):(!k&&E(T),f)}}}const j0=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,gN=1e-7,yN=12;function vN(e,t,n,r,o){let i,s,a=0;do s=t+(n-t)/2,i=j0(s,r,o)-e,i>0?n=s:t=s;while(Math.abs(i)>gN&&++a<yN);return s}function hi(e,t,n,r){if(e===t&&n===r)return Re;const o=i=>vN(i,0,1,e,n);return i=>i===0||i===1?i:j0(o(i),t,r)}const xN=hi(.42,0,1,1),wN=hi(0,0,.58,1),B0=hi(.42,0,.58,1),EN=e=>Array.isArray(e)&&typeof e[0]!="number",U0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,z0=e=>t=>1-e(1-t),vd=e=>1-Math.sin(Math.acos(e)),H0=z0(vd),SN=U0(vd),W0=hi(.33,1.53,.69,.99),xd=z0(W0),CN=U0(xd),TN=e=>(e*=2)<1?.5*xd(e):.5*(2-Math.pow(2,-10*(e-1))),Dp={linear:Re,easeIn:xN,easeInOut:B0,easeOut:wN,circIn:vd,circInOut:SN,circOut:H0,backIn:xd,backInOut:CN,backOut:W0,anticipate:TN},Mp=e=>{if(Array.isArray(e)){Cu(e.length===4);const[t,n,r,o]=e;return hi(t,n,r,o)}else if(typeof e=="string")return Cu(Dp[e]!==void 0),Dp[e];return e},ei=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},re=(e,t,n)=>e+(t-e)*n;function fl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function RN({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,i=0,s=0;if(!t)o=i=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;o=fl(l,a,e+1/3),i=fl(l,a,e),s=fl(l,a,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(s*255),alpha:r}}function Bs(e,t){return n=>n>0?t:e}const pl=(e,t,n)=>{const r=e*e,o=n*(t*t-r)+r;return o<0?0:Math.sqrt(o)},AN=[Nu,Un,xr],PN=e=>AN.find(t=>t.test(e));function Op(e){const t=PN(e);if(!t)return!1;let n=t.parse(e);return t===xr&&(n=RN(n)),n}const Lp=(e,t)=>{const n=Op(e),r=Op(t);if(!n||!r)return Bs(e,t);const o={...n};return i=>(o.red=pl(n.red,r.red,i),o.green=pl(n.green,r.green,i),o.blue=pl(n.blue,r.blue,i),o.alpha=re(n.alpha,r.alpha,i),Un.transform(o))},ku=new Set(["none","hidden"]);function NN(e,t){return ku.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function bN(e,t){return n=>re(e,t,n)}function wd(e){return typeof e=="number"?bN:typeof e=="string"?sd(e)?Bs:Se.test(e)?Lp:_N:Array.isArray(e)?G0:typeof e=="object"?Se.test(e)?Lp:IN:Bs}function G0(e,t){const n=[...e],r=n.length,o=e.map((i,s)=>wd(i)(i,t[s]));return i=>{for(let s=0;s<r;s++)n[s]=o[s](i);return n}}function IN(e,t){const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=wd(e[o])(e[o],t[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}}function kN(e,t){var n;const r=[],o={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],a=e.indexes[s][o[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[i]=l,o[s]++}return r}const _N=(e,t)=>{const n=Rn.createTransformer(t),r=Jo(e),o=Jo(t);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?ku.has(e)&&!o.values.length||ku.has(t)&&!r.values.length?NN(e,t):Ft(G0(kN(r,o),o.values),n):Bs(e,t)};function $0(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?re(e,t,n):wd(e)(e,t)}function DN(e,t,n){const r=[],o=n||$0,i=e.length-1;for(let s=0;s<i;s++){let a=o(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||Re:t;a=Ft(l,a)}r.push(a)}return r}function MN(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const i=e.length;if(Cu(i===t.length),i===1)return()=>t[0];if(i===2&&e[0]===e[1])return()=>t[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=DN(t,r,o),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=ei(e[c],e[c+1],u);return s[c](d)};return n?u=>l(Tn(e[0],e[i-1],u)):l}function ON(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=ei(0,t,r);e.push(re(n,1,o))}}function LN(e){const t=[0];return ON(t,e.length-1),t}function FN(e,t){return e.map(n=>n*t)}function VN(e,t){return e.map(()=>t||B0).splice(0,e.length-1)}function Us({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=EN(r)?r.map(Mp):Mp(r),i={done:!1,value:t[0]},s=FN(n&&n.length===t.length?n:LN(t),e),a=MN(s,t,{ease:Array.isArray(o)?o:VN(t,o)});return{calculatedDuration:e,next:l=>(i.value=a(l),i.done=l>=e,i)}}const Fp=2e4;function jN(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Fp;)t+=n,r=e.next(t);return t>=Fp?1/0:t}const BN=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Y.update(t,!0),stop:()=>Gt(t),now:()=>ye.isProcessing?ye.timestamp:vn.now()}},UN={decay:_p,inertia:_p,tween:Us,keyframes:Us,spring:V0},zN=e=>e/100;class Ed extends O0{constructor({KeyframeResolver:t=md,...n}){super(n),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:a}=this.options;a&&a()};const{name:r,motionValue:o,keyframes:i}=this.options,s=(a,l)=>this.onKeyframesResolved(a,l);r&&o&&o.owner?this.resolver=o.owner.resolveKeyframes(i,s,r,o):this.resolver=new t(i,s,r,o),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:i,velocity:s=0}=this.options,a=UN[n]||Us;let l,u;a!==Us&&typeof t[0]!="number"&&(l=Ft(zN,$0(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});i==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=jN(c));const{calculatedDuration:d}=c,f=d+o,g=f*(r+1)-o;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:o,generator:i,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=r;if(this.startTime===null)return i.next(0);const{delay:f,repeat:g,repeatType:v,repeatDelay:x,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-f*(this.speed>=0?1:-1),p=this.speed>=0?m<0:m>c;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let y=this.currentTime,E=i;if(g){const T=Math.min(this.currentTime,c)/d;let k=Math.floor(T),b=T%1;!b&&T>=1&&(b=1),b===1&&k--,k=Math.min(k,g+1),!!(k%2)&&(v==="reverse"?(b=1-b,x&&(b-=x/d)):v==="mirror"&&(E=s)),y=Tn(0,1,b)*d}const C=p?{done:!1,value:l[0]}:E.next(y);a&&(C.value=a(C.value));let{done:R}=C;!p&&u!==null&&(R=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&R);return A&&o!==void 0&&(C.value=Ca(l,this.options,o)),w&&w(C.value),A&&this.finish(),C}get duration(){const{resolved:t}=this;return t?Vt(t.calculatedDuration):0}get time(){return Vt(this.currentTime)}set time(t){t=yn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Vt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=BN,onPlay:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:(!this.startTime||this.state==="finished")&&(this.startTime=r),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const K0=e=>Array.isArray(e)&&typeof e[0]=="number";function Y0(e){return!!(!e||typeof e=="string"&&e in Sd||K0(e)||Array.isArray(e)&&e.every(Y0))}const go=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Sd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:go([0,.65,.55,1]),circOut:go([.55,0,1,.45]),backIn:go([.31,.01,.66,-.59]),backOut:go([.33,1.53,.69,.99])};function HN(e){return Q0(e)||Sd.easeOut}function Q0(e){if(e)return K0(e)?go(e):Array.isArray(e)?e.map(HN):Sd[e]}function WN(e,t,n,{delay:r=0,duration:o=300,repeat:i=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=Q0(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:o,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:i+1,direction:s==="reverse"?"alternate":"normal"})}const GN=M0(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),zs=10,$N=2e4;function KN(e){return e.type==="spring"||!Y0(e.ease)}function YN(e,t){const n=new Ed({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const o=[];let i=0;for(;!r.done&&i<$N;)r=n.sample(i),o.push(r.value),i+=zs;return{times:void 0,keyframes:o,duration:i-zs,ease:"linear"}}class Vp extends O0{constructor(t){super(t);const{name:n,motionValue:r,keyframes:o}=this.options;this.resolver=new D0(o,(i,s)=>this.onKeyframesResolved(i,s),n,r),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:o=300,times:i,ease:s,type:a,motionValue:l,name:u}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(KN(this.options)){const{onComplete:d,onUpdate:f,motionValue:g,...v}=this.options,x=YN(t,v);t=x.keyframes,t.length===1&&(t[1]=t[0]),o=x.duration,i=x.times,s=x.ease,a="keyframes"}const c=WN(l.owner.current,u,t,{...this.options,duration:o,times:i,ease:s});return c.startTime=vn.now(),this.pendingTimeline?(c.timeline=this.pendingTimeline,this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:d}=this.options;l.set(Ca(t,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:o,times:i,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Vt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Vt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=yn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Re;const{animation:r}=n;r.timeline=t,r.onfinish=null}return Re}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:o,type:i,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:d,...f}=this.options,g=new Ed({...f,keyframes:r,duration:o,type:i,ease:s,times:a,isGenerator:!0}),v=yn(this.time);u.setWithVelocity(g.sample(v-zs).value,g.sample(v).value,zs)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:o,repeatType:i,damping:s,type:a}=t;return GN()&&r&&d0.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!o&&i!=="mirror"&&s!==0&&a!=="inertia"}}function QN(e,t){let n;const r=()=>{const{currentTime:o}=t,s=(o===null?0:o.value)/100;n!==s&&e(s),n=s};return Y.update(r,!0),()=>Gt(r)}const XN=M0(()=>window.ScrollTimeline!==void 0);class qN{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t){const n=this.animations.map(r=>{if(XN()&&r.attachTimeline)r.attachTimeline(t);else return r.pause(),QN(o=>{r.time=r.duration*o},t)});return()=>{n.forEach((r,o)=>{r&&r(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const Cd=(e,t,n,r={},o,i,s)=>a=>{const l=hd(r,e)||{},u=l.delay||r.delay||0;let{elapsed:c=0}=r;c=c-yn(u);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-c,onUpdate:g=>{t.set(g),l.onUpdate&&l.onUpdate(g)},onComplete:()=>{a(),l.onComplete&&l.onComplete(),s&&s()},onStop:s,name:e,motionValue:t,element:i?void 0:o};kP(l)||(d={...d,...IP(e,d)}),d.duration&&(d.duration=yn(d.duration)),d.repeatDelay&&(d.repeatDelay=yn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!i&&t.get()!==void 0){const g=Ca(d.keyframes,l);if(g!==void 0)return Y.update(()=>{d.onUpdate(g),d.onComplete()}),new qN([])}return!i&&Vp.supports(d)?new Vp(d):new Ed(d)};class Td{constructor(){this.subscriptions=[]}add(t){return xa(this.subscriptions,t),()=>wa(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let i=0;i<o;i++){const s=this.subscriptions[i];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jp=30,ZN=e=>!isNaN(parseFloat(e));class X0{constructor(t,n={}){this.version="11.3.8",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const i=vn.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=vn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=ZN(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Td);const r=this.events[t].add(n);return t==="change"?()=>{r(),Y.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=vn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>jp)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,jp);return L0(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ti(e,t){return new X0(e,t)}function JN(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ti(n))}function eb(e,t){const n=Sa(e,t);let{transitionEnd:r={},transition:o={},...i}=n||{};i={...i,...r};for(const s in i){const a=sP(i[s]);JN(e,s,a)}}function q0(e){return e.getProps()[Yv]}class tb extends X0{constructor(){super(...arguments),this.output=[],this.counts=new Map}add(t){const n=f0(t);if(!n)return;const r=this.counts.get(n)||0;this.counts.set(n,r+1),r===0&&(this.output.push(n),this.update());let o=!1;return()=>{if(o)return;o=!0;const i=this.counts.get(n)-1;this.counts.set(n,i),i===0&&(wa(this.output,n),this.update())}}update(){this.set(this.output.length?this.output.join(", "):"auto")}}function nb(e){return!!(Te(e)&&e.add)}function _u(e,t){var n;if(!e.applyWillChange)return;let r=e.getValue("willChange");if(!r&&!(!((n=e.props.style)===null||n===void 0)&&n.willChange)&&(r=new tb("auto"),e.addValue("willChange",r)),nb(r))return r.add(t)}function rb({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Z0(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var i;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const u=[],c=o&&e.animationState&&e.animationState.getState()[o];for(const d in l){const f=e.getValue(d,(i=e.latestValues[d])!==null&&i!==void 0?i:null),g=l[d];if(g===void 0||c&&rb(c,d))continue;const v={delay:n,elapsed:0,...hd(s||{},d)};let x=!1;if(window.HandoffAppearAnimations){const m=q0(e);if(m){const p=window.HandoffAppearAnimations(m,d,f,Y);p!==null&&(v.elapsed=p,x=!0)}}f.start(Cd(d,f,g,e.shouldReduceMotion&&bn.has(d)?{type:!1}:v,e,x,_u(e,d)));const w=f.animation;w&&u.push(w)}return a&&Promise.all(u).then(()=>{Y.update(()=>{a&&eb(e,a)})}),u}function Du(e,t,n={}){var r;const o=Sa(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(i=n.transitionOverride);const s=o?()=>Promise.all(Z0(e,o,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=i;return ob(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[u,c]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(n.delay)])}function ob(e,t,n=0,r=0,o=1,i){const s=[],a=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(ib).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(Du(u,t,{...i,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function ib(e,t){return e.sortNodePosition(t)}function sb(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(i=>Du(e,i,n));r=Promise.all(o)}else if(typeof t=="string")r=Du(e,t,n);else{const o=typeof t=="function"?Sa(e,t,n.custom):t;r=Promise.all(Z0(e,o,n))}return r.then(()=>{Y.postRender(()=>{e.notify("AnimationComplete",t)})})}const ab=[...nd].reverse(),lb=nd.length;function ub(e){return t=>Promise.all(t.map(({animation:n,options:r})=>sb(e,n,r)))}function cb(e){let t=ub(e),n=Bp(),r=!0;const o=l=>(u,c)=>{var d;const f=Sa(e,c,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:g,transitionEnd:v,...x}=f;u={...u,...x,...v}}return u};function i(l){t=l(e)}function s(l){const u=e.getProps(),c=e.getVariantContext(!0)||{},d=[],f=new Set;let g={},v=1/0;for(let w=0;w<lb;w++){const m=ab[w],p=n[m],y=u[m]!==void 0?u[m]:c[m],E=qo(y),C=m===l?p.isActive:null;C===!1&&(v=w);let R=y===c[m]&&y!==u[m]&&E;if(R&&r&&e.manuallyAnimateOnMount&&(R=!1),p.protectedKeys={...g},!p.isActive&&C===null||!y&&!p.prevProp||Zo(y)||typeof y=="boolean")continue;let T=db(p.prevProp,y)||m===l&&p.isActive&&!R&&E||w>v&&E,k=!1;const b=Array.isArray(y)?y:[y];let O=b.reduce(o(m),{});C===!1&&(O={});const{prevResolvedValues:M={}}=p,K={...M,...O},W=B=>{T=!0,f.has(B)&&(k=!0,f.delete(B)),p.needsAnimating[B]=!0;const V=e.getValue(B);V&&(V.liveStyle=!1)};for(const B in K){const V=O[B],F=M[B];if(g.hasOwnProperty(B))continue;let N=!1;Tu(V)&&Tu(F)?N=!x0(V,F):N=V!==F,N?V!=null?W(B):f.add(B):V!==void 0&&f.has(B)?W(B):p.protectedKeys[B]=!0}p.prevProp=y,p.prevResolvedValues=O,p.isActive&&(g={...g,...O}),r&&e.blockInitialAnimation&&(T=!1),T&&(!R||k)&&d.push(...b.map(B=>({animation:B,options:{type:m}})))}if(f.size){const w={};f.forEach(m=>{const p=e.getBaseTarget(m),y=e.getValue(m);y&&(y.liveStyle=!0),w[m]=p??null}),d.push({animation:w})}let x=!!d.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(d):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(f=>{var g;return(g=f.animationState)===null||g===void 0?void 0:g.setActive(l,u)}),n[l].isActive=u;const d=s(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:i,getState:()=>n,reset:()=>{n=Bp(),r=!0}}}function db(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!x0(t,e):!1}function kn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Bp(){return{animate:kn(!0),whileInView:kn(),whileHover:kn(),whileTap:kn(),whileDrag:kn(),whileFocus:kn(),exit:kn()}}class fb extends In{constructor(t){super(t),t.animationState||(t.animationState=cb(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Zo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let pb=0;class hb extends In{constructor(){super(...arguments),this.id=pb++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const mb={animation:{Feature:fb},exit:{Feature:hb}},Up=(e,t)=>Math.abs(e-t);function gb(e,t){const n=Up(e.x,t.x),r=Up(e.y,t.y);return Math.sqrt(n**2+r**2)}class J0{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=ml(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=gb(d.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:v}=d,{timestamp:x}=ye;this.history.push({...v,timestamp:x});const{onStart:w,onMove:m}=this.handlers;f||(w&&w(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=hl(f,this.transformPagePoint),Y.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=ml(d.type==="pointercancel"?this.lastMoveEventInfo:hl(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,w),v&&v(d,w)},!h0(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const s=Ea(t),a=hl(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=ye;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,ml(a,this.history)),this.removeListeners=Ft(Lt(this.contextWindow,"pointermove",this.handlePointerMove),Lt(this.contextWindow,"pointerup",this.handlePointerUp),Lt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Gt(this.updatePoint)}}function hl(e,t){return t?{point:t(e.point)}:e}function zp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ml({point:e},t){return{point:e,delta:zp(e,ex(t)),offset:zp(e,yb(t)),velocity:vb(t,.1)}}function yb(e){return e[0]}function ex(e){return e[e.length-1]}function vb(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=ex(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>yn(t)));)n--;if(!r)return{x:0,y:0};const i=Vt(o.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const s={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const tx=1e-4,xb=1-tx,wb=1+tx,nx=.01,Eb=0-nx,Sb=0+nx;function Ke(e){return e.max-e.min}function Cb(e,t,n){return Math.abs(e-t)<=n}function Hp(e,t,n,r=.5){e.origin=r,e.originPoint=re(t.min,t.max,e.origin),e.scale=Ke(n)/Ke(t),e.translate=re(n.min,n.max,e.origin)-e.originPoint,(e.scale>=xb&&e.scale<=wb||isNaN(e.scale))&&(e.scale=1),(e.translate>=Eb&&e.translate<=Sb||isNaN(e.translate))&&(e.translate=0)}function No(e,t,n,r){Hp(e.x,t.x,n.x,r?r.originX:void 0),Hp(e.y,t.y,n.y,r?r.originY:void 0)}function Wp(e,t,n){e.min=n.min+t.min,e.max=e.min+Ke(t)}function Tb(e,t,n){Wp(e.x,t.x,n.x),Wp(e.y,t.y,n.y)}function Gp(e,t,n){e.min=t.min-n.min,e.max=e.min+Ke(t)}function bo(e,t,n){Gp(e.x,t.x,n.x),Gp(e.y,t.y,n.y)}function Rb(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?re(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?re(n,e,r.max):Math.min(e,n)),e}function $p(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Ab(e,{top:t,left:n,bottom:r,right:o}){return{x:$p(e.x,n,o),y:$p(e.y,t,r)}}function Kp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Pb(e,t){return{x:Kp(e.x,t.x),y:Kp(e.y,t.y)}}function Nb(e,t){let n=.5;const r=Ke(e),o=Ke(t);return o>r?n=ei(t.min,t.max-r,e.min):r>o&&(n=ei(e.min,e.max-o,t.min)),Tn(0,1,n)}function bb(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Mu=.35;function Ib(e=Mu){return e===!1?e=0:e===!0&&(e=Mu),{x:Yp(e,"left","right"),y:Yp(e,"top","bottom")}}function Yp(e,t,n){return{min:Qp(e,t),max:Qp(e,n)}}function Qp(e,t){return typeof e=="number"?e:e[t]||0}const Xp=()=>({translate:0,scale:1,origin:0,originPoint:0}),wr=()=>({x:Xp(),y:Xp()}),qp=()=>({min:0,max:0}),ae=()=>({x:qp(),y:qp()});function Ze(e){return[e("x"),e("y")]}function rx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function kb({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function _b(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function gl(e){return e===void 0||e===1}function Ou({scale:e,scaleX:t,scaleY:n}){return!gl(e)||!gl(t)||!gl(n)}function Mn(e){return Ou(e)||ox(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ox(e){return Zp(e.x)||Zp(e.y)}function Zp(e){return e&&e!=="0%"}function Hs(e,t,n){const r=e-n,o=t*r;return n+o}function Jp(e,t,n,r,o){return o!==void 0&&(e=Hs(e,o,r)),Hs(e,n,r)+t}function Lu(e,t=0,n=1,r,o){e.min=Jp(e.min,t,n,r,o),e.max=Jp(e.max,t,n,r,o)}function ix(e,{x:t,y:n}){Lu(e.x,t.translate,t.scale,t.originPoint),Lu(e.y,n.translate,n.scale,n.originPoint)}const eh=.999999999999,th=1.0000000000001;function Db(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let i,s;for(let a=0;a<o;a++){i=n[a],s=i.projectionDelta;const{visualElement:l}=i.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Er(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,ix(e,s)),r&&Mn(i.latestValues)&&Er(e,i.latestValues))}t.x<th&&t.x>eh&&(t.x=1),t.y<th&&t.y>eh&&(t.y=1)}function rn(e,t){e.min=e.min+t,e.max=e.max+t}function nh(e,t,n,r,o=.5){const i=re(e.min,e.max,o);Lu(e,t,n,i,r)}function Er(e,t){nh(e.x,t.x,t.scaleX,t.scale,t.originX),nh(e.y,t.y,t.scaleY,t.scale,t.originY)}function sx(e,t){return rx(_b(e.getBoundingClientRect(),t))}function Mb(e,t,n){const r=sx(e,n),{scroll:o}=t;return o&&(rn(r.x,o.offset.x),rn(r.y,o.offset.y)),r}const ax=({current:e})=>e?e.ownerDocument.defaultView:null,Ob=new WeakMap;class Lb{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ae(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ea(c,"page").point)},i=(c,d)=>{var f;const{drag:g,dragPropagation:v,onDragStart:x}=this.getProps();if(g&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=g0(g),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ze(m=>{let p=this.getAxisMotionValue(m).get()||0;if(Ct.test(p)){const{projection:y}=this.visualElement;if(y&&y.layout){const E=y.layout.layoutBox[m];E&&(p=Ke(E)*(parseFloat(p)/100))}}this.originPoint[m]=p}),x&&Y.postRender(()=>x(c,d)),(f=this.removeWillChange)===null||f===void 0||f.call(this),this.removeWillChange=_u(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(c,d)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:v,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:w}=d;if(g&&this.currentDirection===null){this.currentDirection=Fb(w),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,w),this.updateAxis("y",d.point,w),this.visualElement.render(),x&&x(c,d)},a=(c,d)=>this.stop(c,d),l=()=>Ze(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new J0(t,{onSessionStart:o,onStart:i,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:ax(this.visualElement)})}stop(t,n){var r;(r=this.removeWillChange)===null||r===void 0||r.call(this);const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&Y.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!zi(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=Rb(s,this.constraints[t],this.elastic[t])),i.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&vr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=Ab(o.layoutBox,n):this.constraints=!1,this.elastic=Ib(r),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Ze(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=bb(o.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!vr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=Mb(r,o.root,this.visualElement.getTransformPagePoint());let s=Pb(o.layout.layoutBox,i);if(n){const a=n(kb(s));this.hasMutatedConstraints=!!a,a&&(s=rx(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:i,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Ze(c=>{if(!zi(c,n,this.currentDirection))return;let d=l&&l[c]||{};s&&(d={min:0,max:0});const f=o?200:1e6,g=o?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...i,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Cd(t,r,0,n,this.visualElement,!1,_u(this.visualElement,t)))}stopAnimation(){Ze(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ze(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ze(n=>{const{drag:r}=this.getProps();if(!zi(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:s,max:a}=o.layout.layoutBox[n];i.set(t[n]-re(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!vr(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ze(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();o[s]=Nb({min:l,max:l},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ze(s=>{if(!zi(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(re(l,u,o[s]))})}addListeners(){if(!this.visualElement.current)return;Ob.set(this.visualElement,this);const t=this.visualElement.current,n=Lt(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();vr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Y.read(r);const s=Mt(window,"resize",()=>this.scalePositionWithinConstraints()),a=o.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ze(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),i(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:s=Mu,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:i,dragElastic:s,dragMomentum:a}}}function zi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Fb(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Vb extends In{constructor(t){super(t),this.removeGroupControls=Re,this.removeListeners=Re,this.controls=new Lb(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Re}unmount(){this.removeGroupControls(),this.removeListeners()}}const rh=e=>(t,n)=>{e&&Y.postRender(()=>e(t,n))};class jb extends In{constructor(){super(...arguments),this.removePointerDownListener=Re}onPointerDown(t){this.session=new J0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ax(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:rh(t),onStart:rh(n),onMove:r,onEnd:(i,s)=>{delete this.session,o&&Y.postRender(()=>o(i,s))}}}mount(){this.removePointerDownListener=Lt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Bb(){const e=h.useContext(ga);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=h.useId();return h.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const as={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function oh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const uo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const n=oh(e,t.target.x),r=oh(e,t.target.y);return`${n}% ${r}%`}},Ub={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=Rn.parse(e);if(o.length>5)return r;const i=Rn.createTransformer(e),s=typeof o[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;o[0+s]/=a,o[1+s]/=l;const u=re(a,l,.5);return typeof o[2+s]=="number"&&(o[2+s]/=u),typeof o[3+s]=="number"&&(o[3+s]/=u),i(o)}};class zb extends h.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:i}=t;OA(Hb),i&&(n.group&&n.group.add(i),r&&r.register&&o&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),as.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:i}=this.props,s=r.projection;return s&&(s.isPresent=i,o||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?s.promote():s.relegate()||Y.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),td.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function lx(e){const[t,n]=Bb(),r=h.useContext(od);return S.jsx(zb,{...e,layoutGroup:r,switchLayoutGroup:h.useContext(Xv),isPresent:t,safeToRemove:n})}const Hb={borderRadius:{...uo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:uo,borderTopRightRadius:uo,borderBottomLeftRadius:uo,borderBottomRightRadius:uo,boxShadow:Ub},ux=["TopLeft","TopRight","BottomLeft","BottomRight"],Wb=ux.length,ih=e=>typeof e=="string"?parseFloat(e):e,sh=e=>typeof e=="number"||L.test(e);function Gb(e,t,n,r,o,i){o?(e.opacity=re(0,n.opacity!==void 0?n.opacity:1,$b(r)),e.opacityExit=re(t.opacity!==void 0?t.opacity:1,0,Kb(r))):i&&(e.opacity=re(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<Wb;s++){const a=`border${ux[s]}Radius`;let l=ah(t,a),u=ah(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||sh(l)===sh(u)?(e[a]=Math.max(re(ih(l),ih(u),r),0),(Ct.test(u)||Ct.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=re(t.rotate||0,n.rotate||0,r))}function ah(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const $b=cx(0,.5,H0),Kb=cx(.5,.95,Re);function cx(e,t,n){return r=>r<e?0:r>t?1:n(ei(e,t,r))}function lh(e,t){e.min=t.min,e.max=t.max}function qe(e,t){lh(e.x,t.x),lh(e.y,t.y)}function uh(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function ch(e,t,n,r,o){return e-=t,e=Hs(e,1/n,r),o!==void 0&&(e=Hs(e,1/o,r)),e}function Yb(e,t=0,n=1,r=.5,o,i=e,s=e){if(Ct.test(t)&&(t=parseFloat(t),t=re(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=re(i.min,i.max,r);e===i&&(a-=t),e.min=ch(e.min,t,n,a,o),e.max=ch(e.max,t,n,a,o)}function dh(e,t,[n,r,o],i,s){Yb(e,t[n],t[r],t[o],t.scale,i,s)}const Qb=["x","scaleX","originX"],Xb=["y","scaleY","originY"];function fh(e,t,n,r){dh(e.x,t,Qb,n?n.x:void 0,r?r.x:void 0),dh(e.y,t,Xb,n?n.y:void 0,r?r.y:void 0)}function ph(e){return e.translate===0&&e.scale===1}function dx(e){return ph(e.x)&&ph(e.y)}function qb(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function fx(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function hh(e){return Ke(e.x)/Ke(e.y)}function mh(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Zb{constructor(){this.members=[]}add(t){xa(this.members,t),t.scheduleRender()}remove(t){if(wa(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Jb(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((o||i||s)&&(r=`translate3d(${o}px, ${i}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:g,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),d&&(r+=`rotateX(${d}deg) `),f&&(r+=`rotateY(${f}deg) `),g&&(r+=`skewX(${g}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const eI=(e,t)=>e.depth-t.depth;class tI{constructor(){this.children=[],this.isDirty=!1}add(t){xa(this.children,t),this.isDirty=!0}remove(t){wa(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(eI),this.isDirty=!1,this.children.forEach(t)}}function nI(e,t){const n=vn.now(),r=({timestamp:o})=>{const i=o-n;i>=t&&(Gt(r),e(i-t))};return Y.read(r,!0),()=>Gt(r)}function rI(e){return e instanceof SVGElement&&e.tagName!=="svg"}function oI(e,t,n){const r=Te(e)?e:ti(e);return r.start(Cd("",r,t,n)),r.animation}const On={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},yl=["","X","Y","Z"],iI={visibility:"hidden"},gh=1e3;let sI=0;function vl(e,t,n,r){const{latestValues:o}=t;o[e]&&(n[e]=o[e],t.setStaticValue(e,0),r&&(r[e]=0))}function px(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return!1;const{visualElement:t}=e.options;return t?q0(t)?!0:e.parent&&!e.parent.hasCheckedOptimisedAppear?px(e.parent):!1:!1}function hx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(s={},a=t==null?void 0:t()){this.id=sI++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,window.MotionDebug&&(On.totalNodes=On.resolvedTargetDeltas=On.recalculatedProjection=0),this.nodes.forEach(uI),this.nodes.forEach(hI),this.nodes.forEach(mI),this.nodes.forEach(cI),window.MotionDebug&&window.MotionDebug.record(On)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new tI)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Td),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=rI(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=nI(f,250),as.hasAnimatedSinceResize&&(as.hasAnimatedSinceResize=!1,this.nodes.forEach(vh))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||wI,{onLayoutAnimationStart:w,onLayoutAnimationComplete:m}=c.getProps(),p=!this.targetLayout||!fx(this.targetLayout,v)||g,y=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,y);const E={...hd(x,"layout"),onPlay:w,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E)}else f||vh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Gt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(gI),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.HandoffCancelAllAnimations&&px(this)&&window.HandoffCancelAllAnimations(),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(yh);return}this.isUpdating||this.nodes.forEach(fI),this.isUpdating=!1,this.nodes.forEach(pI),this.nodes.forEach(aI),this.nodes.forEach(lI),this.clearAllSnapshots();const a=vn.now();ye.delta=Tn(0,1e3/60,a-ye.timestamp),ye.timestamp=a,ye.isProcessing=!0,al.update.process(ye),al.preRender.process(ye),al.render.process(ye),ye.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,td.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(dI),this.sharedNodes.forEach(yI)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Y.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Y.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!dx(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Mn(this.latestValues)||c)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),EI(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return ae();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(rn(a.x,l.offset.x),rn(a.y,l.offset.y)),a}removeElementScroll(s){const a=ae();qe(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){qe(a,s);const{scroll:f}=this.root;f&&(rn(a.x,-f.offset.x),rn(a.y,-f.offset.y))}rn(a.x,c.offset.x),rn(a.y,c.offset.y)}}return a}applyTransform(s,a=!1){const l=ae();qe(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Er(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Mn(c.latestValues)&&Er(l,c.latestValues)}return Mn(this.latestValues)&&Er(l,this.latestValues),l}removeTransform(s){const a=ae();qe(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Mn(u.latestValues))continue;Ou(u.latestValues)&&u.updateSnapshot();const c=ae(),d=u.measurePageBox();qe(c,d),fh(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Mn(this.latestValues)&&fh(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ye.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=ye.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),bo(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ae(),this.targetWithTransforms=ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Tb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qe(this.target,this.layout.layoutBox),ix(this.target,this.targetDelta)):qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),bo(this.relativeTargetOrigin,this.target,g.target),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}window.MotionDebug&&On.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ou(this.parent.latestValues)||ox(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ye.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;qe(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;Db(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ae());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(uh(this.prevProjectionDelta.x,this.projectionDelta.x),uh(this.prevProjectionDelta.y,this.projectionDelta.y)),No(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==g||!mh(this.projectionDelta.x,this.prevProjectionDelta.x)||!mh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),window.MotionDebug&&On.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=wr(),this.projectionDelta=wr(),this.projectionDeltaWithTransform=wr()}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=wr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=ae(),g=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=g!==v,w=this.getStack(),m=!w||w.members.length<=1,p=!!(x&&!m&&this.options.crossfade===!0&&!this.path.some(xI));this.animationProgress=0;let y;this.mixTargetDelta=E=>{const C=E/1e3;xh(d.x,s.x,C),xh(d.y,s.y,C),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(bo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),vI(this.relativeTarget,this.relativeTargetOrigin,f,C),y&&qb(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=ae()),qe(y,this.relativeTarget)),x&&(this.animationValues=c,Gb(c,u,this.latestValues,C,p,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Gt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Y.update(()=>{as.hasAnimatedSinceResize=!0,this.currentAnimation=oI(0,gh,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&mx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ae();const d=Ke(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=Ke(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}qe(a,l),Er(a,c),No(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new Zb),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&vl("z",s,u,this.animationValues);for(let c=0;c<yl.length;c++)vl(`rotate${yl[c]}`,s,u,this.animationValues),vl(`skew${yl[c]}`,s,u,this.animationValues);s.render();for(const c in u)s.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return iI;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=is(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=is(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Mn(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=Jb(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:g,y:v}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in Vs){if(f[x]===void 0)continue;const{correct:w,applyTo:m}=Vs[x],p=u.transform==="none"?f[x]:w(f[x],d);if(m){const y=m.length;for(let E=0;E<y;E++)u[m[E]]=p}else u[x]=p}return this.options.layoutId&&(u.pointerEvents=d===this?is(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(yh),this.root.sharedNodes.clear()}}}function aI(e){e.updateLayout()}function lI(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:i}=e.options,s=n.source!==e.layout.source;i==="size"?Ze(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=Ke(f);f.min=r[d].min,f.max=f.min+g}):mx(i,n.layoutBox,r)&&Ze(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=Ke(r[d]);f.max=f.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+g)});const a=wr();No(a,r,n.layoutBox);const l=wr();s?No(l,e.applyTransform(o,!0),n.measuredBox):No(l,r,n.layoutBox);const u=!dx(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:g}=d;if(f&&g){const v=ae();bo(v,n.layoutBox,f.layoutBox);const x=ae();bo(x,r,g.layoutBox),fx(v,x)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function uI(e){window.MotionDebug&&On.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function cI(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function dI(e){e.clearSnapshot()}function yh(e){e.clearMeasurements()}function fI(e){e.isLayoutDirty=!1}function pI(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function vh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function hI(e){e.resolveTargetDelta()}function mI(e){e.calcProjection()}function gI(e){e.resetSkewAndRotation()}function yI(e){e.removeLeadSnapshot()}function xh(e,t,n){e.translate=re(t.translate,0,n),e.scale=re(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function wh(e,t,n,r){e.min=re(t.min,n.min,r),e.max=re(t.max,n.max,r)}function vI(e,t,n,r){wh(e.x,t.x,n.x,r),wh(e.y,t.y,n.y,r)}function xI(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const wI={duration:.45,ease:[.4,0,.1,1]},Eh=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Sh=Eh("applewebkit/")&&!Eh("chrome/")?Math.round:Re;function Ch(e){e.min=Sh(e.min),e.max=Sh(e.max)}function EI(e){Ch(e.x),Ch(e.y)}function mx(e,t,n){return e==="position"||e==="preserve-aspect"&&!Cb(hh(t),hh(n),.2)}const SI=hx({attachResizeListener:(e,t)=>Mt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),xl={current:void 0},gx=hx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!xl.current){const e=new SI({});e.mount(window),e.setOptions({layoutScroll:!0}),xl.current=e}return xl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),CI={pan:{Feature:jb},drag:{Feature:Vb,ProjectionNode:gx,MeasureLayout:lx}},Fu={current:null},yx={current:!1};function TI(){if(yx.current=!0,!!Jc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Fu.current=e.matches;e.addListener(t),t()}else Fu.current=!1}function RI(e,t,n){for(const r in t){const o=t[r],i=n[r];if(Te(o))e.addValue(r,o);else if(Te(i))e.addValue(r,ti(o,{owner:e}));else if(i!==o)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(o):s.hasAnimated||s.set(o)}else{const s=e.getStaticValue(r);e.addValue(r,ti(s!==void 0?s:o,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Th=new WeakMap,AI=[...T0,Se,Rn],PI=e=>AI.find(C0(e)),Rh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],NI=rd.length;class bI{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:i,visualState:s},a={}){this.applyWillChange=!1,this.resolveKeyframes=(f,g,v,x)=>new this.KeyframeResolver(f,g,v,x,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=md,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.isRenderScheduled=!1,this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.isRenderScheduled=!1,this.scheduleRender=()=>{this.isRenderScheduled||(this.isRenderScheduled=!0,Y.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.blockInitialAnimation=!!i,this.isControllingVariants=va(n),this.isVariantNode=Zv(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const g=d[f];l[f]!==void 0&&Te(g)&&g.set(l[f],!1)}}mount(t){this.current=t,Th.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),yx.current||TI(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Fu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Th.delete(this.current),this.projection&&this.projection.unmount(),Gt(this.notifyUpdate),Gt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){const r=bn.has(t),o=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&Y.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),i(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in jr){const n=jr[t];if(!n)continue;const{isEnabled:r,Feature:o}=n;if(!this.features[t]&&o&&r(this.props)&&(this.features[t]=new o(this)),this.features[t]){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ae()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Rh.length;r++){const o=Rh[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i="on"+o,s=t[i];s&&(this.propEventSubscriptions[o]=this.on(o,s))}this.prevMotionValues=RI(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<NI;r++){const o=rd[r],i=this.props[o];(qo(i)||i===!1)&&(n[o]=i)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ti(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let o=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return o!=null&&(typeof o=="string"&&(E0(o)||w0(o))?o=parseFloat(o):!PI(o)&&Rn.test(n)&&(o=_0(t,n)),this.setBaseTarget(t,Te(o)?o.get():o)),Te(o)?o.get():o}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const s=pd(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(o=s[t])}if(r&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Te(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Td),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class vx extends bI{constructor(){super(...arguments),this.KeyframeResolver=D0}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function II(e){return window.getComputedStyle(e)}class kI extends vx{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=s0}readValueFromInstance(t,n){if(bn.has(n)){const r=yd(n);return r&&r.default||0}else{const r=II(t),o=(t0(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return sx(t,n)}build(t,n,r){ld(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return fd(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Te(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class _I extends vx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ae}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(bn.has(n)){const r=yd(n);return r&&r.default||0}return n=a0.has(n)?n:ya(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return u0(t,n,r)}build(t,n,r){cd(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,o){l0(t,n,r,o)}mount(t){this.isSVGTag=dd(t.tagName),super.mount(t)}}const DI=(e,t)=>id(e)?new _I(t):new kI(t,{allowProjection:e!==h.Fragment}),MI={layout:{ProjectionNode:gx,MeasureLayout:lx}},OI={...mb,...RP,...CI,...MI},Ah=DA((e,t)=>fP(e,t,OI,DI));function xx(){const e=h.useRef(!1);return ed(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function LI(){const e=xx(),[t,n]=h.useState(0),r=h.useCallback(()=>{e.current&&n(t+1)},[t]);return[h.useCallback(()=>Y.postRender(r),[r]),t]}class FI extends h.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function VI({children:e,isPresent:t}){const n=h.useId(),r=h.useRef(null),o=h.useRef({width:0,height:0,top:0,left:0}),{nonce:i}=h.useContext(Zc);return h.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:u}=o.current;if(t||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return i&&(c.nonce=i),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),S.jsx(FI,{isPresent:t,childRef:r,sizeRef:o,children:h.cloneElement(e,{ref:r})})}const wl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:i,mode:s})=>{const a=c0(jI),l=h.useId(),u=h.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:c=>{a.set(c,!0);for(const d of a.values())if(!d)return;r&&r()},register:c=>(a.set(c,!1),()=>a.delete(c))}),i?[Math.random()]:[n]);return h.useMemo(()=>{a.forEach((c,d)=>a.set(d,!1))},[n]),h.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=S.jsx(VI,{isPresent:n,children:e})),S.jsx(ga.Provider,{value:u,children:e})};function jI(){return new Map}function BI(e){return h.useEffect(()=>()=>e(),[])}const Ln=e=>e.key||"";function UI(e,t){e.forEach(n=>{const r=Ln(n);t.set(r,n)})}function zI(e){const t=[];return h.Children.forEach(e,n=>{h.isValidElement(n)&&t.push(n)}),t}const HI=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:i=!0,mode:s="sync"})=>{const a=h.useContext(od).forceRender||LI()[0],l=xx(),u=zI(e);let c=u;const d=h.useRef(new Map).current,f=h.useRef(c),g=h.useRef(new Map).current,v=h.useRef(!0);if(ed(()=>{v.current=!1,UI(u,g),f.current=c}),BI(()=>{v.current=!0,g.clear(),d.clear()}),v.current)return S.jsx(S.Fragment,{children:c.map(p=>S.jsx(wl,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:i,mode:s,children:p},Ln(p)))});c=[...c];const x=f.current.map(Ln),w=u.map(Ln),m=x.length;for(let p=0;p<m;p++){const y=x[p];w.indexOf(y)===-1&&!d.has(y)&&d.set(y,void 0)}return s==="wait"&&d.size&&(c=[]),d.forEach((p,y)=>{if(w.indexOf(y)!==-1)return;const E=g.get(y);if(!E)return;const C=x.indexOf(y);let R=p;if(!R){const A=()=>{d.delete(y);const T=Array.from(g.keys()).filter(k=>!w.includes(k));if(T.forEach(k=>g.delete(k)),f.current=u.filter(k=>{const b=Ln(k);return b===y||T.includes(b)}),!d.size){if(l.current===!1)return;a(),r&&r()}};R=S.jsx(wl,{isPresent:!1,onExitComplete:A,custom:t,presenceAffectsLayout:i,mode:s,children:E},Ln(E)),d.set(y,R)}c.splice(C,0,R)}),c=c.map(p=>{const y=p.key;return d.has(y)?p:S.jsx(wl,{isPresent:!0,presenceAffectsLayout:i,mode:s,children:p},Ln(p))}),S.jsx(S.Fragment,{children:d.size?c:c.map(p=>h.cloneElement(p))})};function WI(e){return console.log(e.messageData.position),S.jsxs("div",{className:e.messageData.position=="left"?"w-full flex justify-end":"w-full flex justify-start gap-3",children:[e.messageData.position!="left"&&S.jsx(Ah.div,{initial:{opacity:0,scale:.1},animate:{opacity:1,scale:1},transition:{type:"spring",duration:.01,damping:20,stiffness:200,mass:1,ease:"easeInOut"},children:S.jsx(Gv,{children:S.jsx($v,{src:gA})})}),S.jsx(Ah.div,{initial:{opacity:0,scale:.1},animate:{opacity:1,scale:1},transition:{type:"spring",duration:.01,damping:20,stiffness:200,mass:1,ease:"easeInOut"},className:e.messageData.position=="left"?"relative max-w-[70%] text-left break-words p-2 bg-primary rounded-lg":"relative max-w-[70%] text-left break-words p-2 bg-secondary rounded-lg",children:e.messageData.message.toString()})]})}var GI="Label",wx=h.forwardRef((e,t)=>S.jsx(te.label,{...e,ref:t,onMouseDown:n=>{var o;n.target.closest("button, input, select, textarea")||((o=e.onMouseDown)==null||o.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));wx.displayName=GI;var Ex=wx;const $I=Gg("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Sx=h.forwardRef(({className:e,...t},n)=>S.jsx(Ex,{ref:n,className:Pe($I(),e),...t}));Sx.displayName=Ex.displayName;const Cx=h.forwardRef(({className:e,...t},n)=>S.jsx("textarea",{className:Pe("flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm  placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",e),ref:n,...t}));Cx.displayName="Textarea";const Ph=["Привет, как жизнь?","Привет! Если хочешь что-то обсудить или мне нужно помочь с чем-то, дай знать!","","Here is a cropped version of the character suitable for use as an avatar:","",[`Oops! My apologies for that. Here's your avatar, perfect for your GitHub profile:

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

Каждая из этих аббревиатур подчёркивает семейное единство, приключения и истории, которые можно создавать и исследовать вместе, делая приложение идеальным средством для укрепления семейных связей и создания незабываемых воспоминаний.`],'Привет! Я вижу тебя здесь как "User". Если бы ты хотел(а), чтобы я обращалась к тебе по имени, просто скажи мне, как тебя зовут!',"Всё отлично, спасибо, что интересуешься! Как я могу помочь тебе сегодня?","Вот забавный рисунок фронтенд-разработчика, который тайно работает с искусственной нейронной сетью:","","Главный герой изображен в шутливой манере, что придает этой сцене юмористическую нотку.","Привет! Конечно, буду рада общаться с тобой и помочь чем смогу. Что тебя интересует?","Ой, мне жаль слышать, что ты сталкиваешься с такой ситуацией. Обиды от других людей могут быть очень болезненными. Важно понимать, что ты не одинок в этом, и есть способы справиться с этим чувством. Поговорить о своих переживаниях может быть полезно. Может, хочешь рассказать поподробнее, что произошло? Можем подумать вместе, как сделать так, чтобы тебе стало легче.","Вот миленькая альтушка:","","Надеюсь, она тебе понравится!","Похоже, ты пытаешься выражать что-то очень специфическое. К сожалению без дополнительного контекста трудно точно понять, чем могу помочь. Можешь рассказать подробнее о том, что ты имеешь в виду или как я могу помочь?","Извини, но я не могу создать содержание с такой тематикой. Если у тебя есть другой запрос или нужна помощь по другим темам, пожалуйста, дай знать!","Поняла твою просьбу, но, к сожалению, я не могу создать изображение на эту тему. Если у тебя есть другие идеи или просьбы для творчества, давай попробуем что-то другое, что будет подходящим и позитивным. Например, я могу нарисовать что-то волшебное, сказочное или просто весёлое. Как насчет этого?","Извини, но мне нельзя создавать изображения или содержание, которое может восприниматься как негативное или иметь отрицательные коннотации. Если у тебя есть другой запрос или идея для рисунка, которая будет более позитивной, я с удовольствием помогу. Может быть, есть что-то еще, что ты хотел бы нарисовать?","Вот рисунок с троллем, который вместе с тремя собаками: хаски, черным помчи и рыжим чихуахуа, ест конфеты на кровати, а ковер смеется над ним:","","Надеюсь, это то, что ты искал!","There are too many users now. Please try again a bit later.","",["Hi there! You've used up your free chat credits. To continue enjoying our service, please consider upgrading to our premium plan ",{type:"text_link",text:"Upgrade to Coze Premium to chat",href:"https://www.coze.com/premium?connectID=11000007&botID=7349653747443761157"}]];function KI(e){const[t,n]=h.useState(""),r=()=>{if(t.trim()!==""){var o=Math.floor(Math.random()*Ph.length);e.setMessagesData(i=>[...i,{position:"left",message:t}]),setTimeout(()=>{e.setMessagesData(i=>[...i,{position:"right",message:Ph[o]}])},300)}};return S.jsxs("div",{className:"relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring",children:[S.jsx(Sx,{htmlFor:"message",className:"sr-only",children:"Сообщение"}),S.jsx(Cx,{id:"message",placeholder:"Напишите сдесь свое сообщение",className:"min-h-12 resize-none shadow-none !bg-transparent !outline-none !border-transparent",onChange:o=>n(o.target.value)}),S.jsx("div",{className:"flex items-center p-3 pt-0",children:S.jsxs(Dc,{type:"submit",size:"sm",className:"ml-auto gap-1.5",onClick:()=>{r()},children:["Отправить сообщение",S.jsx(AS,{className:"size-3.5"})]})})]})}function YI(e,[t,n]){return Math.min(n,Math.max(t,e))}function QI(e,t){return h.useReducer((n,r)=>t[n][r]??n,e)}var Rd="ScrollArea",[Tx,mk]=Jn(Rd),[XI,st]=Tx(Rd),Rx=h.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:r="hover",dir:o,scrollHideDelay:i=600,...s}=e,[a,l]=h.useState(null),[u,c]=h.useState(null),[d,f]=h.useState(null),[g,v]=h.useState(null),[x,w]=h.useState(null),[m,p]=h.useState(0),[y,E]=h.useState(0),[C,R]=h.useState(!1),[A,T]=h.useState(!1),k=ce(t,O=>l(O)),b=Mc(o);return S.jsx(XI,{scope:n,type:r,dir:b,scrollHideDelay:i,scrollArea:a,viewport:u,onViewportChange:c,content:d,onContentChange:f,scrollbarX:g,onScrollbarXChange:v,scrollbarXEnabled:C,onScrollbarXEnabledChange:R,scrollbarY:x,onScrollbarYChange:w,scrollbarYEnabled:A,onScrollbarYEnabledChange:T,onCornerWidthChange:p,onCornerHeightChange:E,children:S.jsx(te.div,{dir:b,...s,ref:k,style:{position:"relative","--radix-scroll-area-corner-width":m+"px","--radix-scroll-area-corner-height":y+"px",...e.style}})})});Rx.displayName=Rd;var Ax="ScrollAreaViewport",Px=h.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:r,nonce:o,...i}=e,s=st(Ax,n),a=h.useRef(null),l=ce(t,a,s.onViewportChange);return S.jsxs(S.Fragment,{children:[S.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),S.jsx(te.div,{"data-radix-scroll-area-viewport":"",...i,ref:l,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style},children:S.jsx("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"},children:r})})]})});Px.displayName=Ax;var Pt="ScrollAreaScrollbar",Ad=h.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=st(Pt,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:s}=o,a=e.orientation==="horizontal";return h.useEffect(()=>(a?i(!0):s(!0),()=>{a?i(!1):s(!1)}),[a,i,s]),o.type==="hover"?S.jsx(qI,{...r,ref:t,forceMount:n}):o.type==="scroll"?S.jsx(ZI,{...r,ref:t,forceMount:n}):o.type==="auto"?S.jsx(Nx,{...r,ref:t,forceMount:n}):o.type==="always"?S.jsx(Pd,{...r,ref:t}):null});Ad.displayName=Pt;var qI=h.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=st(Pt,e.__scopeScrollArea),[i,s]=h.useState(!1);return h.useEffect(()=>{const a=o.scrollArea;let l=0;if(a){const u=()=>{window.clearTimeout(l),s(!0)},c=()=>{l=window.setTimeout(()=>s(!1),o.scrollHideDelay)};return a.addEventListener("pointerenter",u),a.addEventListener("pointerleave",c),()=>{window.clearTimeout(l),a.removeEventListener("pointerenter",u),a.removeEventListener("pointerleave",c)}}},[o.scrollArea,o.scrollHideDelay]),S.jsx(Yt,{present:n||i,children:S.jsx(Nx,{"data-state":i?"visible":"hidden",...r,ref:t})})}),ZI=h.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=st(Pt,e.__scopeScrollArea),i=e.orientation==="horizontal",s=Ra(()=>l("SCROLL_END"),100),[a,l]=QI("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return h.useEffect(()=>{if(a==="idle"){const u=window.setTimeout(()=>l("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(u)}},[a,o.scrollHideDelay,l]),h.useEffect(()=>{const u=o.viewport,c=i?"scrollLeft":"scrollTop";if(u){let d=u[c];const f=()=>{const g=u[c];d!==g&&(l("SCROLL"),s()),d=g};return u.addEventListener("scroll",f),()=>u.removeEventListener("scroll",f)}},[o.viewport,i,l,s]),S.jsx(Yt,{present:n||a!=="hidden",children:S.jsx(Pd,{"data-state":a==="hidden"?"hidden":"visible",...r,ref:t,onPointerEnter:z(e.onPointerEnter,()=>l("POINTER_ENTER")),onPointerLeave:z(e.onPointerLeave,()=>l("POINTER_LEAVE"))})})}),Nx=h.forwardRef((e,t)=>{const n=st(Pt,e.__scopeScrollArea),{forceMount:r,...o}=e,[i,s]=h.useState(!1),a=e.orientation==="horizontal",l=Ra(()=>{if(n.viewport){const u=n.viewport.offsetWidth<n.viewport.scrollWidth,c=n.viewport.offsetHeight<n.viewport.scrollHeight;s(a?u:c)}},10);return Ur(n.viewport,l),Ur(n.content,l),S.jsx(Yt,{present:r||i,children:S.jsx(Pd,{"data-state":i?"visible":"hidden",...o,ref:t})})}),Pd=h.forwardRef((e,t)=>{const{orientation:n="vertical",...r}=e,o=st(Pt,e.__scopeScrollArea),i=h.useRef(null),s=h.useRef(0),[a,l]=h.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=Dx(a.viewport,a.content),c={...r,sizes:a,onSizesChange:l,hasThumb:u>0&&u<1,onThumbChange:f=>i.current=f,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:f=>s.current=f};function d(f,g){return ok(f,s.current,a,g)}return n==="horizontal"?S.jsx(JI,{...c,ref:t,onThumbPositionChange:()=>{if(o.viewport&&i.current){const f=o.viewport.scrollLeft,g=Nh(f,a,o.dir);i.current.style.transform=`translate3d(${g}px, 0, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollLeft=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollLeft=d(f,o.dir))}}):n==="vertical"?S.jsx(ek,{...c,ref:t,onThumbPositionChange:()=>{if(o.viewport&&i.current){const f=o.viewport.scrollTop,g=Nh(f,a);i.current.style.transform=`translate3d(0, ${g}px, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollTop=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollTop=d(f))}}):null}),JI=h.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...o}=e,i=st(Pt,e.__scopeScrollArea),[s,a]=h.useState(),l=h.useRef(null),u=ce(t,l,i.onScrollbarXChange);return h.useEffect(()=>{l.current&&a(getComputedStyle(l.current))},[l]),S.jsx(Ix,{"data-orientation":"horizontal",...o,ref:u,sizes:n,style:{bottom:0,left:i.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:i.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Ta(n)+"px",...e.style},onThumbPointerDown:c=>e.onThumbPointerDown(c.x),onDragScroll:c=>e.onDragScroll(c.x),onWheelScroll:(c,d)=>{if(i.viewport){const f=i.viewport.scrollLeft+c.deltaX;e.onWheelScroll(f),Ox(f,d)&&c.preventDefault()}},onResize:()=>{l.current&&i.viewport&&s&&r({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:l.current.clientWidth,paddingStart:Gs(s.paddingLeft),paddingEnd:Gs(s.paddingRight)}})}})}),ek=h.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...o}=e,i=st(Pt,e.__scopeScrollArea),[s,a]=h.useState(),l=h.useRef(null),u=ce(t,l,i.onScrollbarYChange);return h.useEffect(()=>{l.current&&a(getComputedStyle(l.current))},[l]),S.jsx(Ix,{"data-orientation":"vertical",...o,ref:u,sizes:n,style:{top:0,right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Ta(n)+"px",...e.style},onThumbPointerDown:c=>e.onThumbPointerDown(c.y),onDragScroll:c=>e.onDragScroll(c.y),onWheelScroll:(c,d)=>{if(i.viewport){const f=i.viewport.scrollTop+c.deltaY;e.onWheelScroll(f),Ox(f,d)&&c.preventDefault()}},onResize:()=>{l.current&&i.viewport&&s&&r({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:l.current.clientHeight,paddingStart:Gs(s.paddingTop),paddingEnd:Gs(s.paddingBottom)}})}})}),[tk,bx]=Tx(Pt),Ix=h.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:r,hasThumb:o,onThumbChange:i,onThumbPointerUp:s,onThumbPointerDown:a,onThumbPositionChange:l,onDragScroll:u,onWheelScroll:c,onResize:d,...f}=e,g=st(Pt,n),[v,x]=h.useState(null),w=ce(t,k=>x(k)),m=h.useRef(null),p=h.useRef(""),y=g.viewport,E=r.content-r.viewport,C=fe(c),R=fe(l),A=Ra(d,10);function T(k){if(m.current){const b=k.clientX-m.current.left,O=k.clientY-m.current.top;u({x:b,y:O})}}return h.useEffect(()=>{const k=b=>{const O=b.target;(v==null?void 0:v.contains(O))&&C(b,E)};return document.addEventListener("wheel",k,{passive:!1}),()=>document.removeEventListener("wheel",k,{passive:!1})},[y,v,E,C]),h.useEffect(R,[r,R]),Ur(v,A),Ur(g.content,A),S.jsx(tk,{scope:n,scrollbar:v,hasThumb:o,onThumbChange:fe(i),onThumbPointerUp:fe(s),onThumbPositionChange:R,onThumbPointerDown:fe(a),children:S.jsx(te.div,{...f,ref:w,style:{position:"absolute",...f.style},onPointerDown:z(e.onPointerDown,k=>{k.button===0&&(k.target.setPointerCapture(k.pointerId),m.current=v.getBoundingClientRect(),p.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",g.viewport&&(g.viewport.style.scrollBehavior="auto"),T(k))}),onPointerMove:z(e.onPointerMove,T),onPointerUp:z(e.onPointerUp,k=>{const b=k.target;b.hasPointerCapture(k.pointerId)&&b.releasePointerCapture(k.pointerId),document.body.style.webkitUserSelect=p.current,g.viewport&&(g.viewport.style.scrollBehavior=""),m.current=null})})})}),Ws="ScrollAreaThumb",kx=h.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=bx(Ws,e.__scopeScrollArea);return S.jsx(Yt,{present:n||o.hasThumb,children:S.jsx(nk,{ref:t,...r})})}),nk=h.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:r,...o}=e,i=st(Ws,n),s=bx(Ws,n),{onThumbPositionChange:a}=s,l=ce(t,d=>s.onThumbChange(d)),u=h.useRef(),c=Ra(()=>{u.current&&(u.current(),u.current=void 0)},100);return h.useEffect(()=>{const d=i.viewport;if(d){const f=()=>{if(c(),!u.current){const g=ik(d,a);u.current=g,a()}};return a(),d.addEventListener("scroll",f),()=>d.removeEventListener("scroll",f)}},[i.viewport,c,a]),S.jsx(te.div,{"data-state":s.hasThumb?"visible":"hidden",...o,ref:l,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:z(e.onPointerDownCapture,d=>{const g=d.target.getBoundingClientRect(),v=d.clientX-g.left,x=d.clientY-g.top;s.onThumbPointerDown({x:v,y:x})}),onPointerUp:z(e.onPointerUp,s.onThumbPointerUp)})});kx.displayName=Ws;var Nd="ScrollAreaCorner",_x=h.forwardRef((e,t)=>{const n=st(Nd,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&r?S.jsx(rk,{...e,ref:t}):null});_x.displayName=Nd;var rk=h.forwardRef((e,t)=>{const{__scopeScrollArea:n,...r}=e,o=st(Nd,n),[i,s]=h.useState(0),[a,l]=h.useState(0),u=!!(i&&a);return Ur(o.scrollbarX,()=>{var d;const c=((d=o.scrollbarX)==null?void 0:d.offsetHeight)||0;o.onCornerHeightChange(c),l(c)}),Ur(o.scrollbarY,()=>{var d;const c=((d=o.scrollbarY)==null?void 0:d.offsetWidth)||0;o.onCornerWidthChange(c),s(c)}),u?S.jsx(te.div,{...r,ref:t,style:{width:i,height:a,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function Gs(e){return e?parseInt(e,10):0}function Dx(e,t){const n=e/t;return isNaN(n)?0:n}function Ta(e){const t=Dx(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}function ok(e,t,n,r="ltr"){const o=Ta(n),i=o/2,s=t||i,a=o-s,l=n.scrollbar.paddingStart+s,u=n.scrollbar.size-n.scrollbar.paddingEnd-a,c=n.content-n.viewport,d=r==="ltr"?[0,c]:[c*-1,0];return Mx([l,u],d)(e)}function Nh(e,t,n="ltr"){const r=Ta(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,i=t.scrollbar.size-o,s=t.content-t.viewport,a=i-r,l=n==="ltr"?[0,s]:[s*-1,0],u=YI(e,l);return Mx([0,s],[0,a])(u)}function Mx(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function Ox(e,t){return e>0&&e<t}var ik=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;return function o(){const i={left:e.scrollLeft,top:e.scrollTop},s=n.left!==i.left,a=n.top!==i.top;(s||a)&&t(),n=i,r=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(r)};function Ra(e,t){const n=fe(e),r=h.useRef(0);return h.useEffect(()=>()=>window.clearTimeout(r.current),[]),h.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)},[n,t])}function Ur(e,t){const n=fe(t);Tt(()=>{let r=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,n])}var Lx=Rx,sk=Px,ak=_x;const Fx=h.forwardRef(({className:e,children:t,...n},r)=>S.jsxs(Lx,{ref:r,className:Pe("relative overflow-hidden",e),...n,children:[S.jsx(sk,{className:"h-full w-full rounded-[inherit]",children:t}),S.jsx(Vx,{}),S.jsx(ak,{})]}));Fx.displayName=Lx.displayName;const Vx=h.forwardRef(({className:e,orientation:t="vertical",...n},r)=>S.jsx(Ad,{ref:r,orientation:t,className:Pe("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...n,children:S.jsx(kx,{className:"relative flex-1 rounded-full bg-gray-200 dark:bg-gray-800"})}));Vx.displayName=Ad.displayName;function lk(){const[e,t]=h.useState([]);var n=h.useRef(null);return h.useEffect(()=>{var r;(r=n.current)==null||r.scrollIntoView(!1)},[e]),S.jsxs("div",{className:"relative flex flex-col justify-between p-8 h-full w-full border rounded-md border-input bg-background mob:p-2 mob:border-transparent",children:[S.jsx(Fx,{className:"relative w-full h-full p-3",children:e.map((r,o)=>S.jsx(HI,{initial:!0,children:S.jsx("div",{ref:n,className:"mt-3",children:S.jsx(WI,{messageData:r})})},o))}),S.jsx("div",{className:"relative top-auto w-full bottom-0 p]",children:S.jsx(KI,{setMessagesData:t})})]})}function uk(){return S.jsx(S.Fragment,{children:S.jsxs(vS,{defaultTheme:"dark",storageKey:"vite-ui-theme",children:[S.jsx(dA,{}),S.jsx("div",{className:"flex w-full h-full justify-center p-8 mob:p-2",children:S.jsx(lk,{})})]})})}El.createRoot(document.getElementById("root")).render(S.jsx(bt.StrictMode,{children:S.jsx(uk,{})}));
