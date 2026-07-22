import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export default function SEOHead({
  title,
  description,
  url,
  image = "/logo.svg",
}: SEOProps) {

  return (
    <Head>

      <meta property="og:title" content={title} />

      <meta 
        property="og:description" 
        content={description} 
      />

      <meta 
        property="og:url" 
        content={url} 
      />

      <meta 
        property="og:type" 
        content="website" 
      />

      <meta 
        property="og:image" 
        content={`https://inductionfurnaceconsumables.com${image}`} 
      />

    </Head>
  );
}