(self.webpackChunkvisualgroupdigital=self.webpackChunkvisualgroupdigital||[]).push([[8785],{1823:function(e,t,n){"use strict";n.d(t,{C:function(){return g}});var o=n(2543),a=n(3888),l=n(7487),s=n(9265),r=n(5587),c=n(4667),i=n(7294);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var g=(0,o.G)((function(e,t){var n=(0,a.m)("Badge",e),o=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}((0,l.Lr)(e),["className"]);return i.createElement(s.m$.span,m({ref:t,className:(0,r.cx)("chakra-badge",e.className)},o,{__css:m({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},n)}))}));c.Ts&&(g.displayName="Badge")},9555:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=n(7294)},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var o=n(0),a=n.n(o);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=0,n=0;return e.touches&&e.touches.length?(t=e.touches[0].pageX,n=e.touches[0].pageY):(t=e.pageX,n=e.pageY),{x:t,y:n}}function f(e){return e.condition?a.a.createElement(a.a.Fragment,null,e.children):null}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(l,e);var t,n,o=i(l);function l(){var e,t,n,r,c;s(this,l);for(var i=arguments.length,m=new Array(i),u=0;u<i;u++)m[u]=arguments[u];return p(g(c=o.call.apply(o,[this].concat(m))),"initX",0),p(g(c),"initY",0),p(g(c),"lastX",0),p(g(c),"lastY",0),p(g(c),"_cont",a.a.createRef()),p(g(c),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(e=null===(t=c.props)||void 0===t?void 0:t.startIndex)&&void 0!==e?e:0,multi:!(null===(n=c.props)||void 0===n||null===(r=n.images)||void 0===r||!r.length)}),p(g(c),"createTransform",(function(e,t,n,o){return"translate3d(".concat(e,"px,").concat(t,"px,0px) scale(").concat(n,") rotate(").concat(o,"deg)")})),p(g(c),"stopSideEffect",(function(e){return e.stopPropagation()})),p(g(c),"getCurrentImage",(function(e,t){var n,o,a,l,s;return e.multi?null!==(o=null!==(a=null===(l=t.images[e.current])||void 0===l?void 0:l.url)&&void 0!==a?a:null===(s=t.images)||void 0===s?void 0:s[e.current])&&void 0!==o?o:"":null!==(n=t.image)&&void 0!==n?n:""})),p(g(c),"getCurrentTitle",(function(e,t){var n,o,a,l;return e.multi?null!==(o=null===(a=t.images)||void 0===a||null===(l=a[e.current])||void 0===l?void 0:l.title)&&void 0!==o?o:"":null!==(n=t.title)&&void 0!==n?n:""})),p(g(c),"resetZoom",(function(){return c.setState({x:0,y:0,zoom:1})})),p(g(c),"shockZoom",(function(e){var t,n,o=c.props,a=o.zoomStep,l=void 0===a?.3:a,s=o.allowZoom,r=void 0===s||s,i=o.doubleClickZoom,m=void 0===i?4:i;if(!r||!m)return!1;if(c.stopSideEffect(e),c.state.zoom>1)return c.resetZoom();var g=(l<1?Math.ceil(m/l):l)*l,u=d(e),p=null===(t=c._cont.current)||void 0===t||null===(n=t.getBoundingClientRect)||void 0===n?void 0:n.call(t),f=p.x+p.width/2,v=p.y+p.height/2,E=-1*(u.x-f)*g,b=-1*(u.y-v)*g;c.setState({x:E,y:b,zoom:g})})),p(g(c),"navigateImage",(function(e,t){c.stopSideEffect(t);var n=0;switch(e){case"next":n=c.state.current+1;break;case"prev":n=c.state.current-1}n>=c.props.images.length?n=0:n<0&&(n=c.props.images.length-1),c.setState({current:n,x:0,y:0,zoom:1,rotate:0,loading:!0})})),p(g(c),"startMove",(function(e){if(c.state.zoom<=1)return!1;c.setState({moving:!0});var t=d(e);c.initX=t.x-c.lastX,c.initY=t.y-c.lastY})),p(g(c),"duringMove",(function(e){if(!c.state.moving)return!1;var t=d(e);c.lastX=t.x-c.initX,c.lastY=t.y-c.initY,c.setState({x:t.x-c.initX,y:t.y-c.initY})})),p(g(c),"endMove",(function(e){return c.setState({moving:!1})})),p(g(c),"applyZoom",(function(e){var t=c.props.zoomStep,n=void 0===t?.3:t;switch(e){case"in":c.setState({zoom:c.state.zoom+n});break;case"out":var o=c.state.zoom-n;if(o<1)break;1===o?c.setState({x:0,y:0,zoom:1}):c.setState({zoom:o});break;case"reset":c.resetZoom()}})),p(g(c),"applyRotate",(function(e){switch(e){case"cw":c.setState({rotate:c.state.rotate+90});break;case"acw":c.setState({rotate:c.state.rotate-90})}})),p(g(c),"reset",(function(e){c.stopSideEffect(e),c.setState({x:0,y:0,zoom:1,rotate:0})})),p(g(c),"exit",(function(e){if("function"==typeof c.props.onClose)return c.props.onClose(e);console.error("No Exit function passed on prop: onClose. Clicking the close button will do nothing")})),p(g(c),"shouldShowReset",(function(){return c.state.x||c.state.y||1!==c.state.zoom||0!==c.state.rotate})),p(g(c),"canvasClick",(function(e){var t=c.props.clickOutsideToExit;if((void 0===t||t)&&c.state.zoom<=1)return c.exit(e)})),p(g(c),"keyboardNavigation",(function(e){var t=c.props,n=t.allowZoom,o=void 0===n||n,a=t.allowReset,l=void 0===a||a,s=c.state,r=s.multi,i=s.x,m=s.y,g=s.zoom;switch(e.key){case"ArrowLeft":r&&1===g?c.navigateImage("prev",e):g>1&&c.setState({x:i-20});break;case"ArrowRight":r&&1===g?c.navigateImage("next",e):g>1&&c.setState({x:i+20});break;case"ArrowUp":g>1&&c.setState({y:m+20});break;case"ArrowDown":g>1&&c.setState({y:m-20});break;case"+":o&&c.applyZoom("in");break;case"-":o&&c.applyZoom("out");break;case"Escape":l&&c.shouldShowReset()?c.reset(e):c.exit(e)}})),c}return t=l,(n=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var e=this,t=this.getCurrentImage(this.state,this.props),n=this.getCurrentTitle(this.state,this.props);if(!t)return console.warn("Not showing lightbox because no image(s) was supplied"),null;var o=this.props,l=o.allowZoom,s=void 0===l||l,r=o.allowRotate,c=void 0===r||r,i=o.buttonAlign,m=void 0===i?"flex-end":i,g=o.showTitle,u=void 0===g||g,p=o.allowReset,d=void 0===p||p,v=this.state,E=v.x,b=v.y,N=v.zoom,h=v.rotate,y=v.multi,x=v.loading,Z=v.moving,w=d&&this.shouldShowReset();return a.a.createElement("div",{className:"lb-container"},a.a.createElement("div",{className:"lb-header",style:{justifyContent:m}},a.a.createElement(f,{condition:u&&n},a.a.createElement("div",{className:"lb-title",style:{display:"center"===m?"none":"flex",order:"flex-start"===m?"2":"unset"}},a.a.createElement("span",{title:n,style:{textAlign:"flex-start"===m?"right":"left"}},n))),a.a.createElement(f,{condition:"center"===m||w},a.a.createElement("div",{title:"Reset",style:{order:"flex-start"===m?"1":"unset"},className:"lb-button lb-icon-reset lb-hide-mobile reload ".concat(w?"":"lb-disabled"),onClick:this.reset})),a.a.createElement(f,{condition:y},a.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(t){return e.navigateImage("prev",t)}}),a.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(t){return e.navigateImage("next",t)}})),a.a.createElement(f,{condition:s},a.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return e.applyZoom("in")}}),a.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout ".concat(N<=1?"lb-disabled":""),onClick:function(){return e.applyZoom("out")}})),a.a.createElement(f,{condition:c},a.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return e.applyRotate("acw")}}),a.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return e.applyRotate("cw")}})),a.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===m?"-1":"unset"},onClick:function(t){return e.exit(t)}})),a.a.createElement("div",{className:"lb-canvas".concat(x?" lb-loading":""),ref:this._cont,onClick:function(t){return e.canvasClick(t)}},a.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(E,b,N,h),cursor:N>1?"grab":"unset",transition:Z?"none":"all 0.1s"},onMouseDown:function(t){return e.startMove(t)},onTouchStart:function(t){return e.startMove(t)},onMouseMove:function(t){return e.duringMove(t)},onTouchMove:function(t){return e.duringMove(t)},onMouseUp:function(t){return e.endMove(t)},onMouseLeave:function(t){return e.endMove(t)},onTouchEnd:function(t){return e.endMove(t)},onClick:function(t){return e.stopSideEffect(t)},onDoubleClick:function(t){return e.shockZoom(t)},onLoad:function(t){return e.setState({loading:!1})},className:"lb-img".concat(x?" lb-loading":""),title:n,src:t,alt:n}),a.a.createElement("div",{className:"mobile-controls lb-show-mobile"},y?a.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(t){return e.navigateImage("prev",t)}}):null,w?a.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,y?a.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(t){return e.navigateImage("next",t)}}):null)))}}])&&r(t.prototype,n),l}(a.a.Component)}])},2010:function(e,t,n){"use strict";n.d(t,{Z:function(){return ae}});var o=n(7294),a=n(7361),l=n(3209),s=n(56),r=n(4340),c=n(7196),i=n(274),m=n(5574),g=n(9593),u=n(7288),p=n(1404),d=n(1065),f=n(8452),v=n(5426),E=n(2937),b=n(6789),N=n(7965),h=n(4408),y=n(2226),x=n(3142),Z=n(4338),w=n(6842),k=n(1169),C=n(2791),S=n(9661),O=n(5460),R=n(3845),I=n(7892),z=n(1237),j=n(5771),M=n(4004),_=n(9714),T=n(7382),W=n(8487),A=n(3396),P=n(5087),D=n(4643),L=n(3268),X=n(7141),U=n(4691),Y=n(2935),K=n(8777),G=n(5247),F=n(3805),B=n(5349),H=n(8158),V=n(9556),q=n(8915),Q=n(6964),J=n(7891),$=n(2422),ee=n(8992),te=n(6001),ne=n(6576),oe=n(2884);function ae(){return(0,o.useEffect)((function(){oe.p8.set(".logos",{x:function(e){return 198*e}}),oe.p8.to(".logos",{duration:50,ease:"none",x:"+=10300",modifiers:{x:oe.p8.utils.unitize((function(e){return parseFloat(e)%"10300"}))},repeat:-1})})),o.createElement(a.k,{mt:"50px",w:"100%",justifyContent:"center",flexDirection:"column"},o.createElement(a.k,{alignItems:"center",className:"logoContainer",h:"200px",overflowX:"hidden"},o.createElement("img",{src:l.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:s.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:r.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:c.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:i.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:m.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:g.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:u.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:p.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:d.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:f.Z,alt:"provest.svg",className:"logopng logos"}),o.createElement("img",{src:v.Z,alt:"secretcalm.svg",className:"logopng logos"}),o.createElement("img",{src:E.Z,alt:"houseofstreng.svg",className:"logopng logos"}),o.createElement("img",{src:b.Z,alt:"fitify.svg",className:"logopng logos"}),o.createElement("img",{src:N.Z,alt:"reignsupreme.svg",className:"logopng logos"}),o.createElement("img",{src:h.Z,alt:"rebecca.svg",className:"logopng logos"}),o.createElement("img",{src:y.Z,alt:"regency.svg",className:"logopng logos"}),o.createElement("img",{src:x.Z,alt:"keating.svg",className:"logopng logos"}),o.createElement("img",{src:Z.Z,alt:"schtech.svg",className:"addon logos"}),o.createElement("img",{src:w.Z,alt:"portfoliofm.svg",className:"logopng logos"}),o.createElement("img",{src:k.Z,alt:"futurefitness.svg",className:"logopng logos"}),o.createElement("img",{src:C.Z,alt:"schtech.svg",className:"logopng logos"}),o.createElement("img",{src:S.Z,alt:"adaptinghomes.svg",className:"logopng logos"}),o.createElement("img",{src:O.Z,alt:"onlinefitnessfreedom.svg",className:"logopng logos"}),o.createElement("img",{src:R.Z,alt:"intuneconsulting.svg",className:"logopng logos"}),o.createElement("img",{src:I.Z,alt:"portfoliofm.svg",className:"addon logos"}),o.createElement("img",{src:z.Z,alt:"hydroinstal.svg",className:"addon logos"}),o.createElement("img",{src:j.Z,alt:"futurefitness.svg",className:"addon logos"}),o.createElement("img",{src:M.Z,alt:"intuneconsulting.svg",className:"addon logos"}),o.createElement("img",{src:_.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:T.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:W.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:A.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:P.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:D.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:L.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:X.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:U.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:Y.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:K.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:G.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:F.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:B.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:H.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:V.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:q.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:Q.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:J.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:$.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:ee.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:ne.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"})),o.createElement(a.k,{my:"50px",justifyContent:"center"},o.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},o.createElement("span",null,"SEE MORE OF OUR CLIENTS"))))}},6059:function(e,t,n){"use strict";n.d(t,{Z:function(){return se}});var o=n(7294),a=n(7361),l=n(7690),s=n(2200),r=n(3209),c=n(56),i=n(4340),m=n(7196),g=n(274),u=n(5574),p=n(9593),d=n(7288),f=n(1404),v=n(1065),E=n(8452),b=n(5426),N=n(2937),h=n(6789),y=n(7965),x=n(4408),Z=n(2226),w=n(3142),k=n(4338),C=n(6842),S=n(1169),O=n(2791),R=n(9661),I=n(5460),z=n(3845),j=n(7892),M=n(1237),_=n(5771),T=n(4004),W=n(9714),A=n(7382),P=n(8487),D=n(3396),L=n(5087),X=n(4643),U=n(3268),Y=n(7141),K=n(4691),G=n(2935),F=n(8777),B=n(5247),H=n(3805),V=n(5349),q=n(8158),Q=n(9556),J=n(8915),$=n(6964),ee=n(7891),te=n(2422),ne=n(8992),oe=n(6001),ae=n(6576),le=n(2010);function se(){return o.createElement(o.Fragment,null,o.createElement(a.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:"center",display:["none","none","none","none","flex"]},o.createElement(l.xu,null,o.createElement(s.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",o.createElement("span",null,"LOVE")," TO ",o.createElement("br",null),"ADD YOUR LOGO HERE.")),o.createElement(l.xu,{textAlign:"center",py:"20px"},o.createElement(s.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the ",o.createElement("br",null),"fantastic clients we have brought to the UK and International Markets."))),o.createElement(a.k,{flexDirection:"row",flexWrap:"wrap",w:"100%",className:"slideshow",overflowX:"hidden",pt:"20px",display:["none","none","none","none","flex"]},o.createElement(a.k,{alignItems:"center",flexWrap:"wrap",className:"logoContainer",overflowX:"hidden",justifyContent:"center"},o.createElement("img",{src:r.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:c.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:i.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:m.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:g.Z,alt:"intuneconsulting.svg",className:"addon3 "}),o.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:d.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:f.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:v.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:E.Z,alt:"provest.svg",className:"logopng "}),o.createElement("img",{src:b.Z,alt:"secretcalm.svg",className:"logopng "}),o.createElement("img",{src:N.Z,alt:"houseofstreng.svg",className:"logopng "}),o.createElement("img",{src:h.Z,alt:"fitify.svg",className:"logopng "}),o.createElement("img",{src:y.Z,alt:"reignsupreme.svg",className:"logopng "}),o.createElement("img",{src:x.Z,alt:"rebecca.svg",className:"logopng "}),o.createElement("img",{src:Z.Z,alt:"regency.svg",className:"logopng "}),o.createElement("img",{src:w.Z,alt:"keating.svg",className:"logopng "}),o.createElement("img",{src:k.Z,alt:"schtech.svg",className:"addon "}),o.createElement("img",{src:C.Z,alt:"portfoliofm.svg",className:"logopng "}),o.createElement("img",{src:S.Z,alt:"futurefitness.svg",className:"logopng "}),o.createElement("img",{src:O.Z,alt:"schtech.svg",className:"logopng "}),o.createElement("img",{src:R.Z,alt:"adaptinghomes.svg",className:"logopng "}),o.createElement("img",{src:I.Z,alt:"onlinefitnessfreedom.svg",className:"logopng "}),o.createElement("img",{src:z.Z,alt:"intuneconsulting.svg",className:"logopng "}),o.createElement("img",{src:j.Z,alt:"portfoliofm.svg",className:"addon "}),o.createElement("img",{src:M.Z,alt:"hydroinstal.svg",className:"addon "}),o.createElement("img",{src:_.Z,alt:"futurefitness.svg",className:"addon "}),o.createElement("img",{src:T.Z,alt:"intuneconsulting.svg",className:"addon "}),o.createElement("img",{src:W.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:A.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:P.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:D.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:L.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:X.Z,alt:"intuneconsulting.svg",className:"addon3 "}),o.createElement("img",{src:U.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:Y.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:K.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:G.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:F.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:B.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:H.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:V.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:q.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:Q.Z,alt:"intuneconsulting.svg",className:"addon3 "}),o.createElement("img",{src:J.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:$.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:ee.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:te.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:ne.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "})),o.createElement(a.k,{justifyContent:"center",alignItems:"center",w:"100%",pt:"20px"},o.createElement(a.k,{w:"400px",justifyContent:"space-between",alignItems:"center"},o.createElement(l.xu,{alignSelf:"center"},o.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},o.createElement("span",null,"SEE MORE OF OUR CLIENTS"))),o.createElement(l.xu,null,o.createElement("a",{className:"reqCB",href:"/contact"},"REQUEST A CALL BACK >"))))),o.createElement(a.k,{mt:"100px",w:"100%",display:["block","block","block","block","none"],justifyContent:"center",flexDirection:"column"},o.createElement(a.k,{w:"100%",alignItems:"center",justifyContent:"center"},o.createElement(s.x,{className:"addlogo",fontSize:"xl"},"WE WOULD ",o.createElement("span",null,"LOVE")," TO ADD YOUR LOGO HERE.")),o.createElement(a.k,{my:"20px",px:"50px",w:"100%",alignItems:"center",justifyContent:"center"},o.createElement(s.x,{fontSize:"md",textAlign:"center"},"We’ve worked with more than 100 companies since 2015 Check out some of the fantastic clients we have brought to the UK and International Markets.")),o.createElement(le.Z,null)))}},5870:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var o=n(7294),a=n(7690),l=n(7361),s=n(1823),r=n(9555),c=n.n(r),i=n(2598),m=n(1907),g=n(8363),u=n(6059),p=n(1501),d=n(5106),f=n(2321);function v(e){var t=e.location,n="undefined"!=typeof window,r=(0,o.useState)(),v=r[0],E=r[1],b=(0,o.useState)(),N=(b[0],b[1]),h=function(){E(window.innerWidth),N(window.innerHeight)},y=(0,o.useState)(!1),x=y[0],Z=y[1],w=(0,o.useState)(0),k=w[0],C=w[1],S=f.map((function(e){return e}));return(0,o.useEffect)((function(){return n&&(h(),window.addEventListener("resize",h)),function(){return window.removeEventListener("resize",h)}}),[]),o.createElement(a.xu,{className:"main"},o.createElement(i.Z,null),o.createElement(a.xu,null,v>1280?o.createElement(m.Z,{loc:t,page:"/case_studies"}):o.createElement(d.Z,null),o.createElement(l.k,{justifyContent:"center",alignItems:"center",m:"10px"},o.createElement(a.xu,null,o.createElement("h1",{className:"title"},"Intune Consulting")),o.createElement(a.xu,{alignSelf:"center",py:"20px"},o.createElement(s.C,null,"Consulting Company"))),o.createElement(a.xu,{w:"95%",className:"caseStudyBox",m:"auto",mt:"50px"},o.createElement(a.xu,{textAlign:"center",pt:"30px",className:"viewshead"},o.createElement("h3",null,"intune.consulting/"),o.createElement("p",null,"Whilst each organisation is unique, here are some specific offerings.")),o.createElement(l.k,null,o.createElement(l.k,{flexWrap:"wrap",w:"100%",justifyContent:"center"},f.map((function(e,t){return o.createElement(a.xu,{w:"25%",m:"5px"},o.createElement("img",{key:t,src:e,alt:e,style:{borderRadius:"2px",cursor:"pointer"},onClick:function(){Z(!0),C(t)}}))})))),o.createElement(l.k,{justifyContent:"center",alignItems:"center",my:"20px"},o.createElement(a.xu,{mx:"10px"},o.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/contact")}},o.createElement("span",null,"BOOKING ENQUIRY"))),o.createElement(a.xu,{mx:"10px"},o.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/case_studies")}},o.createElement("span",null,"VIEW MORE CASE STUDIES"))))),o.createElement(u.Z,null),o.createElement(g.Z,{text:"Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"}),o.createElement(p.Z,null)),x?o.createElement(c(),{images:S,startIndex:k,onClose:function(){return Z((function(e){return!e}))}}):null)}},2321:function(e){"use strict";e.exports=JSON.parse('["https://drive.google.com/uc?export=view&id=1NCJnY6Oz7q451m0lXwqWd5D-pi_PNGTH","https://drive.google.com/uc?export=view&id=1YWZ-XNWFreb7QVdOEH1yss1PipWslecS","https://drive.google.com/uc?export=view&id=1Fd1QgX4vha7jJmeS9zfmHPie5QNzSsdS","https://drive.google.com/uc?export=view&id=1AnXbIWHxlosT1chK-rz51Z0CuGrOzGGo","https://drive.google.com/uc?export=view&id=1Uv--PDW69xFhbWhAnWManDG8DagS9930","https://drive.google.com/uc?export=view&id=1rHPXVoe1V2x5DFwqN_I1FMaTI3lbGWEF","https://drive.google.com/uc?export=view&id=1vh8w9A_USOrVuhWPp_QV4Te9fgRndd3d","https://drive.google.com/uc?export=view&id=1gP45jW1rA-N3tEqorLTHdKwNREk8t9lg","https://drive.google.com/uc?export=view&id=1Z44BE4tsSVn-9q7s2JCGXffzRAWXE8Xf","https://drive.google.com/uc?export=view&id=1tnnKIeyY1eIdNm96SY--l6UNRg2p6vrf"]')}}]);
//# sourceMappingURL=component---src-pages-case-studies-intune-consulting-js-9f4c55f73258f9d7c2a2.js.map