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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          AI Development Workflow Assistant
        </Heading>
        <p className="hero__subtitle">
          Automate development tasks, streamline workflows, and enhance productivity. 
          Focus on solving problems while AI handles the implementation details.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🚀 Get Started
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs">
            📚 Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="AI Development Workflow Assistant - Automate Tasks"
      description="Automate development tasks and streamline workflows with AI. Enhance productivity and focus on solving complex problems.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
