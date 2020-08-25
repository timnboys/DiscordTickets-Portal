(()=>{var u=Object.defineProperty,E=Object.prototype.hasOwnProperty,C=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports),w=e=>u(e,"__esModule",{value:!0}),b=(e,t)=>{if(w(e),typeof t=="object"||typeof t=="function")for(let n in t)!E.call(e,n)&&n!=="default"&&u(e,n,{get:()=>t[n],enumerable:!0});return e},x=e=>e&&e.__esModule?e:b(u({},"default",{value:e,enumerable:!0}),e);var v=C((K,f)=>{f.exports=(e,t,n,i)=>{if(e!==n||t!==i){const o=e>n?n/e:1;e=Math.max(Math.round(e*o),0),t=Math.max(Math.round(t*o),0);const a=t>i?i/t:1;e=Math.max(Math.round(e*a),0),t=Math.max(Math.round(t*a),0)}return{width:e,height:t}}});class k extends HTMLElement{constructor(){super();this.toggle=this.toggle.bind(this)}connectedCallback(){this.addEventListener("click",this.toggle)}toggle(){document.body.classList.contains("theme-dark")?(document.body.classList.remove("theme-dark"),document.body.classList.add("theme-light")):(document.body.classList.remove("theme-light"),document.body.classList.add("theme-dark"))}}customElements.define("theme-switch",k);function M(e,t={},n=null){if(t||(t={}),typeof e=="string"){const i=document.createElement(e);for(const o in t)if(o==="bindEvents")for(const a of Object.keys(t.bindEvents))i.addEventListener(a,t.bindEvents[a]);else i.setAttribute(o,t[o]);if(Array.isArray(n))for(const o of n)o instanceof Node?i.appendChild(o):typeof o=="string"&&i.appendChild(document.createTextNode(o));else n instanceof Node?i.appendChild(n):typeof n=="string"&&i.appendChild(document.createTextNode(n));return i}throw new Error("Failed to create component. You may only pass a string or a Component.")}var s=M;function S(e,t,n="top"){const i=s("div",{class:`tooltip ${n}`},t);let o=null;e.addEventListener("mouseenter",()=>{o=setTimeout(()=>{o=null,document.body.appendChild(i);const a=i.getBoundingClientRect(),r=e.getBoundingClientRect();n==="top"?(i.style.left=`${r.x+r.width/2-a.width/2}px`,i.style.top=`${r.y-a.height-5}px`):n==="right"&&(i.style.left=`${r.x+r.width+10}px`,i.style.top=`${r.y+r.height/2-a.height/2}px`),i.classList.add("entering"),setTimeout(()=>i.classList.remove("entering"),150)},1e3)}),e.addEventListener("mouseleave",()=>{i.classList.add("leaving"),setTimeout(()=>{i.remove(),i.classList.remove("leaving")},150),o&&clearTimeout(o)})}var m=S;class g extends HTMLElement{connectedCallback(){const e=new Date(parseInt(this.dataset.timestamp));this.dataset.type!=="full"&&m(this,new Intl.DateTimeFormat("en-GB",{year:"numeric",weekday:"long",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(e),this.dataset.type==="time"?"right":"top"),this.dataset.type==="date"?this.innerText=g.formatDate(e):this.dataset.type==="time"?this.innerText=`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`:this.dataset.type==="full"?this.innerText=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e):console.warn(`MessageDate: Cannot parse date: unknown format ${this.dataset.type}`)}static formatDate(e){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=new Date(),i=(n.getUTCFullYear()-e.getUTCFullYear())*365+(n.getUTCMonth()-e.getUTCMonth())*30+(n.getUTCDate()-e.getUTCDate()),o=e.getHours().toString().padStart(2,"0"),a=e.getMinutes().toString().padStart(2,"0");return i===0?`Today at ${o}:${a}`:i===1?`Yesterday at ${o}:${a}`:i<7?`Last ${t[e.getDay()]} at ${o}:${a}`:`${e.getDate().toString().padStart(2,"0")}/${e.getMonth().toString().padStart(2,"0")}/${e.getFullYear().toString()}`}}customElements.define("message-date",g);var y=g;function D(e,t){const n=T(t);n.addEventListener("click",i=>i.stopPropagation()),e.addEventListener("click",()=>{document.body.appendChild(n);const i=e.getBoundingClientRect(),o=n.getBoundingClientRect();n.style.left=`${i.x+i.width+10}px`,n.style.top=`${Math.min(i.y,window.innerHeight-o.height-15)}px`,n.classList.add("mounted"),setTimeout(()=>{const a=()=>{n.remove(),n.classList.remove("mounted"),window.removeEventListener("click",a)};window.addEventListener("click",a)},0)})}function T(e){const t=new Date(Number((BigInt(e.id)>>22n)+1420070400000n));return s("div",{class:"user-popout"},[s("div",{class:"header"},[s("img",{src:e.avatar,alt:"avatar"}),s("div",{class:"details"},[s("div",{class:"username"},e.username),s("div",{class:"discriminator"},["#",e.discriminator]),s("div",{class:"badge"},e.badge)])]),s("div",{class:"body"},[s("div",{class:"field"},[s("div",{class:"title"},"Account Creation Date"),s("div",{class:"value"},y.formatDate(t))]),s("div",{class:"field"},[s("div",{class:"title"},"Messages Count"),s("div",{class:"value"},document.querySelectorAll(`discord-message[data-author="${e.id}"]`).length.toString())])])])}var l=D;const L=x(v());function O(e){const t=new URL(e.src),n=I(parseInt(e.dataset.width),parseInt(e.dataset.height));t.searchParams.set("width",n.width),t.searchParams.set("height",n.height),document.body.appendChild(s("div",{class:"modal-container entering",bindEvents:{click:()=>{const i=document.querySelector(".modal-container");i.classList.add("leaving"),setTimeout(()=>i.remove(),150)}}},s("div",{class:"modal-inner image",bindEvents:{click:i=>i.stopPropagation()}},[e.classList.contains("video")?s("video",{src:e.src,autoplay:!0,muted:!0,loop:!0,style:`width: ${n.width}px; height: ${n.height}px;`}):s("img",{src:t.href,alt:"Preview",style:`width: ${n.width}px; height: ${n.height}px;`}),s("a",{href:e.dataset.url,target:"_blank"},"Open original")]))),setTimeout(()=>document.querySelector(".modal-container").classList.remove("entering"),350)}function I(e,t){const n=Math.min(Math.round(.65*window.innerWidth),2e3),i=Math.min(Math.round(.65*window.innerHeight),2e3);return L.default(e,t,n,i)}var p=O;function $(e,t){if(!e)return;const n=s("div",{class:"context-menu"},t.map(i=>s("div",{class:"item",bindEvents:{click:()=>{n.remove(),i.callback()}}},i.name)));e.addEventListener("contextmenu",i=>{i.preventDefault(),i.stopPropagation();const o=document.querySelector(".context-menu");o&&o.remove(),document.body.appendChild(n);const a=n.getBoundingClientRect();n.style.left=`${i.x}px`,n.style.top=`${Math.min(i.y,window.innerHeight-a.height-15)}px`,setTimeout(()=>{const r=()=>{n.remove(),window.removeEventListener("click",r)};window.addEventListener("click",r)},0)})}var d=$;function B(e){const t=document.createElement("textarea");t.value=e,t.style.opacity="0",t.style.position="absolute",t.style.pointerEvents="none",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}var c=B;const H=["January","February","March","April","May","June","July","August","September","October","November","December"];class R extends HTMLElement{connectedCallback(){let e=-1;this.querySelectorAll("discord-message").forEach(t=>{const n=parseInt(t.querySelector("message-date").dataset.timestamp);if(e>0&&Math.floor((n-e)/1e3/60/60/24)>0){t.classList.contains("group-start")||t.classList.add("group-start");const i=new Date(n);this.insertBefore(s("div",{class:"divider"},`${i.getDate().toString().padStart(2,"0")} ${H[i.getMonth()]} ${i.getFullYear()}`),t)}e=n})}}customElements.define("discord-messages",R);class A extends HTMLElement{connectedCallback(){d(this,[{name:"Copy Message ID",callback:()=>c(this.dataset.id)}]),d(this.querySelector(".avatar"),[{name:"Copy Avatar URL",callback:()=>c(this.querySelector(".avatar").src)},{name:"Copy User ID",callback:()=>c(this.dataset.author)}]),d(this.querySelector("message-header .name"),[{name:"Copy User ID",callback:()=>c(this.dataset.author)}])}}customElements.define("discord-message",A);class q extends HTMLElement{connectedCallback(){const e=this.parentElement.previousElementSibling.previousElementSibling;l(this.querySelector(".name"),{id:this.parentElement.parentElement.dataset.author,username:this.parentElement.parentElement.dataset.username,discriminator:e.dataset.discriminator,avatar:e.src,badge:this.querySelector(".badge").textContent})}}customElements.define("message-header",q);class U extends HTMLImageElement{constructor(){super();this.onError=this.onError.bind(this)}connectedCallback(){this.addEventListener("error",this.onError);const e=this.nextElementSibling.nextElementSibling;l(this,{id:this.parentElement.dataset.author,username:this.parentElement.dataset.username,discriminator:this.dataset.discriminator,avatar:this.src,badge:e.querySelector(".badge").textContent})}onError(){this.removeEventListener("error",this.onError);const e=parseInt(this.dataset.discriminator)||0;this.src=`https://cdn.discordapp.com/embed/avatars/${e%4}.png`}}customElements.define("message-avatar",U,{extends:"img"});class P extends HTMLElement{connectedCallback(){const e=[...this.childNodes].filter(t=>!(t instanceof HTMLBRElement));e.length<28&&!e.find(t=>!t.classList||!t.classList.contains("emoji"))&&e.forEach(t=>t.classList.add("jumbo"))}}customElements.define("message-markup",P);class N extends HTMLImageElement{constructor(){super();this.onError=this.onError.bind(this)}connectedCallback(){this.addEventListener("error",this.onError),m(this,this.alt)}onError(){this.parentNode.replaceChild(document.createTextNode(this.alt),this)}}customElements.define("message-emoji",N,{extends:"img"});class F extends HTMLElement{connectedCallback(){d(this,[{name:`Copy ${this.dataset.type[0].toUpperCase()+this.dataset.type.slice(1)} ID`,callback:()=>c(this.dataset.id)}]),this.dataset.type==="user"&&l(this,{id:this.dataset.id||"",username:this.dataset.username||"",discriminator:this.dataset.discriminator||"",avatar:this.dataset.avatar||"",badge:this.dataset.badge||""})}}customElements.define("message-mention",F);class _ extends HTMLSpanElement{constructor(){super();this.onClick=this.onClick.bind(this)}connectedCallback(){this.addEventListener("click",this.onClick)}onClick(){this.classList.add("revealed"),this.removeEventListener("click",this.onClick)}}customElements.define("message-spoiler",_,{extends:"span"});class G extends HTMLPreElement{constructor(){super();this.onClick=this.onClick.bind(this),this.animation=!1}connectedCallback(){this.copyElement=this.querySelector(".copy"),this.copyElement.addEventListener("click",this.onClick)}onClick(){if(this.animation)return;this.animation=!0,this.copyElement.classList.add("success"),this.copyElement.innerText="Copied!",c(this.querySelector("code").textContent),setTimeout(()=>{this.copyElement.classList.remove("success"),this.copyElement.innerText="Copy"},3e3)}}customElements.define("message-codeblock",G,{extends:"pre"});class V extends HTMLImageElement{constructor(){super();this.onClick=()=>p(this),this.onError=this.onError.bind(this)}connectedCallback(){this.dataset.clickable!==void 0&&this.addEventListener("click",this.onClick),this.addEventListener("error",this.onError)}onError(){this.removeEventListener("error",this.onError),this.removeEventListener("click",this.onClick),this.removeAttribute("data-clickable"),this.src="https://discord.com/assets/e0c782560fd96acd7f01fda1f8c6ff24.svg"}}class j extends HTMLVideoElement{constructor(){super();this.onClick=()=>p(this)}connectedCallback(){this.addEventListener("click",this.onClick)}}customElements.define("message-image",V,{extends:"img"});customElements.define("message-gifv",j,{extends:"video"});class Y extends HTMLDivElement{constructor(){super();this.onClick=this.onClick.bind(this)}connectedCallback(){document.querySelector(".play").addEventListener("click",this.onClick)}onClick(){this.innerHTML="";const e=document.createElement("iframe");e.width=parseInt(this.style.width).toString(),e.height=parseInt(this.style.height).toString(),e.frameBorder="0",e.allowFullscreen=!0;const t=new URL(this.dataset.url);t.searchParams.append("autoplay","1"),t.searchParams.append("auto_play","1"),e.src=t.href,this.appendChild(e)}}customElements.define("message-video",Y,{extends:"div"});class J extends HTMLElement{constructor(){super();this.onClick=this.onClick.bind(this)}connectedCallback(){const e=this.querySelector(".preview");e&&e.addEventListener("click",this.onClick)}async onClick(){this.renderModal("LOADING");const e=this.querySelector("a").href,t=await fetch(e);if(!t.ok)return this.renderModal("ERRORED");this.renderModal("FETCHED",await t.text())}renderModal(e,t){const n=this.querySelector("a").textContent;let i=document.querySelector(".modal-container");if(!i){const r=()=>{const h=document.querySelector(".modal-container");h.classList.add("leaving"),setTimeout(()=>h.remove(),150)};i=s("div",{class:"modal-container entering",bindEvents:{click:r}},s("div",{class:"modal-inner",bindEvents:{click:h=>h.stopPropagation()}},s("div",{class:"modal"},[s("div",{class:"modal-header"},"Attachment"),s("div",{class:"modal-body"},[s("div",null,[s("b",null,"name:"),` ${n}`]),s("div",null,[s("b",null,"File size:"),` ${this.querySelector("span").textContent}`]),s("div",{class:"attachment-details"})]),s("div",{class:"modal-footer"},[s("button",{bindEvents:{click:r}},"Got it"),s("a",{href:this.querySelector("a").href,target:"_blank"},"Download")])]))),document.body.appendChild(i)}let o=null;switch(e){case"LOADING":o=s("div",{class:"spinner"});break;case"FETCHED":o=s("div",{class:"contents"},[s("div",{class:"lang"},n.split(".").pop()),s("div",{class:"shitcode"},[s("div",{class:"lines"}),s("code",null,t)]),s("div",{class:"copy"},"Copy")]);break;case"ERRORED":o=s("div",{class:"error"},"Failed to load attachment contents.");break}const a=i.querySelector(".attachment-details");a.innerHTML="",a.appendChild(o)}}customElements.define("message-attachment",J);class W extends HTMLElement{async connectedCallback(){this.render("RESOLVING");const e=await this.fetchInvite();if(e)return this.render("RESOLVED",e);this.render("INVALID")}render(e,t){this.innerHTML="";let n=[];switch(e){case"RESOLVING":n=[s("div",{class:"header"},"Resolving Invite"),s("div",{class:"resolving"})];break;case"INVALID":n=[s("div",{class:"header"},"You received an invite, but..."),s("div",{class:"guild"},[s("img",{src:"https://discord.com/assets/e0c782560fd96acd7f01fda1f8c6ff24.svg",alt:"poop"}),s("div",{class:"invalid"},"Invalid Invite")])];break;case"RESOLVED":n=[s("div",{class:"header"},"You've been invited to join a server"),s("div",{class:"guild"},[s("img",{src:`https://cdn.discordapp.com/icons/${t.guild.id}/${t.guild.icon}.${t.guild.icon.startsWith("a_")?"gif":"png"}`,alt:"Guild Icon"}),s("div",{class:"details"},[s("div",{class:"name"},t.guild.name),s("div",{class:"counts"},[s("div",{class:"online"}),s("span",{class:"count"},[s("b",null,t.approximate_presence_count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),"Online"]),s("div",{class:"offline"}),s("span",{class:"count"},[s("b",null,t.approximate_member_count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),"Members"])])]),s("a",{href:`https://discord.gg/${t.code}`,target:"_blank",class:"button"},"Join")])];break}n.forEach(i=>this.appendChild(i))}async fetchInvite(){const e=await fetch(`https://discord.com/api/v6/invite/${this.dataset.code}?with_counts=true`);if(e.ok)return e.json()}}customElements.define("discord-invite",W);window.addEventListener("contextmenu",e=>{e.preventDefault();const t=document.querySelector(".context-menu");t&&t.remove()});document.querySelectorAll("img[data-clickable], message-markup a, .embed a").forEach(e=>{d(e,[{name:"Copy Link",callback:()=>c(e.src||e.href)},{name:"Open Link",callback:()=>open(e.src||e.href)}])});navigator.userAgent.toLowerCase().indexOf("firefox")!==-1&&document.body.classList.add("firefox");navigator.userAgent.toLowerCase().indexOf("chrome")!==-1&&document.body.classList.add("chrome");})();
