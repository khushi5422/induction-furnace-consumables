import styles from '@/styles/aboutus/About.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>

      <div className={styles.overlay}></div>

      <div className={styles.heroContent}>

        <span>
          ABOUT FIELDMAN GROUP OF COMPANIES
        </span>

        <h1>
          Engineering Industrial
          Innovation Since 2005
        </h1>

        <p>
          Trusted manufacturer and exporter of
          induction furnace systems, automation
          products and industrial engineering solutions.
        </p>

      </div>

    </section>
  );
}