'use client';

import { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import styles from '@/styles/Contact.module.css';

export default function ContactForm() {

  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState('');

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (!form.current) return;

    try {

      setLoading(true);

      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      );

      setSuccess('Your message has been sent successfully.');

      form.current.reset();

    } catch (error) {

      setSuccess('Something went wrong. Please try again.');

    } finally {

      setLoading(false);
    }
  };

  return (

    <section className={styles.contactSection}>

      <div className={styles.grid}>

        <div className={styles.left}>

          <span>
            GET IN TOUCH
          </span>

          <h2>
            Let’s Discuss Your
            Industrial Requirements
          </h2>

          <p>
            Our team is ready to help you with induction furnace,
            automation and industrial engineering solutions tailored
            to your business requirements.
          </p>

          <div className={styles.features}>

            <div className={styles.featureItem}>
              ✔ Trusted Industrial Engineering
            </div>

            <div className={styles.featureItem}>
              ✔ Fast Technical Support
            </div>

            <div className={styles.featureItem}>
              ✔ Reliable Manufacturing Solutions
            </div>

          </div>

        </div>

        <div className={styles.formWrap}>

          <form
            ref={form}
            onSubmit={sendEmail}
            className={styles.form}
          >

            <div className={styles.inputGroup}>

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
              />

            </div>

            <div className={styles.inputGroup}>

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
              />

            </div>

            <textarea
              name="message"
              placeholder="Write your message..."
              rows={6}
              required
            />

            <button
              type="submit"
              disabled={loading}
            >

              {loading
                ? 'Sending...'
                : 'Send Message'}

            </button>

            {success && (

              <p className={styles.success}>
                {success}
              </p>

            )}

          </form>

        </div>

      </div>

    </section>
  );
}