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
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'La Danze UI',
      logo: {
        alt: 'La Danze UI logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/1.0.0',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
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
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
          lastVersion: "current",
          versions: {
            current: {
              label: "1.0.0",
              path: "1.0.0"
            }
          }
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
