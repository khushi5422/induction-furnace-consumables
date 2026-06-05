import styles from '@/styles/industries/industriesIntro.module.css';

export default function IndustriesIntro() {

  return (

    <section className={styles.section}>

      <div className={styles.left}>

        <span>
          OUR EXPERTISE
        </span>

        <h2>
          Supporting Critical Industrial Operations
        </h2>

      </div>

      <div className={styles.right}>

        <p>
          Fieldman Group provides advanced industrial manufacturing,
          induction furnace systems, automation products and engineering
          solutions tailored for high-performance industries.
        </p>

        <p>
          With years of engineering expertise and industrial experience,
          we help businesses improve operational efficiency, reliability
          and manufacturing productivity.
        </p>

      </div>

    </section>
  );
}