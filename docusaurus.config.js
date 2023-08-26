// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vision Industries India Pvt Ltd',
  tagline: 'Lets Enrich Life Together',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://visionindustriesindia.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tejayeachuri', // Usually your GitHub org/user name.
  projectName: 'visionindustriesindia', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: 'support_us',
        content:
          'Contact us Email: visionindustries.info@gmail.com and Mobile +91-9550999549 ',
        backgroundColor: '#5991c7',
        textColor: '#ffffff',
        isCloseable: false,
      },
      navbar: {
        title: 'Vision Industries India',
        style: 'primary',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Home',
          },
          {
            label: 'About Us',
            to: 'docs/about',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Products',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Trilok',
                docId: 'products/trilok',
              },
              {
                type: 'doc',
                label: 'Santana',
                docId: 'products/trilok',
              },
              {
                type: 'doc',
                label: 'Mystic Aromas',
                docId: 'products/trilok',
              },
              {
                type: 'doc',
                label: 'Siddhi',
                docId: 'products/trilok',
              },
              {
                type: 'doc',
                label: 'Shakti',
                docId: 'products/trilok',
              },
              {
                type: 'doc',
                label: 'Serenity',
                docId: 'products/trilok',
              },
            ],
          },
          {
            label: 'Contact Us',
            to: '/docs/contact',
            position: 'left',
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
                label: 'Get Started',
                to: '/docs/intro',
              },
              {
                label: 'About Us',
                to: '/docs/about',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                html: `
                <p>Mobile +91-9550999549</p>
                `,
              },
              {
                html: `
                <p>Email - visionindustries.info@gmail.com</p>
                `,
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Products',
                to: '/docs/products/trilok',
              },
              {
                label: 'Location',
                href: 'https://goo.gl/maps/dhfPF92YQPfe2t5D6',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vision Industries India. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
