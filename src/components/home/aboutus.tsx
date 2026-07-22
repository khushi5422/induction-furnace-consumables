import React from 'react';
import Image from "next/image";
import Home from '@/styles/home/aboutus.module.css'

const AboutUs = () => {
  return (

  <section
    id="about-us"
    className={Home.aboutSectionWrapper}
  >

    <div className={Home.aboutContainer}>

      <div className={Home.aboutGrid}>

        {/* LEFT SIDE */}

        <div className={Home.leftSide}>

          <div className={Home.aboutImageWrapper}>

            <Image
              src="/AboutCompany.jpeg"
              alt="About Us"
              fill
              priority
              className={Home.aboutImage}
            />

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className={Home.rightSide}>

          <div className={Home.aboutContent}>

            <span className={Home.aboutTag}>
              About Fieldman Induction - Induction Furnace Consumables Manufacturer
            </span>

            <h2 className={Home.aboutTitle}>
              Precision Engineering, Smarter Solutions Since 2005
            </h2>

            <p className={Home.aboutText}>

              <b>Fieldman Induction</b>is a trusted manufacturer, supplier and exporter of high-quality induction furnace consumables and industrial solutions 
              for the steel and metal processing industries. Established in 2005, we have built strong expertise in delivering reliable, durable and 
              performance-driven solutions designed to meet the evolving needs of modern industries.

              <br /><br />

              We specialize in manufacturing and supplying products such as
              <b>
                {' '}Induction Furnace Coil,
                Furnace Assembly,
                Refractory Top Cast & Bottom Cast,
                Hydraulic Power Pack,
                Heating Furnace Spares
              </b>

              and other essential furnace components. Our products are engineered with precision to deliver efficiency, reliability and long service life in demanding industrial environments.

              <br /><br />

              Our solutions are widely used across steel plants, foundries, petrochemical, glass, aerospace and plastic industries.
              With a commitment to quality, innovation and customer satisfaction, Fieldman Induction continues to serve as a dependable 
              partner for industrial furnace solutions in India and global markets.

            </p>

          </div>

        </div>

      </div>

    </div>

  </section>

);
};
export default AboutUs;
