import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Us',
    Svg: require('@site/static/img/AppLogo.svg').default,
    description: (
      <>
      At Vision Industries India, we are more than just agarbatti manufacturers.
      We are driven by a profound passion for preserving age-old traditions while embracing modern techniques
      </>
    ),
  },
  {
    title: 'Vision',
    Svg: require('@site/static/img/AppLogo.svg').default,
    description: (
      <>
      We envision a world where the subtle fragrance of our agarbattis enriches every corner of life, evoking a sense of peace, harmony, and devotion. 
      </>
    ),
  },
  {
    title: 'Mission',
    Svg: require('@site/static/img/AppLogo.svg').default,
    description: (
      <>
      We are dedicated to empowering Indviduals through skill development and employment generation opportunities in the agarbatti industry.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
