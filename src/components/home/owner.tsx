import React from 'react'
import Card from 'react-bootstrap/Card';
import styles from "@/styles/home/Owner.module.css";
import Image from 'next/image';


export default function Owner() {
    return (
      <section className={styles.ownerSection}>

  {/* BACKGROUND */}

  <div className={styles.ownerBackground}></div>

  {/* OVERLAY */}

  <div className={styles.ownerOverlay}></div>

  {/* CONTENT */}

  <div className={styles.ownerContainer}>

    <div className={styles.ownerCard}>

      {/* SMALL TAG */}

      <span className={styles.ownerTag}>
        LEADERSHIP MESSAGE
      </span>

      {/* HEADING */}

      <h2 className={styles.ownerHeading}>
        Building Industrial Excellence
        Through Innovation & Trust
      </h2>

      {/* TEXT */}

      <p className={styles.ownerText}>

        We started our journey over a decade ago with a
        vision to deliver reliable and advanced induction
        furnace solutions for modern industries.

        <br /><br />

        Today, Fieldman Induction proudly serves
        Iron & Steel and Casting Industries 
        manufacturing industries with precision-engineered
        furnace systems and induction furnace components.

        <br /><br />

        Our growth is driven by innovation, quality,
        long-term relationships and a highly experienced
        technical workforce committed to industrial excellence.

      </p>

      {/* OWNER INFO */}

      <div className={styles.ownerInfo}>

        <div className={styles.ownerImageWrapper}>

          <Image
            src="/owner.jpg"
            width={70}
            height={70}
            alt="Owner"
            className={styles.ownerImage}
          />

        </div>

        <div>

          <h4 className={styles.ownerName}>
            Rohit Patel
          </h4>

          <p className={styles.ownerRole}>
            Founder & Managing Director
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
    )
}
