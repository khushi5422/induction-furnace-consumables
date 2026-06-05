import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import styles from "@/styles/home/Strength.module.css";
export default function STRENGTH() {
    return (
        <section className={styles.servicesSection}>

            {/* SECTION HEADING */}

            <div className={styles.servicesHeading}>

                <span className={styles.serviceTag}>
                    OUR STRENGTH
                </span>

                <h2>
                    Why Industries Work With Us
                </h2>

            </div>

            {/* CARDS */}

            <div className={styles.servicesGrid}>

                {/* CARD 1 */}

                <Card
                    className={styles.serviceCard}
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >

                    <div className={styles.iconWrapper}>
                        <Image
                            src="/qualityassurance.webp"
                            width={70}
                            height={70}
                            alt="Quality"
                        />
                    </div>

                    <Card.Body className={styles.cardBody}>

                        <Card.Title className={styles.cardTitle}>
                            Quality Assurance
                        </Card.Title>

                        <Card.Text className={styles.cardText}>
                            Every product undergoes strict quality inspection
                            to ensure reliable industrial performance.
                        </Card.Text>

                    </Card.Body>

                </Card>

                {/* CARD 2 */}

                <Card
                    className={styles.serviceCard}
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                    data-aos-once="true"
                >

                    <div className={styles.iconWrapper}>
                        <Image
                            src="/truck.webp"
                            width={70}
                            height={70}
                            alt="Facility"
                        />
                    </div>

                    <Card.Body className={styles.cardBody}>

                        <Card.Title className={styles.cardTitle}>
                            Advanced Facility
                        </Card.Title>

                        <Card.Text className={styles.cardText}>
                            Equipped with modern manufacturing systems
                            for precision production and testing.
                        </Card.Text>

                    </Card.Body>

                </Card>

                {/* CARD 3 */}

                <Card
                    className={styles.serviceCard}
                    data-aos="zoom-in-up"
                    data-aos-duration="1400"
                    data-aos-once="true"
                >

                    <div className={styles.iconWrapper}>
                        <Image
                            src="/global.webp"
                            width={70}
                            height={70}
                            alt="Team"
                        />
                    </div>

                    <Card.Body className={styles.cardBody}>

                        <Card.Title className={styles.cardTitle}>
                            Expert Team
                        </Card.Title>

                        <Card.Text className={styles.cardText}>
                            Skilled engineers and technicians delivering
                            innovative industrial solutions globally.
                        </Card.Text>

                    </Card.Body>

                </Card>

            </div>

        </section>
    )
}
