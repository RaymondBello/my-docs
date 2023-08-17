import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Python',
    Svg: require('../../static/img/python.svg').default,
    description: (
      <>
        Developed a series of tools aimed at optimizing the compilation process, as well as simplifying regression testing procedures. 
        Additionally, I composed an array of scripts utilizing JTAG and SWD protocols to enable seamless hardware control and troubleshooting.
      </>
    ),
  },
  {
    title: 'C/C++',
    Svg: require('../../static/img/c.svg').default,
    description: (
      <>
        I've designed, implemented and tested firmware for embedded hard real-time systems, utilizing both FreeRTOS and ChibiOS. 
        Additionally, I've created programs to accurately simulate the dynamic behavior of different control systems, allowing for realistic testing and evaluation in practical environments.
      </>
    ),
  },
  {
    title: 'Javascript/React',
    Svg: require('../../static/img/javascript.svg').default,
    description: (
      <>
        I have designed and developed websites that are adaptable to any device, innovative with customizable interfaces, and have dynamic components. 
        In addition to these websites, I have also created unique user interfaces specifically for unmanned aerial vehicle (UAV) ground stations. 
      </>
    ),
  },
  {
    title: 'Verilog',
    Svg: require('../../static/img/verilog.svg').default,
    description: (
      <>
        I meticulously designed test plans and carried out testing procedures to confirm the reliability of DSP functionality. 
        To enhance the verification process, I established efficient systems and methods, incorporating the SystemVerilog infrastructure and UVM methodologies to structure versatile and effective verification environments.
      </>
    ),
  },
  {
    title: 'Bash',
    Svg: require('../../static/img/gnu-bash.svg').default,
    description: (
      <>
        The process of regression testing can be lengthy and time-consuming, often requiring manual input. To address this, I created customized scripts designed to automate repetitive tasks, thereby increasing overall test efficiency. 
        The scripts were tailored to the specific needs of the company, and were successful in streamlining the testing process while ensuring accuracy and reliability.
      </>
    ),
  },
  {
    title: 'Perl',
    Svg: require('../../static/img/perl.svg').default,
    description: (
      <>
        Having worked with legacy scripts and tools written in Perl, I have gained valuable experience in their preservation and augmentation. 
        My expertise in this area includes identifying areas for improvement, implementing updates without disrupting existing functionality, and ensuring backward compatibility. 
        Through my work, I have successfully maintained and enhanced the functionality of Perl-based systems for clients.
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
