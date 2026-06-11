import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Home from '@/styles/home/aboutus.module.css'

// const groupCompanies = [
//   {
//     label: "AUTOMATION & CONTROLS",
//     title: "Fieldman Control System",
//     image: "/fieldman-control-system.png",
//     text:
//       "A trusted division for industrial automation, factory automation, testing instruments, sensors and control products used across modern plant operations.",
//   },
//   {
//     label: "SENSORS & MEASUREMENT",
//     title: "Fieldman Sensors Pvt. Ltd.",
//     image: "/fieldman-sensor.png",
//     text:
//       "An Indian manufacturer of standard and precision temperature measurement sensors serving steel, glass, petrochemical, power and furnace industries.",
//   },
//   {
//     label: "FURNACE SOLUTIONS",
//     title: "Fieldman Induction",
//     image: "/fieldman-induction.png",
//     text:
//       "Focused on induction furnace systems, selector switches, spares and allied products tested through a dedicated quality control process.",
//   },
// ];

const AboutUs = () => {
  return (
    <section id="about-us" className="mt-5 mb-5">

      <Container className={Home.aboutSection}>

        <Row className={Home.aboutRow}>

          {/* LEFT SIDE */}

          <Col lg={6} md={12}>

            <div className={Home.aboutImageWrapper}>

              <img
                src="/AboutCompany.jpeg"
                alt="About Us"
                className={Home.aboutImage}
                loading="lazy"
              />

            </div>

          </Col>

          {/* RIGHT SIDE */}

          <Col lg={6} md={12}>

            <div className={Home.aboutContent}>

              <span className={Home.aboutTag}>
                ABOUT COMPANY
              </span>

              <h2 className={Home.aboutTitle}>
                Precision Engineering, Smarter Solutions Since 2005
              </h2>

              <p className={Home.aboutText}>

                Your trusted partner for end-to-end industrial solutions built for the steel industry
                <b> Fieldman Induction </b>
                Fieldman Induction which was formed in the year 2005

                <br /><br />

                We are a proud manufacturer, supplier and exporter of
                products like
                <b>
                  {' '}Induction Furnace Coil,
                  Furnace Assembly,
                  Refractory Top Cast & Bottom Cast,
                  Hydraulic Power Pack,
                  Heating Furnace Spares
                </b>
                and many more.

                <br /><br />

                Our products are widely used in
                steel, petrochemical, glass,
                aerospace and plastic industries.

              </p>

            </div>

          </Col>

        </Row>

      </Container>  
    </section>
  );
};
export default AboutUs;
