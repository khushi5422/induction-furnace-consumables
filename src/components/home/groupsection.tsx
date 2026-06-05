import React from 'react';
import { Container } from 'react-bootstrap';
import Home from '@/styles/home/groupsection.module.css'

const groupCompanies = [
  {
    label: "AUTOMATION & CONTROLS",
    title: "Fieldman Control System",
    image: "/valves.jpg",
    text:
      "A trusted division for industrial automation, factory automation, testing instruments, sensors and control products used across modern plant operations.",
  },
  {
    label: "SENSORS & MEASUREMENT",
    title: "Fieldman Sensors Pvt. Ltd.",
    image: "/Inverter.jpg",
    text:
      "An Indian manufacturer of standard and precision temperature measurement sensors serving steel, glass, petrochemical, power and furnace industries.",
  },
  {
    label: "FURNACE SOLUTIONS",
    title: "Fieldman Induction",
    image: "/pedestal-bearing.jpg",
    text:
      "Focused on induction furnace systems, selector switches, spares and allied products tested through a dedicated quality control process.",
  },
];

const GroupSection = () => {
  return (
    <section id="about-us" className="mt-5 mb-5"> 

      <Container className={Home.groupSection}>
        <div className={Home.groupHeading}>
          <span>FIELDMAN GROUP</span>
          <h2>Three focused organizations, one industrial standard.</h2>
        </div>

        <div className={Home.companyGrid}>
          {groupCompanies.map((company, index) => (
            <article
              className={Home.companyCard}
              key={company.title}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 120}
              data-aos-once="true"
            >
              <div className={Home.companyImageWrap}>
                <img
                  src={company.image}
                  alt={company.title}
                  className={Home.companyImage}
                  loading="lazy"
                />
              </div>

              <div className={Home.companyContent}>
                <span>{company.label}</span>
                <h3>{company.title}</h3>
                <p>{company.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default GroupSection;
