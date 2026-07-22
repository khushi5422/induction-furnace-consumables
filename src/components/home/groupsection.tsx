import React from 'react';
import Image from "next/image";
import { Container } from 'react-bootstrap';
import Home from '@/styles/home/groupsection.module.css'
import { useEffect, useState } from "react";

const groupCompanies = [
  {
    label: "AUTOMATION & CONTROLS",
    title: "Fieldman Control System",
    image: "/fieldman-control-system.png",
    text:
      "A trusted division specializing in industrial automation, factory automation, testing instruments, sensors and control systems that improve efficiency, reliability and productivity across modern manufacturing and process industries.",
  },
  {
    label: "SENSORS & MEASUREMENT",
    title: "Fieldman Sensors Pvt. Ltd.",
    image: "/fieldman-sensor.png",
    text:
      "An Indian manufacturer of precision temperature measurement sensors engineered for steel, glass, petrochemical, power generation and induction furnace applications, delivering reliable monitoring and process control..",
  },
  {
    label: "FURNACE SOLUTIONS",
    title: "Fieldman Induction",
    image: "/fieldman-induction.png",
    text:
      "Specializing in induction furnace consumables, furnace coils, refractory blocks, selector switches and furnace spare parts, with every product manufactured and tested through a dedicated quality control process for dependable industrial performance.",
  },
];

const GroupSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };

  }, []);

  return (
    <section id="about-us" className="mt-5 mb-5">

      <Container className={Home.groupSection}>
        <div className={Home.groupHeading}>
          <span>FIELDMAN GROUP OF COMPANIES </span>
          <h2>Three Specialized Companies Delivering Complete Industrial Solutions</h2>
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
              {...(!isMobile && {
                "data-aos": "fade-up",
                "data-aos-duration": "900",
                "data-aos-delay": index * 120,
                "data-aos-once": "true",
              })}
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
