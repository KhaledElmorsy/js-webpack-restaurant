(()=>{"use strict";var n={642:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([n.id,"[data-tab = 'about'] img{\n    width: 90%;\n}\n\n[data-tab = 'about'] .contact p{\n    margin: 10px 0px;\n    text-align: center;\n}\n",""]);const s=i},799:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([n.id,"[data-tab='home'] h3{\n    font-size: 25px;\n}\n\n[data-tab='home'] img{\n    width: 90%;\n}\n\n[data-tab='home'] li{\n    font-weight: 700;\n}\n\n[data-tab='home'] .statement{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n",""]);const s=i},767:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([n.id,"[data-tab = 'menu'] .menu-pic {\n    width:200px;\n    height: 200px;\n    object-fit: cover;\n}\n\n[data-tab = 'menu'] .menu-item{\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 40px;\n}\n\n[data-tab = 'menu'] .menu-item h2{\n    grid-column: 1;\n    flex: 1;\n}\n\n[data-tab = 'menu'] .menu-item-content{\n    grid-row: 2;\n    display: flex;\n    flex-wrap: wrap;\n    column-gap: 40px;\n    justify-content: center;\n    align-items: center;\n}\n\n[data-tab = 'menu'] .menu-item-content p{\n    flex: 1 1 200px;\n    font-size: clamp(20px, 2.5vw, 25px);\n}\n",""]);const s=i},774:(n,e,t)=>{t.d(e,{Z:()=>u});var a=t(81),o=t.n(a),r=t(645),i=t.n(r),s=t(667),c=t.n(s),l=new URL(t(12),t.b),p=i()(o());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600&display=swap);"]);var d=c()(l);p.push([n.id,"@font-face {\n    font-family: 'Fresh Fruit';\n    src: url("+d+");\n}\n\n:root{\n    font-family: 'Dosis';\n    font-size: 20px;\n    outline: 5px grey;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width:100vw;\n}\n\nh1 {\n    text-align: center;\n    width: 100%;\n    font-size: 44px;\n    font-family: 'Fresh Fruit', sans-serif;\n    margin-bottom: 10px;\n}\n\nh2{\n    margin-bottom: 10px;\n}\n\nheader .logo{\n    text-align: center;\n    color: tomato;\n    display: inline-block;\n}\n\n.tab-container{\n    display: flex;\n    gap:20px;\n}\n\n.tab-button{\n    background-color: tomato;\n    color: white;\n    height: 60px;\n    width: 120px;\n    border-radius: 5px;\n\n    transition-duration: 100ms;\n\n    display: grid;\n    place-items: center;\n\n    font-family: 'Dosis', sans-serif;\n    font-size: 25px;\n}\n.tab-button:hover{\n    transform: translateY(-2px)\n}\n.tab-button:active{\n    transform: translateY(0) scale(0.95)\n}\n\n.main-body{\n    box-sizing: border-box;\n    width: clamp(300px,90%,1000px);\n    margin-top: 30px;\n    padding: 30px 20px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:30px;\n    border-radius: 15px;\n    background-color: tomato;\n    box-shadow: 1px 1px 13px rgba(0,0,0,0.5);\n}\n\n.wrapper {\n    box-sizing: border-box;\n    background-color: white;\n    width: 80%;\n    padding: 5px 30px;\n\n    display: grid;\n    place-items: center;\n}\n\n.main-body img,.wrapper {\n    border-radius: 10px;\n    box-shadow: 1px 1px 10px rgba(0,0,0,0.5);\n}\n",""]);const u=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);a&&i[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},i=[],s=0;s<n.length;s++){var c=n[s],l=a.base?c[0]+a.base:c[0],p=r[l]||0,d="".concat(l," ").concat(p);r[l]=p+1;var u=t(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=o(h,a);a.byIndex=s,e.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=a(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var s=t(r[i]);e[s].references--}for(var c=a(n,o),l=0;l<r.length;l++){var p=t(r[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},12:(n,e,t)=>{n.exports=t.p+"f04eda102444d1ba0b92.ttf"}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),o=t.n(a),r=t(569),i=t.n(r),s=t(565),c=t.n(s),l=t(216),p=t.n(l),d=t(589),u=t.n(d),h=t(774),f={};function m(n,e,t){let a=document.createElement(n);if(e&&(a.innerHTML=e),t)for(let n in t)a.setAttribute(n,t[n]);return a}function b(n,e,t,a=!0){const o=m("div",null,t);if(a&&o.classList.add("wrapper"),e){const n=m("h2",e);o.appendChild(n)}if(n[0])for(let e of n)o.appendChild(e);else o.appendChild(n);return o}f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const g=t.p+"f9b72c2531c0250d6ed9.jpeg";var y=t(799),v={};v.styleTagTransform=u(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=p(),e()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const x=t.p+"55a2ccf521a21cbd4d6a.jpeg";var w=t(642),z={};z.styleTagTransform=u(),z.setAttributes=c(),z.insert=i().bind(null,"head"),z.domAPI=o(),z.insertStyleElement=p(),e()(w.Z,z),w.Z&&w.Z.locals&&w.Z.locals;const T=t.p+"1751d30a149d1879c3d6.jpeg",C=t.p+"1f56c5de46ac949deb30.jpeg",Z=t.p+"d9614ec728568ea68af4.jpeg";var M=t(767),j={};j.styleTagTransform=u(),j.setAttributes=c(),j.insert=i().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=p(),e()(M.Z,j),M.Z&&M.Z.locals&&M.Z.locals;let k={home:function(){const n=m("h3","Pizza you just can't forget about"),e=m("img","",{src:g}),t=m("p","We know pizza. You come here, you try it, you think: \n Why haven't I had pizza this good yet until now?  That what you can expect when you try our 100 year old recipe that's been passed down and perfected for generations. Once you come here, you won't go anywhere else"),a=m("div",null,{class:"statement"});return function(){a.appendChild(m("p","Each pizza has 3 main ingredients that make it perfect: "));const n=m("ol");n.appendChild(m("li","Lots of cheese")),n.appendChild(m("li","Lots of toppings")),n.appendChild(m("li","Lots of love")),a.appendChild(n),a.appendChild(m("p","That's why people just can't get enough of it"))}(),[b(n),e,b(t),b(a)]},about:function(){const n=[m("p","<b>Phone</b><br> +1 234 456 7890"),m("p","<b>Address</b><br> 1234 North-West Road, City"),m("p","<b>Email</b><br> contact@pizzapizzapizaaaa.com"),m("p","<i>We'd love to hear from you! Reach out or drop by anytime!<i>")],e=m("p","More than a hundred years ago, our family set out to make a pizza so flavorful it would make anyone who tried it forget anything else they've had before. They didn't just succeed, they kept raising the bar until their pizza was considered to be on a different level from what you can get anywhere else. <br> <br> We haven't slowed down one bit, and you can be sure that the pizza you try here is going to absolutely blow your mind and tastebuds.");return[m("img",null,{src:x}),b(e,"Our History"),b(n,"Reach Out!",{class:"contact"})]},menu:function(){function n(n,e,t){let a=b([m("img",null,{src:t,class:"menu-pic"}),m("p",e)],null,{class:"menu-item-content"},!1);return b(a,n,{class:"menu-item"})}return[n("Margherita","Delicious, alluring, addictive. The classic margherita is here to make your day. Live, Laugh, Love? More like, One, More, Slice",T),n("Pepperoni","Meaty, savory, head-spinning insanity. Our pepperoni pizza is like no other. People just can't get enough of it!",C),n("Mushroom","Umami. What more can we say other than that this pizza is a flavor explosion that'll send you to cloud nine and beyond",Z)]}};!function(){const n=document.getElementById("content"),e=m("header",'<h1>Welcome to <span class="logo">Pizza Pizza Pizzaaaa!<span><h1>');n.appendChild(e);const t=m("div",null,{class:"tab-container"});function a(n){let e=m("div",n,{class:"tab-button"});return e.onclick=i,e}var o={};o.home=a("Home"),o.menu=a("Menu"),o.about=a("About");for(let n in o)t.appendChild(o[n]);n.append(t);const r=m("div",null,{class:"main-body"});function i(n){r.innerHTML="";let e=n.target.innerText.toLowerCase();r.append(...function(n){return k[n]()}(e)),r.setAttribute("data-tab",e)}o.home.click(),n.appendChild(r)}()})()})();