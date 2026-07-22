import React, { ReactNode } from "react";
import Navigationbar from "./navbar";
import Footer from "./footer";
import Inquiry from "./contactForm";


interface LayoutProps {
  children: ReactNode;
}

// export const metadata = {

// title:{
// default:"Fieldman Induction | Industrial Induction Furnace Manufacturer",
// template:"%s | Fieldman Induction"
// },


// description:
// "Fieldman Induction manufactures industrial induction furnaces, heating systems and automation solutions for steel and metal industries.",


// keywords:[
// "Induction Furnace Manufacturer",
// "Industrial Heating System",
// "Steel Industry Equipment",
// "Induction Melting Furnace"
// ],


// robots:{
// index:true,
// follow:true
// } ,

// openGraph:{

// title:
// "Fieldman Induction | Industrial Solutions",


// description:
// "Advanced induction heating and industrial engineering solutions.",


// url:
// "https://inductionfurnaceconsumables.com",


// siteName:
// "Fieldman Induction",


// images:[
// {
// url:
// "/logo.svg",
// width:1200,
// height:630
// }
// ],


// type:"website"

// }

// };

export default function Layout({ children }: LayoutProps) {

  return (
    <>
      <style jsx>{`
        .maiin {
  display: grid;
  grid-template-areas:
    "head"
    "content"
    "foot";

  grid-template-rows:
    76px
    1fr
    auto;

  min-height: 100vh;
}
        .headeer {
  grid-area: head;
  min-width: 0;
}

.articlee {
  grid-area: content;
  position: relative;
  min-width: 0;
}

.footeer {
  grid-area: foot;
  min-width: 0;
}
        @media (max-width: 768px) {
          .maiin {
            grid-template-rows: 65px auto 20px;
          }
        }
      `}</style>
      <div className="maiin">
        <div className="headeer">
          <Navigationbar />
        </div>

        <div className="articlee hideOverflowOnMobile">
          <main>{children}</main>{" "}
        </div>
        <Inquiry />
        <div className="footeer"> <Footer /></div>
      </div>
    </>
  );
}
