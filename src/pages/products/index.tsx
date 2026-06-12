import { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { productOrganizations } from "@/data/productsData";

import styles from "@/styles/products/ProductsPage.module.css";

export default function ProductsPage() {

  const [activeOrganization, setActiveOrganization] =
    useState(productOrganizations[0]);

  const [activeCategory, setActiveCategory] =
    useState(activeOrganization.groups[0]);

  const handleOrganizationChange = (organization: any) => {

    setActiveOrganization(organization);

    setActiveCategory(organization.groups[0]);

  };

  const products = useMemo(() => {

    return activeCategory.products;

  }, [activeCategory]);

  return (

    <>

      <Head>

        <title>
          Industrial Products | Fieldman Group
        </title>

        <meta
          name="description"
          content="Explore industrial products from Fieldman Induction, Fieldman Control System and Fieldman Sensors."
        />

      </Head>

      {/* HERO */}

      <section className={styles.hero}>

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>

          <span>
            INDUSTRIAL PRODUCT RANGE
          </span>

          <h1>
            Built Across Specialized Companies
          </h1>

          <p>
            Explore industrial furnace systems, automation solutions,
            measurement sensors and allied engineering products
            manufactured and supplied by Fieldman Group.
          </p>

        </div>

      </section>

      {/* ORGANIZATION SELECTOR */}

      <section className={styles.organizationSection}>

        <div className={styles.organizationGrid}>

          {productOrganizations.map((organization) => (

            <button
              key={organization.slug}
              className={
                activeOrganization.slug === organization.slug
                  ? styles.organizationCardActive
                  : styles.organizationCard
              }
              onClick={() =>
                handleOrganizationChange(organization)
              }
            >

              <div>

                <h3>
                  {organization.organization}
                </h3>

                <p>
                  {organization.description}
                </p>

              </div>

            </button>

          ))}

        </div>

      </section>

      {/* CATEGORY TABS */}

      <section className={styles.categorySection}>

        <div className={styles.categoryTabs}>

          {activeOrganization.groups.map((group) => (

            <button
              key={group.slug}
              className={
                activeCategory.slug === group.slug
                  ? styles.categoryActive
                  : styles.categoryButton
              }
              onClick={() => setActiveCategory(group)}
            >

              {group.title}

            </button>

          ))}

        </div>

      </section>

      {/* PRODUCTS */}

      <section className={styles.productsSection}>

        <div className={styles.productsHeading}>

          <span>
            INDUSTRIAL PRODUCTS
          </span>

          <h2>
            {activeCategory.title}
          </h2>

        </div>

        <div className={styles.productGrid}>

          {products.map((product) => (

            <article
              key={product.slug}
              className={styles.productCard}
            >

              <div className={styles.productImageWrap}>

                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />

              </div>

              <div className={styles.productContent}>

                <h3>
                  {product.name}
                </h3>

                <ul>

                  {Array.isArray(product.shortDescription) ? (

                    product.shortDescription.map((point, index) => (

                      <li key={index}>
                        {point}
                      </li>

                    ))

                  ) : (

                    <li>
                      {product.shortDescription}
                    </li>

                  )}

                </ul>

                <div className={styles.productActions}>

                  <Link
                    href={`/products/${product.slug}`}
                    className={styles.primaryBtn}
                  >
                    View More
                  </Link>

                  <Link
                    href="/contactus"
                    className={styles.secondaryBtn}
                  >
                    Inquiry
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

    </>

  );
}