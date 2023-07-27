import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import challenges_example from '@site/static/img/challenges_example.png'
import chart_example from '@site/static/img/chart_example.png'

const FeatureList = [
  {
    title: 'Easy to Use',
    // img: challenges_example,
    description: (
      <>
        CTFCafe was designed from the ground up to be easily installed and
        used to get your CTF up and running quickly.
      </>
    ),
  },
  {
    title: 'Efficient',
    // img: chart_example,
    description: (
      <>
        CTFCafe lets you focus on your users, and challenges. Not the amount of RAM needed to run it or if it will crash at the start.
      </>
    ),
  },
  {
    title: 'Customizable',
    // img: chart_example,
    description: (
      <>
        CTFCafe is customizable in many ways, it makes it easy to have a whole new look for your CTF and stand out.
      </>
    ),
  },
  {
    title: 'Plugins (Soon)',
    // img: chart_example,
    description: (
      <>
        More to come...
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} />
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
