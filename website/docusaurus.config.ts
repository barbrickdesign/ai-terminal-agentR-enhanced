import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as ClientRedirectsOptions} from '@docusaurus/plugin-client-redirects';

const defaultLocale = 'en';

const config: Config = {
    title: 'AI-Terminal',
    tagline: 'Your intelligent command-line companion for AI-powered development',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://docs.micromoving.net',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'coding-hui', // Usually your GitHub org/user name.
    projectName: 'ai-terminal', // Usually your repo name.
    // deploymentBranch: 'main',
    trailingSlash: false,

    onBrokenLinks: 'ignore',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Remove this to remove the "edit this page" links.
                    // editUrl: 'https://github.com/coding-hui/ai-terminal/tree/main/website/',
                    editUrl: ({locale, docPath}) => {
                        return `https://github.com/coding-hui/ai-terminal/tree/main/website/docs/${docPath}`;
                    },
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/coding-hui/ai-terminal/tree/main/website/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'AI-Terminal',
            logo: {
                alt: 'AI-Terminal Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    position: 'left',
                    docId: 'intro',
                    label: 'Documentation',
                },
                // {to: '/blog', label: 'Blog', position: 'left'},
                // right
                {
                    href: 'https://github.com/coding-hui/ai-terminal',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            // links: [
            //     {
            //         title: 'Docs',
            //         items: [
            //             {
            //                 label: 'Tutorial',
            //                 to: '/docs/intro',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'Community',
            //         items: [
            //             {
            //                 label: 'Stack Overflow',
            //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //             },
            //             {
            //                 label: 'Discord',
            //                 href: 'https://discordapp.com/invite/docusaurus',
            //             },
            //             {
            //                 label: 'X',
            //                 href: 'https://x.com/docusaurus',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'More',
            //         items: [
            //             {
            //                 label: 'Blog',
            //                 to: '/blog',
            //             },
            //             {
            //                 label: 'GitHub',
            //                 href: 'https://github.com/coding-hui/ai-terminal',
            //             },
            //         ],
            //     },
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} Coding Hui, Inc.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,

    plugins: [
        [
            'client-redirects',
            {
                fromExtensions: ['html'],
                createRedirects(routePath) {
                    // Redirect to /docs from /docs/introduction (now docs root doc)
                    if (routePath === '/docs' || routePath === '/docs/') {
                        return [`${routePath}/intro`];
                    }
                    return [];
                },
                redirects: [
                    // {
                        // from: ['/docs/support', '/docs/next/support'],
                        // to: '/community/support',
                    // },
                ],
            } satisfies ClientRedirectsOptions,
        ]
    ]
};

export default config;
