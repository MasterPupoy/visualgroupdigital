(self.webpackChunkvisualgroupdigital=self.webpackChunkvisualgroupdigital||[]).push([[5725],{1823:function(e,t,l){"use strict";l.d(t,{C:function(){return m}});var a=l(2543),o=l(3888),s=l(7487),n=l(9265),c=l(5587),r=l(4667),g=l(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}var m=(0,a.G)((function(e,t){var l=(0,o.m)("Badge",e),a=function(e,t){if(null==e)return{};var l,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)l=s[a],t.indexOf(l)>=0||(o[l]=e[l]);return o}((0,s.Lr)(e),["className"]);return g.createElement(n.m$.span,i({ref:t,className:(0,c.cx)("chakra-badge",e.className)},a,{__css:i({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},l)}))}));r.Ts&&(m.displayName="Badge")},9555:function(e,t,l){e.exports=function(e){var t={};function l(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,l),o.l=!0,o.exports}return l.m=e,l.c=t,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(a,o,function(t){return e[t]}.bind(null,o));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=1)}([function(e,t){e.exports=l(7294)},function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return E}));var a=l(0),o=l.n(a);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,a=u(e);if(t){var o=u(this).constructor;l=Reflect.construct(a,arguments,o)}else l=a.apply(this,arguments);return i(this,l)}}function i(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function d(e){var t=0,l=0;return e.touches&&e.touches.length?(t=e.touches[0].pageX,l=e.touches[0].pageY):(t=e.pageX,l=e.pageY),{x:t,y:l}}function v(e){return e.condition?o.a.createElement(o.a.Fragment,null,e.children):null}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(s,e);var t,l,a=g(s);function s(){var e,t,l,c,r;n(this,s);for(var g=arguments.length,i=new Array(g),u=0;u<g;u++)i[u]=arguments[u];return p(m(r=a.call.apply(a,[this].concat(i))),"initX",0),p(m(r),"initY",0),p(m(r),"lastX",0),p(m(r),"lastY",0),p(m(r),"_cont",o.a.createRef()),p(m(r),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(e=null===(t=r.props)||void 0===t?void 0:t.startIndex)&&void 0!==e?e:0,multi:!(null===(l=r.props)||void 0===l||null===(c=l.images)||void 0===c||!c.length)}),p(m(r),"createTransform",(function(e,t,l,a){return"translate3d(".concat(e,"px,").concat(t,"px,0px) scale(").concat(l,") rotate(").concat(a,"deg)")})),p(m(r),"stopSideEffect",(function(e){return e.stopPropagation()})),p(m(r),"getCurrentImage",(function(e,t){var l,a,o,s,n;return e.multi?null!==(a=null!==(o=null===(s=t.images[e.current])||void 0===s?void 0:s.url)&&void 0!==o?o:null===(n=t.images)||void 0===n?void 0:n[e.current])&&void 0!==a?a:"":null!==(l=t.image)&&void 0!==l?l:""})),p(m(r),"getCurrentTitle",(function(e,t){var l,a,o,s;return e.multi?null!==(a=null===(o=t.images)||void 0===o||null===(s=o[e.current])||void 0===s?void 0:s.title)&&void 0!==a?a:"":null!==(l=t.title)&&void 0!==l?l:""})),p(m(r),"resetZoom",(function(){return r.setState({x:0,y:0,zoom:1})})),p(m(r),"shockZoom",(function(e){var t,l,a=r.props,o=a.zoomStep,s=void 0===o?.3:o,n=a.allowZoom,c=void 0===n||n,g=a.doubleClickZoom,i=void 0===g?4:g;if(!c||!i)return!1;if(r.stopSideEffect(e),r.state.zoom>1)return r.resetZoom();var m=(s<1?Math.ceil(i/s):s)*s,u=d(e),p=null===(t=r._cont.current)||void 0===t||null===(l=t.getBoundingClientRect)||void 0===l?void 0:l.call(t),v=p.x+p.width/2,E=p.y+p.height/2,f=-1*(u.x-v)*m,N=-1*(u.y-E)*m;r.setState({x:f,y:N,zoom:m})})),p(m(r),"navigateImage",(function(e,t){r.stopSideEffect(t);var l=0;switch(e){case"next":l=r.state.current+1;break;case"prev":l=r.state.current-1}l>=r.props.images.length?l=0:l<0&&(l=r.props.images.length-1),r.setState({current:l,x:0,y:0,zoom:1,rotate:0,loading:!0})})),p(m(r),"startMove",(function(e){if(r.state.zoom<=1)return!1;r.setState({moving:!0});var t=d(e);r.initX=t.x-r.lastX,r.initY=t.y-r.lastY})),p(m(r),"duringMove",(function(e){if(!r.state.moving)return!1;var t=d(e);r.lastX=t.x-r.initX,r.lastY=t.y-r.initY,r.setState({x:t.x-r.initX,y:t.y-r.initY})})),p(m(r),"endMove",(function(e){return r.setState({moving:!1})})),p(m(r),"applyZoom",(function(e){var t=r.props.zoomStep,l=void 0===t?.3:t;switch(e){case"in":r.setState({zoom:r.state.zoom+l});break;case"out":var a=r.state.zoom-l;if(a<1)break;1===a?r.setState({x:0,y:0,zoom:1}):r.setState({zoom:a});break;case"reset":r.resetZoom()}})),p(m(r),"applyRotate",(function(e){switch(e){case"cw":r.setState({rotate:r.state.rotate+90});break;case"acw":r.setState({rotate:r.state.rotate-90})}})),p(m(r),"reset",(function(e){r.stopSideEffect(e),r.setState({x:0,y:0,zoom:1,rotate:0})})),p(m(r),"exit",(function(e){if("function"==typeof r.props.onClose)return r.props.onClose(e);console.error("No Exit function passed on prop: onClose. Clicking the close button will do nothing")})),p(m(r),"shouldShowReset",(function(){return r.state.x||r.state.y||1!==r.state.zoom||0!==r.state.rotate})),p(m(r),"canvasClick",(function(e){var t=r.props.clickOutsideToExit;if((void 0===t||t)&&r.state.zoom<=1)return r.exit(e)})),p(m(r),"keyboardNavigation",(function(e){var t=r.props,l=t.allowZoom,a=void 0===l||l,o=t.allowReset,s=void 0===o||o,n=r.state,c=n.multi,g=n.x,i=n.y,m=n.zoom;switch(e.key){case"ArrowLeft":c&&1===m?r.navigateImage("prev",e):m>1&&r.setState({x:g-20});break;case"ArrowRight":c&&1===m?r.navigateImage("next",e):m>1&&r.setState({x:g+20});break;case"ArrowUp":m>1&&r.setState({y:i+20});break;case"ArrowDown":m>1&&r.setState({y:i-20});break;case"+":a&&r.applyZoom("in");break;case"-":a&&r.applyZoom("out");break;case"Escape":s&&r.shouldShowReset()?r.reset(e):r.exit(e)}})),r}return t=s,(l=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var e=this,t=this.getCurrentImage(this.state,this.props),l=this.getCurrentTitle(this.state,this.props);if(!t)return console.warn("Not showing lightbox because no image(s) was supplied"),null;var a=this.props,s=a.allowZoom,n=void 0===s||s,c=a.allowRotate,r=void 0===c||c,g=a.buttonAlign,i=void 0===g?"flex-end":g,m=a.showTitle,u=void 0===m||m,p=a.allowReset,d=void 0===p||p,E=this.state,f=E.x,N=E.y,Z=E.zoom,x=E.rotate,b=E.multi,h=E.loading,y=E.moving,w=d&&this.shouldShowReset();return o.a.createElement("div",{className:"lb-container"},o.a.createElement("div",{className:"lb-header",style:{justifyContent:i}},o.a.createElement(v,{condition:u&&l},o.a.createElement("div",{className:"lb-title",style:{display:"center"===i?"none":"flex",order:"flex-start"===i?"2":"unset"}},o.a.createElement("span",{title:l,style:{textAlign:"flex-start"===i?"right":"left"}},l))),o.a.createElement(v,{condition:"center"===i||w},o.a.createElement("div",{title:"Reset",style:{order:"flex-start"===i?"1":"unset"},className:"lb-button lb-icon-reset lb-hide-mobile reload ".concat(w?"":"lb-disabled"),onClick:this.reset})),o.a.createElement(v,{condition:b},o.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(t){return e.navigateImage("prev",t)}}),o.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(t){return e.navigateImage("next",t)}})),o.a.createElement(v,{condition:n},o.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return e.applyZoom("in")}}),o.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout ".concat(Z<=1?"lb-disabled":""),onClick:function(){return e.applyZoom("out")}})),o.a.createElement(v,{condition:r},o.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return e.applyRotate("acw")}}),o.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return e.applyRotate("cw")}})),o.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===i?"-1":"unset"},onClick:function(t){return e.exit(t)}})),o.a.createElement("div",{className:"lb-canvas".concat(h?" lb-loading":""),ref:this._cont,onClick:function(t){return e.canvasClick(t)}},o.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(f,N,Z,x),cursor:Z>1?"grab":"unset",transition:y?"none":"all 0.1s"},onMouseDown:function(t){return e.startMove(t)},onTouchStart:function(t){return e.startMove(t)},onMouseMove:function(t){return e.duringMove(t)},onTouchMove:function(t){return e.duringMove(t)},onMouseUp:function(t){return e.endMove(t)},onMouseLeave:function(t){return e.endMove(t)},onTouchEnd:function(t){return e.endMove(t)},onClick:function(t){return e.stopSideEffect(t)},onDoubleClick:function(t){return e.shockZoom(t)},onLoad:function(t){return e.setState({loading:!1})},className:"lb-img".concat(h?" lb-loading":""),title:l,src:t,alt:l}),o.a.createElement("div",{className:"mobile-controls lb-show-mobile"},b?o.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(t){return e.navigateImage("prev",t)}}):null,w?o.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,b?o.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(t){return e.navigateImage("next",t)}}):null)))}}])&&c(t.prototype,l),s}(o.a.Component)}])},2010:function(e,t,l){"use strict";l.d(t,{Z:function(){return ne}});var a=l(7294),o=l(7361),s=l(120),n=l(4658),c=l(6473),r=l(6749),g=l(9897),i=l(1179),m=l(6040),u=l(6023),p=l(8070),d=l(6274),v=l(4776),E=l(2901),f=l(1034),N=l(2711),Z=l(7307),x=l(703),b=l(3258),h=l(15),y=l(3247),w=l(1931),k=l(8411),C=l(6596),S=l(9119),O=l(1899),R=l(4878),I=l(2626),M=l(4917),z=l(3781),j=l(5274),D=l(1223),T=l(9800),L=l(6215),_=l(2029),A=l(386),W=l(1251),U=l(9327),K=l(7494),X=l(3548),P=l(3014),Y=l(1378),B=l(7218),F=l(1993),G=l(1314),V=l(3585),Q=l(5879),q=l(6421),H=l(2175),J=l(7212),$=l(6501),ee=l(328),te=l(8809),le=l(2074),ae=l(3853),oe=l(8279),se=l(2884);function ne(){return(0,a.useEffect)((function(){se.p8.set(".logos",{x:function(e){return 198*e}}),se.p8.to(".logos",{duration:50,ease:"none",x:"+=10300",modifiers:{x:se.p8.utils.unitize((function(e){return parseFloat(e)%"10300"}))},repeat:-1})})),a.createElement(o.k,{mt:"50px",w:"100%",justifyContent:"center",flexDirection:"column"},a.createElement(o.k,{alignItems:"center",className:"logoContainer",h:"200px",overflowX:"hidden"},a.createElement("img",{src:s.Z,alt:"chessmoveslogo",className:"logopng logos"}),a.createElement("img",{src:n.Z,alt:"oxtedfestival",className:"logopng logos"}),a.createElement("img",{src:c.Z,alt:"tailoredremovallogo",className:"logopng logos"}),a.createElement("img",{src:r.Z,alt:"surreycedarlogo",className:"logopng logos"}),a.createElement("img",{src:g.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),a.createElement("img",{src:i.Z,alt:"simonKemp",className:"logopng logos"}),a.createElement("img",{src:m.Z,alt:"doggo.svg",className:"logopng logos"}),a.createElement("img",{src:u.Z,alt:"redsacks.svg",className:"logopng logos"}),a.createElement("img",{src:p.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),a.createElement("img",{src:d.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:v.Z,alt:"provest.svg",className:"logopng logos"}),a.createElement("img",{src:E.Z,alt:"secretcalm.svg",className:"logopng logos"}),a.createElement("img",{src:f.Z,alt:"fitify.svg",className:"logopng logos"}),a.createElement("img",{src:N.Z,alt:"reignsupreme.svg",className:"logopng logos"}),a.createElement("img",{src:Z.Z,alt:"rebecca.svg",className:"logopng logos"}),a.createElement("img",{src:x.Z,alt:"regency.svg",className:"logopng logos"}),a.createElement("img",{src:b.Z,alt:"keating.svg",className:"logopng logos"}),a.createElement("img",{src:h.Z,alt:"schtech.svg",className:"addon logos"}),a.createElement("img",{src:y.Z,alt:"portfoliofm.svg",className:"logopng logos"}),a.createElement("img",{src:w.Z,alt:"futurefitness.svg",className:"logopng logos"}),a.createElement("img",{src:k.Z,alt:"schtech.svg",className:"logopng logos"}),a.createElement("img",{src:C.Z,alt:"adaptinghomes.svg",className:"logopng logos"}),a.createElement("img",{src:S.Z,alt:"onlinefitnessfreedom.svg",className:"logopng logos"}),a.createElement("img",{src:O.Z,alt:"intuneconsulting.svg",className:"logopng logos"}),a.createElement("img",{src:R.Z,alt:"portfoliofm.svg",className:"addon logos"}),a.createElement("img",{src:I.Z,alt:"hydroinstal.svg",className:"addon logos"}),a.createElement("img",{src:M.Z,alt:"futurefitness.svg",className:"addon logos"}),a.createElement("img",{src:z.Z,alt:"intuneconsulting.svg",className:"addon logos"}),a.createElement("img",{src:j.Z,alt:"chessmoveslogo",className:"logopng logos"}),a.createElement("img",{src:D.Z,alt:"chessmoveslogo",className:"logopng logos"}),a.createElement("img",{src:T.Z,alt:"oxtedfestival",className:"logopng logos"}),a.createElement("img",{src:L.Z,alt:"tailoredremovallogo",className:"logopng logos"}),a.createElement("img",{src:_.Z,alt:"surreycedarlogo",className:"logopng logos"}),a.createElement("img",{src:A.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),a.createElement("img",{src:W.Z,alt:"simonKemp",className:"logopng logos"}),a.createElement("img",{src:U.Z,alt:"doggo.svg",className:"logopng logos"}),a.createElement("img",{src:K.Z,alt:"redsacks.svg",className:"logopng logos"}),a.createElement("img",{src:X.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),a.createElement("img",{src:P.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:Y.Z,alt:"chessmoveslogo",className:"logopng logos"}),a.createElement("img",{src:B.Z,alt:"oxtedfestival",className:"logopng logos"}),a.createElement("img",{src:F.Z,alt:"tailoredremovallogo",className:"logopng logos"}),a.createElement("img",{src:G.Z,alt:"surreycedarlogo",className:"logopng logos"}),a.createElement("img",{src:V.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),a.createElement("img",{src:Q.Z,alt:"simonKemp",className:"logopng logos"}),a.createElement("img",{src:q.Z,alt:"doggo.svg",className:"logopng logos"}),a.createElement("img",{src:H.Z,alt:"redsacks.svg",className:"logopng logos"}),a.createElement("img",{src:J.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),a.createElement("img",{src:$.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:ee.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"})),a.createElement(o.k,{my:"50px",justifyContent:"center"},a.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},a.createElement("span",null,"SEE MORE OF OUR CLIENTS"))))}},1006:function(e,t,l){"use strict";l.d(t,{Z:function(){return re}});var a=l(7294),o=l(7361),s=l(7690),n=l(2200),c=l(120),r=l(4658),g=l(6473),i=l(6749),m=l(9897),u=l(1179),p=l(6040),d=l(6023),v=l(8070),E=l(6274),f=l(4776),N=l(2901),Z=l(1034),x=l(2711),b=l(7307),h=l(703),y=l(3258),w=l(15),k=l(3247),C=l(1931),S=l(8411),O=l(6596),R=l(9119),I=l(1899),M=l(4878),z=l(2626),j=l(4917),D=l(3781),T=l(5274),L=l(1223),_=l(9800),A=l(6215),W=l(2029),U=l(386),K=l(1251),X=l(9327),P=l(7494),Y=l(3548),B=l(3014),F=l(1378),G=l(7218),V=l(1993),Q=l(1314),q=l(3585),H=l(5879),J=l(6421),$=l(2175),ee=l(7212),te=l(6501),le=l(328),ae=l(8809),oe=l(2074),se=l(3853),ne=l(8279),ce=l(2884);function re(){return(0,a.useEffect)((function(){ce.p8.set(".logos",{x:function(e){return 198*e}}),ce.p8.to(".logos",{duration:50,ease:"none",x:"+=10300",modifiers:{x:ce.p8.utils.unitize((function(e){return parseFloat(e)%"10300"}))},repeat:-1})})),a.createElement(a.Fragment,null,a.createElement(o.k,{flexDirection:"row",flexWrap:"wrap",w:"100%",className:"slideshow",overflowX:"hidden",pt:"20px",display:["none","none","none","none","flex"]},a.createElement(o.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:["center","center","center","center","flex-start"],alignSelf:["center","center","center","center","flex-start"]},a.createElement(s.xu,null,a.createElement(n.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",a.createElement("span",null,"LOVE")," TO ",a.createElement("br",null),"ADD YOUR LOGO HERE.")),a.createElement(s.xu,{textAlign:["center","center","center","center","left"],py:"20px"},a.createElement(n.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the ",a.createElement("br",null),"fantastic clients we have brought to the UK and International Markets."))),a.createElement(o.k,{alignItems:"center",flexWrap:"wrap",className:"logoContainer",overflowX:"hidden",justifyContent:"center"},a.createElement("img",{src:c.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:r.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:g.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:i.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:m.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:d.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:v.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:E.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:f.Z,alt:"provest.svg",className:"logopng "}),a.createElement("img",{src:N.Z,alt:"secretcalm.svg",className:"logopng "}),a.createElement("img",{src:Z.Z,alt:"fitify.svg",className:"logopng "}),a.createElement("img",{src:x.Z,alt:"reignsupreme.svg",className:"logopng "}),a.createElement("img",{src:b.Z,alt:"rebecca.svg",className:"logopng "}),a.createElement("img",{src:h.Z,alt:"regency.svg",className:"logopng "}),a.createElement("img",{src:y.Z,alt:"keating.svg",className:"logopng "}),a.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:w.Z,alt:"schtech.svg",className:"addon "}),a.createElement("img",{src:W.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:q.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:S.Z,alt:"schtech.svg",className:"logopng "}),a.createElement("img",{src:A.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:Q.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:U.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:K.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:X.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:P.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:Y.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:B.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:C.Z,alt:"futurefitness.svg",className:"logopng "}),a.createElement("img",{src:k.Z,alt:"portfoliofm.svg",className:"logopng "}),a.createElement("img",{src:O.Z,alt:"adaptinghomes.svg",className:"logopng "}),a.createElement("img",{src:R.Z,alt:"onlinefitnessfreedom.svg",className:"logopng "}),a.createElement("img",{src:I.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:M.Z,alt:"portfoliofm.svg",className:"addon "}),a.createElement("img",{src:z.Z,alt:"hydroinstal.svg",className:"addon "}),a.createElement("img",{src:j.Z,alt:"futurefitness.svg",className:"addon "}),a.createElement("img",{src:D.Z,alt:"intuneconsulting.svg",className:"addon "}),a.createElement("img",{src:G.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:V.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:T.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:L.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:_.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:F.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:H.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:J.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:$.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:ee.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:se.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:ne.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}))),a.createElement(o.k,{mt:"50px",w:"100%",display:["block","block","block","block","none"],justifyContent:"center",flexDirection:"column"},a.createElement(o.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:["center","center","center","center","flex-start"],alignSelf:["center","center","center","center","flex-start"]},a.createElement(s.xu,null,a.createElement(n.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",a.createElement("span",null,"LOVE")," TO ADD YOUR LOGO HERE.")),a.createElement(s.xu,{textAlign:["center","center","center","center","left"],py:"20px"},a.createElement(n.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the fantastic clients we have brought to the UK and International Markets."))),a.createElement(o.k,{alignItems:"center",className:"logoContainer",h:"200px",overflowX:"hidden"},a.createElement("img",{src:c.Z,alt:"chessmoveslogo",className:"logopng logos"}),a.createElement("img",{src:r.Z,alt:"oxtedfestival",className:"logopng logos"}),a.createElement("img",{src:g.Z,alt:"tailoredremovallogo",className:"logopng logos"}),a.createElement("img",{src:i.Z,alt:"surreycedarlogo",className:"logopng logos"}),a.createElement("img",{src:m.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),a.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng logos"}),a.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng logos"}),a.createElement("img",{src:d.Z,alt:"redsacks.svg",className:"logopng logos"}),a.createElement("img",{src:v.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),a.createElement("img",{src:E.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:f.Z,alt:"provest.svg",className:"logopng logos"}),a.createElement("img",{src:N.Z,alt:"secretcalm.svg",className:"logopng logos"}),a.createElement("img",{src:Z.Z,alt:"fitify.svg",className:"logopng logos"}),a.createElement("img",{src:x.Z,alt:"reignsupreme.svg",className:"logopng logos"}),a.createElement("img",{src:b.Z,alt:"rebecca.svg",className:"logopng logos"}),a.createElement("img",{src:h.Z,alt:"regency.svg",className:"logopng logos"}),a.createElement("img",{src:y.Z,alt:"keating.svg",className:"logopng logos"}),a.createElement("img",{src:w.Z,alt:"schtech.svg",className:"addon logos"}),a.createElement("img",{src:k.Z,alt:"portfoliofm.svg",className:"logopng logos"}),a.createElement("img",{src:C.Z,alt:"futurefitness.svg",className:"logopng logos"}),a.createElement("img",{src:S.Z,alt:"schtech.svg",className:"logopng logos"}),a.createElement("img",{src:O.Z,alt:"adaptinghomes.svg",className:"logopng logos"}),a.createElement("img",{src:R.Z,alt:"onlinefitnessfreedom.svg",className:"logopng logos"}),a.createElement("img",{src:I.Z,alt:"intuneconsulting.svg",className:"logopng logos"}),a.createElement("img",{src:M.Z,alt:"portfoliofm.svg",className:"addon logos"}),a.createElement("img",{src:z.Z,alt:"hydroinstal.svg",className:"addon logos"}),a.createElement("img",{src:j.Z,alt:"futurefitness.svg",className:"addon logos"}),a.createElement("img",{src:D.Z,alt:"intuneconsulting.svg",className:"addon logos"}),a.createElement("img",{src:T.Z,alt:"chessmoveslogo",className:"logopng logos"}),a.createElement("img",{src:L.Z,alt:"chessmoveslogo",className:"logopng logos"}),a.createElement("img",{src:_.Z,alt:"oxtedfestival",className:"logopng logos"}),a.createElement("img",{src:A.Z,alt:"tailoredremovallogo",className:"logopng logos"}),a.createElement("img",{src:W.Z,alt:"surreycedarlogo",className:"logopng logos"}),a.createElement("img",{src:U.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),a.createElement("img",{src:K.Z,alt:"simonKemp",className:"logopng logos"}),a.createElement("img",{src:X.Z,alt:"doggo.svg",className:"logopng logos"}),a.createElement("img",{src:P.Z,alt:"redsacks.svg",className:"logopng logos"}),a.createElement("img",{src:Y.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),a.createElement("img",{src:B.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:F.Z,alt:"chessmoveslogo",className:"logopng logos"}),a.createElement("img",{src:G.Z,alt:"oxtedfestival",className:"logopng logos"}),a.createElement("img",{src:V.Z,alt:"tailoredremovallogo",className:"logopng logos"}),a.createElement("img",{src:Q.Z,alt:"surreycedarlogo",className:"logopng logos"}),a.createElement("img",{src:q.Z,alt:"intuneconsulting.svg",className:"addon3 logos"}),a.createElement("img",{src:H.Z,alt:"simonKemp",className:"logopng logos"}),a.createElement("img",{src:J.Z,alt:"doggo.svg",className:"logopng logos"}),a.createElement("img",{src:$.Z,alt:"redsacks.svg",className:"logopng logos"}),a.createElement("img",{src:ee.Z,alt:"beautifulsouls.svg",className:"logopng logos"}),a.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:se.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"}),a.createElement("img",{src:ne.Z,alt:"cleaningspecialistproviders.svg",className:"logopng logos"})),a.createElement(o.k,{my:"50px",justifyContent:"center"},a.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},a.createElement("span",null,"SEE MORE OF OUR CLIENTS")))))}},6059:function(e,t,l){"use strict";l.d(t,{Z:function(){return re}});var a=l(7294),o=l(7361),s=l(7690),n=l(2200),c=l(120),r=l(4658),g=l(6473),i=l(6749),m=l(9897),u=l(1179),p=l(6040),d=l(6023),v=l(8070),E=l(6274),f=l(4776),N=l(2901),Z=l(1034),x=l(2711),b=l(7307),h=l(703),y=l(3258),w=l(15),k=l(3247),C=l(1931),S=l(8411),O=l(6596),R=l(9119),I=l(1899),M=l(4878),z=l(2626),j=l(4917),D=l(3781),T=l(5274),L=l(1223),_=l(9800),A=l(6215),W=l(2029),U=l(386),K=l(1251),X=l(9327),P=l(7494),Y=l(3548),B=l(3014),F=l(1378),G=l(7218),V=l(1993),Q=l(1314),q=l(3585),H=l(5879),J=l(6421),$=l(2175),ee=l(7212),te=l(6501),le=l(328),ae=l(8809),oe=l(2074),se=l(3853),ne=l(8279),ce=l(2010);function re(){return a.createElement(a.Fragment,null,a.createElement(o.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:"center",display:["none","none","none","none","flex"]},a.createElement(s.xu,null,a.createElement(n.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",a.createElement("span",null,"LOVE")," TO ",a.createElement("br",null),"ADD YOUR LOGO HERE.")),a.createElement(s.xu,{textAlign:"center",py:"20px"},a.createElement(n.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the ",a.createElement("br",null),"fantastic clients we have brought to the UK and International Markets."))),a.createElement(o.k,{flexDirection:"row",flexWrap:"wrap",w:"100%",className:"slideshow",overflowX:"hidden",pt:"20px",display:["none","none","none","none","flex"]},a.createElement(o.k,{alignItems:"center",flexWrap:"wrap",className:"logoContainer",overflowX:"hidden",justifyContent:"center"},a.createElement("img",{src:c.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:r.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:g.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:i.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:m.Z,alt:"intuneconsulting.svg",className:"addon3 "}),a.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:d.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:v.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:E.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:f.Z,alt:"provest.svg",className:"logopng "}),a.createElement("img",{src:N.Z,alt:"secretcalm.svg",className:"logopng "}),a.createElement("img",{src:Z.Z,alt:"fitify.svg",className:"logopng "}),a.createElement("img",{src:x.Z,alt:"reignsupreme.svg",className:"logopng "}),a.createElement("img",{src:b.Z,alt:"rebecca.svg",className:"logopng "}),a.createElement("img",{src:h.Z,alt:"regency.svg",className:"logopng "}),a.createElement("img",{src:y.Z,alt:"keating.svg",className:"logopng "}),a.createElement("img",{src:w.Z,alt:"schtech.svg",className:"addon "}),a.createElement("img",{src:k.Z,alt:"portfoliofm.svg",className:"logopng "}),a.createElement("img",{src:C.Z,alt:"futurefitness.svg",className:"logopng "}),a.createElement("img",{src:S.Z,alt:"schtech.svg",className:"logopng "}),a.createElement("img",{src:O.Z,alt:"adaptinghomes.svg",className:"logopng "}),a.createElement("img",{src:R.Z,alt:"onlinefitnessfreedom.svg",className:"logopng "}),a.createElement("img",{src:I.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:M.Z,alt:"portfoliofm.svg",className:"addon "}),a.createElement("img",{src:z.Z,alt:"hydroinstal.svg",className:"addon "}),a.createElement("img",{src:j.Z,alt:"futurefitness.svg",className:"addon "}),a.createElement("img",{src:D.Z,alt:"intuneconsulting.svg",className:"addon "}),a.createElement("img",{src:T.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:L.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:_.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:A.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:W.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:U.Z,alt:"intuneconsulting.svg",className:"addon3 "}),a.createElement("img",{src:K.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:X.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:P.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:Y.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:B.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:F.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:G.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:V.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:Q.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:q.Z,alt:"intuneconsulting.svg",className:"addon3 "}),a.createElement("img",{src:H.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:J.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:$.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:ee.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:se.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:ne.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "})),a.createElement(o.k,{justifyContent:"center",alignItems:"center",w:"100%",pt:"20px"},a.createElement(o.k,{w:"400px",justifyContent:"space-between",alignItems:"center"},a.createElement(s.xu,{alignSelf:"center"},a.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/case_studies")}},a.createElement("span",null,"SEE MORE OF OUR CLIENTS"))),a.createElement(s.xu,null,a.createElement("a",{className:"reqCB",href:"/contact"},"REQUEST A CALL BACK >"))))),a.createElement(o.k,{mt:"100px",w:"100%",display:["block","block","block","block","none"],justifyContent:"center",flexDirection:"column"},a.createElement(o.k,{w:"100%",alignItems:"center",justifyContent:"center"},a.createElement(n.x,{className:"addlogo",fontSize:"xl"},"WE WOULD ",a.createElement("span",null,"LOVE")," TO ADD YOUR LOGO HERE.")),a.createElement(o.k,{my:"20px",px:"50px",w:"100%",alignItems:"center",justifyContent:"center"},a.createElement(n.x,{fontSize:"md",textAlign:"center"},"We’ve worked with more than 100 companies since 2015 Check out some of the fantastic clients we have brought to the UK and International Markets.")),a.createElement(ce.Z,null)))}},5836:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return E}});var a=l(7294),o=l(7690),s=l(7361),n=l(1823),c=l(9555),r=l.n(c),g=l(2598),i=l(1907),m=l(8363),u=(l(6059),l(1501)),p=l(5106),d=l(2400),v=l(1006);function E(e){var t=e.location,l="undefined"!=typeof window,c=(0,a.useState)(),E=c[0],f=c[1],N=(0,a.useState)(),Z=(N[0],N[1]),x=function(){f(window.innerWidth),Z(window.innerHeight)},b=(0,a.useState)(!1),h=b[0],y=b[1],w=(0,a.useState)(0),k=w[0],C=w[1],S=d.map((function(e){return e}));return(0,a.useEffect)((function(){return l&&(x(),window.addEventListener("resize",x)),function(){return window.removeEventListener("resize",x)}}),[]),a.createElement(o.xu,{className:"main",overflowX:"hidden"},a.createElement(g.Z,null),E>1280?a.createElement(i.Z,{loc:t,page:"/case_studies"}):a.createElement(p.Z,null),a.createElement(o.xu,null,a.createElement(s.k,{justifyContent:"center",alignItems:"center",mt:"50px",flexDirection:"column"},a.createElement(o.xu,null,a.createElement("h1",{className:"title"},"Beemoved")),a.createElement(o.xu,{alignSelf:"center",py:"20px"},a.createElement(n.C,null,"Transport Company"))),a.createElement(o.xu,{w:"95%",className:"caseStudyBox",m:"auto",mt:"50px"},a.createElement(o.xu,{textAlign:"center",pt:"30px",className:"viewshead"},a.createElement("h3",null,"beemoved.com"),a.createElement("p",null,"TRUSTED Brighton REMOVALS & STORAGE COMPANY GET A FREE QUOTE FROM BEE MOVED")),a.createElement(s.k,null,a.createElement(s.k,{flexWrap:"wrap",w:"100%",justifyContent:"center"},d.map((function(e,t){return a.createElement(o.xu,{w:["90%","90%","25%","25%","25%"],m:"5px"},a.createElement("img",{key:t,src:e,alt:e,style:{borderRadius:"2px",cursor:"pointer"},onClick:function(){y(!0),C(t)}}))})))),a.createElement(s.k,{justifyContent:"center",alignItems:"center",my:"20px",flexWrap:"wrap"},a.createElement(o.xu,{mx:"10px",my:"5px"},a.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/contact")}},a.createElement("span",null,"BOOKING ENQUIRY"))),a.createElement(o.xu,{mx:"10px",my:"5px"},a.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/case_studies")}},a.createElement("span",null,"VIEW MORE CASE STUDIES"))))),a.createElement(v.Z,null),a.createElement(m.Z,{text:"Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"}),a.createElement(u.Z,null)),h?a.createElement(r(),{images:S,startIndex:k,onClose:function(){return y((function(e){return!e}))}}):null)}},2400:function(e){"use strict";e.exports=JSON.parse('["https://drive.google.com/uc?export=view&id=12stIgVSllAdJpT5gQFQopunbTu9dWdWX","https://drive.google.com/uc?export=view&id=1zSZdaR_dgCvXIcas5xX3zwvC6IardtQJ","https://drive.google.com/uc?export=view&id=1fTWWl32CCWFepvMDVvTHMFbvqOtne-q1","https://drive.google.com/uc?export=view&id=1O8cCWeSEs3ob_XfKF8KDUm_0kcBbK1Rq","https://drive.google.com/uc?export=view&id=1yP5rZxdpny-3X3ztzLDPB9_t_Dv2qNiP","https://drive.google.com/uc?export=view&id=11qBLKX3NwYARLQ5l0tWv_eO4_oRiJf8R"]')}}]);
//# sourceMappingURL=component---src-pages-case-studies-bee-moved-js-79f84e5a0d2686f155df.js.map