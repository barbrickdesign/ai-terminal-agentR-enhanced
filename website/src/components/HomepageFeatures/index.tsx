import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cloud and local LLMs',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Aider works best with Claude 3.7 Sonnet, DeepSeek R1 & Chat V3, OpenAI o1, o3-mini & GPT-4o, but can connect to almost any LLM, including local models.
      </>
    ),
  },
  {
    title: 'Maps your codebase',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Aider makes a map of your entire codebase, which helps it work well in larger projects.
      </>
    ),
  },
  {
    title: '100+ code languages',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Aider works with most popular programming languages: python, javascript, rust, ruby, go, cpp, php, html, css, and dozens more.
      </>
    ),
  },
  {
    title: 'Git integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Aider automatically commits changes with sensible commit messages. Use familiar git tools to easily diff, manage and undo AI changes.
      </>
    ),
  },
  {
    title: 'In your IDE',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Use aider from within your favorite IDE or editor. Ask for changes by adding comments to your code and aider will get to work.
      </>
    ),
  },
  {
    title: 'Images & web pages',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Add images and web pages to the chat to provide visual context, screenshots, reference docs, etc.
      </>
    ),
  },
  {
    title: 'Voice-to-code',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Speak with aider about your code! Request new features, test cases or bug fixes using your voice and let aider implement the changes.
      </>
    ),
  },
  {
    title: 'Linting & testing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Automatically lint and test your code every time aider makes changes. Aider can fix problems detected by your linters and test suites.
      </>
    ),
  },
  {
    title: 'Copy/paste to web chat',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Aider works best with LLM APIs, but it can also work an LLM via its web chat interface. Aider streamlines copy/pasting code back and forth with a browser.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
