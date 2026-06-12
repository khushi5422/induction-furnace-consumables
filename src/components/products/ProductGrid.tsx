import ProductCard from "./ProductCard";

import styles from "@/styles/products/ProductGrid.module.css";

import { Product } from "@/data/productsData";

type Props = {
  products: Product[];
};

export default function ProductGrid({
  products
}: Props) {

  return (

    <div className={styles.grid}>

      {products.map((product) => (

        <ProductCard
          key={product.slug}
          product={product}
        />

      ))}

    </div>

  );
}