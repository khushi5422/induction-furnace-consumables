import React from 'react';
import about from "@/styles/About.module.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Home from '@/styles/Home.module.css'

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
                Delivering Advanced Industrial
                Furnace Solutions Since 2014
              </h2>

              <p className={Home.aboutText}>

                We initially started our journey around 11 years back as
                <b> FIELDMAN CONTROL SYSTEM </b>
                but after achieving successful growth we launched our
                new venture
                <b> Fieldman Induction </b>
                in 2014.

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
      {/* <Container>
        <Row>
          <Col lg={6} md={12}>
            <h2 className={`${Home.about_title}`}>About Our Company </h2>
            <h3>Offering a commendable range of Induction Furnace Coil, Induction Furnace Assembly,  and other such protects at market rates </h3>
            <div className={`${Home.about_image}`}>
              <img
                src="/AboutCompany.jpeg" // Update the path to your image
                alt="About Us"
                className={`${Home.img_fluid}`}
                loading="lazy"
              />
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="text-left">
              <p className={`${Home.aboutmid}`}>We initially started our journey around 11 years back as  <b> FIELDMAN CONTROL SYSTEM </b>but after achieving a successful growth of our company we came up with our another new venture named
                <b>Fieldman Induction </b> which was formed in the year 2014 .
                We are a proud manufacturer, supplier and exporter of an extensive range of <b> Furnace Coil, Induction Furnace Coil, Induction Furnace Assembly, Refractory Top Cast & Bottom Cast,
                  Furnace Selector Switch, Input Switch, Switch Blades, Hydraulic Power Pack, Heating Furnace Spares and other such products.</b>
                We have fabricated these products using the best quality components so that we can easily serve to the high market demands.
                These products find their usage and application in several industries including petrochemical, iron, steel, glass industries, plastic industries aerospace and many more places.
                We are a very established firm and thus we have many successful ventures under us such <b>Fieldman Sensors Pvt. Ltd.</b>,
                <b>Fieldman Sensors </b> & Instruments and many more 
              </p>
            </div>
          </Col>
        </Row>
      </Container> */}

      <Container>
        <div className={`${about.around} row mt-5 `}>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('valves.jpg')` }}></div>
          <div
            className={`${about.widd} p-1 col-6 `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Fieldman Control System </h1>
            <div className={`${about.grey}`}>
              Fieldman Control System, are a part of renowned Fieldman Group. We are popularly known as a prominent trader and distributor of Industrial Automation and Factory Automation Products.
              The range we make available includes Testing & measuring products, Sensors and Controllers & Industrial Automation products for various applications.
              The products we offer are widely appreciated among customers for their excellent performance, simple operations and durability.
              Due to these striking features and superior quality, our products find their use in automatic doors, plastic machinery, elevators, HVAC systems and automobiles.
            </div>
          </div>
        </div>

        <div className={`${about.around} row mt-5 `}>
          <div
            className={`${about.widd} p-2 col-6 `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Fieldman Sensors Pvt. Ltd.</h1>
            <p className={`${about.grey}`}>An Indian owned company ,Manufacturer of standard & precision temperature measurement sensors ,
              Serves industries like iron, glass, steel, petrochemical, aluminum, copper, zinc, lead, power generation, food, plastics, aerospace and furnace</p>
          </div>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('Inverter.jpg')` }}></div>
        </div>

        <div className={`${about.around} row mt-5 `}>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('pedestal-bearing.jpg')` }}></div>
          <div
            className={`${about.widd} p-1 col-6 `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Fieldman Induction </h1>
            <div className={`${about.grey}`}>
              we have started up with our business we have focused on paying utmost attention towards the quality of our range which includes Furnace Selector Switch,
              Induction Furnace Selector Switch, Variable Frequency, AC Drive, Rotary Encoders, Proximity Sensors and other such products. Each of our manufactured product is
              closely examined and tested by our quality analysts before they are being dispatched in the market to ensure that the products as per the desired quality.
              For this very purpose we have designed a very advanced quality testing laboratory where these products are tested and passed by our quality controllers.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutUs;
