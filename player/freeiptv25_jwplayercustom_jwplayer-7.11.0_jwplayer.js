window.jwplayer=function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]=
{exports:{},id:n,loaded:!1};return
e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var
n=window.webpackJsonpjwplayer;window.webpackJsonpjwplayer=function(i,o){for(var
a,s,l=0,u=[];l<i.length;l++)s=i[l],r[s]&&u.push.apply(u,r[s]),r[s]=0;for(a in
o)e[a]=o[a];for(n&&n(i,o);u.length;)u.shift().call(null,t)};var i={},r={0:0};return
t.e=function(e,n){if(0===r[e])return n.call(null,t);if(void
0!==r[e])r[e].push(n);else{r[e]=[n];var i=document.getElementsByTagName("head")
[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf8",o.async=!0,o.src=t.p+""+
({1:"jwplayer.controls",2:"provider.hlsjs",3:"provider.shaka",4:"provider.cast",5:"provi
der.html5",6:"provider.flash",7:"polyfills.intersectionobserver",8:"provider.airplay",9:"provider.youtube",10:"polyfills.vttrenderer",11:"polyf
ills.promise",12:"polyfills.base64",13:"vttparser"}
[e]||e)+".js",i.appendChild(o)}},t.m=e,t.c=i,t.p="",t(0)}([function(e,t,n)
{e.exports=n(152)},function(e,t,n){var i,r;i=[],r=function(){var e=
{},t=Array.prototype,n=Object.prototype,i=Function.prototype,r=t.slice,o=t.concat,a=n.to
String,s=n.hasOwnProperty,l=t.map,u=t.reduce,c=t.forEach,d=t.filter,f=t.every,p=t.some,h
=t.indexOf,g=Array.isArray,v=Object.keys,m=i.bind,y=function k(e){return e instanceof k?
e:this instanceof k?void 0:new k(e)},w=y.each=y.forEach=function(t,n,i){var
r,o;if(null==t)return t;if(c&&t.forEach===c)t.forEach(n,i);else if(t.length===+t.length)
{for(r=0,o=t.length;r<o;r++)if(n.call(i,t[r],r,t)===e)return}else{var
a=y.keys(t);for(r=0,o=a.length;r<o;r++)if(n.call(i,t[a[r]],a[r],t)===e)return}return
t};y.map=y.collect=function(e,t,n){var i=[];return null==e?i:l&&e.map===l?e.map(t,n):
(w(e,function(e,r,o){i.push(t.call(n,e,r,o))}),i)};var E="Reduce of empty array with no
initial value";y.reduce=y.foldl=y.inject=function(e,t,n,i){var
r=arguments.length>2;if(null==e&&(e=[]),u&&e.reduce===u)return i&&(t=y.bind(t,i)),r?
e.reduce(t,n):e.reduce(t);if(w(e,function(e,o,a){r?n=t.call(i,n,e,o,a):
(n=e,r=!0)}),!r)throw new TypeError(E);return n},y.find=y.detect=function(e,t,n){var
i;return b(e,function(e,r,o){if(t.call(n,e,r,o))return
i=e,!0}),i},y.filter=y.select=function(e,t,n){var i=[];return null==e?i:d&&e.filter===d?
e.filter(t,n):(w(e,function(e,r,o)
{t.call(n,e,r,o)&&i.push(e)}),i)},y.reject=function(e,t,n){return
y.filter(e,function(e,i,r){return!t.call(n,e,i,r)},n)},y.compact=function(e){return
y.filter(e,y.identity)},y.every=y.all=function(t,n,i){n||(n=y.identity);var r=!0;return
null==t?r:f&&t.every===f?t.every(n,i):(w(t,function(t,o,a){if(!
(r=r&&n.call(i,t,o,a)))return e}),!!r)};var b=y.some=y.any=function(t,n,i){n||
(n=y.identity);var r=!1;return null==t?r:p&&t.some===p?t.some(n,i):(w(t,function(t,o,a)
{if(r||(r=n.call(i,t,o,a)))return e}),!!r)};y.size=function(e){return null==e?
0:e.length===+e.length?e.length:y.keys(e).length},y.last=function(e,t,n)
{if(null!=e)return null==t||n?e[e.length-1]:r.call(e,Math.max(e.lengtht,0))},y.after=function(e,t){return function(){if(--e<1)return
t.apply(this,arguments)}},y.before=function(e,t){var n;return function(){return--e>0&&
(n=t.apply(this,arguments)),e<=1&&(t=null),n}};var A=function(e){return null==e?
y.identity:y.isFunction(e)?e:y.property(e)},L=function(e){return function(t,n,i){var r=
{};return n=A(n),w(t,function(o,a){var
s=n.call(i,o,a,t);e(r,s,o)}),r}};y.groupBy=L(function(e,t,n){y.has(e,t)?
e[t].push(n):e[t]=[n]}),y.indexBy=L(function(e,t,n)
{e[t]=n}),y.sortedIndex=function(e,t,n,i){n=A(n);for(var
r=n.call(i,t),o=0,a=e.length;o<a;){var s=o+a>>>1;n.call(i,e[s])<r?o=s+1:a=s}return
o},y.contains=y.include=function(e,t){return null!=e&&(e.length!==+e.length&&
(e=y.values(e)),y.indexOf(e,t)>=0)},y.pluck=function(e,t){return
y.map(e,y.property(t))},y.where=function(e,t){return
y.filter(e,y.matches(t))},y.findWhere=function(e,t){return
y.find(e,y.matches(t))},y.max=function(e,t,n)
{if(!t&&y.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var i=(1/0),r=-(1/0);return w(e,function(e,o,a){var s=t?t.call(n,e,o,a):e;s>r&&
(i=e,r=s)}),i},y.difference=function(e){var n=o.apply(t,r.call(arguments,1));return
y.filter(e,function(e){return!y.contains(n,e)})},y.without=function(e){return
y.difference(e,r.call(arguments,1))},y.indexOf=function(e,t,n){if(null==e)return-1;var
i=0,r=e.length;if(n){if("number"!=typeof n)return i=y.sortedIndex(e,t),e[i]===t?
i:-1;i=n<0?Math.max(0,r+n):n}if(h&&e.indexOf===h)return
e.indexOf(t,n);for(;i<r;i++)if(e[i]===t)return i;return-1};var C=function()
{};y.bind=function(e,t){var n,i;if(m&&e.bind===m)return
m.apply(e,r.call(arguments,1));if(!y.isFunction(e))throw new TypeError;return
n=r.call(arguments,2),i=function(){if(!(this instanceof i))return
e.apply(t,n.concat(r.call(arguments)));C.prototype=e.prototype;var o=new
C;C.prototype=null;var a=e.apply(o,n.concat(r.call(arguments)));return Object(a)===a?
a:o}},y.partial=function(e){var t=r.call(arguments,1);return function(){for(var

n=0,i=t.slice(),r=0,o=i.length;r<o;r++)i[r]===y&&
(i[r]=arguments[n++]);for(;n<arguments.length;)i.push(arguments[n++]);return
e.apply(this,i)}},y.once=y.partial(y.before,2),y.memoize=function(e,t){var n={};return
t||(t=y.identity),function(){var i=t.apply(this,arguments);return y.has(n,i)?
n[i]:n[i]=e.apply(this,arguments)}},y.delay=function(e,t){var
n=r.call(arguments,2);return setTimeout(function(){return
e.apply(null,n)},t)},y.defer=function(e){return y.delay.apply(y,
[e,1].concat(r.call(arguments,1)))},y.throttle=function(e,t,n){var i,r,o,a=null,s=0;n||
(n={});var l=function(){s=n.leading===!1?
0:y.now(),a=null,o=e.apply(i,r),i=r=null};return function(){var
u=y.now();s||n.leading!==!1||(s=u);var c=t-(u-s);return i=this,r=arguments,c<=0?
(clearTimeout(a),a=null,s=u,o=e.apply(i,r),i=r=null):a||n.trailing===!1||
(a=setTimeout(l,c)),o}},y.keys=function(e){if(!y.isObject(e))return[];if(v)return
v(e);var t=[];for(var n in e)y.has(e,n)&&t.push(n);return t},y.invert=function(e)
{for(var t={},n=y.keys(e),i=0,r=n.length;i<r;i++)t[e[n[i]]]=n[i];return
t},y.defaults=function(e){return w(r.call(arguments,1),function(t){if(t)for(var n in
t)void 0===e[n]&&(e[n]=t[n])}),e},y.extend=function(e){return
w(r.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},y.pick=function(e)
{var n={},i=o.apply(t,r.call(arguments,1));return w(i,function(t){t in e&&
(n[t]=e[t])}),n},y.omit=function(e){var n={},i=o.apply(t,r.call(arguments,1));for(var a
in e)y.contains(i,a)||(n[a]=e[a]);return n},y.clone=function(e){return y.isObject(e)?
y.isArray(e)?e.slice():y.extend({},e):e},y.isArray=g||function(e){return"[object
Array]"==a.call(e)},y.isObject=function(e){return
e===Object(e)},w(["Arguments","Function","String","Number","Date","RegExp"],function(e)
{y["is"+e]=function(t){return a.call(t)=="[object "+e+"]"}}),y.isArguments(arguments)||
(y.isArguments=function(e){return!(!e||!y.has(e,"callee"))}),y.isFunction=function(e)
{return"function"==typeof e},y.isFinite=function(e){return
isFinite(e)&&!isNaN(parseFloat(e))},y.isNaN=function(e){return
y.isNumber(e)&&e!=+e},y.isBoolean=function(e){return e===!0||e===!1||"[object
Boolean]"==a.call(e)},y.isNull=function(e){return null===e},y.isUndefined=function(e)
{return void 0===e},y.has=function(e,t){return s.call(e,t)},y.identity=function(e)
{return e},y.constant=function(e){return function(){return e}},y.property=function(e)
{return function(t){return t[e]}},y.propertyOf=function(e){return null==e?function()
{}:function(t){return e[t]}},y.matches=function(e){return function(t)
{if(t===e)return!0;for(var n in
e)if(e[n]!==t[n])return!1;return!0}},y.now=Date.now||function(){return(new
Date).getTime()},y.result=function(e,t){if(null!=e){var n=e[t];return y.isFunction(n)?
n.call(e):n}};var j=0;return y.uniqueId=function(e){var t=++j+"";return e?
e+t:t},y}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var
i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return
typeof e}:function(e){return e&&"function"==typeof
Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=
[n(7),n(1),n(23),n(11),n(20),n(31),n(12),n(56),n(33),n(59),n(110),n(109),n(60)],r=functi
on(e,t,n,i,r,a,s,l,u,c,d,f,p){var h={};return h.log=function(){window.console&&
("object"===o(console.log)?
console.log(Array.prototype.slice.call(arguments,0)):console.log.apply(console,arguments
))},h.between=function(e,t,n){return Math.max(Math.min(e,n),t)},h.foreach=function(e,t)
{var n,i;for(n in e)"function"===h.typeOf(e.hasOwnProperty)?e.hasOwnProperty(n)&&
(i=e[n],t(n,i)):(i=e[n],t(n,i))},h.indexOf=t.indexOf,h.noop=function()
{},h.seconds=e.seconds,h.prefix=e.prefix,h.suffix=e.suffix,t.extend(h,a,s,u,n,l,i,r,c,d,
f,p),h}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var
i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return
typeof e}:function(e){return e&&"function"==typeof
Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=
[n(1)],r=function(e){var t=[],n=t.slice,i={on:function(e,t,n){if(!a(this,"on",e,
[t,n])||!t)return this;this._events||(this._events={});var i=this._events[e]||
(this._events[e]=[]);return i.push({callback:t,context:n}),this},once:function u(t,n,i)
{if(!a(this,"once",t,[n,i])||!n)return this;var r=this,u=e.once(function()
{r.off(t,u),n.apply(this,arguments)});return
u._callback=n,this.on(t,u,i)},off:function(t,n,i){var
r,o,s,l,u,c,d,f;if(!this._events||!a(this,"off",t,[n,i]))return
this;if(!t&&!n&&!i)return this._events=void 0,this;for(l=t?
[t]:e.keys(this._events),u=0,c=l.length;u<c;u++)if(t=l[u],s=this._events[t])
{if(this._events[t]=r=[],n||i)for(d=0,f=s.length;d<f;d++)o=s[d],
(n&&n!==o.callback&&n!==o.callback._callback||i&&i!==o.context)&&r.push(o);r.length||del
ete this._events[t]}return this},trigger:function(e){if(!this._events)return this;var
t=n.call(arguments,1);if(!a(this,"trigger",e,t))return this;var
i=this._events[e],r=this._events.all;return
i&&s(i,t,this),r&&s(r,arguments,this),this},triggerSafe:function(e)

{if(!this._events)return this;var t=n.call(arguments,1);if(!a(this,"trigger",e,t))return
this;var i=this._events[e],r=this._events.all;return
i&&l(i,t,this,e),r&&l(r,arguments,this,e),this}},r=/\s+/,a=function(e,t,n,i)
{if(!n)return!0;if("object"===("undefined"==typeof n?"undefined":o(n))){for(var a in
n)e[t].apply(e,[a,n[a]].concat(i));return!1}if(r.test(n)){for(var
s=n.split(r),l=0,u=s.length;l<u;l++)e[t].apply(e,
[s[l]].concat(i));return!1}return!0},s=function(e,t,n){var
i,r=-1,o=e.length,a=t[0],s=t[1],l=t[2];switch(t.length){case 0:for(;++r<o;)
(i=e[r]).callback.call(i.context||n);return;case 1:for(;++r<o;)
(i=e[r]).callback.call(i.context||n,a);return;case 2:for(;++r<o;)
(i=e[r]).callback.call(i.context||n,a,s);return;case 3:for(;++r<o;)
(i=e[r]).callback.call(i.context||n,a,s,l);return;default:for(;++r<o;)
(i=e[r]).callback.apply(i.context||n,t);return}},l=function(e,t,n,i){for(var
r,o=-1,a=e.length;++o<a;)try{r=e[o],r.callback.apply(r.context||n,t)}catch(s)
{console.log('Error in "'+i+'" event handler:',s)}};return i}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=
{DRAG:"drag",DRAG_START:"dragStart",DRAG_END:"dragEnd",CLICK:"click",DOUBLE_CLICK:"doubl
eClick",TAP:"tap",DOUBLE_TAP:"doubleTap",OVER:"over",MOVE:"move",OUT:"out"},t=
{COMPLETE:"complete",ERROR:"error",JWPLAYER_AD_CLICK:"adClick",JWPLAYER_AD_COMPANIONS:"a
dCompanions",JWPLAYER_AD_COMPLETE:"adComplete",JWPLAYER_AD_ERROR:"adError",JWPLAYER_AD_I
MPRESSION:"adImpression",JWPLAYER_AD_META:"adMeta",JWPLAYER_AD_PAUSE:"adPause",JWPLAYER_
AD_PLAY:"adPlay",JWPLAYER_AD_SKIPPED:"adSkipped",JWPLAYER_AD_TIME:"adTime",JWPLAYER_CAST
_AD_CHANGED:"castAdChanged",JWPLAYER_MEDIA_COMPLETE:"complete",JWPLAYER_READY:"ready",JW
PLAYER_MEDIA_SEEK:"seek",JWPLAYER_MEDIA_BEFOREPLAY:"beforePlay",JWPLAYER_MEDIA_BEFORECOM
PLETE:"beforeComplete",JWPLAYER_MEDIA_BUFFER_FULL:"bufferFull",JWPLAYER_DISPLAY_CLICK:"d
isplayClick",JWPLAYER_PLAYLIST_COMPLETE:"playlistComplete",JWPLAYER_CAST_SESSION:"cast",
JWPLAYER_MEDIA_ERROR:"mediaError",JWPLAYER_MEDIA_FIRST_FRAME:"firstFrame",JWPLAYER_MEDIA
_PLAY_ATTEMPT:"playAttempt",JWPLAYER_MEDIA_LOADED:"loaded",JWPLAYER_MEDIA_SEEKED:"seeked
",JWPLAYER_SETUP_ERROR:"setupError",JWPLAYER_ERROR:"error",JWPLAYER_PLAYER_STATE:"state"
,JWPLAYER_CAST_AVAILABLE:"castAvailable",JWPLAYER_MEDIA_BUFFER:"bufferChange",JWPLAYER_M
EDIA_TIME:"time",JWPLAYER_MEDIA_TYPE:"mediaType",JWPLAYER_MEDIA_VOLUME:"volume",JWPLAYER
_MEDIA_MUTE:"mute",JWPLAYER_MEDIA_META:"meta",JWPLAYER_MEDIA_LEVELS:"levels",JWPLAYER_ME
DIA_LEVEL_CHANGED:"levelsChanged",JWPLAYER_CONTROLS:"controls",JWPLAYER_FULLSCREEN:"full
screen",JWPLAYER_RESIZE:"resize",JWPLAYER_PLAYLIST_ITEM:"playlistItem",JWPLAYER_PLAYLIST
_LOADED:"playlist",JWPLAYER_AUDIO_TRACKS:"audioTracks",JWPLAYER_AUDIO_TRACK_CHANGED:"aud
ioTrackChanged",JWPLAYER_LOGO_CLICK:"logoClick",JWPLAYER_CAPTIONS_LIST:"captionsList",JW
PLAYER_CAPTIONS_CHANGED:"captionsChanged",JWPLAYER_PROVIDER_CHANGED:"providerChanged",JW
PLAYER_PROVIDER_FIRST_FRAME:"providerFirstFrame",JWPLAYER_USER_ACTION:"userAction",JWPLA
YER_PROVIDER_CLICK:"providerClick",JWPLAYER_VIEW_TAB_FOCUS:"tabFocus",JWPLAYER_CONTROLBA
R_DRAGGING:"scrubbing",JWPLAYER_INSTREAM_CLICK:"instreamClick",JWPLAYER_BREAKPOINT:"brea
kpoint"};return t.touchEvents=e,t}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[],r=function()
{return{BUFFERING:"buffering",IDLE:"idle",COMPLETE:"complete",PAUSED:"paused",PLAYING:"p
laying",ERROR:"error",LOADING:"loading",STALLED:"stalled"}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(3),n(4),n(1),n(2)],r=function(e,t,n,i)
{function r(e,t){return/touch/.test(e.type)?(e.originalEvent||e).changedTouches[0]
["page"+t]:e["page"+t]}function o(e){var t=e||window.event;return e instanceof
MouseEvent&&("which"in t?3===t.which:"button"in t&&2===t.button)}function a(e,t,n){var
i;return i=t instanceof MouseEvent||!t.touches&&!t.changedTouches?
t:t.touches&&t.touches.length?t.touches[0]:t.changedTouches[0],
{type:e,sourceEvent:t,target:t.target,currentTarget:n,pageX:i.pageX,pageY:i.pageY}}funct
ion s(e){(e instanceof MouseEvent||e instanceof window.TouchEvent)&&
(e.preventManipulation&&e.preventManipulation(),e.preventDefault&&e.preventDefault())}va
r l=t.touchEvents,u="PointerEvent"in window,c="ontouchstart"in window,d=!
(u||c&&i.isMobile()),f=i.isFF()&&i.isOSX(),p=function(e,t){function i(e)
{"touch"!==e.pointerType&&y(l.OVER,e)}function c(e)
{"touch"!==e.pointerType&&y(l.MOVE,e)}function p(t)
{(d||u&&"touch"!==t.pointerType&&!e.contains(document.elementFromPoint(t.x,t.y)))&&y(l.O
UT,t)}function h(e,t,n){e.removeEventListener(t,n),e.addEventListener(t,n)}function g(n)
{w=n.target,L=r(n,"X"),C=r(n,"Y"),o(n)||("pointerdown"===n.type&&n.isPrimary?
(t.preventScrolling&&
(E=n.pointerId,e.setPointerCapture(E)),h(e,"pointermove",v),h(e,"pointercancel",m),"mous
e"===n.pointerType&&"OBJECT"===w.nodeName?
h(document,"mouseup",m):h(e,"pointerup",m)):"mousedown"===n.type?
(h(document,"mousemove",v),f&&"object"===n.target.nodeName.toLowerCase()?
h(e,"click",m):h(document,"mouseup",m)):"touchstart"===n.type&&
(h(w,"touchmove",v),h(w,"touchcancel",m),h(w,"touchend",m)),t.preventScrolling&&s(n))}fu
nction v(e){var n=6;if(A)y(l.DRAG,e);else{var i=r(e,"X"),o=r(e,"Y"),a=i-L,u=oC;a*a+u*u>n*n&&(y(l.DRAG_START,e),A=!0,y(l.DRAG,e))}t.preventScrolling&&s(e)}function

m(n){var
i="pointerup"===n.type||"pointercancel"===n.type;i&&t.preventScrolling&&e.releasePointer
Capture(E),e.removeEventListener("pointermove",v),e.removeEventListener("pointercancel",
m),e.removeEventListener("pointerup",m),document.removeEventListener("mousemove",v),docu
ment.removeEventListener("mouseup",m),w.removeEventListener("touchmove",v),w.removeEvent
Listener("touchcancel",m),w.removeEventListener("touchend",m),A?
y(l.DRAG_END,n):t.directSelect&&n.target!==e||n.type.indexOf("cancel")!==-1||
("mouseup"===n.type||"click"===n.type||i&&"mouse"===n.pointerType?y(l.CLICK,n):
(y(l.TAP,n),"touchend"===n.type&&s(n))),w=null,A=!1}function y(e,i){var
r;if(t.enableDoubleTap&&(e===l.CLICK||e===l.TAP))if(n.now()-j<k){var o=e===l.CLICK?
l.DOUBLE_CLICK:l.DOUBLE_TAP;r=a(o,i,b),P.trigger(o,r),j=0}else
j=n.now();r=a(e,i,b),P.trigger(e,r)}var w,E,b=e,A=!1,L=0,C=0,j=0,k=300;t=t||{},u?
(e.addEventListener("pointerdown",g),t.useHover&&
(e.addEventListener("pointerover",i),e.addEventListener("pointerout",p)),t.useMove&&e.ad
dEventListener("pointermove",c)):(d&&(e.addEventListener("mousedown",g),t.useHover&&
(e.addEventListener("mouseover",i),e.addEventListener("mouseout",p)),t.useMove&&e.addEve
ntListener("mousemove",c)),e.addEventListener("touchstart",g));var P=this;return
this.triggerEvent=y,this.destroy=function()
{this.off(),e.removeEventListener("touchstart",g),e.removeEventListener("mousedown",g),w
&&
(w.removeEventListener("touchmove",v),w.removeEventListener("touchcancel",m),w.removeEve
ntListener("touchend",m),w=null),u&&
(t.preventScrolling&&e.releasePointerCapture(E),e.removeEventListener("pointerover",i),e
.removeEventListener("pointerdown",g),e.removeEventListener("pointermove",v),e.removeEve
ntListener("pointermove",c),e.removeEventListener("pointercancel",m),e.removeEventListen
er("pointerout",p),e.removeEventListener("pointerup",m)),e.removeEventListener("click",m
),e.removeEventListener("mouseover",i),e.removeEventListener("mousemove",c),e.removeEven
tListener("mouseout",p),document.removeEventListener("mousemove",v),document.removeEvent
Listener("mouseup",m)},this};return p.getPointerType=function(e){return u&&e instanceof
window.PointerEvent?"touch"===e.pointerType?"touch":"mouse":c&&e instanceof
window.TouchEvent?"touch":"mouse"},n.extend(p.prototype,e),p}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){function t(e){return/[\
(,]format=m3u8-/i.test(e)?"m3u8":!!/[\(,]format=mpd-/i.test(e)&&"mpd"}var n=function(e)
{return e.replace(/^\s+|\s+$/g,"")},i=function(e,t,n)
{for(e=""+e,n=n||"0";e.length<t;)e=n+e;return e},r=function(e,t){for(var
n=0;n<e.attributes.length;n++)if(e.attributes[n].name&&e.attributes[n].name.toLowerCase(
)===t.toLowerCase())return e.attributes[n].value.toString();return""},o=function(e)
{if(!e||"rtmp"===e.substr(0,4))return"";var n=t(e);return n?n:(e=e.split("?")
[0].split("#")[0],e.lastIndexOf(".")>-1?
e.substr(e.lastIndexOf(".")+1,e.length).toLowerCase():void 0)},a=function(e){var
t=parseInt(e/3600),n=parseInt(e/60)%60,r=e%60;return
i(t,2)+":"+i(n,2)+":"+i(r.toFixed(3),6)},s=function(t,n){if(e.isNumber(t))return
t;t=t.replace(",",".");var
i=t.split(":"),r=i.length,o=0;if("s"===t.slice(-1))o=parseFloat(t);else
if("m"===t.slice(-1))o=60*parseFloat(t);else
if("h"===t.slice(-1))o=3600*parseFloat(t);else if(r>1){var a=r-1;4===r&&(n&&
(o=parseFloat(i[a])/n),a-=1),o+=parseFloat(i[a]),o+=60*parseFloat(i[a-1]),r>=3&&
(o+=3600*parseFloat(i[a-2]))}else o=parseFloat(t);return o},l=function(t,n){return
e.map(t,function(e){return n+e})},u=function(t,n){return e.map(t,function(e){return
e+n})};return{trim:n,pad:i,xmlAttribute:r,extension:o,hms:a,seconds:s,suffix:u,prefix:l}
}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=
[n(2),n(4),n(5),n(1)],r=function(e,t,n,i){var r=e.noop,o=i.constant(!1),a=
{supports:o,play:r,load:r,stop:r,volume:r,mute:r,seek:r,resize:r,remove:r,destroy:r,setV
isibility:r,setFullscreen:o,getFullscreen:r,getContainer:r,setContainer:o,getName:r,getQ
ualityLevels:r,getCurrentQuality:r,setCurrentQuality:r,getAudioTracks:r,getCurrentAudioT
rack:r,setCurrentAudioTrack:r,checkComplete:r,setControls:r,attachMedia:r,detachMedia:r,
setState:function(e){var
i=this.state||n.IDLE;this.state=e,e!==i&&this.trigger(t.JWPLAYER_PLAYER_STATE,
{newstate:e})},sendMediaType:function(e){var
n=e[0].type,i="oga"===n||"aac"===n||"mp3"===n||"mpeg"===n||"vorbis"===n;this.trigger(t.J
WPLAYER_MEDIA_TYPE,{mediaType:i?"audio":"video"})}};return a}.apply(t,i),!(void 0!==r&&
(e.exports=r))},,function(e,t,n){var i,r;i=[n(7),n(1),n(106)],r=function(e,t,n){var i=
{};i.createElement=function(e){var t=document.createElement("div");return
t.innerHTML=e,t.firstChild},i.styleDimension=function(e){return e+
(e.toString().indexOf("%")>0?"":"px")};var r=function(e){return t.isString(e.className)?
e.className.split(" "):[]},o=function(t,n){n=e.trim(n),t.className!==n&&
(t.className=n)};return i.classList=function(e){return e.classList?
e.classList:r(e)},i.hasClass=n.hasClass,i.addClass=function(e,n){var
i=r(e),a=t.isArray(n)?n:n.split(" ");t.each(a,function(e)

{t.contains(i,e)||i.push(e)}),o(e,i.join(" "))},i.removeClass=function(e,n){var
i=r(e),a=t.isArray(n)?n:n.split(" ");o(e,t.difference(i,a).join("
"))},i.replaceClass=function(e,t,n){var i=e.className||"";t.test(i)?i=i.replace(t,n):n&&
(i+=" "+n),o(e,i)},i.toggleClass=function(e,n,r){var o=i.hasClass(e,n);r=t.isBoolean(r)?
r:!o,r!==o&&(r?i.addClass(e,n):i.removeClass(e,n))},i.emptyElement=function(e)
{for(;e.firstChild;)e.removeChild(e.firstChild)},i.addStyleSheet=function(e){var
t=document.createElement("link");t.rel="stylesheet",t.href=e,document.getElementsByTagNa
me("head")[0].appendChild(t)},i.empty=function(e)
{if(e)for(;e.childElementCount>0;)e.removeChild(e.children[0])},i.bounds=function(e){var
t=
{left:0,right:0,width:0,height:0,top:0,bottom:0};if(!e||!document.body.contains(e))retur
n t;var n=e.getBoundingClientRect(),i=window.pageYOffset,r=window.pageXOffset;return
n.width||n.height||n.left||n.top?
(t.left=n.left+r,t.right=n.right+r,t.top=n.top+i,t.bottom=n.bottom+i,t.width=n.rightn.left,t.height=n.bottom-n.top,t):t},i}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={},n=
{TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"
};return t.utf8ArrayToStr=function(e,t){var
n,i,r,o,a,s;for(n="",r=e.length,i=t||0;i<r;)if(o=e[i++],0!==o&&3!==o)switch(o>>4){case
0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n+=String.fromCharCode(o);break;case
12:case 13:a=e[i++],n+=String.fromCharCode((31&o)<<6|63&a);break;case
14:a=e[i++],s=e[i++],n+=String.fromCharCode((15&o)<<12|(63&a)<<6|(63&s)<<0)}return
n},t.utf16BigEndianArrayToStr=function(e,t){var n,i,r;for(n="",r=e.length1,i=t||0;i<r;)254===e[i]&&255===e[i+1]||(n+=String.fromCharCode((e[i]
<<8)+e[i+1])),i+=2;return n},t.syncSafeInt=function(e){var n=t.arrayToInt(e);return
127&n|(32512&n)>>1|(8323072&n)>>2|(2130706432&n)>>3},t.arrayToInt=function(e){for(var
t="0x",n=0;n<e.length;n++)e[n]<16&&(t+="0"),t+=e[n].toString(16);return
parseInt(t)},t.parseID3=function(i){return e.reduce(i,function(i,r){if(!("value"in
r)&&"data"in r&&r.data instanceof ArrayBuffer){var o=r,a=new
Uint8Array(o.data),s=a.length;r={value:{key:"",data:""}};for(var
l=10;l<14&&l<a.length&&0!==a[l];)r.value.key+=String.fromCharCode(a[l]),l++;var
u=19,c=a[u];3!==c&&0!==c||(c=a[++u],s--);var d=0;if(1!==c&&2!==c)for(var
f=u+1;f<s;f++)if(0===a[f]){d=f-u;break}if(d>0){var
p=t.utf8ArrayToStr(a.subarray(u,u+=d),0);if("PRIV"===r.value.key)
{if("com.apple.streaming.transportStreamTimestamp"===p){var
h=1&t.syncSafeInt(a.subarray(u,u+=4)),g=t.syncSafeInt(a.subarray(u,u+=4));h&&
(g+=4294967296),r.value.data=g}else
r.value.data=t.utf8ArrayToStr(a,u+1);r.value.info=p}else
r.value.info=p,r.value.data=t.utf8ArrayToStr(a,u+1)}else{var v=a[u];1===v||2===v?
r.value.data=t.utf16BigEndianArrayToStr(a,u+1):r.value.data=t.utf8ArrayToStr(a,u+1)}}if(
n.hasOwnProperty(r.value.key)&&(i[n[r.value.key]]=r.value.data),r.value.info){var
m=i[r.value.key];e.isObject(m)||(m=
{},i[r.value.key]=m),m[r.value.info]=r.value.data}else
i[r.value.key]=r.value.data;return i},{})},t}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(4),n(3),n(1)],r=function(e,t,n){var i={},r=
{NEW:0,LOADING:1,ERROR:2,COMPLETE:3},o=function(o,a){function s(t)
{c=r.ERROR,u.trigger(e.ERROR,t)}function l(t){c=r.COMPLETE,u.trigger(e.COMPLETE,t)}var
u=n.extend(this,t),c=r.NEW;this.addEventListener=this.on,this.removeEventListener=this.o
ff,this.makeStyleLink=function(e){var t=document.createElement("link");return
t.type="text/css",t.rel="stylesheet",t.href=e,t},this.makeScriptTag=function(e){var
t=document.createElement("script");return t.src=e,t},this.makeTag=a?
this.makeStyleLink:this.makeScriptTag,this.load=function(){if(c===r.NEW){var
t=i[o];if(t&&(c=t.getStatus(),c<2))return t.on(e.ERROR,s),void t.on(e.COMPLETE,l);var
n=document.getElementsByTagName("head")
[0]||document.documentElement,u=this.makeTag(o),d=!1;u.onload=u.onreadystatechange=funct
ion(e){d||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||
(d=!0,l(e),u.onload=u.onreadystatechange=null,n&&u.parentNode&&!a&&n.removeChild(u))},u.
onerror=s,n.insertBefore(u,n.firstChild),c=r.LOADING,i[o]=this}},this.getStatus=function
(){return c}};return o.loaderstatus=r,o}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var
t="free",n="premium",i="enterprise",r="platinum",o="ads",a="unlimited",s="trial",l=
{setup:[t,n,i,o,a,s,r],dash:[n,i,o,a,s,r],drm:[i,o,a,s],hls:[n,o,i,a,s,r],ads:
[o,a,s,r,i],casting:[n,i,o,a,s,r],jwpsrv:[t,n,i,o,s,r]},u=function(t){return function(n)
{return e.contains(l[n],t)}};return u}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{createId:function(e,t)
{var n,i=e.kind||"cc";return
n=e["default"]||e.defaulttrack?"default":e._id||e.file||i+t},createLabel:function(e,t)
{var n=e.label||e.name||e.language;return n||(n="Unknown CC",t+=1,t>1&&(n+=" ["+t+"]")),
{label:n,unknownCount:t}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var

i,r;i=[n(1),n(2),n(17),n(28),n(94),n(29)],r=function(e,t,i,r,o,a){function s(e,t,n,a)
{var s,u,c=e.responseXML?e.responseXML.firstChild:null;if(c)for("xml"===i.localName(c)&&
(c=c.nextSibling);c.nodeType===c.COMMENT_NODE;)c=c.nextSibling;try{if(c&&"tt"===i.localN
ame(c))s=o(e.responseXML),u=this.convertToVTTCues(s),delete t.xhr,n(u);else{var
d=e.responseText;d.indexOf("WEBVTT")>=0?l(d,t,n,a):
(s=r(d),u=this.convertToVTTCues(s),delete t.xhr,n(u))}}catch(f){delete
t.xhr,a(f)}}function l(e,t,i,r){n.e(13,function(require){var o=n(21),a=new o(window),s=
[];a.oncue=function(e){s.push(e)},a.onflush=function(){delete
t.xhr,i(s)};try{a.parse(e)}catch(l){delete t.xhr,r(l)}})}var u={};return
u.loadFile=function(e,n,i){e.xhr=t.ajax(e.file,function(t)
{s.call(u,t,e,n,i)},i)},u.cancelXhr=function(t){e.each(t,function(e){var t=e.xhr;t&&
(t.onload=null,t.onreadystatechange=null,t.onerror=null,"abort"in t&&t.abort()),delete
e.xhr})},u.convertToVTTCues=function(t){var n=e.map(t,function(e){return new
a(e.begin,e.end,e.text)});return n},u}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(7)],r=function(e){return{localName:function
t(e){var t="";return e&&(e.localName?t=e.localName:e.baseName&&
(t=e.baseName)),t},textContent:function n(t){var n="";return t&&(t.textContent?
n=e.trim(t.textContent):t.text&&(n=e.trim(t.text))),n},getChildNode:function(e,t){return
e.childNodes[t]},numChildren:function(e){return e.childNodes?
e.childNodes.length:0}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var
i,r;i=[n(98),n(99),n(48),n(22)],r=function(e,t,n,i){var r={},o={},a=function(n,i){return
o[n]=new e(new t(r),i),o[n]},s=function(e,t,o,a){var s=i.getPluginName(e);r[s]||
(r[s]=new
n(e)),r[s].registerPlugin(e,t,o,a)};return{loadPlugins:a,registerPlugin:s}}.apply(t,i),!
(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function()
{return{repo:"http://ssl.p.jwpcdn.com/player/v/",SkinsIncluded:["seven"],SkinsLoadable:
["beelden","bekle","five","glow","roundster","six","stormtrooper","vapor"],dvrSeekLimit:
-25}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var
i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return
typeof e}:function(e){return e&&"function"==typeof
Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=
[n(7),n(42)],r=function(e,t){function n(e){e=e.split("-");for(var
t=1;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return
e.join("")}function i(t,n){return""===n||void 0===n||null===n?"":"string"==typeof
n&&isNaN(n)?/png|gif|jpe?g/i.test(n)&&n.indexOf("url")<0?"url("+n+")":n:0===n||"zindex"===t||"opacity"===t?""+n:/color/i.test(t)?"#"+e.pad(n.toString(16).replace(/^0x/i,
""),6):Math.ceil(n)+"px"}var r,a=function(e,n,i,r){i=i||"all-players";var
a="";if("object"===("undefined"==typeof n?"undefined":o(n))){var
l=document.createElement("div");s(l,n);var u=l.style.cssText;r&&u&&(u=u.replace(/;/g,"
!important;")),a="{"+u+"}"}else"string"==typeof n&&(a=n);return""===a||"{}"===a?void
t.clear(i,e):void t.style([[e,e+a]],i)},s=function(e,t){if(void 0!==e&&null!==e){void
0===e.length&&(e=[e]);var r,o={};for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&
(o[r]=i(r,t[r]));for(var a=0;a<e.length;a++){var s,l=e[a];if(void 0!==l&&null!==l)for(r
in o)Object.prototype.hasOwnProperty.call(o,r)&&(s=n(r),l.style[s]!==o[r]&&
(l.style[s]=o[r]))}}},l=function(e,t){s(e,
{transform:t,webkitTransform:t,msTransform:t,mozTransform:t,oTransform:t})},u=function(e
,t){var n="rgb",i=void 0!==t&&100!==t;if(i&&(n+="a"),!r){var
o=document.createElement("canvas");o.height=1,o.width=1,r=o.getContext("2d")}e?
isNaN(parseInt(e,16))||
(e="#"+e):e="#000000",r.clearRect(0,0,1,1),r.fillStyle=e,r.fillRect(0,0,1,1);var
a=r.getImageData(0,0,1,1).data;return n+="("+a[0]+", "+a[1]+", "+a[2],i&&(n+=",
"+t/100),n+")"};return{css:a,style:s,clearCss:t.clear,transform:l,hexToRgba:u,getRgba:u}
}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=
[n(7)],r=function(e){var t={},n=t.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};return
t.getPluginPathType=function(t){if("string"==typeof t){t=t.split("?")[0];var
i=t.indexOf("://");if(i>0)return n.ABSOLUTE;var
r=t.indexOf("/"),o=e.extension(t);return!(i<0&&r<0)||o&&isNaN(o)?
n.RELATIVE:n.CDN}},t.getPluginName=function(e){return e.replace(/^(.*\/)?([^-]*)-?.*\.
(swf|js)$/,"$2")},t.getPluginVersion=function(e){return e.replace(/[^-]*-?
([^\.]*).*$/,"$1")},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var
i,r;i=[n(1)],r=function(e){function t(e){return function(){return i(e)}}var n=
{},i=e.memoize(function(e){var t=navigator.userAgent.toLowerCase();return
null!==t.match(e)}),r=n.isInt=function(e){return
parseFloat(e)%1===0};n.isFlashSupported=function(){var e=n.flashVersion();return
e&&e>=18},n.isFF=t(/gecko\//i),n.isIPod=t(/iP(hone|od)/i),n.isIPad=t(/iPad/i),n.isSafari
602=t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),n.isOSX=t(/Mac OS
X/i),n.isFacebook=t(/FBAV/i);var o=n.isEdge=function(e){return i(e?new
RegExp("\\sedge\\/"+e,"i"):/\sEdge\/\d+/i)},a=n.isIETrident=t(/trident\/.+rv:\s*11/i),s=
n.isMSIE=function(e){return e?(e=parseFloat(e).toFixed(1),i(new

RegExp("msie\\s*"+e,"i"))):i(/msie/i)};n.isChrome=function(){return
i(/\s(?:Chrome|CriOS)\//i)&&!n.isEdge()},n.isIE=function(e){return e?
(e=parseFloat(e).toFixed(1),e>=12?o(e):e>=11?
a():s(e)):o()||a()||s()},n.isSafari=function(){return
i(/safari/i)&&!i(/chrome/i)&&!i(/crios/i)&&!i(/chromium/i)&&!i(/android/i)};var
l=n.isIOS=function(e){return i(e?new
RegExp("iP(hone|ad|od).+\\s(OS\\s"+e+"|.*\\sVersion/"+e+")","i"):/iP(hone|ad|od)/i)};n.i
sAndroidNative=function(e){return u(e,!0)};var u=n.isAndroid=function(e,t){return!
(t&&i(/chrome\/[123456789]/i)&&!i(/chrome\/18/))&&(e?(r(e)&&!/\./.test(e)&&
(e=""+e+"."),i(new RegExp("Android\\s*"+e,"i"))):i(/Android/i))};return
n.isMobile=function(){return l()||u()},n.isIframe=function(){try{return
window.self!==window.top}catch(e){return!0}},n.flashVersion=function()
{if(n.isAndroid())return 0;var e,t=navigator.plugins;if(t&&(e=t["Shockwave
Flash"],e&&e.description))return parseFloat(e.description.replace(/\D+(\d+\.?
\d*).*/,"$1"));if("undefined"!=typeof window.ActiveXObject){try{if(e=new
window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return
parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/,"."))}catch(i)
{return 0}return e}return 0},n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n)
{var i,r;i=[],r=function(){return"7.11.0+commercial_v7-110.178.commercial.cad481.jwplayer.5b926d.freewheel.d45996.googima.f50918.vast.81e36f.anal
ytics.340e73.plugin-gapro.7e936b.plugin-related.179f26.plugin-sharing.f395ef.vrplugin.d532d3.hls.js.";
}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[n(1),n(14)],r=function(e,t){var n,i=[{configName:"clearkey",keyName:"org.w3.clearkey"},
{configName:"widevine",keyName:"com.widevine.alpha"},
{configName:"playready",keyName:"com.microsoft.playready"}],r=[],o={},a=function(t){var
n=t.get("playlist");return!!t.get("drm")||e.some(n,function(t)
{return!!t.drm||e.some(t.sources,function(e){return!!e.drm})})},s=function(e){return new
Promise(function(t,n){var i;try{i=new window.MSMediaKeys(e)}catch(r){}i?
t():n()})},l=function(t){var a=s;return navigator.requestMediaKeySystemAccess&&
(a=navigator.requestMediaKeySystemAccess.bind(navigator)),n?n.then(t):
(e.forEach(i,function(e){var t=a(e.keyName,[{initDataTypes:["cenc"],videoCapabilities:
[{contentType:'video/mp4;codecs="avc1.4d401e"'}],audioCapabilities:
[{contentType:'audio/mp4;codecs="mp4a.40.2"'}]}]).then(function(){o[e.configName]=!0})
["catch"](function()
{o[e.configName]=!1});r.push(t)}),n=Promise.all(r).then(t))},u=function()
{return!!navigator.requestMediaKeySystemAccess&&!!MediaKeySystemAccess.prototype.getConf
iguration||!!window.MSMediaKeys},c=function(e){return o[e]},d=function(t)
{n||console.error('DRM only supported with "drm" block in initial setup.',t);var
i=e.keys(t);return e.some(i,function(e){return
c(e)})};return{containsDrm:a,probe:function(e,n){u()&&t(n)("drm")?
l(e):e()},anySupported:d,isSupported:c}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=
[n(2),n(38),n(90),n(1),n(3),n(108),n(4),n(5)],r=function(e,t,n,i,r,o,a,s){var
l=function(){function o(e,t){var n=i.extend({},t,{type:e}),r=this.mediaModel;switch(e)
{case"flashThrottle":var
o="resume"!==t.state;this.set("flashThrottle",o),this.set("flashBlocked",o);break;case"f
lashBlocked":return void this.set("flashBlocked",!0);case"flashUnblocked":return void
this.set("flashBlocked",!1);case"volume":return void this.set(e,t[e]);case"mute":return
void(this.get("autostartMuted")||this.set(e,t[e]));case a.JWPLAYER_MEDIA_TYPE:return
void(r.get("mediaType")!==t.mediaType&&
(r.set("mediaType",t.mediaType),this.mediaController.trigger(e,n)));case
a.JWPLAYER_PLAYER_STATE:return void r.set("state",t.newstate);case
a.JWPLAYER_MEDIA_BUFFER:this.set("buffer",t.bufferPercent);case
a.JWPLAYER_MEDIA_META:var l=t.duration;i.isNumber(l)&&!i.isNaN(l)&&
(r.set("duration",l),this.set("duration",l));break;case
a.JWPLAYER_MEDIA_BUFFER_FULL:r.get("playAttempt")?
this.playVideo():r.on("change:playAttempt",function(){this.playVideo()},this);break;case
a.JWPLAYER_MEDIA_TIME:r.set("position",t.position),this.set("position",t.position),i.isN
umber(t.duration)&&
(r.set("duration",t.duration),this.set("duration",t.duration));break;case
a.JWPLAYER_PROVIDER_CHANGED:this.set("provider",f.getName());break;case
a.JWPLAYER_MEDIA_LEVELS:this.setQualityLevel(t.currentQuality,t.levels),r.set("levels",t
.levels);break;case
a.JWPLAYER_MEDIA_LEVEL_CHANGED:this.setQualityLevel(t.currentQuality,t.levels),this.pers
istQualityLevel(t.currentQuality,t.levels);break;case a.JWPLAYER_MEDIA_COMPLETE:return
h=!0,this.mediaController.trigger(a.JWPLAYER_MEDIA_BEFORECOMPLETE,n),void(g&&this.playba
ckComplete());case
a.JWPLAYER_AUDIO_TRACKS:this.setCurrentAudioTrack(t.currentTrack,t.tracks),r.set("audioT

racks",t.tracks);break;case
a.JWPLAYER_AUDIO_TRACK_CHANGED:this.setCurrentAudioTrack(t.currentTrack,t.tracks);break;
case"subtitlesTrackChanged":this.persistVideoSubtitleTrack(t.currentTrack,t.tracks);brea
k;case"visualQuality":var
u=i.extend({},t);r.set("visualQuality",u);break;case"autoplayFailed":this.set("autostart
Failed",!0),r.get("state")===s.PLAYING&&r.set("state",s.PAUSED)}this.mediaController.tri
gger(e,n)}function l(){return!!e.isIOS()&&!
(e.isIOS(6)||e.isIOS(7)||e.isIOS(8)||e.isIOS(9))}function c(){var
t=!p.get("advertising")||p.get("advertising").autoplayadsmuted,n=l()&&
(e.isSafari()||e.isChrome()||e.isFacebook()),i=e.isAndroid()&&e.isChrome(),r=n||i,o=1===
p.get("sdkplatform");return!p.get("sdkplatform")&&t&&r||o}var
d,f,p=this,h=!1,g=!0,v=e.noop;this.mediaController=i.extend({},r),this.mediaModel=new
u,n.model(this),this.set("mediaModel",this.mediaModel),this.setup=function(e){return
i.extend(this.attributes,e,{item:0,itemMeta:{},playlistItem:void
0,state:s.IDLE,flashBlocked:!1,provider:void
0,duration:0,position:0,buffer:0}),this.updateProviders(),this},this.getConfiguration=fu
nction(){return i.omit(this.clone(),["mediaModel"])},this.updateProviders=function()
{d=new t(this.getConfiguration())},this.setQualityLevel=function(e,t)
{e>-1&&t.length>1&&"youtube"!==f.getName().name&&this.mediaModel.set("currentLevel",pars
eInt(e))},this.persistQualityLevel=function(e,t){var n=t[e]||
{},i=n.label;this.set("qualityLabel",i)},this.setCurrentAudioTrack=function(e,t)
{e>-1&&t.length>0&&e<t.length&&this.mediaModel.set("currentAudioTrack",parseInt(e))},thi
s.onMediaContainer=function(){var
e=this.get("mediaContainer");v.setContainer(e)},this.changeVideoProvider=function(e)
{if(this.off("change:mediaContainer",this.onMediaContainer),f&&
(f.off(null,null,this),f.getContainer()&&f.remove(),delete f.instreamMode),!e)return
f=v=e,void this.set("provider",void 0);v=new e(p.get("id"),p.getConfiguration());var
t=this.get("mediaContainer");t?
v.setContainer(t):this.once("change:mediaContainer",this.onMediaContainer),this.set("pro
vider",v.getName()),v.getName().name.indexOf("flash")===-1&&
(this.set("flashThrottle",void
0),this.set("flashBlocked",!1)),f=v,f.volume(p.get("volume")),f.mute(this.autoStartOnMob
ile()||p.get("mute")),f.on("all",o,this),this.get("instreamMode")===!0&&
(f.instreamMode=!0),this.set("renderCaptionsNatively",f.renderNatively)},this.checkCompl
ete=function(){return h},this.detachMedia=function(){return
g=!1,f.off("all",o,this),f.detachMedia()},this.attachMedia=function(){return
g=!0,f.off("all",o,this),f.on("all",o,this),h&&this.playbackComplete(),f.attachMedia()},
this.playbackComplete=function()
{h=!1,f.setState(s.COMPLETE),this.mediaController.trigger(a.JWPLAYER_MEDIA_COMPLETE,
{})},this.destroy=function(){this.off(),f&&
(f.off(null,null,this),f.destroy())},this.getVideo=function(){return
f},this.setFullscreen=function(e)
{e=!!e,e!==p.get("fullscreen")&&p.set("fullscreen",e)},this.chooseProvider=function(e)
{return d.choose(e).provider},this.setItemIndex=function(e){var
t=this.get("playlist");e=parseInt(e,10)||0,e=
(e+t.length)%t.length,this.set("item",e),this.set("playlistItem",t[e]),this.setActiveIte
m(t[e])},this.setActiveItem=function(t){this.mediaModel.off(),this.mediaModel=new
u,this.set("itemMeta",
{}),this.set("mediaModel",this.mediaModel),this.set("position",t.starttime||0),this.set(
"minDvrWindow",t.minDvrWindow),this.set("duration",t.duration&&e.seconds(t.duration)||0)
,this.setProvider(t)},this.setProvider=function(e){var
t=e&&e.sources&&e.sources[0];if(void 0!==t){var n=this.chooseProvider(t);n&&v instanceof
n||p.changeVideoProvider(n),v&&
(v.init&&v.init(e),this.trigger("itemReady",e))}},this.getProviders=function(){return
d},this.resetProvider=function(){v=null},this.setVolume=function(e)
{e=Math.round(e),this.set("volume",e),f&&f.volume(e);var
t=0===e;t!==this.getMute()&&this.setMute(t)},this.getMute=function(){return
this.get("autostartMuted")||this.get("mute")},this.setMute=function(t){if(e.exists(t)||
(t=!this.getMute()),this.set("mute",t),f&&f.mute(t),!t){var
n=Math.max(10,this.get("volume"));this.set("autostartMuted",!1),this.setVolume(n)}},this
.loadVideo=function(t){t||(t=this.get("playlist")
[this.get("item")]),this.set("position",t.starttime||0),this.set("duration",t.duration&&
e.seconds(t.duration)||0),this.mediaModel.set("playAttempt",!0),this.mediaController.tri
gger(a.JWPLAYER_MEDIA_PLAY_ATTEMPT,
{playReason:this.get("playReason")}),f.load(t)},this.stopVideo=function()
{f&&f.stop()},this.playVideo=function(){f.play()},this.persistCaptionsTrack=function()
{var e=this.get("captionsTrack");e?
this.set("captionLabel",e.name):this.set("captionLabel","Off")},this.setVideoSubtitleTra
ck=function(e,t){this.set("captionsIndex",e),e&&t&&e<=t.length&&t[e-

1].data&&this.set("captionsTrack",t[e1]),f&&f.setSubtitlesTrack&&f.setSubtitlesTrack(e)},this.persistVideoSubtitleTrack=funct
ion(e,t)
{this.setVideoSubtitleTrack(e,t),this.persistCaptionsTrack()},this.setNextUp=function(e)
{this.set("nextUp",e)},this.autoStartOnMobile=function(){return
this.get("autostart")&&c()}},u=l.MediaModel=function(){this.set("state",s.IDLE)};return
i.extend(l.prototype,o),i.extend(u.prototype,o),l}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(5)],r=function(e){function t(t){return
t===e.COMPLETE||t===e.ERROR?e.IDLE:t}return function(e,n,i){if(n=t(n),i=t(i),n!==i){var
r=n.replace(/(?:ing|d)$/,""),o=
{type:r,newstate:n,oldstate:i,reason:e.mediaModel.get("state")};"play"===r?
o.playReason=e.get("playReason"):"pause"===r&&
(o.pauseReason=e.get("pauseReason")),this.trigger(r,o)}}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(7)],r=function(e,t){function n(e){var
t={},n=e.split("\r\n");1===n.length&&(n=e.split("\n"));var r=1;if(n[0].indexOf(" -->
")>0&&(r=0),n.length>r+1&&n[r+1]){var o=n[r],a=o.indexOf(" --> ");a>0&&
(t.begin=i(o.substr(0,a)),t.end=i(o.substr(a+5)),t.text=n.slice(r+1).join("\r\n"))}retur
n t}var i=e.seconds;return function(e){var i=[];e=t.trim(e);var
r=e.split("\r\n\r\n");1===r.length&&(r=e.split("\n\n"));for(var
o=0;o<r.length;o++)if("WEBVTT"!==r[o]){var a=n(r[o]);a.text&&i.push(a)}return
i}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i;i=function(){function
e(e){if("string"!=typeof e)return!1;var
t=r[e.toLowerCase()];return!!t&&e.toLowerCase()}function t(e){if("string"!=typeof
e)return!1;var t=o[e.toLowerCase()];return!!t&&e.toLowerCase()}function n(n,r,o){var
a=this;a.hasBeenReset=!1;var
s="",l=!1,u=n,c=r,d=o,f=null,p="",h=!0,g="auto",v="start",m=50,y="middle",w=50,E="middle
";Object.defineProperty(a,"id",{enumerable:!0,get:function(){return s},set:function(e)
{s=""+e}}),Object.defineProperty(a,"pauseOnExit",{enumerable:!0,get:function(){return
l},set:function(e){l=!!e}}),Object.defineProperty(a,"startTime",
{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e)throw new
TypeError("Start time must be set to a
number.");u=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"endTime",
{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e)throw new
TypeError("End time must be set to a
number.");c=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"text",
{enumerable:!0,get:function(){return d},set:function(e)
{d=""+e,this.hasBeenReset=!0}}),Object.defineProperty(a,"region",
{enumerable:!0,get:function(){return f},set:function(e)
{f=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"vertical",
{enumerable:!0,get:function(){return p},set:function(t){var n=e(t);if(n===!1)throw new
SyntaxError("An invalid or illegal string was
specified.");p=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"snapToLines",
{enumerable:!0,get:function(){return h},set:function(e)
{h=!!e,this.hasBeenReset=!0}}),Object.defineProperty(a,"line",
{enumerable:!0,get:function(){return g},set:function(e){if("number"!=typeof
e&&e!==i)throw new SyntaxError("An invalid number or illegal string was
specified.");g=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"lineAlign",
{enumerable:!0,get:function(){return v},set:function(e){var n=t(e);if(!n)throw new
SyntaxError("An invalid or illegal string was
specified.");v=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"position",
{enumerable:!0,get:function(){return m},set:function(e){if(e<0||e>100)throw new
Error("Position must be between 0 and
100.");m=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"positionAlign",
{enumerable:!0,get:function(){return y},set:function(e){var n=t(e);if(!n)throw new
SyntaxError("An invalid or illegal string was
specified.");y=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"size",
{enumerable:!0,get:function(){return w},set:function(e){if(e<0||e>100)throw new
Error("Size must be between 0 and
100.");w=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"align",
{enumerable:!0,get:function(){return E},set:function(e){var n=t(e);if(!n)throw new
SyntaxError("An invalid or illegal string was
specified.");E=n,this.hasBeenReset=!0}}),a.displayState=void 0}if(window.VTTCue)return
window.VTTCue;var i="auto",r={"":!0,lr:!0,rl:!0},o=
{start:!0,middle:!0,end:!0,left:!0,right:!0};return n.prototype.getCueAsHTML=function()
{var e=window.WebVTT;return e.convertCueToDOMTree(window,this.text)},n}.call(t,n,t,e),!
(void 0!==i&&(e.exports=i))},function(e,t,n){var i,r;i=
[n(1),n(47),n(97)],r=function(e,t,n){var i={sources:[],tracks:
[],minDvrWindow:120};return function(r){r=r||{},e.isArray(r.tracks)||delete r.tracks;var
o=e.extend({},i,r);e.isObject(o.sources)&&!e.isArray(o.sources)&&(o.sources=

[t(o.sources)]),e.isArray(o.sources)&&0!==o.sources.length||(r.levels?
o.sources=r.levels:o.sources=[t(r)]);for(var a=0;a<o.sources.length;a++){var
s=o.sources[a];if(s){var l=s["default"];l?
s["default"]="true"===l.toString():s["default"]=!1,o.sources[a].label||
(o.sources[a].label=a.toString()),o.sources[a]=t(o.sources[a])}}return
o.sources=e.compact(o.sources),e.isArray(o.tracks)||(o.tracks=
[]),e.isArray(o.captions)&&(o.tracks=o.tracks.concat(o.captions),delete
o.captions),o.tracks=e.compact(e.map(o.tracks,n)),o}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(33)],r=function(e,t){function n(e)
{return/^(?:(?:https?|file)\:)?\/\//.test(e)}function i(t){return e.some(t,function(e)
{return"parsererror"===e.nodeName})}var r={};return r.getAbsolutePath=function(e,i)
{if(t.exists(i)||(i=document.location.href),t.exists(e)){if(n(e))return e;var
r,o=i.substring(0,i.indexOf("://")+3),a=i.substring(o.length,i.indexOf("/",o.length+1));
if(0===e.indexOf("/"))r=e.split("/");else{var s=i.split("?")
[0];s=s.substring(o.length+a.length+1,s.lastIndexOf("/")),r=s.split("/").concat(e.split(
"/"))}for(var l=[],u=0;u<r.length;u++)r[u]&&t.exists(r[u])&&"."!==r[u]&&(".."===r[u]?
l.pop():l.push(r[u]));return o+a+"/"+l.join("/")}},r.getScriptPath=e.memoize(function(e)
{for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n++){var
i=t[n].src;if(i){var r=i.indexOf("/"+e);if(r>=0)return
i.substr(0,r+1)}}return""}),r.parseXML=function(e){var t=null;try{"DOMParser"in window?
(t=(new window.DOMParser).parseFromString(e,"text/xml"),
(i(t.childNodes)||t.childNodes&&i(t.childNodes[0].childNodes))&&(t=null)):(t=new
window.ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(n){}return
t},r.serialize=function(e){if(void 0===e)return null;if("string"==typeof e&&e.length<6)
{var
t=e.toLowerCase();if("true"===t)return!0;if("false"===t)return!1;if(!isNaN(Number(e))&&!
isNaN(parseFloat(e)))return Number(e)}return e},r.parseDimension=function(e)
{return"string"==typeof e?""===e?0:e.lastIndexOf("%")>-1?
e:parseInt(e.replace("px",""),10):e},r.timeFormat=function(t,n)
{if(t<=0&&!n||e.isNaN(parseInt(t)))return"00:00";var i=t<0?"-":"";t=Math.abs(t);var
r=Math.floor(t/3600),o=Math.floor((t-3600*r)/60),a=Math.floor(t%60);return i+(r?
r+":":"")+(o<10?"0":"")+o+":"+(a<10?"0":"")+a},r}.apply(t,i),!(void 0!==r&&
(e.exports=r))},,function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof
Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof
Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=
[n(1)],r=function(e){var t={};return t.exists=function(e){switch("undefined"==typeof
e?"undefined":o(e)){case"string":return e.length>0;case"object":return
null!==e;case"undefined":return!1;default:return!0}},t.isHTTPS=function(){return
0===window.location.href.indexOf("https")},t.isRtmp=function(e,t){return
0===e.indexOf("rtmp")||"rtmp"===t},t.isYouTube=function(e,t)
{return"youtube"===t||/^(http|\/\/).*
(youtube\.com|youtu\.be)\/.+/.test(e)},t.youTubeID=function(e){var t=/v[=\/]([^?
&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e);return t?
t.slice(1).join("").replace("?",""):""},t.typeOf=function(t)
{if(null===t)return"null";var n="undefined"==typeof
t?"undefined":o(t);return"object"===n&&e.isArray(t)?"array":n},t}.apply(t,i),!(void
0!==r&&(e.exports=r))},,,,function(e,t,n){var i,r;i=
[n(23),n(14),n(1),n(102),n(25)],r=function(e,t,n,i,r){function o()
{return!!window.MediaSource&&!!window.MediaSource.isTypeSupported&&window.MediaSource.is
TypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')}function a(i,o)
{if(e.isSafari())return!1;var
a=t(o);if(!a("dash"))return!1;if(i.drm&&!r.anySupported(i.drm))return!1;var
s=window.MediaSource;if(!window.HTMLVideoElement||!s)return!1;var l=!0;return
i.mediaTypes&&(l=n.all(i.mediaTypes,function(e){return s.isTypeSupported(e)})),l&&
("dash"===i.type||"mpd"===i.type||(i.file||"").indexOf("mpd-time-csf")>-1)}var
s=n.find(i,n.matches({name:"flash"})),l=s.supports;s.supports=function(n,i)
{if(!e.isFlashSupported()||n.drm)return!1;var r=n&&n.type;if("hls"===r||"m3u8"===r){var
o=t(i);return o("hls")}return l.apply(this,arguments)};var
u=n.find(i,n.matches({name:"html5"})),c=u.supports;return u.supports=function(e,n){var
i=c.apply(this,arguments);if(i&&e.drm&&"hls"===e.type){var
r=t(n),o=r("drm");if(o&&e.drm.fairplay){var a=window.WebKitMediaKeys;return
a&&a.isTypeSupported&&a.isTypeSupported("com.apple.fps.1_0","video/mp4")}return o}return
i},i.push({name:"shaka",supports:a}),i.splice(1,0,{name:"hlsjs",supports:function d(n,i)
{var r=e.isChrome()||e.isFF()||e.isIE(11),a=e.isAndroid()&&n.hlsjsdefault;if(r&&o()&&
(!e.isMobile()||a)&&!n.drm){var
s=n&&n.type,l=n&&n.file;if(l.indexOf(".m3u8")>-1||"hls"===s||"m3u8"===s){var
d=t(i);return d("hls")}}}}),i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n)
{var i,r;i=[n(103),n(1),n(37)],r=function(e,t){function i(e,n,i){var
r=t.indexOf(e,t.findWhere(e,{name:i})),o=t.indexOf(e,t.findWhere(e,{name:n}));if(!(o<r))

{var a=e.splice(o,1)[0];e.splice(r,0,a)}}var
r,o=e.registerProvider,a=e.prototype.reorderProviders;return t.extend(e.loaders,
{shaka:function(e){n.e(3,function(require){var t=n(71);o(t),e(t)})},hlsjs:function(e)
{n.e(2,function(require){var t=n(69);t["default"]&&
(t=t["default"]),t.setEdition&&t.setEdition(r),o(t),e(t)})}}),t.extend(e.prototype,
{reorderProviders:function(e){var t=a.call(this,e);return"flash"!==e?
i(t,"hlsjs","flash"):
(i(t,"flash","hlsjs"),i(t,"hlsjs","html5")),t},providerSupports:function(e,t){return
r=this.config.edition,e.supports(t,r)}}),e}.apply(t,i),!(void 0!==r&&
(e.exports=r))},,,,function(e,t,n){var i;i=function(require,e,t){function n(e,t)
{r(t,o(e))}function i(e,t){var n=c[e];if(n)if(t){var i=n[t];if(i)for(var
r=0;r<i.parts.length;r+=1)i.parts[r]()}else{for(var
o=Object.keys(n),a=0;a<o.length;a+=1)for(var
s=n[o[a]],l=0;l<s.parts.length;l+=1)s.parts[l]();delete c[e]}}function r(e,t){for(var
n=0;n<t.length;n++){var i=t[n],r=(c[e]||{})[i.id];if(r){for(var
o=0;o<r.parts.length;o++)r.parts[o]
(i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(l(e,i.parts[o]))}else{for(var a=
[],o=0;o<i.parts.length;o++)a.push(l(e,i.parts[o]));c[e]=c[e]||{},c[e][i.id]=
{id:i.id,parts:a}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var
r=e[i],o=r[0],a=r[1],s=r[2],l={css:a,media:s};n[o]?n[o].parts.push(l):t.push(n[o]=
{id:o,parts:[l]})}return t}function a(e){p().appendChild(e)}function s(e){var
t=document.createElement("style");return t.type="text/css",t.setAttribute("datajwplayer-id",e),a(t),t}function l(e,t){var n,i,r,o=d[e];o||(o=d[e]=
{element:s(e),counter:0});var a=o.counter++;return
n=o.element,i=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0),i(t),function(e){if(e)
{if(e.css===t.css&&e.media===t.media)return;i(t=e)}else r()}}function u(e,t,n,i){var
r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var
o=document.createTextNode(r),a=e.childNodes,s=a[t];s?
e.replaceChild(o,s):e.appendChild(o)}}var c={},d={},f=function(e){var t;return
function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function()
{return document.head||document.getElementsByTagName("head")[0]});t.exports=
{style:n,clear:i};var h=function(){var e=[];return function(t,n){return
e[t]=n,e.filter(Boolean).join("\n")}}()}.call(t,n,t,e),!(void 0!==i&&
(e.exports=i))},function(e,t,n){var i,r;i=[],r=function(){function e(){return t?
Promise.resolve(t):new Promise(function(e){n.e(1,function(require){t=n(65),e(t)})})}var
t=null;return{load:e}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var
i,r;i=[n(7),n(17),n(95),n(96),n(30)],r=function(e,t,n,i,r){function o(t){for(var o=
{},s=0;s<t.childNodes.length;s++){var
l=t.childNodes[s],c=u(l);if(c)switch(c.toLowerCase())
{case"enclosure":o.file=e.xmlAttribute(l,"url");break;case"title":o.title=a(l);break;cas
e"guid":o.mediaid=a(l);break;case"pubdate":o.date=a(l);break;case"description":o.descrip
tion=a(l);break;case"link":o.link=a(l);break;case"category":o.tags?
o.tags+=a(l):o.tags=a(l)}}return o=i(t,o),o=n(t,o),new r(o)}var
a=t.textContent,s=t.getChildNode,l=t.numChildren,u=t.localName,c={};return
c.parse=function(e){var t=[];t.feedData={};for(var n=0;n<l(e);n++){var
i=s(e,n),r=u(i).toLowerCase();if("channel"===r)for(var c=0;c<l(i);c++){var
d=s(i,c),f=u(d).toLowerCase();"item"===f?t.push(o(d)):f&&(t.feedData[f]=a(d))}}return
t},c}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[n(17),n(44),n(2),n(4),n(3),n(1)],r=function(e,t,n,i,r,o){var a=function(){function a(r)
{var a=n.tryCatch(function(){var n,a=r.responseXML?
r.responseXML.childNodes:null,s="";if(a){for(var c=0;c<a.length&&
(s=a[c],8===s.nodeType);c++);if("xml"===e.localName(s)&&
(s=s.nextSibling),"rss"===e.localName(s)){var
d=t.parse(s);n=o.extend({playlist:d},d.feedData)}}if(!n)try{var
f=JSON.parse(r.responseText);if(o.isArray(f))n=
{playlist:f};else{if(!o.isArray(f.playlist))throw Error;n=f}}catch(p){return void l("Not
a valid RSS/JSON feed")}u.trigger(i.JWPLAYER_PLAYLIST_LOADED,n)});a instanceof
n.Error&&l()}function s(e){l("Playlist load error: "+e)}function l(e)
{u.trigger(i.JWPLAYER_ERROR,{message:e?e:"Error loading file"})}var
u=o.extend(this,r);this.load=function(e){n.ajax(e,a,s)},this.destroy=function()
{this.off()}};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var
i,r;i=[n(30),n(47),n(1),n(38)],r=function(e,t,n,i){function r(e,t){for(var
n=0;n<e.length;n++){var
i=e[n],r=t.choose(i);if(r)return{type:i.type,provider:r.providerToCheck}}return
null}function o(e,t){return n.isUndefined(e)?t:e}var a=function(t){return
t=n.isArray(t)?t:[t],n.compact(n.map(t,e))};a.filterPlaylist=function(e,t,i){var r=
[],o=t.getProviders(),a=t.get("preload"),u=n.extend({},i);return delete
u.playlist,n.each(e,function(e)
{e=n.extend({},e),e.allSources=s(e,t),e.sources=l(e.allSources,o),e.sources.length&&

(e.file=e.sources[0].file,a&&(e.preload=e.preload||a),i&&
(e.feedData=u),r.push(e))}),r};var s=function(e,i){var
r=e.sources,a=i.get("androidhls"),s=e.drm||i.get("drm"),l=e.preload||i.get("preload"),u=
o(e.withCredentials,i.get("withCredentials")),c=i.get("hlsjsdefault");return
n.compact(n.map(r,function(e){if(!n.isObject(e))return null;void 0!==a&&null!==a&&
(e.androidhls=a),(e.drm||s)&&(e.drm=e.drm||s),(e.preload||l)&&
(e.preload=e.preload||l);var i=o(e.withCredentials,u);return n.isUndefined(i)||
(e.withCredentials=i),c&&(e.hlsjsdefault=c),t(e)}))},l=function(e,t){t&&t.choose||(t=new
i({primary:t?"flash":null}));var o=r(e,t);if(!o)return[];var
a=o.provider,s=o.type;return n.filter(e,function(e){return
e.type===s&&t.providerSupports(a,e)})};return a}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(7),n(1)],r=function(e,t,n){var i=
{"default":!1};return function(r){if(r&&r.file){var
o=n.extend({},i,r);o.file=t.trim(""+o.file);var a=/^[^\/]+\/(?:x-)?
([^\/]+)$/;if(a.test(o.type)&&
(o.mimeType=o.type,o.type=o.type.replace(a,"$1")),e.isYouTube(o.file)?
o.type="youtube":e.isRtmp(o.file)?o.type="rtmp":o.type||
(o.type=t.extension(o.file)),o.type){switch(o.type)
{case"m3u8":case"vnd.apple.mpegurl":o.type="hls";break;case"dash+xml":o.type="dash";brea
k;case"smil":o.type="rtmp";break;case"m4a":o.type="aac"}return n.each(o,function(e,t)
{""===e&&delete o[t]}),o}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n)
{var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e)
{return typeof e}:function(e){return e&&"function"==typeof
Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=
[n(2),n(22),n(4),n(3),n(13),n(1)],r=function(e,t,n,i,r,a){var s=
{FLASH:0,JAVASCRIPT:1,HYBRID:2},l=function(l){function u()
{switch(t.getPluginPathType(l)){case t.pluginPathType.ABSOLUTE:return l;case
t.pluginPathType.RELATIVE:return e.getAbsolutePath(l,window.location.href)}}function c()
{a.defer(function(){m=r.loaderstatus.COMPLETE,v.trigger(n.COMPLETE)})}function d()
{m=r.loaderstatus.ERROR,v.trigger(n.ERROR,{url:l})}var
f,p,h,g,v=a.extend(this,i),m=r.loaderstatus.NEW;this.load=function()
{if(m===r.loaderstatus.NEW){if(l.lastIndexOf(".swf")>0)return
f=l,m=r.loaderstatus.COMPLETE,void
v.trigger(n.COMPLETE);if(t.getPluginPathType(l)===t.pluginPathType.CDN)return
m=r.loaderstatus.COMPLETE,void v.trigger(n.COMPLETE);m=r.loaderstatus.LOADING;var e=new
r(u());e.on(n.COMPLETE,c),e.on(n.ERROR,d),e.load()}},this.registerPlugin=function(e,t,i,
o){g&&(clearTimeout(g),g=void 0),h=t,i&&o?(f=o,p=i):"string"==typeof i?
f=i:"function"==typeof i?p=i:i||o||
(f=e),m=r.loaderstatus.COMPLETE,v.trigger(n.COMPLETE)},this.getStatus=function(){return
m},this.getPluginName=function(){return t.getPluginName(l)},this.getFlashPath=function()
{if(f)switch(t.getPluginPathType(f)){case t.pluginPathType.ABSOLUTE:return f;case
t.pluginPathType.RELATIVE:return l.lastIndexOf(".swf")>0?
e.getAbsolutePath(f,window.location.href):e.getAbsolutePath(f,u())}return
null},this.getJS=function(){return p},this.getTarget=function(){return
h},this.getPluginmode=function(){return void 0!==("undefined"==typeof
f?"undefined":o(f))&&void 0!==("undefined"==typeof p?"undefined":o(p))?s.HYBRID:void
0!==("undefined"==typeof f?"undefined":o(f))?s.FLASH:void 0!==("undefined"==typeof
p?"undefined":o(p))?s.JAVASCRIPT:void 0},this.getNewInstance=function(e,t,n){return new
p(e,t,n)},this.getURL=function(){return l}};return l}.apply(t,i),!(void 0!==r&&
(e.exports=r))},,,,,function(e,t,n){var i,r;i=[n(23)],r=function(e){return function(t)
{if("hls"===t.type){if(t.androidhls===!1&&e.isAndroid())return!1;var
n=e.isAndroidNative;if(n(2)||n(3)||n("4.0"))return!1;if(e.isAndroid()&&!e.isFF())return!
0}return null}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t){"use
strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function()
{return"hidden"in document?function(){return!document.hidden}:"webkitHidden"in document?
function(){return!document.webkitHidden}:function(){return!0}}()},function(e,t,n){var
i,r;i=[n(1),n(31)],r=function(e,t){function n(e)
{e.onload=null,e.onprogress=null,e.onreadystatechange=null,e.onerror=null,"abort"in
e&&e.abort()}function i(t,i){return function(r){var
o=r.currentTarget||i.xhr;if(clearTimeout(i.timeoutId),i.retryWithoutCredentials&&i.xhr.w
ithCredentials){n(o);var a=e.extend({},i,
{xhr:null,withCredentials:!1,retryWithoutCredentials:!1});return void
d(a)}i.onerror(t,i.url,o)}}function r(e){return function(t){var
n=t.currentTarget||e.xhr;if(4===n.readyState)
{if(clearTimeout(e.timeoutId),n.status>=400){var i;return i=404===n.status?"File not
found":""+n.status+"("+n.statusText+")",e.onerror(i,e.url,n)}if(200===n.status)return
o(e)(t)}}}function o(e){return function(n){var
i=n.currentTarget||e.xhr;if(clearTimeout(e.timeoutId),e.responseType)
{if("json"===e.responseType)return a(i,e)}else{var

r,o=i.responseXML;if(o)try{r=o.firstChild}catch(l){}if(o&&r)return
s(i,o,e);if(u&&i.responseText&&!o&&(o=t.parseXML(i.responseText),o&&o.firstChild))return
s(i,o,e);if(e.requireValidXML)return void e.onerror("Invalid
XML",e.url,i)}e.oncomplete(i)}}function a(t,n)
{if(!t.response||e.isString(t.response)&&'"'!==t.responseText.substr(1))try{t=e.extend({
},t,{response:JSON.parse(t.responseText)})}catch(i){return void n.onerror("Invalid
JSON",n.url,t)}return n.oncomplete(t)}function s(t,n,i){var r=n.documentElement;return
i.requireValidXML&&
("parsererror"===r.nodeName||r.getElementsByTagName("parsererror").length)?void
i.onerror("Invalid XML",i.url,t):(t.responseXML||(t=e.extend({},t,
{responseXML:n})),i.oncomplete(t))}var l=function(){},u=!1,c=function(e){var
t=document.createElement("a"),n=document.createElement("a");t.href=location.href;try{ret
urn n.href=e,n.href=n.href,t.protocol+"//"+t.host!=n.protocol+"//"+n.host}catch(i)
{}return!0},d=function(t,a,s,d){e.isObject(t)&&(d=t,t=d.url);var
f,p=e.extend({xhr:null,url:t,withCredentials:!1,retryWithoutCredentials:!1,timeout:6e4,t
imeoutId:-1,oncomplete:a||l,onerror:s||l,mimeType:d&&!d.responseType?"text/xml":"",requi
reValidXML:!1,responseType:d&&d.plainText?"text":""},d);if("XDomainRequest"in
window&&c(t))f=p.xhr=new
window.XDomainRequest,f.onload=o(p),f.ontimeout=f.onprogress=l,u=!0;else{if(!
("XMLHttpRequest"in window))return void p.onerror("",t);f=p.xhr=new
window.XMLHttpRequest,f.onreadystatechange=r(p)}var h=i("Error loading
file",p);f.onerror=h,"overrideMimeType"in f?
p.mimeType&&f.overrideMimeType(p.mimeType):u=!0;try{t=t.replace(/#.*$/,""),f.open("GET",
t,!0)}catch(g){return
h(g),f}if(p.responseType)try{f.responseType=p.responseType}catch(g){}p.timeout&&
(p.timeoutId=setTimeout(function()
{n(f),p.onerror("Timeout",t,f)},p.timeout),f.onabort=function()
{clearTimeout(p.timeoutId)});try{p.withCredentials&&"withCredentials"in f&&
(f.withCredentials=!0),f.send()}catch(g){h(g)}return
f};return{ajax:d,crossdomain:c}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},,function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof
Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof
Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=
[n(2),n(3),n(1)],r=function(e,t,n){function i(e,t,n){var
i=document.createElement("param");i.setAttribute("name",t),i.setAttribute("value",n),e.a
ppendChild(i)}function r(e,t,n){Object.defineProperty(e,t,{get:function(){return
n}})}function a(a,s,c,d){var f,p=!0;if(d=d||"opaque",e.isMSIE()){var
h=document.createElement("div");s.appendChild(h),h.outerHTML='<object
classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"
id="'+c+'" name="'+c+'" tabindex="0"><param name="movie" value="'+a+'"><param
name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always">
<param name="wmode" value="'+d+'"><param name="bgcolor" value="'+u+'"><param name="menu"
value="false"></object>';for(var g=s.getElementsByTagName("object"),v=g.length;v-;)g[v].id===c&&(f=g[v])}else
f=document.createElement("object"),f.setAttribute("type","application/x-shockwaveflash"),f.setAttribute("data",a),f.setAttribute("width","100%"),f.setAttribute("height",
"100%"),f.setAttribute("bgcolor",u),f.setAttribute("id",c),f.setAttribute("name",c),i(f,
"allowfullscreen","true"),i(f,"allowscriptaccess","always"),i(f,"wmode",d),i(f,"menu","f
alse"),s.appendChild(f,s);f.className="jw-swf jwreset",f.style.display="block",f.style.position="absolute",f.style.left=0,f.style.right=
0,f.style.top=0,f.style.bottom=0,e.isIE()&&"PointerEvent"in window&&
(f.style.pointerEvents="none");var m=-1;return
r(f,"on",t.on),r(f,"once",t.once),r(f,"_eventQueue",[]),r(f,"off",function(){var
e=Array.prototype.slice.call(arguments);return e.length||
(f._eventQueue.length=0,clearTimeout(m)),t.off.apply(f,e)}),r(f,"trigger",function(e,n)
{var i=f._eventQueue;i.push({type:e,json:n}),m>-1||(m=setTimeout(function(){var
e=i.length;for(m=-1;e--;){var n=i.shift();if(n.json){var
r=JSON.parse(decodeURIComponent(n.json));t.trigger.call(f,n.type,r)}else
t.trigger.call(f,n.type)}}))}),r(f,"_events",{}),r(f,"triggerFlash",function(t)
{if("setupCommandQueue"===t&&(p=!1),"setup"!==t&&p||!f.__externalCall){for(var
i=f.__commandQueue,r=i.length;r--;)i[r][0]===t&&i.splice(r,1);return
i.push(Array.prototype.slice.call(arguments)),f}var
a=Array.prototype.slice.call(arguments,1),s=e.tryCatch(function(){if(a.length){for(var
e=a.length;e--;)"object"===o(a[e])&&n.each(a[e],l);var
i=JSON.stringify(a);f.__externalCall(t,i)}else f.__externalCall(t)});return s instanceof
e.Error&&(console.error(t,s),
"setup"===t)?(s.name="Failed to setup flash",s):f}),r(f,"__commandQueue",[]),f}function
s(e){e&&e.parentNode&&
(e.style.display="none",e.parentNode.removeChild(e),e=null)}function l(e,t,n){e

instanceof window.HTMLElement&&delete n[t]}var
u="#000000";return{embed:a,remove:s}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=
[n(19),n(1),n(33),n(31),n(24)],r=function(e,t,n,i,r){var o={};return
o.repo=t.memoize(function(){var t=r.split("+")[0],i=e.repo+t+"/";return n.isHTTPS()?
i.replace(/^http:/,"https:"):i}),o.versionCheck=function(e){var t=
("0"+e).split(/\W/),n=r.split(/\W/),i=parseFloat(t[0]),o=parseFloat(n[0]);return!
(i>o)&&!(i===o&&parseFloat("0"+t[1])>parseFloat(n[1]))},o.loadFrom=function(){return
o.repo()},o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){"use
strict";function i(e,t,n){if(!e)return"";var i=e.bitrate||e.bandwidth;return
o(t,i)||e.label||r(e.height,i,n)}function r(e,t,n){if(!e&&!t)return"";var i=s(t)+"
kbps",r=i;return e&&(r=e+"p",t&&n&&(r+=" ("+i+")")),r}function o(e,t){var
n=null,i=u.keys(e);if(t&&e&&i.length){var r=parseFloat(t);isNaN(r)||
(n=e[a(i,s(r))])}return n}function a(e,t){var n=null,i=1/0,r=void 0;return
u.isArray(e)&&u.forEach(e,function(e){r=Math.abs(e-t),r<i&&(n=e,i=r)}),n}function s(e)
{return Math.floor(e/1e3)}function l(e){return!!u.isArray(e)&&u.some(e,function(e){var
t=e.height||e.bitrate||e.bandwidth,n=this[t];return this[t]=1,n},
{})}Object.defineProperty(t,"__esModule",{value:!0});var
u=n(1);t.generateLabel=i,t.createLabel=r,t.getCustomLabel=o,t.findClosestBandwidth=a,t.t
oKbps=s,t.hasRedundantLevels=l},function(e,t){"use
strict";Object.defineProperty(t,"__esModule",
{value:!0});t.requestAnimationFrame=window.requestAnimationFrame||function(e){return
setTimeout(e,17)},t.cancelAnimationFrame=window.cancelAnimationFrame||clearTimeout},func
tion(e,t,n){var i,r;i=[n(104),n(1)],r=function(e,t){var n=function(){var n={},i={},r=
{},o={},a=(new Date).getTime();return a<1&&(a=1),{start:function(t)
{n[t]=a+e.now(),r[t]=r[t]+1||1},end:function(t){if(n[t]){var r=a+e.now(),o=r-n[t];delete
n[t],i[t]=i[t]+o||o}},dump:function(){var s=t.extend({},i);for(var l in
n)if(Object.prototype.hasOwnProperty.call(n,l)){var u=a+e.now(),c=un[l];s[l]=s[l]+c||c}return{counts:t.extend({},r),sums:s,events:t.extend({},o)}},tick:fun
ction(t){o[t]=a+e.now()},between:function(e,t){return o[t]&&o[e]?o[t]o[e]:null}}};return n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var
i,r;i=[],r=function(){return document.createElement("video")}.apply(t,i),!(void 0!==r&&
(e.exports=r))},,,,function(e,t,n){var i,r;i=[n(82),n(18),n(1)],r=function(e,t,n){var
i=e.selectPlayer,r=function(){var e=i.apply(this,arguments);return e?e:
{registerPlugin:function(e,n,i){"jwpsrv"!==e&&t.registerPlugin(e,n,i)}}};return
n.extend(e,{selectPlayer:r})}.apply(t,i),!(void 0!==r&&
(e.exports=r))},,,,,function(e,t,n){var i,r;i=[n(2),n(73),n(14)],r=function(e,t,n){var
i="invalid",r="RnXcsftYjWRDA^Uy",o=function(o){function a(o){e.exists(o)||
(o="");try{o=t.decrypt(o,r);var a=o.split("/");s=a[0],"pro"===s&&(s="premium");var
c=n(s);if(a.length>2&&c("setup")){l=a[1];var d=parseInt(a[2]);d>0&&(u=new
Date,u.setTime(d))}else s=i}catch(f){s=i}}var s,l,u;this.edition=function(){return
u&&u.getTime()<(new Date).getTime()?i:s},this.token=function(){return
l},this.expiration=function(){return u},a(o)};return o}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=function(e){return
window.atob(e)},t=function(e){return unescape(encodeURIComponent(e))},n=function(e)
{try{return decodeURIComponent(escape(e))}catch(t){return e}},i=function(e){for(var
t=new Array(Math.ceil(e.length/4)),n=0;n<t.length;n++)t[n]=e.charCodeAt(4*n)+
(e.charCodeAt(4*n+1)<<8)+(e.charCodeAt(4*n+2)<<16)+(e.charCodeAt(4*n+3)<<24);return
t},r=function(e){for(var t=new
Array(e.length),n=0;n<e.length;n++)t[n]=String.fromCharCode(255&e[n],e[n]>>>8&255,e[n]>>
>16&255,e[n]>>>24&255);return t.join("")};return{decrypt:function(o,a)
{if(o=String(o),a=String(a),0==o.length)return"";for(var
s,l,u=i(e(o)),c=i(t(a).slice(0,16)),d=u.length,f=u[d1],p=u[0],h=2654435769,g=Math.floor(6+52/d),v=g*h;0!=v;){l=v>>>2&3;for(var m=d-1;m>=0;m-)f=u[m>0?m-1:d-1],s=(f>>>5^p<<2)+(p>>>3^f<<4)^(v^p)+(c[3&m^l]^f),p=u[m]-=s;v-=h}var
y=r(u);return y=y.replace(/\0+$/,""),n(y)}}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=
[n(2),n(142),n(4),n(162),n(1)],r=function(e,t,n,i,r){var o=function(o,a){var s=new
t(o,a),l=s.setup;s.setup=function()
{l.call(this),a.on("change:skipButton",this.onSkipButton,this),a.change("castAvailable",
this.onCastAvailable,this),a.change("castActive",this.onCastActive,this)};var
u=s.addControls;return s.addControls=function(e){u.call(this,e);var
t=this.controlsContainer();t&&this._skipButton&&t.appendChild(this._skipButton.element()
)},s.addSkipButton=function(){this._skipButton=new
i(this.instreamModel),this._skipButton.on(n.JWPLAYER_AD_SKIPPED,function()
{this.api.skipAd()},this);var
e=this.controlsContainer();e&&e.appendChild(this._skipButton.element())},s.onSkipButton=
function(e,t){t?this.addSkipButton():this._skipButton&&
(this._skipButton.destroy(),this._skipButton=null)},s.onCastActive=function(t,n)

{n=n||!1;var i=t.get("airplayActive")||!1;e.toggleClass(this.getContainer(),"jw-flagcasting",n),e.toggleClass(this.getContainer(),"jw-flag-airplaycasting",i)},s.onCastAvailable=function(t,n){var
i=t.get("cast");r.isObject(i)&&e.toggleClass(this.getContainer(),"jw-flag-castavailable",n)},s};return o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t)
{e.exports=function(){var e=[];return e.toString=function(){for(var e=
[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"
{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=
[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&
(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?
a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},,function(e,t,n){var i,r;i=
[n(18),n(1)],r=function(e,t){return function(n,i){var r=
["seek","skipAd","stop","playlistNext","playlistPrev","playlistItem","resize","addButton
","removeButton","registerPlugin","attachMedia","next"];t.each(r,function(e)
{n[e]=function(){return
i[e].apply(i,arguments),n}}),n.registerPlugin=e.registerPlugin}}.apply(t,i),!(void
0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){return
function(t,n){var i=
["buffer","controls","position","duration","fullscreen","volume","item","stretching","pl
aylist","captions","viewable"];e.each(i,function(e){var
i=e.slice(0,1).toUpperCase()+e.slice(1);t["get"+i]=function(){return
n._model.get(e)}});var r=
["getAudioTracks","getCaptionsList","getWidth","getHeight","getCurrentAudioTrack","setCu
rrentAudioTrack","getCurrentCaptions","setCurrentCaptions","getCurrentQuality","setCurre
ntQuality","getQualityLevels","getVisualQuality","getConfig","getState","getSafeRegion",
"isBeforeComplete","isBeforePlay","getProvider","detachMedia"],o=
["setControls","setFullscreen","setVolume","setMute","setCues","setCaptions"];e.each(r,f
unction(e){t[e]=function(){return n[e]?
n[e].apply(n,arguments):null}}),e.each(o,function(e){t[e]=function(){return
n[e].apply(n,arguments),t}}),t.getPlaylistIndex=t.getItem}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=
[n(4),n(5),n(3),n(2),n(62),n(1),n(150),n(77),n(78),n(80),n(24)],r=function(e,t,n,i,r,o,a
,s,l,u,c){var d=function(d,f){var
p,h=this;o.extend(this,n),this.utils=i,this._=o,this.Events=n,this.version=c,this.trigge
r=function(e,t){t=o.isObject(t)?o.extend({},t):{},t.type=e;var i=window.jwplayer;return
i&&i.debug?
n.trigger.call(h,e,t):n.triggerSafe.call(h,e,t)},this.dispatchEvent=this.trigger,this.re
moveEventListener=this.off.bind(this);var g=function(){p=new
a(d),s(h,p),l(h,p),p.on(e.JWPLAYER_MEDIA_META,function(e){var
t=p._model.get("itemMeta");o.extend(t,e.metadata)}),p.on(e.JWPLAYER_READY,function(e)
{v.tick("ready"),e.setupTime=v.between("setup","ready")}),p.on("all",h.trigger)};g(),u(t
his),this.id=d.id;var v=this._qoe=new r;v.tick("init");var m=function()
{h.off(),p&&p.off(),p&&p.playerDestroy&&p.playerDestroy()};return
this.getPlugin=function(e){return h.plugins&&h.plugins[e]},this.addPlugin=function(e,t)
{this.plugins=this.plugins||
{},this.plugins[e]=t,this.onReady(t.addToPlayer),t.resize&&this.onResize(t.resizeHandler
)},this.setup=function(e){return
v.tick("setup"),m(),g(),i.foreach(e.events,function(e,t){var n=h[e];"function"==typeof
n&&n.call(h,t)}),e.id=h.id,p.setup(e,this),h},this.qoe=function(){var
e=p.getItemQoe(),t=v.between("setup","ready"),n=e.getFirstFrame();return{setupTime:t,fir
stFrame:n,player:v.dump(),item:e.dump()}},this.getContainer=function(){return
p.getContainer?p.getContainer():d},this.getMeta=this.getItemMeta=function(){return
p._model.get("itemMeta")||{}},this.getPlaylistItem=function(e){if(!i.exists(e))return
p._model.get("playlistItem");var t=h.getPlaylist();return t?
t[e]:null},this.getRenderingMode=function(){return"html5"},this.getMute=function()
{return p._model.getMute()},this.load=function(e,t){return
p.load(e,t),h},this.play=function(e,n){if(o.isObject(e)&&e.reason&&(n=e),n||(n=
{reason:"external"}),e===!0)return p.play(n),h;if(e===!1)return
p.pause(n),h;switch(e=h.getState()){case t.PLAYING:case
t.BUFFERING:p.pause(n);break;default:p.play(n)}return h},this.pause=function(e,t){return
o.isBoolean(e)?this.play(!e,t):this.play(t)},this.createInstream=function(){return
p.createInstream()},this.castToggle=function()
{p&&p.castToggle&&p.castToggle()},this.playAd=this.pauseAd=i.noop,this.remove=function()
{return f(h),h.trigger("remove"),m(),h},this};return d}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(4)],r=function(e,t){return function(n)
{var i=
{onBufferChange:t.JWPLAYER_MEDIA_BUFFER,onBufferFull:t.JWPLAYER_MEDIA_BUFFER_FULL,onErro
r:t.JWPLAYER_ERROR,onSetupError:t.JWPLAYER_SETUP_ERROR,onFullscreen:t.JWPLAYER_FULLSCREE
N,onMeta:t.JWPLAYER_MEDIA_META,onMute:t.JWPLAYER_MEDIA_MUTE,onPlaylist:t.JWPLAYER_PLAYLI

ST_LOADED,onPlaylistItem:t.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:t.JWPLAYER_PLAYLIST
_COMPLETE,onReady:t.JWPLAYER_READY,onResize:t.JWPLAYER_RESIZE,onComplete:t.JWPLAYER_MEDI
A_COMPLETE,onSeek:t.JWPLAYER_MEDIA_SEEK,onTime:t.JWPLAYER_MEDIA_TIME,onVolume:t.JWPLAYER
_MEDIA_VOLUME,onBeforePlay:t.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:t.JWPLAYER_MEDIA
_BEFORECOMPLETE,onDisplayClick:t.JWPLAYER_DISPLAY_CLICK,onControls:t.JWPLAYER_CONTROLS,o
nQualityLevels:t.JWPLAYER_MEDIA_LEVELS,onQualityChange:t.JWPLAYER_MEDIA_LEVEL_CHANGED,on
CaptionsList:t.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:t.JWPLAYER_CAPTIONS_CHANGED,onAdE
rror:t.JWPLAYER_AD_ERROR,onAdClick:t.JWPLAYER_AD_CLICK,onAdImpression:t.JWPLAYER_AD_IMPR
ESSION,onAdTime:t.JWPLAYER_AD_TIME,onAdComplete:t.JWPLAYER_AD_COMPLETE,onAdCompanions:t.
JWPLAYER_AD_COMPANIONS,onAdSkipped:t.JWPLAYER_AD_SKIPPED,onAdPlay:t.JWPLAYER_AD_PLAY,onA
dPause:t.JWPLAYER_AD_PAUSE,onAdMeta:t.JWPLAYER_AD_META,onCast:t.JWPLAYER_CAST_SESSION,on
AudioTrackChange:t.JWPLAYER_AUDIO_TRACK_CHANGED,onAudioTracks:t.JWPLAYER_AUDIO_TRACKS},r
={onBuffer:"buffer",onPause:"pause",onPlay:"play",onIdle:"idle"};e.each(r,function(t,i)
{n[i]=e.partial(n.on,t,e)}),e.each(i,function(t,i)
{n[i]=e.partial(n.on,t,e)})}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n)
{var i,r;i=[n(2),n(1)],r=function(e,t){function i(n){t.each(n,function(t,i)
{n[i]=e.serialize(t)})}function r(e){return e.slice&&"px"===e.slice(-2)&&
(e=e.slice(0,-2)),e}function o(t,n){if(n.toString().indexOf("%")===-1)return
0;if("string"!=typeof t||!e.exists(t))return 0;if(/^\d*\.?\d+%$/.test(t))return t;var
i=t.indexOf(":");if(i===-1)return 0;var
r=parseFloat(t.substr(0,i)),o=parseFloat(t.substr(i+1));return r<=0||o<=0?
0:o/r*100+"%"}var a=
{autostart:!1,controls:!0,displaytitle:!0,displaydescription:!0,mobilecontrols:!1,repeat
:!1,castAvailable:!1,skin:"seven",stretching:"uniform",mute:!1,volume:90,width:480,heigh
t:280,audioMode:!1,localization:{player:"Video Player",play:"Play",playback:"Start
playback",pause:"Pause",volume:"Volume",prev:"Previous",next:"Next",cast:"Chromecast",ai
rplay:"Airplay",fullscreen:"Fullscreen",playlist:"Playlist",hd:"Quality",cc:"Closed
captions",audioTracks:"Audio
tracks",replay:"Replay",buffer:"Loading",more:"More",Live:"Live",loadingAd:"Loading ad",rewind:"Rewind 10s",nextUp:"Next Up",nextUpClose:"Next
Up
Close",related:"Discover",close:"Close"},renderCaptionsNatively:!0,nextUpDisplay:!0},s=f
unction(s,l){var u=l&&l.getAllItems(),c=t.extend({},(window.jwplayer||
{}).defaults,u,s);i(c),c.localization=t.extend({},a.localization,c.localization);var
d=t.extend({},a,c);"."===d.base&&(d.base=e.getScriptPath("jwplayer.js")),d.base=
(d.base||e.loadFrom()).replace(/\/?
$/,"/"),n.p=d.base,d.width=r(d.width),d.height=r(d.height);var
f=e.getScriptPath("jwplayer.js")||d.base;d.flashplayer=d.flashplayer||f+"jwplayer.flash.
swf",d.flashloader=d.flashloader||f+"jwplayer.loader.swf","http:"===window.location.prot
ocol&&
(d.flashplayer=d.flashplayer.replace("https","http"),d.flashloader=d.flashloader.replace
("https","http")),d.aspectratio=o(d.aspectratio,d.width),t.isObject(d.skin)&&
(d.skinUrl=d.skin.url,d.skinColorInactive=d.skin.inactive,d.skinColorActive=d.skin.activ
e,d.skinColorBackground=d.skin.background,d.skin=t.isString(d.skin.name)?
d.skin.name:a.skin),t.isString(d.skin)&&d.skin.indexOf(".xml")>0&&(console.warn("JW
Player does not support XML skins, please update your
config"),d.skin=d.skin.replace(".xml","")),d.aspectratio||delete d.aspectratio;var
p=d.playlist;if(p)t.isArray(p.playlist)&&(d.feedData=p,d.playlist=p.playlist);else{var
h=t.pick(d,
["title","description","type","mediaid","image","file","sources","tracks","preload"]);d.
playlist=[h]}return d.qualityLabels=d.qualityLabels||d.hlslabels,d};return
s}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[n(79),n(1),n(38),n(37),n(18)],r=function(e,t,n,i,r){var o=[],a=0,s=function(t){var
n,i;return t?"string"==typeof t?(n=l(t),n||
(i=document.getElementById(t))):"number"==typeof t?n=o[t]:t.nodeType&&
(i=t,n=l(i.id)):n=o[0],n?n:i?u(new e(i,c)):
{registerPlugin:r.registerPlugin}},l=function(e){for(var
t=0;t<o.length;t++)if(o[t].id===e)return o[t];return null},u=function(e){return
a++,e.uniqueId=a,o.push(e),e},c=function(e){for(var t=o.length;t-;)if(o[t].uniqueId===e.uniqueId){o.splice(t,1);break}},d=
{selectPlayer:s,registerProvider:n.registerProvider,availableProviders:i,registerPlugin:
r.registerPlugin};return s.api=d,d}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(151),n(3),n(1),n(4)],r=function(e,t,n,i)
{var r=function(t,r,o,a){function s(){f("Setup Timeout Error","Setup took longer than
"+v+" seconds to complete.")}function l(){for(var e in
g)if(Object.prototype.hasOwnProperty.call(g,e)){var
n=g[e];!n.complete&&!n.running&&t&&c(n.depends)&&(n.running=!0,u(n))}}function u(e){var
n=function(t){t=t||{},d(e,t)};e.method(n,r,t,o,a)}function c(e){return
n.all(e,function(e){return g[e].complete})}function d(e,t){"error"===t.type?

f(t.msg,t.reason):"complete"===t.type?(clearTimeout(p),h.trigger(i.JWPLAYER_READY)):
(e.complete=!0,l())}function f(e,t){clearTimeout(p),h.trigger(i.JWPLAYER_SETUP_ERROR,
{message:e+": "+t}),h.destroy()}var p,h=this,g=e.getQueue(),v=30;this.start=function()
{p=setTimeout(s,1e3*v),l()},this.destroy=function()
{clearTimeout(p),this.off(),g.length=0,t=null,r=null,o=null}};return
r.prototype=t,r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[n(2),n(16),n(15)],r=function(e,t,n){var i=function(i,r){function o(e)
{if(e.tracks.length){for(var t=e.tracks||[],n=0;n<t.length;n++){var
i=t[n];m[i._id]||f(i)}var r=p();h(),this.setCaptionsList(r)}}function a(){v=[],m=
{},y=0}function s(e){a(r,e);var
n=e.tracks,i=n&&n.length;if(!r.get("renderCaptionsNatively")&&i){var
o,s;for(o=0;o<i;o++)s=n[o],l(s.kind)&&!m[s._id]&&
(f(s),t.loadFile(s,u.bind(null,s),c))}var d=p();h(),this.setCaptionsList(d)}function
l(e){return"subtitles"===e||"captions"===e}function u(e,t){e.data=t}function c(t)
{e.log("CAPTIONS("+t+")")}function d(e,t){var n=null;0!==t&&(n=v[t1]),e.set("captionsTrack",n)}function f(e){if(e.data=e.data||
[],e.name=e.label||e.name||e.language,e._id=n.createId(e,v.length),!e.name){var
t=n.createLabel(e,y);e.name=t.label,y=t.unknownCount}v.push(e),m[e._id]=e}function p()
{for(var e=
[{id:"off",label:"Off"}],t=0;t<v.length;t++)e.push({id:v[t]._id,label:v[t].name||"Unknow
n CC"});return e}function h(){var e=0,t=r.get("captionLabel");if("Off"===t)return void
r.set("captionsIndex",0);for(var n=0;n<v.length;n++){var i=v[n];if(t&&t===i.name)
{e=n+1;break}i["default"]||i.defaulttrack||"default"===i._id?
e=n+1:i.autoselect}g(e)}function g(e){v.length?
r.setVideoSubtitleTrack(e,v):r.set("captionsIndex",e)}r.on("change:playlistItem",a,this)
,r.on("change:captionsIndex",d,this),r.on("itemReady",s,this),r.mediaController.on("subt
itlesTracks",o,this);var v=[],m={},y=0;this.getCurrentIndex=function(){return
r.get("captionsIndex")},this.getCaptionsList=function(){return
r.get("captionsList")},this.setCaptionsList=function(e){r.set("captionsList",e)}};return
i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof
Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return
e&&"function"==typeof
Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=
[n(81),n(87),n(1),n(83),n(84),n(26),n(92),n(46),n(45),n(2),n(74),n(3),n(27),n(5),n(4),n(
131),n(86),n(43)],r=function(e,t,n,i,r,a,s,l,u,c,d,f,p,h,g,v,m,y){function w(e){return
function(){var t=Array.prototype.slice.call(arguments,0);this._model.getVideo()?
this["_"+e].apply(this,t):this.eventsQueue.push([e,t])}}function E(e){return
e===h.LOADING||e===h.STALLED?h.BUFFERING:e}var b=function(e)
{this.originalContainer=this.currentContainer=e,this.eventsQueue=
[],n.extend(this,f),this._model=new a};return b.prototype=
{play:w("play"),pause:w("pause"),seek:w("seek"),stop:w("stop"),load:w("load"),playlistNe
xt:w("next"),playlistPrev:w("prev"),playlistItem:w("item"),setCurrentCaptions:w("setCurr
entCaptions"),setCurrentQuality:w("setCurrentQuality"),setFullscreen:w("setFullscreen"),
setup:function(a,v){function w(e,t){ge.triggerAfterReady(e,t)}function b(e,t){t?
y.load().then(function(e){if(se.isSetup){var t=new
e(document,se.element());se.addControls(t),t.on("all",w,ge)}})["catch"](function(e)
{ge.triggerError({message:"Controls failed to
load",reason:e})}):se.removeControls()}function A(e,t){ge.trigger(g.JWPLAYER_CONTROLS,
{controls:t})}function L(){ue=null,se.on("all",w,ge);var
e=v.getPlugin("related");e&&e.on("nextUp",fe.setNextUp,fe),se.once(g.JWPLAYER_RESIZE,C),
se.init()}function C()
{fe.change("visibility",j),fe.on("change:controls",A),ge.trigger(g.JWPLAYER_READY,
{setupTime:0}),ge.triggerAfterReady=ge.trigger;for(var e=0;e<we.length;e++){var
t=we[e];pe=t.type===g.JWPLAYER_MEDIA_BEFOREPLAY,ge.trigger(t.type,t.args),pe=!1}k(),fe.o
n("change:viewable",P)}function j(e,t)
{n.isUndefined(t)||fe.set("viewable",Math.round(t))}function k(){var
e=fe.get("autostart");c.isMobile()||e!==!0?P(fe,fe.get("viewable")):O()}function P(e,t)
{fe.get("playOnViewable")&&(t?O():c.isMobile()&&ge.pause({reason:"autostart"}))}function
_(e){var t=fe.getProviders(),n=t.required(e,fe.get("primary"));return
t.load(n).then(function(){ge.getProvider()||
(fe.setProvider(fe.get("playlistItem")),R())})}function R()
{for(;ge.eventsQueue.length>0;){var e=ge.eventsQueue.shift(),t=e[0],n=e[1]||
[];ge["_"+t].apply(ge,n)}}function x(e,t)
{switch(fe.get("state")===h.ERROR&&fe.set("state",h.IDLE),fe.set("preInstreamState","ins
tream-idle"),ge.trigger("destroyPlugin",
{}),D(!0),fe.once("itemReady",k),"undefined"==typeof e?"undefined":o(e))
{case"string":T(e);break;case"object":var
n=J(e,t);n&&B(0);break;case"number":B(e)}}function T(e){var t=new
u;t.on(g.JWPLAYER_PLAYLIST_LOADED,function(e)

{x(e.playlist,e)}),t.on(g.JWPLAYER_ERROR,function(e){e.message="Error loading playlist:
"+e.message,this.triggerError(e)},this),t.load(e)}function S(){return
ge._instreamAdapter&&ge._instreamAdapter.getState()}function I(){var e=S();return
n.isString(e)?e:fe.get("state")}function M(e)
{if(e&&fe.set("playReason",e.reason),fe.get("state")!==h.ERROR){var
t=S();if(n.isString(t))return void v.pauseAd(!1);if(fe.get("state")===h.COMPLETE&&
(D(!0),B(0)),!pe&&(pe=!0,ge.triggerAfterReady(g.JWPLAYER_MEDIA_BEFOREPLAY,
{playReason:fe.get("playReason")}),pe=!1,de))return de=!1,void(ce=null);var i;if(Y())
{if(0===fe.get("playlist").length)return;i=c.tryCatch(function(){fe.loadVideo()})}else
fe.get("state")===h.PAUSED&&(i=c.tryCatch(function(){fe.playVideo()}));i instanceof
c.Error&&(ge.triggerError(i),ce=null)}}function O(){var
e=fe.get("state");e!==h.IDLE&&e!==h.PAUSED||M({reason:"autostart"})}function D(e)
{fe.off("itemReady",k);var t=!e;ce=null;var n=c.tryCatch(function()
{fe.stopVideo()},ge);return n instanceof c.Error?(ge.triggerError(n),!1):(t&&
(he=!0),pe&&(de=!0),!0)}function N(e){ce=null,e&&
(fe.set("pauseReason",e.reason),"interaction"!==e.reason&&"external"!==e.reason||fe.set(
"playOnViewable",!1));var t=S();if(n.isString(t))return void
v.pauseAd(!0);switch(fe.get("state")){case h.ERROR:return;case h.PLAYING:case
h.BUFFERING:var i=c.tryCatch(function(){ve().pause()},this);if(i instanceof
c.Error)return void ge.triggerError(i);break;default:pe&&(de=!0)}}function Y(){var
e=fe.get("state");return e===h.IDLE||e===h.COMPLETE||e===h.ERROR}function F(e,t)
{fe.get("state")!==h.ERROR&&
(fe.get("scrubbing")||fe.get("state")===h.PLAYING||M(t),ve().seek(e))}function W(e,t)
{D(!0),fe.get("state")===h.ERROR&&fe.set("state",h.IDLE),B(e),M(t)}function J(e,t)
{fe.set("feedData",t);var i=l(e);return
i=l.filterPlaylist(i,fe,t),fe.set("playlist",i),n.isArray(i)&&0!==i.length?(_(i),!0):
(ge.triggerError({message:"Error loading playlist: No playable sources
found"}),!1)}function B(e){fe.setItemIndex(e)}function V(e){W(fe.get("item")-1,e||
{reason:"external"})}function U(e){W(fe.get("item")+1,e||{reason:"external"})}function
H(){if(Y()){if(he)return void(he=!1);ce=H;var e=fe.get("item");return
e===fe.get("playlist").length-1?void(fe.get("repeat")?U({reason:"repeat"}):
(fe.set("playOnViewable",!1),fe.set("state",h.COMPLETE),ge.trigger(g.JWPLAYER_PLAYLIST_C
OMPLETE,{}))):void U({reason:"playlist"})}}function z(e){ve()&&
(e=parseInt(e,10)||0,ve().setCurrentQuality(e))}function G(){return ve()?
ve().getCurrentQuality():-1}function q(){return this._model?
this._model.getConfiguration():void 0}function K(){if(this._model.mediaModel)return
this._model.mediaModel.get("visualQuality");var e=Q();if(e){var
t=G(),i=e[t];if(i)return{level:n.extend({index:t},i),mode:"",reason:""}}return
null}function Q(){return ve()?ve().getQualityLevels():null}function X(e){ve()&&
(e=parseInt(e,10)||0,ve().setCurrentAudioTrack(e))}function $(){return ve()?
ve().getCurrentAudioTrack():-1}function Z(){return ve()?
ve().getAudioTracks():null}function ee(e)
{e=parseInt(e,10)||0,fe.persistVideoSubtitleTrack(e),ge.trigger(g.JWPLAYER_CAPTIONS_CHAN
GED,{tracks:ne(),track:e})}function te(){return le.getCurrentIndex()}function ne()
{return le.getCaptionsList()}function ie(){return fe.detachMedia()}function re(){var
e=c.tryCatch(function(){fe.attachMedia()});return e instanceof c.Error?void c.log("Error
calling _attachMedia",e):void("function"==typeof ce&&ce())}function oe(e)
{n.isBoolean(e)||
(e=!fe.get("fullscreen")),fe.set("fullscreen",e),this._instreamAdapter&&this._instreamAd
apter._adModel&&this._instreamAdapter._adModel.set("fullscreen",e)}function ae(){var
e=v.getPlugin("related");e&&e.next()}var
se,le,ue,ce,de,fe=this._model,pe=!1,he=!1,ge=this,ve=function(){return
fe.getVideo()},me=new s;me.track(fe);var ye=new e(a,me),we=
[];fe.setup(ye,me),se=this._view=new d(v,fe),ue=new
i(v,fe,se,J),ue.on(g.JWPLAYER_READY,L,this),ue.on(g.JWPLAYER_SETUP_ERROR,this.setupError
,this),fe.mediaController.on("all",w,this),fe.mediaController.on(g.JWPLAYER_MEDIA_COMPLE
TE,function()
{n.defer(H)}),fe.mediaController.on(g.JWPLAYER_MEDIA_ERROR,this.triggerError,this),fe.on
("change:flashBlocked",function(e,t){if(!t)return void this._model.set("errorEvent",void
0);var n=!!e.get("flashThrottle"),i={message:n?"Click to run Flash":"Flash plugin failed
to
load"};n||this.trigger(g.JWPLAYER_ERROR,i),this._model.set("errorEvent",i)},this),fe.on(
"change:state",p,this),fe.on("change:duration",function(e,t){var
n=e.get("minDvrWindow"),i=c.streamType(t,n);e.set("streamType",i)}),fe.on("change:castSt
ate",function(e,t)
{ge.trigger(g.JWPLAYER_CAST_SESSION,t)}),fe.on("change:fullscreen",function(e,t)
{ge.trigger(g.JWPLAYER_FULLSCREEN,
{fullscreen:t}),t&&e.set("playOnViewable",!1)}),fe.on("itemReady",function()
{ge.triggerAfterReady(g.JWPLAYER_PLAYLIST_ITEM,

{index:fe.get("item"),item:fe.get("playlistItem")})}),fe.on("change:playlist",function(e
,t){if(t.length){var i={playlist:t},r=fe.get("feedData");if(r){var
o=n.extend({},r);delete
o.playlist,i.feedData=o}ge.triggerAfterReady(g.JWPLAYER_PLAYLIST_LOADED,i)}}),fe.on("cha
nge:volume",function(e,t){ge.trigger(g.JWPLAYER_MEDIA_VOLUME,
{volume:t})}),fe.on("change:mute",function(e,t){ge.trigger(g.JWPLAYER_MEDIA_MUTE,
{mute:t})}),fe.on("change:scrubbing",function(e,t){t?
N():M({reason:"interaction"})}),fe.on("change:captionsList",function(e,t)
{ge.triggerAfterReady(g.JWPLAYER_CAPTIONS_LIST,
{tracks:t,track:fe.get("captionsIndex")||0})}),fe.on("change:mediaModel",function(e)
{e.mediaModel.on("change:state",function(t,n){e.set("state",E(n))})}),le=new
r(v,fe),fe.on("change:viewSetup",function(e,t){if(t){var
n=this.currentContainer.querySelector("video, audio");if(ge.showView(se.element()),n)
{var
i=fe.get("mediaContainer");i.appendChild(n)}}},this),fe.on("change:inDom",function(e,t)
{t&&
(e.off("change:controls",b),e.change("controls",b))}),this.triggerAfterReady=function(e,
t)
{we.push({type:e,args:t})},this._play=M,this._pause=N,this._seek=F,this._stop=D,this._lo
ad=x,this._next=U,this._prev=V,this._item=W,this._setCurrentCaptions=ee,this._setCurrent
Quality=z,this._setFullscreen=oe,this.detachMedia=ie,this.attachMedia=re,this.getCurrent
Quality=G,this.getQualityLevels=Q,this.setCurrentAudioTrack=X,this.getCurrentAudioTrack=
$,this.getAudioTracks=Z,this.getCurrentCaptions=te,this.getCaptionsList=ne,this.getVisua
lQuality=K,this.getConfig=q,this.getState=I,this.setVolume=fe.setVolume.bind(fe),this.se
tMute=fe.setMute.bind(fe),this.getProvider=function(){return
fe.get("provider")},this.getWidth=function(){return
fe.get("containerWidth")},this.getHeight=function(){return
fe.get("containerHeight")},this.getContainer=function(){return
this.currentContainer},this.resize=se.resize,this.getSafeRegion=se.getSafeRegion,this.se
tCues=se.addCues,this.setCaptions=se.setCaptions,this.next=ae,this.addButton=function(e,
t,i,r,o){var a=
{img:e,tooltip:t,callback:i,id:r,btnClass:o},s=!1,l=n.map(fe.get("dock"),function(e){var
t=e!==a&&e.id===a.id;return t?
(s=!0,a):e});s||l.push(a),fe.set("dock",l)},this.removeButton=function(e){var
t=fe.get("dock")||
[];t=n.reject(t,n.matches({id:e})),fe.set("dock",t)},this.checkBeforePlay=function()
{return pe},this.getItemQoe=function(){return fe._qoeItem},this.setControls=function(e)
{n.isBoolean(e)||(e=!fe.get("controls")),fe.set("controls",e);var
t=fe.getVideo();t&&t.setControls(e)},this.playerDestroy=function()
{this.stop(),this.showView(this.originalContainer),se&&se.destroy(),fe&&fe.destroy(),ue&
&
(ue.destroy(),ue=null)},this.isBeforePlay=this.checkBeforePlay,this.isBeforeComplete=fun
ction(){return fe.checkComplete()},this.createInstream=function(){return
this.instreamDestroy(),this._instreamAdapter=new
t(this,fe,se),this._instreamAdapter},this.skipAd=function()
{this._instreamAdapter&&this._instreamAdapter.skipAd()},this.instreamDestroy=function()
{ge._instreamAdapter&&ge._instreamAdapter.destroy()},this.trigger=function(e,t){var
n=m(fe,e,t);return f.trigger.call(this,e,n)},ue.start()},showView:function(e)
{if(!document.body.contains(this.currentContainer)){var
t=document.getElementById(this._model.get("id"));t&&
(this.currentContainer=t)}this.currentContainer.parentElement&&this.currentContainer.par
entElement.replaceChild(e,this.currentContainer),this.currentContainer=e},triggerError:f
unction(e)
{this._model.set("errorEvent",e),this._model.set("state",h.ERROR),this._model.once("chan
ge:state",function(){this._model.set("errorEvent",void
0)},this),this.trigger(g.JWPLAYER_ERROR,e)},setupError:function(e){var
t=e.message,i=c.createElement(v(this._model.get("id"),this._model.get("skin"),t)),r=this
._model.get("width"),o=this._model.get("height");c.style(i,
{width:r.toString().indexOf("%")>0?r:r+"px",height:o.toString().indexOf("%")>0?
o:o+"px"}),this.showView(i);var a=this;n.defer(function()
{a.trigger(g.JWPLAYER_SETUP_ERROR,{message:t})})}},b}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(4)],r=function(e,t){return
function(n,i,r){var o=r;switch(i){case
t.JWPLAYER_MEDIA_TIME:case"beforePlay":case"pause":case"play":case"ready":var
a=n.get("viewable");e.isUndefined(a)||(o=e.extend({},r,{viewable:a}))}return
o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[n(89),n(88),n(4),n(5),n(2),n(3),n(1)],r=function(e,t,n,i,r,o,a){function s(n){var
i="",r=n.get("provider");return r&&(i=r.name),i.indexOf("flash")>=0?t:e}var l=
{skipoffset:null,tag:null},u=function(e,o,u){function c()

{E._adModel.set("state","buffering"),o.set("skipButton",!1),b++;var e,t=h[b];g&&
(e=g[b]),L.loadItem(t,e)}function d(e,t){"complete"!==e&&(t=t||{},A.tag&&!t.tag&&
(t.tag=A.tag),this.trigger(e,t),"mediaError"!==e&&"error"!==e||h&&b+1<h.length&&c())}fun
ction f(e)
{E._adModel.set("duration",e.duration),E._adModel.set("position",e.position)}function
p(e){var t={};A.tag&&
(t.tag=A.tag),this.trigger(n.JWPLAYER_MEDIA_COMPLETE,t),k.call(this,e)}var
h,g,v,m,y,w=s(o),E=new w(e,o),b=0,A={},L=this,C=a.bind(function(e){e=e||
{},e.hasControls=!!o.get("controls"),this.trigger(n.JWPLAYER_INSTREAM_CLICK,e),E&&E._adM
odel&&(E._adModel.get("state")===i.PAUSED?
e.hasControls&&E.instreamPlay():E.instreamPause())},this),j=a.bind(function()
{E&&E._adModel&&E._adModel.get("state")===i.PAUSED&&o.get("controls")&&
(e.setFullscreen(),e.play())},this);this.type="instream",this.init=function()
{v=o.getVideo(),m=o.get("position"),y=o.get("playlist")
[o.get("item")],E.on("all",d,this),E.on(n.JWPLAYER_MEDIA_TIME,f,this),E.on(n.JWPLAYER_ME
DIA_COMPLETE,p,this),E.init(),e.detachMedia(),o.mediaModel.set("state",i.BUFFERING),e.ch
eckBeforePlay()||0===m&&!o.checkComplete()?(m=0,o.set("preInstreamState","instreampreroll")):v&&o.checkComplete()||o.get("state")===i.COMPLETE?
o.set("preInstreamState","instream-postroll"):o.set("preInstreamState","instreammidroll");var t=o.get("state");return
t!==i.PLAYING&&t!==i.BUFFERING||v.pause(),u.setupInstream(E._adModel),E._adModel.set("st
ate",i.BUFFERING),u.clickHandler()&&u.clickHandler().setAlternateClickHandlers(r.noop,nu
ll),this.setText(o.get("localization").loadingAd),this};var k=function(e)
{h&&b+1<h.length?c():(this.trigger("adBreakEnd",
{}),e.type===n.JWPLAYER_MEDIA_COMPLETE&&this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE,
{}),this.destroy())};this.loadItem=function(e,i){if(r.isAndroid(2.3))return void
this.trigger({type:n.JWPLAYER_ERROR,message:"Error loading instream: Cannot play
instream on Android 2.3"});var s=e;a.isArray(e)?(h=e,g=i,e=h[b],g&&(i=g[b])):s=[e];var
u=o.getProviders(),c=w===t?"flash":void
0,d=u.required(s,c);o.set("hideAdsControls",!1),u.load(d).then(function(){if(null!==E)
{L.trigger(n.JWPLAYER_PLAYLIST_ITEM,
{index:b,item:e}),A=a.extend({},l,i),E.load(e),L.addClickHandler();var
t=e.skipoffset||A.skipoffset;t&&L.setupSkipButton(t,A)}})},this.setupSkipButton=function
(e,t,n){o.set("skipButton",!1),n&&
(k=n),E._adModel.set("skipMessage",t.skipMessage),E._adModel.set("skipText",t.skipText),
E._adModel.set("skipOffset",e),o.set("skipButton",!0)},this.applyProviderListeners=funct
ion(e){E.applyProviderListeners(e),this.addClickHandler()},this.play=function()
{E.instreamPlay()},this.pause=function()
{E.instreamPause()},this.addClickHandler=function()
{u.clickHandler()&&u.clickHandler().setAlternateClickHandlers(C,j),
E.on(n.JWPLAYER_MEDIA_META,this.metaHandler,this)},this.skipAd=function(e){var
t=n.JWPLAYER_AD_SKIPPED;this.trigger(t,e),k.call(this,
{type:t})},this.metaHandler=function(e)
{e.width&&e.height&&u.resizeMedia()},this.destroy=function()
{if(this.off(),o.set("skipButton",!1),E)
{u.clickHandler()&&u.clickHandler().revertAlternateClickHandlers(),o.off(null,null,E),E.
off(null,null,L),E.instreamDestroy(),u.destroyInstream(),E=null,e.attachMedia();var
t=o.get("preInstreamState");switch(t){case"instream-preroll":case"instream-midroll":var
n=a.extend({},y);n.starttime=m,o.loadVideo(n),r.isMobile()&&o.mediaModel.get("state")===
i.BUFFERING&&v.setState(i.BUFFERING),v.play();break;case"instreampostroll":case"instream-idle":v.stop()}}},this.getState=function(){return!
(!E||!E._adModel)&&E._adModel.get("state")},this.setText=function(e){u.setAltText(e?
e:"")},this.hide=function(){o.set("hideAdsControls",!0)}};return
a.extend(u.prototype,o),u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var
i,r;i=[n(3),n(26),n(27),n(4),n(5),n(2),n(1)],r=function(e,t,n,i,r,o,a){var
s=function(e,i){this.model=i,this._adModel=(new
t).setup({id:i.get("id"),volume:i.get("volume"),fullscreen:i.get("fullscreen"),mute:i.ge
t("mute")}),this._adModel.on("change:state",n,this);var
r=e.getContainer();this.swf=r.querySelector("object")};return
s.prototype=a.extend({init:function(){if(o.isChrome()){var
e=-1,t=!1;this.swf.on("throttle",function(n){if(clearTimeout(e),"resume"===n.state)t&&
(t=!1,this.instreamPlay());else{var i=this;e=setTimeout(function()
{i._adModel.get("state")===r.PLAYING&&
(t=!0,i.instreamPause())},250)}},this)}this.swf.on("instream:state",this.stateHandler,th
is).on("instream:time",function(e)
{this._adModel.set("position",e.position),this._adModel.set("duration",e.duration),this.
trigger(i.JWPLAYER_MEDIA_TIME,e)},this).on("instream:complete",function(e)
{this.trigger(i.JWPLAYER_MEDIA_COMPLETE,e)},this).on("instream:error",function(e)
{this.trigger(i.JWPLAYER_MEDIA_ERROR,e)},this),this.swf.triggerFlash("instream:init"),th

is.applyProviderListeners=function(e){e&&(this.model.on("change:volume",function(t,n)
{e.volume(n)},this),this.model.on("change:mute",function(t,n)
{e.mute(n)},this),e.volume(this.model.get("volume")),e.mute(this.model.get("mute")),e.of
f(),e.on(i.JWPLAYER_PLAYER_STATE,this.stateHandler,this),e.on(i.JWPLAYER_MEDIA_TIME,func
tion(e){this.trigger(i.JWPLAYER_MEDIA_TIME,e)},this))}},stateHandler:function(e)
{switch(e.newstate){case r.PLAYING:case
r.PAUSED:this._adModel.set("state",e.newstate)}},instreamDestroy:function()
{this._adModel&&
(this.off(),this.swf.off(null,null,this),this.swf.triggerFlash("instream:destroy"),this.
swf=null,this._adModel.off(),this._adModel=null,this.model=null)},load:function(e)
{this.swf.triggerFlash("instream:load",e)},instreamPlay:function()
{this.swf.triggerFlash("instream:play")},instreamPause:function()
{this.swf.triggerFlash("instream:pause")}},e),s}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=
[n(1),n(3),n(27),n(4),n(5),n(26)],r=function(e,t,n,i,r,o){var a=function(a,s){function
l(t){var r=t||f.getVideo();if(p!==r){if(p=r,!r)return;var
o="vpaid"===r.type;r.off(),r.on("all",function(t,n)
{o&&t===i.JWPLAYER_MEDIA_COMPLETE||this.trigger(t,e.extend({},n,
{type:t}))},h),r.on(i.JWPLAYER_MEDIA_BUFFER_FULL,d),r.on(i.JWPLAYER_PLAYER_STATE,u),r.at
tachMedia(),r.volume(s.get("volume")),r.mute(s.get("mute")||s.get("autostartMuted")),f.o
n("change:state",n,h)}}function u(e){switch(e.newstate){case r.PLAYING:case
r.PAUSED:f.set("state",e.newstate)}}function c(e)
{s.trigger(e.type,e),h.trigger(i.JWPLAYER_FULLSCREEN,{fullscreen:e.jwstate})}function
d(){f.getVideo().play()}var f,p,h=e.extend(this,t);return
a.on(i.JWPLAYER_FULLSCREEN,function(e)
{this.trigger(i.JWPLAYER_FULLSCREEN,e)},h),this.init=function(){f=(new
o).setup({id:s.get("id"),volume:s.get("volume"),fullscreen:s.get("fullscreen"),mute:s.ge
t("mute")||s.get("autostartMuted"),instreamMode:!0}),f.on("fullscreenchange",c),this._ad
Model=f},h.load=function(e)
{f.set("item",0),f.set("playlistItem",e),f.setActiveItem(e),l(),f.off(i.JWPLAYER_ERROR),
f.on(i.JWPLAYER_ERROR,function(e)
{this.trigger(i.JWPLAYER_ERROR,e)},h),f.loadVideo(e)},h.applyProviderListeners=function(
e){l(e),e&&(e.off(i.JWPLAYER_ERROR),e.on(i.JWPLAYER_ERROR,function(e)
{this.trigger(i.JWPLAYER_ERROR,e)},h),s.on("change:volume",function(e,t)
{p.volume(t)},h),s.on("change:mute",function(e,t)
{p.mute(t)},h),s.on("change:autostartMuted",function(e,t)
{t||p.mute(s.get("mute"))},h))},this.instreamDestroy=function(){f&&
(f.off(),this.off(),p&&
(p.detachMedia(),p.off(),f.getVideo()&&p.destroy()),f=null,a.off(null,null,this),a=null)
},h.instreamPlay=function()
{f.getVideo()&&f.getVideo().play(!0)},h.instreamPause=function()
{f.getVideo()&&f.getVideo().pause(!0)},h};return a}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(62),n(1)],r=function(e,t){function n(e)
{e.mediaController.off(a,e._onPlayAttempt),e.mediaController.off(s,e._triggerFirstFrame)
,e.mediaController.off(u,e._onTime),e.off("change:activeTab",e._onTabVisible)}function
i(e){e._onTabVisible&&n(e),e._triggerFirstFrame=t.once(function(){var
t=e._qoeItem;t.tick(l);var i=t.getFirstFrame();e.mediaController.trigger(l,
{loadTime:i}),n(e)}),e._onTime=f(e._triggerFirstFrame),e._onPlayAttempt=function()
{e._qoeItem.tick(a)},e._onTabVisible=function(t,n){n?
e._qoeItem.tick(d):e._qoeItem.tick(c)},e.on("change:activeTab",e._onTabVisible),e.mediaC
ontroller.on(a,e._onPlayAttempt),e.mediaController.once(s,e._triggerFirstFrame),e.mediaC
ontroller.on(u,e._onTime)}function r(t){function n(t,n,r)
{t._qoeItem&&r&&t._qoeItem.end(r.get("state")),t._qoeItem=new
e,t._qoeItem.getFirstFrame=function(){var e=this.between(a,l),t=this.between(d,l);return
t>0&&t<e?
t:e},t._qoeItem.tick(o),t._qoeItem.start(n.get("state")),i(t),n.on("change:state",functi
on(e,n,i){t._qoeItem.end(i),t._qoeItem.start(n)})}t.on("change:mediaModel",n)}var
o="playlistItem",a="playAttempt",s="providerFirstFrame",l="firstFrame",u="time",c="tabHi
dden",d="tabVisible",f=function(e){var t=0;return function(n){var
i=n.position;i>t&&e(),t=i}};return{model:r}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=
[n(18),n(45),n(13),n(58),n(19),n(1),n(2),n(4),n(43)],r=function(e,t,i,r,o,a,s,l,u)
{function c(){var e={LOAD_PROMISE_POLYFILL:{method:f,depends:[]},LOAD_BASE64_POLYFILL:
{method:p,depends:[]},LOAD_PLUGINS:{method:g,depends:
["LOAD_PROMISE_POLYFILL"]},LOAD_XO_POLYFILL:{method:h,depends:[]},LOAD_SKIN:
{method:C,depends:[]},LOAD_PLAYLIST:{method:y,depends:[]},LOAD_CONTROLS:
{method:_,depends:["LOAD_PROMISE_POLYFILL"]},SETUP_VIEW:{method:j,depends:
["LOAD_SKIN","LOAD_XO_POLYFILL","LOAD_PROMISE_POLYFILL"]},INIT_PLUGINS:
{method:v,depends:["LOAD_PLUGINS","SETUP_VIEW"]},CHECK_FLASH:{method:w,depends:

["SETUP_VIEW"]},FILTER_PLAYLIST:{method:E,depends:
["LOAD_PLAYLIST","CHECK_FLASH"]},SET_ITEM:{method:k,depends:
["INIT_PLUGINS","FILTER_PLAYLIST"]},DEFERRED:{method:d,depends:[]},SEND_READY:
{method:P,depends:["LOAD_CONTROLS","SET_ITEM","DEFERRED"]}};return e}function d(e)
{setTimeout(e,0)}function f(e){window.Promise?e():n.e(11,function(require)
{n(50),e()})}function p(e){window.btoa&&window.atob?e():n.e(12,function(require)
{n(49),e()})}function h(e){"IntersectionObserver"in
window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in
window.IntersectionObserverEntry.prototype?e():n.e(7,function(require)
{n(76),e()})}function g(t,n)
{window.jwplayerPluginJsonp=e.registerPlugin,x=e.loadPlugins(n.get("id"),n.get("plugins"
)),x.on(l.COMPLETE,t),x.on(l.ERROR,a.partial(m,t)),x.load()}function v(e,t,n){delete
window.jwplayerPluginJsonp,x.setupPlugins(n,t),e()}function m(e,t){R(e,"Could not load
plugin",t.message)}function y(e,n){var i=n.get("playlist");a.isString(i)?(T=new
t,T.on(l.JWPLAYER_PLAYLIST_LOADED,function(t)
{n.attributes.feedData=t,n.attributes.playlist=t.playlist,e()}),T.on(l.JWPLAYER_ERROR,a.
partial(b,e)),T.load(i)):e()}function w(e,t,n,i){var
o="flash"===t.get("primary"),a=s.flashVersion();if(o&&a){var l,u=function(){l!==-1&&
(clearTimeout(l),l=-1,setTimeout(function()
{r.remove(f.querySelector("#"+p)),e()},0))},c=function(){t.set("primary",void
0),t.updateProviders(),u()},d=i.element(),f=d.querySelector(".jwmedia");d.parentElement||c();var p=""+t.get("id")+""+Math.random().toString(16).substr(2),h=t.get("flashloader");Object.defineProperty(r.em
bed(h,f,p,null),"embedCallback",{get:function(){return u}}),l=setTimeout(c,3e3)}else
e()}function E(e,t,n,i,r){var o=r(t.get("playlist"),t.get("feedData"));o?
e():b(e)}function b(e,t){t&&t.message?R(e,"Error loading playlist",t.message):R(e,"Error
loading player","No playable sources found")}function A(e,t){var n;return
a.contains(o.SkinsLoadable,e)&&(n=t+"skins/"+e+".css"),n}function L(e){for(var
t=document.styleSheets,n=0,i=t.length;n<i;n++)if(t[n].href===e)return!0;return!1}functio
n C(e,t){var n=t.get("skin"),r=t.get("skinUrl");if(a.contains(o.SkinsIncluded,n))return
void e();if(r||(r=A(n,t.get("base"))),a.isString(r)&&!L(r)){t.set("skin-loading",!0);var
s=!0,u=new i(r,s);u.addEventListener(l.COMPLETE,function(){t.set("skinloading",!1)}),u.addEventListener(l.ERROR,function(){t.set("skin","seven"),t.set("skinloading",!1)}),u.load()}e()}function j(e,t,n,i){var
r=t.autoStartOnMobile();r&&t.set("autostartMuted",!0),t.set("playOnViewable",r||"viewabl
e"===t.get("autostart")),i.setup(),e()}function k(e,t)
{t.once("itemReady",e),t.setItemIndex(t.get("item"))}function P(e)
{e({type:"complete"})}function _(e,t){return t.get("controls")?void
u.load().then(function(){e()})["catch"](function(t){R(e,"Failed to load
controls",t)}):void e()}function R(e,t,n){e({type:"error",msg:t,reason:n})}var
x,T;return{getQueue:c,error:R}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n)
{var i,r;i=[n(1),n(2)],r=function(e,t){function n(e){return"jwplayer."+e}function i()
{return e.reduce(this.persistItems,function(e,i){var r=l[n(i)];return r&&
(e[i]=t.serialize(r)),e},{})}function r(e,t){try{l[n(e)]=t}catch(i){var
r=window.jwplayer;r&&r.debug&&console.error(i)}}function o()
{e.each(this.persistItems,function(e){l.removeItem(n(e))})}function a()
{this.persistItems=["volume","mute","captionLabel","qualityLabel"]}function s(t)
{e.each(this.persistItems,function(e){t.on("change:"+e,function(t,n){r(e,n)})})}var l=
{removeItem:t.noop};try{l=window.localStorage}catch(u){}return e.extend(a.prototype,
{getAllItems:i,track:s,clear:o}),a}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(67),n(2)],r=function(e,t){return
n.p=t.loadFrom(),e.selectPlayer}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(7)],r=function(e){function t(e)
{e||n()}function n(){throw new Error("Invalid DFXP file")}var i=e.seconds;return
function(r){t(r);var o=
[],a=r.getElementsByTagName("p"),s=30,l=r.getElementsByTagName("tt");if(l&&l[0]){var
u=parseFloat(l[0].getAttribute("ttp:frameRate"));isNaN(u)||(s=u)}t(a),a.length||
(a=r.getElementsByTagName("tt:p"),a.length||(a=r.getElementsByTagName("tts:p")));for(var
c=0;c<a.length;c++){for(var d=a[c],f=d.getElementsByTagName("br"),p=0;p<f.length;p++)
{var h=f[p];h.parentNode.replaceChild(r.createTextNode("\r\n"),h)}var
g=d.innerHTML||d.textContent||d.text||"",v=e.trim(g).replace(/>\s+</g,">
<").replace(/(<\/?)tts?:/g,"$1").replace(/<br.*?\/>/g,"\r\n");if(v){var
m=d.getAttribute("begin"),y=d.getAttribute("dur"),w=d.getAttribute("end"),E=
{begin:i(m,s),text:v};w?E.end=i(w,s):y&&(E.end=E.begin+i(y,s)),o.push(E)}}return
o.length||n(),o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[n(17),n(7),n(2)],r=function(e,t,n){var i="jwplayer",r=function(r,o){for(var a=[],s=
[],l=t.xmlAttribute,u="default",c="label",d="file",f="type",p=0;p<r.childNodes.length;p+
+){var h=r.childNodes[p];if(h.prefix===i){var g=e.localName(h);"source"===g?(delete
o.sources,a.push({file:l(h,d),"default":l(h,u),label:l(h,c),type:l(h,f)})):"track"===g?

(delete o.tracks,s.push({file:l(h,d),"default":l(h,u),kind:l(h,"kind"),label:l(h,c)})):
(o[g]=n.serialize(e.textContent(h)),"file"===g&&o.sources&&delete o.sources)}o[d]||
(o[d]=o.link)}if(a.length)for(o.sources=[],p=0;p<a.length;p++)a[p].file.length>0&&(a[p]
[u]="true"===a[p][u],a[p].label.length||delete
a[p].label,o.sources.push(a[p]));if(s.length)for(o.tracks=
[],p=0;p<s.length;p++)s[p].file.length>0&&(s[p][u]="true"===s[p]
[u],s[p].kind=s[p].kind.length?s[p].kind:"captions",s[p].label.length||delete
s[p].label,o.tracks.push(s[p]));return o};return r}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(17),n(7),n(2)],r=function(e,t,n){function
i(e){for(var t=[],n=0;n<s(e);n++){var
i=e.childNodes[n];"jwplayer"===i.prefix&&"mediatypes"===o(i).toLowerCase()&&t.push(a(i))
}return t}var
r=t.xmlAttribute,o=e.localName,a=e.textContent,s=e.numChildren,l="media",u=function
c(e,t){function u(e){var t=
{zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese"
,pt:"Portuguese",ru:"Russian",es:"Spanish"};return t[e]?t[e]:e}var d,f,p="tracks",h=
[];for(f=0;f<s(e);f++)if(d=e.childNodes[f],d.prefix===l)
{if(!o(d))continue;switch(o(d).toLowerCase()){case"content":if(r(d,"duration")&&
(t.duration=n.seconds(r(d,"duration"))),r(d,"url")){t.sources||(t.sources=[]);var g=
{file:r(d,"url"),type:r(d,"type"),width:r(d,"width"),label:r(d,"label")},v=i(d);v.length
&&(g.mediaTypes=v),t.sources.push(g)}s(d)>0&&
(t=c(d,t));break;case"title":t.title=a(d);break;case"description":t.description=a(d);bre
ak;case"guid":t.mediaid=a(d);break;case"thumbnail":t.image||
(t.image=r(d,"url"));break;case"group":c(d,t);break;case"subtitle":var m=
{};m.file=r(d,"url"),m.kind="captions",r(d,"lang").length>0&&
(m.label=u(r(d,"lang"))),h.push(m)}}for(t.hasOwnProperty(p)||(t[p]=
[]),f=0;f<h.length;f++)t[p].push(h[f]);return t};return u}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t=
{kind:"captions","default":!1};return function(n){if(n&&n.file)return
e.extend({},t,n)}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[n(22),n(2),n(4),n(3),n(1),n(13)],r=function(e,t,n,i,r,o){function a(e,t,n){return
function(){var i=e.getContainer().getElementsByClassName("jw-overlays")[0];i&&
(n.left=i.style.left,n.top=i.style.top,i.appendChild(n),t.displayArea=i)}}function s(e)
{function t(){var t=e.displayArea;t&&e.resize(t.clientWidth,t.clientHeight)}return
function(){t(),setTimeout(t,400)}}var l=function(l,u){function c(){v||
(v=!0,g=o.loaderstatus.COMPLETE,h.trigger(n.COMPLETE))}function d(){if(!y&&
(u&&0!==r.keys(u).length||c(),!v)){var
i=l.getPlugins();p=r.after(m,c),r.each(u,function(r,a){var
s=e.getPluginName(a),l=i[s],u=l.getJS(),c=l.getTarget(),d=l.getStatus();d!==o.loaderstat
us.LOADING&&d!==o.loaderstatus.NEW&&(u&&!t.versionCheck(c)&&h.trigger(n.ERROR,
{message:"Incompatible player version"}),p())})}}function f(e){if(!y){var i="File not
found";e.url&&t.log(i,e.url),this.off(),this.trigger(n.ERROR,{message:i}),d()}}var
p,h=r.extend(this,i),g=o.loaderstatus.NEW,v=!1,m=r.size(u),y=!1;this.setupPlugins=functi
on(n,i){var o=[],u=l.getPlugins(),c=i.get("plugins");r.each(c,function(i,l){var
d=e.getPluginName(l),f=u[d],p=f.getFlashPath(),h=f.getJS(),g=f.getURL();if(p){var
v=r.extend({name:d,swf:p,pluginmode:f.getPluginmode()},i);o.push(v)}var
m=t.tryCatch(function(){if(h){var e=c[g];if(!e)return void t.log("JW Plugin already
loaded",d,g);var i=document.createElement("div");i.id=n.id+"_"+d,i.className="jw-plugin
jw-reset";var
o=r.extend({},e),l=f.getNewInstance(n,o,i);l.addToPlayer=a(n,l,i),l.resizeHandler=s(l),n
.addPlugin(d,l,i)}});m instanceof t.Error&&t.log("ERROR: Failed to load
"+d+".")}),i.set("flashPlugins",o)},this.load=function()
{if(t.exists(u)&&"object"!==t.typeOf(u))return void
d();g=o.loaderstatus.LOADING,r.each(u,function(e,i){if(t.exists(i)){var
r=l.addPlugin(i);r.on(n.COMPLETE,d),r.on(n.ERROR,f)}});var
e=l.getPlugins();r.each(e,function(e){e.load()}),d()},this.destroy=function()
{y=!0,this.off()},this.getStatus=function(){return g}};return l}.apply(t,i),!(void
0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(22),n(48)],r=function(e,t){var
n=function(n){this.addPlugin=function(i){var r=e.getPluginName(i);return n[r]||(n[r]=new
t(i)),n[r]},this.getPlugins=function(){return n}};return n}.apply(t,i),!(void 0!==r&&
(e.exports=r))},,function(e,t,n){var i,r;i=[],r=function(){return{}}.apply(t,i),!(void
0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[n(53),n(2),n(1),n(63)],r=function(e,t,n,i){var r=[{name:"youtube",supports:function(e)
{return t.isYouTube(e.file,e.type)}},{name:"html5",supports:function(n){var r=
{aac:"audio/mp4",mp4:"video/mp4",f4v:"video/mp4",m4v:"video/mp4",mov:"video/mp4",mp3:"au
dio/mpeg",mpeg:"audio/mpeg",ogv:"video/ogg",ogg:"video/ogg",oga:"video/ogg",vorbis:"vide
o/ogg",webm:"video/webm",f4a:"video/aac",m3u8:"application/vnd.apple.mpegurl",m3u:"appli
cation/vnd.apple.mpegurl",hls:"application/vnd.apple.mpegurl"},o=n.file,a=n.type,s=e(n);
if(null!==s)return s;if(t.isRtmp(o,a))return!1;if(!r[a])return!1;if(i.canPlayType){var

l=i.canPlayType(r[a]);return!!l}return!1}},{name:"flash",supports:function(e){var i=
{flv:"video",f4v:"video",mov:"video",m4a:"video",m4v:"video",mp4:"video",aac:"video",f4a
:"video",mp3:"sound",mpeg:"sound",smil:"rtmp"},r=n.keys(i);if(!t.isFlashSupported())retu
rn!1;var o=e.file,a=e.type;return!!t.isRtmp(o,a)||n.contains(r,a)}}];return
r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[n(9),n(37),n(101),n(1),n(105)],r=function(e,t,i,r,o){function a(e){this.config=e||
{},this.providers=this.reorderProviders(this.config.primary)}a.loaders=
{html5:function(e){n.e(5,function(require){var t=n(70);s(t),e(t)})},flash:function(e)
{n.e(6,function(require){var t=n(52);s(t),e(t)})},youtube:function(e)
{n.e(9,function(require){var t=n(54);s(t),e(t)})}};var s=a.registerProvider=function(n)
{var a=n.getName().name;if(!i[a]){if(!r.find(t,r.matches({name:a})))
{if(!r.isFunction(n.supports))throw new Error("Tried to register a provider with an
invalid
object");t.unshift({name:a,supports:n.supports})}o(n.prototype,e),i[a]=n}};return
r.extend(a.prototype,{load:function(e){return Promise.all(r.map(e,function(e){return new
Promise(function(t){var n=a.loaders[e.name];n?
n(t):t()})}))},reorderProviders:function(e){var n=r.clone(t);if("flash"===e){var
i=r.indexOf(n,r.findWhere(n,{name:"flash"})),o=n.splice(i,1)
[0],a=r.indexOf(n,r.findWhere(n,{name:"html5"}));n.splice(a,0,o)}return
n},providerSupports:function(e,t){return e.supports(t)},required:function(e,t){var
n=this,i=this.reorderProviders(t);return e=e.slice(),r.compact(r.map(i,function(t)
{for(var i=!1,r=e.length;r--;){var
o=e[r],a=n.providerSupports(t,o.sources[0]);a&&e.splice(r,1),i=i||a}if(i)return
t}))},choose:function(e){e=r.isObject(e)?e:{};for(var
t=this.providers.length,n=0;n<t;n++){var
o=this.providers[n];if(this.providerSupports(o,e)){var a=t-n1;return{priority:a,name:o.name,type:e.type,providerToCheck:o,provider:i[o.name]}}}retur
n null}}),a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[],r=function(){var e=window.performance,t=!(!e||!e.now),n=1e3,i=function(){return t?
e.now():(new Date).getTime()},r=function(){var e=i(),t=e,r=function(){var e=i()-t;e>n?
e=n:e<0&&(e=0),t+=e};setInterval(r,50),Object.defineProperty(this,"currentTime",
{get:function(){return r(),t-e}})};return r.prototype.now=function(){return
this.currentTime},new r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var
i,r;i=[n(1)],r=function(e){return function(t){return
e.each(Array.prototype.slice.call(arguments,1),function(e){if(e)for(var n in e)n in t||
(t[n]=e[n])}),t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[],r=function(){return{hasClass:function(e,t){var n=" "+t+" ";return 1===e.nodeType&&("
"+e.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(n)>=0}}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},,function(e,t,n){var i,r;i=[n(1),n(3)],r=function(e,t){return
e.extend({get:function(e){return this.attributes=this.attributes||
{},this.attributes[e]},set:function(e,t){if(this.attributes=this.attributes||
{},this.attributes[e]!==t){var
n=this.attributes[e];this.attributes[e]=t,this.trigger("change:"+e,this,t,n)}},clone:fun
ction(){return e.clone(this.attributes)},change:function(e,t,n){var
i="change:"+e,r=this.get(e);return
this.on(i,t,n),t.call(n,this,r,r),this}},t)}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={};return
t.isDvr=function(e,t){return Math.abs(e)>=Math.max(t,0)},t.streamType=function(n,i){var
r=e.isUndefined(i)?120:i,o="VOD";return n===1/0?o="LIVE":n<0&&
(o=t.isDvr(n,r)?"DVR":"LIVE"),o},t}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=function(e,n,i)
{n=n||this,i=i||[];var r=window.jwplayer;if(r&&r.debug)return e.apply(n,i);try{return
e.apply(n,i)}catch(o){return new t(e.name,o)}},t=function(e,t)
{this.name=e,this.message=t.message||t.toString(),this.error=t};return{tryCatch:e,Error:
t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[n(2),n(20),n(11),n(5),n(1)],r=function(e,t,i,r,o){var a,s=t.style,l=
{back:!0,backgroundOpacity:50,edgeStyle:null,fontSize:14,fontOpacity:100,fontScale:.05,p
reprocessor:o.identity,windowOpacity:0};return a=function(r){function a()
{if(o.isFinite(P.fontSize)){var e=r.get("containerHeight");return e?
void(j=l.fontScale*P.fontSize/l.fontSize):void
r.once("change:containerHeight",a)}}function u(){var e=r.get("containerHeight");if(e)
{var t=Math.round(e*j);r.get("renderCaptionsNatively")?p(r.get("id"),t):s(b,
{fontSize:t+"px"})}}function c(e,t){u(),f(e,t),d(e,t)}function d(e,n){t.css("#"+e+" .jwtext-track-display",k,e),t.css("#"+e+" .jw-text-track-cue",n,e)}function f(n,i)
{e.isSafari()&&t.css("#"+n+" .jw-video::-webkit-media-text-track-display-backdrop",
{backgroundColor:i.backgroundColor},n,!0),t.css("#"+n+" .jw-video::-webkit-media-texttrack-display",k,n,!0),t.css("#"+n+" .jw-video::cue",i,n,!0)}function p(e,n)
{k.fontSize=n+"px",t.css("#"+e+" .jw-video::-webkit-media-text-trackdisplay",k,e,!0)}function h(e,n){var

i=n.color,r=n.fontOpacity;if((i||r!==l.fontOpacity)&&
(e.color=t.hexToRgba(i||"#ffffff",r)),n.back){var
o=n.backgroundColor,a=n.backgroundOpacity;o===l.backgroundColor&&a===l.backgroundOpacity
||(e.backgroundColor=t.hexToRgba(o,a))}else e.background="transparent";n.fontFamily&&
(e.fontFamily=n.fontFamily),n.fontStyle&&(e.fontStyle=n.fontStyle),n.fontWeight&&
(e.fontWeight=n.fontWeight),n.textDecoration&&
(e.textDecoration=n.textDecoration)}function g(e,n,i){var
r=t.hexToRgba("#000000",i);"dropshadow"===e?n.textShadow="0 2px 1px "+r:"raised"===e?
n.textShadow="0 0 5px "+r+", 0 1px 5px "+r+", 0 2px 5px "+r:"depressed"===e?
n.textShadow="0 -2px 1px "+r:"uniform"===e&&(n.textShadow="-2px 0 1px "+r+",2px 0 1px
"+r+",0 -2px 1px "+r+",0 2px 1px "+r+",-1px 1px 1px "+r+",1px 1px 1px "+r+",1px -1px 1px
"+r+",1px 1px 1px "+r)}function v(e){r.get("renderCaptionsNatively")||
(E=e,this.selectCues(y,E))}function m()
{r.get("renderCaptionsNatively")||n.e(10,function(require){n(51),C=window.WebVTT})}var
y,w,E,b,A,L,C,j,k,P={};b=document.createElement("div"),b.className="jw-captions jwreset",this.show=function(){i.addClass(b,"jw-captions-enabled")},this.hide=function()
{i.removeClass(b,"jw-captions-enabled")},this.populate=function(e)
{if(!r.get("renderCaptionsNatively"))return w=[],y=e,e?void this.selectCues(e,E):(w=
[],void this.renderCues())},this.resize=function()
{u(),this.renderCues(!0)},this.renderCues=function(e)
{e=!!e,C&&C.processCues(window,w,b,e)},this.selectCues=function(e,t){var
n,i;e&&e.data&&t&&(i=this.getAlignmentPosition(e,t),i!==!1&&
(n=this.getCurrentCues(e.data,i),this.updateCurrentCues(n),this.renderCues(!0)))},this.g
etCurrentCues=function(e,t){return o.filter(e,function(e){return t>=e.startTime&&
(!e.endTime||t<=e.endTime)})},this.updateCurrentCues=function(e){return e.length?
o.difference(e,w).length&&(i.addClass(A,"jw-captions-window-active"),w=e):w=
[],w},this.getAlignmentPosition=function(e,t){var n=e.source,i=t.metadata;return n?
i&&o.isNumber(i[n])?i[n]:void 0:e.embedded&&t.duration<0?t.positiont.duration:t.position},this.clear=function(){e.empty(b)},this.setup=function(e,n)
{A=document.createElement("div"),L=document.createElement("span"),A.className="jwcaptions-window jw-reset",L.className="jw-captions-text jwreset",P=o.extend({},l,n),j=l.fontScale,a(P.fontSize);var
i=P.windowColor,u=P.windowOpacity,d=P.edgeStyle;k={};var f={};h(f,P),
(i||u!==l.windowOpacity)&&
(k.backgroundColor=t.hexToRgba(i||"#000000",u)),g(d,f,P.fontOpacity),P.back||null!==d||g
("uniform",f),s(A,k),s(L,f),c(e,f),A.appendChild(L),b.appendChild(A),this.populate(r.get
("captionsTrack")),r.set("captions",P)},this.element=function(){return
b},r.on("change:playlistItem",function(){E=null,w=
[]},this),r.on("change:captionsTrack",function(e,t)
{this.populate(t)},this),r.mediaController.on("seek",function(){w=
[]},this),r.mediaController.on("time
seek",v,this),r.mediaController.on("subtitlesTrackData",function()
{this.selectCues(y,E)},this),r.on("itemReady",m,this)}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},,,,,,,,,,,,,,,,,,,,function(e,t,n){function i(e){return e&&e.__esModule?
e:{"default":e}}var r,o,a=n(143),s=i(a);r=[],o=function(){function e(e,t,n,i)
{return(0,s["default"])(e,t,n,i)}return e}.apply(t,r),!(void 0!==o&&
(e.exports=o))},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var
r,o,a=n(144),s=i(a);r=[n(6),n(2),n(4),n(1),n(3)],o=function(e,t,n,i,r){var o=t.style,a=
{linktarget:"_blank",margin:8,hide:!1,position:"top-right"};return function(l){function
u(){var e=l.get("dock"),n=!!(e&&e.length&&"topright"===d.position&&l.get("controls"));t.toggleClass(c,"jwbelow",n)}i.extend(this,r);var c,d,f=new Image;return this.setup=function()
{if(d=i.extend({},a,l.get("logo")),d.file)
{d.position=d.position||a.position,d.hide="true"===d.hide.toString(),c||
(c=t.createElement((0,s["default"])
(d.position,d.hide))),l.set("logo",d),l.change("dock",u),l.on("change:controls",u),f.onl
oad=function(){var e=
{backgroundImage:'url("'+this.src+'")',width:this.width,height:this.height};if(d.margin!
==a.margin){var t=/(\w+)-(\w+)/.exec(d.position);3===t.length&&(e["margin"+t[1]]=d.margin,e["margin"+t[2]]=d.margin)}o(c,e),l.set("logoWidth",e.width)},f.src=d.file;var r=new
e(c);r.on("click tap",function(e)
{t.exists(e)&&e.stopPropagation&&e.stopPropagation(),this.trigger(n.JWPLAYER_LOGO_CLICK,
{link:d.link,linktarget:d.linktarget})},this)}},this.setContainer=function(e)
{c&&e.appendChild(c)},this.element=function(){return c},this.position=function(){return
d.position},this.destroy=function()
{l.off("change:dock",u),l.off("change:controls",u),f.onload=null},this}}.apply(t,r),!
(void 0!==o&&(e.exports=o))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t)
{function n(e,t)

{t.off("change:mediaType",null,this),t.on("change:mediaType",function(t,n)
{"audio"===n&&this.setImage(e.get("playlistItem").image)},this)}function i(e,n){var
i=e.get("autostart")&&!t.isMobile()||e.get("item")>0;return i?
(this.setImage(null),e.off("change:state",null,this),void
e.on("change:state",function(e,t){"complete"!==t&&"idle"!==t&&"error"!==t||
(this.setImage(n.image),this.resize(null,null,e.get("stretching")))},this)):void
this.setImage(n.image)}var r=function(e)
{this.model=e,e.on("change:playlistItem",i,this),e.on("change:mediaModel",n,this)};retur
n e.extend(r.prototype,{setup:function(e){this.el=e;var
t=this.model.get("playlistItem");t&&this.setImage(t.image)},setImage:function(n){var
i=this.image;i&&
(i.onload=null,this.image=null),this.model.off("change:state",null,this);var
r="";e.isString(n)&&(r='url("'+n+'")',i=this.image=new Image,i.src=n),t.style(this.el,
{backgroundImage:r})},resize:function(e,n,i){if("uniform"===i){if(e&&
(this.playerAspectRatio=e/n),!this.playerAspectRatio)return;var
r=this.image,o=null;if(r){if(0===r.width){var a=this;return void(r.onload=function()
{a.resize(e,n,i)})}var s=r.width/r.height;Math.abs(this.playerAspectRatio-s)<.09&&
(o="cover")}t.style(this.el,{backgroundSize:o})}},element:function(){return
this.el}}),r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=
[n(1),n(2)],r=function(e,t){var n=function(e)
{this.model=e,this.model.on("change:playlistItem",this.playlistItem,this)};return
e.extend(n.prototype,{hide:function(){this.el.style.display="none"},show:function()
{this.el.style.display=""},setup:function(e){this.el=e;var
t=this.el.getElementsByTagName("div");this.title=t[0],this.description=t[1],this.model.g
et("playlistItem")&&this.playlistItem(this.model,this.model.get("playlistItem")),this.mo
del.on("change:logoWidth",this.update,this),this.model.on("change:dock",this.update,this
)},update:function(e){var n=
{paddingLeft:0,paddingRight:0},i=e.get("controls"),r=e.get("dock"),o=e.get("logo");if(o)
{var a=1*(""+o.margin).replace("px",""),s=e.get("logoWidth")+(isNaN(a)?0:a);"topleft"===o.position?n.paddingLeft=s:"top-right"===o.position&&
(n.paddingRight=s)}if(i&&r&&r.length){var
l=56*r.length;n.paddingRight=Math.max(n.paddingRight,l)}t.style(this.el,n)},playlistItem
:function(e,t){if(e.get("displaytitle")||e.get("displaydescription")){var
n="",i="";t.title&&e.get("displaytitle")&&
(n=t.title),t.description&&e.get("displaydescription")&&
(i=t.description),this.updateText(n,i)}else this.hide()},updateText:function(e,t)
{this.title.innerHTML=e,this.description.innerHTML=t,this.title.firstChild||this.descrip
tion.firstChild?this.show():this.hide()},element:function(){return
this.el}}),n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t){"use
strict";Object.defineProperty(t,"__esModule",{value:!0});var
n=t.CONTROLBAR_ONLY_HEIGHT=44;t.isAudioMode=function(e){var
t=e.get("height");if(e.get("aspectratio"))return!1;if("string"==typeof
t&&t.indexOf("%")>-1)return!1;var i=1*t||NaN;return i=isNaN(i)?
e.get("containerHeight"):i,!!i&&(i&&i<=n)}},function(e,t,n){"use strict";function i(e)
{var t=0;return e>=1280?t=7:e>=960?t=6:e>=800?t=5:e>=640?t=4:e>=540?t=3:e>=420?
t=2:e>=320&&(t=1),t}function r(e,t){var n="jw-breakpoint-"+t;o.replaceClass(e,/jwbreakpoint-\d+/,n)}Object.defineProperty(t,"__esModule",
{value:!0}),t.getBreakpoint=i,t.setBreakpoint=r;var o=n(11)},function(e,t,n){function
i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var
r,o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var
i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&
(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return
n&&e(t.prototype,n),i&&e(t,i),t}}();r=[n(6),n(4),n(3),n(1)],o=function(e,t,n,r){return
function(){function o(t,a)
{i(this,o),r.extend(this,n),this.revertAlternateClickHandlers(),this.domElement=a,this.m
odel=t;var s={enableDoubleTap:!0,useMove:!0};this.ui=new e(a,r.extend(s,s)).on({"click
tap":this.clickHandler,"doubleClick doubleTap":function(){return
this.alternateDoubleClickHandler?void this.alternateDoubleClickHandler():void
this.trigger("doubleClick")},move:function(){this.trigger("move")},over:function()
{this.trigger("over")},out:function(){this.trigger("out")}},this)}return a(o,
[{key:"destroy",value:function(){this.ui&&
(this.ui.destroy(),this.ui=this.domElement=this.model=null,this.revertAlternateClickHand
lers())}},{key:"clickHandler",value:function(e)
{if(!this.model.get("flashBlocked"))return this.alternateClickHandler?void
this.alternateClickHandler(e):void
this.trigger(e.type===t.touchEvents.CLICK?"click":"tap")}},
{key:"element",value:function(){return this.domElement}},
{key:"setAlternateClickHandlers",value:function(e,t)
{this.alternateClickHandler=e,this.alternateDoubleClickHandler=t||null}},

{key:"revertAlternateClickHandlers",value:function()
{this.alternateClickHandler=null,this.alternateDoubleClickHandler=null}}]),o}
()}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,r;i=
[n(11)],r=function(e){return function(t){var n=!1,i=function(){n=!1,e.removeClass(t,"jwno-focus")},r=function(e){e.target&&e.target.blur&&e.target.blur()},o=function()
{n=!0,e.addClass(t,"jw-no-focus")},a=function(){n||i()};return
t.addEventListener("focus",a),t.addEventListener("blur",i),t.addEventListener("mousedown
",o),t.addEventListener("mouseup",r),
{destroy:function()
{t.removeEventListener("focus",a),t.removeEventListener("blur",i),t.removeEventListener(
"mousedown",o),t.removeEventListener("mouseup",r)}}}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=
["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"]
;return function(t,n,i){for(var
r=t.requestFullscreen||t.webkitRequestFullscreen||t.webkitRequestFullScreen||t.mozReques
tFullScreen||t.msRequestFullscreen,o=n.exitFullscreen||n.webkitExitFullscreen||n.webkitC
ancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen,a=!(!r||!o),s=e.length;s-;)n.addEventListener(e[s],i);return{events:e,supportsDomFullscreen:function(){return
a},requestFullscreen:function(){r.apply(t)},exitFullscreen:function()
{o.apply(n)},fullscreenElement:function(){return
n.fullscreenElement||n.webkitCurrentFullScreenElement||n.mozFullScreenElement||n.msFulls
creenElement},destroy:function(){for(s=e.length;s-;)n.removeEventListener(e[s],i)}}}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:
{"default":e}}function r(){var
e=window.IntersectionObserver;window.IntersectionObserver&&!d&&(d=new e(function(e)
{if(e&&e.length)for(var t=e.length;t--;)for(var n=e[t],i=c.length;i--;){var
r=c[i];if(n.target===r.getContainer())
{r.model.set("intersectionRatio",n.intersectionRatio);break}}},{threshold:
[0,.25,.5,.75,1]}))}function o(){(0,u.cancelAnimationFrame)(f),f=
(0,u.requestAnimationFrame)(function(){c.forEach(function(e)
{e.updateBounds()}),c.forEach(function(e)
{e.model.get("visibility")&&e.updateStyles()}),c.forEach(function(e)
{e.checkResized()})})}function a(){c.forEach(function(e){e.model.set("activeTab",
(0,l["default"])())})}Object.defineProperty(t,"__esModule",{value:!0});var
s=n(55),l=i(s),u=n(61),c=[],d=void
0,f=-1;document.addEventListener("visibilitychange",a),document.addEventListener("webkit
visibilitychange",a),window.addEventListener("resize",o),window.addEventListener("orient
ationchange",o),window.addEventListener("beforeunload",function()
{document.removeEventListener("visibilitychange",a),document.removeEventListener("webkit
visibilitychange",a),window.removeEventListener("resize",o),window.removeEventListener("
orientationchange",o)}),t["default"]={add:function(e){c.push(e)},remove:function(e){var
t=c.indexOf(e);t!==-1&&c.splice(t,1)},size:function(){return
c.length},observe:function(e){r();try{d.unobserve(e)}catch(t)
{}d.observe(e)},unobserve:function(e){d&&d.unobserve(e)}}},function(e,t){"use
strict";function n(e,t,n){if(e.get("fullscreen"))return 1;if(!e.get("activeTab"))return
0;var r=e.get("intersectionRatio");return void 0===r&&(r=i(t,n)),r}function i(e,t){var
n=document.documentElement,i=document.body,o=
{top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bott
om:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight};if(!i.contains(
e))return 0;for(var a=e.getBoundingClientRect(),s=a,l=e.parentNode,u=!1;!u;){var
c=null;if(l&&1===l.nodeType?"visible"!==window.getComputedStyle(l).overflow&&(c=t(l)):
(u=!0,c=o),c&&(s=r(c,s),!s))return 0;l=l.parentNode}var
d=a.width*a.height,f=s.width*s.height;return d?f/d:0}function r(e,t){var
n=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom),r=Math.max(e.left,t.left),o=Math.m
in(e.right,t.right),a=o-r,s=i-n;return a>=0&&s>=0&&
{top:n,bottom:i,left:r,right:o,width:a,height:s}}Object.defineProperty(t,"__esModule",
{value:!0}),t["default"]=n},function(e,t,n){function i(e){return e&&e.__esModule?e:
{"default":e}}var
r,o,a=n(145),s=i(a),l=n(135),u=n(140),c=i(u),d=n(141),f=i(d),p=n(55),h=i(p),g=n(61),v=n(
136);r=
[n(4),n(5),n(3),n(2),n(1),n(139),n(138),n(137),n(111),n(132),n(133),n(134)],o=function(e
,t,i,r,o,a,u,d,p,m,y,w){var E=r.style,b=r.bounds,A=r.isMobile(),L=r.isIE(),C=!1;return
function(j,k){function P(){return{reason:"interaction"}}function _()
{(0,g.cancelAnimationFrame)(ce),ce=(0,g.requestAnimationFrame)(R)}function R()
{$.updateBounds(),$.updateStyles(),$.checkResized()}function x(e,t){var n=
(0,l.isAudioMode)(k);if(o.isNumber(e)&&o.isNumber(t)){var i=(0,v.getBreakpoint)(e);
(0,v.setBreakpoint)(Z,i);var a=i<2,s=k.get("timeSliderAbove"),u=!n&&s!==!1&&
(s||a);r.toggleClass(Z,"jw-flag-small-player",a),r.toggleClass(Z,"jw-flag-time-slider-

above",u),r.toggleClass(Z,"jw-orientation-portrait",t>e)}r.toggleClass(Z,"jw-flag-audioplayer",n),k.set("audioMode",n)}function T(e,t,n){if(e){var i=
{color:e,borderColor:e,stroke:e};r.css("#"+n+" .jw-color-active",i,n),r.css("#"+n+" .jwcolor-active-hover:hover",i,n)}if(t){var o=
{color:t,borderColor:t,stroke:t};r.css("#"+n+" .jw-color-inactive",o,n),r.css("#"+n+"
.jw-color-inactive-hover:hover",o,n)}}function S(){k.set("visibility",(0,f["default"])
(k,Z,b))}function I(e,t,n){t&&!n&&(K(le||e),$.updateStyles())}function M(n,i,o){var
a=new d(i,o,{useHover:!0});return a.on({click:function()
{$.trigger(e.JWPLAYER_DISPLAY_CLICK),k.get("controls")&&n.play(P())},tap:function()
{$.trigger(e.JWPLAYER_DISPLAY_CLICK);var o=i.get("state"),a=k.get("controls");if(a&&
(o===t.IDLE||o===t.COMPLETE||le&&le.get("state")===t.PAUSED)&&n.play(P()),a&&o===t.PAUSE
D)
{if(le||i.get("castActive")||i.mediaModel&&"audio"===i.mediaModel.get("mediaType"))retur
n;r.toggleClass(Z,"jw-flag-controls-hidden"),ie.renderCues(!0)}else ge&&(ge.showing?
ge.userInactive():ge.userActive())},doubleClick:function(){return
ge&&n.setFullscreen()},move:function(){return ge&&ge.userActive()},over:function()
{return ge&&ge.userActive()}}),a}function O(e,t){r.replaceClass(Z,/jw-skin-\S+/,t?"jwskin-"+t:"")}function D(e,t){r.replaceClass(Z,/jw-stretch-\S+/,"jw-stretch-"+t)}function
N(e,t){r.toggleClass(Z,"jw-flag-aspect-mode",!!t);var n=Z.querySelector(".jwaspect");E(n,{paddingTop:t||null})}function Y(e,t){r.toggleClass(Z,"jw-flag-flashblocked",t)}function F(e){e.link?
(j.pause(!0,P()),j.setFullscreen(!1),window.open(e.link,e.linktarget)):k.get("controls")
&&j.play(P())}function W(e,t,n){var i=
{width:e};n=!!n,n&&k.set("aspectratio",null),k.get("aspectratio")||
(i.height=t),r.exists(e)&&r.exists(t)&&
(k.set("width",e),k.set("height",t)),E(Z,i)}function J(e,t){if((e&&!isNaN(1*e)||
(e=k.get("containerWidth")))&&(t&&!isNaN(1*t)||(t=k.get("containerHeight"))))
{te&&te.resize(e,t,k.get("stretching"));var n=k.getVideo();if(n){var
i=n.resize(e,t,k.get("stretching"));i&&
(clearTimeout(ue),ue=setTimeout(J,250))}}}function B(){if(fe.supportsDomFullscreen())
{var e=fe.fullscreenElement();return!(!e||e.id!==k.get("id"))}return le?
le.getVideo().getFullScreen():k.getVideo().getFullScreen()}function V(e){var
t=k.get("fullscreen"),n=void 0!==e.jwstate?
e.jwstate:B();t!==n&&k.set("fullscreen",n),_(),clearTimeout(ue),ue=setTimeout(J,200)}fun
ction U(e,t){t?(r.addClass(e,"jw-flag-fullscreen"),E(document.body,
{overflowY:"hidden"}),ge&&ge.userActive()):(r.removeClass(e,"jw-flagfullscreen"),E(document.body,{overflowY:""})),J(),_()}function H()
{ge.userActive()}function z(e,t){var
n="audio"===t,i=k.getVideo(),o=i&&0===i.getName().name.indexOf("flash");r.toggleClass(Z,
"jw-flag-media-audio",n),n&&!o?
Z.insertBefore(te.el,ee):Z.insertBefore(te.el,ie.element())}function G(e,t){if(!le){var
n="LIVE"===t;r.toggleClass(Z,"jw-flag-live",n),$.setAltText(n?
e.get("localization").Live:"")}}function q(e,t){return t?void(t.name?
ne.updateText(t.name,t.message):ne.updateText(t.message,"")):void
ne.playlistItem(e,e.get("playlistItem"))}function K(e){if(k.get("viewSetup"))
{oe=e.get("state");var t=null;le&&(t=oe),ge&&(ge.instreamState=t),Q(oe)}}function Q(e)
{switch(k.get("controls")&&e!==t.PAUSED&&r.hasClass(Z,"jw-flag-controlshidden")&&r.removeClass(Z,"jw-flag-controls-hidden"),r.replaceClass(Z,/jw-state\S+/,"jw-state-"+e),e===t.COMPLETE&&j.setFullscreen(!1),e){case t.IDLE:case t.ERROR:case
t.COMPLETE:ie.hide();break;default:ie.show(),e===t.PAUSED&&ge&&!ge.showing&&ie.renderCue
s(!0)}}function X(){!ge||le||A||ge.userActive()}var $=o.extend(this,i,
{isSetup:!1,api:j,model:k});o.extend(k.attributes,{containerWidth:void
0,containerHeight:void 0,mediaContainer:void 0,fullscreen:!1,inDom:void 0,iFrame:void
0,activeTab:void 0,intersectionRatio:void 0,visibility:void 0,viewable:void
0,viewSetup:!1,audioMode:void 0,touchMode:void 0,altText:"",cues:void
0,castClicked:!1,scrubbing:!1,logoWidth:0});var Z=r.createElement((0,s["default"])
(k.get("id"),k.get("localization").player)),ee=Z.querySelector(".jw-media"),te=new
y(k),ne=new w(k),ie=void 0,re=void 0,oe=void 0,ae=void 0,se=void 0,le=void
0,ue=-1,ce=-1,de=void 0,fe=void 0,pe=void 0,he=null,ge=void
0;this.updateBounds=function(){(0,g.cancelAnimationFrame)(ce);var
e=document.body.contains(Z),t=b(Z),n=Math.round(t.width),i=Math.round(t.height);return
n===ae&&i===se?(ae&&se||_(),void k.set("inDom",e)):(n&&i||ae&&se||_(),(n||i||e)&&
(k.set("containerWidth",n),k.set("containerHeight",i)),k.set("inDom",e),void(e&&c["defau
lt"].observe(Z)))},this.updateStyles=function(){var
e=k.get("containerWidth"),t=k.get("containerHeight");k.get("controls")&&x(e,t),ge&&ge.re
size(e,t),J(e,t),ie.resize()},this.checkResized=function(){var
t=k.get("containerWidth"),n=k.get("containerHeight");if(t!==ae||n!==se)
{ae=t,se=n,$.trigger(e.JWPLAYER_RESIZE,{width:t,height:n});var i=(0,v.getBreakpoint)
(t);he!==i&&(he=i,$.trigger(e.JWPLAYER_BREAKPOINT,

{breakpoint:he}))}},this.handleColorOverrides=function(){function e(e,n,i,o)
{e=r.prefix(e,"#"+t+(o?"":" "));var a={};a[n]=i,r.css(e.join(", "),a,t)}var
t=k.get("id"),n=k.get("skinColorActive"),i=k.get("skinColorInactive"),o=k.get("skinColor
Background");if(n&&(e([".jw-button-color.jw-toggle",".jw-button-color:hover",".jwbutton-color.jw-toggle.jw-off:hover",".jw-option:not(.jw-active-option):hover",".jwnextup-header"],"color",n),e([".jw-option.jw-active-option",".jwprogress"],"background","none "+n)),i&&(e([".jw-text",".jw-option",".jw-buttoncolor",".jw-toggle.jw-off",".jw-skip .jw-skip-icon",".jw-nextupbody"],"color",i),e([".jw-cue",".jw-knob",".jw-active-option",".jw-nextupheader"],"background","none "+i)),o){if(e([".jw-background-color"],"background","none
"+o),k.get("timeSliderAbove")!==!1){var a="transparent linear-gradient(180deg,
"+r.getRgba(o,0)+" 0%, "+r.getRgba(o,.25)+" 30%, "+r.getRgba(o,.4)+" 70%,
"+r.getRgba(o,.5)+") 100%";e([".jw-flag-time-slider-above .jw-background-color.jwcontrolbar"],"background",a,!0)}e([".jw-flag-time-slider-above .jw-background-color.jwslider-time"],"background","transparent",!0)}T(n,i,t)},this.setup=function(){var
t=this;te.setup(Z.querySelector(".jw-preview")),ne.setup(Z.querySelector(".jwtitle")),re=new m(k),re.setup(),re.setContainer(Z),re.on(e.JWPLAYER_LOGO_CLICK,F),ie=new
p(k),ie.setup(Z.id,k.get("captions")),Z.insertBefore(ie.element(),ne.element()),de=M(j,k
,ee),pe=u(Z),fe=a(Z,document,V),Z.addEventListener("focus",X),k.on("change:errorEvent",q
),k.on("change:hideAdsControls",function(e,t){r.toggleClass(Z,"jw-flag-ads-hidecontrols",t)}),k.on("change:scrubbing",function(e,t){r.toggleClass(Z,"jw-flagdragging",t)}),k.mediaController.on("fullscreenchange",V),k.change("mediaModel",function
(e,n){n.change("mediaType",z,t),n.on("change:visualQuality",function()
{J()},t)}),k.change("skin",O,this),k.change("stretching",D),k.change("flashBlocked",Y);v
ar
i=k.get("width"),o=k.get("height");W(i,o),k.change("aspectratio",N),k.get("controls")?
x(i,o):r.addClass(Z,"jw-flag-controls-hidden"),C||(C=!0,n(173)),L&&r.addClass(Z,"jwie"),k.get("skin-loading")===!0&&(r.addClass(Z,"jw-flag-skinloading"),k.once("change:skin-loading",function(){r.removeClass(Z,"jw-flag-skinloading")})),this.handleColorOverrides(),k.set("mediaContainer",ee),k.set("iFrame",r.isI
frame()),k.set("activeTab",(0,h["default"])()),k.set("touchMode",A&&("string"==typeof
o||o>=l.CONTROLBAR_ONLY_HEIGHT)),c["default"].add(this),this.isSetup=!0,k.set("viewSetup
",!0),k.set("inDom",document.body.contains(Z))},this.init=function()
{this.updateBounds(),k.change("state",K),k.on("change:fullscreen",me),k.on("change:activ
eTab",S),k.on("change:fullscreen",S),k.on("change:intersectionRatio",S),k.on("change:vis
ibility",I),S(),1!==c["default"].size()||k.get("visibility")||I(k,1,0),ae=se=null,this.c
heckResized()};var ve=function(e,t){t&&K(le||k)};this.addControls=function(e)
{ge=e,r.removeClass(Z,"jw-flag-controls-hidden"),E(ee,
{cursor:"pointer"}),k.change("streamType",G,this),e.enable(j,k),e.addActiveListeners(re.
element());var n=e.logoContainer();n&&re.setContainer(n),se&&
(x(ae,se),e.resize(ae,se),ie.renderCues(!0)),e.on("userActive userInactive",function()
{oe!==t.PLAYING&&oe!==t.BUFFERING||ie.renderCues(!0)});var i=Z.querySelector(".jwoverlays");i.addEventListener("mousemove",H)},this.removeControls=function()
{re.setContainer(Z),ge&&
(ge.removeActiveListeners(re.element()),ge.disable(),ge=null);var
e=document.querySelector(".jwoverlays");e&&e.removeEventListener("mousemove",H),r.addClass(Z,"jw-flag-controlshidden"),E(ee,{cursor:""})};var me=function(e,t){var
n=k.getVideo();t&&ge&&k.get("autostartMuted")&&ge.unmuteAutoplay(j,k),fe.supportsDomFull
screen()?(t?fe.requestFullscreen():fe.exitFullscreen(),U(Z,t)):L?U(Z,t):
(le&&le.getVideo()&&le.getVideo().setFullscreen(t),n.setFullscreen(t)),n&&0===n.getName(
).name.indexOf("flash")&&n.setFullscreen(t)};this.resize=function(e,t){var
n=!0;W(e,t,n),R()},this.resizeMedia=J,this.setupInstream=function(e)
{this.instreamModel=le=e,le.on("change:controls",ve,this),le.on("change:state",K,this),r
.addClass(Z,"jw-flag-ads"),ge&&ge.userActive()},this.setAltText=function(e)
{k.set("altText",e)},this.destroyInstream=function(){if(le&&
(le.off(null,null,this),le=null),this.setAltText(""),r.removeClass(Z,["jw-flag-ads","jwflag-ads-hide-controls"]),k.set("hideAdsControls",!1),k.getVideo){var
e=k.getVideo();e.setContainer(ee)}G(k,k.get("streamType")),de.revertAlternateClickHandle
rs()},this.addCues=function(e){k.set("cues",e)},this.clickHandler=function(){return
de},this.getContainer=this.element=function(){return
Z},this.controlsContainer=function(){return ge?
ge.element():null},this.getSafeRegion=function(e){var t=
{x:0,y:0,width:ae||0,height:se||0};return ge&&(e=e||!r.exists(e),e&&(t.height=ge.controlbarHeight())),t},this.setCaptions=function(e)
{ie.clear(),ie.setup(k.get("id"),e),ie.resize()},this.destroy=function()
{c["default"].unobserve(Z),c["default"].remove(this),this.isSetup=!1,this.off(),
(0,g.cancelAnimationFrame)(ce),clearTimeout(ue),Z.removeEventListener("focus",X),pe&&
(pe.destroy(),pe=null),fe&&

(fe.destroy(),fe=null),k.mediaController&&k.mediaController.off("fullscreenchange",V),ge
&&ge.disable(),le&&this.destroyInstream(),de&&(de.destroy(),de=null),re&&
(re.destroy(),re=null),r.clearCss(k.get("id"))}}}.apply(t,r),!(void 0!==o&&
(e.exports=o))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",
{value:!0}),t["default"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return'<div
id="'+e+'" class="jw-skin-'+t+' jw-error jw-reset"><div class="jw-title jw-reset">'+
('<div class="jw-title-primary jw-reset">'+n+"</div>")+('<div class="jw-title-secondary
jw-reset">'+i+"</div>")+'</div><div class="jw-display-container jw-reset"><div
class="jw-display-icon-container jw-background-color jw-reset"><div class="jw-icon jwicon-display jw-reset" aria-hidden="true"></div></div></div></div>'}},function(e,t){"use
strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){var
n=t?" jw-hide":"";return'<div class="jw-logo jw-logo-'+e+n+' jw-reset">
</div>'}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",
{value:!0}),t["default"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:"";return'<div id="'+e+'" class="jwplayer jw-reset jw-state-setup"
tabindex="0" aria-label="'+t+'"><div class="jw-aspect jw-reset"></div><div class="jwmedia jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jwreset"><div class="jw-title-primary jw-reset"></div><div class="jw-title-secondary jwreset"></div></div><div class="jw-overlays jw-reset"></div></div>'}},function(e,t,n){var
i,r;i=
[n(67),n(1),n(24),n(2),n(7),n(6),n(72),n(13),n(73),n(63),n(4),n(5),n(46),n(30),n(44),n(1
8)],r=function(e,t,n,i,r,o,a,s,l,u,c,d,f,p,h,g){var v={};return
v.api=e,v._=t,v._=t,v.version=n,v.utils=t.extend(i,r,
{key:a,extend:t.extend,scriptloader:s,rssparser:h,tea:l,UI:o}),v.utils.css.style=v.utils
.style,v.vid=u,v.events=t.extend({},c,{state:d}),v.playlist=t.extend({},f,
{item:p}),v.plugins=g,v}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var
i,r;i=[n(85),n(14),n(161),n(25),n(23),n(1)],r=function(e,t,i,r,o,a){var
s=e.prototype.setup;return e.prototype.setup=function(e,l){function u(){var
e=p.get("cast");return a.isObject(e)&&g("casting")}function c(){var
e=p.getVideo(),t=p.get("cast")||{};u()?
(!t.customAppId&&r.containsDrm(p)||d.apply(this),f.apply(this)):e&&e.video&&
(e.video.webkitWirelessVideoPlaybackDisabled=!0)}function d(){n.e(4,function(require)
{if(window.chrome&&o.isChrome()){var e=n(68);this._castController=new
e(this,p),this.castToggle=this._castController.castToggle.bind(this._castController)}}.b
ind(this))}function f()
{window.WebKitPlaybackTargetAvailabilityEvent&&n.e(8,function(require){var
e=n(66);this._airplayController=new
e(this,p),this.castToggle=this._airplayController.airplayToggle.bind(this._airplayContro
ller)}.bind(this))}s.apply(this,arguments);var
p=this._model,h=p.get("edition"),g=t(h),v=i.setup(this._view);e.analytics&&
(e.sdkplatform=e.sdkplatform||e.analytics.sdkplatform);var
m=this;l.getAdBlock=v.getAdBlock,this.on("playlistItem",function()
{v.onReady.apply(m)}),this.once("ready",c,this)},e}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=
[n(72),n(14),n(1),n(2),n(59),n(91),n(25)],r=function(e,t,i,r,o,a,s){function l(e,t,n)
{if(t){var i=t.client;delete t.client,/\.(js|swf)$/.test(i||"")||
(i=o.repo()+n),e[i]=t}}function u(e,n){var r=i.clone(n.get("plugins"))||
{},a=n.get("edition"),s=t(a),u=/^(vast|googima|freewheel)$/,c=/\.
(js|swf)$/,d=o.repo(),f=i.clone(n.get("advertising"));if(s("ads")&&f&&(c.test(f.client)?
r[f.client]=f:u.test(f.client)&&(r[d+f.client+".js"]=f),delete f.client),s("jwpsrv"))
{var p=n.get("analytics");i.isObject(p)||(p=
{}),l(r,p,"jwpsrv.js")}l(r,n.get("ga"),"gapro.js"),l(r,n.get("sharing"),"sharing.js");va
r h=n.get("related"),g=i.isObject(h),v=n.get("visualplaylist")!==!1||g;g||(h=
{disableRelated:!0}),h.showDockButton=v,l(r,h,"related.js");var
m=n.get("mobileSdk");if(!m){var y=n.get("playlist");i.some(y,function(e)
{if(e.stereomode&&e.stereomode.length>0)return l(r,n.get("vr")||
{},"vr.js"),!0})}n.set("plugins",r),e()}function c(t,i){var
s=i.get("key")||window.jwplayer&&window.jwplayer.key,l=new
e(s),u=l.edition();if(i.set("key",s),i.set("edition",u),"unlimited"===u){var
c=r.getScriptPath("jwplayer.js");if(!c)return void a.error(t,"Error setting up
player","Could not locate jwplayer.js script
tag");n.p=c,r.repo=o.repo=o.loadFrom=function(){return
c}}i.updateProviders(),"invalid"===u?a.error(t,"Error setting up player",(void
0===s?"Missing":"Invalid")+" license key"):t()}function d(e,t){s.containsDrm(t)?
s.probe(e,t.get("edition")):e()}function f(){var e=a.getQueue();return e.CHECK_KEY=
{method:c,depends:["LOAD_BASE64_POLYFILL"]},e.PROBE_DRM_SUPPORT={method:d,depends:
["CHECK_KEY","LOAD_PROMISE_POLYFILL"]},e.FILTER_PLUGINS={method:u,depends:

["CHECK_KEY"]},e.FILTER_PLAYLIST.depends.push("PROBE_DRM_SUPPORT"),e.LOAD_PLUGINS.depend
s.push("FILTER_PLUGINS"),e}return{getQueue:f}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){var i,r;i=[n(93),n(146),n(1)],r=function(e,t,n){var
i=window,r=n.extend(e,t);return"function"==typeof
i.define&&i.define.amd&&i.define([],function(){return r}),i.jwplayer?
i.jwplayer:r}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,,,,,function(e,t,n){var
i,r;i=[],r=function(){function e(){var e=document.createElement("div");return
e.className=n,e.innerHTML="&nbsp;",e.style.width="1px",e.style.height="1px",e.style.posi
tion="absolute",e.style.background="transparent",e}function t(t){function i()
{if(a)return!0;var e=this;r()&&e.trigger("adBlock")}function r(){return
null!==s.offsetParent&&s.className===n&&""!==s.innerHTML&&0!==s.clientHeight||
(a=!0),a}function o(){return a}var a=!1,s=e();return t.element().appendChild(s),
{onReady:i,getAdBlock:o}}var n="afs_ads";return{setup:t}}.apply(t,i),!(void 0!==r&&
(e.exports=r))},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var
r,o,a=n(164),s=i(a);r=[n(2),n(4),n(6),n(3),n(1)],o=function(e,t,n,i,r){var o=function(e)
{this.model=e,this.setup()};return r.extend(o.prototype,i,{setup:function()
{this.destroy(),this.skipMessage=this.model.get("skipText"),this.skipMessageCountdown=th
is.model.get("skipMessage"),this.setWaitTime(this.model.get("skipOffset"));var t=
(0,s["default"])
();this.el=e.createElement(t),this.skiptext=this.el.getElementsByClassName("jwskiptext")[0],this.skipAdOnce=r.once(this.skipAd.bind(this)),new n(this.el).on("click
tap",r.bind(function()
{this.skippable&&this.skipAdOnce()},this)),this.model.on("change:duration",this.onChange
Duration,this),this.model.on("change:position",this.onChangePosition,this),this.onChange
Duration(this.model,this.model.get("duration")),this.onChangePosition(this.model,this.mo
del.get("position"))},updateMessage:function(e)
{this.skiptext.innerHTML=e},updateCountdown:function(e)
{this.updateMessage(this.skipMessageCountdown.replace(/xx/gi,Math.ceil(this.waitTimee)))},onChangeDuration:function(t,n){if(n){if(this.waitPercentage)
{if(!n)return;this.itemDuration=n,this.setWaitTime(this.waitPercentage),delete
this.waitPercentage}e.removeClass(this.el,"jw-hidden")}},onChangePosition:function(t,n)
{this.waitTime-n>0?this.updateCountdown(n):
(this.updateMessage(this.skipMessage),this.skippable=!0,e.addClass(this.el,"jwskippable"))},element:function(){return this.el},setWaitTime:function(t)
{if(r.isString(t)&&"%"===t.slice(-1)){var n=parseFloat(t);return
void(this.itemDuration&&!isNaN(n)?
this.waitTime=this.itemDuration*n/100:this.waitPercentage=t)}r.isNumber(t)?
this.waitTime=t:"string"===e.typeOf(t)?this.waitTime=e.seconds(t):isNaN(Number(t))?
this.waitTime=0:this.waitTime=Number(t)},skipAd:function()
{this.trigger(t.JWPLAYER_AD_SKIPPED)},destroy:function(){this.el&&
(this.el.removeEventListener("click",this.skipAdOnce),this.el.parentElement&&this.el.par
entElement.removeChild(this.el)),delete this.skippable,delete this.itemDuration,delete
this.waitPercentage}}),o}.apply(t,r),!(void 0!==o&&(e.exports=o))},,function(e,t){"use
strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function()
{return'<div class="jw-skip jw-background-color jw-hidden jw-reset"><span class="jw-text
jw-skiptext jw-reset"></span><span class="jw-icon jw-icon-inline jw-skip-icon jw-reset">
</span></div>'}},,,function(e,t,n){t=e.exports=n(75)(),t.push([e.id,".jwreset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;fontfamily:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;textalign:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;fontvariant:inherit;font-stretch:inherit;-webkit-tap-highlightcolor:rgba(255,255,255,0)}.jw-background-color{background:rgba(33,33,33,.8)}.jwknob,.jw-text{color:#cecece}.jw-knob{background-color:#fff}.jw-buttoncolor{color:#cecece}.jw-button-color:focus,:not(.jw-flag-touch) .jw-buttoncolor:hover{outline:none;color:#fff}.jw-toggle{color:#fff}.jw-toggle.jwoff{color:#cecece}.jw-toggle.jw-off:focus{color:#fff}.jwtoggle:focus{outline:none}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jwdisplay-icon-container{margin:0 .25em}.jw-display-icon-container .jwicon{color:#cecece}.jw-rail{background:hsla(0,0%,100%,.2)}.jwbuffer{background:hsla(0,0%,100%,.3)}.jw-progress{background:#fff}.jw-sliderhorizontal,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jwslider-horizontal .jw-rail{height:.3em}.jw-slider-horizontal .jw-knob{marginleft:-.3em}.jw-slider-vertical .jw-knob{margin-bottom:-.3em}.jw-slider-vertical .jwprogress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slidercontainer{width:.3em}.jw-menu,.jw-time-tip,.jw-volume-tip{border:0}.jw-menu,.jw-timetip{padding:.5em}.jw-volume-tip{padding:1em}.jw-skip{padding:.5em}.jw-skip .jw-skipicon,.jw-skip .jw-skiptext{color:#cecece}.jw-skip.jw-skippable:hover .jw-skip-icon,.jwskip.jw-skippable:hover .jw-text{color:#fff}.jw-dock-button .jw-text,.jw-time-tip .jwtext{color:#cecece}.jw-dock-button{background:rgba(33,33,33,.8)}:not(.jw-flag-touch)

.jw-dock-button:hover{background:#212121}.jw-icon-cast button{--connected-color:#fff;-disconnected-color:#cecece}.jw-icon-cast button:focus{--connected-color:#fff;-disconnected-color:#fff}.jw-icon-cast button.jw-off{--connected-color:#cecece}.jw-iconcast:hover button{--connected-color:#fff;--disconnected-color:#fff}.jw-nextupcontainer{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-nextupheader{background:rgba(33,33,33,.8);color:#fff}.jw-nextupbody{background:rgba(0,0,0,.8);color:#fff}.jw-nextup-thumbnail-visible+.jw-nextuptitle:after{background:-webkit-linear-gradient(top,transparent,#000);background:lineargradient(-180deg,transparent,#000)}.jw-nextup-close{color:#cecece}.jw-nextupclose:active,.jw-nextup-close:hover{color:#fff}.jwplayer:not(.jw-flag-touch):not(.jwerror):not(.jw-state-error):not(.jw-state-buffering) .jw-display-iconcontainer:hover,.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-stateerror):not(.jw-state-buffering) .jw-media:hover~.jw-controls .jw-display-icondisplay{background-color:#212121}.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jwstate-error):not(.jw-state-buffering) .jw-display-icon-container:hover .jwicon{color:#fff}.jw-color-active,:not(.jw-flag-touch) .jw-color-activehover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive,:not(.jw-flagtouch) .jw-color-inactive-hover:hover{color:#cecece;stroke:#cecece;bordercolor:#cecece}.jw-option{color:#cecece}.jw-option.jw-activeoption{color:#fff;background-color:hsla(0,0%,100%,.1)}:not(.jw-flag-touch) .jwoption:hover{color:#fff}.jwplayer{width:100%;fontsize:16px;position:relative;display:block;min-height:0;overflow:hidden;boxsizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkittouch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-userselect:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspectmode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jwaspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-nofocus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted
#585858}.jw-media,.jwpreview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwmedia{overflow:hidden}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jwbanner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto
0;left:0;right:0;bottom:0;display:block}.jw-captions,.jw-preview,.jw-title{pointerevents:none}.jw-logo,.jw-media{pointer-events:all}.jwplayer
video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto
;background:transparent}.jwplayer video::-webkit-media-controls-start-playbackbutton{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;objectfit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;objectfit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;objectfit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jwpreview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:10
0%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jwpreview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto
auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jwpreview{background-size:100% 100%}.jwtitle{display:none;position:absolute;top:0;width:100%;fontsize:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000
18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jwtitle-primary,.jw-title-secondary{padding:.75em 1.5em;minheight:2.5em;width:100%;color:#fff;white-space:nowrap;textoverflow:ellipsis;overflow:hidden}.jw-title-primary{font-weight:700}.jw-titlesecondary{margin-top:-.5em}.jw-flag-small-player .jw-title{background:-webkit-lineargradient(top,rgba(51,51,51,.75),rgba(51,51,51,0));background:lineargradient(180deg,rgba(51,51,51,.75),rgba(51,51,51,0));height:auto;padding:16px 0}.jwflag-small-player .jw-title-primary,.jw-flag-small-player .jw-title-secondary{minheight:inherit;padding:0 16px}.jw-flag-small-player .jw-titlesecondary{display:none;margin-top:5px}.jwcaptions{position:absolute;width:100%;height:100%;text-align:center;display:none;maxheight:calc(100% - 40px);letter-spacing:normal;word-spacing:normal;texttransform:none;text-indent:0;text-decoration:none;pointerevents:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jwcaptions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jwcaptions-window.jw-captions-window-active{display:inline-block}.jw-captionstext{color:#fff;background-color:#000;word-wrap:normal;word-break:normal;whitespace:pre-line;font-style:normal;font-weight:400;text-align:center;textdecoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5}.jw-text-trackcue{background-color:rgba(0,0,0,.5);color:#fff;padding:.1em .3em}.jwplayer video::webkit-media-controls{-webkit-box-pack:start;-webkit-justify-content:flex-start;justifycontent:flex-start}.jwplayer video::-webkit-media-text-track-container{max-

height:calc(100% - 40px);line-height:normal}.jwplayer video::-webkit-media-text-trackdisplay{min-width:-webkit-min-content}.jwplayer video::cue{backgroundcolor:rgba(0,0,0,.5)}.jwplayer video::-webkit-media-controls-panelcontainer{display:none}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointerevents:all;background-repeat:no-repeat;backgroundsize:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-flag-audio-player .jwlogo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-right.jwbelow{top:3.5em}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jwlogo-bottom-right{bottom:0;right:0}.jw-state-setup{background-color:transparent}.jwstate-setup .jw-logo{visibility:hidden}body .jw-error .jw-title,body .jwplayer.jw-stateerror .jw-title{display:block}body .jw-error .jw-title .jw-title-primary,body
.jwplayer.jw-state-error .jw-title .jw-title-primary{white-space:normal}body .jw-error
.jw-title .jw-title-secondary,body .jwplayer.jw-state-error .jw-title .jw-titlesecondary{display:block}body .jw-error{font-size:16px;backgroundcolor:#000;color:#fff;width:100%;height:100%;display:table;opacity:1;position:relative}.
jw-state-idle .jw-preview,.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jwflag-casting):not(.jw-flag-audio-player) .jw-preview,.jwplayer.jw-statecomplete:not(.jw-flag-casting):not(.jw-flag-audio-player) .jw-title,body .jw-error .jwpreview,body .jw-error .jw-title,body .jwplayer.jw-state-error .jw-preview,body
.jwplayer.jw-state-error .jw-title{display:block}.jw-state-idle .jwcaptions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jwcaptions{display:none}.jw-state-idle video::-webkit-media-text-trackcontainer,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body
.jwplayer.jw-state-error video::-webkit-media-text-trackcontainer{display:none}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flagskin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-media,.jwplayer.jw-flagskin-loading .jw-preview,.jwplayer.jw-flag-skin-loading .jw-rightclick,.jwplayer.jwflag-skin-loading .jw-title{display:none}.jwplayer.jw-flagfullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;zindex:1000;margin:0;position:fixed}body .jwplayer.jw-flag-flash-blocked .jwtitle{display:block}.jwplayer.jw-flag-controls-hidden .jw-captions{maxheight:none}.jwplayer.jw-flag-controls-hidden video::-webkit-media-text-trackcontainer{max-height:none}.jw-flag-audio-player:not(.jw-flag-flash-blocked) .jwmedia{visibility:hidden}.jw-flag-audio-player .jw-title{background:none}.jw-flag-audioplayer object{min-height:45px}",""]);
},,,,,,function(e,t,n){var i=n(167);"string"==typeof i&&(i=[["allplayers",i,""]]),n(42).style(i,"all-players"),i.locals&&(e.exports=i.locals)}]);

