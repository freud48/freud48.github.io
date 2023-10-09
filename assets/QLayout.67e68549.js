import{c as k,d as O}from"./use-router-link.9475169f.js";import{b as W,c as A,d as D,g as N,e as B,f as U,h as P,Q as q}from"./scroll.7979daa8.js";import{c as R,f as V}from"./render.2e11f691.js";import{c,w as x,t as j,o as I,n as K,g as E,E as G,r as m,F as J,M as z,H as X,N as Y,h as v,l as Z}from"./index.c5d38237.js";var ie=R({name:"QRouteTab",props:{...k,...W},emits:A,setup(e,{slots:b,emit:n}){const o=O({useDisableForRouterLinkProps:!1}),{renderTab:a,$tabs:s}=D(e,b,n,{exact:c(()=>e.exact),...o});return x(()=>`${e.name} | ${e.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{s.verifyRouteModel()}),()=>a(o.linkTag.value,o.linkAttrs.value)}});const{passive:Q}=G,_=["both","horizontal","vertical"];var ee=R({name:"QScrollObserver",props:{axis:{type:String,validator:e=>_.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:b}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,a,s;x(()=>e.scrollTarget,()=>{d(),y()});function u(){o!==null&&o();const h=Math.max(0,B(a)),g=U(a),r={top:h-n.position.top,left:g-n.position.left};if(e.axis==="vertical"&&r.top===0||e.axis==="horizontal"&&r.left===0)return;const T=Math.abs(r.top)>=Math.abs(r.left)?r.top<0?"up":"down":r.left<0?"left":"right";n.position={top:h,left:g},n.directionChanged=n.direction!==T,n.delta=r,n.directionChanged===!0&&(n.direction=T,n.inflectionPoint=n.position),b("scroll",{...n})}function y(){a=N(s,e.scrollTarget),a.addEventListener("scroll",i,Q),i(!0)}function d(){a!==void 0&&(a.removeEventListener("scroll",i,Q),a=void 0)}function i(h){if(h===!0||e.debounce===0||e.debounce==="0")u();else if(o===null){const[g,r]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{r(g),o=null}}}const{proxy:S}=E();return x(()=>S.$q.lang.rtl,u),j(()=>{s=S.$el.parentNode,y()}),I(()=>{o!==null&&o(),d()}),Object.assign(S,{trigger:i,getPosition:()=>n}),K}}),ae=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:b,emit:n}){const{proxy:{$q:o}}=E(),a=m(null),s=m(o.screen.height),u=m(e.container===!0?0:o.screen.width),y=m({position:0,direction:"down",inflectionPoint:0}),d=m(0),i=m(J.value===!0?0:P()),S=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=c(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),g=c(()=>i.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),r=c(()=>i.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function T(t){if(e.container===!0||document.qScrollPrevented!==!0){const l={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};y.value=l,e.onScroll!==void 0&&n("scroll",l)}}function F(t){const{height:l,width:f}=t;let w=!1;s.value!==l&&(w=!0,s.value=l,e.onScrollHeight!==void 0&&n("scrollHeight",l),$()),u.value!==f&&(w=!0,u.value=f),w===!0&&e.onResize!==void 0&&n("resize",t)}function M({height:t}){d.value!==t&&(d.value=t,$())}function $(){if(e.container===!0){const t=s.value>d.value?P():0;i.value!==t&&(i.value=t)}}let p=null;const C={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:a,height:s,containerHeight:d,scrollbarWidth:i,totalWidth:c(()=>u.value+i.value),rows:c(()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}}),header:z({size:0,offset:0,space:!1}),right:z({size:300,offset:0,space:!1}),footer:z({size:0,offset:0,space:!1}),left:z({size:300,offset:0,space:!1}),scroll:y,animate(){p!==null?clearTimeout(p):document.body.classList.add("q-body--layout-animate"),p=setTimeout(()=>{p=null,document.body.classList.remove("q-body--layout-animate")},155)},update(t,l,f){C[t][l]=f}};if(X(Z,C),P()>0){let f=function(){t=null,l.classList.remove("hide-scrollbar")},w=function(){if(t===null){if(l.scrollHeight>o.screen.height)return;l.classList.add("hide-scrollbar")}else clearTimeout(t);t=setTimeout(f,300)},L=function(H){t!==null&&H==="remove"&&(clearTimeout(t),f()),window[`${H}EventListener`]("resize",w)},t=null;const l=document.body;x(()=>e.container!==!0?"add":"remove",L),e.container!==!0&&L("add"),Y(()=>{L("remove")})}return()=>{const t=V(b.default,[v(ee,{onScroll:T}),v(q,{onResize:F})]),l=v("div",{class:S.value,style:h.value,ref:e.container===!0?void 0:a,tabindex:-1},t);return e.container===!0?v("div",{class:"q-layout-container overflow-hidden",ref:a},[v(q,{onResize:M}),v("div",{class:"absolute-full",style:g.value},[v("div",{class:"scroll",style:r.value},[l])])]):l}}});export{ae as Q,ie as a};
