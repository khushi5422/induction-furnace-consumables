export interface InquiryData {

 user_name:string;

 user_company:string;

 user_email:string;

 user_phone:string;

 message:string;

}



export const sendWhatsAppInquiry = (
 data:InquiryData
)=>{

console.log(
"WhatsApp Data:",
data
); 

const number =
process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;



const text = `

New Inquiry - Fieldman Induction


Name:
${data.user_name}


Company:
${data.user_company}


Email:
${data.user_email}


Phone:
${data.user_phone}


Message:
${data.message}

`;



const url =
`https://wa.me/${number}?text=${encodeURIComponent(text)}`;



window.open(
 url,
 "_blank"
);


};