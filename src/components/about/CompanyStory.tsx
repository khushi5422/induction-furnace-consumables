import Image from 'next/image';

import styles from '@/styles/aboutus/About.module.css';


const timeline = [
  {
    year: '2005',
    title: 'Foundation Of FIELDMAN INDUCTION',
    desc: 'Started as a trusted manufacturer and supplier of induction furnace systems.',
  },
  {
    year: '2007',
    title: 'Expansion Into FIELDMAN CONTROL SYSTEM',
    desc: 'Expanded operations into industrial automation and engineering solutions.',
  },
  {
    year: '2010',
    title: 'Advanced Expansion to FIELDMAN SENSORS PRIVATE LIMITED',
    desc: 'Built advanced infrastructure for industrial measuring instruments.',
  },
  {
    year: '2024',
    title: 'Global Export Presence With Food Stuff',
    desc: 'Expanded product supply and export operations across international markets.',
  }
];

export default function CompanyStory() {
  return (

    <section className={styles.timelineSection}>

      <div className={styles.heading}>

        <span>
          OUR JOURNEY
        </span>

        <h2>
          Growing Through
          Engineering Innovation
        </h2>

      </div>

      <div className={styles.timeline}>

        {timeline.map((item, index) => (

          <div
            key={index}
            className={styles.timelineItem}
          >

            <div className={styles.timelineDot}></div>

            <div className={styles.timelineContent}>

              <span>
                {item.year}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}