'use client';

import Link from 'next/link';
import styles from '@/styles/Cardcomponent.module.css';

interface CardItem {
  image: string;
  title: string;
  enquiryLink: string;
  viewLink: string;
}

const cardData: CardItem[] = [
  {
    image: '/bearing.webp',
    title: 'Slide Gate Refractories',
    enquiryLink: '/contactus',
    viewLink: '/gallery',
  },

  {
    image: '/f1.jpg',
    title: 'Casting Powder',
    enquiryLink: '/contactus',
    viewLink: '/gallery',
  },

  {
    image: '/pedestal-bearing.jpg',
    title: 'Tundish Boards',
    enquiryLink: '/contactus',
    viewLink: '/gallery',
  },
];

export default function ProductCards() {
  return (
    <div className={styles.cardsWrapper}>

      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>

          {/* IMAGE */}
          <div className={styles.imageWrapper}>
            <img
              src={card.image}
              alt={card.title}
              className={styles.cardImage}
            />
          </div>

          {/* CONTENT */}
          <div className={styles.cardContent}>

            <h3 className={styles.cardTitle}>
              {card.title}
            </h3>

            <div className={styles.buttonGroup}>

              <Link
                href={card.enquiryLink}
                className={styles.primaryBtn}
              >
                Enquiry Now
              </Link>

              <Link
                href={card.viewLink}
                className={styles.secondaryBtn}
              >
                View More
              </Link>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
}