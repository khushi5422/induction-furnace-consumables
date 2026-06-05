import Image from 'next/image';

import styles from '@/styles/aboutus/Infrastructure.module.css';

export default function Infrastructure() {

  return (
    <section className={styles.infraSection}>

      <div className={styles.grid}>

        <div className={styles.content}>

          <span>
            OUR INFRASTRUCTURE
          </span>

          <h2>
            Advanced Manufacturing
            & Engineering Facilities
          </h2>

          <p>
            Our advanced infrastructure and manufacturing
            facilities help us deliver precision-engineered
            industrial products with consistent quality standards.
          </p>

          <p>
            Equipped with modern machinery, experienced engineers
            and dedicated quality processes, we ensure reliability
            across every industrial solution.
          </p>

        </div>

        <div className={styles.imageWrap}>

          <Image
            src="/melter.png"
            fill
            alt="Industrial Manufacturing"
            className={styles.image}
          />

        </div>

      </div>

    </section>
  );
}