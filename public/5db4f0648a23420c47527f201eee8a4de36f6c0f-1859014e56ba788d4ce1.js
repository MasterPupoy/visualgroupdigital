(self.webpackChunkvisualgroupdigital=self.webpackChunkvisualgroupdigital||[]).push([[7621],{9555:function(e,t,o){e.exports=function(e){var t={};function o(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=e,o.c=t,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(l,a,function(t){return e[t]}.bind(null,a));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=o(7294)},function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return E}));var l=o(0),a=o.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,l=u(e);if(t){var a=u(this).constructor;o=Reflect.construct(l,arguments,a)}else o=l.apply(this,arguments);return i(this,o)}}function i(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function v(e){var t=0,o=0;return e.touches&&e.touches.length?(t=e.touches[0].pageX,o=e.touches[0].pageY):(t=e.pageX,o=e.pageY),{x:t,y:o}}function d(e){return e.condition?a.a.createElement(a.a.Fragment,null,e.children):null}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(s,e);var t,o,l=g(s);function s(){var e,t,o,c,r;n(this,s);for(var g=arguments.length,i=new Array(g),u=0;u<g;u++)i[u]=arguments[u];return p(m(r=l.call.apply(l,[this].concat(i))),"initX",0),p(m(r),"initY",0),p(m(r),"lastX",0),p(m(r),"lastY",0),p(m(r),"_cont",a.a.createRef()),p(m(r),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(e=null===(t=r.props)||void 0===t?void 0:t.startIndex)&&void 0!==e?e:0,multi:!(null===(o=r.props)||void 0===o||null===(c=o.images)||void 0===c||!c.length)}),p(m(r),"createTransform",(function(e,t,o,l){return"translate3d(".concat(e,"px,").concat(t,"px,0px) scale(").concat(o,") rotate(").concat(l,"deg)")})),p(m(r),"stopSideEffect",(function(e){return e.stopPropagation()})),p(m(r),"getCurrentImage",(function(e,t){var o,l,a,s,n;return e.multi?null!==(l=null!==(a=null===(s=t.images[e.current])||void 0===s?void 0:s.url)&&void 0!==a?a:null===(n=t.images)||void 0===n?void 0:n[e.current])&&void 0!==l?l:"":null!==(o=t.image)&&void 0!==o?o:""})),p(m(r),"getCurrentTitle",(function(e,t){var o,l,a,s;return e.multi?null!==(l=null===(a=t.images)||void 0===a||null===(s=a[e.current])||void 0===s?void 0:s.title)&&void 0!==l?l:"":null!==(o=t.title)&&void 0!==o?o:""})),p(m(r),"resetZoom",(function(){return r.setState({x:0,y:0,zoom:1})})),p(m(r),"shockZoom",(function(e){var t,o,l=r.props,a=l.zoomStep,s=void 0===a?.3:a,n=l.allowZoom,c=void 0===n||n,g=l.doubleClickZoom,i=void 0===g?4:g;if(!c||!i)return!1;if(r.stopSideEffect(e),r.state.zoom>1)return r.resetZoom();var m=(s<1?Math.ceil(i/s):s)*s,u=v(e),p=null===(t=r._cont.current)||void 0===t||null===(o=t.getBoundingClientRect)||void 0===o?void 0:o.call(t),d=p.x+p.width/2,E=p.y+p.height/2,f=-1*(u.x-d)*m,N=-1*(u.y-E)*m;r.setState({x:f,y:N,zoom:m})})),p(m(r),"navigateImage",(function(e,t){r.stopSideEffect(t);var o=0;switch(e){case"next":o=r.state.current+1;break;case"prev":o=r.state.current-1}o>=r.props.images.length?o=0:o<0&&(o=r.props.images.length-1),r.setState({current:o,x:0,y:0,zoom:1,rotate:0,loading:!0})})),p(m(r),"startMove",(function(e){if(r.state.zoom<=1)return!1;r.setState({moving:!0});var t=v(e);r.initX=t.x-r.lastX,r.initY=t.y-r.lastY})),p(m(r),"duringMove",(function(e){if(!r.state.moving)return!1;var t=v(e);r.lastX=t.x-r.initX,r.lastY=t.y-r.initY,r.setState({x:t.x-r.initX,y:t.y-r.initY})})),p(m(r),"endMove",(function(e){return r.setState({moving:!1})})),p(m(r),"applyZoom",(function(e){var t=r.props.zoomStep,o=void 0===t?.3:t;switch(e){case"in":r.setState({zoom:r.state.zoom+o});break;case"out":var l=r.state.zoom-o;if(l<1)break;1===l?r.setState({x:0,y:0,zoom:1}):r.setState({zoom:l});break;case"reset":r.resetZoom()}})),p(m(r),"applyRotate",(function(e){switch(e){case"cw":r.setState({rotate:r.state.rotate+90});break;case"acw":r.setState({rotate:r.state.rotate-90})}})),p(m(r),"reset",(function(e){r.stopSideEffect(e),r.setState({x:0,y:0,zoom:1,rotate:0})})),p(m(r),"exit",(function(e){if("function"==typeof r.props.onClose)return r.props.onClose(e);console.error("No Exit function passed on prop: onClose. Clicking the close button will do nothing")})),p(m(r),"shouldShowReset",(function(){return r.state.x||r.state.y||1!==r.state.zoom||0!==r.state.rotate})),p(m(r),"canvasClick",(function(e){var t=r.props.clickOutsideToExit;if((void 0===t||t)&&r.state.zoom<=1)return r.exit(e)})),p(m(r),"keyboardNavigation",(function(e){var t=r.props,o=t.allowZoom,l=void 0===o||o,a=t.allowReset,s=void 0===a||a,n=r.state,c=n.multi,g=n.x,i=n.y,m=n.zoom;switch(e.key){case"ArrowLeft":c&&1===m?r.navigateImage("prev",e):m>1&&r.setState({x:g-20});break;case"ArrowRight":c&&1===m?r.navigateImage("next",e):m>1&&r.setState({x:g+20});break;case"ArrowUp":m>1&&r.setState({y:i+20});break;case"ArrowDown":m>1&&r.setState({y:i-20});break;case"+":l&&r.applyZoom("in");break;case"-":l&&r.applyZoom("out");break;case"Escape":s&&r.shouldShowReset()?r.reset(e):r.exit(e)}})),r}return t=s,(o=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var e=this,t=this.getCurrentImage(this.state,this.props),o=this.getCurrentTitle(this.state,this.props);if(!t)return console.warn("Not showing lightbox because no image(s) was supplied"),null;var l=this.props,s=l.allowZoom,n=void 0===s||s,c=l.allowRotate,r=void 0===c||c,g=l.buttonAlign,i=void 0===g?"flex-end":g,m=l.showTitle,u=void 0===m||m,p=l.allowReset,v=void 0===p||p,E=this.state,f=E.x,N=E.y,Z=E.zoom,h=E.rotate,b=E.multi,x=E.loading,y=E.moving,w=v&&this.shouldShowReset();return a.a.createElement("div",{className:"lb-container"},a.a.createElement("div",{className:"lb-header",style:{justifyContent:i}},a.a.createElement(d,{condition:u&&o},a.a.createElement("div",{className:"lb-title",style:{display:"center"===i?"none":"flex",order:"flex-start"===i?"2":"unset"}},a.a.createElement("span",{title:o,style:{textAlign:"flex-start"===i?"right":"left"}},o))),a.a.createElement(d,{condition:"center"===i||w},a.a.createElement("div",{title:"Reset",style:{order:"flex-start"===i?"1":"unset"},className:"lb-button lb-icon-reset lb-hide-mobile reload ".concat(w?"":"lb-disabled"),onClick:this.reset})),a.a.createElement(d,{condition:b},a.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(t){return e.navigateImage("prev",t)}}),a.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(t){return e.navigateImage("next",t)}})),a.a.createElement(d,{condition:n},a.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return e.applyZoom("in")}}),a.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout ".concat(Z<=1?"lb-disabled":""),onClick:function(){return e.applyZoom("out")}})),a.a.createElement(d,{condition:r},a.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return e.applyRotate("acw")}}),a.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return e.applyRotate("cw")}})),a.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===i?"-1":"unset"},onClick:function(t){return e.exit(t)}})),a.a.createElement("div",{className:"lb-canvas".concat(x?" lb-loading":""),ref:this._cont,onClick:function(t){return e.canvasClick(t)}},a.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(f,N,Z,h),cursor:Z>1?"grab":"unset",transition:y?"none":"all 0.1s"},onMouseDown:function(t){return e.startMove(t)},onTouchStart:function(t){return e.startMove(t)},onMouseMove:function(t){return e.duringMove(t)},onTouchMove:function(t){return e.duringMove(t)},onMouseUp:function(t){return e.endMove(t)},onMouseLeave:function(t){return e.endMove(t)},onTouchEnd:function(t){return e.endMove(t)},onClick:function(t){return e.stopSideEffect(t)},onDoubleClick:function(t){return e.shockZoom(t)},onLoad:function(t){return e.setState({loading:!1})},className:"lb-img".concat(x?" lb-loading":""),title:o,src:t,alt:o}),a.a.createElement("div",{className:"mobile-controls lb-show-mobile"},b?a.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(t){return e.navigateImage("prev",t)}}):null,w?a.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,b?a.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(t){return e.navigateImage("next",t)}}):null)))}}])&&c(t.prototype,o),s}(a.a.Component)}])},2010:function(e,t,o){"use strict";o.d(t,{Z:function(){return ae}});var l=o(7294),a=o(7361),s=o(3209),n=o(56),c=o(4340),r=o(7196),g=o(274),i=o(5574),m=o(9593),u=o(7288),p=o(1404),v=o(1065),d=o(8452),E=o(5426),f=o(2937),N=o(6789),Z=o(7965),h=o(4408),b=o(2226),x=o(3142),y=o(4338),w=o(6842),k=o(1169),C=o(2791),S=o(9661),O=o(5460),R=o(3845),j=o(7892),M=o(1237),I=o(5771),z=o(4004),L=o(9714),D=o(7382),_=o(8487),U=o(3396),T=o(5087),W=o(4643),A=o(3268),K=o(7141),P=o(4691),F=o(2935),Y=o(8777),X=o(5247),B=o(3805),G=o(5349),H=o(8158),q=o(9556),J=o(8915),V=o(6964),Q=o(7891),$=o(2422),ee=o(8992),te=o(6001),oe=o(6576),le=o(2884);function ae(){return(0,l.useEffect)((function(){le.p8.set(".logos",{x:function(e){return 198*e}}),le.p8.to(".logos",{duration:50,ease:"none",x:"+=10300",modifiers:{x:le.p8.utils.unitize((function(e){return parseFloat(e)%"10300"}))},repeat:-1})})),l.createElement(a.k,{mt:"50px",w:"100%",justifyContent:"center",flexDirection:"column"},l.createElement(a.k,{alignItems:"center",className:"logoContainer",h:"200px",overflowX:"hidden"},l.createElement("img",{src:s.Z,alt:"chessmoveslogo",className:"logopng logos"}),l.createElement("img",{src:n.Z,alt:"oxtedfestival",className:"logopng logos"}),l.createElement("img",{src:c.Z,alt:"tailoredremovallogo",className:"logopng logos"}),l.createElement("img",{src:r.Z,alt:"surreycedarlogo",className:"logopng logos"}),l.createElement("img",{src:g.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),l.createElement("img",{src:i.Z,alt:"simonKemp",className:"logopng logos"}),l.createElement("img",{src:m.Z,alt:"doggo.svg",className:"logopng logos"}),l.createElement("img",{src:u.Z,alt:"redsacks.svg",className:"logopng logos"}),l.createElement("img",{src:p.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),l.createElement("img",{src:v.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),l.createElement("img",{src:d.Z,alt:"provest.svg",className:"logopng logos"}),l.createElement("img",{src:E.Z,alt:"secretcalm.svg",className:"logopng logos"}),l.createElement("img",{src:f.Z,alt:"houseofstreng.svg",className:"logopng logos"}),l.createElement("img",{src:N.Z,alt:"fitify.svg",className:"logopng logos"}),l.createElement("img",{src:Z.Z,alt:"reignsupreme.svg",className:"logopng logos"}),l.createElement("img",{src:h.Z,alt:"rebecca.svg",className:"logopng logos"}),l.createElement("img",{src:b.Z,alt:"regency.svg",className:"logopng logos"}),l.createElement("img",{src:x.Z,alt:"keating.svg",className:"logopng logos"}),l.createElement("img",{src:y.Z,alt:"schtech.svg",className:"addon logos"}),l.createElement("img",{src:w.Z,alt:"portfoliofm.svg",className:"logopng logos"}),l.createElement("img",{src:k.Z,alt:"futurefitness.svg",className:"logopng logos"}),l.createElement("img",{src:C.Z,alt:"schtech.svg",className:"logopng logos"}),l.createElement("img",{src:S.Z,alt:"adaptinghomes.svg",className:"logopng logos"}),l.createElement("img",{src:O.Z,alt:"onlinefitnessfreedom.svg",className:"logopng logos"}),l.createElement("img",{src:R.Z,alt:"intuneconsulting.svg",className:"logopng logos"}),l.createElement("img",{src:j.Z,alt:"portfoliofm.svg",className:"addon logos"}),l.createElement("img",{src:M.Z,alt:"hydroinstal.svg",className:"addon logos"}),l.createElement("img",{src:I.Z,alt:"futurefitness.svg",className:"addon logos"}),l.createElement("img",{src:z.Z,alt:"intuneconsulting.svg",className:"addon logos"}),l.createElement("img",{src:L.Z,alt:"chessmoveslogo",className:"logopng logos"}),l.createElement("img",{src:D.Z,alt:"chessmoveslogo",className:"logopng logos"}),l.createElement("img",{src:_.Z,alt:"oxtedfestival",className:"logopng logos"}),l.createElement("img",{src:U.Z,alt:"tailoredremovallogo",className:"logopng logos"}),l.createElement("img",{src:T.Z,alt:"surreycedarlogo",className:"logopng logos"}),l.createElement("img",{src:W.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),l.createElement("img",{src:A.Z,alt:"simonKemp",className:"logopng logos"}),l.createElement("img",{src:K.Z,alt:"doggo.svg",className:"logopng logos"}),l.createElement("img",{src:P.Z,alt:"redsacks.svg",className:"logopng logos"}),l.createElement("img",{src:F.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),l.createElement("img",{src:Y.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),l.createElement("img",{src:X.Z,alt:"chessmoveslogo",className:"logopng logos"}),l.createElement("img",{src:B.Z,alt:"oxtedfestival",className:"logopng logos"}),l.createElement("img",{src:G.Z,alt:"tailoredremovallogo",className:"logopng logos"}),l.createElement("img",{src:H.Z,alt:"surreycedarlogo",className:"logopng logos"}),l.createElement("img",{src:q.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),l.createElement("img",{src:J.Z,alt:"simonKemp",className:"logopng logos"}),l.createElement("img",{src:V.Z,alt:"doggo.svg",className:"logopng logos"}),l.createElement("img",{src:Q.Z,alt:"redsacks.svg",className:"logopng logos"}),l.createElement("img",{src:$.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),l.createElement("img",{src:ee.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),l.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),l.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"})),l.createElement(a.k,{my:"50px",justifyContent:"center"},l.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},l.createElement("span",null,"SEE MORE OF OUR CLIENTS"))))}},1006:function(e,t,o){"use strict";o.d(t,{Z:function(){return ne}});var l=o(7294),a=o(7361),s=o(7690),n=o(2200),c=o(3209),r=o(56),g=o(4340),i=o(7196),m=o(274),u=o(5574),p=o(9593),v=o(7288),d=o(1404),E=o(1065),f=o(8452),N=o(5426),Z=o(2937),h=o(6789),b=o(7965),x=o(4408),y=o(2226),w=o(3142),k=o(4338),C=o(6842),S=o(1169),O=o(2791),R=o(9661),j=o(5460),M=o(3845),I=o(7892),z=o(1237),L=o(5771),D=o(4004),_=o(9714),U=o(7382),T=o(8487),W=o(3396),A=o(5087),K=o(4643),P=o(3268),F=o(7141),Y=o(4691),X=o(2935),B=o(8777),G=o(5247),H=o(3805),q=o(5349),J=o(8158),V=o(9556),Q=o(8915),$=o(6964),ee=o(7891),te=o(2422),oe=o(8992),le=o(6001),ae=o(6576),se=o(2884);function ne(){return(0,l.useEffect)((function(){se.p8.set(".logos",{x:function(e){return 198*e}}),se.p8.to(".logos",{duration:50,ease:"none",x:"+=10300",modifiers:{x:se.p8.utils.unitize((function(e){return parseFloat(e)%"10300"}))},repeat:-1})})),l.createElement(l.Fragment,null,l.createElement(a.k,{flexDirection:"row",flexWrap:"wrap",w:"100%",className:"slideshow",overflowX:"hidden",pt:"20px",display:["none","none","none","none","flex"]},l.createElement(a.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:["center","center","center","center","flex-start"],alignSelf:["center","center","center","center","flex-start"]},l.createElement(s.xu,null,l.createElement(n.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",l.createElement("span",null,"LOVE")," TO ",l.createElement("br",null),"ADD YOUR LOGO HERE.")),l.createElement(s.xu,{textAlign:["center","center","center","center","left"],py:"20px"},l.createElement(n.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the ",l.createElement("br",null),"fantastic clients we have brought to the UK and International Markets."))),l.createElement(a.k,{alignItems:"center",flexWrap:"wrap",className:"logoContainer",overflowX:"hidden",justifyContent:"center"},l.createElement("img",{src:c.Z,alt:"chessmoveslogo",className:"logopng "}),l.createElement("img",{src:r.Z,alt:"oxtedfestival",className:"logopng "}),l.createElement("img",{src:g.Z,alt:"tailoredremovallogo",className:"logopng "}),l.createElement("img",{src:i.Z,alt:"surreycedarlogo",className:"logopng "}),l.createElement("img",{src:m.Z,alt:"intuneconsulting.svg",className:"logopng "}),l.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng "}),l.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng "}),l.createElement("img",{src:v.Z,alt:"redsacks.svg",className:"logopng "}),l.createElement("img",{src:d.Z,alt:"beautifulsouls.svg",className:"logopng "}),l.createElement("img",{src:E.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),l.createElement("img",{src:f.Z,alt:"provest.svg",className:"logopng "}),l.createElement("img",{src:N.Z,alt:"secretcalm.svg",className:"logopng "}),l.createElement("img",{src:Z.Z,alt:"houseofstreng.svg",className:"logopng "}),l.createElement("img",{src:h.Z,alt:"fitify.svg",className:"logopng "}),l.createElement("img",{src:b.Z,alt:"reignsupreme.svg",className:"logopng "}),l.createElement("img",{src:x.Z,alt:"rebecca.svg",className:"logopng "}),l.createElement("img",{src:y.Z,alt:"regency.svg",className:"logopng "}),l.createElement("img",{src:w.Z,alt:"keating.svg",className:"logopng "}),l.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),l.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),l.createElement("img",{src:k.Z,alt:"schtech.svg",className:"addon "}),l.createElement("img",{src:A.Z,alt:"surreycedarlogo",className:"logopng "}),l.createElement("img",{src:V.Z,alt:"intuneconsulting.svg",className:"logopng "}),l.createElement("img",{src:O.Z,alt:"schtech.svg",className:"logopng "}),l.createElement("img",{src:W.Z,alt:"tailoredremovallogo",className:"logopng "}),l.createElement("img",{src:J.Z,alt:"surreycedarlogo",className:"logopng "}),l.createElement("img",{src:K.Z,alt:"intuneconsulting.svg",className:"logopng "}),l.createElement("img",{src:P.Z,alt:"simonKemp",className:"logopng "}),l.createElement("img",{src:F.Z,alt:"doggo.svg",className:"logopng "}),l.createElement("img",{src:Y.Z,alt:"redsacks.svg",className:"logopng "}),l.createElement("img",{src:X.Z,alt:"beautifulsouls.svg",className:"logopng "}),l.createElement("img",{src:B.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),l.createElement("img",{src:S.Z,alt:"futurefitness.svg",className:"logopng "}),l.createElement("img",{src:C.Z,alt:"portfoliofm.svg",className:"logopng "}),l.createElement("img",{src:R.Z,alt:"adaptinghomes.svg",className:"logopng "}),l.createElement("img",{src:j.Z,alt:"onlinefitnessfreedom.svg",className:"logopng "}),l.createElement("img",{src:M.Z,alt:"intuneconsulting.svg",className:"logopng "}),l.createElement("img",{src:I.Z,alt:"portfoliofm.svg",className:"addon "}),l.createElement("img",{src:z.Z,alt:"hydroinstal.svg",className:"addon "}),l.createElement("img",{src:L.Z,alt:"futurefitness.svg",className:"addon "}),l.createElement("img",{src:D.Z,alt:"intuneconsulting.svg",className:"addon "}),l.createElement("img",{src:H.Z,alt:"oxtedfestival",className:"logopng "}),l.createElement("img",{src:q.Z,alt:"tailoredremovallogo",className:"logopng "}),l.createElement("img",{src:_.Z,alt:"chessmoveslogo",className:"logopng "}),l.createElement("img",{src:U.Z,alt:"chessmoveslogo",className:"logopng "}),l.createElement("img",{src:T.Z,alt:"oxtedfestival",className:"logopng "}),l.createElement("img",{src:G.Z,alt:"chessmoveslogo",className:"logopng "}),l.createElement("img",{src:Q.Z,alt:"simonKemp",className:"logopng "}),l.createElement("img",{src:$.Z,alt:"doggo.svg",className:"logopng "}),l.createElement("img",{src:ee.Z,alt:"redsacks.svg",className:"logopng "}),l.createElement("img",{src:te.Z,alt:"beautifulsouls.svg",className:"logopng "}),l.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}))),l.createElement(a.k,{mt:"50px",w:"100%",display:["block","block","block","block","none"],justifyContent:"center",flexDirection:"column"},l.createElement(a.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:["center","center","center","center","flex-start"],alignSelf:["center","center","center","center","flex-start"]},l.createElement(s.xu,null,l.createElement(n.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",l.createElement("span",null,"LOVE")," TO ",l.createElement("br",null),"ADD YOUR LOGO HERE.")),l.createElement(s.xu,{textAlign:["center","center","center","center","left"],py:"20px"},l.createElement(n.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the ",l.createElement("br",null),"fantastic clients we have brought to the UK and International Markets."))),l.createElement(a.k,{alignItems:"center",className:"logoContainer",h:"200px",overflowX:"hidden"},l.createElement("img",{src:c.Z,alt:"chessmoveslogo",className:"logopng logos"}),l.createElement("img",{src:r.Z,alt:"oxtedfestival",className:"logopng logos"}),l.createElement("img",{src:g.Z,alt:"tailoredremovallogo",className:"logopng logos"}),l.createElement("img",{src:i.Z,alt:"surreycedarlogo",className:"logopng logos"}),l.createElement("img",{src:m.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),l.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng logos"}),l.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng logos"}),l.createElement("img",{src:v.Z,alt:"redsacks.svg",className:"logopng logos"}),l.createElement("img",{src:d.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),l.createElement("img",{src:E.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),l.createElement("img",{src:f.Z,alt:"provest.svg",className:"logopng logos"}),l.createElement("img",{src:N.Z,alt:"secretcalm.svg",className:"logopng logos"}),l.createElement("img",{src:Z.Z,alt:"houseofstreng.svg",className:"logopng logos"}),l.createElement("img",{src:h.Z,alt:"fitify.svg",className:"logopng logos"}),l.createElement("img",{src:b.Z,alt:"reignsupreme.svg",className:"logopng logos"}),l.createElement("img",{src:x.Z,alt:"rebecca.svg",className:"logopng logos"}),l.createElement("img",{src:y.Z,alt:"regency.svg",className:"logopng logos"}),l.createElement("img",{src:w.Z,alt:"keating.svg",className:"logopng logos"}),l.createElement("img",{src:k.Z,alt:"schtech.svg",className:"addon logos"}),l.createElement("img",{src:C.Z,alt:"portfoliofm.svg",className:"logopng logos"}),l.createElement("img",{src:S.Z,alt:"futurefitness.svg",className:"logopng logos"}),l.createElement("img",{src:O.Z,alt:"schtech.svg",className:"logopng logos"}),l.createElement("img",{src:R.Z,alt:"adaptinghomes.svg",className:"logopng logos"}),l.createElement("img",{src:j.Z,alt:"onlinefitnessfreedom.svg",className:"logopng logos"}),l.createElement("img",{src:M.Z,alt:"intuneconsulting.svg",className:"logopng logos"}),l.createElement("img",{src:I.Z,alt:"portfoliofm.svg",className:"addon logos"}),l.createElement("img",{src:z.Z,alt:"hydroinstal.svg",className:"addon logos"}),l.createElement("img",{src:L.Z,alt:"futurefitness.svg",className:"addon logos"}),l.createElement("img",{src:D.Z,alt:"intuneconsulting.svg",className:"addon logos"}),l.createElement("img",{src:_.Z,alt:"chessmoveslogo",className:"logopng logos"}),l.createElement("img",{src:U.Z,alt:"chessmoveslogo",className:"logopng logos"}),l.createElement("img",{src:T.Z,alt:"oxtedfestival",className:"logopng logos"}),l.createElement("img",{src:W.Z,alt:"tailoredremovallogo",className:"logopng logos"}),l.createElement("img",{src:A.Z,alt:"surreycedarlogo",className:"logopng logos"}),l.createElement("img",{src:K.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),l.createElement("img",{src:P.Z,alt:"simonKemp",className:"logopng logos"}),l.createElement("img",{src:F.Z,alt:"doggo.svg",className:"logopng logos"}),l.createElement("img",{src:Y.Z,alt:"redsacks.svg",className:"logopng logos"}),l.createElement("img",{src:X.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),l.createElement("img",{src:B.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),l.createElement("img",{src:G.Z,alt:"chessmoveslogo",className:"logopng logos"}),l.createElement("img",{src:H.Z,alt:"oxtedfestival",className:"logopng logos"}),l.createElement("img",{src:q.Z,alt:"tailoredremovallogo",className:"logopng logos"}),l.createElement("img",{src:J.Z,alt:"surreycedarlogo",className:"logopng logos"}),l.createElement("img",{src:V.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),l.createElement("img",{src:Q.Z,alt:"simonKemp",className:"logopng logos"}),l.createElement("img",{src:$.Z,alt:"doggo.svg",className:"logopng logos"}),l.createElement("img",{src:ee.Z,alt:"redsacks.svg",className:"logopng logos"}),l.createElement("img",{src:te.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),l.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),l.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),l.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"})),l.createElement(a.k,{my:"50px",justifyContent:"center"},l.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},l.createElement("span",null,"SEE MORE OF OUR CLIENTS")))))}},6059:function(e,t,o){"use strict";o.d(t,{Z:function(){return ne}});var l=o(7294),a=o(7361),s=o(7690),n=o(2200),c=o(3209),r=o(56),g=o(4340),i=o(7196),m=o(274),u=o(5574),p=o(9593),v=o(7288),d=o(1404),E=o(1065),f=o(8452),N=o(5426),Z=o(2937),h=o(6789),b=o(7965),x=o(4408),y=o(2226),w=o(3142),k=o(4338),C=o(6842),S=o(1169),O=o(2791),R=o(9661),j=o(5460),M=o(3845),I=o(7892),z=o(1237),L=o(5771),D=o(4004),_=o(9714),U=o(7382),T=o(8487),W=o(3396),A=o(5087),K=o(4643),P=o(3268),F=o(7141),Y=o(4691),X=o(2935),B=o(8777),G=o(5247),H=o(3805),q=o(5349),J=o(8158),V=o(9556),Q=o(8915),$=o(6964),ee=o(7891),te=o(2422),oe=o(8992),le=o(6001),ae=o(6576),se=o(2010);function ne(){return l.createElement(l.Fragment,null,l.createElement(a.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:"center",display:["none","none","none","none","flex"]},l.createElement(s.xu,null,l.createElement(n.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",l.createElement("span",null,"LOVE")," TO ",l.createElement("br",null),"ADD YOUR LOGO HERE.")),l.createElement(s.xu,{textAlign:"center",py:"20px"},l.createElement(n.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the ",l.createElement("br",null),"fantastic clients we have brought to the UK and International Markets."))),l.createElement(a.k,{flexDirection:"row",flexWrap:"wrap",w:"100%",className:"slideshow",overflowX:"hidden",pt:"20px",display:["none","none","none","none","flex"]},l.createElement(a.k,{alignItems:"center",flexWrap:"wrap",className:"logoContainer",overflowX:"hidden",justifyContent:"center"},l.createElement("img",{src:c.Z,alt:"chessmoveslogo",className:"logopng "}),l.createElement("img",{src:r.Z,alt:"oxtedfestival",className:"logopng "}),l.createElement("img",{src:g.Z,alt:"tailoredremovallogo",className:"logopng "}),l.createElement("img",{src:i.Z,alt:"surreycedarlogo",className:"logopng "}),l.createElement("img",{src:m.Z,alt:"intuneconsulting.svg",className:"addon3 "}),l.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng "}),l.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng "}),l.createElement("img",{src:v.Z,alt:"redsacks.svg",className:"logopng "}),l.createElement("img",{src:d.Z,alt:"beautifulsouls.svg",className:"logopng "}),l.createElement("img",{src:E.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),l.createElement("img",{src:f.Z,alt:"provest.svg",className:"logopng "}),l.createElement("img",{src:N.Z,alt:"secretcalm.svg",className:"logopng "}),l.createElement("img",{src:Z.Z,alt:"houseofstreng.svg",className:"logopng "}),l.createElement("img",{src:h.Z,alt:"fitify.svg",className:"logopng "}),l.createElement("img",{src:b.Z,alt:"reignsupreme.svg",className:"logopng "}),l.createElement("img",{src:x.Z,alt:"rebecca.svg",className:"logopng "}),l.createElement("img",{src:y.Z,alt:"regency.svg",className:"logopng "}),l.createElement("img",{src:w.Z,alt:"keating.svg",className:"logopng "}),l.createElement("img",{src:k.Z,alt:"schtech.svg",className:"addon "}),l.createElement("img",{src:C.Z,alt:"portfoliofm.svg",className:"logopng "}),l.createElement("img",{src:S.Z,alt:"futurefitness.svg",className:"logopng "}),l.createElement("img",{src:O.Z,alt:"schtech.svg",className:"logopng "}),l.createElement("img",{src:R.Z,alt:"adaptinghomes.svg",className:"logopng "}),l.createElement("img",{src:j.Z,alt:"onlinefitnessfreedom.svg",className:"logopng "}),l.createElement("img",{src:M.Z,alt:"intuneconsulting.svg",className:"logopng "}),l.createElement("img",{src:I.Z,alt:"portfoliofm.svg",className:"addon "}),l.createElement("img",{src:z.Z,alt:"hydroinstal.svg",className:"addon "}),l.createElement("img",{src:L.Z,alt:"futurefitness.svg",className:"addon "}),l.createElement("img",{src:D.Z,alt:"intuneconsulting.svg",className:"addon "}),l.createElement("img",{src:_.Z,alt:"chessmoveslogo",className:"logopng "}),l.createElement("img",{src:U.Z,alt:"chessmoveslogo",className:"logopng "}),l.createElement("img",{src:T.Z,alt:"oxtedfestival",className:"logopng "}),l.createElement("img",{src:W.Z,alt:"tailoredremovallogo",className:"logopng "}),l.createElement("img",{src:A.Z,alt:"surreycedarlogo",className:"logopng "}),l.createElement("img",{src:K.Z,alt:"intuneconsulting.svg",className:"addon3 "}),l.createElement("img",{src:P.Z,alt:"simonKemp",className:"logopng "}),l.createElement("img",{src:F.Z,alt:"doggo.svg",className:"logopng "}),l.createElement("img",{src:Y.Z,alt:"redsacks.svg",className:"logopng "}),l.createElement("img",{src:X.Z,alt:"beautifulsouls.svg",className:"logopng "}),l.createElement("img",{src:B.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),l.createElement("img",{src:G.Z,alt:"chessmoveslogo",className:"logopng "}),l.createElement("img",{src:H.Z,alt:"oxtedfestival",className:"logopng "}),l.createElement("img",{src:q.Z,alt:"tailoredremovallogo",className:"logopng "}),l.createElement("img",{src:J.Z,alt:"surreycedarlogo",className:"logopng "}),l.createElement("img",{src:V.Z,alt:"intuneconsulting.svg",className:"addon3 "}),l.createElement("img",{src:Q.Z,alt:"simonKemp",className:"logopng "}),l.createElement("img",{src:$.Z,alt:"doggo.svg",className:"logopng "}),l.createElement("img",{src:ee.Z,alt:"redsacks.svg",className:"logopng "}),l.createElement("img",{src:te.Z,alt:"beautifulsouls.svg",className:"logopng "}),l.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),l.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),l.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "})),l.createElement(a.k,{justifyContent:"center",alignItems:"center",w:"100%",pt:"20px"},l.createElement(a.k,{w:"400px",justifyContent:"space-between",alignItems:"center"},l.createElement(s.xu,{alignSelf:"center"},l.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},l.createElement("span",null,"SEE MORE OF OUR CLIENTS"))),l.createElement(s.xu,null,l.createElement("a",{className:"reqCB",href:"/contact"},"REQUEST A CALL BACK >"))))),l.createElement(a.k,{mt:"100px",w:"100%",display:["block","block","block","block","none"],justifyContent:"center",flexDirection:"column"},l.createElement(a.k,{w:"100%",alignItems:"center",justifyContent:"center"},l.createElement(n.x,{className:"addlogo",fontSize:"xl"},"WE WOULD ",l.createElement("span",null,"LOVE")," TO ADD YOUR LOGO HERE.")),l.createElement(a.k,{my:"20px",px:"50px",w:"100%",alignItems:"center",justifyContent:"center"},l.createElement(n.x,{fontSize:"md",textAlign:"center"},"We’ve worked with more than 100 companies since 2015 Check out some of the fantastic clients we have brought to the UK and International Markets.")),l.createElement(se.Z,null)))}},5877:function(e){"use strict";e.exports=JSON.parse('["https://drive.google.com/uc?export=view&id=1rVUcQ4_kJneDwYjlkm0GrFhH_DoZCG7U","https://drive.google.com/uc?export=view&id=1Oc2w0UDLIjeLbwW3s1ZRwNabCoVpi8Rf","https://drive.google.com/uc?export=view&id=1sfBElcCiRwUF1hoUD-MlAySLjjcibYpJ","https://drive.google.com/uc?export=view&id=1zTGT3eE5PMGS2c801qFDecRs5bi2ikjM","https://drive.google.com/uc?export=view&id=1VIRE0EYUFLGFePx2i6d2NbpRr0nf9M_E","https://drive.google.com/uc?export=view&id=1MCX4UXNNlN-xeSHCtS1uR3BhIp_edsgu","https://drive.google.com/uc?export=view&id=1l_tyxLYcKKpRQsqFMB5qljcfaf-TH14-","https://drive.google.com/uc?export=view&id=16C_EtJ62Zx-n2mdc8deWLbfhZMOiYMJc","https://drive.google.com/uc?export=view&id=1iD-brEE6NXU9WEBa5K1F6Km2jtkD3BN7","https://drive.google.com/uc?export=view&id=1PMvHq4kAHiO_JjiPVPa-rPgdU1E5r2iI","https://drive.google.com/uc?export=view&id=1fCzdWrQUM9eojK-3hzYS-AZa0uw2mcwA","https://drive.google.com/uc?export=view&id=1pSR2yQ3eip3ULC-TP6wDcV4DAnzPQvqB","https://drive.google.com/uc?export=view&id=1dBRh1B0SnZe1OeOaORYflXt0l9XWfVl8","https://drive.google.com/uc?export=view&id=1dj0CwFJW0wMOjSxQHDcDOcB5LLTMOjL4","https://drive.google.com/uc?export=view&id=1ODbh6vNjnprxr_RICzNWl5uw1zONHFua","https://drive.google.com/uc?export=view&id=1SPw3E5nLHa683FtqYJHlOJBGbFcEN8FD","https://drive.google.com/uc?export=view&id=1LJ25GgLfe5PKBj0qWy_DlEaToWNgSVi6","https://drive.google.com/uc?export=view&id=1_TAZczj-us52ACrHh1IiJpY5l6bGq1Bz","https://drive.google.com/uc?export=view&id=1vuydqGPBqYFBteivgCrv5EU84_bivtfj","https://drive.google.com/uc?export=view&id=1lVJmKEAXSK3B9TXPoox1gBFuzJFG3vuS","https://drive.google.com/uc?export=view&id=1IUoqamRIuOgFWN4plgEMl1Ljkka2fq_Z","https://drive.google.com/uc?export=view&id=1jL4AHIr9G3ZLElqFwIyxIViLcWj4piy4","https://drive.google.com/uc?export=view&id=10y7_5XNyniKZj67e4ykIoKeQsNgzYmIm"]')}}]);
//# sourceMappingURL=5db4f0648a23420c47527f201eee8a4de36f6c0f-1859014e56ba788d4ce1.js.map