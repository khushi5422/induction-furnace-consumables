import Homecarousel from "@/components/home/homecarousel";
import Owner from "@/components/home/owner";
import AboutUs from "@/components/home/aboutus";
import GroupSection from "@/components/home/groupsection";
import ProductImageCarousel from "@/components/home/productImageCarousel";
import SectionTab from "@/components/home/sectionTabs";
import SEO from '@/components/SEO/SEO';
import ProductsSection from '@/components/home/productSection';
import GlobalPresence from "@/components/home/globalpresence";
import Schema from "@/components/SEO/Schema";


const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Fieldman Induction",
      "url": "https://inductionfurnaceconsumables.com",
      "logo": "https://inductionfurnaceconsumables.com/logo.svg",
      "description": "Manufacturer and supplier of induction furnace consumables for steel and foundry industries."
    },
    {
      "@type": "WebSite",
      "name": "Fieldman Induction",
      "url": "https://inductionfurnaceconsumables.com"
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
    }
  ]
};

export default function Home() {
  return (
    <>
      <SEO
        title="Induction Furnace Consumables Manufacturer in India | Fieldman Induction"
        description="Leading manufacturer and supplier of premium induction furnace consumables including  coil grout, insulation bricks and more."
        canonical="https://inductionfurnaceconsumables.com"
        keywords="induction furnace consumables, coil grout, induction furnace manufacturer, furnace accessories"
      />
      <Schema data={homeSchema} />
      <Schema data={breadcrumbSchema} />
      <Homecarousel />
      <AboutUs />
      <GroupSection />
      <GlobalPresence />
      <ProductImageCarousel />
      <SectionTab />
      <ProductsSection />
      <Owner />
    </>);
}
