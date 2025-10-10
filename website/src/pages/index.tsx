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
          AI-Powered Development Assistant
        </Heading>
        <p className="hero__subtitle">
          Transform your development workflow with intelligent code generation, 
          automated refactoring, and context-aware assistance. Our AI tools help 
          you write better code faster, understand complex codebases, and automate 
          repetitive tasks.
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
      title="AI Development Assistant - Boost Your Productivity"
      description="AI-powered code generation, intelligent refactoring, and automated development workflows. Enhance your coding experience with our smart development tools.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
