import{F as re,S as N,i as O,s as Q,e as h,t as C,k as I,c as m,a as b,h as M,d as o,m as L,b as i,G as E,g as x,H as c,n as S,I as le,J as ne,x as ee,K as ie,y as te,z as ae,L as oe,M as ue,N as ce,r as q,p as R,C as se,w as pe}from"../chunks/index-6a9cc4af.js";var z=typeof window!="undefined",fe="https://cdn.splitbee.io/sb.js",F=[],D=function(){z&&!window.splitbee||(U.track=window.splitbee.track,U.user=window.splitbee.user,U.enableCookie=window.splitbee.enableCookie,U.reset=window.splitbee.reset,F.forEach(function(e){e.type==="track"?window.splitbee.track.apply(null,e.payload):e.type==="user"?window.splitbee.user.set.apply(null,e.payload):e.type==="enableCookie"?window.splitbee.enableCookie.apply(null,e.payload):e.type==="reset"&&window.splitbee.reset()}),F=[])},T=function(e){return function(){try{for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return F.push({type:e,payload:a}),z&&window.splitbee&&D(),Promise.resolve()}catch(l){return Promise.reject(l)}}},de=function(e){if(!(!z||window.splitbee)){var r=window.document,a=e!=null&&e.scriptUrl?e.scriptUrl:fe,s=r.querySelector("script[src='"+a+"']");if(s){s.onload=D;return}var l=r.createElement("script");l.src=a,l.async=!0,e&&(e.apiUrl&&(l.dataset.api=e.apiUrl),e.token&&(l.dataset.token=e.token),e.disableCookie&&(l.dataset.noCookie="1")),l.onload=D,r.head.appendChild(l)}},U={track:T("track"),user:{set:T("user")},init:de,enableCookie:T("enableCookie"),reset:T("reset")};const he=()=>{const n=re("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session,updated:n.updated}},me={subscribe(n){return he().page.subscribe(n)}};function ve(n){let e,r,a,s,l,f,_,p,v,j,d,t,u,A,H,$,y,P;return{c(){e=h("header"),r=h("nav"),a=h("ul"),s=h("li"),l=h("a"),f=C("Home"),_=I(),p=h("li"),v=h("a"),j=C("About"),d=I(),t=h("li"),u=h("a"),A=C("Portfolio"),H=I(),$=h("li"),y=h("a"),P=C("Contact"),this.h()},l(g){e=m(g,"HEADER",{class:!0});var w=b(e);r=m(w,"NAV",{class:!0});var B=b(r);a=m(B,"UL",{class:!0});var k=b(a);s=m(k,"LI",{class:!0});var G=b(s);l=m(G,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var J=b(l);f=M(J,"Home"),J.forEach(o),G.forEach(o),_=L(k),p=m(k,"LI",{class:!0});var K=b(p);v=m(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var V=b(v);j=M(V,"About"),V.forEach(o),K.forEach(o),d=L(k),t=m(k,"LI",{class:!0});var Y=b(t);u=m(Y,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var W=b(u);A=M(W,"Portfolio"),W.forEach(o),Y.forEach(o),H=L(k),$=m(k,"LI",{class:!0});var X=b($);y=m(X,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Z=b(y);P=M(Z,"Contact"),Z.forEach(o),X.forEach(o),k.forEach(o),B.forEach(o),w.forEach(o),this.h()},h(){i(l,"sveltekit:prefetch",""),i(l,"href","/"),i(l,"class","svelte-1eup9uj"),i(s,"class","svelte-1eup9uj"),E(s,"active",n[0].url.pathname==="/"),i(v,"sveltekit:prefetch",""),i(v,"href","/about"),i(v,"class","svelte-1eup9uj"),i(p,"class","svelte-1eup9uj"),E(p,"active",n[0].url.pathname==="/about"),i(u,"sveltekit:prefetch",""),i(u,"href","/journal"),i(u,"class","svelte-1eup9uj"),i(t,"class","svelte-1eup9uj"),E(t,"active",n[0].url.pathname.includes("/journal")),i(y,"sveltekit:prefetch",""),i(y,"href","/contact"),i(y,"class","svelte-1eup9uj"),i($,"class","svelte-1eup9uj"),E($,"active",n[0].url.pathname==="/contact"),i(a,"class","relative p-0 m-0 flex justify-center items-center bg-contain h-12 list-none"),i(r,"class","flex justify-center svelte-1eup9uj"),i(e,"class","bg-background p-4 flex justify-center")},m(g,w){x(g,e,w),c(e,r),c(r,a),c(a,s),c(s,l),c(l,f),c(a,_),c(a,p),c(p,v),c(v,j),c(a,d),c(a,t),c(t,u),c(u,A),c(a,H),c(a,$),c($,y),c(y,P)},p(g,[w]){w&1&&E(s,"active",g[0].url.pathname==="/"),w&1&&E(p,"active",g[0].url.pathname==="/about"),w&1&&E(t,"active",g[0].url.pathname.includes("/journal")),w&1&&E($,"active",g[0].url.pathname==="/contact")},i:S,o:S,d(g){g&&o(e)}}}function be(n,e,r){let a;return le(n,me,s=>r(0,a=s)),[a]}class _e extends N{constructor(e){super();O(this,e,be,ve,Q,{})}}function ge(n){let e,r,a,s=new Date().getFullYear()+"",l;return{c(){e=h("footer"),r=h("p"),a=C("All rights reserved \xA9 Mahyar Mesbah "),l=C(s),this.h()},l(f){e=m(f,"FOOTER",{class:!0});var _=b(e);r=m(_,"P",{});var p=b(r);a=M(p,"All rights reserved \xA9 Mahyar Mesbah "),l=M(p,s),p.forEach(o),_.forEach(o),this.h()},h(){i(e,"class","flex flex-col justify-center items-center p-8 sm:px-0 bg-background")},m(f,_){x(f,e,_),c(e,r),c(r,a),c(r,l)},p:S,i:S,o:S,d(f){f&&o(e)}}}class we extends N{constructor(e){super();O(this,e,null,ge,Q,{})}}function $e(n){let e,r,a,s,l,f,_,p,v;s=new _e({});const j=n[1].default,d=ne(j,n,n[0],null);return p=new we({}),{c(){e=h("meta"),r=h("meta"),a=I(),ee(s.$$.fragment),l=I(),f=h("main"),d&&d.c(),_=I(),ee(p.$$.fragment),this.h()},l(t){const u=ie('[data-svelte="svelte-sbu7q1"]',document.head);e=m(u,"META",{name:!0,content:!0}),r=m(u,"META",{name:!0,content:!0}),u.forEach(o),a=L(t),te(s.$$.fragment,t),l=L(t),f=m(t,"MAIN",{class:!0});var A=b(f);d&&d.l(A),A.forEach(o),_=L(t),te(p.$$.fragment,t),this.h()},h(){i(e,"name","og:title"),i(e,"content","Mahyar Mesbah [dot] Design"),i(r,"name","og:description"),i(r,"content","I'm Mahyar Mesbah, a passionate designer based in Tehran, Iran. Read more about me or what services I can help you with."),i(f,"class","flex flex-1 flex-col p-8 w-full m-auto box-border mt-6 mb-20 max-w-[900px]")},m(t,u){c(document.head,e),c(document.head,r),x(t,a,u),ae(s,t,u),x(t,l,u),x(t,f,u),d&&d.m(f,null),x(t,_,u),ae(p,t,u),v=!0},p(t,[u]){d&&d.p&&(!v||u&1)&&oe(d,j,t,t[0],v?ce(j,t[0],u,null):ue(t[0]),null)},i(t){v||(q(s.$$.fragment,t),q(d,t),q(p.$$.fragment,t),v=!0)},o(t){R(s.$$.fragment,t),R(d,t),R(p.$$.fragment,t),v=!1},d(t){o(e),o(r),t&&o(a),se(s,t),t&&o(l),t&&o(f),d&&d.d(t),t&&o(_),se(p,t)}}}function ye(n,e,r){let{$$slots:a={},$$scope:s}=e;return pe(()=>{U.init({scriptUrl:"/bee.js",apiUrl:"/_hive"})}),n.$$set=l=>{"$$scope"in l&&r(0,s=l.$$scope)},[s,a]}class Ee extends N{constructor(e){super();O(this,e,ye,$e,Q,{})}}export{Ee as default};
