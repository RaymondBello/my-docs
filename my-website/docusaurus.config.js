/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ray',
  tagline: 'Engineer🔩 | Designer🖌️ | Developer💻',
  url: 'https://RaymondBello.github.io',
  baseUrl: '/my-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://img.icons8.com/metro/26/000000/r.png',
  organizationName: 'RaymondBello', // Usually your GitHub org/user name.
  projectName: 'my-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      style: 'dark',
      title: 'Ray',
      logo: {
        alt: 'My Site Logo',
        src: 'https://img.icons8.com/metro/26/000000/r.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Projects',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/RaymondBello/raymondbello.github.io/tree/main/',
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
              label: 'Projects',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ray_vss',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/RaymondBello/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ray Bello.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/RaymondBello/raymondbello.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/RaymondBello/raymondbello.github.io/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
