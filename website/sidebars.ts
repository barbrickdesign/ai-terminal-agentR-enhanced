import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started with AI-Terminal',
        description: 'Learn how to install, configure, and start using AI-Terminal for your development workflow.',
      },
      items: [
        'basic-usage/getting-started',
        'configuration',
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      link: {
        type: 'generated-index',
        title: 'AI-Terminal Core Features',
        description: 'Explore the powerful features that make AI-Terminal your intelligent coding companion.',
      },
      items: [
        'features/interactive-coding',
        'features/smart-commits',
        'features/command-execution',
        'features/context-management',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Usage',
      link: {
        type: 'generated-index',
        title: 'Advanced AI-Terminal Features',
        description: 'Learn advanced techniques and workflows to maximize your productivity with AI-Terminal.',
      },
      items: [
        'advanced/session-management',
      ],
    },
  ],
};

export default sidebars;
