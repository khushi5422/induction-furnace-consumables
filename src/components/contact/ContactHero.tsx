import styles from '@/styles/Contact.module.css';

export default function ContactHero() {

  return (
    <section className={styles.hero}>

      <div className={styles.overlay}></div>

      <div className={styles.content}>

        <span>
          CONTACT US
        </span>

        <h1>
          Let’s Build Industrial
          Solutions Together
        </h1>

        <p>
          Connect with Fieldman Group for induction furnace,
          automation and industrial engineering solutions.
        </p>

      </div>

    </section>
  );
}