import { GetServerSideProps } from "next";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

  const baseUrl = "https://inductionfurnaceconsumables.com";

  const pages = [
    {
      url: "",
      priority: "1.0",
      changefreq: "weekly",
    },
    {
      url: "/aboutus",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      url: "/products",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      url: "/contactus",
      priority: "0.7",
      changefreq: "yearly",
    },
    {
      url: "/faq",
      priority: "0.6",
      changefreq: "monthly",
    },
  ];

  const urls = pages
    .map(
      (page) => `
      <url>
        <loc>${baseUrl}${page.url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;