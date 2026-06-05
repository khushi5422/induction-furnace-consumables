import { industriesData } from '@/data/industriesData';

import styles from '@/styles/industries/industryGrid.module.css';

export default function IndustryGrid() {

  return (

    <section className={styles.section}>

      <div className={styles.grid}>

        {industriesData.map((industry, index) => (

          <div
            key={index}
            className={styles.card}
          >

            <div className={styles.imageWrap}>

              <img
                src={industry.image}
                alt={industry.title}
                className={styles.image}
              />

            </div>

            <div className={styles.content}>

              <h3>
                {industry.title}
              </h3>

              <p>
                {industry.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}