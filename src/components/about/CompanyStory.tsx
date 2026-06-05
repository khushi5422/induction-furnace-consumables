import Image from 'next/image';

import styles from '@/styles/aboutus/About.module.css';


const timeline = [
  {
    year: '2014',
    title: 'Foundation Of Fieldman Induction',
    desc: 'Started as a trusted manufacturer and supplier of induction furnace systems.',
  },
  {
    year: '2016',
    title: 'Expansion Into Automation',
    desc: 'Expanded operations into industrial automation and engineering solutions.',
  },
  {
    year: '2019',
    title: 'Advanced Manufacturing',
    desc: 'Built advanced infrastructure for industrial manufacturing capabilities.',
  },
  {
    year: '2022',
    title: 'Global Export Presence',
    desc: 'Expanded product supply and export operations across international markets.',
  },
  {
    year: '2025',
    title: 'Multi-Industry Engineering Group',
    desc: 'Serving industries with furnace systems, sensors and industrial engineering.',
  },
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
    // <section className={styles.storySection}>

    //   <div className={styles.storyGrid}>

    //     <div className={styles.imageWrap}>

    //       <Image
    //         src="/AboutCompany.jpeg"
    //         fill
    //         alt="Fieldman Industry"
    //         className={styles.image}
    //       />

    //     </div>

    //     <div className={styles.content}>

    //       <span>
    //         OUR JOURNEY
    //       </span>

    //       <h2>
    //         Building Industrial
    //         Excellence With Innovation
    //       </h2>

    //       <p>
    //         Fieldman Group started its journey as
    //         Fieldman Control System and evolved into
    //         a trusted industrial engineering and
    //         manufacturing company serving multiple industries.
    //       </p>

    //       <p>
    //         Today we proudly manufacture induction furnace
    //         systems, industrial automation products and
    //         engineering solutions trusted across India and
    //         international markets.
    //       </p>

    //     </div>

    //   </div>

    // </section>