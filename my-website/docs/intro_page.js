import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './intro_styles.module.css';


const HardwareList = [
  {
    title: "Hermes",
    Svg: require("./_imgs/hermes.svg").default,
    description: (
      <>
        <i>
          UAS Flight Control System
          <br />
        </i>
      </>
    ),
    path: "/docs/Hermes-rev1/overview",
  },
  {
    title: "AVA v2",
    Svg: require("./_imgs/ava_v2_top.svg").default,
    description: (
      <>
        <i>Drone Flight Controller</i>
      </>
    ),
    path: "/docs/AVA-rev2/overview",
  },
  {
    title: "AVA v1",
    Svg: require("./_imgs/ava_r1_top.svg").default,
    description: (
      <>
        <i>Drone Flight Controller</i>
      </>
    ),
    path: "/docs/AVA-rev1/overview",
  },
];

function HardwareDevice({Svg, title, description, path}) {
   return (
      <div className={clsx('col')}>
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