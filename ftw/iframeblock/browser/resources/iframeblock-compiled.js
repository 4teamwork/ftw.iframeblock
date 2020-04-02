!function(e){function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function t(e,n,t){e.addEventListener(n,t,!1)}function i(e,n,t){e.removeEventListener(n,t,!1)}function o(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!q;e+=1)q=window[n[e]+"RequestAnimationFrame"];q?q=q.bind(window):c("setup","RequestAnimationFrame not supported")}function r(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}function a(e){return j+"["+r(e)+"]"}function u(e){return D[e]?D[e].log:A}function c(e,n){f("log",e,n,u(e))}function s(e,n){f("info",e,n,u(e))}function d(e,n){f("warn",e,n,!0)}function f(e,n,t,i){!0===i&&"object"==typeof window.console&&console[e](a(n),t)}function l(e){function n(){function e(){v(A),w(W),N("onResized",A)}a("Height"),a("Width"),T(e,A,"init")}function o(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function r(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function a(e){var n=Number(D[W]["max"+e]),t=Number(D[W]["min"+e]),i=e.toLowerCase(),o=Number(A[i]);c(W,"Checking "+i+" is in range "+t+"-"+n),o<t&&(o=t,c(W,"Set "+i+" to min value")),o>n&&(o=n,c(W,"Set "+i+" to max value")),A[i]=""+o}function u(e){return C.substr(C.indexOf(":")+P+e)}function f(e){c(W,"onMessage passed: {iframe: "+A.iframe.id+", message: "+e+"}"),N("onMessage",{iframe:A.iframe,message:JSON.parse(e)}),c(W,"--")}function l(){var e=document.body.getBoundingClientRect(),n=A.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:n.height,iframeWidth:n.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(n.top-e.top,10),offsetLeft:parseInt(n.left-e.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function g(e,n){function t(){M("Send Page Info","pageInfo:"+l(),e,n)}z(t,32,n)}function I(){function e(e,t){function i(){D[o]?g(D[o].iframe,o):n()}["scroll","resize"].forEach(function(n){c(o,e+n+" listener for sendPageInfo"),t(window,n,i)})}function n(){e("Remove ",i)}var o=W;!function(){e("Add ",t)}(),D[o]&&(D[o].stopPageInfo=n)}function E(){D[W]&&D[W].stopPageInfo&&(D[W].stopPageInfo(),delete D[W].stopPageInfo)}function S(e){var n=e.getBoundingClientRect();return p(W),{x:Math.floor(Number(n.left)+Number(H.x)),y:Math.floor(Number(n.top)+Number(H.y))}}function x(e){var n=e?S(A.iframe):{x:0,y:0},t=function(){return{x:Number(A.width)+n.x,y:Number(A.height)+n.y}}();c(W,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?function(){window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):d(W,"Unable to scroll to requested position, window.parentIFrame not found")}():function(){H=t,k(),c(W,"--")}()}function k(){!1!==N("onScroll",H)?w(W):y()}function R(e){var n=e.split("#")[1]||"",t=decodeURIComponent(n),i=document.getElementById(t)||document.getElementsByName(t)[0];i?function(){var e=S(i);c(W,"Moving to in page link (#"+n+") at x: "+e.x+" y: "+e.y),H={x:e.x,y:e.y},k(),c(W,"--")}():window.top!==window.self?function(){window.parentIFrame?window.parentIFrame.moveToAnchor(n):c(W,"In page link #"+n+" not found and window.parentIFrame not found")}():c(W,"In page link #"+n+" not found")}function N(e,n){return m(W,e,n)}function F(){D[W]&&(D[W].firstRun=!1)}var C=e.data,A={},W=null;"[iFrameResizerChild]Ready"===C?function(){for(var e in D)M("iFrame requested init",O(e),D[e].iframe,e)}():function(){return j===(""+C).substr(0,L)&&C.substr(L).split(":")[0]in D}()?(A=function(){var e=C.substr(L).split(":"),n=e[1]?parseInt(e[1],10):0,t=D[e[0]]&&D[e[0]].iframe,i=getComputedStyle(t);return{iframe:t,id:e[0],height:n+o(i)+r(i),width:e[2],type:e[3]}}(),W=A.id,D[W]&&(D[W].loaded=!0),!function(){var e=A.type in{true:1,false:1,undefined:1};return e&&c(W,"Ignoring init message from meta parent page"),e}()&&function(e){var n=!0;return D[e]||(n=!1,d(A.type+" No settings for "+e+". Message was: "+C)),n}(W)&&(c(W,"Received: "+C),function(){var e=!0;return null===A.iframe&&(d(W,"IFrame ("+A.id+") not found"),e=!1),e}()&&function(){var n=e.origin,t=D[W]&&D[W].checkOrigin;if(t&&""+n!="null"&&!function(){return t.constructor===Array?function(){var e=0,i=!1;for(c(W,"Checking connection is from allowed list of origins: "+t);e<t.length;e++)if(t[e]===n){i=!0;break}return i}():function(){var e=D[W]&&D[W].remoteHost;return c(W,"Checking connection is from: "+e),n===e}()}())throw new Error("Unexpected message received from: "+n+" for "+A.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(D[W]&&D[W].firstRun&&F(),A.type){case"close":h(A.iframe);break;case"message":f(u(6));break;case"autoResize":D[W].autoResize=JSON.parse(u(9));break;case"scrollTo":x(!1);break;case"scrollToOffset":x(!0);break;case"pageInfo":g(D[W]&&D[W].iframe,W),I();break;case"pageInfoStop":E();break;case"inPageLink":R(u(9));break;case"reset":b(A);break;case"init":n(),N("onInit",A.iframe);break;default:n()}}())):s(W,"Ignored: "+C)}function m(e,n,t){var i=null,o=null;if(D[e]){if("function"!=typeof(i=D[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=i(t)}return o}function g(e){var n=e.id;delete D[n]}function h(e){var n=e.id;if(!1===m(n,"onClose",n))return void c(n,"Close iframe cancelled by onClose event");c(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){d(e)}m(n,"onClosed",n),c(n,"--"),g(e)}function p(n){null===H&&(H={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},c(n,"Get page position: "+H.x+","+H.y))}function w(e){null!==H&&(window.scrollTo(H.x,H.y),c(e,"Set page position: "+H.x+","+H.y),y())}function y(){H=null}function b(e){function n(){v(e),M("reset","reset",e.iframe,e.id)}c(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),p(e.id),T(n,e,"reset")}function v(e){function n(n){if(!e.id)return void c("undefined","messageData id not set");e.iframe.style[n]=e[n]+"px",c(e.id,"IFrame ("+o+") "+n+" set to "+e[n]+"px")}function t(n){W||"0"!==e[n]||(W=!0,c(o,"Hidden iFrame detected, creating visibility listener"),S())}function i(e){n(e),t(e)}var o=e.iframe.id;D[o]&&(D[o].sizeHeight&&i("height"),D[o].sizeWidth&&i("width"))}function T(e,n,t){t!==n.type&&q&&!window.jasmine?(c(n.id,"Requesting animation frame"),q(e)):e()}function M(e,n,t,i,o){function r(){var o=D[i]&&D[i].targetOrigin;c(i,"["+e+"] Sending msg to iframe["+i+"] ("+n+") targetOrigin: "+o),t.contentWindow.postMessage(j+n,o)}function a(){d(i,"["+e+"] IFrame("+i+") not found")}var u=!1;i=i||t.id,D[i]&&(function(){t&&"contentWindow"in t&&null!==t.contentWindow?r():a()}(),function(){function e(){!D[i]||D[i].loaded||u||(u=!0,d(i,"IFrame has not responded within "+D[i].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}o&&D[i]&&D[i].warningTimeout&&(D[i].msgTimeout=setTimeout(e,D[i].warningTimeout))}())}function O(e){return e+":"+D[e].bodyMarginV1+":"+D[e].sizeWidth+":"+D[e].log+":"+D[e].interval+":"+D[e].enablePublicMethods+":"+D[e].autoResize+":"+D[e].bodyMargin+":"+D[e].heightCalculationMethod+":"+D[e].bodyBackground+":"+D[e].bodyPadding+":"+D[e].tolerance+":"+D[e].inPageLinks+":"+D[e].resizeFrom+":"+D[e].widthCalculationMethod}function I(i,o){function r(){var e=o&&o.id||V.id+C++;return null!==document.getElementById(e)&&(e+=C++),e}function a(){var e=D[m]&&D[m].firstRun,n=D[m]&&D[m].heightCalculationMethod in B;!e&&n&&b({iframe:i,height:0,width:0,type:"init"})}function u(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}function s(e){for(var n in V)Object.prototype.hasOwnProperty.call(V,n)&&(D[m][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:V[n])}function f(e){return""===e||null!==e.match(/^(about:blank|javascript:|file:\/\/)/)?"*":e}function l(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],d(m,"Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}var m=function(e){return""===e&&(i.id=e=r(),A=(o||{}).log,c(e,"Added missing iframe ID: "+e+" ("+i.src+")")),e}(i.id);!function(){return m in D&&"iFrameResizer"in i}()?(function(e){e=e||{},D[m]={firstRun:!0,iframe:i,remoteHost:i.src&&i.src.split("/").slice(0,3).join("/")},u(e),Object.keys(e).forEach(l,e),s(e),D[m]&&(D[m].targetOrigin=!0===D[m].checkOrigin?f(D[m].remoteHost):"*")}(o),function(){switch(c(m,"IFrame scrolling "+(D[m]&&D[m].scrolling?"enabled":"disabled")+" for "+m),i.style.overflow=!1===(D[m]&&D[m].scrolling)?"hidden":"auto",D[m]&&D[m].scrolling){case"omit":break;case!0:i.scrolling="yes";break;case!1:i.scrolling="no";break;default:i.scrolling=D[m]?D[m].scrolling:"no"}}(),function(){function e(e){1/0!==D[m][e]&&0!==D[m][e]&&(i.style[e]=D[m][e]+"px",c(m,"Set "+e+" = "+D[m][e]+"px"))}function n(e){if(D[m]["min"+e]>D[m]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}n("Height"),n("Width"),e("maxHeight"),e("minHeight"),e("maxWidth"),e("minWidth")}(),function(){"number"!=typeof(D[m]&&D[m].bodyMargin)&&"0"!==(D[m]&&D[m].bodyMargin)||(D[m].bodyMarginV1=D[m].bodyMargin,D[m].bodyMargin=D[m].bodyMargin+"px")}(),function(o){function r(){M("iFrame.onload",o,i,e,!0),a()}var u=n();u&&function(e){i.parentNode&&new e(function(e){e.forEach(function(e){Array.prototype.slice.call(e.removedNodes).forEach(function(e){e===i&&h(i)})})}).observe(i.parentNode,{childList:!0})}(u),t(i,"load",r),M("init",o,i,e,!0)}(O(m)),function(){D[m]&&(D[m].iframe.iFrameResizer={close:h.bind(null,D[m].iframe),removeListeners:g.bind(null,D[m].iframe),resize:M.bind(null,"Window resize","resize",D[m].iframe),moveToAnchor:function(e){M("Move to anchor","moveToAnchor:"+e,D[m].iframe,m)},sendMessage:function(e){e=JSON.stringify(e),M("Send Message","message:"+e,D[m].iframe,m)}})}()):d(m,"Ignored iFrame, already setup.")}function E(e,n){null===U&&(U=setTimeout(function(){U=null,e()},n))}function z(e,n,t){J[t]||(J[t]=setTimeout(function(){J[t]=null,e()},n))}function S(){function e(){function e(e){function n(n){return"0px"===(D[e]&&D[e].iframe.style[n])}D[e]&&function(e){return null!==e.offsetParent}(D[e].iframe)&&(n("height")||n("width"))&&M("Visibility change","resize",D[e].iframe,e)}Object.keys(D).forEach(function(n){e(n)})}function t(n){c("window","Mutation observed: "+n[0].target+" "+n[0].type),E(e,16)}var i=n();i&&function(){var e=document.querySelector("body"),n={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};new i(t).observe(e,n)}()}function x(e){function n(){R("Window "+e,"resize")}c("window","Trigger event: "+e),E(n,16)}function k(){function e(){R("Tab Visable","resize")}"hidden"!==document.visibilityState&&(c("document","Trigger event: Visiblity change"),E(e,16))}function R(e,n){function t(e){return D[e]&&"parent"===D[e].resizeFrom&&D[e].autoResize&&!D[e].firstRun}Object.keys(D).forEach(function(i){t(i)&&M(e,n,D[i].iframe,i)})}function N(){t(window,"message",l),t(window,"resize",function(){x("resize")}),t(document,"visibilitychange",k),t(document,"-webkit-visibilitychange",k)}function F(){function n(e,n){n&&(!function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),I(n,e),i.push(n))}function t(e){e&&e.enablePublicMethods&&d("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var i;return o(),N(),function(o,r){switch(i=[],t(o),typeof r){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(r||"iframe"),n.bind(e,o));break;case"object":n(o,r);break;default:throw new TypeError("Unexpected data type ("+typeof r+")")}return i}}if("undefined"!=typeof window){var C=0,A=!1,W=!1,P="message".length,j="[iFrameSizer]",L=j.length,H=null,q=window.requestAnimationFrame,B={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},D={},U=null,V={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){d("onMessage function not defined")},onResized:function(){},onScroll:function(){return!0}},J={};window.jQuery&&function(e){e.fn?e.fn.iFrameResize||(e.fn.iFrameResize=function(e){function n(n,t){I(t,e)}return this.filter("iframe").each(n).end()}):s("","Unable to bind to jQuery, it is not fully loaded.")}(window.jQuery),"function"==typeof define&&define.amd?define("iframeResizer",[],F):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=F()),window.iFrameResize=window.iFrameResize||F()}}(),function(e){"function"==typeof define&&define.amd?require(["jquery","iframeResizer"],e):e(window.jQuery,window.iFrameResize)}(function(e,n){"use strict";function t(){var t=e(this);if("True"===t.data("autoSize")){var o=t.data("resizerOptions"),r=e.extend({},i,o);n(r,this)}t.prev().removeClass("loading")}var i={inPageLinks:!0,onResized:function(){scroll(0,0)}};e(document).ready(function(){e("iframe").on("load",t),e(document).on("onBeforeClose",".overlay",function(){e("iframe").each(t)})})}),define("iframeblock",function(){}),function(e){function n(){}function t(e,n,t,i){e.addEventListener(n,t,!!Ne&&(i||{}))}function i(e,n,t){e.removeEventListener(n,t,!1)}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function r(e){return de+"["+le+"] "+e}function a(e){se&&"object"==typeof window.console&&console.log(r(e))}function u(e){"object"==typeof window.console&&console.warn(r(e))}function c(){s(),a("Initialising iFrame ("+location.href+")"),f(),g(),m("background",Q),m("padding",G),I(),b(),v(),h(),z(),T(),ae=E(),j("init","Init message from host page"),Se()}function s(){function n(e){return"true"===e}var t=re.substr(fe).split(":");le=t[0],X=e!==t[1]?Number(t[1]):X,Z=e!==t[2]?n(t[2]):Z,se=e!==t[3]?n(t[3]):se,ue=e!==t[4]?Number(t[4]):ue,V=e!==t[6]?n(t[6]):V,Y=t[7],ie=e!==t[8]?t[8]:ie,Q=t[9],G=t[10],ye=e!==t[11]?Number(t[11]):ye,ae.enable=e!==t[12]&&n(t[12]),ge=e!==t[13]?t[13]:ge,Ie=e!==t[14]?t[14]:Ie}function d(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],u("Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}function f(){function e(e,n){return"function"==typeof e&&(a("Setup custom "+n+"CalcMethod"),ke[n]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(!function(){var e=window.iFrameResizer;a("Reading data from page: "+JSON.stringify(e)),Object.keys(e).forEach(d,e),ze="onMessage"in e?e.onMessage:ze,Se="onReady"in e?e.onReady:Se,we="targetOrigin"in e?e.targetOrigin:we,ie="heightCalculationMethod"in e?e.heightCalculationMethod:ie,Ie="widthCalculationMethod"in e?e.widthCalculationMethod:Ie}(),ie=e(ie,"height"),Ie=e(Ie,"width")),a("TargetOrigin for parent set to: "+we)}function l(e,n){return-1!==n.indexOf("-")&&(u("Negative CSS value ignored for "+e),n=""),n}function m(n,t){e!==t&&""!==t&&"null"!==t&&(document.body.style[n]=t,a("Body "+n+' set to "'+t+'"'))}function g(){e===Y&&(Y=X+"px"),m("margin",l("margin",Y))}function h(){document.documentElement.style.height="",document.body.style.height="",a('HTML & body height set to "auto"')}function p(e){var n={add:function(n){function i(){j(e.eventName,e.eventType)}Re[n]=i,t(window,n,i,{passive:!0})},remove:function(e){var n=Re[e];delete Re[e],i(window,e,n)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(n[e.method])):n[e.method](e.eventName),a(o(e.method)+" event listener: "+e.eventType)}function w(e){p({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),p({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),p({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),p({method:e,eventType:"Input",eventName:"input"}),p({method:e,eventType:"Mouse Up",eventName:"mouseup"}),p({method:e,eventType:"Mouse Down",eventName:"mousedown"}),p({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),p({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),p({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),p({method:e,eventType:"Touch Start",eventName:"touchstart"}),p({method:e,eventType:"Touch End",eventName:"touchend"}),p({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),p({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),p({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),p({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===ge&&p({method:e,eventType:"IFrame Resized",eventName:"resize"})}function y(e,n,t,i){return n!==e&&(e in t||(u(e+" is not a valid option for "+i+"CalculationMethod."),e=n),a(i+' calculation method set to "'+e+'"')),e}function b(){ie=y(ie,te,Ae,"height")}function v(){Ie=y(Ie,Oe,We,"width")}function T(){!0===V?(w("add"),k()):a("Auto Resize disabled")}function M(){null!==K&&K.disconnect()}function O(){w("remove"),M(),clearInterval(ce)}function I(){var e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e)}function E(){function n(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function i(e){var t=e.getBoundingClientRect(),i=n();return{x:parseInt(t.left,10)+parseInt(i.x,10),y:parseInt(t.top,10)+parseInt(i.y,10)}}function o(n){var t=n.split("#")[1]||n,o=decodeURIComponent(t),r=document.getElementById(o)||document.getElementsByName(o)[0];e!==r?function(e){var n=i(e);a("Moving to in page link (#"+t+") at x: "+n.x+" y: "+n.y),B(n.y,n.x,"scrollToOffset")}(r):(a("In page link (#"+t+") not found in iFrame, so sending to parent"),B(0,0,"inPageLink","#"+t))}function r(){""!==location.hash&&"#"!==location.hash&&o(location.href)}function c(){function e(e){function n(e){e.preventDefault(),o(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&t(e,"click",n)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),e)}function s(){t(window,"hashchange",r)}function d(){setTimeout(r,_)}return ae.enable?function(){Array.prototype.forEach&&document.querySelectorAll?(a("Setting up location.hash handlers"),c(),s(),d()):u("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}():a("In page linking not enabled"),{findTarget:o}}function z(){a("Enable public methods"),Ee.parentIFrame={autoResize:function(e){return!0===e&&!1===V?(V=!0,T()):!1===e&&!0===V&&(V=!1,O()),B(0,0,"autoResize",JSON.stringify(V)),V},close:function(){B(0,0,"close")},getId:function(){return le},getPageInfo:function(e){"function"==typeof e?(xe=e,B(0,0,"pageInfo")):(xe=function(){},B(0,0,"pageInfoStop"))},moveToAnchor:function(e){ae.findTarget(e)},reset:function(){q("parentIFrame.reset")},scrollTo:function(e,n){B(n,e,"scrollTo")},scrollToOffset:function(e,n){B(n,e,"scrollToOffset")},sendMessage:function(e,n){B(0,0,"message",JSON.stringify(e),n)},setHeightCalculationMethod:function(e){ie=e,b()},setWidthCalculationMethod:function(e){Ie=e,v()},setTargetOrigin:function(e){a("Set targetOrigin: "+e),we=e},size:function(e,n){j("size","parentIFrame.size("+(e||"")+(n?","+n:"")+")",e,n)}}}function S(){0!==ue&&(a("setInterval: "+ue+"ms"),ce=setInterval(function(){j("interval","setInterval: "+ue)},Math.abs(ue)))}function x(){function n(e){function n(e){!1===e.complete&&(a("Attach listeners to "+e.src),e.addEventListener("load",r,!1),e.addEventListener("error",u,!1),s.push(e))}"attributes"===e.type&&"src"===e.attributeName?n(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),n)}function t(e){s.splice(s.indexOf(e),1)}function i(e){a("Remove listeners from "+e.src),e.removeEventListener("load",r,!1),e.removeEventListener("error",u,!1),t(e)}function o(n,t,o){i(n.target),j(t,o+": "+n.target.src,e,e)}function r(e){o(e,"imageLoad","Image loaded")}function u(e){o(e,"imageLoadFailed","Image load failed")}function c(e){j("mutationObserver","mutationObserver: "+e[0].target+" "+e[0].type),e.forEach(n)}var s=[],d=window.MutationObserver||window.WebKitMutationObserver,f=function(){var e=document.querySelector("body"),n={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return f=new d(c),a("Create body MutationObserver"),f.observe(e,n),f}();return{disconnect:function(){"disconnect"in f&&(a("Disconnect body MutationObserver"),f.disconnect(),s.forEach(i))}}}function k(){var e=0>ue;window.MutationObserver||window.WebKitMutationObserver?e?S():K=x():(a("MutationObserver not supported in this browser!"),S())}function R(e,n){var t=0;return n=n||document.body,t=document.defaultView.getComputedStyle(n,null),t=null!==t?t[e]:0,parseInt(t,J)}function N(e){e>Te/2&&(Te=2*e,a("Event throttle increased to "+Te+"ms"))}function F(e,n){for(var t=n.length,i=0,r=0,u=o(e),c=Ce(),s=0;s<t;s++)(i=n[s].getBoundingClientRect()[e]+R("margin"+u,n[s]))>r&&(r=i);return c=Ce()-c,a("Parsed "+t+" HTML elements"),a("Element position calculated in "+c+"ms"),N(c),r}function C(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function A(e,n){var t=document.querySelectorAll("["+n+"]");return 0===t.length&&function(){u("No tagged elements ("+n+") found on page"),document.querySelectorAll("body *")}(),F(e,t)}function W(){return document.querySelectorAll("body *")}function P(n,t,i,o){function r(){return!(n in{init:1,interval:1,size:1})}function u(){return ie in me||Z&&Ie in me}function c(){a("No change in size detected")}var s,d;!function(){function n(e,n){return!(Math.abs(e-n)<=ye)}return s=e!==i?i:Ae[ie](),d=e!==o?o:We[Ie](),n(ne,s)||Z&&n(Me,d)}()&&"init"!==n?function(){r()&&u()?q(t):n in{interval:1}||c()}():(L(),function(){ne=s,Me=d,B(ne,Me,n)}())}function j(e,n,t,i){!function(){return be&&e in $}()?(!function(){e in{reset:1,resetPage:1,init:1}||a("Trigger event: "+n)}(),"init"===e?P(e,n,t,i):Pe(e,n,t,i)):a("Trigger event cancelled: "+e)}function L(){be||(be=!0,a("Trigger event lock on")),clearTimeout(ve),ve=setTimeout(function(){be=!1,a("Trigger event lock off"),a("--")},_)}function H(e){ne=Ae[ie](),Me=We[Ie](),B(ne,Me,e)}function q(e){var n=ie;ie=te,a("Reset trigger event: "+e),L(),H("reset"),ie=n}function B(n,t,i,o,r){!0===he&&(function(){e===r?r=we:a("Message targetOrigin: "+r)}(),function(){var u=n+":"+t,c=le+":"+u+":"+i+(e!==o?":"+o:"");a("Sending message to host page ("+c+")"),pe.postMessage(de+c,r)}())}function D(e){function n(){return e.data.split("]")[1].split(":")[0]}function t(){return e.data.substr(e.data.indexOf(":")+1)}function i(){return!("undefined"!=typeof module&&module.exports)&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function o(){return e.data.split(":")[2]in{true:1,false:1}}function r(){var t=n();t in s?s[t]():i()||o()||u("Unexpected message ("+e.data+")")}var s={init:function(){re=e.data,pe=e.source,c(),ee=!1,setTimeout(function(){oe=!1},_)},reset:function(){oe?a("Page reset ignored by init"):(a("Page size reset by host page"),H("resetPage"))},resize:function(){j("resizeParent","Parent window requested size check")},moveToAnchor:function(){ae.findTarget(t())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=t();a("PageInfoFromParent called from parent: "+e),xe(JSON.parse(e)),a(" --")},message:function(){var e=t();a("onMessage called from parent: "+e),ze(JSON.parse(e)),a(" --")}};(function(){return de===(""+e.data).substr(0,fe)})()&&function(){!1===ee?r():o()?s.init():a('Ignored message of type "'+n()+'". Received before initialization.')}()}function U(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}if("undefined"!=typeof window){var V=!0,J=10,Q="",X=0,Y="",K=null,G="",Z=!1,$={resize:1,click:1},_=128,ee=!0,ne=1,te="bodyOffset",ie=te,oe=!0,re="",ae={},ue=32,ce=null,se=!1,de="[iFrameSizer]",fe=de.length,le="",me={max:1,min:1,bodyScroll:1,documentElementScroll:1},ge="child",he=!0,pe=window.parent,we="*",ye=0,be=!1,ve=null,Te=16,Me=1,Oe="scroll",Ie=Oe,Ee=window,ze=function(){u("onMessage function not defined")},Se=function(){},xe=function(){},ke={height:function(){return u("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return u("Custom width calculation function not defined"),document.body.scrollWidth}},Re={},Ne=!1;try{var Fe=Object.create({},{passive:{get:function(){Ne=!0}}});window.addEventListener("test",n,Fe),window.removeEventListener("test",n,Fe)}catch(e){}var Ce=Date.now||function(){return(new Date).getTime()},Ae={bodyOffset:function(){return document.body.offsetHeight+R("marginTop")+R("marginBottom")},offset:function(){return Ae.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return ke.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,C(Ae))},min:function(){return Math.min.apply(null,C(Ae))},grow:function(){return Ae.max()},lowestElement:function(){return Math.max(Ae.bodyOffset()||Ae.documentElementOffset(),F("bottom",W()))},taggedElement:function(){return A("bottom","data-iframe-height")}},We={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return ke.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(We.bodyScroll(),We.documentElementScroll())},max:function(){return Math.max.apply(null,C(We))},min:function(){return Math.min.apply(null,C(We))},rightMostElement:function(){return F("right",W())},taggedElement:function(){return A("right","data-iframe-width")}},Pe=function(e){var n,t,i,o=null,r=0,a=function(){r=Ce(),o=null,i=e.apply(n,t),o||(n=t=null)};return function(){var u=Ce();r||(r=u);var c=Te-(u-r);return n=this,t=arguments,c<=0||c>Te?(o&&(clearTimeout(o),o=null),r=u,i=e.apply(n,t),o||(n=t=null)):o||(o=setTimeout(a,c)),i}}(P);t(window,"message",D),t(window,"readystatechange",U),U()}}(),define("iframeResizer.contentWindow",function(){}),require(["iframeblock","iframeResizer","iframeResizer.contentWindow"],function(e,n,t){}),define("main",function(){});