import Link from 'next/link';

import styles from '@/styles/aboutus/About.module.css';

export default function CTASection() {

  return (
    <section className={styles.ctaSection}>

      <div className={styles.overlay}></div>

      <div className={styles.content}>

        <span>
          LET'S BUILD TOGETHER
        </span>

        <h2>
          Ready To Work With
          Fieldman Group?
        </h2>

        <p>
          Connect with our team for industrial engineering,
          induction furnace systems and automation solutions.
        </p>

        <div className={styles.actions}>

          <Link
            href="/contactus"
            className={styles.primaryBtn}
          >
            Contact Us
          </Link>

          <Link
            href="/products"
            className={styles.secondaryBtn}
          >
            Explore Products
          </Link>

        </div>

      </div>

    </section>
  );
}