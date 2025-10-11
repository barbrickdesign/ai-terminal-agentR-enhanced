import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            AI Development Assistant
          </Heading>
          <p className={styles.heroSubtitle}>
            Automate tasks and streamline workflows. 
            Focus on creating while we handle the routine work.
          </p>
          <div className={styles.buttons}>
            <Link
              className={`button button--primary button--lg ${styles.ctaButton}`}
              to="/docs/intro">
              Get Started
            </Link>
            <Link
              className={`button button--secondary button--lg ${styles.secondaryButton}`}
              to="/docs">
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Your Friendly AI Development Assistant - Make Coding Enjoyable"
      description="A friendly AI assistant that helps automate development tasks and streamline workflows. Make coding more enjoyable and productive.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
