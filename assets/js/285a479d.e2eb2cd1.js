"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[653],{8645:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return d},toc:function(){return u},default:function(){return m}});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),s=["components"],r={slug:3,title:"Bits&Bytes-0x03",author:"Ray Bello",author_title:"E.E Engineer",author_url:"https://rayb.tech",author_image_url:"https://avatars.githubusercontent.com/u/61327086?s=400&u=a272b1f5bd6fe11ae11a33668b4b469864bdc003&v=4",tags:["electronics","flight-control","embedded-systems"]},o="Bits&Bytes:*0x03*",c={permalink:"/blog/3",editUrl:"https://github.com/RaymondBello/raymondbello.github.io/tree/main/blog/blog/2021-09-03-0x03.md",source:"@site/blog/2021-09-03-0x03.md",title:"Bits&Bytes-0x03",description:"IMU Configuration",date:"2021-09-03T00:00:00.000Z",formattedDate:"September 3, 2021",tags:[{label:"electronics",permalink:"/blog/tags/electronics"},{label:"flight-control",permalink:"/blog/tags/flight-control"},{label:"embedded-systems",permalink:"/blog/tags/embedded-systems"}],readingTime:1.775,truncated:!1,authors:[{name:"Ray Bello",title:"E.E Engineer",url:"https://rayb.tech",imageURL:"https://avatars.githubusercontent.com/u/61327086?s=400&u=a272b1f5bd6fe11ae11a33668b4b469864bdc003&v=4"}],nextItem:{title:"Bits&Bytes-0x02",permalink:"/blog/2"}},d={authorsImageUrls:[void 0]},u=[{value:"IMU Configuration",id:"imu-configuration",children:[{value:"Sequence",id:"sequence",children:[]},{value:"Validating Sequence",id:"validating-sequence",children:[]}]},{value:"Tasks contd.",id:"tasks-contd",children:[{value:"MPU9250 IMU Driver",id:"mpu9250-imu-driver",children:[]},{value:"Attitude Estimation",id:"attitude-estimation",children:[]}]},{value:"Defines Used",id:"defines-used",children:[]}],_={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,i.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"imu-configuration"},"IMU Configuration"),(0,l.kt)("h3",{id:"sequence"},"Sequence"),(0,l.kt)("p",null,"Added a step to select the internal 8Mhz oscillator as the clock source"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'// Set MPU9250 Clock Source to use the X Gyro for reference, which is slightly better than the default internal clock source.\n// +-----+-----+-----+-----+-----+-----+-----+-----+\n// |  7  |  6  |  5  |  4  |  3  |  2  |  1  |  0  |\n// +-----+-----+-----+-----+-----+-----+-----+-----+\n// |     |     |     |           |   CLKSEL[2:0]   |\n// +-----+-----+-----+-----+-----+-----+-----+-----+\nuint8_t buf[2] = {MPU9250_RA_PWR_MGMT_1, MPU9250_CLOCK_PLL_XGYRO};\ni2c_write_blocking(i2c_default, this->i2c_addr, buf, 2, false);\n#if defined IMU_VERBOSE_CONFIG\n    printf("[IMU][CONFIG] wrote %d to MPU9250_RA_PWR_MGMT_1:%d\\n", buf[1], MPU9250_RA_PWR_MGMT_1);\n#endif\nsleep_ms(DELAY_BETWEEN_WR_MS);\n')),(0,l.kt)("p",null,"Added full scale range sensitivity selection for both accelerometer and gyroscope. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'// Set Gyro full scale range\n// +-----+-----+-----+-----+-----+-----+-----+-----+\n// |  7  |  6  |  5  |  4  |  3  |  2  |  1  |  0  |\n// +-----+-----+-----+-----+-----+-----+-----+-----+\n// |     |     |     |FS_SEL[1:0]|     |     |     |\n// +-----+-----+-----+-----+-----+-----+-----+-----+\nbuf[0] = MPU9250_GYRO_CONFIG;\nbuf[1] = (uint8_t)setting.gyro_fs_sel << 3;\ni2c_write_blocking(i2c_default, this->i2c_addr, buf, 2, false);\n#if defined IMU_VERBOSE_CONFIG\n    printf("[IMU][CONFIG] wrote %d to MPU9250_GYRO_CONFIG:%d\\n", buf[1], MPU9250_GYRO_CONFIG);\n#endif\nsleep_ms(DELAY_BETWEEN_WR_MS);\n\n// Set Accel full scale range\n// +-----+-----+-----+-----+-----+-----+-----+-----+\n// |  7  |  6  |  5  |  4  |  3  |  2  |  1  |  0  |\n// +-----+-----+-----+-----+-----+-----+-----+-----+\n// |     |     |     |AFS_SEL[1:0]|    |     |     |\n// +-----+-----+-----+-----+-----+-----+-----+-----+\nbuf[0] = MPU9250_ACCEL_CONFIG;\nbuf[1] = (uint8_t)setting.accel_fs_sel << 3;\ni2c_write_blocking(i2c_default, this->i2c_addr, buf, 2, false);\n#if defined IMU_VERBOSE_CONFIG\n    printf("[IMU][CONFIG] wrote %d to MPU9250_ACCEL_CONFIG:%d\\n", buf[1], MPU9250_ACCEL_CONFIG);\n#endif\nsleep_ms(DELAY_BETWEEN_WR_MS);\n')),(0,l.kt)("h3",{id:"validating-sequence"},"Validating Sequence"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"[IMU][CONFIG] wrote 1 to MPU9250_RA_PWR_MGMT_1:107\n[IMU][CONFIG] wrote 0 to MPU9250_GYRO_CONFIG:27         // GYRO_250DPS\n[IMU][CONFIG] wrote 0 to MPU9250_ACCEL_CONFIG:28        // ACCEL_2G\n")),(0,l.kt)("h2",{id:"tasks-contd"},"Tasks contd."),(0,l.kt)("h3",{id:"mpu9250-imu-driver"},"MPU9250 IMU Driver"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("strong",{parentName:"li"},"Done"),": Implement full scale range and gyro sensitivity selection, currently using default settings."),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("strong",{parentName:"li"},"Done"),": Add hardware reset & calibration sequence")),(0,l.kt)("h3",{id:"attitude-estimation"},"Attitude Estimation"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("strong",{parentName:"li"},"In-Progress"),": Refactor the existing attitude estimation algorithm with modularity/flexibility in mind.")),(0,l.kt)("h2",{id:"defines-used"},"Defines Used"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"#define DELAY_BETWEEN_WR_MS 50          // Delay between I2C writes during configuration\n#define MPU9250_GYRO_CONFIG 0x1B        // Gyro FS_SEL address\n#define MPU9250_ACCEL_CONFIG 0x1C       // Accel AFS_SEL address\n#define MPU9250_CLOCK_PLL_XGYRO 0x01    // Xgyro pll clock \n#define MPU9250_RA_PWR_MGMT_1 0x6B      // Power management register 1 address\n")))}m.isMDXComponent=!0}}]);