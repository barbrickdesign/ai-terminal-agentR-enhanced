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
          AI Code Assistant
        </Heading>
        <p className="hero__subtitle">
          Generate, refactor, and understand code with AI. 
          Accelerate development while maintaining quality and best practices.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🚀 Get Started
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/installation">
            📥 Installation Guide
          </Link>
          <Link
            className="button button--outline button--lg"
            to="https://github.com/your-username/your-repo">
            ⭐ Star on GitHub
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
      title="AI Code Assistant - Accelerate Development"
      description="Generate, refactor, and understand code with AI. Boost productivity while maintaining code quality and best practices.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
