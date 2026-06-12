'use client';

import styles from "@/styles/home/productimagecarousel.module.css";

const images = [
  '/steel-furnace-coil.png',
  '/refractory-top-cast-ring-set.png',
  '/fieldman-sensor.png',
  '/permali-frp-coil-support.png',
  '/furnace-top-cast.png',
  '/small-furnace-coil.png',
  '/steel-melting-furnace-assembly.png',
  '/aluminum-side-plates.png',
];

export default function ProductImageCarousel() {

  return (

    <section className={styles.carouselSection}>

      {/* SECTION HEADING */}

      <div className={styles.headingWrapper}>

        <span className={styles.tag}>
          OUR MANUFACTURING
        </span>

        <h2>
          Steel Industry Machinary & Spares Manufacturer
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