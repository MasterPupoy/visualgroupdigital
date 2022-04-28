"use strict";(self.webpackChunkvisualgroupdigital=self.webpackChunkvisualgroupdigital||[]).push([[1091],{8678:function(e,t,n){n.d(t,{E:function(){return m}});var M=n(2543),r=n(9265),a=n(4526),i=n(4667),N=n(7294),c=n(9439),o=n(5587).jU?N.useLayoutEffect:N.useEffect;function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var M in n)Object.prototype.hasOwnProperty.call(n,M)&&(e[M]=n[M])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,M,r={},a=Object.keys(e);for(M=0;M<a.length;M++)n=a[M],t.indexOf(n)>=0||(r[n]=e[n]);return r}var u=N.forwardRef((function(e,t){var n=e.htmlWidth,M=e.htmlHeight,r=e.alt,a=g(e,["htmlWidth","htmlHeight","alt"]);return N.createElement("img",l({width:n,height:M,ref:t,alt:r},a))})),m=(0,M.G)((function(e,t){var n=e.fallbackSrc,M=e.fallback,i=e.src,m=e.srcSet,D=e.align,s=e.fit,j=e.loading,I=e.ignoreFallback,z=e.crossOrigin,E=g(e,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),T=null!=j||I||void 0===n&&void 0===M,x=function(e){var t=e.loading,n=e.src,M=e.srcSet,r=e.onLoad,a=e.onError,i=e.crossOrigin,l=e.sizes,g=e.ignoreFallback,u=(0,N.useState)("pending"),m=(0,c.Z)(u,2),D=m[0],s=m[1];(0,N.useEffect)((function(){s(n?"loading":"pending")}),[n]);var j=(0,N.useRef)(),I=(0,N.useCallback)((function(){if(n){z();var e=new Image;e.src=n,i&&(e.crossOrigin=i),M&&(e.srcset=M),l&&(e.sizes=l),t&&(e.loading=t),e.onload=function(e){z(),s("loaded"),null==r||r(e)},e.onerror=function(e){z(),s("failed"),null==a||a(e)},j.current=e}}),[n,i,M,l,r,a,t]),z=function(){j.current&&(j.current.onload=null,j.current.onerror=null,j.current=null)};return o((function(){if(!g)return"loading"===D&&I(),function(){z()}}),[D,I,g]),g?"loaded":D}(l({},e,{ignoreFallback:T})),y=l({ref:t,objectFit:s,objectPosition:D},T?E:(0,a.CE)(E,["onError","onLoad"]));return"loaded"!==x?M||N.createElement(r.m$.img,l({as:u,className:"chakra-image__placeholder",src:n},y)):N.createElement(r.m$.img,l({as:u,src:i,srcSet:m,crossOrigin:z,loading:j,className:"chakra-image"},y))}));i.Ts&&(m.displayName="Image")},3822:function(e,t,n){n.d(t,{Z:function(){return c}});var M=n(7294),r=n(7361),a=n(8678),i=n(2755),N=n.p+"static/logo2-19475deb42e503c4d499cc98deb3b001.svg";function c(){return M.createElement(r.k,{flexDirection:"row",w:"100%",justifyContent:"space-between",px:"1rem",py:"1rem",flexWrap:"wrap"},M.createElement(a.E,{src:N,width:"15rem",style:{cursor:"pointer"},onClick:function(){window.location.assign("/getting-started")}}),M.createElement(i.z,{display:["none","none","none","block","block","block"],className:"button button--aylen",my:"1rem",color:"#FFFFFF",onClick:function(){window.location.assign("/book-now")}},"Book an appointment now!"))}},4684:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var M=n(7294),r=n(2598),a=n(7690),i=n(7361),N=n(2200),c=n(2755),o=n(8678);function l(){return M.createElement("svg",{width:"47",height:"43",viewBox:"0 0 47 43",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M.createElement("path",{d:"M45.0418 21.5L40.2635 16.5192L40.9293 9.92583L33.8597 8.45667L30.1584 2.75917L23.5001 5.375L16.8417 2.75917L13.1405 8.45667L6.07086 9.90792L6.73669 16.5013L1.95834 21.5L6.73669 26.4808L6.07086 33.0921L13.1405 34.5612L16.8417 40.2588L23.5001 37.625L30.1584 40.2408L33.8597 34.5433L40.9293 33.0742L40.2635 26.4808L45.0418 21.5ZM19.5834 30.4583L11.75 23.2917L14.5113 20.7654L19.5834 25.3879L32.4888 13.5808L35.2501 16.125L19.5834 30.4583Z",fill:"#EE6F19"}))}var g=n(3822),u=n(6401),m=n(6227);function D(){return M.createElement("svg",{width:"2000",height:"100",viewBox:"0 0 2000 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M.createElement("path",{d:"M2000 2.47359e-06L3.06959e-05 90.0285V100L2000 100V2.47359e-06Z",fill:"#0A2F53"}))}function s(){return M.createElement("svg",{width:"2000",height:"100",viewBox:"0 0 2000 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M.createElement("path",{d:"M0 100L2000 9.97151V0L0 0L0 100Z",fill:"#0A2F53"}))}var j=n(6346),I=n(9023),z=n(7574);function E(e){var t=e.icon,n=e.title,r=e.content,o=e.color,l=e.buttonColor;return M.createElement(i.k,{backgroundColor:o,borderRadius:20,w:"400px",h:"500px",flexDirection:"column",alignItems:"center",justifyContent:"center",my:"1rem",boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},M.createElement(a.xu,{h:"150px"},t),M.createElement(i.k,{justifyContent:"center",alignItems:"center",h:"100px",w:"100%"},M.createElement(N.x,{style:T.cardTitle},n)),M.createElement(N.x,{style:T.cardText},r),M.createElement(c.z,{style:T.button,backgroundColor:l,onClick:function(){window.location.assign("/book-now")}},"Let's Chat"))}var T={cardTitle:{color:"#FFF5DF",textAlign:"center",fontSize:"2rem",fontWeight:"bold",fontFamily:"dm-sans",padding:"auto"},cardText:{color:"#FFF5DF",fontFamily:"dm-sans",fontSize:"1rem",textAlign:"center",marginBottom:"0.5rem",padding:"1rem",height:"150px"},button:{width:"90%",paddingTop:"2rem",paddingBottom:"2rem",color:"#FFFF"}};function x(){return M.createElement("svg",{width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M.createElement("g",{"clip-path":"url(#clip0_34_15)"},M.createElement("path",{d:"M100.02 56.82L120 72.78V97.32C119.836 98.8996 119.36 100.431 118.6 101.825C117.839 103.219 116.81 104.449 115.571 105.442C114.332 106.436 112.908 107.173 111.382 107.612C109.856 108.051 108.257 108.183 106.68 108H13.32C11.7425 108.183 10.1444 108.051 8.61818 107.612C7.092 107.173 5.66814 106.436 4.42915 105.442C3.19016 104.449 2.16067 103.219 1.40038 101.825C0.640077 100.431 0.164088 98.8996 0 97.32L0 62.16L19.98 78L46.68 56.82L73.32 78L100.02 56.82Z",fill:"#FFF5DF"}),M.createElement("path",{d:"M120 57.84L100.02 42L73.38 63.36L46.68 42L19.98 63.18L0 47.22V22.68C0.164088 21.1004 0.640077 19.5691 1.40038 18.1749C2.16067 16.7806 3.19016 15.5512 4.42915 14.5577C5.66814 13.5643 7.092 12.8267 8.61818 12.3876C10.1444 11.9486 11.7425 11.8168 13.32 12H106.68C108.257 11.8168 109.856 11.9486 111.382 12.3876C112.908 12.8267 114.332 13.5643 115.571 14.5577C116.81 15.5512 117.839 16.7806 118.6 18.1749C119.36 19.5691 119.836 21.1004 120 22.68V57.84Z",fill:"#FFF5DF"})),M.createElement("defs",null,M.createElement("clipPath",{id:"clip0_34_15"},M.createElement("rect",{width:"120",height:"120",fill:"white"}))))}function y(){return M.createElement("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M.createElement("path",{d:"M33.3333 16.6666L66.6667 16.6666V31.25L54.8333 43.0833L60.0417 48.2916L75 33.375L74.9583 33.3333H75V8.33331L25 8.33331V13.2083L33.3333 21.5416V16.6666ZM8.75 8.74998L2.875 14.625L39.9583 51.7083L25 66.6666L25.0417 66.7083H25V91.6666H75V86.7916L85.375 97.1666L91.25 91.2916L8.75 8.74998ZM66.6667 83.3333H33.3333V68.75L45.1667 56.9166L66.6667 78.4583V83.3333Z",fill:"#FFF5DF"}))}function A(){return M.createElement("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M.createElement("path",{d:"M83.3334 8.33331H16.6667C14.4566 8.33331 12.337 9.21129 10.7742 10.7741C9.21135 12.3369 8.33337 14.4565 8.33337 16.6666V66.6666C8.33337 68.8768 9.21135 70.9964 10.7742 72.5592C12.337 74.122 14.4566 75 16.6667 75H41.6667V83.3333H29.1667V91.6667H70.8334V83.3333H58.3334V75H83.3334C85.5435 75 87.6631 74.122 89.2259 72.5592C90.7887 70.9964 91.6667 68.8768 91.6667 66.6666V16.6666C91.6667 14.4565 90.7887 12.3369 89.2259 10.7741C87.6631 9.21129 85.5435 8.33331 83.3334 8.33331ZM83.3334 66.6666H16.6667V16.6666H83.3334V66.6666ZM69.7917 54.1666C69.7917 56.1005 69.0235 57.9552 67.656 59.3226C66.2886 60.6901 64.4339 61.4583 62.5 61.4583C60.5662 61.4583 58.7115 60.6901 57.3441 59.3226C55.9766 57.9552 55.2084 56.1005 55.2084 54.1666L41.6667 47.3333C40.6122 48.1451 39.3514 48.6453 38.0271 48.7773C36.7029 48.9093 35.3682 48.6678 34.1741 48.0802C32.9801 47.4925 31.9745 46.5822 31.2713 45.4523C30.5681 44.3225 30.1954 43.0183 30.1954 41.6875C30.1954 40.3567 30.5681 39.0525 31.2713 37.9226C31.9745 36.7928 32.9801 35.8825 34.1741 35.2948C35.3682 34.7071 36.7029 34.4656 38.0271 34.5976C39.3514 34.7296 40.6122 35.2299 41.6667 36.0416L55.2084 29.1666C55.185 27.4948 55.7305 25.8646 56.7553 24.5435C57.7802 23.2223 59.2235 22.2886 60.8487 21.8955C62.4738 21.5024 64.1843 21.6732 65.6997 22.3798C67.2151 23.0865 68.4453 24.2872 69.1887 25.7849C69.9321 27.2825 70.1444 28.9884 69.791 30.6226C69.4376 32.2569 68.5393 33.7225 67.2435 34.7792C65.9477 35.8359 64.3313 36.421 62.6594 36.4384C60.9874 36.4557 59.3592 35.9045 58.0417 34.875L44.625 41.6666L58.0417 48.375C59.1171 47.5234 60.4121 46.9944 61.7762 46.8494C63.1402 46.7044 64.5175 46.9493 65.7479 47.5558C66.9783 48.1623 68.0114 49.1054 68.7272 50.2756C69.443 51.4458 69.8121 52.795 69.7917 54.1666Z",fill:"#FFF5DF"}))}var L=n(384),w=(n(8824),n.p+"static/calendar-4ea6a3d84bbdf8e5357a7fe82e82249a.svg"),d=n(7864),O=n(9886),f=n(7779),k=n(7605),p=n(2861),C=n(9283),U=n.p+"static/boost-17326d5175ee18f97a74549bc32ea370.svg",S=n(2884),h=n(2932);function Q(){var e=(0,M.useState)(""),t=(e[0],e[1],(0,M.useState)("")),n=(t[0],t[1],(0,M.useState)("")),T=(n[0],n[1],(0,M.useState)(""));T[0],T[1];(0,M.useEffect)((function(){var e=S.p8.timeline({scrollTrigger:{trigger:".banner-sec",scrub:1,start:"60% center"}});return e.to(".blob",{y:-150,zIndex:0,duration:1,ease:"ease"}).to(".wearevgd",{y:-150,duration:1,ease:"ease"},"<").to(".unlock",{y:-150,duration:1,ease:"ease"},"<").to(".seShape5",{y:-100,duration:1,ease:"ease"},"<").to(".seShape6",{y:-100,duration:1,ease:"ease"},"<").to(".seShape7",{y:-100,duration:1,ease:"ease"},"<").to(".seShape8",{y:-150,duration:1,ease:"ease"},"<").to(".seShape4",{y:-50,duration:1,ease:"ease"},"<").to(".calendar",{y:-50,duration:1,ease:"ease"},"<").to("booknow",{y:-200,duration:1,ease:"ease"},"<"),function(){e.kill()}}),[]),(0,M.useEffect)((function(){var e=S.p8.timeline({scrollTrigger:{trigger:".bookmore",start:"top center"}});return e.fromTo(".guaranteed",{x:100,opacity:0},{duration:.25,x:0,opacity:1}).fromTo(".boost",{x:100,opacity:0},{duration:.25,x:0,opacity:1}).fromTo(".bringing",{x:100,opacity:0},{duration:.25,x:0,opacity:1}).fromTo(".allin",{x:100,opacity:0},{duration:.25,x:0,opacity:1}),function(){e.kill()}}),[]);return M.createElement(a.xu,{backgroundColor:"#FFF5DF"},M.createElement(a.xu,{maxW:"2000px",m:"auto",backgroundColor:"#FFF5DF",overflowX:"hidden"},M.createElement(r.Z,null),M.createElement(i.k,null,M.createElement(g.Z,null)),M.createElement("img",{src:k.Z,alt:"svg",className:"seShape4"}),M.createElement("img",{src:O.Z,alt:"svg",className:"seShape5"}),M.createElement("img",{src:p.Z,alt:"svg",className:"seShape6"}),M.createElement("img",{src:C.Z,alt:"svg",className:"seShape7"}),M.createElement("img",{src:f.Z,alt:"svg",className:"seShape8"}),M.createElement(i.k,{w:"100%",h:["1200px","1200px","1500px","800px","850px"],flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap",alignItems:"center",className:"banner-sec "},M.createElement(i.k,{backgroundImage:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODM0IiBoZWlnaHQ9Ijc4NiIgdmlld0JveD0iMCAwIDgzNCA3ODYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02ODIuNjg0IDE1NC43MTRDNzYwLjEyMSAyMjUuNzUzIDgyNC4zNjQgMjk2LjI4OCA4MzIuOTY4IDM3MC44NTNDODQxLjU3MiA0NDUuNDE4IDc5NS4xMSA1MjQuNTE4IDc0MC4wNDQgNTkwLjUxOEM2ODUuNTUyIDY1Ny4wMjIgNjIyLjQ1NSA3MTAuOTMxIDU0My4yOTggNzQ1LjE5MUM0NjMuNTY3IDc3OS45NTQgMzY3LjIwMSA3OTQuNTY1IDI2My45NTIgNzgwLjk2MkMxNjEuMjc3IDc2Ny4zNTkgNTEuMTQ1MSA3MjUuNTQyIDE1LjAwOCA2NTQuNTAzQy0yMS4xMjkxIDU4Mi45NjEgMTYuMTU1MiA0ODIuMTk3IDQxLjM5MzggMzgzLjQ0OEM2Ni4wNTg4IDI4NC4xOTYgNzguNjc4MiAxODYuNDU1IDE0MC4wNTQgMTEzLjQwMUMyMDIuMDAzIDM5Ljg0MzUgMzEzLjI4MiAtOS41MzA4MSA0MTQuMjM3IDEuNTUzMjFDNTE1LjE5MSAxMi42MzcyIDYwNS4yNDcgODMuNjc1OCA2ODIuNjg0IDE1NC43MTRaIiBmaWxsPSIjMEEyRjUzIi8+Cjwvc3ZnPgo=",backgroundPosition:"center",backgroundSize:["cover","cover","contain","contain","contain"],backgroundRepeat:"no-repeat",h:"850px",w:["100%","100%","100%","65%","55%","45%"],flexDirection:"column",justifyContent:"center",alignContent:"center",className:"blob"},M.createElement(i.k,{flexDirection:"column",pl:["1rem","1rem","6.5rem","6.5rem","6.5rem"]},M.createElement(N.x,{fontFamily:"Montserrat",fontSize:["3rem","3rem","3rem","3rem","3.25rem"],color:"#ffff",className:"wearevgd"},"WE ARE DIGITAL MARKETING"),M.createElement(N.x,{fontFamily:"Montserrat",fontSize:["2rem","2rem","2rem","2rem","3rem"],color:"#ffff",className:"unlock"},"Unlock your business’ full potential with us!"),M.createElement(c.z,{className:"booknow",rightIcon:M.createElement(d.mr,{boxSize:"2rem"}),fontSize:"1.25rem",w:"300px",p:"2rem",borderRadius:20,color:"#ffff",backgroundColor:"#ee6f19",my:"2rem",onClick:function(){window.location.assign("/book-now")}},"Book an appointment"))),M.createElement(a.xu,{w:["100%","100%","100%","100%","45%","40%"]},M.createElement(o.E,{src:w,boxSize:["400px","500px","600px","500px","500px","800px"],objectFit:"contain",className:"calendar"}))),M.createElement(i.k,{flexDirection:"row",flexWrap:"wrap-reverse",alignItems:"center",justifyContent:"space-evenly"},M.createElement(o.E,{src:U,boxSize:["400px","500px","600px","800px","800px"]}),M.createElement(i.k,{justifyContent:"center",flexDirection:"column",px:"1rem"},M.createElement(a.xu,null,M.createElement(N.x,{fontSize:["2.5rem","2.5rem","2.5rem","3rem"],color:"#0A2F53",fontWeight:"bold",fontFamily:"Montserrat",className:"bookmore"},"Book more clients and ",M.createElement("br",null),"Increase your sales")),M.createElement(i.k,{alignItems:"center",my:"0.5rem",className:"guaranteed"},M.createElement(l,null),M.createElement(N.x,{fontFamily:"dm-sans",fontSize:["1.25rem","1.15rem","1.25rem","1.5rem"],color:"#0A2F53",fontWeight:"bold",px:"1rem"},"Guaranteed boost in clients")),M.createElement(i.k,{alignItems:"center",py:"0.5rem",className:"boost"},M.createElement(l,null),M.createElement(N.x,{fontFamily:"dm-sans",fontSize:["1.25rem","1.15rem","1.25rem","1.5rem"],color:"#0A2F53",fontWeight:"bold",px:"1rem"},"100% increase in online presence")),M.createElement(i.k,{alignItems:"center",py:"0.5rem",className:"bringing"},M.createElement(l,null),M.createElement(N.x,{fontFamily:"dm-sans",fontSize:["1.25rem","1.15rem","1.25rem","1.5rem"],color:"#0A2F53",fontWeight:"bold",px:"1rem"},"Bringing new customers to you")),M.createElement(i.k,{alignItems:"center",py:"0.5rem",className:"allin"},M.createElement(l,null),M.createElement(N.x,{fontFamily:"dm-sans",fontSize:["1.25rem","1.15rem","1.25rem","1.5rem"],color:"#0A2F53",fontWeight:"bold",px:"1rem"},"All in one web solutions")))),M.createElement(i.k,{px:"1rem",my:"1.5rem",justifyContent:"space-around",flexWrap:"wrap"},M.createElement(E,{icon:M.createElement(x,null),title:"No clear strategy?",content:"With us, we can choose clear, focused marketing objectives. Building a clear strategy that centers around your goals.",color:"#0A2F53",buttonColor:"#EE6F19"}),M.createElement(E,{icon:M.createElement(y,null),title:"Lack of Time and Resources?",content:"A clear, efficient process allows you to accomplish marketing activities more quickly, or delegate it to us.",color:"#EE6F19",buttonColor:"#0A2F53"}),M.createElement(E,{icon:M.createElement(A,null),title:"Adapting to New Trends?",content:"Understand that Digital Marketing is Constant Change. Thats why we’re here for you! Let's get you up and running!",color:"#0A2F53",buttonColor:"#EE6F19"})),M.createElement(i.k,{justifyContent:"center",p:"3rem"},M.createElement(N.x,{fontSize:["2rem","2.5rem","2.5rem","3rem"],color:"#0A2F53",textAlign:"center",fontFamily:"dm-sans",fontWeight:700},"Our company helped ",M.createElement("u",null,"start-ups and corporations")," improve their marketing and brand to ",M.createElement("u",null,"maximise their client potential."))),M.createElement(a.xu,{w:"100%"},M.createElement(D,null),M.createElement(i.k,{flexDirection:"column",w:"100%",backgroundColor:"#0A2F53",px:["2rem","2rem","2rem","5rem","5rem"],py:"2rem"},M.createElement(N.x,{fontFamily:"dm-sans",fontSize:["1.25rem","1.25rem","1.5rem","1.5rem","1.5rem"],fontWeight:"extrabold",color:"#ffff"},"FOUNDER"),M.createElement(N.x,{fontFamily:"dm-sans",fontSize:["2.5rem","2.5rem","2.5rem","3rem","3rem"],fontWeight:"extrabold",color:"#ffff"},"RICKY INGRAM"),M.createElement(N.x,{fontFamily:"dm-sans",fontSize:["1.25rem","1.25rem","1.5rem","1.5rem","1.5rem"],fontWeight:"extrabold",color:"#ffff"},"CHIEF EXECUTIVE OFFICER OF VISUAL GROUP DIGITAL"),M.createElement(N.x,{fontFamily:"dm-sans",fontSize:"1rem",color:"#ffff",py:"1rem",maxW:"1500px"},"Visual Group Digital leading marketing, branding and web development agency. Who strategically plan the design of websites that empower your business.Throughout the company’s growth, our team has maintained the same attention to detail with each client we work with. Every member of our growing team understands that our differentiating factor among other marketing agencies is the one-of-a-kind thought that we put into each new account.")),M.createElement(s,null)),M.createElement(i.k,{alignItems:"center",flexDirection:"column",justifyContent:"center",fontFamily:"dm-sans",w:"100%",px:["2rem","2rem","2rem","5rem","5rem"]},M.createElement(N.x,{color:"#0A2F53",fontSize:["2rem","2.5rem","2.5rem","3rem"],fontWeight:"extrabold"},M.createElement("span",{style:{color:"#EE6F19"}},M.createElement("u",null,"Our 3 Easy Steps")),"  to Successful Marketing"),M.createElement(u.Z,{removedToggle:!0})),M.createElement(i.k,{w:"100%",justifyContent:"center",my:"3rem"},M.createElement(N.x,{fontFamily:"dm-sans",fontSize:["2rem","2rem","2rem","3rem"],fontWeight:"extrabold",color:"#0A2F53",maxW:"1000px",textAlign:"center",px:"1rem"},"We’ve worked with more than 100 companies since 2015 Check out some of the fantastic clients we have brought to the UK and International Markets.")),M.createElement(m.Z,{removedToggle:!0}),M.createElement(i.k,{w:"100%",alignItems:"center",flexDirection:"column",backgroundColor:"#0A2F53",py:"2rem",my:"3rem"},M.createElement(N.x,{fontFamily:"dm-sans",fontSize:["2.25rem","2.25rem","2.5rem","3rem","3rem"],fontWeight:"extrabold",color:"#ffff",textAlign:"center"},"WHAT OUR CLIENTS HAVE TO SAY"),M.createElement(i.k,{justifyContent:"center",flexDirection:"row",flexWrap:"wrap",w:"100%"},M.createElement(a.xu,{w:"500px",my:"20px",mx:"20px",className:"testimonial1"},M.createElement(i.k,{justifyContent:"center",alignItems:"center"},M.createElement("img",{src:I.Z,alt:"fivestars.svg"})),M.createElement(a.xu,{className:"statement2"},M.createElement(N.x,{fontSize:"3xl",as:"h3"},"“I’ve been using Visual ",M.createElement("br",null),"Group for over 2 months.”"),M.createElement(N.x,{as:"p",fontSize:"md"},'"My experience has been amazing and they have really helped me grow my business and progress it to the next level. We speak daily and continuously track progress and discuss how we can keep growing the business further. Really great company to work with and I would recommend them to anyone!"')),M.createElement(i.k,{justifyContent:"center",alignItems:"center",pt:"20px"},M.createElement(a.xu,null,M.createElement("img",{src:z.Z,alt:"line.svg"})),M.createElement(a.xu,{pl:"10px"},M.createElement("h3",{style:{color:"#EE6F19"}},"Matt")))),M.createElement(a.xu,{w:"500px",my:"20px",mx:"20px",className:"testimonial2"},M.createElement(i.k,{justifyContent:"center",alignItems:"center"},M.createElement("img",{src:I.Z,alt:"fivestars.svg"})),M.createElement(a.xu,{className:"statement2"},M.createElement(N.x,{fontSize:"3xl",as:"h3"},"“Fantastic service. Highly ",M.createElement("br",null),"recommend!”"),M.createElement(N.x,{as:"p",fontSize:"md"},'"We came across Ricky by chance and so glad we did. Originally we approached Ricky with my project that needed to be completely transformed. I have been working with the visualgroup.online for a few months since and Ricky has always been a man of his word, constantly deliveres quality and continues too. I highly recommend."')),M.createElement(i.k,{justifyContent:"center",alignItems:"center",pt:"20px"},M.createElement(a.xu,null,M.createElement("img",{src:z.Z,alt:"line.svg"})),M.createElement(a.xu,{pl:"10px"},M.createElement("h3",{style:{color:"#EE6F19"}},"Leah Murray"))))),M.createElement(i.k,{w:"100%",justifyContent:"center",flexWrap:"wrap",flexDirection:"row"},M.createElement(a.xu,{w:"500px",mx:"20px",my:"20px",className:"testimonial3"},M.createElement(i.k,{justifyContent:"center",alignItems:"center"},M.createElement("img",{src:I.Z,alt:"fivestars.svg"})),M.createElement(a.xu,{className:"statement2"},M.createElement(N.x,{fontSize:"3xl",as:"h3"},"“I can’t express how ",M.createElement("br",null),"impressed I am with their results!”"),M.createElement(N.x,{as:"p"},'"Visual Group have been running my ads for the last 4 months and I can’t express enough how impressed I am with their results! They’ve increased my sales and allowed me to take my business to the level I wanted it to be at, but Wasn’t sure how to get there. They also helped me not just with a paid marketing plan but they also gave me advice on how to grow my business organically. Thank you so much! 2021 is going to be a big year!"')),M.createElement(i.k,{justifyContent:"center",alignItems:"center",pt:"20px"},M.createElement(a.xu,null,M.createElement("img",{src:z.Z,alt:"line.svg"})),M.createElement(a.xu,{pl:"10px"},M.createElement("h3",{style:{color:"#EE6F19"}},"Sarah Bricker")))),M.createElement(a.xu,{w:"500px",mx:"20px",my:"20px",className:"testimonial4"},M.createElement(i.k,{justifyContent:"center",alignItems:"center"},M.createElement("img",{src:I.Z,alt:"fivestars.svg"})),M.createElement(a.xu,{className:"statement2"},M.createElement(N.x,{fontSize:"3xl",as:"h3"},"“Visual Group have been ",M.createElement("br",null),"excellent in getting my business ",M.createElement("br",null),"out of a rut.”"),M.createElement(N.x,{as:"p"},'"I had a very bad experience with a marketing firm who charged me an excessive amount of money but didn\'t complete the works. Visual Group have since helped with my business to make it consistent and tied together with an effect and profitable marketing strategy, created 3 effective websites and have begun a marketing campaign that has generated leads, all within a 3 month time period! Very quick and efficient at what they do. Very happy with the results! Would highly recommend them!"')),M.createElement(i.k,{justifyContent:"center",alignItems:"center",pt:"20px"},M.createElement(a.xu,null,M.createElement("img",{src:z.Z,alt:"line.svg"})),M.createElement(a.xu,{pl:"10px"},M.createElement("h3",{style:{color:"#EE6F19"}},"Samantha Harris")))))),M.createElement(i.k,{px:"3rem",justifyContent:"center",flexWrap:"wrap"},M.createElement(N.x,{fontSize:["2.75rem","2.75rem","3rem","3rem","3rem"],fontWeight:"extrabold",color:"#0A2F53",maxW:"500px"},"READY FOR THE NEXT BIG LEAP?"),M.createElement(i.k,{justifyContent:"center",alignItems:"center",w:["100%","100%","100%","50%","50%"]},M.createElement(c.z,{backgroundColor:"#EE6F19",my:"1rem",p:"2.5rem",color:"#FFFFFF",w:["90%","80%","80%","60%","60%"],onClick:function(){window.location.assign("/book-now")}},"Book an appointment now!"))),M.createElement(j.Z,null)))}(0,L.S1)("user_GCaEVt5pBdXq2r2kUScDu"),S.p8.registerPlugin(h.i)},9023:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCA5NCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2Ljk5MDIgNi4xNjc3QzE2LjkzNjEgNS45OTg4MSAxNi44MzMzIDUuODQ5NjYgMTYuNjk0NyA1LjczOUMxNi41NTYxIDUuNjI4MzQgMTYuMzg3OSA1LjU2MTA5IDE2LjIxMTIgNS41NDU3TDExLjI5NDIgNS4xMDM3TDkuMzUxMjQgMC41NDk3MDRDOS4yODE0NyAwLjM4NjU4IDkuMTY1MzMgMC4yNDc1MzIgOS4wMTcyNSAwLjE0OTgxMkM4Ljg2OTE3IDAuMDUyMDkxNyA4LjY5NTY2IDAgOC41MTgyNCAwQzguMzQwODIgMCA4LjE2NzMgMC4wNTIwOTE3IDguMDE5MjIgMC4xNDk4MTJDNy44NzExNCAwLjI0NzUzMiA3Ljc1NTAxIDAuMzg2NTggNy42ODUyNCAwLjU0OTcwNEw1Ljc0MjI0IDUuMTAzN0wwLjgyNDIzOCA1LjU0NTdDMC42NDc2MjUgNS41NjE3MSAwLjQ3OTU5MiA1LjYyOTE5IDAuMzQwOTY5IDUuNzM5NzlDMC4yMDIzNDUgNS44NTAzOCAwLjA5OTIyNjUgNS45OTkyMyAwLjA0NDM5NTEgNi4xNjc4OEMtMC4wMTA0MzYyIDYuMzM2NTIgLTAuMDE0NTY5MSA2LjUxNzU1IDAuMDMyNTA4OSA2LjY4ODUzQzAuMDc5NTg2OSA2Ljg1OTUgMC4xNzU4MDYgNy4wMTI5IDAuMzA5MjM4IDcuMTI5N0w0LjAyNjI0IDEwLjM4ODdMMi45MjYyNCAxNS4yMTU3QzIuODg2NTIgMTUuMzg4NiAyLjg5ODUyIDE1LjU2OTUgMi45NjA3NCAxNS43MzU2QzMuMDIyOTYgMTUuOTAxOCAzLjEzMjY3IDE2LjA0NiAzLjI3NjIgMTYuMTUwNEMzLjQxOTc0IDE2LjI1NDcgMy41OTA3OCAxNi4zMTQ1IDMuNzY4MDUgMTYuMzIyNEMzLjk0NTMyIDE2LjMzMDMgNC4xMjEgMTYuMjg1OSA0LjI3MzI0IDE2LjE5NDdMOC41MTMyNCAxMy42NTk3TDEyLjc1MjIgMTYuMTk0N0MxMi45MDQ1IDE2LjI4NTcgMTMuMDgwMiAxNi4zMyAxMy4yNTc1IDE2LjMyMkMxMy40MzQ3IDE2LjMxNDEgMTMuNjA1NyAxNi4yNTQyIDEzLjc0OTMgMTYuMTVDMTMuODkyOCAxNi4wNDU3IDE0LjAwMjYgMTUuOTAxNiAxNC4wNjUgMTUuNzM1NUMxNC4xMjc0IDE1LjU2OTQgMTQuMTM5NiAxNS4zODg3IDE0LjEwMDIgMTUuMjE1N0wxMy4wMDAyIDEwLjM4ODdMMTYuNzE3MiA3LjEyOTdDMTYuODUwNiA3LjAxMjc4IDE2Ljk0NjYgNi44NTkzMSAxNi45OTM2IDYuNjg4MzFDMTcuMDQwNSA2LjUxNzMxIDE3LjAzNjIgNi4zMzYyOSAxNi45ODEyIDYuMTY3N0gxNi45OTAyWiIgZmlsbD0iIzBBMkY1MyIvPgo8cGF0aCBkPSJNMzYuMTc0MyA2LjE2NzdDMzYuMTIwMiA1Ljk5ODgxIDM2LjAxNzQgNS44NDk2NiAzNS44Nzg4IDUuNzM5QzM1Ljc0MDIgNS42MjgzNCAzNS41NzIgNS41NjEwOSAzNS4zOTUzIDUuNTQ1N0wzMC40NzgzIDUuMTAzN0wyOC41MzUzIDAuNTQ5NzA0QzI4LjQ2NTUgMC4zODY1OCAyOC4zNDk0IDAuMjQ3NTMyIDI4LjIwMTMgMC4xNDk4MTJDMjguMDUzMyAwLjA1MjA5MTcgMjcuODc5NyAwIDI3LjcwMjMgMEMyNy41MjQ5IDAgMjcuMzUxNCAwLjA1MjA5MTcgMjcuMjAzMyAwLjE0OTgxMkMyNy4wNTUyIDAuMjQ3NTMyIDI2LjkzOTEgMC4zODY1OCAyNi44NjkzIDAuNTQ5NzA0TDI0LjkyNjMgNS4xMDM3TDIwLjAwODMgNS41NDU3QzE5LjgzMTcgNS41NjE3MSAxOS42NjM3IDUuNjI5MTkgMTkuNTI1MSA1LjczOTc5QzE5LjM4NjQgNS44NTAzOCAxOS4yODMzIDUuOTk5MjMgMTkuMjI4NSA2LjE2Nzg4QzE5LjE3MzYgNi4zMzY1MiAxOS4xNjk1IDYuNTE3NTUgMTkuMjE2NiA2LjY4ODUzQzE5LjI2MzcgNi44NTk1IDE5LjM1OTkgNy4wMTI5IDE5LjQ5MzMgNy4xMjk3TDIzLjIxMDMgMTAuMzg4N0wyMi4xMTAzIDE1LjIxNTdDMjIuMDcwNiAxNS4zODg2IDIyLjA4MjYgMTUuNTY5NSAyMi4xNDQ4IDE1LjczNTZDMjIuMjA3IDE1LjkwMTggMjIuMzE2NyAxNi4wNDYgMjIuNDYwMyAxNi4xNTA0QzIyLjYwMzggMTYuMjU0NyAyMi43NzQ5IDE2LjMxNDUgMjIuOTUyMSAxNi4zMjI0QzIzLjEyOTQgMTYuMzMwMyAyMy4zMDUxIDE2LjI4NTkgMjMuNDU3MyAxNi4xOTQ3TDI3LjY5NzMgMTMuNjU5N0wzMS45MzYzIDE2LjE5NDdDMzIuMDg4NiAxNi4yODU3IDMyLjI2NDMgMTYuMzMgMzIuNDQxNSAxNi4zMjJDMzIuNjE4OCAxNi4zMTQxIDMyLjc4OTggMTYuMjU0MiAzMi45MzMzIDE2LjE1QzMzLjA3NjkgMTYuMDQ1NyAzMy4xODY3IDE1LjkwMTYgMzMuMjQ5MSAxNS43MzU1QzMzLjMxMTUgMTUuNTY5NCAzMy4zMjM3IDE1LjM4ODcgMzMuMjg0MyAxNS4yMTU3TDMyLjE4NDMgMTAuMzg4N0wzNS45MDEzIDcuMTI5N0MzNi4wMzQ2IDcuMDEyNzggMzYuMTMwNyA2Ljg1OTMxIDM2LjE3NzYgNi42ODgzMUMzNi4yMjQ2IDYuNTE3MzEgMzYuMjIwMyA2LjMzNjI5IDM2LjE2NTMgNi4xNjc3SDM2LjE3NDNaIiBmaWxsPSIjMEEyRjUzIi8+CjxwYXRoIGQ9Ik01NS4zNTg0IDYuMTY3N0M1NS4zMDQzIDUuOTk4ODEgNTUuMjAxNSA1Ljg0OTY2IDU1LjA2MjkgNS43MzlDNTQuOTI0MyA1LjYyODM0IDU0Ljc1NjEgNS41NjEwOSA1NC41Nzk0IDUuNTQ1N0w0OS42NjI0IDUuMTAzN0w0Ny43MTk0IDAuNTQ5NzA0QzQ3LjY0OTYgMC4zODY1OCA0Ny41MzM1IDAuMjQ3NTMyIDQ3LjM4NTQgMC4xNDk4MTJDNDcuMjM3MyAwLjA1MjA5MTcgNDcuMDYzOCAwIDQ2Ljg4NjQgMEM0Ni43MDkgMCA0Ni41MzU1IDAuMDUyMDkxNyA0Ni4zODc0IDAuMTQ5ODEyQzQ2LjIzOTMgMC4yNDc1MzIgNDYuMTIzMiAwLjM4NjU4IDQ2LjA1MzQgMC41NDk3MDRMNDQuMTEwNCA1LjEwMzdMMzkuMTkyNCA1LjU0NTdDMzkuMDE1OCA1LjU2MTcxIDM4Ljg0NzggNS42MjkxOSAzOC43MDkxIDUuNzM5NzlDMzguNTcwNSA1Ljg1MDM4IDM4LjQ2NzQgNS45OTkyMyAzOC40MTI2IDYuMTY3ODhDMzguMzU3NyA2LjMzNjUyIDM4LjM1MzYgNi41MTc1NSAzOC40MDA3IDYuNjg4NTNDMzguNDQ3OCA2Ljg1OTUgMzguNTQ0IDcuMDEyOSAzOC42Nzc0IDcuMTI5N0w0Mi4zOTQ0IDEwLjM4ODdMNDEuMjk0NCAxNS4yMTU3QzQxLjI1NDcgMTUuMzg4NiA0MS4yNjY3IDE1LjU2OTUgNDEuMzI4OSAxNS43MzU2QzQxLjM5MTEgMTUuOTAxOCA0MS41MDA4IDE2LjA0NiA0MS42NDQ0IDE2LjE1MDRDNDEuNzg3OSAxNi4yNTQ3IDQxLjk1ODkgMTYuMzE0NSA0Mi4xMzYyIDE2LjMyMjRDNDIuMzEzNSAxNi4zMzAzIDQyLjQ4OTIgMTYuMjg1OSA0Mi42NDE0IDE2LjE5NDdMNDYuODgxNCAxMy42NTk3TDUxLjEyMDQgMTYuMTk0N0M1MS4yNzI3IDE2LjI4NTcgNTEuNDQ4NCAxNi4zMyA1MS42MjU2IDE2LjMyMkM1MS44MDI5IDE2LjMxNDEgNTEuOTczOSAxNi4yNTQyIDUyLjExNzQgMTYuMTVDNTIuMjYxIDE2LjA0NTcgNTIuMzcwOCAxNS45MDE2IDUyLjQzMzIgMTUuNzM1NUM1Mi40OTU1IDE1LjU2OTQgNTIuNTA3OCAxNS4zODg3IDUyLjQ2ODQgMTUuMjE1N0w1MS4zNjg0IDEwLjM4ODdMNTUuMDg1NCA3LjEyOTdDNTUuMjE4NyA3LjAxMjc4IDU1LjMxNDggNi44NTkzMSA1NS4zNjE3IDYuNjg4MzFDNTUuNDA4NyA2LjUxNzMxIDU1LjQwNDQgNi4zMzYyOSA1NS4zNDk0IDYuMTY3N0g1NS4zNTg0WiIgZmlsbD0iIzBBMkY1MyIvPgo8cGF0aCBkPSJNNzQuNTQyIDYuMTY3N0M3NC40ODc5IDUuOTk4ODEgNzQuMzg1MSA1Ljg0OTY2IDc0LjI0NjUgNS43MzlDNzQuMTA3OSA1LjYyODM0IDczLjkzOTcgNS41NjEwOSA3My43NjMgNS41NDU3TDY4Ljg0NiA1LjEwMzdMNjYuOTAzIDAuNTQ5NzA0QzY2LjgzMzIgMC4zODY1OCA2Ni43MTcxIDAuMjQ3NTMyIDY2LjU2OSAwLjE0OTgxMkM2Ni40MjA5IDAuMDUyMDkxNyA2Ni4yNDc0IDAgNjYuMDcgMEM2NS44OTI2IDAgNjUuNzE5MSAwLjA1MjA5MTcgNjUuNTcxIDAuMTQ5ODEyQzY1LjQyMjkgMC4yNDc1MzIgNjUuMzA2OCAwLjM4NjU4IDY1LjIzNyAwLjU0OTcwNEw2My4yOTQgNS4xMDM3TDU4LjM3NiA1LjU0NTdDNTguMTk5NCA1LjU2MTcxIDU4LjAzMTQgNS42MjkxOSA1Ny44OTI3IDUuNzM5NzlDNTcuNzU0MSA1Ljg1MDM4IDU3LjY1MSA1Ljk5OTIzIDU3LjU5NjIgNi4xNjc4OEM1Ny41NDEzIDYuMzM2NTIgNTcuNTM3MiA2LjUxNzU1IDU3LjU4NDMgNi42ODg1M0M1Ny42MzEzIDYuODU5NSA1Ny43Mjc2IDcuMDEyOSA1Ny44NjEgNy4xMjk3TDYxLjU3OCAxMC4zODg3TDYwLjQ3OCAxNS4yMTU3QzYwLjQzODMgMTUuMzg4NiA2MC40NTAzIDE1LjU2OTUgNjAuNTEyNSAxNS43MzU2QzYwLjU3NDcgMTUuOTAxOCA2MC42ODQ0IDE2LjA0NiA2MC44MjggMTYuMTUwNEM2MC45NzE1IDE2LjI1NDcgNjEuMTQyNSAxNi4zMTQ1IDYxLjMxOTggMTYuMzIyNEM2MS40OTcxIDE2LjMzMDMgNjEuNjcyOCAxNi4yODU5IDYxLjgyNSAxNi4xOTQ3TDY2LjA2NSAxMy42NTk3TDcwLjMwNCAxNi4xOTQ3QzcwLjQ1NjMgMTYuMjg1NyA3MC42MzIgMTYuMzMgNzAuODA5MiAxNi4zMjJDNzAuOTg2NSAxNi4zMTQxIDcxLjE1NzUgMTYuMjU0MiA3MS4zMDEgMTYuMTVDNzEuNDQ0NiAxNi4wNDU3IDcxLjU1NDQgMTUuOTAxNiA3MS42MTY3IDE1LjczNTVDNzEuNjc5MSAxNS41Njk0IDcxLjY5MTQgMTUuMzg4NyA3MS42NTIgMTUuMjE1N0w3MC41NTIgMTAuMzg4N0w3NC4yNjkgNy4xMjk3Qzc0LjQwMjMgNy4wMTI3OCA3NC40OTg0IDYuODU5MzEgNzQuNTQ1MyA2LjY4ODMxQzc0LjU5MjIgNi41MTczMSA3NC41ODggNi4zMzYyOSA3NC41MzMgNi4xNjc3SDc0LjU0MloiIGZpbGw9IiMwQTJGNTMiLz4KPHBhdGggZD0iTTkzLjcyNjEgNi4xNjc3QzkzLjY3MiA1Ljk5ODgxIDkzLjU2OTIgNS44NDk2NiA5My40MzA2IDUuNzM5QzkzLjI5MiA1LjYyODM0IDkzLjEyMzggNS41NjEwOSA5Mi45NDcxIDUuNTQ1N0w4OC4wMzAxIDUuMTAzN0w4Ni4wODcxIDAuNTQ5NzA0Qzg2LjAxNzMgMC4zODY1OCA4NS45MDEyIDAuMjQ3NTMyIDg1Ljc1MzEgMC4xNDk4MTJDODUuNjA1IDAuMDUyMDkxNyA4NS40MzE1IDAgODUuMjU0MSAwQzg1LjA3NjcgMCA4NC45MDMxIDAuMDUyMDkxNyA4NC43NTUxIDAuMTQ5ODEyQzg0LjYwNyAwLjI0NzUzMiA4NC40OTA4IDAuMzg2NTggODQuNDIxMSAwLjU0OTcwNEw4Mi40NzgxIDUuMTAzN0w3Ny41NjAxIDUuNTQ1N0M3Ny4zODM1IDUuNTYxNzEgNzcuMjE1NCA1LjYyOTE5IDc3LjA3NjggNS43Mzk3OUM3Ni45MzgyIDUuODUwMzggNzYuODM1MSA1Ljk5OTIzIDc2Ljc4MDIgNi4xNjc4OEM3Ni43MjU0IDYuMzM2NTIgNzYuNzIxMyA2LjUxNzU1IDc2Ljc2ODMgNi42ODg1M0M3Ni44MTU0IDYuODU5NSA3Ni45MTE2IDcuMDEyOSA3Ny4wNDUxIDcuMTI5N0w4MC43NjIxIDEwLjM4ODdMNzkuNjYyMSAxNS4yMTU3Qzc5LjYyMjQgMTUuMzg4NiA3OS42MzQ0IDE1LjU2OTUgNzkuNjk2NiAxNS43MzU2Qzc5Ljc1ODggMTUuOTAxOCA3OS44Njg1IDE2LjA0NiA4MC4wMTIgMTYuMTUwNEM4MC4xNTU2IDE2LjI1NDcgODAuMzI2NiAxNi4zMTQ1IDgwLjUwMzkgMTYuMzIyNEM4MC42ODEyIDE2LjMzMDMgODAuODU2OCAxNi4yODU5IDgxLjAwOTEgMTYuMTk0N0w4NS4yNDkxIDEzLjY1OTdMODkuNDg4MSAxNi4xOTQ3Qzg5LjY0MDQgMTYuMjg1NyA4OS44MTYxIDE2LjMzIDg5Ljk5MzMgMTYuMzIyQzkwLjE3MDUgMTYuMzE0MSA5MC4zNDE1IDE2LjI1NDIgOTAuNDg1MSAxNi4xNUM5MC42Mjg3IDE2LjA0NTcgOTAuNzM4NCAxNS45MDE2IDkwLjgwMDggMTUuNzM1NUM5MC44NjMyIDE1LjU2OTQgOTAuODc1NSAxNS4zODg3IDkwLjgzNjEgMTUuMjE1N0w4OS43MzYxIDEwLjM4ODdMOTMuNDUzMSA3LjEyOTdDOTMuNTg2NCA3LjAxMjc4IDkzLjY4MjUgNi44NTkzMSA5My43Mjk0IDYuNjg4MzFDOTMuNzc2MyA2LjUxNzMxIDkzLjc3MiA2LjMzNjI5IDkzLjcxNzEgNi4xNjc3SDkzLjcyNjFaIiBmaWxsPSIjMEEyRjUzIi8+Cjwvc3ZnPgo="},7574:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMiIgdmlld0JveD0iMCAwIDIxIDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxsaW5lIHkxPSIxIiB4Mj0iMjEiIHkyPSIxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-getting-started-js-b3d096047d7e03b550bf.js.map