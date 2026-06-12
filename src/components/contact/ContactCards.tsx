import { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

import styles from '@/styles/ContactCard.module.css';

const organizations = [
  {
    slug: "induction",
    name: "Fieldman Induction",

    phone: "+91 98989 97644",

    emails: ["Sales.fieldx@gmail.com",
      "fieldmaninduction@gmail.com",
      "inductionspare@gmail.com"],

    location: "Khatraj , Ahmedabad, Gujarat, India",

    timing: "Mon - Sat : 9 AM - 7 PM"
  },

  {
    slug: "sensors",
    name: "Fieldman Sensors Pvt. Ltd.",

    phone: "+91 982585 2299",

    emails: ["sales.fieldx@gmail.com", 
      "fieldmanexport@gmail.com"],

    location: "Satej , Ahmedabad, Gujarat, India",

    timing: "Mon - Sat : 9 AM - 6 PM"
  },

  {
    slug: "control",
    name: "Fieldman Control System",

    phone: "+91 990990 3802",

    emails: ["fcsautomation@yahoo.co.in", 
      "info@fcsautomation.com"],

    location: "Science City , Ahmedabad, Gujarat, India",

    timing: "Mon - Sat : 10 AM - 7 PM"
  }
];

export default function ContactDirectory() {

  const [activeOrg, setActiveOrg] = useState(
    organizations[0]
  );

  return (

    <section className={styles.directorySection}>

      <div className={styles.directoryHeader}>

        <span>
          CONTACT DIRECTORY
        </span>

        <h2>
          Connect with the right Fieldman organization
        </h2>

      </div>

      <div className={styles.organizationTabs}>

        {organizations.map((org) => (

          <button
            key={org.slug}
            onClick={() => setActiveOrg(org)}
            className={
              activeOrg.slug === org.slug
                ? styles.activeTab
                : styles.tab
            }
          >
            {org.name}
          </button>

        ))}

      </div>

      <div className={styles.contactGrid}>

        <div className={styles.contactCard}>

          <div className={styles.iconWrap}>
            <FaPhoneAlt />
          </div>

          <div>
            <h4>Call Us</h4>
            <p>{activeOrg.phone}</p>
          </div>

        </div>

        <div className={styles.contactCard}>

          <div className={styles.iconWrap}>
            <FaEnvelope />
          </div>

          <div>
            <h4>Email Address</h4>
            <div className={styles.emailList}>

              {activeOrg.emails.map((email) => (

                <a
                  key={email}
                  href={`mailto:${email}`}
                  className={styles.emailItem}
                >
                  {email}
                </a>

              ))}

            </div>
          </div>

        </div>

        <div className={styles.contactCard}>

          <div className={styles.iconWrap}>
            <FaMapMarkerAlt />
          </div>

          <div>
            <h4>Location</h4>
            <p>{activeOrg.location}</p>
          </div>

        </div>

        <div className={styles.contactCard}>

          <div className={styles.iconWrap}>
            <FaClock />
          </div>

          <div>
            <h4>Working Hours</h4>
            <p>{activeOrg.timing}</p>
          </div>

        </div>

      </div>

    </section>

  );
}