import { GetServerSideProps } from "next";


const Sitemap = () => {
  return null;
};


export const getServerSideProps: GetServerSideProps = async ({ res }) => {

  const baseUrl = "https://inductionfurnaceconsumables.com";


  const pages = [
    "",
    "/about",
    "/products",
    "/contact",
  ];


  const urls = pages
    .map((page) => {
      return `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      `;
    })
    .join("");



  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

  <urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  ${urls}

  </urlset>`;



  res.setHeader(
    "Content-Type",
    "text/xml"
  );


  res.write(sitemap);

  res.end();



  return {
    props:{}
  };

};


export default Sitemap;