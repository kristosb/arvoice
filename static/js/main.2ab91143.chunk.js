(this.webpackJsonparvoice=this.webpackJsonparvoice||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},22:function(e){e.exports=JSON.parse("{}")},30:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r=t(9),o=t.n(r),i=t(13),a=t.n(i),c=(t(19),t.p,t(20),t(0)),u=t(3),s=t(1),d=t(2),h=t(5);t(22);function f(e){var n=new h.g,t=new h.f;return e.add(n),{update:function(e){},textAdd:function(e){t.load("helvetiker_regular.typeface.json",(function(t){var r=16777215,o=(new h.h({color:r,side:h.e}),new h.j({color:r,transparent:!0,opacity:.9,side:h.e})),i=e,a=t.generateShapes(i,5),c=new h.n(a);c.computeBoundingBox();c.boundingBox.max.x,c.boundingBox.min.x;var u=new h.i(c,o);if(u.position.z=-30,u.position.y=10,u.position.x=-20,n.children.map((function(e){e.geometry.translate(0,-5,0),e.material.opacity=.4})),n.add(u),n.children.length>3){var s=n.children[0];n.remove(s)}}))}}}function p(e){var n=new h.d(16777215,1);n.position.set(-1,2,4),e.add(n);return{update:function(e){}}}t(23);var l=t(29);try{var v=new(window.SpeechRecognition||window.webkitSpeechRecognition)}catch(k){console.error(k)}function w(){var e,n=new l;function t(e,t){n.emit(e,t)}return v.continuous=!0,v.onresult=function(n){var r=n.resultIndex,o=n.results[r][0].transcript;1==r&&o==n.results[0][0].transcript||(e&&clearInterval(e),o.match(/.{1,12}/g).reverse().map((function(e){return t("ready",e)})),e=setInterval((function(){t("ready","\n")}),3e3))},v.onstart=function(){t("ready","...")},v.onspeechend=function(){t("ready","."),e&&clearInterval(e)},v.onerror=function(n){"no-speech"==n.error&&(t("ready","...no speach..."),e&&clearInterval(e))},{on:function(e,t){n.on(e,t)},start:function(){v.start()},stop:function(){v.stop()}}}var g=t(14);function m(e){var n=new h.b,t=(new h.o(0,0,0),{width:e.width,height:e.height}),r=function(){var e=new h.m;return e.background=new h.c("black"),e}(),o=function(n){var t=n.width,r=n.height,o=new h.p({canvas:e,antialias:!0,alpha:!0});o.xr.enabled=!0;var i=window.devicePixelRatio?window.devicePixelRatio:1;return o.setPixelRatio(i),o.setSize(t,r),o.gammaInput=!0,o.gammaOutput=!0,o}(t),i=function(e){var n=e.width,t=e.height,r=n/t,o=new h.l(75,r,.1,50);return o.position.set(0,1.6,0),o}(t),a=function(e){return[new p(e),new f(e)]}(r);window.addEventListener("keypress",(function(e){var n=e.which;(n>=48&&n<=57||n>=97&&n<=122||n>=65&&n<=90)&&(49==n?c.start():u("key= "+e.key))}));var c=new w;function u(e){a[1].textAdd(e)}return c.on("ready",(function(e){return u(e)})),u("press 1 and \n speak"),{update:function(){for(var e=n.getElapsedTime(),t=0;t<a.length;t++)a[t].update(e);o.render(r,i)},onWindowResize:function(){var n=e.width,r=e.height;t.width=n,t.height=r,i.aspect=n/r,i.updateProjectionMatrix(),o.setSize(n,r)},vrButtonGet:function(){return g.a.createButton(o)},vrRender:function(e){o.setAnimationLoop(e)},speachStart:function(){c.start()}}}t(30);var y=t(7),x=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){!function(e){var n=function(e,n){var t=e.createElement("canvas");return n.appendChild(t),t}(document,e),t=new m(n);function r(){n.style.width="100%",n.style.height="100%",n.width=n.offsetWidth,n.height=n.offsetHeight,Math.round(n.offsetWidth/2),Math.round(n.offsetHeight/2),t.onWindowResize()}e.appendChild(t.vrButtonGet()),document.querySelector("#VRButton").addEventListener("click",(function(){console.log("startVoice"),t.speachStart()})),window.onresize=r,r(),function e(n){t.vrRender(e),t.update()}()}(this.threeRootElement)}},{key:"render",value:function(){var e=this;return Object(y.jsx)("div",{className:"header-header",ref:function(n){return e.threeRootElement=n}})}}]),t}(r.Component);var b=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(x,{})})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),i(e),a(e)}))};a.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(b,{})}),document.getElementById("root")),j()}},[[32,1,2]]]);
//# sourceMappingURL=main.2ab91143.chunk.js.map