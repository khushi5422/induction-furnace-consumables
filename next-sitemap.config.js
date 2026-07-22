/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://inductionfurnaceconsumables.com",
  generateRobotsTxt: true,

  sitemapSize: 5000,

  exclude: [
    "/admin",
    "/404",
    "/500",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};