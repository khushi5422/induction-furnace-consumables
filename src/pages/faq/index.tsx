
import FAQHero from '@/components/faq/FAQHero';

import FAQAccordion from '@/components/faq/FAQAccordion';

import CTASection from '@/components/about/CTASection';
import SEO from '@/components/SEO/SEO';
import Schema from '@/components/SEO/Schema';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are induction furnace consumables?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Induction furnace consumables are materials used during metal melting processes such as graphite crucibles, refractory materials and ramming mass."
      }
    }
  ]
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
      "name": "FAQs",
      "item": "https://inductionfurnaceconsumables.com/faq"
    }
  ]
};
export default function FAQPage() {

  return (
    <>

      <SEO
        title="Induction Furnace Consumables FAQs | Fieldman Induction"
        description="Find answers to common questions about induction furnace consumables, graphite crucibles, refractory materials, ramming mass and steel industry products."
        canonical="https://inductionfurnaceconsumables.com/faq"
      />
      <Schema data={faqSchema} />
      <Schema data={breadcrumbSchema} />
      <FAQHero />

      <FAQAccordion />

      <CTASection />

    </>
  );
}