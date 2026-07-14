import React, { useRef } from "react";
import { useState } from "react";
import { IoClose, IoMailOutline } from "react-icons/io5";
import { sendWhatsAppInquiry } from "./whatsapp";
import { sendInquiryEmail } from "./email";

interface FormData {
  user_name: string;
  user_company: string;
  user_email: string;
  user_phone: string;
  message: string;
}

const Inquiry = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const form = useRef<HTMLFormElement>(null);

  //DATABASE
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_company: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();


  console.log("📝 Form Submitted");

  console.log("Form Data:", formData);



  if(
    !formData.user_name ||
    !formData.user_phone
  ){

    console.log("❌ Validation Failed");

    alert("Please enter name and phone number");

    return;

  }

  try {


    console.log("📧 Sending EmailJS...");


    const emailResponse = await sendInquiryEmail(formData);


    console.log(
      "✅ EmailJS Success:",
      emailResponse
    );



    console.log(
      "📱 Opening WhatsApp..."
    );


    sendWhatsAppInquiry(formData);



    console.log(
      "✅ WhatsApp Function Called"
    );



    setFormData({

      user_name:"",
      user_company:"",
      user_email:"",
      user_phone:"",
      message:"",

    });



  }

  catch(error){


    console.log(
      "❌ Inquiry Error:",
      error
    );


  }


};

  return (
    <>
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }

          .sidebar-contact {
            position: fixed;
            top: 50%;
            left: -380px;
            transform: translateY(-50%);
            width: 380px;
            height: auto;
            padding: 32px;
            background: #fff;
            border: 1px solid #e8edf2;
            border-radius: 0 14px 14px 0;
            box-shadow: 0 24px 60px rgba(15, 23, 42, 0.22);
            box-sizing: border-box;
            transition: left 0.35s ease;
            z-index: 1200;
          }

          .sidebar-contact.active {
            left: 0;
          }

          .sidebar-contact input,
          .sidebar-contact textarea {
            width: 100%;
            height: 44px;
            padding: 10px 12px;
            margin-bottom: 12px;
            box-sizing: border-box;
            border: 1px solid #d8e0e8;
            border-radius: 8px;
            outline: none;
            color: #111827;
            font-size: 14px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
          }

          .sidebar-contact input:focus,
          .sidebar-contact textarea:focus {
            border-color: #b90f00;
            box-shadow: 0 0 0 3px rgba(185, 15, 0, 0.12);
          }

          .sidebar-contact h2 {
            margin: 0 0 20px;
            padding: 0;
            color: #111827;
            font-size: 26px;
            font-weight: 800;
          }

          .sidebar-contact textarea {
            height: 92px;
            resize: none;
          }

          .sidebar-contact input[type="submit"] {
            height: 46px;
            margin-bottom: 0;
            background: #b90f00;
            color: #fff;
            cursor: pointer;
            border: none;
            font-size: 15px;
            font-weight: 700;
            box-shadow: 0 10px 24px rgba(185, 15, 0, 0.22);
            transition: background 0.25s ease, transform 0.25s ease;
          }

          .sidebar-contact input[type="submit"]:hover {
            background: #901000;
            transform: translateY(-1px);
          }

          .toggle {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 52px;
            width: 52px;
            cursor: pointer;
            background: #b90f00;
            top: 24px;
            right: -52px;
            color: #fff;
            border: 0;
            border-radius: 0 10px 10px 0;
            box-shadow: 0 12px 28px rgba(185, 15, 0, 0.28);
            transition: background 0.25s ease;
          }

          .toggle:hover,
          .toggle.active {
            background: #901000;
          }

          .toggle svg {
            width: 22px;
            height: 22px;
          }

          @media (max-width: 768px) {
            .sidebar-contact {
              width: 100%;
              height: 100%;
              left: -100%;
              top: 0;
              transform: none;
              border-radius: 0;
            }

            .sidebar-contact .toggle {
              top: 50%;
              transform: translateY(-50%);
              transition: top 0.35s ease, right 0.35s ease, transform 0.35s ease;
            }

            .sidebar-contact.active .toggle {
              top: 18px;
              right: 18px;
              transform: translateY(0);
              border-radius: 10px;
            }

            .scroll {
              width: 100%;
              height: 100%;
              // overflow-y: auto;
            }

            .content {
              padding: 50px 50px;
            }
          }
        `}
      </style>
      <div className={`sidebar-contact ${isActive ? "active" : ""}`}>
        <button
          type="button"
          aria-label={isActive ? "Close inquiry form" : "Open inquiry form"}
          className={`toggle ${isActive ? "active" : ""}`}
          onClick={toggleSidebar}
        >
          {isActive ? <IoClose /> : <IoMailOutline />}
        </button>
        <h2>Contact Us</h2>
        <div className="scroll">
          <form onSubmit={handleSubmit} ref={form}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              value={formData.user_name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="user_company"
              placeholder="Company Name"
              value={formData.user_company}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              value={formData.user_phone}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Message here.."
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <input
              type="submit"
              value="Send Inquiry"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
