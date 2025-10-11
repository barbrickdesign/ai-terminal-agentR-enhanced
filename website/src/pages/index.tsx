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
          <div className={styles.welcomeMessage}>
            <span className={styles.wave}>👋</span> Hello there!
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            Let's make development 
            <span className={styles.highlight}> delightful</span> together
          </Heading>
          <p className={styles.heroSubtitle}>
            Your friendly AI assistant that helps automate tasks, streamline workflows, 
            and make your coding experience more enjoyable. Spend less time on repetitive work 
            and more time creating amazing things.
          </p>
          <div className={styles.featureIcons}>
            <div className={styles.featureIcon}>⚡</div>
            <div className={styles.featureIcon}>🤖</div>
            <div className={styles.featureIcon}>🎯</div>
            <div className={styles.featureIcon}>✨</div>
          </div>
          <div className={styles.buttons}>
            <Link
              className={`button button--primary button--lg ${styles.ctaButton}`}
              to="/docs/intro">
              Let's Get Started
            </Link>
            <Link
              className={`button button--secondary button--lg ${styles.secondaryButton}`}
              to="/docs">
              Learn More
            </Link>
          </div>
          <div className={styles.friendlyNote}>
            No setup required • Free to try • Designed for developers like you
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
