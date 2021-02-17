import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import config from '../../config';
import styles from './styles.module.css';

const features = [
  {
    title: 'Dark UI',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        La Danze UI provides a <a href="https://material-ui.com/">Material-ui</a> theme. <br />
        This is a dark theme based on a football club colors (<a href="https://www.staderennais.com/">SRFC</a>). <br />
        Basically red and black 🔴⚫.
      </>
    ),
  },
  {
    title: 'Manage forms',
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Simplify use of <a href="https://react-hook-form.com/">React Hook Form</a>. <br />
        A more clear and concise code made to be used with <a href="https://material-ui.com/">Material-ui</a> fields.
      </>
    ),
  },
  {
    title: 'Show animations',
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Animate routing or appearance very fastly with basic animations (fading, sliding, ...). <br />
        Built with <a href="https://reactrouter.com/web/guides/quick-start">React Router Dom</a> and <a href="https://www.framer.com/motion/">Framer Motion</a>.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img src="img/logo.svg" alt="logo" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.button,
              )}
              to={useBaseUrl(`docs/${config.LA_DANZE_UI_VERSION}`)}>
              Getting Started
            </Link>
            <Link
              className={clsx(
                'button textButton button--lg',
                styles.button,
                styles.textButton
              )}
              to="https://pchmn.github.io/la-danze-ui/demo">
              Demo
            </Link>
            <Link
              className={clsx(
                'button textButton button--lg',
                styles.button,
                styles.textButton
              )}
              to="https://github.com/pchmn/la-danze-ui">
              Github
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div></div>
    </Layout>
  );
}

export default Home;
