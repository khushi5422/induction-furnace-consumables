import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  keywords?: string;
  noIndex?: boolean;
}

export default function SEO({
  title,
  description,
  canonical,
  image = "/og-image.jpg",
  keywords,
  noIndex = false,
}: SEOProps) {
  const siteName = "Fieldman Induction";
  const fullImage = `https://inductionfurnaceconsumables.com${image}`;

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <link
        rel="canonical"
        href={canonical}
      />

      {noIndex && (
        <meta
          name="robots"
          content="noindex,nofollow"
        />
      )}

      {/* Open Graph */}

      <meta property="og:type" content="website" />

      <meta property="og:site_name" content={siteName} />

      <meta property="og:title" content={title} />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      <meta
        property="og:image"
        content={fullImage}
      />

      {/* Twitter */}

      {/* <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={fullImage}
      /> */}

      {/* Mobile */}

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <meta
        name="theme-color"
        content="#C1121F"
      />
    </Head>
  );
}