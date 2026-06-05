import Head from 'next/head';

import IndustriesHero from '@/components/industries/IndustriesHero';

import IndustriesIntro from '@/components/industries/IndustriesIntro';

import IndustryGrid from '@/components/industries/IndustryGrid';

import TrustSection from '@/components/industries/TrustSection';

import CTASection from '@/components/about/CTASection';

export default function IndustriesPage() {

  return (
    <>

      <Head>

        <title>
          Industries We Serve | Fieldman Group
        </title>

        <meta
          name="description"
          content="Fieldman Group delivers industrial furnace systems, automation and engineering solutions for steel plants, foundries, rolling mills and manufacturing industries."
        />

      </Head>

      <IndustriesHero />

      <IndustriesIntro />

      <IndustryGrid />

      <TrustSection />

      <CTASection />

    </>
  );
}