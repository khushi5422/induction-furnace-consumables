import React from 'react';
import styles from '@/styles/home/division.module.css';

const divisions = [
  {
    title: "Fieldman Control System",
    image: "/fieldman-control-system.png",
    description:
      "Automation, controls and industrial instruments for factory and plant operations.",
  },
  {
    title: "Fieldman Induction",
    image: "/fieldman-induction.png",
    description:
      "Induction furnace assemblies, furnace coils, heating spares and allied products.",
  },
  {
    title: "Fieldman Sensors",
    image: "/fieldman-sensor.png",
    description:
      "Temperature sensors, measurement products and sensing solutions for core industries.",
  },
  // {
  //   title: "Fieldman Group",
  //   image: "/slide 1.jpg",
  //   description:
  //     "A connected industrial group serving steel, foundry, petrochemical and furnace sectors.",
  // },
];

export default function DIVISIONS() {
  return (
    <section className={styles.divisionsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span>OUR DIVISIONS</span>
          <h2>One Group, Focused Industrial Capabilities.</h2>
        </div>

        <div className={styles.divisionsGrid}>
          {divisions.map((division) => (
            <article className={styles.divisionCard} key={division.title}>
              <div className={styles.divisionImageWrap}>
                <img
                  src={division.image}
                  alt={division.title}
                  className={styles.divisionImage}
                  loading="lazy"
                />
              </div>

              <div className={styles.divisionContent}>
                <h3>{division.title}</h3>
                <p>{division.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

