(self.webpackChunkvisualgroupdigital=self.webpackChunkvisualgroupdigital||[]).push([[7826],{1823:function(e,t,o){"use strict";o.d(t,{C:function(){return g}});var n=o(2543),a=o(3888),l=o(7487),s=o(9265),r=o(5587),c=o(4667),i=o(7294);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var g=(0,n.G)((function(e,t){var o=(0,a.m)("Badge",e),n=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}((0,l.Lr)(e),["className"]);return i.createElement(s.m$.span,m({ref:t,className:(0,r.cx)("chakra-badge",e.className)},n,{__css:m({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},o)}))}));c.Ts&&(g.displayName="Badge")},9555:function(e,t,o){e.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=o(7294)},function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return f}));var n=o(0),a=o.n(n);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=u(e);if(t){var a=u(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return m(this,o)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function d(e){var t=0,o=0;return e.touches&&e.touches.length?(t=e.touches[0].pageX,o=e.touches[0].pageY):(t=e.pageX,o=e.pageY),{x:t,y:o}}function v(e){return e.condition?a.a.createElement(a.a.Fragment,null,e.children):null}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(l,e);var t,o,n=i(l);function l(){var e,t,o,r,c;s(this,l);for(var i=arguments.length,m=new Array(i),u=0;u<i;u++)m[u]=arguments[u];return p(g(c=n.call.apply(n,[this].concat(m))),"initX",0),p(g(c),"initY",0),p(g(c),"lastX",0),p(g(c),"lastY",0),p(g(c),"_cont",a.a.createRef()),p(g(c),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(e=null===(t=c.props)||void 0===t?void 0:t.startIndex)&&void 0!==e?e:0,multi:!(null===(o=c.props)||void 0===o||null===(r=o.images)||void 0===r||!r.length)}),p(g(c),"createTransform",(function(e,t,o,n){return"translate3d(".concat(e,"px,").concat(t,"px,0px) scale(").concat(o,") rotate(").concat(n,"deg)")})),p(g(c),"stopSideEffect",(function(e){return e.stopPropagation()})),p(g(c),"getCurrentImage",(function(e,t){var o,n,a,l,s;return e.multi?null!==(n=null!==(a=null===(l=t.images[e.current])||void 0===l?void 0:l.url)&&void 0!==a?a:null===(s=t.images)||void 0===s?void 0:s[e.current])&&void 0!==n?n:"":null!==(o=t.image)&&void 0!==o?o:""})),p(g(c),"getCurrentTitle",(function(e,t){var o,n,a,l;return e.multi?null!==(n=null===(a=t.images)||void 0===a||null===(l=a[e.current])||void 0===l?void 0:l.title)&&void 0!==n?n:"":null!==(o=t.title)&&void 0!==o?o:""})),p(g(c),"resetZoom",(function(){return c.setState({x:0,y:0,zoom:1})})),p(g(c),"shockZoom",(function(e){var t,o,n=c.props,a=n.zoomStep,l=void 0===a?.3:a,s=n.allowZoom,r=void 0===s||s,i=n.doubleClickZoom,m=void 0===i?4:i;if(!r||!m)return!1;if(c.stopSideEffect(e),c.state.zoom>1)return c.resetZoom();var g=(l<1?Math.ceil(m/l):l)*l,u=d(e),p=null===(t=c._cont.current)||void 0===t||null===(o=t.getBoundingClientRect)||void 0===o?void 0:o.call(t),v=p.x+p.width/2,f=p.y+p.height/2,E=-1*(u.x-v)*g,b=-1*(u.y-f)*g;c.setState({x:E,y:b,zoom:g})})),p(g(c),"navigateImage",(function(e,t){c.stopSideEffect(t);var o=0;switch(e){case"next":o=c.state.current+1;break;case"prev":o=c.state.current-1}o>=c.props.images.length?o=0:o<0&&(o=c.props.images.length-1),c.setState({current:o,x:0,y:0,zoom:1,rotate:0,loading:!0})})),p(g(c),"startMove",(function(e){if(c.state.zoom<=1)return!1;c.setState({moving:!0});var t=d(e);c.initX=t.x-c.lastX,c.initY=t.y-c.lastY})),p(g(c),"duringMove",(function(e){if(!c.state.moving)return!1;var t=d(e);c.lastX=t.x-c.initX,c.lastY=t.y-c.initY,c.setState({x:t.x-c.initX,y:t.y-c.initY})})),p(g(c),"endMove",(function(e){return c.setState({moving:!1})})),p(g(c),"applyZoom",(function(e){var t=c.props.zoomStep,o=void 0===t?.3:t;switch(e){case"in":c.setState({zoom:c.state.zoom+o});break;case"out":var n=c.state.zoom-o;if(n<1)break;1===n?c.setState({x:0,y:0,zoom:1}):c.setState({zoom:n});break;case"reset":c.resetZoom()}})),p(g(c),"applyRotate",(function(e){switch(e){case"cw":c.setState({rotate:c.state.rotate+90});break;case"acw":c.setState({rotate:c.state.rotate-90})}})),p(g(c),"reset",(function(e){c.stopSideEffect(e),c.setState({x:0,y:0,zoom:1,rotate:0})})),p(g(c),"exit",(function(e){if("function"==typeof c.props.onClose)return c.props.onClose(e);console.error("No Exit function passed on prop: onClose. Clicking the close button will do nothing")})),p(g(c),"shouldShowReset",(function(){return c.state.x||c.state.y||1!==c.state.zoom||0!==c.state.rotate})),p(g(c),"canvasClick",(function(e){var t=c.props.clickOutsideToExit;if((void 0===t||t)&&c.state.zoom<=1)return c.exit(e)})),p(g(c),"keyboardNavigation",(function(e){var t=c.props,o=t.allowZoom,n=void 0===o||o,a=t.allowReset,l=void 0===a||a,s=c.state,r=s.multi,i=s.x,m=s.y,g=s.zoom;switch(e.key){case"ArrowLeft":r&&1===g?c.navigateImage("prev",e):g>1&&c.setState({x:i-20});break;case"ArrowRight":r&&1===g?c.navigateImage("next",e):g>1&&c.setState({x:i+20});break;case"ArrowUp":g>1&&c.setState({y:m+20});break;case"ArrowDown":g>1&&c.setState({y:m-20});break;case"+":n&&c.applyZoom("in");break;case"-":n&&c.applyZoom("out");break;case"Escape":l&&c.shouldShowReset()?c.reset(e):c.exit(e)}})),c}return t=l,(o=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var e=this,t=this.getCurrentImage(this.state,this.props),o=this.getCurrentTitle(this.state,this.props);if(!t)return console.warn("Not showing lightbox because no image(s) was supplied"),null;var n=this.props,l=n.allowZoom,s=void 0===l||l,r=n.allowRotate,c=void 0===r||r,i=n.buttonAlign,m=void 0===i?"flex-end":i,g=n.showTitle,u=void 0===g||g,p=n.allowReset,d=void 0===p||p,f=this.state,E=f.x,b=f.y,h=f.zoom,y=f.rotate,N=f.multi,x=f.loading,Z=f.moving,w=d&&this.shouldShowReset();return a.a.createElement("div",{className:"lb-container"},a.a.createElement("div",{className:"lb-header",style:{justifyContent:m}},a.a.createElement(v,{condition:u&&o},a.a.createElement("div",{className:"lb-title",style:{display:"center"===m?"none":"flex",order:"flex-start"===m?"2":"unset"}},a.a.createElement("span",{title:o,style:{textAlign:"flex-start"===m?"right":"left"}},o))),a.a.createElement(v,{condition:"center"===m||w},a.a.createElement("div",{title:"Reset",style:{order:"flex-start"===m?"1":"unset"},className:"lb-button lb-icon-reset lb-hide-mobile reload ".concat(w?"":"lb-disabled"),onClick:this.reset})),a.a.createElement(v,{condition:N},a.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(t){return e.navigateImage("prev",t)}}),a.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(t){return e.navigateImage("next",t)}})),a.a.createElement(v,{condition:s},a.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return e.applyZoom("in")}}),a.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout ".concat(h<=1?"lb-disabled":""),onClick:function(){return e.applyZoom("out")}})),a.a.createElement(v,{condition:c},a.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return e.applyRotate("acw")}}),a.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return e.applyRotate("cw")}})),a.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===m?"-1":"unset"},onClick:function(t){return e.exit(t)}})),a.a.createElement("div",{className:"lb-canvas".concat(x?" lb-loading":""),ref:this._cont,onClick:function(t){return e.canvasClick(t)}},a.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(E,b,h,y),cursor:h>1?"grab":"unset",transition:Z?"none":"all 0.1s"},onMouseDown:function(t){return e.startMove(t)},onTouchStart:function(t){return e.startMove(t)},onMouseMove:function(t){return e.duringMove(t)},onTouchMove:function(t){return e.duringMove(t)},onMouseUp:function(t){return e.endMove(t)},onMouseLeave:function(t){return e.endMove(t)},onTouchEnd:function(t){return e.endMove(t)},onClick:function(t){return e.stopSideEffect(t)},onDoubleClick:function(t){return e.shockZoom(t)},onLoad:function(t){return e.setState({loading:!1})},className:"lb-img".concat(x?" lb-loading":""),title:o,src:t,alt:o}),a.a.createElement("div",{className:"mobile-controls lb-show-mobile"},N?a.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(t){return e.navigateImage("prev",t)}}):null,w?a.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,N?a.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(t){return e.navigateImage("next",t)}}):null)))}}])&&r(t.prototype,o),l}(a.a.Component)}])},2010:function(e,t,o){"use strict";o.d(t,{Z:function(){return ae}});var n=o(7294),a=o(7361),l=o(3209),s=o(56),r=o(4340),c=o(7196),i=o(274),m=o(5574),g=o(9593),u=o(7288),p=o(1404),d=o(1065),v=o(8452),f=o(5426),E=o(2937),b=o(6789),h=o(7965),y=o(4408),N=o(2226),x=o(3142),Z=o(4338),w=o(6842),k=o(1169),S=o(2791),C=o(9661),O=o(5460),z=o(3845),j=o(7892),R=o(1237),M=o(5771),I=o(4004),_=o(9714),T=o(7382),L=o(8487),P=o(3396),U=o(5087),A=o(4643),D=o(3268),F=o(7141),X=o(4691),B=o(2935),K=o(8777),Y=o(5247),H=o(3805),W=o(5349),V=o(8158),q=o(9556),Q=o(8915),G=o(6964),J=o(7891),$=o(2422),ee=o(8992),te=o(6001),oe=o(6576),ne=o(2884);function ae(){return(0,n.useEffect)((function(){ne.p8.set(".logos",{x:function(e){return 198*e}}),ne.p8.to(".logos",{duration:50,ease:"none",x:"+=10300",modifiers:{x:ne.p8.utils.unitize((function(e){return parseFloat(e)%"10300"}))},repeat:-1})})),n.createElement(a.k,{mt:"50px",w:"100%",justifyContent:"center",flexDirection:"column"},n.createElement(a.k,{alignItems:"center",className:"logoContainer",h:"200px",overflowX:"hidden"},n.createElement("img",{src:l.Z,alt:"chessmoveslogo",className:"logopng logos"}),n.createElement("img",{src:s.Z,alt:"oxtedfestival",className:"logopng logos"}),n.createElement("img",{src:r.Z,alt:"tailoredremovallogo",className:"logopng logos"}),n.createElement("img",{src:c.Z,alt:"surreycedarlogo",className:"logopng logos"}),n.createElement("img",{src:i.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),n.createElement("img",{src:m.Z,alt:"simonKemp",className:"logopng logos"}),n.createElement("img",{src:g.Z,alt:"doggo.svg",className:"logopng logos"}),n.createElement("img",{src:u.Z,alt:"redsacks.svg",className:"logopng logos"}),n.createElement("img",{src:p.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),n.createElement("img",{src:d.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),n.createElement("img",{src:v.Z,alt:"provest.svg",className:"logopng logos"}),n.createElement("img",{src:f.Z,alt:"secretcalm.svg",className:"logopng logos"}),n.createElement("img",{src:E.Z,alt:"houseofstreng.svg",className:"logopng logos"}),n.createElement("img",{src:b.Z,alt:"fitify.svg",className:"logopng logos"}),n.createElement("img",{src:h.Z,alt:"reignsupreme.svg",className:"logopng logos"}),n.createElement("img",{src:y.Z,alt:"rebecca.svg",className:"logopng logos"}),n.createElement("img",{src:N.Z,alt:"regency.svg",className:"logopng logos"}),n.createElement("img",{src:x.Z,alt:"keating.svg",className:"logopng logos"}),n.createElement("img",{src:Z.Z,alt:"schtech.svg",className:"addon logos"}),n.createElement("img",{src:w.Z,alt:"portfoliofm.svg",className:"logopng logos"}),n.createElement("img",{src:k.Z,alt:"futurefitness.svg",className:"logopng logos"}),n.createElement("img",{src:S.Z,alt:"schtech.svg",className:"logopng logos"}),n.createElement("img",{src:C.Z,alt:"adaptinghomes.svg",className:"logopng logos"}),n.createElement("img",{src:O.Z,alt:"onlinefitnessfreedom.svg",className:"logopng logos"}),n.createElement("img",{src:z.Z,alt:"intuneconsulting.svg",className:"logopng logos"}),n.createElement("img",{src:j.Z,alt:"portfoliofm.svg",className:"addon logos"}),n.createElement("img",{src:R.Z,alt:"hydroinstal.svg",className:"addon logos"}),n.createElement("img",{src:M.Z,alt:"futurefitness.svg",className:"addon logos"}),n.createElement("img",{src:I.Z,alt:"intuneconsulting.svg",className:"addon logos"}),n.createElement("img",{src:_.Z,alt:"chessmoveslogo",className:"logopng logos"}),n.createElement("img",{src:T.Z,alt:"chessmoveslogo",className:"logopng logos"}),n.createElement("img",{src:L.Z,alt:"oxtedfestival",className:"logopng logos"}),n.createElement("img",{src:P.Z,alt:"tailoredremovallogo",className:"logopng logos"}),n.createElement("img",{src:U.Z,alt:"surreycedarlogo",className:"logopng logos"}),n.createElement("img",{src:A.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),n.createElement("img",{src:D.Z,alt:"simonKemp",className:"logopng logos"}),n.createElement("img",{src:F.Z,alt:"doggo.svg",className:"logopng logos"}),n.createElement("img",{src:X.Z,alt:"redsacks.svg",className:"logopng logos"}),n.createElement("img",{src:B.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),n.createElement("img",{src:K.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),n.createElement("img",{src:Y.Z,alt:"chessmoveslogo",className:"logopng logos"}),n.createElement("img",{src:H.Z,alt:"oxtedfestival",className:"logopng logos"}),n.createElement("img",{src:W.Z,alt:"tailoredremovallogo",className:"logopng logos"}),n.createElement("img",{src:V.Z,alt:"surreycedarlogo",className:"logopng logos"}),n.createElement("img",{src:q.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),n.createElement("img",{src:Q.Z,alt:"simonKemp",className:"logopng logos"}),n.createElement("img",{src:G.Z,alt:"doggo.svg",className:"logopng logos"}),n.createElement("img",{src:J.Z,alt:"redsacks.svg",className:"logopng logos"}),n.createElement("img",{src:$.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),n.createElement("img",{src:ee.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),n.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),n.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"})),n.createElement(a.k,{my:"50px",justifyContent:"center"},n.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},n.createElement("span",null,"SEE MORE OF OUR CLIENTS"))))}},6059:function(e,t,o){"use strict";o.d(t,{Z:function(){return se}});var n=o(7294),a=o(7361),l=o(7690),s=o(2200),r=o(3209),c=o(56),i=o(4340),m=o(7196),g=o(274),u=o(5574),p=o(9593),d=o(7288),v=o(1404),f=o(1065),E=o(8452),b=o(5426),h=o(2937),y=o(6789),N=o(7965),x=o(4408),Z=o(2226),w=o(3142),k=o(4338),S=o(6842),C=o(1169),O=o(2791),z=o(9661),j=o(5460),R=o(3845),M=o(7892),I=o(1237),_=o(5771),T=o(4004),L=o(9714),P=o(7382),U=o(8487),A=o(3396),D=o(5087),F=o(4643),X=o(3268),B=o(7141),K=o(4691),Y=o(2935),H=o(8777),W=o(5247),V=o(3805),q=o(5349),Q=o(8158),G=o(9556),J=o(8915),$=o(6964),ee=o(7891),te=o(2422),oe=o(8992),ne=o(6001),ae=o(6576),le=o(2010);function se(){return n.createElement(n.Fragment,null,n.createElement(a.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:"center",display:["none","none","none","none","flex"]},n.createElement(l.xu,null,n.createElement(s.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",n.createElement("span",null,"LOVE")," TO ",n.createElement("br",null),"ADD YOUR LOGO HERE.")),n.createElement(l.xu,{textAlign:"center",py:"20px"},n.createElement(s.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the ",n.createElement("br",null),"fantastic clients we have brought to the UK and International Markets."))),n.createElement(a.k,{flexDirection:"row",flexWrap:"wrap",w:"100%",className:"slideshow",overflowX:"hidden",pt:"20px",display:["none","none","none","none","flex"]},n.createElement(a.k,{alignItems:"center",flexWrap:"wrap",className:"logoContainer",overflowX:"hidden",justifyContent:"center"},n.createElement("img",{src:r.Z,alt:"chessmoveslogo",className:"logopng "}),n.createElement("img",{src:c.Z,alt:"oxtedfestival",className:"logopng "}),n.createElement("img",{src:i.Z,alt:"tailoredremovallogo",className:"logopng "}),n.createElement("img",{src:m.Z,alt:"surreycedarlogo",className:"logopng "}),n.createElement("img",{src:g.Z,alt:"intuneconsulting.svg",className:"addon3 "}),n.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng "}),n.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng "}),n.createElement("img",{src:d.Z,alt:"redsacks.svg",className:"logopng "}),n.createElement("img",{src:v.Z,alt:"beautifulsouls.svg",className:"logopng "}),n.createElement("img",{src:f.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),n.createElement("img",{src:E.Z,alt:"provest.svg",className:"logopng "}),n.createElement("img",{src:b.Z,alt:"secretcalm.svg",className:"logopng "}),n.createElement("img",{src:h.Z,alt:"houseofstreng.svg",className:"logopng "}),n.createElement("img",{src:y.Z,alt:"fitify.svg",className:"logopng "}),n.createElement("img",{src:N.Z,alt:"reignsupreme.svg",className:"logopng "}),n.createElement("img",{src:x.Z,alt:"rebecca.svg",className:"logopng "}),n.createElement("img",{src:Z.Z,alt:"regency.svg",className:"logopng "}),n.createElement("img",{src:w.Z,alt:"keating.svg",className:"logopng "}),n.createElement("img",{src:k.Z,alt:"schtech.svg",className:"addon "}),n.createElement("img",{src:S.Z,alt:"portfoliofm.svg",className:"logopng "}),n.createElement("img",{src:C.Z,alt:"futurefitness.svg",className:"logopng "}),n.createElement("img",{src:O.Z,alt:"schtech.svg",className:"logopng "}),n.createElement("img",{src:z.Z,alt:"adaptinghomes.svg",className:"logopng "}),n.createElement("img",{src:j.Z,alt:"onlinefitnessfreedom.svg",className:"logopng "}),n.createElement("img",{src:R.Z,alt:"intuneconsulting.svg",className:"logopng "}),n.createElement("img",{src:M.Z,alt:"portfoliofm.svg",className:"addon "}),n.createElement("img",{src:I.Z,alt:"hydroinstal.svg",className:"addon "}),n.createElement("img",{src:_.Z,alt:"futurefitness.svg",className:"addon "}),n.createElement("img",{src:T.Z,alt:"intuneconsulting.svg",className:"addon "}),n.createElement("img",{src:L.Z,alt:"chessmoveslogo",className:"logopng "}),n.createElement("img",{src:P.Z,alt:"chessmoveslogo",className:"logopng "}),n.createElement("img",{src:U.Z,alt:"oxtedfestival",className:"logopng "}),n.createElement("img",{src:A.Z,alt:"tailoredremovallogo",className:"logopng "}),n.createElement("img",{src:D.Z,alt:"surreycedarlogo",className:"logopng "}),n.createElement("img",{src:F.Z,alt:"intuneconsulting.svg",className:"addon3 "}),n.createElement("img",{src:X.Z,alt:"simonKemp",className:"logopng "}),n.createElement("img",{src:B.Z,alt:"doggo.svg",className:"logopng "}),n.createElement("img",{src:K.Z,alt:"redsacks.svg",className:"logopng "}),n.createElement("img",{src:Y.Z,alt:"beautifulsouls.svg",className:"logopng "}),n.createElement("img",{src:H.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),n.createElement("img",{src:W.Z,alt:"chessmoveslogo",className:"logopng "}),n.createElement("img",{src:V.Z,alt:"oxtedfestival",className:"logopng "}),n.createElement("img",{src:q.Z,alt:"tailoredremovallogo",className:"logopng "}),n.createElement("img",{src:Q.Z,alt:"surreycedarlogo",className:"logopng "}),n.createElement("img",{src:G.Z,alt:"intuneconsulting.svg",className:"addon3 "}),n.createElement("img",{src:J.Z,alt:"simonKemp",className:"logopng "}),n.createElement("img",{src:$.Z,alt:"doggo.svg",className:"logopng "}),n.createElement("img",{src:ee.Z,alt:"redsacks.svg",className:"logopng "}),n.createElement("img",{src:te.Z,alt:"beautifulsouls.svg",className:"logopng "}),n.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),n.createElement("img",{src:ne.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),n.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "})),n.createElement(a.k,{justifyContent:"center",alignItems:"center",w:"100%",pt:"20px"},n.createElement(a.k,{w:"400px",justifyContent:"space-between",alignItems:"center"},n.createElement(l.xu,{alignSelf:"center"},n.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},n.createElement("span",null,"SEE MORE OF OUR CLIENTS"))),n.createElement(l.xu,null,n.createElement("a",{className:"reqCB",href:"/contact"},"REQUEST A CALL BACK >"))))),n.createElement(a.k,{mt:"100px",w:"100%",display:["block","block","block","block","none"],justifyContent:"center",flexDirection:"column"},n.createElement(a.k,{w:"100%",alignItems:"center",justifyContent:"center"},n.createElement(s.x,{className:"addlogo",fontSize:"xl"},"WE WOULD ",n.createElement("span",null,"LOVE")," TO ADD YOUR LOGO HERE.")),n.createElement(a.k,{my:"20px",px:"50px",w:"100%",alignItems:"center",justifyContent:"center"},n.createElement(s.x,{fontSize:"md",textAlign:"center"},"We’ve worked with more than 100 companies since 2015 Check out some of the fantastic clients we have brought to the UK and International Markets.")),n.createElement(le.Z,null)))}},7158:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return f}});var n=o(7294),a=o(7690),l=o(7361),s=o(1823),r=o(9555),c=o.n(r),i=o(2598),m=o(1907),g=o(8363),u=o(6059),p=o(1501),d=o(5106),v=o(9462);function f(e){var t=e.location,o="undefined"!=typeof window,r=(0,n.useState)(),f=r[0],E=r[1],b=(0,n.useState)(),h=(b[0],b[1]),y=function(){E(window.innerWidth),h(window.innerHeight)},N=(0,n.useState)(!1),x=N[0],Z=N[1],w=(0,n.useState)(0),k=w[0],S=w[1],C=v.map((function(e){return e}));return(0,n.useEffect)((function(){return o&&(y(),window.addEventListener("resize",y)),function(){return window.removeEventListener("resize",y)}}),[]),n.createElement(a.xu,{className:"main"},n.createElement(i.Z,null),n.createElement(a.xu,null,f>1280?n.createElement(m.Z,{loc:t,page:"/case_studies"}):n.createElement(d.Z,null),n.createElement(l.k,{justifyContent:"center",alignItems:"center",m:"10px",flexDirection:"column"},n.createElement(a.xu,null,n.createElement("h1",{className:"title"},"Sly Note")),n.createElement(a.xu,{alignSelf:"center",py:"20px"},n.createElement(s.C,null,"Encrypted notes Company"))),n.createElement(a.xu,{w:"95%",className:"caseStudyBox",m:"auto",mt:"50px"},n.createElement(a.xu,{textAlign:"center",pt:"30px",className:"viewshead"},n.createElement("h3",null,"slynote.com"),n.createElement("p",null,"Slynote makes sending encrypted data simple, no technical knowledge required or understanding of how encryption works, all you need is the basic requirement to send private data to another person or persons securely and quickly.")),n.createElement(l.k,null,n.createElement(l.k,{flexWrap:"wrap",w:"100%",justifyContent:"center"},v.map((function(e,t){return n.createElement(a.xu,{w:"25%",m:"5px"},n.createElement("img",{key:t,src:e,alt:e,style:{borderRadius:"2px",cursor:"pointer"},onClick:function(){Z(!0),S(t)}}))})))),n.createElement(l.k,{justifyContent:"center",alignItems:"center",my:"20px"},n.createElement(a.xu,{mx:"10px"},n.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/contact")}},n.createElement("span",null,"BOOKING ENQUIRY"))),n.createElement(a.xu,{mx:"10px"},n.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/case_studies")}},n.createElement("span",null,"VIEW MORE CASE STUDIES"))))),n.createElement(u.Z,null),n.createElement(g.Z,{text:"Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"}),n.createElement(p.Z,null)),x?n.createElement(c(),{images:C,startIndex:k,onClose:function(){return Z((function(e){return!e}))}}):null)}},9462:function(e){"use strict";e.exports=JSON.parse('["https://drive.google.com/uc?export=view&id=1USLSNCOzIE8lc7qJXxzO9a8iTmnTJ2Pg","https://drive.google.com/uc?export=view&id=1Ozuv0-Pjsi5UViDz3hTfRuDTTeHvuxZT","https://drive.google.com/uc?export=view&id=11eiEL7tDdzXObF32VzsvNQTPOBCFkwfM","https://drive.google.com/uc?export=view&id=1hFUEPrvvcz0Xby7g_i-r0hIy93pMqbpA","https://drive.google.com/uc?export=view&id=1qt5ZuiRFdqCNlTLb7AF4oVqGaOh-LwHN","https://drive.google.com/uc?export=view&id=1r_edNmniHWxcsE5S8Ee8VE3ZK_Y8Uw5I","https://drive.google.com/uc?export=view&id=1S7iAcK65fZ_KDHFAjV9478M_xzC1TKk0","https://drive.google.com/uc?export=view&id=1BuleeVbUz0Bq4zHy1d9KqR5U8067oD0v","https://drive.google.com/uc?export=view&id=1Ly8JW7K_OB7BkGAl03SGL8_81TcF4oQ1","https://drive.google.com/uc?export=view&id=1VYvlYwXMKzJ_M701jpT6uKdrU42HM0bv","https://drive.google.com/uc?export=view&id=1FjLBjTlVzD4XUEQOF62Vaa4I2H1_pbwv","https://drive.google.com/uc?export=view&id=1cSQPiAY8pOc1LukOj9NzFMyweFjzYig9","https://drive.google.com/uc?export=view&id=1XBtDEFf-rWHMRvEUjlfOAiYhV2bfwipk","https://drive.google.com/uc?export=view&id=140H5W-Dmapf_aXwBmSKyFjuHwismRuQg","https://drive.google.com/uc?export=view&id=17pXmF7OHwpogM1GjUB3xTHJBQPuuVtAw","https://drive.google.com/uc?export=view&id=1ZFUPk4uX_P2wU8hFHzQO-r6WQZy_fu4U","https://drive.google.com/uc?export=view&id=12OPi6P6JVg3PD1cPU_jcytnjkjIhuZNI","https://drive.google.com/uc?export=view&id=1bEh0zqnAQsRzjfincf9ZH6TJaG2ZdEtr"]')}}]);
//# sourceMappingURL=component---src-pages-case-studies-slynote-js-7eb9d8a64775c5178dce.js.map