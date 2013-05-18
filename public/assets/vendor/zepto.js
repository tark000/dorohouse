(function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(n){if(void 0===this||null===this)throw new TypeError;var e,i=Object(this),r=i.length>>>0,o=0;if("function"!=typeof n)throw new TypeError;if(0==r&&1==arguments.length)throw new TypeError;if(arguments.length>=2)e=arguments[1];else for(;;){if(o in i){e=i[o++];break}if(++o>=r)throw new TypeError}for(;r>o;)o in i&&(e=n.call(t,e,i[o],o,i)),o++;return e})})();var Zepto=function(){function t(t){return"[object Function]"==V.call(t)}function n(t){return t instanceof Object}function e(t){return n(t)&&t!=window&&t.__proto__==Object.prototype}function i(t){return t instanceof Array}function r(t){return"number"==typeof t.length}function o(t){return A.call(t,function(t){return null!=t})}function s(t){return t.length>0?x.fn.concat.apply([],t):t}function a(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(t){return t in P?P[t]:P[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function c(t,n){return"number"!=typeof n||Z[a(t)]?n:n+"px"}function f(t){var n,e;return C[t]||(n=S.createElement(t),S.body.appendChild(n),e=k(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"==e&&(e="block"),C[t]=e),C[t]}function l(t){return"children"in t?O.call(t.children):x.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function h(t,n,i){for(b in n)i&&e(n[b])?(e(t[b])||(t[b]={}),h(t[b],n[b],i)):n[b]!==w&&(t[b]=n[b])}function p(t,n){return n===w?x(t):x(t).filter(n)}function d(n,e,i,r){return t(e)?e.call(n,i,r):e}function m(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function v(t,n){var e=t.className,i=e&&e.baseVal!==w;return n===w?i?e.baseVal:e:(i?e.baseVal=n:t.className=n,void 0)}function g(t){var n;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(n=Number(t))?/^[\[\{]/.test(t)?x.parseJSON(t):t:n):t}catch(e){return t}}function y(t,n){n(t);for(var e in t.childNodes)y(t.childNodes[e],n)}var w,b,x,E,T,j,N=[],O=N.slice,A=N.filter,S=window.document,C={},P={},k=S.defaultView.getComputedStyle,Z={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},$=/^\s*<(\w+|!)[^>]*>/,z=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_=/^(?:body|html)$/i,q=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],D=S.createElement("table"),M=S.createElement("tr"),L={tr:S.createElement("tbody"),tbody:D,thead:D,tfoot:D,td:M,th:M,"*":S.createElement("div")},I=/complete|loaded|interactive/,F=/^\.([\w-]+)$/,B=/^#([\w-]*)$/,H=/^[\w-]+$/,V={}.toString,U={},J=S.createElement("div");return U.matches=function(t,n){if(!t||1!==t.nodeType)return!1;var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(e)return e.call(t,n);var i,r=t.parentNode,o=!r;return o&&(r=J).appendChild(t),i=~U.qsa(r,n).indexOf(t),o&&J.removeChild(t),i},T=function(t){return t.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""})},j=function(t){return A.call(t,function(n,e){return t.indexOf(n)==e})},U.fragment=function(t,n,i){t.replace&&(t=t.replace(z,"<$1></$2>")),n===w&&(n=$.test(t)&&RegExp.$1),n in L||(n="*");var r,o,s=L[n];return s.innerHTML=""+t,o=x.each(O.call(s.childNodes),function(){s.removeChild(this)}),e(i)&&(r=x(o),x.each(i,function(t,n){q.indexOf(t)>-1?r[t](n):r.attr(t,n)})),o},U.Z=function(t,n){return t=t||[],t.__proto__=arguments.callee.prototype,t.selector=n||"",t},U.isZ=function(t){return t instanceof U.Z},U.init=function(r,s){if(r){if(t(r))return x(S).ready(r);if(U.isZ(r))return r;var a;if(i(r))a=o(r);else if(n(r))a=[e(r)?x.extend({},r):r],r=null;else if($.test(r))a=U.fragment(r.trim(),RegExp.$1,s),r=null;else{if(s!==w)return x(s).find(r);a=U.qsa(S,r)}return U.Z(a,r)}return U.Z()},x=function(t,n){return U.init(t,n)},x.extend=function(t){var n,e=O.call(arguments,1);return"boolean"==typeof t&&(n=t,t=e.shift()),e.forEach(function(e){h(t,e,n)}),t},U.qsa=function(t,n){var e;return t===S&&B.test(n)?(e=t.getElementById(RegExp.$1))?[e]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(F.test(n)?t.getElementsByClassName(RegExp.$1):H.test(n)?t.getElementsByTagName(n):t.querySelectorAll(n))},x.contains=function(t,n){return t!==n&&t.contains(n)},x.isFunction=t,x.isObject=n,x.isArray=i,x.isPlainObject=e,x.inArray=function(t,n,e){return N.indexOf.call(n,t,e)},x.camelCase=T,x.trim=function(t){return t.trim()},x.uuid=0,x.support={},x.expr={},x.map=function(t,n){var e,i,o,a=[];if(r(t))for(i=0;t.length>i;i++)e=n(t[i],i),null!=e&&a.push(e);else for(o in t)e=n(t[o],o),null!=e&&a.push(e);return s(a)},x.each=function(t,n){var e,i;if(r(t)){for(e=0;t.length>e;e++)if(n.call(t[e],e,t[e])===!1)return t}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t;return t},x.grep=function(t,n){return A.call(t,n)},window.JSON&&(x.parseJSON=JSON.parse),x.fn={forEach:N.forEach,reduce:N.reduce,push:N.push,sort:N.sort,indexOf:N.indexOf,concat:N.concat,map:function(t){return x(x.map(this,function(n,e){return t.call(n,e,n)}))},slice:function(){return x(O.apply(this,arguments))},ready:function(t){return I.test(S.readyState)?t(x):S.addEventListener("DOMContentLoaded",function(){t(x)},!1),this},get:function(t){return t===w?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return N.every.call(this,function(n,e){return t.call(n,e,n)!==!1}),this},filter:function(n){return t(n)?this.not(this.not(n)):x(A.call(this,function(t){return U.matches(t,n)}))},add:function(t,n){return x(j(this.concat(x(t,n))))},is:function(t){return this.length>0&&U.matches(this[0],t)},not:function(n){var e=[];if(t(n)&&n.call!==w)this.each(function(t){n.call(this,t)||e.push(this)});else{var i="string"==typeof n?this.filter(n):r(n)&&t(n.item)?O.call(n):x(n);this.forEach(function(t){0>i.indexOf(t)&&e.push(t)})}return x(e)},has:function(t){return this.filter(function(){return n(t)?x.contains(this,t):x(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!n(t)?t:x(t)},last:function(){var t=this[this.length-1];return t&&!n(t)?t:x(t)},find:function(t){var n;return n=1==this.length?x(U.qsa(this[0],t)):this.map(function(){return U.qsa(this,t)})},closest:function(t,n){for(var e=this[0];e&&!U.matches(e,t);)e=e!==n&&e!==S&&e.parentNode;return x(e)},parents:function(t){for(var n=[],e=this;e.length>0;)e=x.map(e,function(t){return(t=t.parentNode)&&t!==S&&0>n.indexOf(t)?(n.push(t),t):void 0});return p(n,t)},parent:function(t){return p(j(this.pluck("parentNode")),t)},children:function(t){return p(this.map(function(){return l(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return p(this.map(function(t,n){return A.call(l(n.parentNode),function(t){return t!==n})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return x.map(this,function(n){return n[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==k(this,"").getPropertyValue("display")&&(this.style.display=f(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(n){var e=t(n);if(this[0]&&!e)var i=x(n).get(0),r=i.parentNode||this.length>1;return this.each(function(t){x(this).wrapAll(e?n.call(this,t):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){x(this[0]).before(t=x(t));for(var n;(n=t.children()).length;)t=n.first();x(t).append(this)}return this},wrapInner:function(n){var e=t(n);return this.each(function(t){var i=x(this),r=i.contents(),o=e?n.call(this,t):n;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){x(this).replaceWith(x(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=x(this);(t===w?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return x(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return x(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===w?this.length>0?this[0].innerHTML:null:this.each(function(n){var e=this.innerHTML;x(this).empty().append(d(this,t,n,e))})},text:function(t){return t===w?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var i;return"string"==typeof t&&e===w?0==this.length||1!==this[0].nodeType?w:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(i=this[0].getAttribute(t))&&t in this[0]?this[0][t]:i:this.each(function(i){if(1===this.nodeType)if(n(t))for(b in t)m(this,b,t[b]);else m(this,t,d(this,e,i,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&m(this,t)})},prop:function(t,n){return n===w?this[0]&&this[0][t]:this.each(function(e){this[t]=d(this,n,e,this[t])})},data:function(t,n){var e=this.attr("data-"+a(t),n);return null!==e?g(e):w},val:function(t){return t===w?this[0]&&(this[0].multiple?x(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(n){this.value=d(this,t,n,this.value)})},offset:function(t){if(t)return this.each(function(n){var e=x(this),i=d(this,t,n,e.offset()),r=e.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==e.css("position")&&(o.position="relative"),e.css(o)});if(0==this.length)return null;var n=this[0].getBoundingClientRect();return{left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,width:n.width,height:n.height}},css:function(t,n){if(2>arguments.length&&"string"==typeof t)return this[0]&&(this[0].style[T(t)]||k(this[0],"").getPropertyValue(t));var e="";for(b in t)t[b]||0===t[b]?e+=a(b)+":"+c(b,t[b])+";":this.each(function(){this.style.removeProperty(a(b))});return"string"==typeof t&&(n||0===n?e=a(t)+":"+c(t,n):this.each(function(){this.style.removeProperty(a(t))})),this.each(function(){this.style.cssText+=";"+e})},index:function(t){return t?this.indexOf(x(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return N.some.call(this,function(t){return this.test(v(t))},u(t))},addClass:function(t){return this.each(function(n){E=[];var e=v(this),i=d(this,t,n,e);i.split(/\s+/g).forEach(function(t){x(this).hasClass(t)||E.push(t)},this),E.length&&v(this,e+(e?" ":"")+E.join(" "))})},removeClass:function(t){return this.each(function(n){return t===w?v(this,""):(E=v(this),d(this,t,n,E).split(/\s+/g).forEach(function(t){E=E.replace(u(t)," ")}),v(this,E.trim()),void 0)})},toggleClass:function(t,n){return this.each(function(e){var i=x(this),r=d(this,t,e,v(this));r.split(/\s+/g).forEach(function(t){(n===w?!i.hasClass(t):n)?i.addClass(t):i.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],n=this.offsetParent(),e=this.offset(),i=_.test(n[0].nodeName)?{top:0,left:0}:n.offset();return e.top-=parseFloat(x(t).css("margin-top"))||0,e.left-=parseFloat(x(t).css("margin-left"))||0,i.top+=parseFloat(x(n[0]).css("border-top-width"))||0,i.left+=parseFloat(x(n[0]).css("border-left-width"))||0,{top:e.top-i.top,left:e.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||S.body;t&&!_.test(t.nodeName)&&"static"==x(t).css("position");)t=t.offsetParent;return t})}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(t){x.fn[t]=function(n){var e,i=t.replace(/./,function(t){return t[0].toUpperCase()});return n===w?this[0]==window?window["inner"+i]:this[0]==S?S.documentElement["offset"+i]:(e=this.offset())&&e[t]:this.each(function(e){var i=x(this);i.css(t,d(this,n,e,i[t]()))})}}),R.forEach(function(t,e){var i=e%2;x.fn[t]=function(){var t,r=x.map(arguments,function(t){return n(t)?t:U.fragment(t)}),o=this.length>1;return 1>r.length?this:this.each(function(n,s){t=i?s:s.parentNode,s=0==e?s.nextSibling:1==e?s.firstChild:2==e?s:null,r.forEach(function(n){if(o)n=n.cloneNode(!0);else if(!t)return x(n).remove();y(t.insertBefore(n,s),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},x.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(n){return x(n)[t](this),this}}),U.Z.prototype=x.fn,U.uniq=j,U.deserializeValue=g,x.zepto=U,x}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function n(t){return t._zid||(t._zid=p++)}function e(t,e,o,s){if(e=i(e),e.ns)var a=r(e.ns);return(h[n(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!a.test(t.ns)||o&&n(t.fn)!==n(o)||s&&t.sel!=s)})}function i(t){var n=(""+t).split(".");return{e:n[0],ns:n.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(n,e,i){t.isObject(n)?t.each(n,i):n.split(/\s/).forEach(function(t){i(t,e)})}function s(t,n){return t.del&&("focus"==t.e||"blur"==t.e)||!!n}function a(t){return m[t]||t}function u(e,r,u,c,f,l){var p=n(e),d=h[p]||(h[p]=[]);o(r,u,function(n,r){var o=i(n);o.fn=r,o.sel=c,o.e in m&&(r=function(n){var e=n.relatedTarget;return!e||e!==this&&!t.contains(this,e)?o.fn.apply(this,arguments):void 0}),o.del=f&&f(r,n);var u=o.del||r;o.proxy=function(t){var n=u.apply(e,[t].concat(t.data));return n===!1&&(t.preventDefault(),t.stopPropagation()),n},o.i=d.length,d.push(o),e.addEventListener(a(o.e),o.proxy,s(o,l))})}function c(t,i,r,u,c){var f=n(t);o(i||"",r,function(n,i){e(t,n,i,u).forEach(function(n){delete h[f][n.i],t.removeEventListener(a(n.e),n.proxy,s(n,c))})})}function f(n){var e,i={originalEvent:n};for(e in n)y.test(e)||void 0===n[e]||(i[e]=n[e]);return t.each(w,function(t,e){i[t]=function(){return this[e]=v,n[t].apply(n,arguments)},i[e]=g}),i}function l(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var n=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,n.call(this)}}}var h=(t.zepto.qsa,{}),p=1,d={},m={mouseenter:"mouseover",mouseleave:"mouseout"};d.click=d.mousedown=d.mouseup=d.mousemove="MouseEvents",t.event={add:u,remove:c},t.proxy=function(e,i){if(t.isFunction(e)){var r=function(){return e.apply(i,arguments)};return r._zid=n(e),r}if("string"==typeof i)return t.proxy(e[i],e);throw new TypeError("expected function")},t.fn.bind=function(t,n){return this.each(function(){u(this,t,n)})},t.fn.unbind=function(t,n){return this.each(function(){c(this,t,n)})},t.fn.one=function(t,n){return this.each(function(e,i){u(this,t,n,null,function(t,n){return function(){var e=t.apply(i,arguments);return c(i,n,t),e}})})};var v=function(){return!0},g=function(){return!1},y=/^([A-Z]|layer[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(n,e,i){return this.each(function(r,o){u(o,e,i,n,function(e){return function(i){var r,s=t(i.target).closest(n,o).get(0);return s?(r=t.extend(f(i),{currentTarget:s,liveFired:o}),e.apply(s,[r].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,n,e){return this.each(function(){c(this,n,e,t)})},t.fn.live=function(n,e){return t(document.body).delegate(this.selector,n,e),this},t.fn.die=function(n,e){return t(document.body).undelegate(this.selector,n,e),this},t.fn.on=function(n,e,i){return!e||t.isFunction(e)?this.bind(n,e||i):this.delegate(e,n,i)},t.fn.off=function(n,e,i){return!e||t.isFunction(e)?this.unbind(n,e||i):this.undelegate(e,n,i)},t.fn.trigger=function(n,e){return("string"==typeof n||t.isPlainObject(n))&&(n=t.Event(n)),l(n),n.data=e,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(n)})},t.fn.triggerHandler=function(n,i){var r,o;return this.each(function(s,a){r=f("string"==typeof n?t.Event(n):n),r.data=i,r.target=a,t.each(e(a,n.type||n),function(t,n){return o=n.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){t.fn[n]=function(t){return t?this.bind(n,t):this.trigger(n)}}),["focus","blur"].forEach(function(n){t.fn[n]=function(t){return t?this.bind(n,t):this.each(function(){try{this[n]()}catch(t){}}),this}}),t.Event=function(t,n){"string"!=typeof t&&(n=t,t=n.type);var e=document.createEvent(d[t]||"Events"),i=!0;if(n)for(var r in n)"bubbles"==r?i=!!n[r]:e[r]=n[r];return e.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),e.isDefaultPrevented=function(){return this.defaultPrevented},e}}(Zepto),function(t){function n(t){var n=this.os={},e=this.browser={},i=t.match(/WebKit\/([\d.]+)/),r=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),s=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),u=a&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),f=t.match(/Silk\/([\d._]+)/),l=t.match(/(BlackBerry).*Version\/([\d.]+)/),h=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/);(e.webkit=!!i)&&(e.version=i[1]),r&&(n.android=!0,n.version=r[2]),s&&(n.ios=n.iphone=!0,n.version=s[2].replace(/_/g,".")),o&&(n.ios=n.ipad=!0,n.version=o[2].replace(/_/g,".")),a&&(n.webos=!0,n.version=a[2]),u&&(n.touchpad=!0),l&&(n.blackberry=!0,n.version=l[2]),c&&(n.kindle=!0,n.version=c[1]),f&&(e.silk=!0,e.version=f[1]),!f&&n.android&&t.match(/Kindle Fire/)&&(e.silk=!0),h&&(e.chrome=!0,e.version=h[1])}n.call(t,navigator.userAgent),t.__detect=n}(Zepto),function(t,n){function e(t){return i(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function i(t){return t.toLowerCase()}function r(t){return o?o+t:i(t)}var o,s,a,u,c,f,l,h,p="",d={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},m=window.document,v=m.createElement("div"),g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(d,function(t,e){return v.style[t+"TransitionProperty"]!==n?(p="-"+i(t)+"-",o=e,!1):void 0}),s=p+"transform",y[a=p+"transition-property"]=y[u=p+"transition-duration"]=y[c=p+"transition-timing-function"]=y[f=p+"animation-name"]=y[l=p+"animation-duration"]=y[h=p+"animation-timing-function"]="",t.fx={off:o===n&&v.style.transitionProperty===n,speeds:{_default:400,fast:200,slow:600},cssPrefix:p,transitionEnd:r("TransitionEnd"),animationEnd:r("AnimationEnd")},t.fn.animate=function(n,e,i,r){return t.isObject(e)&&(i=e.easing,r=e.complete,e=e.duration),e&&(e=("number"==typeof e?e:t.fx.speeds[e]||t.fx.speeds._default)/1e3),this.anim(n,e,i,r)},t.fn.anim=function(i,r,o,p){var d,m,v,w={},b="",x=this,E=t.fx.transitionEnd;if(r===n&&(r=.4),t.fx.off&&(r=0),"string"==typeof i)w[f]=i,w[l]=r+"s",w[h]=o||"linear",E=t.fx.animationEnd;else{m=[];for(d in i)g.test(d)?b+=d+"("+i[d]+") ":(w[d]=i[d],m.push(e(d)));b&&(w[s]=b,m.push(s)),r>0&&"object"==typeof i&&(w[a]=m.join(", "),w[u]=r+"s",w[c]=o||"linear")}return v=function(n){if("undefined"!=typeof n){if(n.target!==n.currentTarget)return;t(n.target).unbind(E,arguments.callee)}t(this).css(y),p&&p.call(this)},r>0&&this.bind(E,v),this.size()&&this.get(0).clientLeft,this.css(w),0>=r&&setTimeout(function(){x.each(function(){v.call(this)})},0),this},v=null}(Zepto),function(t){function n(n,e,i){var r=t.Event(e);return t(n).trigger(r,i),!r.defaultPrevented}function e(t,e,i,r){return t.global?n(e||y,i,r):void 0}function i(n){n.global&&0===t.active++&&e(n,null,"ajaxStart")}function r(n){n.global&&!--t.active&&e(n,null,"ajaxStop")}function o(t,n){var i=n.context;return n.beforeSend.call(i,t,n)===!1||e(n,i,"ajaxBeforeSend",[t,n])===!1?!1:(e(n,i,"ajaxSend",[t,n]),void 0)}function s(t,n,i){var r=i.context,o="success";i.success.call(r,t,o,n),e(i,r,"ajaxSuccess",[n,i,t]),u(o,n,i)}function a(t,n,i,r){var o=r.context;r.error.call(o,i,n,t),e(r,o,"ajaxError",[i,r,t]),u(n,i,r)}function u(t,n,i){var o=i.context;i.complete.call(o,n,t),e(i,o,"ajaxComplete",[n,i]),r(i)}function c(){}function f(t){return t&&(t==T?"html":t==E?"json":b.test(t)?"script":x.test(t)&&"xml")||"text"}function l(t,n){return(t+"&"+n).replace(/[&?]{1,2}/,"?")}function h(n){n.processData&&g(n.data)&&(n.data=t.param(n.data,n.traditional)),!n.data||n.type&&"GET"!=n.type.toUpperCase()||(n.url=l(n.url,n.data))}function p(n,e,i,r){var o=t.isArray(e);t.each(e,function(e,s){r&&(e=i?r:r+"["+(o?"":e)+"]"),!r&&o?n.add(s.name,s.value):(i?t.isArray(s):g(s))?p(n,s,i,e):n.add(e,s)})}var d,m,v=0,g=t.isObject,y=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,E="application/json",T="text/html",j=/^\s*$/;t.active=0,t.ajaxJSONP=function(n){if(!("type"in n))return t.ajax(n);var e,i="jsonp"+ ++v,r=y.createElement("script"),o=function(){t(r).remove(),i in window&&(window[i]=c),u("abort",a,n)},a={abort:o};return n.error&&(r.onerror=function(){a.abort(),n.error()}),window[i]=function(o){clearTimeout(e),t(r).remove(),delete window[i],s(o,a,n)},h(n),r.src=n.url.replace(/=\?/,"="+i),t("head").append(r),n.timeout>0&&(e=setTimeout(function(){a.abort(),u("timeout",a,n)},n.timeout)),a},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:E,xml:"application/xml, text/xml",html:T,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0},t.ajax=function(n){var e=t.extend({},n||{});for(d in t.ajaxSettings)void 0===e[d]&&(e[d]=t.ajaxSettings[d]);i(e),e.crossDomain||(e.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(e.url)&&RegExp.$2!=window.location.host);var r=e.dataType,u=/=\?/.test(e.url);if("jsonp"==r||u)return u||(e.url=l(e.url,"callback=?")),t.ajaxJSONP(e);e.url||(e.url=window.location.toString()),h(e);var p,v=e.accepts[r],g={},y=/^([\w-]+:)\/\//.test(e.url)?RegExp.$1:window.location.protocol,w=e.xhr();e.crossDomain||(g["X-Requested-With"]="XMLHttpRequest"),v&&(g.Accept=v,v.indexOf(",")>-1&&(v=v.split(",",2)[0]),w.overrideMimeType&&w.overrideMimeType(v)),(e.contentType||e.contentType!==!1&&e.data&&"GET"!=e.type.toUpperCase())&&(g["Content-Type"]=e.contentType||"application/x-www-form-urlencoded"),e.headers=t.extend(g,e.headers||{}),w.onreadystatechange=function(){if(4==w.readyState){w.onreadystatechange=c,clearTimeout(p);var n,i=!1;if(w.status>=200&&300>w.status||304==w.status||0==w.status&&"file:"==y){r=r||f(w.getResponseHeader("content-type")),n=w.responseText;try{"script"==r?(1,eval)(n):"xml"==r?n=w.responseXML:"json"==r&&(n=j.test(n)?null:t.parseJSON(n))}catch(o){i=o}i?a(i,"parsererror",w,e):s(n,w,e)}else a(null,w.status?"error":"abort",w,e)}};var b="async"in e?e.async:!0;w.open(e.type,e.url,b);for(m in e.headers)w.setRequestHeader(m,e.headers[m]);return o(w,e)===!1?(w.abort(),!1):(e.timeout>0&&(p=setTimeout(function(){w.onreadystatechange=c,w.abort(),a(null,"timeout",w,e)},e.timeout)),w.send(e.data?e.data:null),w)},t.get=function(n,e){return t.ajax({url:n,success:e})},t.post=function(n,e,i,r){return t.isFunction(e)&&(r=r||i,i=e,e=null),t.ajax({type:"POST",url:n,data:e,success:i,dataType:r})},t.getJSON=function(n,e){return t.ajax({url:n,success:e,dataType:"json"})},t.fn.load=function(n,e){if(!this.length)return this;var i,r=this,o=n.split(/\s/);return o.length>1&&(n=o[0],i=o[1]),t.get(n,function(n){r.html(i?t("<div>").html(n.replace(w,"")).find(i):n),e&&e.apply(r,arguments)}),this};var N=encodeURIComponent;t.param=function(t,n){var e=[];return e.add=function(t,n){this.push(N(t)+"="+N(n))},p(e,t,n),e.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(n){t.push(encodeURIComponent(n.name)+"="+encodeURIComponent(n.value))}),t.join("&")},t.fn.submit=function(n){if(n)this.bind("submit",n);else if(this.length){var e=t.Event("submit");this.eq(0).trigger(e),e.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t){var n,e=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(e.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",n&&clearTimeout(n),n=setTimeout(function(){e=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t){function n(n,i){var u=n[a],c=u&&r[u];if(void 0===i)return c||e(n);if(c){if(i in c)return c[i];var f=s(i);if(f in c)return c[f]}return o.call(t(n),i)}function e(n,e,o){var u=n[a]||(n[a]=++t.uuid),c=r[u]||(r[u]=i(n));return void 0!==e&&(c[s(e)]=o),c}function i(n){var e={};return t.each(n.attributes,function(n,i){0==i.name.indexOf("data-")&&(e[s(i.name.replace("data-",""))]=t.zepto.deserializeValue(i.value))}),e}var r={},o=t.fn.data,s=t.camelCase,a=t.expando="Zepto"+ +new Date;t.fn.data=function(i,r){return void 0===r?t.isPlainObject(i)?this.each(function(n,r){t.each(i,function(t,n){e(r,t,n)})}):0==this.length?void 0:n(this[0],i):this.each(function(){e(this,i,r)})},t.fn.removeData=function(n){return"string"==typeof n&&(n=n.split(/\s+/)),this.each(function(){var e=this[a],i=e&&r[e];i&&t.each(n,function(){delete i[s(this)]})})}}(Zepto),function(t){function n(n){return n=t(n),!(!n.width()&&!n.height())&&"none"!==n.css("display")}function e(t,n){t=t.replace(/=#\]/g,'="#"]');var e,i,r=a.exec(t);if(r&&r[2]in s){var e=s[r[2]],i=r[3];if(t=r[1],i){var o=Number(i);i=isNaN(o)?i.replace(/^["']|["']$/g,""):o}}return n(t,e,i)}var i=t.zepto,r=i.qsa,o=i.matches,s=t.expr[":"]={visible:function(){return n(this)?this:void 0},hidden:function(){return n(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,n){return t===n.length-1?this:void 0},eq:function(t,n,e){return t===e?this:void 0},contains:function(n,e,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,n,e){return i.qsa(this,e).length?this:void 0}},a=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,c="Zepto"+ +new Date;i.qsa=function(n,o){return e(o,function(e,s,a){try{var f;!e&&s?e="*":u.test(e)&&(f=t(n).addClass(c),e="."+c+" "+e);var l=r(n,e)}catch(h){throw console.error("error performing selector: %o",o),h}finally{f&&f.removeClass(c)}return s?i.uniq(t.map(l,function(t,n){return s.call(t,n,l,a)})):l})},i.matches=function(t,n){return e(n,function(n,e,i){return!(n&&!o(t,n)||e&&e.call(t,null,i)!==t)})}}(Zepto),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(n){var e=t.fn[n];t.fn[n]=function(){var t=e.apply(this,arguments);return t.prevObject=this,t}})}(Zepto),function(t,n){function e(e,i,r,o,s){"function"!=typeof i||s||(s=i,i=n);var a={opacity:r};return o&&(a.scale=o,e.css(t.fx.cssPrefix+"transform-origin","0 0")),e.animate(a,i,null,s)}function i(n,i,r,o){return e(n,i,0,r,function(){s.call(t(this)),o&&o.call(this)})}var r=window.document,o=(r.documentElement,t.fn.show),s=t.fn.hide,a=t.fn.toggle;t.fn.show=function(t,i){return o.call(this),t===n?t=0:this.css("opacity",0),e(this,t,1,"1,1",i)},t.fn.hide=function(t,e){return t===n?s.call(this):i(this,t,"0,0",e)},t.fn.toggle=function(e,i){return e===n||"boolean"==typeof e?a.call(this,e):this.each(function(){var n=t(this);n["none"==n.css("display")?"show":"hide"](e,i)})},t.fn.fadeTo=function(t,n,i){return e(this,t,n,null,i)},t.fn.fadeIn=function(t,n){var e=this.css("opacity");return e>0?this.css("opacity",0):e=1,o.call(this).fadeTo(t,e,n)},t.fn.fadeOut=function(t,n){return i(this,t,null,n)},t.fn.fadeToggle=function(n,e){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](n,e)})}}(Zepto);