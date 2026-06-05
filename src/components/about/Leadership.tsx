import Image from 'next/image';

import styles from '@/styles/aboutus/Leadership.module.css';

export default function Leadership() {

  return (
    <section className={styles.leadershipSection}>

      <div className={styles.heading}>

        <span>
          LEADERSHIP
        </span>

        <h2>
          The Vision Behind
          Fieldman Group
        </h2>

      </div>

      <div className={styles.card}>

        <div className={styles.imageWrap}>

          <Image
            src="/owner.JPG"
            fill
            alt="Founder Of Fieldman Group"
            className={styles.image}
          />

        </div>

        <div className={styles.content}>

          <span>
            Founder & Managing Director
          </span>

          <h3>
            Rohit Patel
          </h3>

          <p>
            Fieldman Group began its journey with a vision
            to deliver reliable industrial engineering and
            automation solutions for growing industries.
          </p>

          <p>
            Under strong leadership and continuous innovation,
            the company expanded into induction furnace systems,
            industrial automation, sensors and engineering
            manufacturing solutions trusted across industries.
          </p>

          <p>
            Today, Fieldman Group stands as a trusted name
            focused on quality manufacturing, advanced
            engineering and long-term industrial partnerships.
          </p>

          <div className={styles.quoteBox}>

            <div className={styles.quoteLine}></div>

            <p>
              “Engineering growth through innovation,
              precision and industrial excellence.”
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}