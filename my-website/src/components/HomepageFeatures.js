import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Python',
    Svg: require('../../static/img/python.svg').default,
    description: (
      <>
        Created tools to streamline the compilation process and facilitate regression testing, and wrote scripts to control hardware using JTAG and SWD protocols.
      </>
    ),
  },
  {
    title: 'C/C++',
    Svg: require('../../static/img/c.svg').default,
    description: (
      <>
        Developed firmware for embedded hard real-time systems (FreeRTOS & ChibiOS) and wrote programs to simulate the behavior of various control systems in real-world scenarios.
      </>
    ),
  },
  {
    title: 'Javascript/React',
    Svg: require('../../static/img/javascript.svg').default,
    description: (
      <>
        Created custom, responsive, and dynamic websites, UAV ground station user interfaces, and mobile apps for data and content management.
      </>
    ),
  },
  {
    title: 'Verilog',
    Svg: require('../../static/img/verilog.svg').default,
    description: (
      <>
        Crafted test plans, executed tests, and established verification processes and systems to validate DSP functionality. Additionally, I utilized SystemVerilog/UVM methodologies to structure verification environments.
      </>
    ),
  },
  {
    title: 'Bash',
    Svg: require('../../static/img/gnu-bash.svg').default,
    description: (
      <>
        Created scripts for task automation to increase the efficiency of regression testing.
      </>
    ),
  },
  {
    title: 'Perl',
    Svg: require('../../static/img/perl.svg').default,
    description: (
      <>
        Experience preserving and augmenting legacy scripts and tools written in Perl.
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
