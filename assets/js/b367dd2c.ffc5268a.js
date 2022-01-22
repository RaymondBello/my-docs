"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[180],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,k=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return r?a.createElement(k,l(l({ref:t},m),{},{components:r})):a.createElement(k,l({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6116:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],o={sidebar_position:1},s="Overview",c={unversionedId:"Hermes-rev1/overview",id:"Hermes-rev1/overview",title:"Overview",description:"Hermes is designed to function as the base flight control system responsible for guidance, navigation and control of a fixed-wing UAV - but general enough for most other vehicles.",source:"@site/docs/Hermes-rev1/overview.mdx",sourceDirName:"Hermes-rev1",slug:"/Hermes-rev1/overview",permalink:"/docs/Hermes-rev1/overview",editUrl:"https://github.com/RaymondBello/raymondbello.github.io/tree/main/docs/Hermes-rev1/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/docs/intro"},next:{title:"Technical Documentation",permalink:"/docs/Hermes-rev1/technical_docs"}},m=[{value:"Aims",id:"aims",children:[],level:2},{value:"Hardware Requirements",id:"hardware-requirements",children:[],level:2},{value:"Hardware Specification",id:"hardware-specification",children:[{value:"Bill of Materials",id:"bill-of-materials",children:[],level:3},{value:"Datasheets",id:"datasheets",children:[],level:3},{value:"Block Diagram",id:"block-diagram",children:[],level:3}],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],p={toc:m};function d(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Hermes is designed to function as the base flight control system responsible for guidance, navigation and control of a fixed-wing UAV - but general enough for most other vehicles."),(0,i.kt)("h2",{id:"aims"},"Aims"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Design a complete flight control system from scratch (hardware, software, control systems, navigation algorithms, ground control station, etc..)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Goal"),": Complete system consisting of standardised hardware and basic but robust software framework."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Focus on developing and testing novel algorithms - not writing low-level code!"))),(0,i.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Standard set of sensors (e.g. IMU, barometer & airspeed sensor)"),(0,i.kt)("li",{parentName:"ul"},"Expansion and interface capabilities via various IOs."),(0,i.kt)("li",{parentName:"ul"},"Power distribution for servos."),(0,i.kt)("li",{parentName:"ul"},"Processing power."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Affordability!"))),(0,i.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,i.kt)("h3",{id:"bill-of-materials"},"Bill of Materials"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"S/N"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Component"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Qty"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Unit Price (CAD)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Price (CAD)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("b",null,"RP2040")),(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("b",null,"Flight Control Computer"),": Main MCU for polling IMU and Radio PPM for control loop ",(0,i.kt)("br",null),(0,i.kt)("b",null,"Navigation Computer"),": Secondary MCU handling onboard guidance & navigation algorithms + extras"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$1.45"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$2.90")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("b",null,"Invensense MPU6050")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6DOF MEMS IMU (Gyroscope + Accelerometer)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$3.50"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$3.50")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("b",null,"NXP MPL3115A2")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Absolute pressure sensor with an I\xb2C digital interface"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$3.50"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$3.50")))),(0,i.kt)("h3",{id:"datasheets"},"Datasheets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://datasheets.raspberrypi.org/rp2040/rp2040-datasheet.pdf"},(0,i.kt)("b",null,"RP2040")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dual ARM Cortex-M0+ @ 133MHz"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://datasheet.lcsc.com/lcsc/1811071024_TDK-InvenSense-MPU-6050_C24112.pdf"},(0,i.kt)("b",null,"MPU6050")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"6-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer, and a Digital Motion Processor\u2122 (DMP)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nxp.com/docs/en/data-sheet/MPL3115A2.pdf"},(0,i.kt)("b",null,"MPL3115A2")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"I\xb2C precision pressure sensor with altimetry")))),(0,i.kt)("h3",{id:"block-diagram"},"Block Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hermes Block Diagram",src:r(523).Z})),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"A list of a few things to complete:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","[100%]"," Telemetry and messaging protocol."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","[100%]"," Aircraft modelling, control system design and implementation."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","[100%]"," Higher-level firmware (state machine, guidance algorithms, etc.)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","[100%]"," Low-level firmware (e.g. device drivers and interfaces)."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","[100%]"," State Estimation (Madgwick & Kalman filters)."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","[100%]"," Ground control station.")),(0,i.kt)("br",null)," ",(0,i.kt)("br",null)," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Last Updated: ",(0,i.kt)("code",null,"Today")))}d.isMDXComponent=!0},523:function(e,t,r){t.Z=r.p+"assets/images/hermes_block-a7a8edb6816e894a15e3fe53b5970156.png"}}]);