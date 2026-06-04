import NextJsCarousel from "@/components/carousel";
import Slider from "@/components/slider";
import Owner from "@/components/owner";
import Services from "@/components/services";
import AboutUs from "@/components/aboutus";
import { EmblaOptionsType } from "embla-carousel";
import ThumbnailCarousel from "@/components/thumbnailcarousal";
import Inquiry from "@/components/contactForm";
import ImageCarousal from "@/components/imagecarousal";
import SectionTab from "@/components/sectionTabs";
import Head from "next/head";
import ImageGallery from "@/components/imagegallery";
import ProductsSection from '@/components/productSection';
const OPTIONS2: EmblaOptionsType = {}
const SLIDE_COUNT2 = 10
const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())
export default function Home() {
  const handleCardClick = () => {
    alert('Button clicked inside the card!');
  };
  return (
    <>
      <Head>
        <title> Induction Furnace Coil Manufacturer,Water Cooled Cables &amp; Lead Adeptors Supplier,Exporter </title>
        <meta name="description" content="FIELDMAN INDUCTION Manufacturer, Supplier And Exporter Of Furnace Coil,Water Cooled Cables &amp; Lead Adeptors, Induction Furnace Coil, Melting Furnace Coil, Heating Furnace Spares,Induction Melting Furnace Coil,Gujarat, India" />
      </Head>
      <NextJsCarousel />
      <AboutUs />
      {/* without name Image Carousal blank time - 18 sec  && slider is with name blank time 30 sec */}
      {/* <ThumbnailCarousel slides={SLIDES2} options={OPTIONS2} /> */}
      <Services />
      <ImageCarousal />
      <SectionTab />
      <ProductsSection />
      <ImageGallery />
      <Inquiry />
      {/* <Slider /> */}
      <Owner />
    </>);
}
