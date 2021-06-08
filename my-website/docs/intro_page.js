import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './intro_styles.module.css';


const HardwareList = [
   {
      title: 'HIRO v1',
      Svg: require('./_imgs/t523.svg').default,
      description: (
        <>
          <i>Fixed-wing Flight Computer SoM</i>
        </>
      ),
      path: ''
   },
   {
      title: 'AVA v3',
      Svg: require('./_imgs/electron.svg').default,
      description: (
        <>
          <i>UAV Flight Controller</i>
        </>
       ),
       path: '/docs/AVA-rev2/overview'
    },
   {
     title: 'AVA v2',
     Svg: require('./_imgs/argon.svg').default,
     description: (
       <>
         <i>UAV Flight Controller</i>
       </>
      ),
      path: '/docs/AVA-rev2/overview'
   },
   {
      title: 'AVA v1',
      Svg: require('./_imgs/AVA_r1_1.svg').default,
      description: (
        <>
          <i>UAV Flight Controller proto-board</i>
        </>
      ),
      path: '/docs/AVA-rev1/overview'
   }, 
];

function HardwareDevice({Svg, title, description, path}) {
   return (
      <div className={clsx('col col--3')}>
       <div className="text--center"
            >
         <Svg className={styles.featureSvg} alt={title} />
       </div>
       <div className="text--center padding-horiz--md">
            <Link className="button button--primary button--m"
            to={path}
            >{title}</Link  >
            <p>{description}</p>
       </div>
     </div>
   );
 }

export default function HardwarePrototypes() {
   return (
     <section className={styles.features}>
       <div className="container">
         <div className="row">
           {HardwareList.map((props, idx) => (
             <HardwareDevice key={idx} {...props} />
           ))}
         </div>
       </div>
     </section>
   );
 }