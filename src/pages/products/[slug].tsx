import Head from 'next/head';
import { useRouter } from 'next/router';

import Link from 'next/link';

import { productOrganizations } from '@/data/productsData';

import RelatedProducts from '@/components/products/RelatedProducts';

import styles from '@/styles/products/ProductDetailsPage.module.css';

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

  return (
    <>
      <Head>
        <title>
          {product.name} | Fieldman Groups
        </title>

        <meta
          name="description"
          content={product.shortDescription}
        />
      </Head>

      <section className={styles.hero}>

        <div className={styles.container}>

          <div className={styles.grid}>

            <div className={styles.imageWrap}>

              <img
                src={product.image}
                alt={product.name}
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

              <p>
                {product.shortDescription}
              </p>

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