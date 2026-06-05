import { productOrganizations } from '@/data/productsData';

import ProductGrid from './ProductGrid';

import styles from '@/styles/products/RelatedProducts.module.css';

type Props = {
  currentSlug: string;
};

export default function RelatedProducts({
  currentSlug
}: Props) {

  const allProducts = productOrganizations.flatMap(
    (organization) =>
      organization.groups.flatMap(
        (group) => group.products
      )
  );

  const relatedProducts = allProducts
    .filter((product) => product.slug !== currentSlug)
    .slice(0, 3);

  return (

    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.heading}>

          <span>
            RELATED PRODUCTS
          </span>

          <h2>
            Explore More Products
          </h2>

        </div>

        <ProductGrid
          products={relatedProducts}
        />

      </div>

    </section>
  );
}