import Link from 'next/link';

import styles from '@/styles/products/ProductCard.module.css';

type ProductProps = {

  product: {
    name: string;
    slug: string;
    image: string;
    shortDescription: string;
  };
};

export default function ProductCard({
  product
}: ProductProps) {

  return (

    <div className={styles.card}>

      <div className={styles.imageWrap}>

        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
        />

      </div>

      <div className={styles.content}>

        <h3>
          {product.name}
        </h3>

        <p>
          {product.shortDescription}
        </p>

        <div className={styles.actions}>

          <Link
            href={`/products/${product.slug}`}
            className={styles.primaryBtn}
          >
            View More
          </Link>

          <Link
            href={`/contact?product=${product.name}`}
            className={styles.secondaryBtn}
          >
            Inquiry
          </Link>

        </div>

      </div>

    </div>
  );
}