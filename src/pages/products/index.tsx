import Head from 'next/head';
import { useMemo, useState } from 'react';

import ProductsHero from '@/components/products/ProductsHero';
import ProductSidebar from '@/components/products/ProductSidebar';
import ProductGrid from '@/components/products/ProductGrid';

import { productOrganizations } from '@/data/productsData';

import styles from '@/styles/products/ProductsPage.module.css';

export default function ProductsPage() {

  const allGroups = productOrganizations.flatMap(
    (organization) => organization.groups
  );

  const [activeCategory, setActiveCategory] = useState(
    allGroups[0]?.slug || ''
  );

  const filteredProducts = useMemo(() => {

    const category = allGroups.find(
      (group) => group.slug === activeCategory
    );

    return category?.products || [];

  }, [activeCategory]);

  return (
    <>
      <Head>
        <title>
          Industrial Products | Fieldman Groups
        </title>

        <meta
          name="description"
          content="Explore industrial induction furnace systems, automation products and engineering solutions by Fieldman Groups."
        />
      </Head>

      <ProductsHero />

      <section className={styles.productsSection}>

        <div className={styles.container}>

          <div className={styles.layout}>

            <ProductSidebar
              groups={allGroups}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />

            <div className={styles.content}>

              <div className={styles.headingRow}>

                <div>

                  <span>
                    INDUSTRIAL PRODUCTS
                  </span>

                  <h2>
                    {allGroups.find(
                      (group) => group.slug === activeCategory
                    )?.title}
                  </h2>

                </div>

              </div>

              <ProductGrid
                products={filteredProducts}
              />

            </div>

          </div>

        </div>

      </section>
    </>
  );
}