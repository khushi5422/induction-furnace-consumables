'use client';

import { useState } from 'react';

import { FiPlus, FiMinus } from 'react-icons/fi';

import { faqData } from '@/data/faqData';

import styles from '@/styles/Faq.module.css';

export default function FAQAccordion() {

    const [active, setActive] = useState<number | null>(0);

    return (

        <section className={styles.section}>

            <div className={styles.heading}>

                <span>
                    FAQ
                </span>

                <h2>
                    Everything You Need To Know
                </h2>

            </div>

            <div className={styles.accordion}>

                {faqData.map((item, index) => {

                    const isOpen = active === index;

                    return (

                        <div
                            key={index}
                            className={styles.item}
                        >

                            <button
                                className={styles.question}
                                onClick={() =>
                                    setActive(isOpen ? null : index)
                                }
                            >

                                <span>
                                    {item.question}
                                </span>

                                {isOpen
                                    ? <FiMinus />
                                    : <FiPlus />}

                            </button>

                            <div
                                className={`${styles.answer} ${isOpen ? styles.open : ''
                                    }`}
                            >

                                <p>
                                    {item.answer}
                                </p>

                            </div>

                        </div>
                    );
                })}

            </div>

        </section>
    );
}