import Head from 'next/head';

import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import StatsSection from '@/components/about/StatsSection';
import GroupCompanies from '@/components/about/GroupCompanies';
import VisionMission from '@/components/about/VisionMission';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import Leadership from '@/components/about/Leadership';
import CTASection from '@/components/about/CTASection';
import SEO from '@/components/SEO/SEO';
import Schema from "@/components/SEO/Schema";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Fieldman Induction",
  "url": "https://inductionfurnaceconsumables.com/about",
  "description": "Learn about Fieldman Induction, a trusted manufacturer of induction furnace consumables serving steel and foundry industries."
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
      "name": "About Us",
      "item": "https://inductionfurnaceconsumables.com/about"
    }
  ]
};
export default function AboutUs() {
  return (
    <>
      <SEO
        title="About Fieldman Induction | Leading Induction Furnace Consumables Manufacturer"
        description="Learn about Fieldman Induction, our expertise, manufacturing process, quality standards and commitment to the steel industry."
        canonical="https://inductionfurnaceconsumables.com/aboutus"
      />
      <Schema data={aboutSchema} />
      <Schema data={breadcrumbSchema} />
      <main>
        <AboutHero />

        <CompanyStory />

        <StatsSection />

        <GroupCompanies />

        <VisionMission />

        <WhyChooseUs />

        <Leadership />

        <CTASection />

      </main>
    </>
  );
}