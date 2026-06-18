import styles from '@/styles/aboutus/GroupCompanies.module.css';
import Image from "next/image";

const companies = [
  {
    image: '/fieldman-induction.png',
    title: 'Fieldman Induction',
    desc: 'Fieldman Induction has emerged as a distinguished name in the realm of manufacturing, specializing in high-quality induction furnace spares. Having a large manufacturing facility with, high-end machinery, and a well-designed infrastructure our organization is well-equipped for efficient production.',
  },
  {
    image: '/fieldman-sensor.png',
    title: 'Fieldman Sensors',
    desc: 'FSPL proudly stands as a Star Rated Export House, specializing  temperature Tips, Carbon cups & supply of top-quality spares for Induction Melting, Heating Furnaces, and Rolling Mills. We excel in trading high-quality Handling Equipment.',
  },
  {
    image: '/fieldman-control-system.png',
    title: 'Fieldman Control System',
    desc: 'Your Ultimate Destination for a diverse array of measuring instruments & factory automation products. As a multi-brand super sourcing house , we take pride in being one-stop solution for cutting-edge technology & Innovation from top-notch brands across the globe.',
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
            <div className={styles.imageWrapper}>

              <Image
                src={company.image}
                alt={company.title}
                fill
                className={styles.companyImage}
              />

            </div>

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