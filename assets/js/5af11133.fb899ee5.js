"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[762],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6668:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return m},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:1,title:"Bits&Bytes-0x01",author:"Ray Bello",author_title:"E.E Engineer",author_url:"https://rayb.tech",author_image_url:"https://avatars.githubusercontent.com/u/61327086?s=400&u=a272b1f5bd6fe11ae11a33668b4b469864bdc003&v=4",tags:["electronics","flight-control","embedded-systems"]},s="Bits&Bytes:*0x01*",c={permalink:"/blog/1",editUrl:"https://github.com/RaymondBello/raymondbello.github.io/tree/main/blog/blog/2021-09-01-0x01.md",source:"@site/blog/2021-09-01-0x01.md",title:"Bits&Bytes-0x01",description:"The system is currently in a stable state with regards to various sensor drivers and core flight logic.",date:"2021-09-01T00:00:00.000Z",formattedDate:"September 1, 2021",tags:[{label:"electronics",permalink:"/blog/tags/electronics"},{label:"flight-control",permalink:"/blog/tags/flight-control"},{label:"embedded-systems",permalink:"/blog/tags/embedded-systems"}],readingTime:.355,truncated:!1,authors:[{name:"Ray Bello",title:"E.E Engineer",url:"https://rayb.tech",imageURL:"https://avatars.githubusercontent.com/u/61327086?s=400&u=a272b1f5bd6fe11ae11a33668b4b469864bdc003&v=4"}],prevItem:{title:"Bits&Bytes-0x02",permalink:"/blog/2"}},u={authorsImageUrls:[void 0]},m=[{value:"Current tasks",id:"current-tasks",children:[]}],p={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The system is currently in a stable state with regards to various sensor drivers and core flight logic.\n",(0,o.kt)("em",{parentName:"p"},"Although")," there are a lot of tuning modifications that need to be added to the attitude estimation madgwick filter to make it flight worthy..."),(0,o.kt)("h2",{id:"current-tasks"},"Current tasks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MPU9250 IMU Driver ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"In-Progress"),": Implement full scale range and gyro sensitivity selection, currently using default settings."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Outstanding"),": Add hardware reset & calibration sequence")))))}f.isMDXComponent=!0}}]);