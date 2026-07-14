'use client';
import { useState } from 'react';
import { sendWhatsAppInquiry } from "@/components/whatsapp";
import { sendInquiryEmail } from "@/components/email";
import styles from '@/styles/Contact.module.css';

export default function ContactForm() {

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({

    user_name: "",
    user_email: "",
    user_phone: "",
    user_company: "",
    message: ""

  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const {
      name,
      value
    } = e.target;


    setFormData(prev => ({

      ...prev,
      [name]: value

    }));

  };

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();


  console.log("🚀 Contact Form Submitted");


  console.log(
    "📦 Contact Form Data:",
    formData
  );



  if(
    !formData.user_name ||
    !formData.user_phone
  ){

    console.log(
      "❌ Validation Failed",
      {
        name: formData.user_name,
        phone: formData.user_phone
      }
    );


    alert(
      "Please fill name and phone number"
    );

    return;

  }



  try {


    setLoading(true);


    console.log(
      "📧 Sending EmailJS..."
    );



    const emailResponse =
      await sendInquiryEmail(formData);



    console.log(
      "✅ EmailJS Response:",
      emailResponse
    );



    console.log(
      "📱 Sending WhatsApp..."
    );



    sendWhatsAppInquiry(formData);



    console.log(
      "✅ WhatsApp function executed"
    );



    setSuccess(
      "Thank you! We will contact you soon."
    );



    console.log(
      "🧹 Resetting form..."
    );



    setFormData({

      user_name:"",
      user_email:"",
      user_phone:"",
      user_company:"",
      message:""

    });


  }

  catch(error){


    console.error(
      "❌ Contact Form Error:",
      error
    );


    setSuccess(
      "Something went wrong. Please try again."
    );


  }


  finally{


    console.log(
      "🏁 Contact Form Process Finished"
    );


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
            onSubmit={handleSubmit}
            className={styles.form}
          >

            <div className={styles.inputGroup}>

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                value={formData.user_email}
                onChange={handleChange}
                required
              />

            </div>

            <div className={styles.inputGroup}>

              <input
                type="text"
                name="user_phone"
                placeholder="Phone Number"
                value={formData.user_phone}
                onChange={handleChange}
              />

              <input
                type="text"
                name="user_company"
                placeholder="Company Name"
                value={formData.user_company}
                onChange={handleChange}
              />

            </div>

            <textarea
              name="message"
              placeholder="Write your message..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
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