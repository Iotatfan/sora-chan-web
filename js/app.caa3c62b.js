(function(t){function e(e){for(var o,r,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);b&&b(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-6dad4218":"e3a91760"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-6dad4218":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-6dad4218":"76c20e2c"}[t]+".css",a=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var o=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[t],b.parentNode.removeChild(b),n(c)},b.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(b);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[t]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/sora-chan-web/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d5e":function(t,e,n){},"24fa":function(t,e,n){},"28cc":function(t,e,n){},"3c8a":function(t,e,n){"use strict";n("74db")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("ecee"),a=n("c074"),c=n("f2d1"),i=n("ad3d"),s={class:"flex-wrapper"};function u(t,e,n,r,a,c){var i=Object(o["B"])("app-header"),u=Object(o["B"])("router-view"),l=Object(o["B"])("app-footer");return Object(o["t"])(),Object(o["g"])(o["a"],null,[Object(o["j"])(i),Object(o["h"])("div",s,[Object(o["j"])(u,null,{default:Object(o["I"])((function(t){var e=t.Component;return[Object(o["j"])(o["b"],{name:"route",mode:"out-in"},{default:Object(o["I"])((function(){return[(Object(o["t"])(),Object(o["f"])(Object(o["C"])(e)))]})),_:2},1024)]})),_:1})]),Object(o["j"])(l)],64)}var l=n("b640"),d=n.n(l),b=function(t){return Object(o["w"])("data-v-79124f9a"),t=t(),Object(o["u"])(),t},f={class:"footer card-footer"},p={class:"container-xxl"},m={class:"d-flex justify-content-between",id:"main-footer"},h=b((function(){return Object(o["h"])("div",{class:"d-flex flex-column align-items-start pt-2"},[Object(o["h"])("img",{src:d.a,class:"img-fluid rounded sora-icon",width:"64"}),Object(o["h"])("a",{href:"mailto:imaniatfan@gmail.com",class:"text-lg-start text-blue"},"Contact me")],-1)})),j={class:"d-flex align-items-center me-2"},v={href:"",class:"d-flex align-items-center mx-3"},O={href:"https://github.com/Iotatfan",class:"d-flex align-items-center mx-3"},g=b((function(){return Object(o["h"])("div",null,null,-1)}));function y(t,e,n,r,a,c){var i=Object(o["B"])("fa-icon");return Object(o["t"])(),Object(o["g"])("div",f,[Object(o["h"])("div",p,[Object(o["h"])("div",m,[h,Object(o["h"])("div",j,[Object(o["h"])("a",v,[Object(o["j"])(i,{class:"icon-glow fa-2xl",icon:["fab","twitter"]})]),Object(o["h"])("a",O,[Object(o["j"])(i,{class:"icon-glow fa-2xl",icon:["fab","github"]})])])]),g])])}var w={name:"AppFooter"},x=(n("3c8a"),n("6b0d")),C=n.n(x);const k=C()(w,[["render",y],["__scopeId","data-v-79124f9a"]]);var T=k,_=function(t){return Object(o["w"])("data-v-cf519426"),t=t(),Object(o["u"])(),t},A={class:"header"},B={class:"navbar navbar-dark navbar-expand-lg",id:"nav"},S={class:"container-xxl"},I={class:"navbar-brand"},E={id:"title"},P=_((function(){return Object(o["h"])("img",{src:d.a,class:"img-fluid rounded sora-icon",width:"64"},null,-1)})),H=_((function(){return Object(o["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(o["h"])("span",{class:"navbar-toggler-icon"})],-1)})),L={class:"collapse navbar-collapse",id:"navbarScroll"},D={class:"navbar-nav ms-auto mb-2 mb-lg-0",style:{"--bs-scroll-height":"100px"}},M={class:"nav-item"},N={class:"nav-item"};function F(t,e,n,r,a,c){var i=Object(o["B"])("router-link"),s=Object(o["B"])("io-button");return Object(o["t"])(),Object(o["g"])("div",A,[Object(o["h"])("div",B,[Object(o["h"])("div",S,[Object(o["h"])("div",I,[Object(o["h"])("a",E,[Object(o["j"])(i,{to:"/"},{default:Object(o["I"])((function(){return[P]})),_:1})])]),H,Object(o["h"])("div",L,[Object(o["h"])("ul",D,[Object(o["h"])("li",M,[Object(o["j"])(s,{label:"Home",buttonType:"no-border",onClick:e[0]||(e[0]=function(t){return c.goTo("Home")})})]),Object(o["h"])("li",N,[Object(o["j"])(s,{label:"Commands",buttonType:"no-border",onClick:e[1]||(e[1]=function(t){return c.goTo("Commands")})})])])])])])])}var $=n("d4fb"),q={components:{IoButton:$["a"]},name:"AppHeader",methods:{goTo:function(t){this.$router.push({name:t})}}};n("6d42");const J=C()(q,[["render",F],["__scopeId","data-v-cf519426"]]);var z=J,K={name:"App",components:{AppHeader:z,AppFooter:T}};n("eb75");const U=C()(K,[["render",u]]);var V=U,G=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),Q={class:"wrapper"};function R(t,e,n,r,a,c){var i=Object(o["B"])("intro");return Object(o["t"])(),Object(o["g"])("div",Q,[Object(o["j"])(i)])}n("159b");var W={class:"pt-5"},X=Object(o["h"])("h1",{class:"content-header"},"Iotatfan's Personal Music Bot",-1),Y=Object(o["h"])("p",{class:"content-body"},"Sora private concert in your server.",-1);function Z(t,e,n,r,a,c){var i=Object(o["B"])("io-button");return Object(o["t"])(),Object(o["g"])("div",W,[X,Y,Object(o["h"])("div",null,[Object(o["j"])(i,{label:"Add to Discord","button-type":"discord",onClick:c.inviteToDiscord},null,8,["onClick"]),Object(o["j"])(i,{label:"View Commands","button-type":"transparent",onClick:c.goToCommands},null,8,["onClick"])])])}var tt={components:{IoButton:$["a"]},name:"Intro",methods:{inviteToDiscord:function(){window.open("https://discord.com/api/oauth2/authorize?client_id=697841248987512924&permissions=36826624&scope=bot","_blank")},goToCommands:function(){this.$router.push({name:"Commands"})}}};const et=C()(tt,[["render",Z]]);var nt=et,ot=n("cffa"),rt=n("1dac");ot["a"].registerPlugin(rt["a"]);var at={name:"Home",components:{Intro:nt},mounted:function(){this.scrollAnimation()},methods:{scrollAnimation:function(){function t(t){var e=0;t.classList.contains("left")?e=-128:t.classList.contains("right")&&(e=128),t.style.transform="translate("+e+"px)",t.style.opacity=0,ot["a"].fromTo(t,{x:e,y:0,autoAlpha:0},{duration:1.5,x:0,autoAlpha:1,ease:"power2",overwrite:"auto"})}function e(t){ot["a"].set(t,{autoAlpha:0})}ot["a"].utils.toArray(".trigger").forEach((function(n){e(n),rt["a"].create({trigger:n,onEnter:function(){t(n)}})}))}}};n("ea46");const ct=C()(at,[["render",R]]);var it=ct,st=[{path:"/",name:"Home",component:it},{path:"/commands",name:"Commands",component:function(){return n.e("chunk-6dad4218").then(n.bind(null,"af8b"))}}],ut=Object(G["a"])({history:Object(G["b"])("/sora-chan-web/"),routes:st}),lt=ut;n("ab8b"),n("7b17"),n("85b2");r["c"].add(a["a"],c["a"],c["b"]);var dt=Object(o["e"])(V).use(lt);dt.component("fa-icon",i["a"]),dt.mount("#app")},"65f2":function(t,e,n){},"6c58":function(t,e,n){"use strict";n("24fa")},"6d42":function(t,e,n){"use strict";n("1d5e")},"74db":function(t,e,n){},"85b2":function(t,e,n){},b640:function(t,e,n){t.exports=n.p+"img/logo.fc0b9591.jpg"},d4fb:function(t,e,n){"use strict";var o=n("2909"),r=(n("99af"),n("7a23")),a=["disabled"],c={class:"btn-label"};function i(t,e,n,i,s,u){return Object(r["t"])(),Object(r["g"])("button",{type:"button",class:Object(r["p"])(["io-btn",[u.buttonClass].concat(Object(o["a"])(n.customClass))]),disabled:n.disabled,onClick:e[0]||(e[0]=function(){return u.handleClick&&u.handleClick.apply(u,arguments)})},[Object(r["h"])("span",c,Object(r["E"])(n.label),1)],10,a)}var s={name:"IoButton",props:{label:{type:String,default:function(){return""}},buttonType:{type:String,default:function(){return""}},customClass:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:function(){return!1}}},computed:{buttonClass:function(){switch(this.buttonType){case"discord":return"io-btn-discord";case"transparent":return"io-btn-transparent";case"no-border":return"io-btn-no-border";default:return"io-btn"}}},methods:{handleClick:function(){this.$emit("click")}}},u=(n("6c58"),n("6b0d")),l=n.n(u);const d=l()(s,[["render",i],["__scopeId","data-v-092b7956"]]);e["a"]=d},ea46:function(t,e,n){"use strict";n("28cc")},eb75:function(t,e,n){"use strict";n("65f2")}});
//# sourceMappingURL=app.caa3c62b.js.map