(self.webpackChunkvisualgroupdigital=self.webpackChunkvisualgroupdigital||[]).push([[9984],{1823:function(e,t,l){"use strict";l.d(t,{C:function(){return m}});var o=l(2543),a=l(3888),s=l(7487),n=l(9265),c=l(5587),r=l(4667),g=l(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e}).apply(this,arguments)}var m=(0,o.G)((function(e,t){var l=(0,a.m)("Badge",e),o=function(e,t){if(null==e)return{};var l,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)l=s[o],t.indexOf(l)>=0||(a[l]=e[l]);return a}((0,s.Lr)(e),["className"]);return g.createElement(n.m$.span,i({ref:t,className:(0,c.cx)("chakra-badge",e.className)},o,{__css:i({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},l)}))}));r.Ts&&(m.displayName="Badge")},9555:function(e,t,l){e.exports=function(e){var t={};function l(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,l),a.l=!0,a.exports}return l.m=e,l.c=t,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(o,a,function(t){return e[t]}.bind(null,a));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=1)}([function(e,t){e.exports=l(7294)},function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return E}));var o=l(0),a=l.n(o);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var l=0;l<t.length;l++){var o=t[l];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,o=u(e);if(t){var a=u(this).constructor;l=Reflect.construct(o,arguments,a)}else l=o.apply(this,arguments);return i(this,l)}}function i(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function d(e){var t=0,l=0;return e.touches&&e.touches.length?(t=e.touches[0].pageX,l=e.touches[0].pageY):(t=e.pageX,l=e.pageY),{x:t,y:l}}function v(e){return e.condition?a.a.createElement(a.a.Fragment,null,e.children):null}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(s,e);var t,l,o=g(s);function s(){var e,t,l,c,r;n(this,s);for(var g=arguments.length,i=new Array(g),u=0;u<g;u++)i[u]=arguments[u];return p(m(r=o.call.apply(o,[this].concat(i))),"initX",0),p(m(r),"initY",0),p(m(r),"lastX",0),p(m(r),"lastY",0),p(m(r),"_cont",a.a.createRef()),p(m(r),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(e=null===(t=r.props)||void 0===t?void 0:t.startIndex)&&void 0!==e?e:0,multi:!(null===(l=r.props)||void 0===l||null===(c=l.images)||void 0===c||!c.length)}),p(m(r),"createTransform",(function(e,t,l,o){return"translate3d(".concat(e,"px,").concat(t,"px,0px) scale(").concat(l,") rotate(").concat(o,"deg)")})),p(m(r),"stopSideEffect",(function(e){return e.stopPropagation()})),p(m(r),"getCurrentImage",(function(e,t){var l,o,a,s,n;return e.multi?null!==(o=null!==(a=null===(s=t.images[e.current])||void 0===s?void 0:s.url)&&void 0!==a?a:null===(n=t.images)||void 0===n?void 0:n[e.current])&&void 0!==o?o:"":null!==(l=t.image)&&void 0!==l?l:""})),p(m(r),"getCurrentTitle",(function(e,t){var l,o,a,s;return e.multi?null!==(o=null===(a=t.images)||void 0===a||null===(s=a[e.current])||void 0===s?void 0:s.title)&&void 0!==o?o:"":null!==(l=t.title)&&void 0!==l?l:""})),p(m(r),"resetZoom",(function(){return r.setState({x:0,y:0,zoom:1})})),p(m(r),"shockZoom",(function(e){var t,l,o=r.props,a=o.zoomStep,s=void 0===a?.3:a,n=o.allowZoom,c=void 0===n||n,g=o.doubleClickZoom,i=void 0===g?4:g;if(!c||!i)return!1;if(r.stopSideEffect(e),r.state.zoom>1)return r.resetZoom();var m=(s<1?Math.ceil(i/s):s)*s,u=d(e),p=null===(t=r._cont.current)||void 0===t||null===(l=t.getBoundingClientRect)||void 0===l?void 0:l.call(t),v=p.x+p.width/2,E=p.y+p.height/2,f=-1*(u.x-v)*m,N=-1*(u.y-E)*m;r.setState({x:f,y:N,zoom:m})})),p(m(r),"navigateImage",(function(e,t){r.stopSideEffect(t);var l=0;switch(e){case"next":l=r.state.current+1;break;case"prev":l=r.state.current-1}l>=r.props.images.length?l=0:l<0&&(l=r.props.images.length-1),r.setState({current:l,x:0,y:0,zoom:1,rotate:0,loading:!0})})),p(m(r),"startMove",(function(e){if(r.state.zoom<=1)return!1;r.setState({moving:!0});var t=d(e);r.initX=t.x-r.lastX,r.initY=t.y-r.lastY})),p(m(r),"duringMove",(function(e){if(!r.state.moving)return!1;var t=d(e);r.lastX=t.x-r.initX,r.lastY=t.y-r.initY,r.setState({x:t.x-r.initX,y:t.y-r.initY})})),p(m(r),"endMove",(function(e){return r.setState({moving:!1})})),p(m(r),"applyZoom",(function(e){var t=r.props.zoomStep,l=void 0===t?.3:t;switch(e){case"in":r.setState({zoom:r.state.zoom+l});break;case"out":var o=r.state.zoom-l;if(o<1)break;1===o?r.setState({x:0,y:0,zoom:1}):r.setState({zoom:o});break;case"reset":r.resetZoom()}})),p(m(r),"applyRotate",(function(e){switch(e){case"cw":r.setState({rotate:r.state.rotate+90});break;case"acw":r.setState({rotate:r.state.rotate-90})}})),p(m(r),"reset",(function(e){r.stopSideEffect(e),r.setState({x:0,y:0,zoom:1,rotate:0})})),p(m(r),"exit",(function(e){if("function"==typeof r.props.onClose)return r.props.onClose(e);console.error("No Exit function passed on prop: onClose. Clicking the close button will do nothing")})),p(m(r),"shouldShowReset",(function(){return r.state.x||r.state.y||1!==r.state.zoom||0!==r.state.rotate})),p(m(r),"canvasClick",(function(e){var t=r.props.clickOutsideToExit;if((void 0===t||t)&&r.state.zoom<=1)return r.exit(e)})),p(m(r),"keyboardNavigation",(function(e){var t=r.props,l=t.allowZoom,o=void 0===l||l,a=t.allowReset,s=void 0===a||a,n=r.state,c=n.multi,g=n.x,i=n.y,m=n.zoom;switch(e.key){case"ArrowLeft":c&&1===m?r.navigateImage("prev",e):m>1&&r.setState({x:g-20});break;case"ArrowRight":c&&1===m?r.navigateImage("next",e):m>1&&r.setState({x:g+20});break;case"ArrowUp":m>1&&r.setState({y:i+20});break;case"ArrowDown":m>1&&r.setState({y:i-20});break;case"+":o&&r.applyZoom("in");break;case"-":o&&r.applyZoom("out");break;case"Escape":s&&r.shouldShowReset()?r.reset(e):r.exit(e)}})),r}return t=s,(l=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var e=this,t=this.getCurrentImage(this.state,this.props),l=this.getCurrentTitle(this.state,this.props);if(!t)return console.warn("Not showing lightbox because no image(s) was supplied"),null;var o=this.props,s=o.allowZoom,n=void 0===s||s,c=o.allowRotate,r=void 0===c||c,g=o.buttonAlign,i=void 0===g?"flex-end":g,m=o.showTitle,u=void 0===m||m,p=o.allowReset,d=void 0===p||p,E=this.state,f=E.x,N=E.y,Z=E.zoom,h=E.rotate,x=E.multi,b=E.loading,y=E.moving,w=d&&this.shouldShowReset();return a.a.createElement("div",{className:"lb-container"},a.a.createElement("div",{className:"lb-header",style:{justifyContent:i}},a.a.createElement(v,{condition:u&&l},a.a.createElement("div",{className:"lb-title",style:{display:"center"===i?"none":"flex",order:"flex-start"===i?"2":"unset"}},a.a.createElement("span",{title:l,style:{textAlign:"flex-start"===i?"right":"left"}},l))),a.a.createElement(v,{condition:"center"===i||w},a.a.createElement("div",{title:"Reset",style:{order:"flex-start"===i?"1":"unset"},className:"lb-button lb-icon-reset lb-hide-mobile reload ".concat(w?"":"lb-disabled"),onClick:this.reset})),a.a.createElement(v,{condition:x},a.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(t){return e.navigateImage("prev",t)}}),a.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(t){return e.navigateImage("next",t)}})),a.a.createElement(v,{condition:n},a.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return e.applyZoom("in")}}),a.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout ".concat(Z<=1?"lb-disabled":""),onClick:function(){return e.applyZoom("out")}})),a.a.createElement(v,{condition:r},a.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return e.applyRotate("acw")}}),a.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return e.applyRotate("cw")}})),a.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===i?"-1":"unset"},onClick:function(t){return e.exit(t)}})),a.a.createElement("div",{className:"lb-canvas".concat(b?" lb-loading":""),ref:this._cont,onClick:function(t){return e.canvasClick(t)}},a.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(f,N,Z,h),cursor:Z>1?"grab":"unset",transition:y?"none":"all 0.1s"},onMouseDown:function(t){return e.startMove(t)},onTouchStart:function(t){return e.startMove(t)},onMouseMove:function(t){return e.duringMove(t)},onTouchMove:function(t){return e.duringMove(t)},onMouseUp:function(t){return e.endMove(t)},onMouseLeave:function(t){return e.endMove(t)},onTouchEnd:function(t){return e.endMove(t)},onClick:function(t){return e.stopSideEffect(t)},onDoubleClick:function(t){return e.shockZoom(t)},onLoad:function(t){return e.setState({loading:!1})},className:"lb-img".concat(b?" lb-loading":""),title:l,src:t,alt:l}),a.a.createElement("div",{className:"mobile-controls lb-show-mobile"},x?a.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(t){return e.navigateImage("prev",t)}}):null,w?a.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,x?a.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(t){return e.navigateImage("next",t)}}):null)))}}])&&c(t.prototype,l),s}(a.a.Component)}])},2010:function(e,t,l){"use strict";l.d(t,{Z:function(){return ae}});var o=l(7294),a=l(7361),s=l(3209),n=l(56),c=l(4340),r=l(7196),g=l(274),i=l(5574),m=l(9593),u=l(7288),p=l(1404),d=l(1065),v=l(8452),E=l(5426),f=l(2937),N=l(6789),Z=l(7965),h=l(4408),x=l(2226),b=l(3142),y=l(4338),w=l(6842),k=l(1169),C=l(2791),S=l(9661),O=l(5460),M=l(3845),z=l(7892),R=l(1237),I=l(5771),j=l(4004),D=l(9714),A=l(7382),L=l(8487),T=l(3396),K=l(5087),W=l(4643),_=l(3268),U=l(7141),Y=l(4691),P=l(2935),B=l(8777),X=l(5247),H=l(3805),q=l(5349),F=l(8158),G=l(9556),V=l(8915),J=l(6964),Q=l(7891),$=l(2422),ee=l(8992),te=l(6001),le=l(6576),oe=l(2884);function ae(){return(0,o.useEffect)((function(){oe.p8.set(".logos",{x:function(e){return 198*e}}),oe.p8.to(".logos",{duration:50,ease:"none",x:"+=10300",modifiers:{x:oe.p8.utils.unitize((function(e){return parseFloat(e)%"10300"}))},repeat:-1})})),o.createElement(a.k,{mt:"50px",w:"100%",justifyContent:"center",flexDirection:"column"},o.createElement(a.k,{alignItems:"center",className:"logoContainer",h:"200px",overflowX:"hidden"},o.createElement("img",{src:s.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:n.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:c.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:r.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:g.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:i.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:m.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:u.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:p.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:d.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:v.Z,alt:"provest.svg",className:"logopng logos"}),o.createElement("img",{src:E.Z,alt:"secretcalm.svg",className:"logopng logos"}),o.createElement("img",{src:f.Z,alt:"houseofstreng.svg",className:"logopng logos"}),o.createElement("img",{src:N.Z,alt:"fitify.svg",className:"logopng logos"}),o.createElement("img",{src:Z.Z,alt:"reignsupreme.svg",className:"logopng logos"}),o.createElement("img",{src:h.Z,alt:"rebecca.svg",className:"logopng logos"}),o.createElement("img",{src:x.Z,alt:"regency.svg",className:"logopng logos"}),o.createElement("img",{src:b.Z,alt:"keating.svg",className:"logopng logos"}),o.createElement("img",{src:y.Z,alt:"schtech.svg",className:"addon logos"}),o.createElement("img",{src:w.Z,alt:"portfoliofm.svg",className:"logopng logos"}),o.createElement("img",{src:k.Z,alt:"futurefitness.svg",className:"logopng logos"}),o.createElement("img",{src:C.Z,alt:"schtech.svg",className:"logopng logos"}),o.createElement("img",{src:S.Z,alt:"adaptinghomes.svg",className:"logopng logos"}),o.createElement("img",{src:O.Z,alt:"onlinefitnessfreedom.svg",className:"logopng logos"}),o.createElement("img",{src:M.Z,alt:"intuneconsulting.svg",className:"logopng logos"}),o.createElement("img",{src:z.Z,alt:"portfoliofm.svg",className:"addon logos"}),o.createElement("img",{src:R.Z,alt:"hydroinstal.svg",className:"addon logos"}),o.createElement("img",{src:I.Z,alt:"futurefitness.svg",className:"addon logos"}),o.createElement("img",{src:j.Z,alt:"intuneconsulting.svg",className:"addon logos"}),o.createElement("img",{src:D.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:A.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:L.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:T.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:K.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:W.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:_.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:U.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:Y.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:P.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:B.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:X.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:H.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:q.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:F.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:G.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:V.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:J.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:Q.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:$.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:ee.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"})),o.createElement(a.k,{my:"50px",justifyContent:"center"},o.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},o.createElement("span",null,"SEE MORE OF OUR CLIENTS"))))}},1006:function(e,t,l){"use strict";l.d(t,{Z:function(){return ne}});var o=l(7294),a=l(7361),s=l(7690),n=l(2200),c=l(3209),r=l(56),g=l(4340),i=l(7196),m=l(274),u=l(5574),p=l(9593),d=l(7288),v=l(1404),E=l(1065),f=l(8452),N=l(5426),Z=l(2937),h=l(6789),x=l(7965),b=l(4408),y=l(2226),w=l(3142),k=l(4338),C=l(6842),S=l(1169),O=l(2791),M=l(9661),z=l(5460),R=l(3845),I=l(7892),j=l(1237),D=l(5771),A=l(4004),L=l(9714),T=l(7382),K=l(8487),W=l(3396),_=l(5087),U=l(4643),Y=l(3268),P=l(7141),B=l(4691),X=l(2935),H=l(8777),q=l(5247),F=l(3805),G=l(5349),V=l(8158),J=l(9556),Q=l(8915),$=l(6964),ee=l(7891),te=l(2422),le=l(8992),oe=l(6001),ae=l(6576),se=l(2884);function ne(){return(0,o.useEffect)((function(){se.p8.set(".logos",{x:function(e){return 198*e}}),se.p8.to(".logos",{duration:50,ease:"none",x:"+=10300",modifiers:{x:se.p8.utils.unitize((function(e){return parseFloat(e)%"10300"}))},repeat:-1})})),o.createElement(o.Fragment,null,o.createElement(a.k,{flexDirection:"row",flexWrap:"wrap",w:"100%",className:"slideshow",overflowX:"hidden",pt:"20px",display:["none","none","none","none","flex"]},o.createElement(a.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:["center","center","center","center","flex-start"],alignSelf:["center","center","center","center","flex-start"]},o.createElement(s.xu,null,o.createElement(n.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",o.createElement("span",null,"LOVE")," TO ",o.createElement("br",null),"ADD YOUR LOGO HERE.")),o.createElement(s.xu,{textAlign:["center","center","center","center","left"],py:"20px"},o.createElement(n.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the ",o.createElement("br",null),"fantastic clients we have brought to the UK and International Markets."))),o.createElement(a.k,{alignItems:"center",flexWrap:"wrap",className:"logoContainer",overflowX:"hidden",justifyContent:"center"},o.createElement("img",{src:c.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:r.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:g.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:i.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:m.Z,alt:"intuneconsulting.svg",className:"logopng "}),o.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:d.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:v.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:E.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:f.Z,alt:"provest.svg",className:"logopng "}),o.createElement("img",{src:N.Z,alt:"secretcalm.svg",className:"logopng "}),o.createElement("img",{src:Z.Z,alt:"houseofstreng.svg",className:"logopng "}),o.createElement("img",{src:h.Z,alt:"fitify.svg",className:"logopng "}),o.createElement("img",{src:x.Z,alt:"reignsupreme.svg",className:"logopng "}),o.createElement("img",{src:b.Z,alt:"rebecca.svg",className:"logopng "}),o.createElement("img",{src:y.Z,alt:"regency.svg",className:"logopng "}),o.createElement("img",{src:w.Z,alt:"keating.svg",className:"logopng "}),o.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:k.Z,alt:"schtech.svg",className:"addon "}),o.createElement("img",{src:_.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:J.Z,alt:"intuneconsulting.svg",className:"logopng "}),o.createElement("img",{src:O.Z,alt:"schtech.svg",className:"logopng "}),o.createElement("img",{src:W.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:V.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:U.Z,alt:"intuneconsulting.svg",className:"logopng "}),o.createElement("img",{src:Y.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:P.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:B.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:X.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:H.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:S.Z,alt:"futurefitness.svg",className:"logopng "}),o.createElement("img",{src:C.Z,alt:"portfoliofm.svg",className:"logopng "}),o.createElement("img",{src:M.Z,alt:"adaptinghomes.svg",className:"logopng "}),o.createElement("img",{src:z.Z,alt:"onlinefitnessfreedom.svg",className:"logopng "}),o.createElement("img",{src:R.Z,alt:"intuneconsulting.svg",className:"logopng "}),o.createElement("img",{src:I.Z,alt:"portfoliofm.svg",className:"addon "}),o.createElement("img",{src:j.Z,alt:"hydroinstal.svg",className:"addon "}),o.createElement("img",{src:D.Z,alt:"futurefitness.svg",className:"addon "}),o.createElement("img",{src:A.Z,alt:"intuneconsulting.svg",className:"addon "}),o.createElement("img",{src:F.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:G.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:L.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:T.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:K.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:q.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:Q.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:$.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:ee.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:te.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}))),o.createElement(a.k,{mt:"50px",w:"100%",display:["block","block","block","block","none"],justifyContent:"center",flexDirection:"column"},o.createElement(a.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:["center","center","center","center","flex-start"],alignSelf:["center","center","center","center","flex-start"]},o.createElement(s.xu,null,o.createElement(n.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",o.createElement("span",null,"LOVE")," TO ",o.createElement("br",null),"ADD YOUR LOGO HERE.")),o.createElement(s.xu,{textAlign:["center","center","center","center","left"],py:"20px"},o.createElement(n.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the fantastic clients we have brought to the UK and International Markets."))),o.createElement(a.k,{alignItems:"center",className:"logoContainer",h:"200px",overflowX:"hidden"},o.createElement("img",{src:c.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:r.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:g.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:i.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:m.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:d.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:v.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:E.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:f.Z,alt:"provest.svg",className:"logopng logos"}),o.createElement("img",{src:N.Z,alt:"secretcalm.svg",className:"logopng logos"}),o.createElement("img",{src:Z.Z,alt:"houseofstreng.svg",className:"logopng logos"}),o.createElement("img",{src:h.Z,alt:"fitify.svg",className:"logopng logos"}),o.createElement("img",{src:x.Z,alt:"reignsupreme.svg",className:"logopng logos"}),o.createElement("img",{src:b.Z,alt:"rebecca.svg",className:"logopng logos"}),o.createElement("img",{src:y.Z,alt:"regency.svg",className:"logopng logos"}),o.createElement("img",{src:w.Z,alt:"keating.svg",className:"logopng logos"}),o.createElement("img",{src:k.Z,alt:"schtech.svg",className:"addon logos"}),o.createElement("img",{src:C.Z,alt:"portfoliofm.svg",className:"logopng logos"}),o.createElement("img",{src:S.Z,alt:"futurefitness.svg",className:"logopng logos"}),o.createElement("img",{src:O.Z,alt:"schtech.svg",className:"logopng logos"}),o.createElement("img",{src:M.Z,alt:"adaptinghomes.svg",className:"logopng logos"}),o.createElement("img",{src:z.Z,alt:"onlinefitnessfreedom.svg",className:"logopng logos"}),o.createElement("img",{src:R.Z,alt:"intuneconsulting.svg",className:"logopng logos"}),o.createElement("img",{src:I.Z,alt:"portfoliofm.svg",className:"addon logos"}),o.createElement("img",{src:j.Z,alt:"hydroinstal.svg",className:"addon logos"}),o.createElement("img",{src:D.Z,alt:"futurefitness.svg",className:"addon logos"}),o.createElement("img",{src:A.Z,alt:"intuneconsulting.svg",className:"addon logos"}),o.createElement("img",{src:L.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:T.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:K.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:W.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:_.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:U.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:Y.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:P.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:B.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:X.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:H.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:q.Z,alt:"chessmoveslogo",className:"logopng logos"}),o.createElement("img",{src:F.Z,alt:"oxtedfestival",className:"logopng logos"}),o.createElement("img",{src:G.Z,alt:"tailoredremovallogo",className:"logopng logos"}),o.createElement("img",{src:V.Z,alt:"surreycedarlogo",className:"logopng logos"}),o.createElement("img",{src:J.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),o.createElement("img",{src:Q.Z,alt:"simonKemp",className:"logopng logos"}),o.createElement("img",{src:$.Z,alt:"doggo.svg",className:"logopng logos"}),o.createElement("img",{src:ee.Z,alt:"redsacks.svg",className:"logopng logos"}),o.createElement("img",{src:te.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),o.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),o.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"})),o.createElement(a.k,{my:"50px",justifyContent:"center"},o.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},o.createElement("span",null,"SEE MORE OF OUR CLIENTS")))))}},6059:function(e,t,l){"use strict";l.d(t,{Z:function(){return ne}});var o=l(7294),a=l(7361),s=l(7690),n=l(2200),c=l(3209),r=l(56),g=l(4340),i=l(7196),m=l(274),u=l(5574),p=l(9593),d=l(7288),v=l(1404),E=l(1065),f=l(8452),N=l(5426),Z=l(2937),h=l(6789),x=l(7965),b=l(4408),y=l(2226),w=l(3142),k=l(4338),C=l(6842),S=l(1169),O=l(2791),M=l(9661),z=l(5460),R=l(3845),I=l(7892),j=l(1237),D=l(5771),A=l(4004),L=l(9714),T=l(7382),K=l(8487),W=l(3396),_=l(5087),U=l(4643),Y=l(3268),P=l(7141),B=l(4691),X=l(2935),H=l(8777),q=l(5247),F=l(3805),G=l(5349),V=l(8158),J=l(9556),Q=l(8915),$=l(6964),ee=l(7891),te=l(2422),le=l(8992),oe=l(6001),ae=l(6576),se=l(2010);function ne(){return o.createElement(o.Fragment,null,o.createElement(a.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:"center",display:["none","none","none","none","flex"]},o.createElement(s.xu,null,o.createElement(n.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",o.createElement("span",null,"LOVE")," TO ",o.createElement("br",null),"ADD YOUR LOGO HERE.")),o.createElement(s.xu,{textAlign:"center",py:"20px"},o.createElement(n.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the ",o.createElement("br",null),"fantastic clients we have brought to the UK and International Markets."))),o.createElement(a.k,{flexDirection:"row",flexWrap:"wrap",w:"100%",className:"slideshow",overflowX:"hidden",pt:"20px",display:["none","none","none","none","flex"]},o.createElement(a.k,{alignItems:"center",flexWrap:"wrap",className:"logoContainer",overflowX:"hidden",justifyContent:"center"},o.createElement("img",{src:c.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:r.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:g.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:i.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:m.Z,alt:"intuneconsulting.svg",className:"addon3 "}),o.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:d.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:v.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:E.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:f.Z,alt:"provest.svg",className:"logopng "}),o.createElement("img",{src:N.Z,alt:"secretcalm.svg",className:"logopng "}),o.createElement("img",{src:Z.Z,alt:"houseofstreng.svg",className:"logopng "}),o.createElement("img",{src:h.Z,alt:"fitify.svg",className:"logopng "}),o.createElement("img",{src:x.Z,alt:"reignsupreme.svg",className:"logopng "}),o.createElement("img",{src:b.Z,alt:"rebecca.svg",className:"logopng "}),o.createElement("img",{src:y.Z,alt:"regency.svg",className:"logopng "}),o.createElement("img",{src:w.Z,alt:"keating.svg",className:"logopng "}),o.createElement("img",{src:k.Z,alt:"schtech.svg",className:"addon "}),o.createElement("img",{src:C.Z,alt:"portfoliofm.svg",className:"logopng "}),o.createElement("img",{src:S.Z,alt:"futurefitness.svg",className:"logopng "}),o.createElement("img",{src:O.Z,alt:"schtech.svg",className:"logopng "}),o.createElement("img",{src:M.Z,alt:"adaptinghomes.svg",className:"logopng "}),o.createElement("img",{src:z.Z,alt:"onlinefitnessfreedom.svg",className:"logopng "}),o.createElement("img",{src:R.Z,alt:"intuneconsulting.svg",className:"logopng "}),o.createElement("img",{src:I.Z,alt:"portfoliofm.svg",className:"addon "}),o.createElement("img",{src:j.Z,alt:"hydroinstal.svg",className:"addon "}),o.createElement("img",{src:D.Z,alt:"futurefitness.svg",className:"addon "}),o.createElement("img",{src:A.Z,alt:"intuneconsulting.svg",className:"addon "}),o.createElement("img",{src:L.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:T.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:K.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:W.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:_.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:U.Z,alt:"intuneconsulting.svg",className:"addon3 "}),o.createElement("img",{src:Y.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:P.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:B.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:X.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:H.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:q.Z,alt:"chessmoveslogo",className:"logopng "}),o.createElement("img",{src:F.Z,alt:"oxtedfestival",className:"logopng "}),o.createElement("img",{src:G.Z,alt:"tailoredremovallogo",className:"logopng "}),o.createElement("img",{src:V.Z,alt:"surreycedarlogo",className:"logopng "}),o.createElement("img",{src:J.Z,alt:"intuneconsulting.svg",className:"addon3 "}),o.createElement("img",{src:Q.Z,alt:"simonKemp",className:"logopng "}),o.createElement("img",{src:$.Z,alt:"doggo.svg",className:"logopng "}),o.createElement("img",{src:ee.Z,alt:"redsacks.svg",className:"logopng "}),o.createElement("img",{src:te.Z,alt:"beautifulsouls.svg",className:"logopng "}),o.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),o.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "})),o.createElement(a.k,{justifyContent:"center",alignItems:"center",w:"100%",pt:"20px"},o.createElement(a.k,{w:"400px",justifyContent:"space-between",alignItems:"center"},o.createElement(s.xu,{alignSelf:"center"},o.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},o.createElement("span",null,"SEE MORE OF OUR CLIENTS"))),o.createElement(s.xu,null,o.createElement("a",{className:"reqCB",href:"/contact"},"REQUEST A CALL BACK >"))))),o.createElement(a.k,{mt:"100px",w:"100%",display:["block","block","block","block","none"],justifyContent:"center",flexDirection:"column"},o.createElement(a.k,{w:"100%",alignItems:"center",justifyContent:"center"},o.createElement(n.x,{className:"addlogo",fontSize:"xl"},"WE WOULD ",o.createElement("span",null,"LOVE")," TO ADD YOUR LOGO HERE.")),o.createElement(a.k,{my:"20px",px:"50px",w:"100%",alignItems:"center",justifyContent:"center"},o.createElement(n.x,{fontSize:"md",textAlign:"center"},"We’ve worked with more than 100 companies since 2015 Check out some of the fantastic clients we have brought to the UK and International Markets.")),o.createElement(se.Z,null)))}},5051:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return E}});var o=l(7294),a=l(7690),s=l(7361),n=l(1823),c=l(9555),r=l.n(c),g=l(1006),i=l(2598),m=l(1907),u=l(8363),p=(l(6059),l(1501)),d=l(5106),v=l(9828);function E(e){var t=e.location,l="undefined"!=typeof window,c=(0,o.useState)(),E=c[0],f=c[1],N=(0,o.useState)(),Z=(N[0],N[1]),h=function(){f(window.innerWidth),Z(window.innerHeight)},x=(0,o.useState)(!1),b=x[0],y=x[1],w=(0,o.useState)(0),k=w[0],C=w[1],S=v.map((function(e){return e}));return(0,o.useEffect)((function(){return l&&(h(),window.addEventListener("resize",h)),function(){return window.removeEventListener("resize",h)}}),[]),o.createElement(a.xu,{className:"main"},o.createElement(i.Z,null),E>1280?o.createElement(m.Z,{loc:t,page:"/case_studies"}):o.createElement(d.Z,null),o.createElement(a.xu,null,o.createElement(s.k,{justifyContent:"center",flexDirection:"column",alignItems:"center",m:"10px"},o.createElement(a.xu,null,o.createElement("h1",{className:"title"},"Bossy Bitch Maid")),o.createElement(a.xu,{alignSelf:"center",py:"20px"},o.createElement(n.C,null,"Maid & Butler Service"))),o.createElement(a.xu,{w:"95%",className:"caseStudyBox",m:"auto",mt:"50px"},o.createElement(a.xu,{textAlign:"center",pt:"30px",className:"viewshead"},o.createElement("h3",null,"bossybitchmaid.me.uk"),o.createElement("p",null,"England's most unique maid and butler service")),o.createElement(s.k,{flexWrap:"wrap"},o.createElement(s.k,{flexWrap:"wrap",w:"100%",justifyContent:"center"},v.map((function(e,t){return o.createElement(a.xu,{w:["90%","90%","25%","25%","25%"],m:"5px"},o.createElement("img",{key:t,src:e,alt:e,style:{borderRadius:"2px",cursor:"pointer"},onClick:function(){y(!0),C(t)}}))})))),o.createElement(s.k,{justifyContent:"center",alignItems:"center",my:"20px"},o.createElement(a.xu,{mx:"10px"},o.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/contact")}},o.createElement("span",null,"BOOKING ENQUIRY"))),o.createElement(a.xu,{mx:"10px"},o.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/case_studies")}},o.createElement("span",null,"VIEW MORE CASE STUDIES"))))),o.createElement(g.Z,null),o.createElement(u.Z,{text:"Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"}),o.createElement(p.Z,null)),b?o.createElement(r(),{images:S,startIndex:k,onClose:function(){return y((function(e){return!e}))}}):null)}},9828:function(e){"use strict";e.exports=JSON.parse('["https://drive.google.com/uc?export=view&id=1Wu1pY9G-x-x29NDIeF60KBZ8yBZIqq4M","https://drive.google.com/uc?export=view&id=1mc-J1f3C-_PYwisZb3GbHF4cwMH4AA1l","https://drive.google.com/uc?export=view&id=1SIHPjpOUVYHd_pYyVgTTNAZpfrjaOAEC","https://drive.google.com/uc?export=view&id=1CbYmc2vKUzsHF0-jXKbK3dGvMwWzqRcM","https://drive.google.com/uc?export=view&id=1R1kiNuiUsFY2J6MvAhfAhmEeC9AK6EhE","https://drive.google.com/uc?export=view&id=1TzcE4zLcmcqMokqvOslzgTwNAeZqpWKH","https://drive.google.com/uc?export=view&id=1gBDeeNkf2gTWmerosZkcon1zx9ZSZKbf","https://drive.google.com/uc?export=view&id=1eA0bSBKMDpST1iqbLynR92xloKlpQb7i","https://drive.google.com/uc?export=view&id=1tHsg-m5JoICT785tjok56mgFK8uo963W","https://drive.google.com/uc?export=view&id=1Lm1AbnTEMKzWI86zVdMEDjJz1Y0EN9KH","https://drive.google.com/uc?export=view&id=16ff4JWvBD9AvVDV8hZyDWqBMXYRTTmlz","https://drive.google.com/uc?export=view&id=1txL6qWPHuhLqx_zS_kgPJYN4v3qe7oLN"]')}}]);
//# sourceMappingURL=component---src-pages-case-studies-bossy-bitch-maid-js-d6f738fa8c9eba477dac.js.map