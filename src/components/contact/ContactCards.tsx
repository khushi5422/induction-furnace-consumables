import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

import styles from '@/styles/Contact.module.css';

const cards = [
  {
    icon: <FaPhoneAlt />,
    title: 'Call Us',
    info: '+91 98989 97644',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Address',
    info: 'sales.fieldman89@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    info: 'Ahmedabad, Gujarat, India',
  },
  {
    icon: <FaClock />,
    title: 'Working Hours',
    info: 'Mon - Sat : 9 AM - 7 PM',
  },
];

export default function ContactCards() {

  return (
    <section className={styles.cardsSection}>

      <div className={styles.grid}>

        {cards.map((item, index) => (

          <div
            key={index}
            className={styles.card}
          >

            <div className={styles.icon}>
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.info}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}