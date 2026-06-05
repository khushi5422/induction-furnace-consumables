import styles from '@/styles/aboutus/GroupCompanies.module.css';

const companies = [
  {
    image: '/heater.jpg',
    title: 'Fieldman Induction',
    desc: 'Advanced induction furnace systems and engineering solutions.',
  },
  {
    image: '/valves.jpg',
    title: 'Fieldman Sensors',
    desc: 'Industrial automation and smart sensing technologies.',
  },
  {
    image: '/Inverter.jpg',
    title: 'Fieldman Control System',
    desc: 'Reliable industrial automation and control systems.',
  },
];

export default function GroupCompanies() {
  return (
    <section className={styles.groupSection}>

      <div className={styles.heading}>

        <span>
          OUR GROUP
        </span>

        <h2>
          The Fieldman Group
          Of Industries
        </h2>

      </div>

      <div className={styles.grid}>

        {companies.map((company, index) => (

          <div
            key={index}
            className={styles.card}
          >

            <img
              src={company.image}
              alt={company.title}
            />

            <div className={styles.content}>

              <h3>
                {company.title}
              </h3>

              <p>
                {company.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}