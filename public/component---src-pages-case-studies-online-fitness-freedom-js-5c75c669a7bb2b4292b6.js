(self.webpackChunkvisualgroupdigital=self.webpackChunkvisualgroupdigital||[]).push([[5833],{1823:function(e,t,n){"use strict";n.d(t,{C:function(){return g}});var o=n(2543),a=n(3888),l=n(7487),s=n(9265),r=n(5587),c=n(4667),i=n(7294);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var g=(0,o.G)((function(e,t){var n=(0,a.m)("Badge",e),o=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}((0,l.Lr)(e),["className"]);return i.createElement(s.m$.span,m({ref:t,className:(0,r.cx)("chakra-badge",e.className)},o,{__css:m({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},n)}))}));c.Ts&&(g.displayName="Badge")},9555:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=n(7294)},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var o=n(0),a=n.n(o);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=0,n=0;return e.touches&&e.touches.length?(t=e.touches[0].pageX,n=e.touches[0].pageY):(t=e.pageX,n=e.pageY),{x:t,y:n}}function f(e){return e.condition?a.a.createElement(a.a.Fragment,null,e.children):null}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(l,e);var t,n,o=i(l);function l(){var e,t,n,r,c;s(this,l);for(var i=arguments.length,m=new Array(i),u=0;u<i;u++)m[u]=arguments[u];return p(g(c=o.call.apply(o,[this].concat(m))),"initX",0),p(g(c),"initY",0),p(g(c),"lastX",0),p(g(c),"lastY",0),p(g(c),"_cont",a.a.createRef()),p(g(c),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(e=null===(t=c.props)||void 0===t?void 0:t.startIndex)&&void 0!==e?e:0,multi:!(null===(n=c.props)||void 0===n||null===(r=n.images)||void 0===r||!r.length)}),p(g(c),"createTransform",(function(e,t,n,o){return"translate3d(".concat(e,"px,").concat(t,"px,0px) scale(").concat(n,") rotate(").concat(o,"deg)")})),p(g(c),"stopSideEffect",(function(e){return e.stopPropagation()})),p(g(c),"getCurrentImage",(function(e,t){var n,o,a,l,s;return e.multi?null!==(o=null!==(a=null===(l=t.images[e.current])||void 0===l?void 0:l.url)&&void 0!==a?a:null===(s=t.images)||void 0===s?void 0:s[e.current])&&void 0!==o?o:"":null!==(n=t.image)&&void 0!==n?n:""})),p(g(c),"getCurrentTitle",(function(e,t){var n,o,a,l;return e.multi?null!==(o=null===(a=t.images)||void 0===a||null===(l=a[e.current])||void 0===l?void 0:l.title)&&void 0!==o?o:"":null!==(n=t.title)&&void 0!==n?n:""})),p(g(c),"resetZoom",(function(){return c.setState({x:0,y:0,zoom:1})})),p(g(c),"shockZoom",(function(e){var t,n,o=c.props,a=o.zoomStep,l=void 0===a?.3:a,s=o.allowZoom,r=void 0===s||s,i=o.doubleClickZoom,m=void 0===i?4:i;if(!r||!m)return!1;if(c.stopSideEffect(e),c.state.zoom>1)return c.resetZoom();var g=(l<1?Math.ceil(m/l):l)*l,u=d(e),p=null===(t=c._cont.current)||void 0===t||null===(n=t.getBoundingClientRect)||void 0===n?void 0:n.call(t),f=p.x+p.width/2,v=p.y+p.height/2,E=-1*(u.x-f)*g,b=-1*(u.y-v)*g;c.setState({x:E,y:b,zoom:g})})),p(g(c),"navigateImage",(function(e,t){c.stopSideEffect(t);var n=0;switch(e){case"next":n=c.state.current+1;break;case"prev":n=c.state.current-1}n>=c.props.images.length?n=0:n<0&&(n=c.props.images.length-1),c.setState({current:n,x:0,y:0,zoom:1,rotate:0,loading:!0})})),p(g(c),"startMove",(function(e){if(c.state.zoom<=1)return!1;c.setState({moving:!0});var t=d(e);c.initX=t.x-c.lastX,c.initY=t.y-c.lastY})),p(g(c),"duringMove",(function(e){if(!c.state.moving)return!1;var t=d(e);c.lastX=t.x-c.initX,c.lastY=t.y-c.initY,c.setState({x:t.x-c.initX,y:t.y-c.initY})})),p(g(c),"endMove",(function(e){return c.setState({moving:!1})})),p(g(c),"applyZoom",(function(e){var t=c.props.zoomStep,n=void 0===t?.3:t;switch(e){case"in":c.setState({zoom:c.state.zoom+n});break;case"out":var o=c.state.zoom-n;if(o<1)break;1===o?c.setState({x:0,y:0,zoom:1}):c.setState({zoom:o});break;case"reset":c.resetZoom()}})),p(g(c),"applyRotate",(function(e){switch(e){case"cw":c.setState({rotate:c.state.rotate+90});break;case"acw":c.setState({rotate:c.state.rotate-90})}})),p(g(c),"reset",(function(e){c.stopSideEffect(e),c.setState({x:0,y:0,zoom:1,rotate:0})})),p(g(c),"exit",(function(e){if("function"==typeof c.props.onClose)return c.props.onClose(e);console.error("No Exit function passed on prop: onClose. Clicking the close button will do nothing")})),p(g(c),"shouldShowReset",(function(){return c.state.x||c.state.y||1!==c.state.zoom||0!==c.state.rotate})),p(g(c),"canvasClick",(function(e){var t=c.props.clickOutsideToExit;if((void 0===t||t)&&c.state.zoom<=1)return c.exit(e)})),p(g(c),"keyboardNavigation",(function(e){var t=c.props,n=t.allowZoom,o=void 0===n||n,a=t.allowReset,l=void 0===a||a,s=c.state,r=s.multi,i=s.x,m=s.y,g=s.zoom;switch(e.key){case"ArrowLeft":r&&1===g?c.navigateImage("prev",e):g>1&&c.setState({x:i-20});break;case"ArrowRight":r&&1===g?c.navigateImage("next",e):g>1&&c.setState({x:i+20});break;case"ArrowUp":g>1&&c.setState({y:m+20});break;case"ArrowDown":g>1&&c.setState({y:m-20});break;case"+":o&&c.applyZoom("in");break;case"-":o&&c.applyZoom("out");break;case"Escape":l&&c.shouldShowReset()?c.reset(e):c.exit(e)}})),c}return t=l,(n=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var e=this,t=this.getCurrentImage(this.state,this.props),n=this.getCurrentTitle(this.state,this.props);if(!t)return console.warn("Not showing lightbox because no image(s) was supplied"),null;var o=this.props,l=o.allowZoom,s=void 0===l||l,r=o.allowRotate,c=void 0===r||r,i=o.buttonAlign,m=void 0===i?"flex-end":i,g=o.showTitle,u=void 0===g||g,p=o.allowReset,d=void 0===p||p,v=this.state,E=v.x,b=v.y,N=v.zoom,y=v.rotate,h=v.multi,Z=v.loading,x=v.moving,w=d&&this.shouldShowReset();return a.a.createElement("div",{className:"lb-container"},a.a.createElement("div",{className:"lb-header",style:{justifyContent:m}},a.a.createElement(f,{condition:u&&n},a.a.createElement("div",{className:"lb-title",style:{display:"center"===m?"none":"flex",order:"flex-start"===m?"2":"unset"}},a.a.createElement("span",{title:n,style:{textAlign:"flex-start"===m?"right":"left"}},n))),a.a.createElement(f,{condition:"center"===m||w},a.a.createElement("div",{title:"Reset",style:{order:"flex-start"===m?"1":"unset"},className:"lb-button lb-icon-reset lb-hide-mobile reload ".concat(w?"":"lb-disabled"),onClick:this.reset})),a.a.createElement(f,{condition:h},a.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(t){return e.navigateImage("prev",t)}}),a.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(t){return e.navigateImage("next",t)}})),a.a.createElement(f,{condition:s},a.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return e.applyZoom("in")}}),a.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout ".concat(N<=1?"lb-disabled":""),onClick:function(){return e.applyZoom("out")}})),a.a.createElement(f,{condition:c},a.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return e.applyRotate("acw")}}),a.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return e.applyRotate("cw")}})),a.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===m?"-1":"unset"},onClick:function(t){return e.exit(t)}})),a.a.createElement("div",{className:"lb-canvas".concat(Z?" lb-loading":""),ref:this._cont,onClick:function(t){return e.canvasClick(t)}},a.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(E,b,N,y),cursor:N>1?"grab":"unset",transition:x?"none":"all 0.1s"},onMouseDown:function(t){return e.startMove(t)},onTouchStart:function(t){return e.startMove(t)},onMouseMove:function(t){return e.duringMove(t)},onTouchMove:function(t){return e.duringMove(t)},onMouseUp:function(t){return e.endMove(t)},onMouseLeave:function(t){return e.endMove(t)},onTouchEnd:function(t){return e.endMove(t)},onClick:function(t){return e.stopSideEffect(t)},onDoubleClick:function(t){return e.shockZoom(t)},onLoad:function(t){return e.setState({loading:!1})},className:"lb-img".concat(Z?" lb-loading":""),title:n,src:t,alt:n}),a.a.createElement("div",{className:"mobile-controls lb-show-mobile"},h?a.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(t){return e.navigateImage("prev",t)}}):null,w?a.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,h?a.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(t){return e.navigateImage("next",t)}}):null)))}}])&&r(t.prototype,n),l}(a.a.Component)}])},2010:function(e,t,n){"use strict";n.d(t,{Z:function(){return se}});var o=n(7294),a=n(7361),l=n(120),s=n(4658),r=n(6473),c=n(6749),i=n(9897),m=n(1179),g=n(6040),u=n(6023),p=n(8070),d=n(6274),f=n(4776),v=n(2901),E=n(1034),b=n(2711),N=n(7307),y=n(703),h=n(3258),Z=n(15),x=n(3247),w=n(1931),k=n(8411),C=n(6596),S=n(9119),O=n(1899),R=n(4878),I=n(2626),M=n(4917),j=n(3781),z=n(5274),T=n(1223),_=n(9800),L=n(6215),A=n(2029),D=n(386),P=n(1251),U=n(9327),W=n(7494),X=n(3548),Y=n(3014),B=n(1378),K=n(7218),F=n(1993),G=n(1314),H=n(3585),V=n(5879),Q=n(6421),q=n(2175),$=n(7212),J=n(6501),ee=n(328),te=n(8809),ne=n(2074),oe=n(3853),ae=n(8279),le=n(2884);function se(){return(0,o.useEffect)((function(){le.p8.set(".logos",{x:function(e){return 198*e}}),le.p8.to(".logos",{duration:50,ease:"none",x:"+=10300",modifiers:{x:le.p8.utils.unitize((function(e){return parseFloat(e)%"10300"}))},repeat:-1})})),o.createElement(a.k,{mt:"50px",w:"100%",justifyContent:"center",flexDirection:"column"},o.createElement(a.k,{alignItems:"center",className:"logoContainer",h:"200px",overflowX:"hidden"},o.createElement("img",{src:l.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:s.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:r.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:c.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:i.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:m.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:g.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:u.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:p.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:d.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:f.Z,alt:"provest.svg",className:"logopng logos"}),o.createElement("img",{src:v.Z,alt:"secretcalm.svg",className:"logopng logos"}),o.createElement("img",{src:E.Z,alt:"fitify.svg",className:"logopng logos"}),o.createElement("img",{src:b.Z,alt:"reignsupreme.svg",className:"logopng logos"}),o.createElement("img",{src:N.Z,alt:"rebecca.svg",className:"logopng logos"}),o.createElement("img",{src:y.Z,alt:"regency.svg",className:"logopng logos"}),o.createElement("img",{src:h.Z,alt:"keating.svg",className:"logopng logos"}),o.createElement("img",{src:Z.Z,alt:"schtech.svg",className:"addon logos"}),o.createElement("img",{src:x.Z,alt:"portfoliofm.svg",className:"logopng logos"}),o.createElement("img",{src:w.Z,alt:"futurefitness.svg",className:"logopng logos"}),o.createElement("img",{src:k.Z,alt:"schtech.svg",className:"logopng logos"}),o.createElement("img",{src:C.Z,alt:"adaptinghomes.svg",className:"logopng logos"}),o.createElement("img",{src:S.Z,alt:"onlinefitnessfreedom.svg",className:"logopng logos"}),o.createElement("img",{src:O.Z,alt:"intuneconsulting.svg",className:"logopng logos"}),o.createElement("img",{src:R.Z,alt:"portfoliofm.svg",className:"addon logos"}),o.createElement("img",{src:I.Z,alt:"hydroinstal.svg",className:"addon logos"}),o.createElement("img",{src:M.Z,alt:"futurefitness.svg",className:"addon logos"}),o.createElement("img",{src:j.Z,alt:"intuneconsulting.svg",className:"addon logos"}),o.createElement("img",{src:z.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:T.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:_.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:L.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:A.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:D.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:P.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:U.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:W.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:X.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:Y.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:B.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:K.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:F.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:G.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:H.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:V.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:Q.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:q.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:$.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:J.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:ee.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:ne.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"})),o.createElement(a.k,{my:"50px",justifyContent:"center"},o.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},o.createElement("span",null,"SEE MORE OF OUR CLIENTS"))))}},6059:function(e,t,n){"use strict";n.d(t,{Z:function(){return ce}});var o=n(7294),a=n(7361),l=n(7690),s=n(2200),r=n(120),c=n(4658),i=n(6473),m=n(6749),g=n(9897),u=n(1179),p=n(6040),d=n(6023),f=n(8070),v=n(6274),E=n(4776),b=n(2901),N=n(1034),y=n(2711),h=n(7307),Z=n(703),x=n(3258),w=n(15),k=n(3247),C=n(1931),S=n(8411),O=n(6596),R=n(9119),I=n(1899),M=n(4878),j=n(2626),z=n(4917),T=n(3781),_=n(5274),L=n(1223),A=n(9800),D=n(6215),P=n(2029),U=n(386),W=n(1251),X=n(9327),Y=n(7494),B=n(3548),K=n(3014),F=n(1378),G=n(7218),H=n(1993),V=n(1314),Q=n(3585),q=n(5879),$=n(6421),J=n(2175),ee=n(7212),te=n(6501),ne=n(328),oe=n(8809),ae=n(2074),le=n(3853),se=n(8279),re=n(2010);function ce(){return o.createElement(o.Fragment,null,o.createElement(a.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:"center",display:["none","none","none","none","flex"]},o.createElement(l.xu,null,o.createElement(s.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",o.createElement("span",null,"LOVE")," TO ",o.createElement("br",null),"ADD YOUR LOGO HERE.")),o.createElement(l.xu,{textAlign:"center",py:"20px"},o.createElement(s.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the ",o.createElement("br",null),"fantastic clients we have brought to the UK and International Markets."))),o.createElement(a.k,{flexDirection:"row",flexWrap:"wrap",w:"100%",className:"slideshow",overflowX:"hidden",pt:"20px",display:["none","none","none","none","flex"]},o.createElement(a.k,{alignItems:"center",flexWrap:"wrap",className:"logoContainer",overflowX:"hidden",justifyContent:"center"},o.createElement("img",{src:r.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:c.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:i.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:m.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:g.Z,alt:"intuneconsulting.svg",className:"addon3 "}),o.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:d.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:f.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:v.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:E.Z,alt:"provest.svg",className:"logopng "}),o.createElement("img",{src:b.Z,alt:"secretcalm.svg",className:"logopng "}),o.createElement("img",{src:N.Z,alt:"fitify.svg",className:"logopng "}),o.createElement("img",{src:y.Z,alt:"reignsupreme.svg",className:"logopng "}),o.createElement("img",{src:h.Z,alt:"rebecca.svg",className:"logopng "}),o.createElement("img",{src:Z.Z,alt:"regency.svg",className:"logopng "}),o.createElement("img",{src:x.Z,alt:"keating.svg",className:"logopng "}),o.createElement("img",{src:w.Z,alt:"schtech.svg",className:"addon "}),o.createElement("img",{src:k.Z,alt:"portfoliofm.svg",className:"logopng "}),o.createElement("img",{src:C.Z,alt:"futurefitness.svg",className:"logopng "}),o.createElement("img",{src:S.Z,alt:"schtech.svg",className:"logopng "}),o.createElement("img",{src:O.Z,alt:"adaptinghomes.svg",className:"logopng "}),o.createElement("img",{src:R.Z,alt:"onlinefitnessfreedom.svg",className:"logopng "}),o.createElement("img",{src:I.Z,alt:"intuneconsulting.svg",className:"logopng "}),o.createElement("img",{src:M.Z,alt:"portfoliofm.svg",className:"addon "}),o.createElement("img",{src:j.Z,alt:"hydroinstal.svg",className:"addon "}),o.createElement("img",{src:z.Z,alt:"futurefitness.svg",className:"addon "}),o.createElement("img",{src:T.Z,alt:"intuneconsulting.svg",className:"addon "}),o.createElement("img",{src:_.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:L.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:A.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:D.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:P.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:U.Z,alt:"intuneconsulting.svg",className:"addon3 "}),o.createElement("img",{src:W.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:X.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:Y.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:B.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:K.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:F.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:G.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:H.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:V.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:Q.Z,alt:"intuneconsulting.svg",className:"addon3 "}),o.createElement("img",{src:q.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:$.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:J.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:ee.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:ne.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:se.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "})),o.createElement(a.k,{justifyContent:"center",alignItems:"center",w:"100%",pt:"20px"},o.createElement(a.k,{w:"400px",justifyContent:"space-between",alignItems:"center"},o.createElement(l.xu,{alignSelf:"center"},o.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},o.createElement("span",null,"SEE MORE OF OUR CLIENTS"))),o.createElement(l.xu,null,o.createElement("a",{className:"reqCB",href:"/contact"},"REQUEST A CALL BACK >"))))),o.createElement(a.k,{mt:"100px",w:"100%",display:["block","block","block","block","none"],justifyContent:"center",flexDirection:"column"},o.createElement(a.k,{w:"100%",alignItems:"center",justifyContent:"center"},o.createElement(s.x,{className:"addlogo",fontSize:"xl"},"WE WOULD ",o.createElement("span",null,"LOVE")," TO ADD YOUR LOGO HERE.")),o.createElement(a.k,{my:"20px",px:"50px",w:"100%",alignItems:"center",justifyContent:"center"},o.createElement(s.x,{fontSize:"md",textAlign:"center"},"We’ve worked with more than 100 companies since 2015 Check out some of the fantastic clients we have brought to the UK and International Markets.")),o.createElement(re.Z,null)))}},1742:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var o=n(7294),a=n(7690),l=n(7361),s=n(1823),r=n(9555),c=n.n(r),i=n(2598),m=n(1907),g=n(1327),u=n(6059),p=n(6346),d=n(5106),f=[];function v(e){var t=e.location,n="undefined"!=typeof window,r=(0,o.useState)(),v=r[0],E=r[1],b=(0,o.useState)(),N=(b[0],b[1]),y=function(){E(window.innerWidth),N(window.innerHeight)},h=(0,o.useState)(!1),Z=h[0],x=h[1],w=(0,o.useState)(0),k=w[0],C=w[1],S=f.map((function(e){return e}));return(0,o.useEffect)((function(){return n&&(y(),window.addEventListener("resize",y)),function(){return window.removeEventListener("resize",y)}}),[]),o.createElement(a.xu,{className:"main"},o.createElement(i.Z,null),o.createElement(a.xu,null,v>1280?o.createElement(m.Z,{loc:t,page:"/case_studies"}):o.createElement(d.Z,null),o.createElement(l.k,{justifyContent:"center",alignItems:"center",m:"10px"},o.createElement(a.xu,null,o.createElement("h1",{className:"title"},"Online Fitness Freedom")),o.createElement(a.xu,{alignSelf:"center",py:"20px"},o.createElement(s.C,null,"Fitness Services"))),o.createElement(a.xu,{w:"95%",className:"caseStudyBox",m:"auto",mt:"50px"},o.createElement(a.xu,{textAlign:"center",pt:"30px",className:"viewshead"},o.createElement("h3",null,"onlinefitnessfreedom.com"),o.createElement("p",null,"Improve Their Marketing & Branding To Help Them Maximise Their Clientele Potential.")),o.createElement(l.k,null,o.createElement(l.k,{flexWrap:"wrap",w:"100%",justifyContent:"center"},f.map((function(e,t){return o.createElement(a.xu,{w:"25%",m:"5px"},o.createElement("img",{key:t,src:e,alt:e,style:{borderRadius:"2px",cursor:"pointer"},onClick:function(){x(!0),C(t)}}))})))),o.createElement(l.k,{justifyContent:"center",alignItems:"center",my:"20px"},o.createElement(a.xu,{mx:"10px"},o.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/contact")}},o.createElement("span",null,"BOOKING ENQUIRY"))),o.createElement(a.xu,{mx:"10px"},o.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/case_studies")}},o.createElement("span",null,"VIEW MORE CASE STUDIES"))))),o.createElement(u.Z,null),o.createElement(g.Z,{text:"Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"}),o.createElement(p.Z,null)),Z?o.createElement(c(),{images:S,startIndex:k,onClose:function(){return x((function(e){return!e}))}}):null)}}}]);
//# sourceMappingURL=component---src-pages-case-studies-online-fitness-freedom-js-5c75c669a7bb2b4292b6.js.map