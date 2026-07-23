import { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { productOrganizations } from "@/data/productsData";

import styles from "@/styles/products/ProductsPage.module.css";
import SEO from "@/components/SEO/SEO";
import Schema from "@/components/SEO/Schema";
import SEOHead from "@/components/SEO/SEOHead";
import ProductsDesktop from "@/components/products/ProductsDesktop";
import ProductsMobile from "@/components/products/ProductsMobile";

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Induction Furnace Consumables",
  "url": "https://inductionfurnaceconsumables.com/products",
  "description": "Explore induction furnace consumables including graphite crucibles, refractory materials and foundry products."
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
      "name": "Products",
      "item": "https://inductionfurnaceconsumables.com/products"
    }
  ]
};

export default function ProductsPage() {

  return (

    <>
      <SEO
        title="Induction Furnace Consumables Products | Fieldman Induction"
        description="Explore our complete range of induction furnace consumables including silica ramming mass, coil grout, insulation bricks, furnace accessories and more."
        canonical="https://inductionfurnaceconsumables.com/products"
      />
      <Schema data={productsSchema} />
      <Schema data={breadcrumbSchema} />
      <div className={styles.desktopOnly}>
        <ProductsDesktop />
    </div>

    <div className={styles.mobileOnly}>
        <ProductsMobile />
    </div>
    </>

  );
}