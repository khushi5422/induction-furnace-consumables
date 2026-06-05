import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import Home from '@/styles/home/homecarousel.module.css'

const Homecarousel = () => {
  const images = [
    {
      src: "Banner 1.jpg",
      heading: "Induction Furnace Coil",
      description:
        "Precision-built furnace coils, assemblies and industrial spares for demanding steel and foundry applications.",
    },
    {
      src: "Banner 2.jpg",
      heading: "Induction Furnace Assembly",
      description:
        "Reliable furnace assemblies engineered for efficient melting, heating and long-term plant performance.",
    },
    {
      src: "Banner 3.jpg",
      heading: "Refractory Top Cast & Bottom Cast",
      description:
        "Manufacturing and export support for refractory components, furnace spares and allied industrial products.",
    },
    {
      src: "Banner 4.jpg",
      heading: "Industrial Furnace Spares",
      description:
        "A complete product range across Fieldman Induction, Fieldman Sensors and Fieldman Control System.",
    }
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const handleImageChange = (index: React.SetStateAction<number>) => {
    setSelectedImageIndex(index);
  };
  return (
    <Carousel
      className="custom"
      selectedItem={selectedImageIndex}
      onChange={handleImageChange}
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      stopOnHover={true}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={80}>
      {images.map((image, index) => (
        <div key={index} className={Home.heroSlide}>
          <img src={image.src} alt={image.heading} className={Home.carouselhei} loading={index === 0 ? "eager" : "lazy"} />
          <div className={Home.heroOverlay}></div>
          <div
            className={`${Home.heroContent} ${index === selectedImageIndex ? Home.heroContentActive : ""}`}
          >
            <span className={Home.heroEyebrow}>FIELDMAN GROUP OF INDUSTRIES</span>
            <h1>{image.heading}</h1>
            <p>{image.description}</p>
            <div className={Home.heroActions}>
              <Link href="/products" className={Home.heroPrimaryBtn}>
                View Products
              </Link>
              <Link href="/contactus" className={Home.heroSecondaryBtn}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
export default Homecarousel;
