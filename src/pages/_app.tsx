import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "flag-icons/css/flag-icons.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Layout from "@/components/layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }
  }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <FloatingWhatsApp />
      </Layout>
    </>
  );
}
