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
        Envision a world where the subtle
        fragrances of our agarbattis enrich every
        facet of life, invoking feelings of peace,
        harmony, and devotion
      </>
    ),
  },
  {
    title: 'Mission',
    Svg: require('@site/static/img/AppLogo.svg').default,
    description: (
      <>
        Our dedicated mission is to empower
        individuals through skill development and the
        creation of employment opportunities within
        the agarbatti industry
      </>
    ),
  }
];

function Feature({ Svg, title, description }) {
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
