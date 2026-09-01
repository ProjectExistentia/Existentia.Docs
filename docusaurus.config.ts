import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const orgName = 'TheSirLeaf';
const projectName = 'Existentia.Docs';

const config: Config = {
  title: 'Existentia',
  tagline: 'Documentação de engenharia do projeto Existentia',
  favicon: 'img/favicon.ico',

  url: `https://${orgName}.github.io`,
  baseUrl: `/${projectName}/`,

  organizationName: orgName,
  projectName: projectName,

  onBrokenLinks: 'throw',

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  markdown: {
    mermaid: true,
  },

  themes: [
    'docusaurus-theme-openapi-docs',
    '@docusaurus/theme-mermaid',
    'docusaurus-theme-plantuml',
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'default',
        config: {
          jogo: {
            specPath: 'openapi/jogo.yaml',
            outputDir: 'docs/api/jogo',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${orgName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/${orgName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Existentia',
      logo: {
        alt: 'Existentia Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'engenhariaSidebar',
          position: 'left',
          label: 'Engenharia',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: `https://github.com/${orgName}/${projectName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Engenharia',
              to: '/docs/visao',
            },
            {
              label: 'API',
              to: '/docs/api/jogo/existentia-api',
            },
          ],
        },
        {
          title: 'Repositórios',
          items: [
            {
              label: 'Existentia (monorepo)',
              href: 'https://github.com/TheSirLeaf/Existentia',
            },
            {
              label: 'Existentia.Lore',
              href: 'https://github.com/TheSirLeaf/Existentia.Lore',
            },
            {
              label: 'Existentia.Docs',
              href: `https://github.com/${orgName}/${projectName}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Existentia. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    plantuml: {
      renderCodeBlockPuml: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
