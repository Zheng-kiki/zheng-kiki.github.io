import{c7 as c}from"./index-ff6046e0.js";import{c as i}from"./icon-90da15ce.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const n=new Set;let e;const r={childList:!0};function f(o){e||(e=i("mutation",s)),e.observe(o.el,r)}function l(o){n.delete(o.el),s(e.takeRecords()),e.disconnect();for(const[t]of n.entries())e.observe(t,r)}function s(o){o.forEach(({target:t})=>{c(t)})}export{f as c,l as d};
