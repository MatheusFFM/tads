if(!self.define){let s,e={};const n=(n,r)=>(n=new URL(n+".js",r).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(r,t)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const c=s=>n(s,i),l={module:{uri:i},exports:o,require:c};e[i]=Promise.all(r.map((s=>l[s]||c(s)))).then((s=>(t(...s),o)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"tads"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/tads/css/app.4b5ca9c1.css",revision:null},{url:"/tads/css/chunk-vendors.0bd3f21c.css",revision:null},{url:"/tads/index.html",revision:"6b7ceb898ae1927c77c396d9d9738ecb"},{url:"/tads/js/app.79c0f07b.js",revision:null},{url:"/tads/js/chunk-vendors.dd89c13a.js",revision:null},{url:"/tads/manifest.json",revision:"21318116377953c7abaef902a7245835"},{url:"/tads/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
