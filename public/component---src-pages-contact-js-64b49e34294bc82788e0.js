"use strict";(self.webpackChunkvisualgroupdigital=self.webpackChunkvisualgroupdigital||[]).push([[5501],{1865:function(e,t,r){r.r(t),r.d(t,{default:function(){return G}});var n=r(7294),a=r(9439),l=r(4207);var i=r(2543),o=r(3888),s=r(7487),u=r(9735),c=r(9265),d=r(5587),p=r(4667);function m(e,t){if(null!=e)if((0,p.mf)(e))e(t);else try{e.current=t}catch(r){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){t.forEach((function(t){return m(t,e)}))}}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var x=(0,r(8308).k)({strict:!1,name:"FormControlContext"}),y=(0,a.Z)(x,2),h=y[0],E=y[1];function g(e){var t=e.id,r=e.isRequired,i=e.isInvalid,o=e.isDisabled,s=e.isReadOnly,u=b(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),c=(0,l.Me)(),p=t||"field-"+c,m=p+"-label",x=p+"-feedback",y=p+"-helptext",h=n.useState(!1),E=(0,a.Z)(h,2),g=E[0],w=E[1],k=n.useState(!1),O=(0,a.Z)(k,2),R=O[0],I=O[1],N=function(e){void 0===e&&(e=!1);var t=(0,n.useState)(e),r=(0,a.Z)(t,2),l=r[0],i=r[1];return[l,{on:(0,n.useCallback)((function(){i(!0)}),[]),off:(0,n.useCallback)((function(){i(!1)}),[]),toggle:(0,n.useCallback)((function(){i((function(e){return!e}))}),[])}]}(),q=(0,a.Z)(N,2),T=q[0],j=q[1],C=n.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({id:y},e,{ref:f(t,(function(e){e&&I(!0)}))})}),[y]),P=n.useCallback((function(e,t){var r,n;return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:t,"data-focus":(0,d.PB)(T),"data-disabled":(0,d.PB)(o),"data-invalid":(0,d.PB)(i),"data-readonly":(0,d.PB)(s),id:null!=(r=e.id)?r:m,htmlFor:null!=(n=e.htmlFor)?n:p})}),[p,o,T,i,s,m]),F=n.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({id:x},e,{ref:f(t,(function(e){e&&w(!0)})),"aria-live":"polite"})}),[x]),_=n.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,u,{ref:t,role:"group"})}),[u]),D=n.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!i,isReadOnly:!!s,isDisabled:!!o,isFocused:!!T,onFocus:j.on,onBlur:j.off,hasFeedbackText:g,setHasFeedbackText:w,hasHelpText:R,setHasHelpText:I,id:p,labelId:m,feedbackId:x,helpTextId:y,htmlProps:u,getHelpTextProps:C,getErrorMessageProps:F,getRootProps:_,getLabelProps:P,getRequiredIndicatorProps:D}}var w=(0,i.G)((function(e,t){var r=(0,o.j)("Form",e),a=g((0,s.Lr)(e)),l=a.getRootProps,i=b(a,["getRootProps","htmlProps"]),p=(0,d.cx)("chakra-form-control",e.className),m=n.useMemo((function(){return i}),[i]);return n.createElement(h,{value:m},n.createElement(u.Fo,{value:r},n.createElement(c.m$.div,v({},l({},t),{className:p,__css:r.container}))))}));p.Ts&&(w.displayName="FormControl");var k=(0,i.G)((function(e,t){var r=E(),a=(0,u.yK)(),l=(0,d.cx)("chakra-form__helper-text",e.className);return n.createElement(c.m$.div,v({},null==r?void 0:r.getHelpTextProps(e,t),{__css:a.helperText,className:l}))}));function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}p.Ts&&(k.displayName="FormHelperText");var R=(0,i.G)((function(e,t){var r,a=(0,o.m)("FormLabel",e),l=(0,s.Lr)(e),i=l.children,u=l.requiredIndicator,p=void 0===u?n.createElement(I,null):u,m=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(l,["className","children","requiredIndicator"]),f=E(),v=null!=(r=null==f?void 0:f.getLabelProps(m,t))?r:O({ref:t},m);return n.createElement(c.m$.label,O({},v,{className:(0,d.cx)("chakra-form__label",l.className),__css:O({display:"block",textAlign:"start"},a)}),i,null!=f&&f.isRequired?p:null)}));p.Ts&&(R.displayName="FormLabel");var I=(0,i.G)((function(e,t){var r=E(),a=(0,u.yK)();if(null==r||!r.isRequired)return null;var l=(0,d.cx)("chakra-form__required-indicator",e.className);return n.createElement(c.m$.span,O({},null==r?void 0:r.getRequiredIndicatorProps(e,t),{__css:a.requiredIndicator,className:l}))}));p.Ts&&(I.displayName="RequiredIndicator");var N=r(4238);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function j(e){var t=function(e){var t,r,n,a=E(),l=e.id,i=e.disabled,o=e.readOnly,s=e.required,u=e.isRequired,c=e.isInvalid,d=e.isReadOnly,p=e.isDisabled,m=e.onFocus,f=e.onBlur,v=T(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),b=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=a&&a.hasFeedbackText&&null!=a&&a.isInvalid&&b.push(a.feedbackId);null!=a&&a.hasHelpText&&b.push(a.helpTextId);return q({},v,{"aria-describedby":b.join(" ")||void 0,id:null!=l?l:null==a?void 0:a.id,isDisabled:null!=(t=null!=i?i:p)?t:null==a?void 0:a.isDisabled,isReadOnly:null!=(r=null!=o?o:d)?r:null==a?void 0:a.isReadOnly,isRequired:null!=(n=null!=s?s:u)?n:null==a?void 0:a.isRequired,isInvalid:null!=c?c:null==a?void 0:a.isInvalid,onFocus:(0,N.v0)(null==a?void 0:a.onFocus,m),onBlur:(0,N.v0)(null==a?void 0:a.onBlur,f)})}(e),r=t.isDisabled,n=t.isInvalid,a=t.isReadOnly,l=t.isRequired;return q({},T(t,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:r,readOnly:a,required:l,"aria-invalid":(0,d.Qm)(n),"aria-required":(0,d.Qm)(l),"aria-readonly":(0,d.Qm)(a)})}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var P=(0,i.G)((function(e,t){var r=(0,o.j)("Input",e),a=j((0,s.Lr)(e)),l=(0,d.cx)("chakra-input",e.className);return n.createElement(c.m$.input,C({},a,{__css:r.field,ref:t,className:l}))}));p.Ts&&(P.displayName="Input"),P.id="Input";var F=r(4526);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var D=(0,i.G)((function(e,t){var r=(0,o.m)("Textarea",e),a=(0,s.Lr)(e),l=a.className,i=a.rows,u=j(function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(a,["className","rows"])),p=i?(0,F.CE)(r,["h","minH","height","minHeight"]):r;return n.createElement(c.m$.textarea,_({ref:t,rows:i},u,{className:(0,d.cx)("chakra-textarea",l),__css:p}))}));p.Ts&&(D.displayName="Textarea");var L=r(7690),B=r(7361),H=r(2200),A=r(2598),S=r(1907),Z=r(1501),M=r(5106);function G(e){var t=e.location,r="undefined"!=typeof window,a=(0,n.useState)(),l=a[0],i=a[1],o=(0,n.useState)(),s=(o[0],o[1]),u=function(){i(window.innerWidth),s(window.innerHeight)};return(0,n.useEffect)((function(){return r&&(u(),window.addEventListener("resize",u)),function(){return window.removeEventListener("resize",u)}}),[]),n.createElement(L.xu,{className:"main",overflowX:"hidden"},n.createElement(A.Z,null),l>1280?n.createElement(S.Z,{loc:t,page:"/contact"}):n.createElement(M.Z,{page:"/contact"}),n.createElement(L.xu,null,n.createElement(B.k,{w:"100%",flexDirection:"column",alignItems:"center",flexWrap:"wrap",px:"5%",mt:"60px"},n.createElement(B.k,{className:"contactgetstarted",justifyContent:"center",flexDirection:"column",alignItems:"center",w:"100%",py:"10px",borderBottom:"0.5px solid rgba(0, 0, 0, 0.15);"},n.createElement(H.x,{as:"h3",fontSize:["23px","23px","32px","32px","32px"]},"Get started"),n.createElement(H.x,{as:"p",fontSize:["14px","14px","18px","22px","22px"]},"It only takes a few minutes to kick off a project. Fill in the details below and we’ll be in touch.")),n.createElement(B.k,{className:"contactgetstarted2",w:"100%",px:"5%",justifyContent:"center",alignItems:"center",borderBottom:"0.5px solid rgba(0, 0, 0, 0.15);"},n.createElement(B.k,{pt:"32px",justifyContent:"center",flexDirection:"column",w:"100%",flexWrap:"wrap"},n.createElement(B.k,{justifyContent:"space-between",w:"100%",flexWrap:"wrap"},n.createElement(L.xu,{w:["100%","100%","100%","49%","49%"]},n.createElement(w,{id:"name"},n.createElement(R,null,"YOUR NAME"),n.createElement(P,{type:"email",style:{border:"1px solid rgba(238, 111, 25, 0.54)",borderRadius:"8px"},isRequired:!0}))),n.createElement(L.xu,{w:["100%","100%","100%","49%","49%"]},n.createElement(w,{id:"email"},n.createElement(R,null,"EMAIL"),n.createElement(P,{type:"email",style:{border:"1px solid rgba(238, 111, 25, 0.54)",borderRadius:"8px"},isRequired:!0})))),n.createElement(B.k,{justifyContent:"space-between",w:"100%",pt:"20px",flexWrap:"wrap"},n.createElement(L.xu,{w:["100%","100%","100%","49%","49%"]},n.createElement(w,{id:"location"},n.createElement(R,null,"LOCATION"),n.createElement(P,{type:"email",className:"inputField",style:{border:"1px solid rgba(238, 111, 25, 0.54)",borderRadius:"8px"},isRequired:!0}))),n.createElement(L.xu,{w:["100%","100%","100%","49%","49%"]},n.createElement(w,{id:"company_name"},n.createElement(R,null,"COMPANY NAME"),n.createElement(P,{type:"email",style:{border:"1px solid rgba(238, 111, 25, 0.54)",borderRadius:"8px"},isRequired:!0})))))),n.createElement(L.xu,{className:"contactgetstarted3",pt:"50px",px:"5%",w:"100%"},n.createElement(w,{id:"textarea",pt:"20px"},n.createElement(R,null,"PROJECT DETAILS"),n.createElement(D,{size:"md",placeholder:"Anything else you'd like to add?",resize:"none",style:{border:"1px solid rgba(238, 111, 25, 0.54)",borderRadius:"8px"}}))),n.createElement(L.xu,{pt:"50px",textAlign:"center"},n.createElement("button",{className:"contactsubmit"},"SUBMIT"))),n.createElement(Z.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-64b49e34294bc82788e0.js.map