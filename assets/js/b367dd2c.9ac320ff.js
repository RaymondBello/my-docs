(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[180],{845:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:1},s={unversionedId:"Hermes-rev1/overview",id:"Hermes-rev1/overview",isDocsHomePage:!1,title:"Introduction",description:"This embedded system is designed to function as the base flight controller responsible for reading sensors and controlling onboard actuators at approx 100Hz.",source:"@site/docs/Hermes-rev1/overview.mdx",sourceDirName:"Hermes-rev1",slug:"/Hermes-rev1/overview",permalink:"/docs/Hermes-rev1/overview",editUrl:"https://github.com/RaymondBello/raymondbello.github.io/tree/main/docs/Hermes-rev1/overview.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Project Documentation",permalink:"/docs/intro"},next:{title:"Overview",permalink:"/docs/AVA-rev2/overview"}},d=[{value:"Hardware Specification",id:"hardware-specification",children:[{value:"Bill of Materials",id:"bill-of-materials",children:[]},{value:"Datasheets",id:"datasheets",children:[]},{value:"Block Diagram",id:"block-diagram",children:[]}]}],p={toc:d};function m(t){var e=t.components,o=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This embedded system is designed to function as the base flight controller responsible for reading sensors and controlling onboard actuators at approx 100Hz. ",(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,i.kt)("h3",{id:"bill-of-materials"},"Bill of Materials"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"S/N"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Component"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Qty"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Unit Price (CAD)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Price (CAD)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("b",null,"RP2040")),(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("b",null,"Primary"),": Main MCU for polling IMU and Radio PPM for control loop ",(0,i.kt)("br",null),(0,i.kt)("b",null,"Secondary"),": Secondary MCU handling onboard guidance & navigation algorithms + extras"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$1.45"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$2.90")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("b",null,"Invensense MPU6050")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6DOF MEMS IMU (Gyroscope + Accelerometer)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$3.50"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$3.50")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("b",null,"NXP MPL3115A2")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Absolute pressure sensor with an I\xb2C digital interface"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$3.50"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$3.50")))),(0,i.kt)("h3",{id:"datasheets"},"Datasheets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://datasheets.raspberrypi.org/rp2040/rp2040-datasheet.pdf"},(0,i.kt)("b",null,"RP2040")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dual ARM Cortex-M0+ @ 133MHz"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://datasheet.lcsc.com/lcsc/1811071024_TDK-InvenSense-MPU-6050_C24112.pdf"},(0,i.kt)("b",null,"MPU6050")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"6-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer, and a Digital Motion Processor\u2122 (DMP)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nxp.com/docs/en/data-sheet/MPL3115A2.pdf"},(0,i.kt)("b",null,"MPL3115A2")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"I\xb2C precision pressure sensor with altimetry")))),(0,i.kt)("h3",{id:"block-diagram"},"Block Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hermes Block Diagram",src:a(5550).Z})),(0,i.kt)("br",null)," ",(0,i.kt)("br",null)," ",(0,i.kt)("br",null)," ",(0,i.kt)("br",null)," ",(0,i.kt)("br",null)," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Last Updated: ",(0,i.kt)("code",null,"Today")))}m.isMDXComponent=!0},5550:function(t,e,a){"use strict";e.Z=a.p+"assets/images/hermes_block-1f8d4564ad1f8827d8c3f34632d337d8.png"}}]);