import{r as l,j as e}from"./app-BK8BXCof.js";import{g as x,p as j}from"./apis-CbdJYn5R.js";import"./apiEndpoints-DYi1yudi.js";/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,a,c)=>c?c.toUpperCase():a.toLowerCase()),p=s=>{const r=b(s);return r.charAt(0).toUpperCase()+r.slice(1)},u=(...s)=>s.filter((r,a,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===a).join(" ").trim();/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=l.forwardRef(({color:s="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:c,className:n="",children:i,iconNode:o,...h},m)=>l.createElement("svg",{ref:m,...N,width:r,height:r,stroke:s,strokeWidth:c?Number(a)*24/Number(r):a,className:u("lucide",n),...h},[...o.map(([t,d])=>l.createElement(t,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(s,r)=>{const a=l.forwardRef(({className:c,...n},i)=>l.createElement(f,{ref:i,iconNode:r,className:u(`lucide-${y(p(s))}`,`lucide-${s}`,c),...n}));return a.displayName=p(s),a};/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],g=A("pencil",w),v=()=>{const[s,r]=l.useState(""),[a,c]=l.useState([]),[n,i]=l.useState(null);l.useEffect(()=>{o()},[]);const o=async()=>{try{const t=await x();t!=null&&t.success&&c(t.data||[])}catch(t){console.error("Error fetching article types:",t)}},h=async()=>{if(s.trim())try{const t={title:s};n&&(t.id=n),await j(t)&&(r(""),i(null),o())}catch(t){console.error("Error saving article type:",t)}},m=t=>{r(t.title),i(t.id)};return e.jsxs("div",{className:"container mt-4",children:[e.jsx("div",{className:"card shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h4",{className:"card-title mb-4",children:n?"Edit Article Type":"Add New Article Type"}),e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("input",{type:"text",placeholder:"Enter article type title",value:s,onChange:t=>r(t.target.value),className:"form-control"}),e.jsx("button",{onClick:h,className:"btn btn-primary",children:n?"Update":"Save"})]})]})}),e.jsx("div",{className:"card shadow-sm mt-4",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h5",{className:"card-title",children:"All Article Types"}),e.jsxs("table",{className:"table table-bordered table-hover mt-3",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",style:{width:"10%"},children:"#"}),e.jsx("th",{scope:"col",children:"Title"}),e.jsx("th",{scope:"col",className:"text-center",style:{width:"15%"},children:"Action"})]})}),e.jsx("tbody",{children:a.length>0?a.map((t,d)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-center",children:d+1}),e.jsx("td",{children:t.title}),e.jsx("td",{className:"text-center",children:e.jsxs("button",{onClick:()=>m(t),className:"btn btn-sm btn-warning",title:"Edit",children:[e.jsx(g,{size:16,className:"me-1"}),"Edit"]})})]},t.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"3",className:"text-center text-muted py-3",children:"No article types found."})})})]})]})})]})},k=()=>e.jsx(v,{});export{k as default};
