(self.webpackChunkvisualgroupdigital=self.webpackChunkvisualgroupdigital||[]).push([[1438],{1823:function(e,t,n){"use strict";n.d(t,{C:function(){return m}});var a=n(2543),l=n(3888),r=n(7487),o=n(9265),c=n(5587),s=n(4667),i=n(7294);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=(0,a.G)((function(e,t){var n=(0,l.m)("Badge",e),a=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}((0,r.Lr)(e),["className"]);return i.createElement(o.m$.span,g({ref:t,className:(0,c.cx)("chakra-badge",e.className)},a,{__css:g({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},n)}))}));s.Ts&&(m.displayName="Badge")},9555:function(e,t,n){e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=n(7294)},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(0),l=n.n(a);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var l=u(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=0,n=0;return e.touches&&e.touches.length?(t=e.touches[0].pageX,n=e.touches[0].pageY):(t=e.pageX,n=e.pageY),{x:t,y:n}}function f(e){return e.condition?l.a.createElement(l.a.Fragment,null,e.children):null}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(r,e);var t,n,a=i(r);function r(){var e,t,n,c,s;o(this,r);for(var i=arguments.length,g=new Array(i),u=0;u<i;u++)g[u]=arguments[u];return p(m(s=a.call.apply(a,[this].concat(g))),"initX",0),p(m(s),"initY",0),p(m(s),"lastX",0),p(m(s),"lastY",0),p(m(s),"_cont",l.a.createRef()),p(m(s),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(e=null===(t=s.props)||void 0===t?void 0:t.startIndex)&&void 0!==e?e:0,multi:!(null===(n=s.props)||void 0===n||null===(c=n.images)||void 0===c||!c.length)}),p(m(s),"createTransform",(function(e,t,n,a){return"translate3d(".concat(e,"px,").concat(t,"px,0px) scale(").concat(n,") rotate(").concat(a,"deg)")})),p(m(s),"stopSideEffect",(function(e){return e.stopPropagation()})),p(m(s),"getCurrentImage",(function(e,t){var n,a,l,r,o;return e.multi?null!==(a=null!==(l=null===(r=t.images[e.current])||void 0===r?void 0:r.url)&&void 0!==l?l:null===(o=t.images)||void 0===o?void 0:o[e.current])&&void 0!==a?a:"":null!==(n=t.image)&&void 0!==n?n:""})),p(m(s),"getCurrentTitle",(function(e,t){var n,a,l,r;return e.multi?null!==(a=null===(l=t.images)||void 0===l||null===(r=l[e.current])||void 0===r?void 0:r.title)&&void 0!==a?a:"":null!==(n=t.title)&&void 0!==n?n:""})),p(m(s),"resetZoom",(function(){return s.setState({x:0,y:0,zoom:1})})),p(m(s),"shockZoom",(function(e){var t,n,a=s.props,l=a.zoomStep,r=void 0===l?.3:l,o=a.allowZoom,c=void 0===o||o,i=a.doubleClickZoom,g=void 0===i?4:i;if(!c||!g)return!1;if(s.stopSideEffect(e),s.state.zoom>1)return s.resetZoom();var m=(r<1?Math.ceil(g/r):r)*r,u=d(e),p=null===(t=s._cont.current)||void 0===t||null===(n=t.getBoundingClientRect)||void 0===n?void 0:n.call(t),f=p.x+p.width/2,E=p.y+p.height/2,v=-1*(u.x-f)*m,M=-1*(u.y-E)*m;s.setState({x:v,y:M,zoom:m})})),p(m(s),"navigateImage",(function(e,t){s.stopSideEffect(t);var n=0;switch(e){case"next":n=s.state.current+1;break;case"prev":n=s.state.current-1}n>=s.props.images.length?n=0:n<0&&(n=s.props.images.length-1),s.setState({current:n,x:0,y:0,zoom:1,rotate:0,loading:!0})})),p(m(s),"startMove",(function(e){if(s.state.zoom<=1)return!1;s.setState({moving:!0});var t=d(e);s.initX=t.x-s.lastX,s.initY=t.y-s.lastY})),p(m(s),"duringMove",(function(e){if(!s.state.moving)return!1;var t=d(e);s.lastX=t.x-s.initX,s.lastY=t.y-s.initY,s.setState({x:t.x-s.initX,y:t.y-s.initY})})),p(m(s),"endMove",(function(e){return s.setState({moving:!1})})),p(m(s),"applyZoom",(function(e){var t=s.props.zoomStep,n=void 0===t?.3:t;switch(e){case"in":s.setState({zoom:s.state.zoom+n});break;case"out":var a=s.state.zoom-n;if(a<1)break;1===a?s.setState({x:0,y:0,zoom:1}):s.setState({zoom:a});break;case"reset":s.resetZoom()}})),p(m(s),"applyRotate",(function(e){switch(e){case"cw":s.setState({rotate:s.state.rotate+90});break;case"acw":s.setState({rotate:s.state.rotate-90})}})),p(m(s),"reset",(function(e){s.stopSideEffect(e),s.setState({x:0,y:0,zoom:1,rotate:0})})),p(m(s),"exit",(function(e){if("function"==typeof s.props.onClose)return s.props.onClose(e);console.error("No Exit function passed on prop: onClose. Clicking the close button will do nothing")})),p(m(s),"shouldShowReset",(function(){return s.state.x||s.state.y||1!==s.state.zoom||0!==s.state.rotate})),p(m(s),"canvasClick",(function(e){var t=s.props.clickOutsideToExit;if((void 0===t||t)&&s.state.zoom<=1)return s.exit(e)})),p(m(s),"keyboardNavigation",(function(e){var t=s.props,n=t.allowZoom,a=void 0===n||n,l=t.allowReset,r=void 0===l||l,o=s.state,c=o.multi,i=o.x,g=o.y,m=o.zoom;switch(e.key){case"ArrowLeft":c&&1===m?s.navigateImage("prev",e):m>1&&s.setState({x:i-20});break;case"ArrowRight":c&&1===m?s.navigateImage("next",e):m>1&&s.setState({x:i+20});break;case"ArrowUp":m>1&&s.setState({y:g+20});break;case"ArrowDown":m>1&&s.setState({y:g-20});break;case"+":a&&s.applyZoom("in");break;case"-":a&&s.applyZoom("out");break;case"Escape":r&&s.shouldShowReset()?s.reset(e):s.exit(e)}})),s}return t=r,(n=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var e=this.props.keyboardInteraction;(void 0===e||e)&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var e=this,t=this.getCurrentImage(this.state,this.props),n=this.getCurrentTitle(this.state,this.props);if(!t)return console.warn("Not showing lightbox because no image(s) was supplied"),null;var a=this.props,r=a.allowZoom,o=void 0===r||r,c=a.allowRotate,s=void 0===c||c,i=a.buttonAlign,g=void 0===i?"flex-end":i,m=a.showTitle,u=void 0===m||m,p=a.allowReset,d=void 0===p||p,E=this.state,v=E.x,M=E.y,N=E.zoom,y=E.rotate,x=E.multi,h=E.loading,b=E.moving,I=d&&this.shouldShowReset();return l.a.createElement("div",{className:"lb-container"},l.a.createElement("div",{className:"lb-header",style:{justifyContent:g}},l.a.createElement(f,{condition:u&&n},l.a.createElement("div",{className:"lb-title",style:{display:"center"===g?"none":"flex",order:"flex-start"===g?"2":"unset"}},l.a.createElement("span",{title:n,style:{textAlign:"flex-start"===g?"right":"left"}},n))),l.a.createElement(f,{condition:"center"===g||I},l.a.createElement("div",{title:"Reset",style:{order:"flex-start"===g?"1":"unset"},className:"lb-button lb-icon-reset lb-hide-mobile reload ".concat(I?"":"lb-disabled"),onClick:this.reset})),l.a.createElement(f,{condition:x},l.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(t){return e.navigateImage("prev",t)}}),l.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(t){return e.navigateImage("next",t)}})),l.a.createElement(f,{condition:o},l.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return e.applyZoom("in")}}),l.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout ".concat(N<=1?"lb-disabled":""),onClick:function(){return e.applyZoom("out")}})),l.a.createElement(f,{condition:s},l.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return e.applyRotate("acw")}}),l.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return e.applyRotate("cw")}})),l.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===g?"-1":"unset"},onClick:function(t){return e.exit(t)}})),l.a.createElement("div",{className:"lb-canvas".concat(h?" lb-loading":""),ref:this._cont,onClick:function(t){return e.canvasClick(t)}},l.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(v,M,N,y),cursor:N>1?"grab":"unset",transition:b?"none":"all 0.1s"},onMouseDown:function(t){return e.startMove(t)},onTouchStart:function(t){return e.startMove(t)},onMouseMove:function(t){return e.duringMove(t)},onTouchMove:function(t){return e.duringMove(t)},onMouseUp:function(t){return e.endMove(t)},onMouseLeave:function(t){return e.endMove(t)},onTouchEnd:function(t){return e.endMove(t)},onClick:function(t){return e.stopSideEffect(t)},onDoubleClick:function(t){return e.shockZoom(t)},onLoad:function(t){return e.setState({loading:!1})},className:"lb-img".concat(h?" lb-loading":""),title:n,src:t,alt:n}),l.a.createElement("div",{className:"mobile-controls lb-show-mobile"},x?l.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(t){return e.navigateImage("prev",t)}}):null,I?l.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,x?l.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(t){return e.navigateImage("next",t)}}):null)))}}])&&c(t.prototype,n),r}(l.a.Component)}])},8178:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a=n(7294),l=n(7361),r=n(7690),o=n.p+"static/10-ec59422a6f81eb48167dc126274a6603.jpg",c=n.p+"static/flyer-c1f636b2051b498844d0a66738278ca5.jpg",s=n(5329),i=n(5916),g=n(2961),m=n(2644),u=n(7005),p=n(92),d=n.p+"static/ecomhof-90bbaf64ccf0bcb4ca49bbc0d670d4d4.jpg",f=n(2884);function E(e){var t=e.dir,n=(0,a.useRef)();return(0,a.useEffect)((function(){var e=!0;return e&&("right"===t&&f.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5}),"left"===t&&f.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5})),function(){e=!1}}),[]),a.createElement(l.k,{justifyContent:"center",w:"100%",ref:n,flexWrap:"wrap"},a.createElement(r.xu,{className:"sliderBox"},a.createElement("h3",null,"Digital marketing"),a.createElement(r.xu,null,a.createElement("a",{href:"/digital_marketing"},a.createElement("img",{src:u.Z,alt:"fbaccomplishment",style:{cursor:"pointer"}})))),a.createElement(r.xu,{className:"sliderBox"},a.createElement("h3",null,"E-commerce"),a.createElement(r.xu,null,a.createElement("a",{href:"/ecommerce_marketing"},a.createElement("img",{src:d,alt:"fbaccomplishment",style:{cursor:"pointer"}})))),a.createElement(r.xu,{className:"sliderBox"},a.createElement("h3",null,"Facebook advertising"),a.createElement(r.xu,null,a.createElement("a",{href:"/facebook_advertising"},a.createElement("img",{src:m.Z,alt:"fbaccomplishment",style:{cursor:"pointer"}})))))}function v(e){var t=e.dir,n=(0,a.useRef)();return(0,a.useEffect)((function(){var e=!0;return e&&("right"===t&&f.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5}),"left"===t&&f.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5})),function(){e=!1}}),[]),a.createElement(l.k,{justifyContent:"center",w:"100%",ref:n,flexWrap:"wrap"},a.createElement(r.xu,{className:"sliderBox"},a.createElement("h3",null,"Google advertising"),a.createElement(r.xu,null,a.createElement("a",{href:"/google_advertising"},a.createElement("img",{src:g.Z,alt:"accompgoogle",style:{cursor:"pointer"}})))),a.createElement(r.xu,{className:"sliderBox"},a.createElement("h3",null,"Social Media Growth"),a.createElement(r.xu,null,a.createElement("a",{href:"/social_media_growth"},a.createElement("img",{src:p.Z,alt:"socmend",style:{cursor:"pointer"}})))),a.createElement(r.xu,{className:"sliderBox"},a.createElement("h3",null,"Search Engine Optimisation"),a.createElement(r.xu,null,a.createElement("a",{href:"/search_engine_optimisation"},a.createElement("img",{src:i.Z,alt:"seoaccomplishment",style:{cursor:"pointer"}})))))}function M(e){var t=e.dir,n=(0,a.useRef)();return(0,a.useEffect)((function(){var e=!0;return e&&("right"===t&&f.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5}),"left"===t&&f.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5})),function(){e=!1}}),[]),a.createElement(l.k,{justifyContent:"center",w:"100%",flexWrap:"wrap",ref:n},a.createElement(r.xu,{className:"sliderBox"},a.createElement("h3",null,"Graphic Design"),a.createElement(r.xu,null,a.createElement("a",{href:"/graphic_design"},a.createElement("img",{src:c,alt:"seoaccomplishment",style:{cursor:"pointer"}})))),a.createElement(r.xu,{className:"sliderBox"},a.createElement("h3",null,"Web Development"),a.createElement(r.xu,null,a.createElement("a",{href:"/web_development"},a.createElement("img",{src:s.Z,alt:"seoaccomplishment",style:{cursor:"pointer"}})))),a.createElement(r.xu,{className:"sliderBox"},a.createElement("h3",null,"Digital Branding"),a.createElement(r.xu,null,a.createElement("a",{href:"/digital_branding"},a.createElement("img",{src:o,alt:"seoaccomplishment",style:{cursor:"pointer"}})))))}var N={slider:0,dir:"right"};function y(e,t){switch(t.dir){case"right":return 2===e.slider?{slider:0,dir:"right"}:{slider:e.slider+1,dir:"right"};case"left":return 0===e.slider?{slider:2,dir:"left"}:{slider:e.slider-1,dir:"left"};default:return{slider:0,dir:"left"}}}function x(){var e=(0,a.useReducer)(y,N),t=e[0],n=e[1];(0,a.useEffect)((function(){f.p8.timeline({scrollTrigger:{trigger:".accompvgd",start:"top center"}}).fromTo(".accompvgd",{y:-300,opacity:0},{duration:.25,y:0,opacity:1}),setInterval((function(){n({dir:"right"})}),2e3)}),[]);var o=function(){switch(t.slider){case 0:return a.createElement(E,{dir:t.dir});case 1:return a.createElement(v,{dir:t.dir});case 2:return a.createElement(M,{dir:t.dir})}};return a.createElement(r.xu,{className:"accompvgd"},a.createElement(r.xu,{pl:"10%",pt:"105px"},a.createElement(r.xu,{className:"vgd"}),a.createElement(l.k,{flexDirection:"row",flexWrap:"noWrap",w:"100%",className:"whatwedo"},a.createElement(r.xu,null,a.createElement("h3",null,"OUR WORK"))),a.createElement(r.xu,{pt:"26px",w:["100%","100%","50%","50%","50%"],px:"10px"},a.createElement("p",{className:"subwhatwedo"},"At Visual Group Digital, we specialise in helping businesses introduce their brand, connect with their target audience, and develop an effective marketing strategy.")),a.createElement(l.k,{textAlign:"right",justifyContent:"flex-end",px:"50px",py:"20px"},a.createElement("button",{className:"leftArrow",onClick:function(){return n({dir:"left"})}},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAxNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjQwNDIgMjQuMjA4OEMxMi4xODQ1IDI0LjIwOTEgMTEuOTY2OCAyNC4xNjU5IDExLjc2MzggMjQuMDgxOUMxMS41NjA4IDIzLjk5NzggMTEuMzc2NCAyMy44NzQ0IDExLjIyMTIgMjMuNzE4OEwxLjE4NjIyIDEzLjY4MzhDMS4wMzA5IDEzLjUyODUgMC45MDc2ODYgMTMuMzQ0MiAwLjgyMzYyMiAxMy4xNDEzQzAuNzM5NTU3IDEyLjkzODQgMC42OTYyODkgMTIuNzIwOSAwLjY5NjI4OSAxMi41MDEzQzAuNjk2Mjg5IDEyLjI4MTcgMC43Mzk1NTcgMTIuMDY0MiAwLjgyMzYyMiAxMS44NjEzQzAuOTA3Njg2IDExLjY1ODQgMS4wMzA5IDExLjQ3NDEgMS4xODYyMiAxMS4zMTg4TDExLjIyMTIgMS4yODM4MUMxMS4zNzQ4IDEuMTIxMTEgMTEuNTU5NSAwLjk5MDg2NyAxMS43NjQzIDAuOTAwOEMxMS45NjkxIDAuODEwNzMzIDEyLjE5IDAuNzYyNjY5IDEyLjQxMzcgMC43NTk0NUMxMi42Mzc0IDAuNzU2MjMyIDEyLjg1OTUgMC43OTc5MjUgMTMuMDY2OSAwLjg4MjA2MkMxMy4yNzQyIDAuOTY2MiAxMy40NjI1IDEuMDkxMDcgMTMuNjIwNyAxLjI0OTI5QzEzLjc3OSAxLjQwNzUxIDEzLjkwMzggMS41OTU4NSAxMy45ODggMS44MDMxOEMxNC4wNzIxIDIuMDEwNTEgMTQuMTEzOCAyLjIzMjYyIDE0LjExMDYgMi40NTYzNUMxNC4xMDc0IDIuNjgwMDggMTQuMDU5MyAyLjkwMDg5IDEzLjk2OTIgMy4xMDU3MUMxMy44NzkyIDMuMzEwNTQgMTMuNzQ4OSAzLjQ5NTIxIDEzLjU4NjIgMy42NDg4MUw0LjczNDIyIDEyLjUwMDhMMTMuNTg2MiAyMS4zNTI4QzEzLjgyMDMgMjEuNTg2NyAxMy45Nzk4IDIxLjg4NDcgMTQuMDQ0NSAyMi4yMDkyQzE0LjEwOTEgMjIuNTMzOCAxNC4wNzYgMjIuODcwMiAxMy45NDkzIDIzLjE3NTlDMTMuODIyNiAyMy40ODE2IDEzLjYwODEgMjMuNzQyOCAxMy4zMzI5IDIzLjkyNjVDMTMuMDU3NyAyNC4xMTAyIDEyLjczNDEgMjQuMjA4MSAxMi40MDMyIDI0LjIwNzhMMTIuNDA0MiAyNC4yMDg4WiIgZmlsbD0iIzBBMkY1MyIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+Cjwvc3ZnPgo=",alt:"left.svg"})),a.createElement("button",{className:"rightArrow",onClick:function(){return n({dir:"right"})}},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAxNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNjQ0MjMgMjMuNzE4MUwxMy43MjAyIDEzLjY0MjFDMTMuODc2MiAxMy40ODYyIDE0IDEzLjMwMTEgMTQuMDg0NCAxMy4wOTczQzE0LjE2ODggMTIuODkzNiAxNC4yMTIyIDEyLjY3NTIgMTQuMjEyMiAxMi40NTQ2QzE0LjIxMjIgMTIuMjM0MSAxNC4xNjg4IDEyLjAxNTcgMTQuMDg0NCAxMS44MTE5QzE0IDExLjYwODIgMTMuODc2MiAxMS40MjMgMTMuNzIwMiAxMS4yNjcxTDMuNjQ0MjMgMS4xOTAxMkMzLjMyOTI4IDAuODc1MTcyIDIuOTAyMTIgMC42OTgyNDIgMi40NTY3MyAwLjY5ODI0MkMyLjAxMTMzIDAuNjk4MjQyIDEuNTg0MTcgMC44NzUxNzIgMS4yNjkyMyAxLjE5MDEyQzAuOTU0MjgxIDEuNTA1MDYgMC43NzczNDQgMS45MzIyMiAwLjc3NzM0NCAyLjM3NzYyQzAuNzc3MzQ0IDIuODIzMDIgMC45NTQyODEgMy4yNTAxNyAxLjI2OTIzIDMuNTY1MTJMMTAuMTU4MiAxMi40NTQxTDEuMjY5MjMgMjEuMzQzMUMwLjk1NDI4MSAyMS42NTgxIDAuNzc3MzQ0IDIyLjA4NTIgMC43NzczNDQgMjIuNTMwNkMwLjc3NzM0NCAyMi45NzYgMC45NTQyODEgMjMuNDAzMiAxLjI2OTIzIDIzLjcxODFDMS41ODQxNyAyNC4wMzMxIDIuMDExMzMgMjQuMjEgMi40NTY3MyAyNC4yMUMyLjkwMjEyIDI0LjIxIDMuMzI5MjggMjQuMDMzMSAzLjY0NDIzIDIzLjcxODFaIiBmaWxsPSIjMEEyRjUzIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4KPC9zdmc+Cg==",alt:"right.svg"})))),a.createElement(r.xu,{pt:"55px",w:"100%",overflowX:"hidden"},a.createElement(o,null)))}},1006:function(e,t,n){"use strict";n.d(t,{Z:function(){return se}});var a=n(7294),l=n(7361),r=n(7690),o=n(2200),c=n(120),s=n(4658),i=n(6473),g=n(6749),m=n(9897),u=n(1179),p=n(6040),d=n(6023),f=n(8070),E=n(6274),v=n(4776),M=n(2901),N=n(1034),y=n(2711),x=n(7307),h=n(703),b=n(3258),I=n(15),j=n(3247),D=n(1931),Z=n(8411),w=n(6596),z=n(9119),k=n(1899),T=n(4878),A=n(2626),O=n(4917),S=n(3781),C=n(5274),L=n(1223),Q=n(9800),Y=n(6215),U=n(2029),R=n(386),W=n(1251),_=n(9327),B=n(7494),P=n(3548),X=n(3014),K=n(1378),G=n(7218),H=n(1993),J=n(1314),V=n(3585),F=n(5879),q=n(6421),$=n(2175),ee=n(7212),te=n(6501),ne=n(328),ae=n(8809),le=n(2074),re=n(3853),oe=n(8279),ce=n(2884);function se(){return(0,a.useEffect)((function(){ce.p8.set(".logos",{x:function(e){return 198*e}}),ce.p8.to(".logos",{duration:50,ease:"none",x:"+=10300",modifiers:{x:ce.p8.utils.unitize((function(e){return parseFloat(e)%"10300"}))},repeat:-1})})),a.createElement(a.Fragment,null,a.createElement(l.k,{flexDirection:"row",flexWrap:"wrap",w:"100%",className:"slideshow",overflowX:"hidden",pt:"20px",display:["none","none","none","none","flex"]},a.createElement(l.k,{mt:"100px",mx:"20px",px:"9%",flexDirection:"column",alignItems:["center","center","center","center","flex-start"],alignSelf:["center","center","center","center","flex-start"]},a.createElement(r.xu,null,a.createElement(o.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",a.createElement("span",null,"LOVE")," TO ",a.createElement("br",null),"ADD YOUR LOGO HERE.")),a.createElement(r.xu,{textAlign:["center","center","center","center","left"],py:"20px"},a.createElement(o.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the ",a.createElement("br",null),"fantastic clients we have brought to the UK and International Markets."))),a.createElement(l.k,{alignItems:"center",flexWrap:"wrap",className:"logoContainer",overflowX:"hidden",justifyContent:"center"},a.createElement("img",{src:c.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:s.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:i.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:g.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:m.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:d.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:f.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:E.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:v.Z,alt:"provest.svg",className:"logopng "}),a.createElement("img",{src:M.Z,alt:"secretcalm.svg",className:"logopng "}),a.createElement("img",{src:N.Z,alt:"fitify.svg",className:"logopng "}),a.createElement("img",{src:y.Z,alt:"reignsupreme.svg",className:"logopng "}),a.createElement("img",{src:x.Z,alt:"rebecca.svg",className:"logopng "}),a.createElement("img",{src:h.Z,alt:"regency.svg",className:"logopng "}),a.createElement("img",{src:b.Z,alt:"keating.svg",className:"logopng "}),a.createElement("img",{src:ne.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:I.Z,alt:"schtech.svg",className:"addon "}),a.createElement("img",{src:U.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:V.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:Z.Z,alt:"schtech.svg",className:"logopng "}),a.createElement("img",{src:Y.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:J.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:R.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:W.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:_.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:B.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:P.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:X.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:D.Z,alt:"futurefitness.svg",className:"logopng "}),a.createElement("img",{src:j.Z,alt:"portfoliofm.svg",className:"logopng "}),a.createElement("img",{src:w.Z,alt:"adaptinghomes.svg",className:"logopng "}),a.createElement("img",{src:z.Z,alt:"onlinefitnessfreedom.svg",className:"logopng "}),a.createElement("img",{src:k.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:T.Z,alt:"portfoliofm.svg",className:"addon "}),a.createElement("img",{src:A.Z,alt:"hydroinstal.svg",className:"addon "}),a.createElement("img",{src:O.Z,alt:"futurefitness.svg",className:"addon "}),a.createElement("img",{src:S.Z,alt:"intuneconsulting.svg",className:"addon "}),a.createElement("img",{src:G.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:H.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:C.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:L.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:Q.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:K.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:F.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:q.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:$.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:ee.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:re.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}))),a.createElement(l.k,{mt:"50px",w:"100%",display:["block","block","block","block","none"],justifyContent:"center",flexDirection:"column"},a.createElement(l.k,{mt:"100px",mx:"20px",px:"5%",flexDirection:"column",alignItems:["center","center","center","center","flex-start"],alignSelf:["center","center","center","center","flex-start"]},a.createElement(r.xu,null,a.createElement(o.x,{className:"addlogo",fontSize:"3xl"},"WE WOULD ",a.createElement("span",null,"LOVE")," TO ADD YOUR LOGO HERE.")),a.createElement(r.xu,{textAlign:["center","center","center","center","left"],py:"20px"},a.createElement(o.x,{className:"addlogop",fontSize:"lg"},"We’ve worked with more than 100 companies since 2015 Check out some of the fantastic clients we have brought to the UK and International Markets."))),a.createElement(l.k,{alignItems:"center",flexWrap:"wrap",className:"logoContainer",overflowX:"hidden",justifyContent:"center"},a.createElement("img",{src:c.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:s.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:i.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:g.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:m.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:u.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:p.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:d.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:f.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:E.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:v.Z,alt:"provest.svg",className:"logopng "}),a.createElement("img",{src:M.Z,alt:"secretcalm.svg",className:"logopng "}),a.createElement("img",{src:N.Z,alt:"fitify.svg",className:"logopng "}),a.createElement("img",{src:y.Z,alt:"reignsupreme.svg",className:"logopng "}),a.createElement("img",{src:x.Z,alt:"rebecca.svg",className:"logopng "}),a.createElement("img",{src:h.Z,alt:"regency.svg",className:"logopng "}),a.createElement("img",{src:b.Z,alt:"keating.svg",className:"logopng "}),a.createElement("img",{src:ne.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:I.Z,alt:"schtech.svg",className:"addon "}),a.createElement("img",{src:U.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:V.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:Z.Z,alt:"schtech.svg",className:"logopng "}),a.createElement("img",{src:Y.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:J.Z,alt:"surreycedarlogo",className:"logopng "}),a.createElement("img",{src:R.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:W.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:_.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:B.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:P.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:X.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:D.Z,alt:"futurefitness.svg",className:"logopng "}),a.createElement("img",{src:j.Z,alt:"portfoliofm.svg",className:"logopng "}),a.createElement("img",{src:w.Z,alt:"adaptinghomes.svg",className:"logopng "}),a.createElement("img",{src:z.Z,alt:"onlinefitnessfreedom.svg",className:"logopng "}),a.createElement("img",{src:k.Z,alt:"intuneconsulting.svg",className:"logopng "}),a.createElement("img",{src:T.Z,alt:"portfoliofm.svg",className:"addon "}),a.createElement("img",{src:A.Z,alt:"hydroinstal.svg",className:"addon "}),a.createElement("img",{src:O.Z,alt:"futurefitness.svg",className:"addon "}),a.createElement("img",{src:S.Z,alt:"intuneconsulting.svg",className:"addon "}),a.createElement("img",{src:G.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:H.Z,alt:"tailoredremovallogo",className:"logopng "}),a.createElement("img",{src:C.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:L.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:Q.Z,alt:"oxtedfestival",className:"logopng "}),a.createElement("img",{src:K.Z,alt:"chessmoveslogo",className:"logopng "}),a.createElement("img",{src:F.Z,alt:"simonKemp",className:"logopng "}),a.createElement("img",{src:q.Z,alt:"doggo.svg",className:"logopng "}),a.createElement("img",{src:$.Z,alt:"redsacks.svg",className:"logopng "}),a.createElement("img",{src:ee.Z,alt:"beautifulsouls.svg",className:"logopng "}),a.createElement("img",{src:te.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:ae.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:le.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:re.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "}),a.createElement("img",{src:oe.Z,alt:"cleaningspecialistproviders.svg",className:"logopng "})),a.createElement(l.k,{my:"50px",justifyContent:"center"},a.createElement("button",{className:"seeMore button--aylen",onClick:function(){window.location.assign("/our_portfolio")}},a.createElement("span",null,"SEE MORE OF OUR CLIENTS")))))}},6738:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(7294),l=n(7690),r=n(7361),o=n(1823),c=n(9555),s=n.n(c),i=n(2598),g=n(1907),m=n(1327),u=(n(6059),n(6346)),p=n(9672),d=n(8178),f=n(1006),E=n(4149);function v(e){var t=e.location,n="undefined"!=typeof window,c=(0,a.useState)(),v=c[0],M=c[1],N=(0,a.useState)(),y=(N[0],N[1]),x=function(){M(window.innerWidth),y(window.innerHeight)},h=(0,a.useState)(!1),b=h[0],I=h[1],j=(0,a.useState)(0),D=j[0],Z=j[1],w=E.map((function(e){return e}));return(0,a.useEffect)((function(){return n&&(x(),window.addEventListener("resize",x)),function(){return window.removeEventListener("resize",x)}}),[]),a.createElement(l.xu,{className:"main",overflowX:"hidden"},a.createElement(i.Z,null),v>1280?a.createElement(g.Z,{loc:t,page:"/case_studies"}):a.createElement(p.Z,null),a.createElement(l.xu,null,a.createElement(r.k,{justifyContent:"center",alignItems:"center",mt:"80px",flexDirection:"column"},a.createElement(l.xu,{textAlign:"center"},a.createElement("h1",{className:"title"},"Expert Apps Online")),a.createElement(l.xu,{alignSelf:"center",py:"20px"},a.createElement(o.C,null,"Encrypted notes Company"))),a.createElement(l.xu,{w:"95%",className:"caseStudyBox",m:"auto",mt:"50px"},a.createElement(l.xu,{textAlign:"center",pt:"30px",className:"viewshead"},a.createElement("h3",null,"expertapps.online"),a.createElement("p",null,"App Development Platform for Business")),a.createElement(r.k,null,a.createElement(r.k,{flexWrap:"wrap",w:"100%",justifyContent:"center"},E.map((function(e,t){return a.createElement(l.xu,{w:["90%","90%","50%","30%","25%"],m:"5px"},a.createElement("img",{key:t,src:e,alt:e,style:{borderRadius:"2px",cursor:"pointer"},onClick:function(){I(!0),Z(t)}}))})))),a.createElement(r.k,{justifyContent:"center",alignItems:"center",my:"20px",flexWrap:"wrap"},a.createElement(l.xu,{mx:"10px",my:"5px"},a.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/contact")}},a.createElement("span",null,"BOOKING ENQUIRY"))),a.createElement(l.xu,{mx:"10px",my:"5px"},a.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/case_studies")}},a.createElement("span",null,"VIEW MORE CASE STUDIES"))))),a.createElement(d.Z,null),a.createElement(f.Z,null),a.createElement(m.Z,{text:"Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"}),a.createElement(u.Z,null)),b?a.createElement(s(),{images:w,startIndex:D,onClose:function(){return I((function(e){return!e}))}}):null)}},2644:function(e,t,n){"use strict";t.Z=n.p+"static/fbadss-510cf46e56d378d627386792b8a247f5.jpg"},2961:function(e,t,n){"use strict";t.Z=n.p+"static/googleads-008601dd6111191d274796dff27f117c.jpg"},92:function(e,t,n){"use strict";t.Z=n.p+"static/insta-8416e0cce5c9a28c0feed31dd55fd73f.jpg"},5916:function(e,t,n){"use strict";t.Z=n.p+"static/seo8-b5e6bf8d8f9b5e77c65c9066a7bfc446.jpg"},7005:function(e,t,n){"use strict";t.Z=n.p+"static/social_media_2-387e7909f53307fc1c002273b00d14bf.jpg"},5329:function(e,t,n){"use strict";t.Z=n.p+"static/webdev-16dc8768d5f98b2a6a775cf9530a8a80.jpg"},4149:function(e){"use strict";e.exports=JSON.parse('["https://drive.google.com/uc?id=1NSSD5UfLlIuZeZjYWWW0JccyUBaHENlM","https://drive.google.com/uc?id=1nBW095e9xW7v2iKicEAsMeRjzXJVvK-T","https://drive.google.com/uc?id=1ZjYsw2Ug78c2twJCwA3IxT6BSnvKI5Qh","https://drive.google.com/uc?id=11BRHnbltIXtlOO8IJhyj2wqwA1fVxwuX","https://drive.google.com/uc?id=1X96PG-bY2xBrzIFJ51MOOCEobrDfYJPD","https://drive.google.com/uc?id=14cTmwfRqjimBdXqiXUH7P95mEjMz_gCC","https://drive.google.com/uc?id=1QzVb6vjc9xGyYkeUQfbiNzw6p0UXzYGj","https://drive.google.com/uc?id=1GkgAzHAV0uViDM6zAfDxI7uoDSp1HuQY","https://drive.google.com/uc?id=1W5WioL1vL0WsKtiSyUU7hT9nXs56wnwL","https://drive.google.com/uc?id=1_YcN0etbfK9pN-B5eCrXccr00sKjtF_D","https://drive.google.com/uc?id=13jIipq3d85SbRJ3bIXVZ9MKhwDQIT0_q","https://drive.google.com/uc?id=1mR7GVaouKiDOTbKIvg-ldcbbLNIKh1ds","https://drive.google.com/uc?id=18t6k0oQvctiXu4xqh9OcrxhXnhspdeKB","https://drive.google.com/uc?id=1AqynZjSiT3UCgeAQeJ_2UoBnqIzNvD2N","https://drive.google.com/uc?id=1qye6VskkbY-UZvCKVfJQem9rkOu7516P","https://drive.google.com/uc?id=1Wrm6mUxKM-VwSb2JCulk1NzhyzzQfxL6","https://drive.google.com/uc?id=13zIBsb8iAyIdGIQx7q76lPy_ldcaQYgQ","https://drive.google.com/uc?id=1gN3N_9X2Zu6ZE7evmlV5iWXOxvyFy-ob","https://drive.google.com/uc?id=1WE63xBWYAZwznJKrn5WoZkIdVX-BGYYA","https://drive.google.com/uc?id=1WE6ShrZ1DYPmpPNmAQZH4RprtTeEc2Ge","https://drive.google.com/uc?id=1aaSS3z4PDlBYrp-JM26HcSlDhBz4o1sF","https://drive.google.com/uc?id=1ngtSf_I3jETzOSxdm2JLg3Nv_Gr6obc3"]')}}]);
//# sourceMappingURL=component---src-pages-case-studies-expert-apps-js-22fd9b568628b6f719e1.js.map