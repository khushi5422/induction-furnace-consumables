import styles from '@/styles/aboutus/About.module.css';

const features = [
  {
    title: 'Quality Assurance',
    desc: 'Every product is manufactured with strict quality standards and industrial reliability.',
  },
  {
    title: 'Advanced Infrastructure',
    desc: 'Modern manufacturing and engineering facilities for industrial excellence.',
  },
  {
    title: 'Experienced Engineers',
    desc: 'Dedicated technical experts delivering customized engineering solutions.',
  },
  {
    title: 'Global Reach',
    desc: 'Supplying industrial solutions across domestic and international markets.',
  },
];

export default function WhyChooseUs() {

  return (
    <section className={styles.whySection}>

      <div className={styles.heading}>

        <span>
          WHY INDUSTRIES TRUST US
        </span>

        <h2>
          Delivering Reliability,
          Quality & Innovation
        </h2>

      </div>

      <div className={styles.grid}>

        {features.map((item, index) => (

          <div
            key={index}
            className={styles.card}
          >

            <div className={styles.number}>
              0{index + 1}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}