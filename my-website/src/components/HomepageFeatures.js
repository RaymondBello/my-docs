import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Python',
    Svg: require('../../static/img/python.svg').default,
    description: (
      <>
        Designed scripts & tools for compile automation and regression testing, GUI's using PyQt5 & PySide2 and hardware testing scripts using UART or I2C protocols.
      </>
    ),
  },
  {
    title: 'C/C++',
    Svg: require('../../static/img/c.svg').default,
    description: (
      <>
        Wrote firmware for embedded real-time systems (FreeRTOS & ChibiOS). Wrote programs to simulate the dynamics of various control systems.
      </>
    ),
  },
  {
    title: 'Javascript/React',
    Svg: require('../../static/img/javascript.svg').default,
    description: (
      <>
        Developed responsive dynamic websites for data/content management, UAV ground station UI's and mobile applications.
      </>
    ),
  },
  {
    title: 'Verilog',
    Svg: require('../../static/img/verilog.svg').default,
    description: (
      <>
        Experience using SystemVerilog for verification of digital circuits at the RTL level. Developed interfaces and modules for the top-level testbench.
      </>
    ),
  },
  {
    title: 'Bash',
    Svg: require('../../static/img/gnu-bash.svg').default,
    description: (
      <>
        Designed scripts for task automation to improve regression testing time/efficiency.
      </>
    ),
  },
  {
    title: 'Perl',
    Svg: require('../../static/img/perl.svg').default,
    description: (
      <>
        Experience maintaining and improving legacy scripts and tools written in Perl.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className="text--center">Skills</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
