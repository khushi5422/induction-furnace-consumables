import Link from 'next/link';

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa';

import styles from '@/styles/Footer.module.css';

export default function Footer() {

  return (

    <footer className={styles.footer}>

      {/* TOP SECTION */}

      <div className={styles.footerContainer}>

        {/* COMPANY */}

        <div className={styles.footerColumn}>

          <img
            src="/logo.svg"
            alt="Logo"
            className={styles.footerLogo}
          />

          {/* <p className={styles.footerDescription}>
            Delivering advanced induction furnace
            systems and industrial engineering solutions
            trusted by manufacturing industries globally.
          </p> */}

          <div className={styles.companyList}>

            <span>Fieldman Induction</span>
            <span>Fieldman Sensors Pvt Ltd</span>
            <span>Fieldman Control System</span>
            <span>Food Stuff </span>

          </div>

        </div>

        {/* PRODUCTS */}

        <div className={styles.footerColumn}>

          <h3>Products</h3>

          <div className={styles.footerLinks}>
            <Link href="/products">
              Export House
            </Link>

            <Link href="/products">
              Furnace & Spares Manufacturing
            </Link>

            <Link href="/products">
              Meauring Instruments Temperature Tips 
            </Link>
            <Link href="/products">
              Refractory Manufacturing
            </Link>

            <Link href="/products">
              Rolling Mill Equipment
            </Link>

            <Link href="/products">
              Automation & Instruments
            </Link>



          </div>

        </div>

        {/* CONTACT */}

        <div className={styles.footerColumn}>

          <h3>Get In Touch</h3>

          <div className={styles.footerLinks}>

            <a href="#">
              <FaMapMarkerAlt />
              Ahmedabad, India
            </a>

            <a href="tel:+919898997644">
              <FaPhoneAlt />
              +91 98989 97644
            </a>

            <a href="mailto:sales.fieldman89@gmail.com">
              <FaEnvelope />
              sales.fieldman89@gmail.com
            </a>

          </div>

          {/* SOCIALS */}

          <div className={styles.socialIcons}>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className={styles.footerColumn}>

          <h3>Quick Links</h3>

          <div className={styles.footerLinks}>

            <Link href="/">
              Home
            </Link>

            <Link href="/aboutus">
              About Us
            </Link>

            <Link href="/products">
              Products
            </Link>

            <Link href="/contactus">
              Contact
            </Link>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}

      <div className={styles.bottomBar}>

        <p>
          © 2025 Fieldman Groups Of Industries.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}