import React, { ReactNode } from "react";
import Navigationbar from "./navbar";
import Footer from "./footer";
import Inquiry from "./contactForm";


interface LayoutProps {
  children: ReactNode;
}

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
