import Homecarousel from "@/components/home/homecarousel";
import Owner from "@/components/home/owner";
import AboutUs from "@/components/home/aboutus";
import GroupSection from "@/components/home/groupsection";
import ProductImageCarousel from "@/components/home/productImageCarousel";
import SectionTab from "@/components/home/sectionTabs";
import Head from "next/head";
import ProductsSection from '@/components/home/productSection';


export default function Home() {

  return (
    <>
      <Head>
        <title> Induction Furnace Coil Manufacturer,Water Cooled Cables &amp; Lead Adeptors Supplier,Exporter </title>
        <meta name="description" content="FIELDMAN INDUCTION Manufacturer, Supplier And Exporter Of Furnace Coil,Water Cooled Cables &amp; Lead Adeptors, Induction Furnace Coil, Melting Furnace Coil, Heating Furnace Spares,Induction Melting Furnace Coil,Gujarat, India" />
      </Head>
      <Homecarousel />
      <AboutUs />
      <GroupSection /> 
      {/* Global Clients  */}
      <ProductImageCarousel /> 
      {/* Images CHnage  */}
      <SectionTab />
      <ProductsSection />
      <Owner />
    </>);
}
