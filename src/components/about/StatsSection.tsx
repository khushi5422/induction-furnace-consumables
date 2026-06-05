import CountUp from 'react-countup';

import styles from '@/styles/aboutus/About.module.css';


const stats = [
  {
    number: 11,
    suffix: '+',
    title: 'Years Experience',
  },
  {
    number: 500,
    suffix: '+',
    title: 'Industrial Clients',
  },
  {
    number: 20,
    suffix: '+',
    title: 'Product Categories',
  },
  {
    number: 10,
    suffix: '+',
    title: 'Industries Served',
  },
];

export default function StatsSection() {

  return (
    <section className={styles.statsSection}>

      <div className={styles.heading}>

        <span>
          OUR ACHIEVEMENTS
        </span>

        <h2>
          Delivering Industrial
          Excellence Across Industries
        </h2>

      </div>

      <div className={styles.statsGrid}>

        {stats.map((item, index) => (

          <div
            key={index}
            className={styles.statCard}
          >

            <h3>

              <CountUp
                end={item.number}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />

              {item.suffix}

            </h3>

            <p>
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}