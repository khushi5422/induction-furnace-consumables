'use client';

import styles from "@/styles/home/productimagecarousel.module.css";

const images = [
  '/Inverter-Scr.jpg',
  '/pedestal-bearing.jpg',
  '/Inverter.jpg',
  '/frp-washers.jpg',
  '/AboutCompany.jpeg',
];

export default function ProductImageCarousel() {

  return (

    <section className={styles.carouselSection}>

      {/* SECTION HEADING */}

      <div className={styles.headingWrapper}>

        <span className={styles.tag}>
          OUR WORK
        </span>

        <h2>
          Industrial Components &
          Manufacturing Excellence
        </h2>

        <p>
          Precision-engineered products trusted by
          industries across manufacturing, steel and
          industrial automation sectors.
        </p>

      </div>

      {/* SLIDER */}

      <div className={styles.slider}>

        <div className={styles.slideTrack}>

          {/* DUPLICATE ARRAY FOR INFINITE LOOP */}

          {[...images, ...images].map((image, index) => (

            <div className={styles.slide} key={index}>

              <div className={styles.imageCard}>

                <img
                  src={image}
                  alt={`slide-${index}`}
                  className={styles.image}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}