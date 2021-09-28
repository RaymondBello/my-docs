"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[147],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3823:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:3},c="Flight Control Computer",s={unversionedId:"Hermes-rev1/flight_control_computer",id:"Hermes-rev1/flight_control_computer",isDocsHomePage:!1,title:"Flight Control Computer",description:"This MCU is responsible for polling IMU sensors at a high-rate, listening for incoming radio commands and actively stabilizing the aircraft about a desired setpoint.",source:"@site/docs/Hermes-rev1/flight_control_computer.mdx",sourceDirName:"Hermes-rev1",slug:"/Hermes-rev1/flight_control_computer",permalink:"/docs/Hermes-rev1/flight_control_computer",editUrl:"https://github.com/RaymondBello/raymondbello.github.io/tree/main/docs/Hermes-rev1/flight_control_computer.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Power",permalink:"/docs/Hermes-rev1/power"},next:{title:"Overview",permalink:"/docs/AVA-rev2/overview"}},u=[{value:"Block Diagram",id:"block-diagram",children:[]},{value:"Hardware Design",id:"hardware-design",children:[{value:"Power",id:"power",children:[]},{value:"Flash Storage",id:"flash-storage",children:[]},{value:"Crystal Oscillator",id:"crystal-oscillator",children:[]},{value:"Sensors",id:"sensors",children:[]},{value:"Radio",id:"radio",children:[]},{value:"Actuators",id:"actuators",children:[]},{value:"IOs (External Interfaces)",id:"ios-external-interfaces",children:[]}]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flight-control-computer"},"Flight Control Computer"),(0,a.kt)("p",null,"This MCU is responsible for polling IMU sensors at a high-rate, listening for incoming radio commands and actively stabilizing the aircraft about a desired setpoint.",(0,a.kt)("br",null),"\nThe ",(0,a.kt)("i",null,"Flight Control Computer")," (",(0,a.kt)("b",null,"FCC"),") is based on the RP2040 microcontroller clocked @ 133MHz this is fast enough to run the external PID control loop as well handle all the calculations needed for reliable attitude estimation.",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"block-diagram"},"Block Diagram"),(0,a.kt)("p",null,"..."),(0,a.kt)("h2",{id:"hardware-design"},"Hardware Design"),(0,a.kt)("p",null,"The ",(0,a.kt)("b",null,"Flight Control Computer")," consists of 7 main elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"flight_control_computer#power"},"Power")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"flight_control_computer#flash-storage"},"Flash Storage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"flight_control_computer#crystal-oscillator"},"Crystal Oscillator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"flight_control_computer#sensors"},"Sensors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"flight_control_computer#radio"},"Radio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"flight_control_computer#actuators"},"Actuators")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"flight_control_computer#ios-external-interfaces"},"IOs"))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The datasheets for all the components used can be found ",(0,a.kt)("a",{parentName:"p",href:"overview#datasheets"},(0,a.kt)("b",null,"here"))))),(0,a.kt)("h3",{id:"power"},"Power"),(0,a.kt)("p",null,"The RP2040 chip requires two different voltage supplies 3.3V (for I/O's) and 1.1V (for the chips digital core)."),(0,a.kt)("h3",{id:"flash-storage"},"Flash Storage"),(0,a.kt)("h3",{id:"crystal-oscillator"},"Crystal Oscillator"),(0,a.kt)("h3",{id:"sensors"},"Sensors"),(0,a.kt)("h3",{id:"radio"},"Radio"),(0,a.kt)("h3",{id:"actuators"},"Actuators"),(0,a.kt)("h3",{id:"ios-external-interfaces"},"IOs (External Interfaces)"))}d.isMDXComponent=!0}}]);