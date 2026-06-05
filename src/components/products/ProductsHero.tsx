import styles from '@/styles/products/ProductsHero.module.css';

export default function ProductsHero() {

  return (

    <section className={styles.hero}>

      <div className={styles.overlay} />

      <div className={styles.content}>

        <span>
          INDUSTRIAL PRODUCT RANGE
        </span>

        <h1>
          Industrial Products & Engineering Solutions
        </h1>

        <p>
          Explore our wide range of induction furnace systems,
          industrial automation products and engineering solutions.
        </p>

      </div>

    </section>
  );
}