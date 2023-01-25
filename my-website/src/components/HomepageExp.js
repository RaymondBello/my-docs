import React from 'react';
import clsx from 'clsx';
import styles from './HomepageExp.module.css';

const ExperienceList = [
    {
      title: 'HBM3 Verification Engineer',
      Svg: require('../../static/img/synopsys.svg').default,
      description: (
        <>
          Jan 2021 - Present
        </>
      ),
    },
    {
      title: 'ASIC Digital Verification Engineer CO-OP',
      Svg: require('../../static/img/ciena.svg').default,
      description: (
        <>
          Jan 2020 - July 2020
        </>
      ),
    },
    {
      title: 'Printing Services Technician',
      Svg: require('../../static/img/TPH.svg').default,
      description: (
        <>
          Summer 2019
        </>
      ),
    },
    {
      title: 'Technical Sales Associate',
      Svg: require('../../static/img/incredible-connection.svg').default,
      description: (
        <>
          Summer 2017 & 2018
        </>
      ),
    },
    {
      title: 'BASc Electrical Engineering and Computer Technology',
      Svg: require('../../static/img/uottawa.svg').default,
      description: (
        <>
          2015 - 2020
        </>
      ),
    },
    {
      title: 'Ontario Secondary School Diploma',
      Svg: require('../../static/img/soc.svg').default,
      description: (
        <>
          2015
        </>
      ),
    },
];
  
function Experience({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg2} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageExp() {
    return (
        <section className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <br/>
                <h1 className="text--center">Experience & Education</h1>
                <div className="row">
                    {ExperienceList.map((props, idx) => (
                        <Experience key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
