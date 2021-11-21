"use strict";(self.webpackChunkvisualgroupdigital=self.webpackChunkvisualgroupdigital||[]).push([[1147],{1823:function(e,t,n){n.d(t,{C:function(){return s}});var r=n(2543),a=n(3888),c=n(7487),i=n(9265),l=n(5587),M=n(4667),u=n(7294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=(0,r.G)((function(e,t){var n=(0,a.m)("Badge",e),r=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}((0,c.Lr)(e),["className"]);return u.createElement(i.m$.span,o({ref:t,className:(0,l.cx)("chakra-badge",e.className)},r,{__css:o({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},n)}))}));M.Ts&&(s.displayName="Badge")},8178:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(7294),a=n(7361),c=n(7690),i=n.p+"static/10-ec59422a6f81eb48167dc126274a6603.jpg",l=n.p+"static/flyer-c1f636b2051b498844d0a66738278ca5.jpg",M=n(5329),u=n(5916),o=n(2961),s=n(2644),m=n(7005),g=n(92),E=n.p+"static/ecomhof-90bbaf64ccf0bcb4ca49bbc0d670d4d4.jpg",x=n(2884);function y(e){var t=e.dir,n=(0,r.useRef)();return(0,r.useEffect)((function(){var e=!0;return e&&("right"===t&&x.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5}),"left"===t&&x.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5})),function(){e=!1}}),[]),r.createElement(a.k,{justifyContent:"center",w:"100%",ref:n,flexWrap:"wrap"},r.createElement(c.xu,{className:"sliderBox"},r.createElement("h3",null,"Digital marketing"),r.createElement(c.xu,null,r.createElement("a",{href:"/digital_marketing"},r.createElement("img",{src:m.Z,alt:"fbaccomplishment",style:{cursor:"pointer"}})))),r.createElement(c.xu,{className:"sliderBox"},r.createElement("h3",null,"E-commerce"),r.createElement(c.xu,null,r.createElement("a",{href:"/ecommerce_marketing"},r.createElement("img",{src:E,alt:"fbaccomplishment",style:{cursor:"pointer"}})))),r.createElement(c.xu,{className:"sliderBox"},r.createElement("h3",null,"Facebook advertising"),r.createElement(c.xu,null,r.createElement("a",{href:"/facebook_advertising"},r.createElement("img",{src:s.Z,alt:"fbaccomplishment",style:{cursor:"pointer"}})))))}function I(e){var t=e.dir,n=(0,r.useRef)();return(0,r.useEffect)((function(){var e=!0;return e&&("right"===t&&x.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5}),"left"===t&&x.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5})),function(){e=!1}}),[]),r.createElement(a.k,{justifyContent:"center",w:"100%",ref:n,flexWrap:"wrap"},r.createElement(c.xu,{className:"sliderBox"},r.createElement("h3",null,"Google advertising"),r.createElement(c.xu,null,r.createElement("a",{href:"/google_advertising"},r.createElement("img",{src:o.Z,alt:"accompgoogle",style:{cursor:"pointer"}})))),r.createElement(c.xu,{className:"sliderBox"},r.createElement("h3",null,"Social Media Growth"),r.createElement(c.xu,null,r.createElement("a",{href:"/social_media_growth"},r.createElement("img",{src:g.Z,alt:"socmend",style:{cursor:"pointer"}})))),r.createElement(c.xu,{className:"sliderBox"},r.createElement("h3",null,"Search Engine Optimisation"),r.createElement(c.xu,null,r.createElement("a",{href:"/search_engine_optimisation"},r.createElement("img",{src:u.Z,alt:"seoaccomplishment",style:{cursor:"pointer"}})))))}function d(e){var t=e.dir,n=(0,r.useRef)();return(0,r.useEffect)((function(){var e=!0;return e&&("right"===t&&x.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5}),"left"===t&&x.p8.fromTo(n.current,{opacity:0},{opacity:1,duration:1.5})),function(){e=!1}}),[]),r.createElement(a.k,{justifyContent:"center",w:"100%",flexWrap:"wrap",ref:n},r.createElement(c.xu,{className:"sliderBox"},r.createElement("h3",null,"Graphic Design"),r.createElement(c.xu,null,r.createElement("a",{href:"/graphic_design"},r.createElement("img",{src:l,alt:"seoaccomplishment",style:{cursor:"pointer"}})))),r.createElement(c.xu,{className:"sliderBox"},r.createElement("h3",null,"Web Development"),r.createElement(c.xu,null,r.createElement("a",{href:"/web_development"},r.createElement("img",{src:M.Z,alt:"seoaccomplishment",style:{cursor:"pointer"}})))),r.createElement(c.xu,{className:"sliderBox"},r.createElement("h3",null,"Digital Branding"),r.createElement(c.xu,null,r.createElement("a",{href:"/digital_branding"},r.createElement("img",{src:i,alt:"seoaccomplishment",style:{cursor:"pointer"}})))))}var D={slider:0,dir:"right"};function N(e,t){switch(t.dir){case"right":return 2===e.slider?{slider:0,dir:"right"}:{slider:e.slider+1,dir:"right"};case"left":return 0===e.slider?{slider:2,dir:"left"}:{slider:e.slider-1,dir:"left"};default:return{slider:0,dir:"left"}}}function j(){var e=(0,r.useReducer)(N,D),t=e[0],n=e[1];(0,r.useEffect)((function(){x.p8.timeline({scrollTrigger:{trigger:".accompvgd",start:"top center"}}).fromTo(".accompvgd",{y:-300,opacity:0},{duration:.25,y:0,opacity:1}),setInterval((function(){n({dir:"right"})}),2e3)}),[]);var i=function(){switch(t.slider){case 0:return r.createElement(y,{dir:t.dir});case 1:return r.createElement(I,{dir:t.dir});case 2:return r.createElement(d,{dir:t.dir})}};return r.createElement(c.xu,{className:"accompvgd"},r.createElement(c.xu,{pl:"10%",pt:"105px"},r.createElement(c.xu,{className:"vgd"}),r.createElement(a.k,{flexDirection:"row",flexWrap:"noWrap",w:"100%",className:"whatwedo"},r.createElement(c.xu,null,r.createElement("h3",null,"OUR WORK"))),r.createElement(c.xu,{pt:"26px",w:["100%","100%","50%","50%","50%"]},r.createElement("p",{className:"subwhatwedo"},"At Visual Group Digital, we specialise in helping businesses introduce their brand, connect with their target audience, and develop an effective marketing strategy.")),r.createElement(a.k,{textAlign:"right",justifyContent:"flex-end",px:"50px",py:"20px"},r.createElement("button",{className:"leftArrow",onClick:function(){return n({dir:"left"})}},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAxNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjQwNDIgMjQuMjA4OEMxMi4xODQ1IDI0LjIwOTEgMTEuOTY2OCAyNC4xNjU5IDExLjc2MzggMjQuMDgxOUMxMS41NjA4IDIzLjk5NzggMTEuMzc2NCAyMy44NzQ0IDExLjIyMTIgMjMuNzE4OEwxLjE4NjIyIDEzLjY4MzhDMS4wMzA5IDEzLjUyODUgMC45MDc2ODYgMTMuMzQ0MiAwLjgyMzYyMiAxMy4xNDEzQzAuNzM5NTU3IDEyLjkzODQgMC42OTYyODkgMTIuNzIwOSAwLjY5NjI4OSAxMi41MDEzQzAuNjk2Mjg5IDEyLjI4MTcgMC43Mzk1NTcgMTIuMDY0MiAwLjgyMzYyMiAxMS44NjEzQzAuOTA3Njg2IDExLjY1ODQgMS4wMzA5IDExLjQ3NDEgMS4xODYyMiAxMS4zMTg4TDExLjIyMTIgMS4yODM4MUMxMS4zNzQ4IDEuMTIxMTEgMTEuNTU5NSAwLjk5MDg2NyAxMS43NjQzIDAuOTAwOEMxMS45NjkxIDAuODEwNzMzIDEyLjE5IDAuNzYyNjY5IDEyLjQxMzcgMC43NTk0NUMxMi42Mzc0IDAuNzU2MjMyIDEyLjg1OTUgMC43OTc5MjUgMTMuMDY2OSAwLjg4MjA2MkMxMy4yNzQyIDAuOTY2MiAxMy40NjI1IDEuMDkxMDcgMTMuNjIwNyAxLjI0OTI5QzEzLjc3OSAxLjQwNzUxIDEzLjkwMzggMS41OTU4NSAxMy45ODggMS44MDMxOEMxNC4wNzIxIDIuMDEwNTEgMTQuMTEzOCAyLjIzMjYyIDE0LjExMDYgMi40NTYzNUMxNC4xMDc0IDIuNjgwMDggMTQuMDU5MyAyLjkwMDg5IDEzLjk2OTIgMy4xMDU3MUMxMy44NzkyIDMuMzEwNTQgMTMuNzQ4OSAzLjQ5NTIxIDEzLjU4NjIgMy42NDg4MUw0LjczNDIyIDEyLjUwMDhMMTMuNTg2MiAyMS4zNTI4QzEzLjgyMDMgMjEuNTg2NyAxMy45Nzk4IDIxLjg4NDcgMTQuMDQ0NSAyMi4yMDkyQzE0LjEwOTEgMjIuNTMzOCAxNC4wNzYgMjIuODcwMiAxMy45NDkzIDIzLjE3NTlDMTMuODIyNiAyMy40ODE2IDEzLjYwODEgMjMuNzQyOCAxMy4zMzI5IDIzLjkyNjVDMTMuMDU3NyAyNC4xMTAyIDEyLjczNDEgMjQuMjA4MSAxMi40MDMyIDI0LjIwNzhMMTIuNDA0MiAyNC4yMDg4WiIgZmlsbD0iIzBBMkY1MyIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+Cjwvc3ZnPgo=",alt:"left.svg"})),r.createElement("button",{className:"rightArrow",onClick:function(){return n({dir:"right"})}},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAxNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNjQ0MjMgMjMuNzE4MUwxMy43MjAyIDEzLjY0MjFDMTMuODc2MiAxMy40ODYyIDE0IDEzLjMwMTEgMTQuMDg0NCAxMy4wOTczQzE0LjE2ODggMTIuODkzNiAxNC4yMTIyIDEyLjY3NTIgMTQuMjEyMiAxMi40NTQ2QzE0LjIxMjIgMTIuMjM0MSAxNC4xNjg4IDEyLjAxNTcgMTQuMDg0NCAxMS44MTE5QzE0IDExLjYwODIgMTMuODc2MiAxMS40MjMgMTMuNzIwMiAxMS4yNjcxTDMuNjQ0MjMgMS4xOTAxMkMzLjMyOTI4IDAuODc1MTcyIDIuOTAyMTIgMC42OTgyNDIgMi40NTY3MyAwLjY5ODI0MkMyLjAxMTMzIDAuNjk4MjQyIDEuNTg0MTcgMC44NzUxNzIgMS4yNjkyMyAxLjE5MDEyQzAuOTU0MjgxIDEuNTA1MDYgMC43NzczNDQgMS45MzIyMiAwLjc3NzM0NCAyLjM3NzYyQzAuNzc3MzQ0IDIuODIzMDIgMC45NTQyODEgMy4yNTAxNyAxLjI2OTIzIDMuNTY1MTJMMTAuMTU4MiAxMi40NTQxTDEuMjY5MjMgMjEuMzQzMUMwLjk1NDI4MSAyMS42NTgxIDAuNzc3MzQ0IDIyLjA4NTIgMC43NzczNDQgMjIuNTMwNkMwLjc3NzM0NCAyMi45NzYgMC45NTQyODEgMjMuNDAzMiAxLjI2OTIzIDIzLjcxODFDMS41ODQxNyAyNC4wMzMxIDIuMDExMzMgMjQuMjEgMi40NTY3MyAyNC4yMUMyLjkwMjEyIDI0LjIxIDMuMzI5MjggMjQuMDMzMSAzLjY0NDIzIDIzLjcxODFaIiBmaWxsPSIjMEEyRjUzIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4KPC9zdmc+Cg==",alt:"right.svg"})))),r.createElement(c.xu,{pt:"55px",w:"100%",overflowX:"hidden"},r.createElement(i,null)))}},333:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(7294),a=n(7690),c=n(7361),i=n(1823),l=n(9555),M=n.n(l),u=n(2598),o=n(1907),s=n(8363),m=(n(6059),n(6346)),g=n(5106),E=n(1006),x=n(3164),y=n(8178);function I(e){var t=e.location,n="undefined"!=typeof window,l=(0,r.useState)(),I=l[0],d=l[1],D=(0,r.useState)(),N=(D[0],D[1]),j=function(){d(window.innerWidth),N(window.innerHeight)},f=(0,r.useState)(!1),p=f[0],z=f[1],T=(0,r.useState)(0),A=T[0],w=T[1],h=x.map((function(e){return e}));return(0,r.useEffect)((function(){return n&&(j(),window.addEventListener("resize",j)),function(){return window.removeEventListener("resize",j)}}),[]),r.createElement(a.xu,{className:"main",overflowX:"hidden"},r.createElement(u.Z,null),I>1280?r.createElement(o.Z,{loc:t,page:"/case_studies"}):r.createElement(g.Z,null),r.createElement(a.xu,null,r.createElement(c.k,{justifyContent:"center",alignItems:"center",mt:"80px",flexDirection:"column"},r.createElement(a.xu,{textAlign:"center"},r.createElement("h1",{className:"title"},"Tailored Removal")),r.createElement(a.xu,{alignSelf:"center",py:"20px"},r.createElement(i.C,null,'Tailored Removal Company"'))),r.createElement(a.xu,{w:"95%",className:"caseStudyBox",m:"auto",mt:"50px"},r.createElement(a.xu,{textAlign:"center",pt:"30px",className:"viewshead"},r.createElement("h3",null,"tailoredremoval.co.uk"),r.createElement("p",null,"Removals and storage company based in Sussex.")),r.createElement(c.k,null,r.createElement(c.k,{flexWrap:"wrap",w:"100%",justifyContent:"center"},x.map((function(e,t){return r.createElement(a.xu,{w:["90%","90%","25%","25%","25%"],m:"5px"},r.createElement("img",{key:t,src:e,alt:e,style:{borderRadius:"2px",cursor:"pointer"},onClick:function(){z(!0),w(t)}}))})))),r.createElement(c.k,{justifyContent:"center",alignItems:"center",my:"20px",flexWrap:"wrap"},r.createElement(a.xu,{mx:"10px",my:"5px"},r.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/contact")}},r.createElement("span",null,"BOOKING ENQUIRY"))),r.createElement(a.xu,{mx:"10px",my:"5px"},r.createElement("button",{className:"button button--aylen ",onClick:function(){window.location.assign("/case_studies")}},r.createElement("span",null,"VIEW MORE CASE STUDIES"))))),r.createElement(y.Z,null),r.createElement(E.Z,null),r.createElement(s.Z,{text:"Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"}),r.createElement(m.Z,null)),p?r.createElement(M(),{images:h,startIndex:A,onClose:function(){return z((function(e){return!e}))}}):null)}},2644:function(e,t,n){t.Z=n.p+"static/fbadss-510cf46e56d378d627386792b8a247f5.jpg"},2961:function(e,t,n){t.Z=n.p+"static/googleads-008601dd6111191d274796dff27f117c.jpg"},92:function(e,t,n){t.Z=n.p+"static/insta-8416e0cce5c9a28c0feed31dd55fd73f.jpg"},5916:function(e,t,n){t.Z=n.p+"static/seo8-b5e6bf8d8f9b5e77c65c9066a7bfc446.jpg"},7005:function(e,t,n){t.Z=n.p+"static/social_media_2-387e7909f53307fc1c002273b00d14bf.jpg"},5329:function(e,t,n){t.Z=n.p+"static/webdev-16dc8768d5f98b2a6a775cf9530a8a80.jpg"}}]);
//# sourceMappingURL=component---src-pages-case-studies-sussex-tailored-js-08b96046158b4b41e65a.js.map