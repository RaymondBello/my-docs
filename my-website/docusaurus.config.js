/** @type {import('@docusaurus/types').DocusaurusConfig} */

const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Ray",
  url: "https://RaymondBello.github.io",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://img.icons8.com/metro/26/000000/r.png",
  organizationName: "RaymondBello", // Usually your GitHub org/user name.
  projectName: "my-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      style: "dark",
      title: "Ray",
      logo: {
        alt: "My Site Logo",
        src: "https://img.icons8.com/metro/26/000000/r.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "right",
          label: "Hardware",
        },
        { to: "/blog", label: "Dev. Log", position: "right" },
        {
          href: "https://github.com/RaymondBello/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Hardware",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/ray_vss",
            // },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/raymond-b-488916189/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Dev. Log",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/RaymondBello/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ray Bello.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          editUrl:
            "https://github.com/RaymondBello/raymondbello.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/RaymondBello/raymondbello.github.io/tree/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
};
