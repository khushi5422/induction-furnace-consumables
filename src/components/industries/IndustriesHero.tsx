import styles from '@/styles/industries/industriesHero.module.css';

export default function IndustriesHero() {

  return (

    <section className={styles.hero}>

      <div className={styles.overlay} />

      <div className={styles.content}>

        <span>
          INDUSTRIAL SOLUTIONS
        </span>

        <h1>
          Industries We Serve
        </h1>

        <p>
          Delivering industrial engineering, automation and furnace
          solutions across multiple manufacturing sectors worldwide.
        </p>

      </div>

    </section>
  );
}