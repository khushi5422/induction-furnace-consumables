import Head from 'next/head';

import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import StatsSection from '@/components/about/StatsSection';
import GroupCompanies from '@/components/about/GroupCompanies';
import VisionMission from '@/components/about/VisionMission';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import Infrastructure from '@/components/about/Infrastructure';
import Leadership from '@/components/about/Leadership';
import CTASection from '@/components/about/CTASection';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>
          About Us | Fieldman Group Of Industries
        </title>

        <meta
          name="description"
          content="Fieldman Group Of Industries is a trusted manufacturer, supplier and exporter of induction furnace systems, industrial automation products and engineering solutions."
        />
      </Head>

      <main>

        <AboutHero />

        <CompanyStory />

        <StatsSection />

        <GroupCompanies />

        <VisionMission />

        <WhyChooseUs />

       {/* <Infrastructure /> */}

        <Leadership />

        <CTASection /> 

      </main>
    </>
  );
}