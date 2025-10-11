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
        title: 'Getting Started',
        description: 'Get up and running with AI-Terminal quickly.',
      },
      items: [
        'installation/system-requirements',
        'installation/advanced-installation',
        'configuration/basic-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      link: {
        type: 'generated-index',
        title: 'Using AI-Terminal',
        description: 'Learn how to use AI-Terminal effectively in your daily workflow.',
      },
      items: [
        'usage/basic-commands',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
        title: 'Troubleshooting Guide',
        description: 'Find solutions to common issues and problems.',
      },
      items: [
        'troubleshooting/common-errors',
      ],
    },
  ],
};

export default sidebars;
