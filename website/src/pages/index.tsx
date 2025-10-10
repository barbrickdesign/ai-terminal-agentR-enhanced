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
        <Heading as="h1" className="hero__title">
          AI pair programming in your terminal
        </Heading>
        <p className="hero__subtitle">
          Aider lets you pair program with LLMs to start a new project or build on your existing codebase.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/installation">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Documentation
          </Link>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statIcon}>⭐</span>
            <span className={styles.statNumber}>38K</span>
            <span className={styles.statLabel}>GitHub Stars</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statIcon}>📦</span>
            <span className={styles.statNumber}>3.4M</span>
            <span className={styles.statLabel}>Installs</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statIcon}>📈</span>
            <span className={styles.statNumber}>15B</span>
            <span className={styles.statLabel}>Tokens/week</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statIcon}>🏆</span>
            <span className={styles.statNumber}>Top 20</span>
            <span className={styles.statLabel}>OpenRouter</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statIcon}>🔄</span>
            <span className={styles.statNumber}>88%</span>
            <span className={styles.statLabel}>Singularity</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function GettingStarted() {
  return (
    <section className={styles.gettingStarted}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Getting Started</Heading>
        <div className={styles.codeBlock}>
          <pre><code>{`python -m pip install aider-install\naider-install\n\n# Change directory into your codebase\ncd /to/your/project\n\n# DeepSeek\naider --model deepseek --api-key deepseek=<key>\n\n# Claude 3.7 Sonnet\naider --model sonnet --api-key anthropic=<key>\n\n# o3-mini\naider --model o3-mini --api-key openai=<key>`}</code></pre>
        </div>
        <p className={styles.wantMore}>Want more details?</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/installation">
            Installation Guide
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/usage">
            Usage Guide
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: "Aider... blows everything else out of the water hands down, there's no competition whatsoever.",
      author: "— SystemSculpt on Discord"
    },
    {
      text: "It's a cool workflow... Aider's ergonomics are perfect for me.",
      author: "— qup on Hacker News"
    },
    {
      text: "Been using aider as my daily driver for over a year ... I absolutely love the tool, like beyond words.",
      author: "— koleok on Discord"
    },
    {
      text: "Aider ... is the tool to benchmark against.",
      author: "— BeetleB on Hacker News"
    },
    {
      text: "Best agent for actual dev work in existing codebases.",
      author: "— Nick Dobos on X"
    },
    {
      text: "I absolutely love using Aider ... It makes software development feel so much lighter as an experience.",
      author: "— principalideal0 on Discord"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Kind Words From Users</Heading>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className={styles.testimonial}>
              <p>{testimonial.text}</p>
              <cite>{testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoreInfo() {
  return (
    <section className={styles.moreInfo}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h3">More Information</Heading>
            <p>Everything you need to get started and make the most of Aider</p>
            <ul>
              <li><Link to="/docs/installation">Documentation</Link></li>
              <li><Link to="/docs/installation">Installation Guide</Link></li>
              <li><Link to="/docs/usage">Usage Guide</Link></li>
              <li><Link to="/docs/tutorials">Tutorial Videos</Link></li>
              <li><Link to="/docs/llms">Connecting to LLMs</Link></li>
              <li><Link to="/docs/configuration">Configuration Options</Link></li>
              <li><Link to="/docs/troubleshooting">Troubleshooting</Link></li>
              <li><Link to="/docs/faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="col col--6">
            <Heading as="h3">Community & Resources</Heading>
            <p>Connect with other users and find additional resources</p>
            <ul>
              <li><Link to="https://leaderboard.example.com">LLM Leaderboards</Link></li>
              <li><Link to="https://github.com/your-username/your-repo">GitHub Repository</Link></li>
              <li><Link to="https://discord.gg/example">Discord Community</Link></li>
              <li><Link to="/releases">Release notes</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Aider - AI Pair Programming in Your Terminal"
      description="Aider lets you pair program with LLMs to start a new project or build on your existing codebase. Get started with AI-powered development today.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <GettingStarted />
        <Testimonials />
        <MoreInfo />
      </main>
    </Layout>
  );
}
