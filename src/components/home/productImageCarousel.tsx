'use client';

import styles from "@/styles/home/productimagecarousel.module.css";
import Image from "next/image";

const images = [
  '/steel-furnace-coil.png',
  '/refractory-top-cast-ring-set.png',
  '/fieldman-sensor.png',
  '/fieldman-induction.png',
  '/furnace-top-cast.png',
  '/small-furnace-coil.png',
  '/steel-melting-furnace-assembly.png',
  '/mortar.png',
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
          Steel Industry Machinery, Induction Furnace Consumables & Spares Manufacturer
        </h2>

        <p>
          Precision-engineered induction furnace consumables, machinery and industrial spare parts 
          Trusted by steel plants, foundries, manufacturing and industrial automation sectors for reliable performance and long service life.
        </p>

      </div>

      {/* SLIDER */}

      <div className={styles.slider}>

        <div className={styles.slideTrack}>

          {/* DUPLICATE ARRAY FOR INFINITE LOOP */}

          {[...images, ...images].map((image, index) => (

            <div className={styles.slide} key={index}>

              <div className={styles.imageCard}>

                <Image
                  src={image}
                  alt={`slide-${index}`}
                  fill
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