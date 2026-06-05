import styles from '@/styles/Contact.module.css';

export default function ContactMap() {

  return (

    <section className={styles.mapSection}>

      <div className={styles.heading}>

        <span>
          OUR LOCATION
        </span>

        <h2>
          Visit Our Office
        </h2>

      </div>

      <div className={styles.mapWrap}>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>

    </section>
  );
}