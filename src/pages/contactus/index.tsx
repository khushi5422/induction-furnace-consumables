import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Contact from '@/styles/Contact.module.css'
interface FormData {
  cont_name: string;
  cont_company: string;
  cont_email: string;
  cont_phone: string;
  message: string;
}
const ContactFooorm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [erroroccured, seterroroccured] = useState(false);
  //DATABASE
  const [formData, setFormData] = useState<FormData>({
    cont_name: "",
    cont_company: "",
    cont_email: "",
    cont_phone: "",
    message: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("DATTTTTTTTTAAAAAAAAAA:", formData);

    // try {
    //   const response = await fetch("/api/datasaver", {
    //     method: "POST",
    //     body: JSON.stringify(formData),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   const data = await response.json();
    //   console.log("Data sent to database:", data);

    // } catch (error) {
    //   seterroroccured(true);
    //   console.error("Error sending data to database:", error);
    // }
    // EMAIL JS
    if (form.current) {
      emailjs
        .sendForm(
          "service_yy3l708",
          "template_aotn73l",
          form.current,
          "eGq8AwmDPBcyl1lJV"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message sent successfully");
            setFormSubmitted(true);
            setFormData({
              cont_name: "",
              cont_company: "",
              cont_email: "",
              cont_phone: "",
              message: "",
            });

            // You can also add a delay and then hide the notification if needed
            setTimeout(() => {
              setFormSubmitted(false);
            }, 5000);
          },
          (error) => {
            seterroroccured(true);
            console.log(error.text);
            console.log("Error sending message");
          }
        );
    }
  };
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Fieldman Group" />
      </Head>
      <style>
        {`
        .row {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px; 
        }
      `}
      </style>
      <div>
        <section>
          <div className="container">
            <div className={`row justify-content-center`}>
              <div className="col-md-12">
                <div className={`${Contact.wrapper}`}>
                  <div className={`${Contact.backg} row no-gutters mb-5 mt-5`}
                    data-aos="flip-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    data-aos-once="true">
                    <div className="col-md-7">
                      <div className="w-100 p-md-5 p-4">
                        <h3 className="mb-4 text-white">Contact Us</h3>
                        <form onSubmit={handleSubmit} ref={form}>
                          <div className={`row`}>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="name">
                                  Name
                                </label>
                                <input
                                  value={formData.cont_name}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="form-control"
                                  name="cont_name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="email">
                                  Email Address
                                </label>
                                <input
                                  value={formData.cont_email}
                                  onChange={handleInputChange}
                                  type="email"
                                  className="form-control"
                                  name="cont_email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="companyname">
                                  Company Name
                                </label>
                                <input
                                  value={formData.cont_company}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="form-control"
                                  name="cont_company"
                                  placeholder="Company Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="number">
                                  Phone Number
                                </label>
                                <input
                                  value={formData.cont_phone}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="form-control"
                                  name="cont_phone"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="msg">
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  cols={30}
                                  rows={4}
                                  placeholder="Message"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12 mt-2">
                              <div className="form-group">
                                <input
                                  id="liveToastBtn"
                                  type="submit"
                                  value="Send Message"
                                  className="btn btn-warning "
                                />
                                <div className="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {formSubmitted && (
                        <div
                          className="position-fixed top-0 end-0 p-3"
                          style={{ zIndex: 11 }}
                        >
                          <div
                            id="liveToast"
                            className="toast show"
                            role="alert"
                            aria-live="assertive"
                            aria-atomic="true"
                          >
                            <div className="toast-header">
                              <img
                                src="/sendsuccesfully.webp"
                                className="rounded me-2"
                                height={25}
                                width={25}
                                alt="location"
                                loading="lazy"
                              />
                              <strong className="me-auto">Sent Successfully!</strong>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                onClick={() => setFormSubmitted(false)}
                              ></button>
                            </div>
                            <div className="toast-body">
                              Your message was sent successfully! Thank you.
                            </div>
                          </div>
                        </div>
                      )}
                      {erroroccured && (
                        <div
                          className="position-fixed top-0 end-0 p-3"
                          style={{ zIndex: 11 }}
                        >
                          <div
                            id="liveToast"
                            className="toast show"
                            role="alert"
                            aria-live="assertive"
                            aria-atomic="true"
                          >
                            <div className="toast-header">
                              <img
                                src="/errorocuured.webp"
                                className="rounded me-2"
                                height={25}
                                width={25}
                                alt="location"
                                loading="lazy"
                              />
                              <strong className="me-auto text-danger">ERROR OCCURED</strong>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                onClick={() => seterroroccured(false)}
                              ></button>
                            </div>
                            <div className="toast-body">
                              Your message wasnt sent successfully!
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="col-md-5 pe-0">
                      <Image src="/AboutCompany.jpeg" alt=" Error Message" width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                      />
                      {/* <img src="fullspice.webp" alt="Full Spices " className="imgfluidimg" /> */}
                    </div>
                  </div>

                  <div className={`row justify-content-between`}>
                    <div className={`${Contact.boxtop} col-md-3`}>
                      <div className={`${Contact.dbox}  w-100 text-center`}>
                        <div className={`${Contact.icon}d-flex align-items-center justify-content-center`}>
                          <img src='location.svg' alt="location" loading="lazy" />
                        </div>
                        <div className={`${Contact.text}`}>
                          <p>
                            <span>Address:</span> Ahmedabad , India
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`${Contact.boxtop} col-md-3`}>
                      <div className={`${Contact.dbox} w-100 text-center`}>
                        <div className={`${Contact.icon}d-flex align-items-center justify-content-center`}>
                          <img src='call.svg' alt="Phone Number" loading="lazy"/>
                        </div>
                        <div className={`${Contact.text}`}>
                          <p>
                            <span>Phone:</span>{" "}
                            <Link href="tel://+91 9898997644" className="text-dark">+91 98989 97644</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`${Contact.boxtop} col-md-3`}>
                      <div className={`${Contact.dbox} w-100 text-center`}>
                        <div className={`${Contact.icon}d-flex align-items-center justify-content-center`}>
                          <img src='whatsapp.svg' alt="WhatsApp" loading="lazy" />
                        </div>
                        <div className={`${Contact.text}`}>
                          <p>
                            <span>WhatsApp</span> <Link href="https://wa.me/919898997644?text=Hello I want to Inquiry from you" className="text-dark">+91 9898997644</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`${Contact.boxtop} col-md-3`}>
                      <div className={`${Contact.dbox} w-100 text-center`}>
                        <div className={`${Contact.icon}d-flex align-items-center justify-content-center`}>
                          <img src='mail.svg' alt="Mail Id" loading="lazy" />
                        </div>
                        <div className={`${Contact.text}`}>
                          <p>
                            <span>Email:</span>{" "}
                            <Link href="mailto:sales.fieldman89@gmail.com" className="text-dark">
                              sales.fieldman89@gmail.com
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactFooorm;