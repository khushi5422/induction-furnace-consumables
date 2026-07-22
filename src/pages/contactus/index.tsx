import Head from 'next/head';

import ContactHero from '@/components/contact/ContactHero';

import ContactCards from '@/components/contact/ContactCards';

import ContactForm from '@/components/contact/ContactForm';

import ContactMap from '@/components/contact/ContactMap';

import CTASection from '@/components/about/CTASection';
import SEO from '@/components/SEO/SEO';

import Schema from "@/components/SEO/Schema";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Fieldman Induction",
  "url": "https://inductionfurnaceconsumables.com/contact",
  "description": "Contact Fieldman Induction for enquiries related to induction furnace consumables and industrial products."
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://inductionfurnaceconsumables.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact Us",
      "item": "https://inductionfurnaceconsumables.com/contact"
    }
  ]
};
export default function ContactUs() {

  return (
    <>

      <SEO
        title="Contact Fieldman Induction | Request a Quote"
        description="Contact Fieldman Induction for premium induction furnace consumables. Get technical support, pricing and product information."
        canonical="https://inductionfurnaceconsumables.com/contactus"
      />
      <Schema data={contactSchema} />
      <Schema data={breadcrumbSchema} />
      {/* <ContactHero /> */}

      <ContactCards />

      <ContactForm />

      <ContactMap />

      <CTASection />
    </>
  );
}