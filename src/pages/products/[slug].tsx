import Head from 'next/head';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Image from "next/image";
import { productOrganizations } from '@/data/productsData';

import RelatedProducts from '@/components/products/RelatedProducts';

import styles from '@/styles/products/ProductDetailsPage.module.css';
import Schema from "@/components/SEO/Schema";

export default function ProductDetailsPage() {

  const router = useRouter();

  const { slug } = router.query;

  const allProducts = productOrganizations.flatMap(
    (organization) =>
      organization.groups.flatMap(
        (group) => group.products
      )
  );

  const product = allProducts.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return null;
  }

  const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "image": product.image,
  "description": product.shortDescription,
  "brand": {
    "@type": "Brand",
    "name": "Fieldman Induction"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Fieldman Induction"
  },
  "offers": {
    "@type": "Offer",
    "url": `https://inductionfurnaceconsumables.com/products/${product.slug}`,
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://inductionfurnaceconsumables.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://inductionfurnaceconsumables.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": product.name,
      "item": `https://inductionfurnaceconsumables.com/products/${product.slug}`
    }
  ]
};

  return (
    <>
      <Head>
        <title>
          {product.name} | Fieldman Groups
        </title>

        {/* <meta
          name="description"
          content={product.shortDescription}
        /> */}
      </Head>
      <Schema data={productSchema} />
      <Schema data={breadcrumbSchema} />

      <section className={styles.hero}>

        <div className={styles.container}>

          <div className={styles.grid}>

            <div className={styles.imageWrap}>

              <Image
                src={product.image}
                alt={product.name}
                fill
                className={styles.image}
              />

            </div>

            <div className={styles.content}>

              <span>
                INDUSTRIAL PRODUCT
              </span>

              <h1>
                {product.name}
              </h1>

              <ul>

                {Array.isArray(product.shortDescription) ? (

                  product.shortDescription.map((point, index) => (
                    <li key={index}>
                      {point}
                    </li>
                  ))

                ) : (

                  <li>{product.shortDescription}</li>

                )}

              </ul>

              <div className={styles.actions}>

                <Link
                  href={`/contact?product=${product.name}`}
                  className={styles.primaryBtn}
                >
                  Send Inquiry
                </Link>

                <Link
                  href="/products"
                  className={styles.secondaryBtn}
                >
                  View Products
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      <RelatedProducts
        currentSlug={product.slug}
      />
    </>
  );
}