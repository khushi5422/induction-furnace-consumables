import emailjs from "@emailjs/browser";


import { InquiryData } from "./whatsapp";



export const sendInquiryEmail = async(
 data:InquiryData
)=>{

console.log(
"Email Data:",
data
);

return emailjs.send(

process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,

process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,


{

user_name:data.user_name,

user_company:data.user_company,

user_email:data.user_email,

user_phone:data.user_phone,

message:data.message,

},


process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!

);


};