const config = require('./config');

module.exports = {
  title: 'La Danze UI',
  tagline: 'React library that provides a clean UI and facilitate animations and building forms',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/la-danze-ui/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: `La Danze UI`,
      logo: {
        alt: 'La Danze UI logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: `docs/${config.LA_DANZE_UI_VERSION}`,
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {
        //   type: 'docsVersion',
        //   position: 'left',
        //   // to: "/path // by default, link to active/latest version
        //   // label: "label" // by default, show active/latest version label
        // },
        {
          href: 'https://pchmn.github.io/la-danze-ui/demo',
          label: 'Demo',
          position: 'right',
        },
        {
          href: 'https://github.com/pchmn/la-danze-ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} La Danze UI Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/pchmn/la-danze-ui/edit/main/packages/doc/',
          lastVersion: "current",
          versions: {
            current: {
              label: config.LA_DANZE_UI_VERSION,
              path: config.LA_DANZE_UI_VERSION
            }
          }
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    '/la-danze-ui/spa-gh-pages.js'
  ]
};
