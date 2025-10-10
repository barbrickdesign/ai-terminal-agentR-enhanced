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
      label: 'Installation',
      link: {
        type: 'generated-index',
        title: 'Installation Guide',
        description: 'Learn how to install AI-Terminal on your system.',
      },
      items: [
        'installation/quick-start',
        'installation/system-requirements',
        'installation/advanced-installation',
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
        // 'usage/interactive-coding',
        // 'usage/smart-commits',
        // 'usage/command-execution',
        // 'usage/context-management',
        // 'usage/session-management',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      link: {
        type: 'generated-index',
        title: 'Configuration Guide',
        description: 'Customize AI-Terminal to fit your needs with comprehensive configuration options.',
      },
      items: [
        'configuration/basic-configuration',
        // 'configuration/model-settings',
        // 'configuration/advanced-settings',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Examples',
    //   link: {
    //     type: 'generated-index',
    //     title: 'Examples and Use Cases',
    //     description: 'Practical examples and real-world use cases for AI-Terminal.',
    //   },
    //   items: [
    //     'examples/common-workflows',
    //     'examples/code-generation',
    //     'examples/git-integration',
    //     'examples/debugging-assistance',
    //   ],
    // },
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
        // 'troubleshooting/performance-issues',
        // 'troubleshooting/connectivity-problems',
      ],
    },
    // {
    //   type: 'doc',
    //   id: 'faq',
    //   label: 'FAQ',
    // },
    // {
    //   type: 'doc',
    //   id: 'changelog',
    //   label: 'Changelog',
    // },
  ],
};

export default sidebars;
