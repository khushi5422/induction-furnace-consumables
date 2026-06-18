import React from 'react';
import Image from "next/image";
import { Container } from 'react-bootstrap';
import Home from '@/styles/home/groupsection.module.css'

const groupCompanies = [
  {
    label: "AUTOMATION & CONTROLS",
    title: "Fieldman Control System",
    image: "/fieldman-control-system.png",
    text:
      "A trusted division for industrial automation, factory automation, testing instruments, sensors and control products used across modern plant operations.",
  },
  {
    label: "SENSORS & MEASUREMENT",
    title: "Fieldman Sensors Pvt. Ltd.",
    image: "/fieldman-sensor.png",
    text:
      "An Indian manufacturer of standard and precision temperature measurement sensors serving steel, glass, petrochemical, power and furnace industries.",
  },
  {
    label: "FURNACE SOLUTIONS",
    title: "Fieldman Induction",
    image: "/fieldman-induction.png",
    text:
      "Focused on induction furnace, coil , refractories blocks , selector switches & all spares products tested through a dedicated quality control process.",
  },
];

const GroupSection = () => {
  return (
    <section id="about-us" className="mt-5 mb-5">

      <Container className={Home.groupSection}>
        <div className={Home.groupHeading}>
          <span>FIELDMAN GROUP OF COMPANIES </span>
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
                <Image
                  src={`${company.image}`}
                  alt={company.title}
                  fill
                  className={Home.companyImage}
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
