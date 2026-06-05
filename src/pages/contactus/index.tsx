import Head from 'next/head';

import ContactHero from '@/components/contact/ContactHero';

import ContactCards from '@/components/contact/ContactCards';

import ContactForm from '@/components/contact/ContactForm';

import ContactMap from '@/components/contact/ContactMap';

import CTASection from '@/components/about/CTASection';

import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function ContactUs() {

  return (
    <>

      <Head>

        <title>
          Contact Fieldman Group | Industrial Engineering Solutions
        </title>

        <meta
          name="description"
          content="Contact Fieldman Group for induction furnace systems, automation and industrial engineering solutions."
        />

      </Head>

      <ContactHero />

      <ContactCards />

      <ContactForm />

      <ContactMap />

      <CTASection />

      <FloatingWhatsApp />

    </>
  );
}