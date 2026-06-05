import Head from 'next/head';

import FAQHero from '@/components/faq/FAQHero';

import FAQAccordion from '@/components/faq/FAQAccordion';

import CTASection from '@/components/about/CTASection';

export default function FAQPage() {

  return (
    <>

      <Head>

        <title>
          FAQ | Fieldman Group
        </title>

        <meta
          name="description"
          content="Frequently asked questions about Fieldman Group industrial manufacturing and engineering solutions."
        />

      </Head>

      <FAQHero />

      <FAQAccordion />

      <CTASection />

    </>
  );
}