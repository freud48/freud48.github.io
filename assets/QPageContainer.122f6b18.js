import{c as s,a as i}from"./render.2e11f691.js";import{i as p,e as a,l as c,H as u,c as d,h as g,O as l,g as f}from"./index.c5d38237.js";var $=s({name:"QPageContainer",setup(h,{slots:o}){const{proxy:{$q:r}}=f(),e=p(c,a);if(e===a)return console.error("QPageContainer needs to be child of QLayout"),a;u(l,!0);const n=d(()=>{const t={};return e.header.space===!0&&(t.paddingTop=`${e.header.size}px`),e.right.space===!0&&(t[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(t.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(t[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),t});return()=>g("div",{class:"q-page-container",style:n.value},i(o.default))}});export{$ as Q};
