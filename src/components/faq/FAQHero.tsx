import styles from '@/styles/Faq.module.css';

export default function FAQHero() {

  return (

    <section className={styles.hero}>

      <div className={styles.overlay} />

      <div className={styles.content}>

        <span>
          SUPPORT CENTER
        </span>

        <h1>
          Frequently Asked Questions
        </h1>

        <p>
          Find answers about our industrial products,
          manufacturing capabilities and engineering solutions.
        </p>

      </div>

    </section>
  );
}