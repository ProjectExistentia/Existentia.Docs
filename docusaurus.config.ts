import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const orgName = 'ProjectExistentia';
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
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: '/docs/visao', to: '/docs/projeto/visao'},
          {from: '/docs/visao/diagramas', to: '/docs/projeto/diagramas'},
          {from: '/docs/rf', to: '/docs/requisitos/RF'},
          {from: '/docs/rnf', to: '/docs/requisitos/RNF'},
          {from: '/docs/rn', to: '/docs/requisitos/RN'},
          {from: '/docs/uc', to: '/docs/requisitos/UC'},
          {from: '/docs/er', to: '/docs/modelagem/ER'},
          {from: '/docs/adr', to: '/docs/desenvolvimento/ADR'},
          {
            from: '/docs/adr/0001-arquitetura-e-stack',
            to: '/docs/desenvolvimento/ADR/ADR-0001-arquitetura-e-stack',
          },
          {
            from: '/docs/adr/0002-estrutura-de-repositorios',
            to: '/docs/desenvolvimento/ADR/ADR-0002-estrutura-de-repositorios',
          },
          {
            from: '/docs/adr/0003-workflow-de-desenvolvimento',
            to: '/docs/desenvolvimento/ADR/ADR-0003-workflow-de-desenvolvimento',
          },
          {from: '/docs/templates/index', to: '/docs/gestao/artefatos'},
          {from: '/docs/templates', to: '/docs/gestao/artefatos'},
          {from: '/docs/templates/template-adr', to: '/docs/gestao/templates/template-adr'},
          {from: '/docs/templates/template-rf', to: '/docs/gestao/templates/template-rf'},
          {from: '/docs/templates/template-rnf', to: '/docs/gestao/templates/template-rnf'},
          {from: '/docs/templates/template-rn', to: '/docs/gestao/templates/template-rn'},
          {from: '/docs/templates/template-uc', to: '/docs/gestao/templates/template-uc'},
          {from: '/docs/templates/template-er', to: '/docs/gestao/templates/template-er'},
        ],
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
              to: '/docs/projeto/visao',
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
              href: 'https://github.com/ProjectExistentia/Existentia',
            },
            {
              label: 'Existentia.Lore',
              href: 'https://github.com/ProjectExistentia/Existentia.Lore',
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
