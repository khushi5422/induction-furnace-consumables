import ProductCard from './ProductCard';

import styles from '@/styles/products/ProductGrid.module.css';

type Product = {
  name: string;
  slug: string;
  image: string;
  shortDescription: string;
};

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