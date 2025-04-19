let o="";function d(n="",e="",t=3e3){o=e,l(n),setTimeout(()=>{const a=document.getElementById("custom-alert-div-id");a&&a.remove()},t)}function l(n){let e="";switch(n){case"success":e="alert-success";break;case"error":e="alert-danger";break;case"warning":e="alert-warning";break;case"info":e="alert-info";break;default:e="d-none"}typeof document<"u"&&r(e)}function r(n){const e=document.getElementById("app")||document.getElementById("root")||document.body,t=document.createElement("div");t.style.cssText="position: relative;",t.innerHTML=`<div
      style="position:absolute; top:150px; z-index:2000; width:50%; text-align:center; margin:auto;left:30%;transform:translate(-50px,-50px)"
      class="alert ${n} rounded-0 border-0"
      role="alert"
      id="custom-alert-div-id"
    >
     <span class="fw-bold">${o}</span>
  </div>`,!document.getElementById("custom-alert-div-id")&&t.children.length>0&&e.appendChild(t.children[0])}export{d as c};
