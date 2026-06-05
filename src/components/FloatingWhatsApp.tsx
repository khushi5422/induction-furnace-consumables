import { FaWhatsapp } from 'react-icons/fa';

import styles from '@/styles/Contact.module.css';

export default function FloatingWhatsApp() {

  return (

    <a
      href="https://wa.me/919898997644"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
    >

      <FaWhatsapp />

    </a>
  );
}