import { useRouter } from "next/router";

import { Product } from "@/data/productsData";

import Image from "next/image";

import styles from "@/styles/products/ProductCard.module.css";

type Props = {
  product: Product;
};

export default function ProductCard({
  product
}: Props) {

  const router = useRouter();

  return (

    <article
      className={styles.card}
      onClick={() =>
        router.push(`/products/${product.slug}`)
      }
      role="button"
    >

      <div className={styles.imageWrap}>

        <Image
          src={product.image}
          alt={product.name}
          fill
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

          <span className={styles.primaryBtn}>
            View More
          </span>

          <button
            className={styles.secondaryBtn}
            onClick={(e) => {

              e.stopPropagation();

              router.push("/contactus");

            }}
          >
            Inquiry
          </button>

        </div>

      </div>

    </article>

  );
}