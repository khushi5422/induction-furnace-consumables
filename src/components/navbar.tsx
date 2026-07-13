import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Home from '@/styles/navbar.module.css'
import { productOrganizations } from "@/data/productsData";

const Navigationbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const closeProductsMenu = () => {
    setIsProductsOpen(false);
  };

  return (

    <header className={Home.customNavbar}>

      <div className={Home.navContainer}>

        {/* LOGO */}

        <Link href="/" className={Home.logoWrapper}>

          <div className={Home.navlogoWrap}>

            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              priority
              className={Home.navlogo}
            />

          </div>

        </Link>

        {/* MOBILE BUTTON */}

        <button
          className={Home.mobileToggle}
          onClick={() => setIsProductsOpen(!isProductsOpen)}
        >
          ☰
        </button>

        {/* NAVIGATION */}

        <nav className={Home.centerNav}>

          <Link href="/" className={Home.navLink}>
            Home
          </Link>

          <Link href="/aboutus" className={Home.navLink}>
            About
          </Link>

          {/* PRODUCTS */}

          <div
            className={Home.dropdownWrapper}
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsProductsOpen(false);
              }, 150);
            }}
          >

            <button className={Home.dropdownButton}>
              Products
            </button>

            {isProductsOpen && (

              <div className={Home.dropdownMenu}>

                <div className={Home.megaMenu}>

                  <div className={Home.megaIntro}>

                    <span className={Home.megaEyebrow}>
                      PRODUCT RANGE
                    </span>

                    <h3>
                      Explore by organization
                    </h3>

                    <p>
                      Browse our major product lines across induction,
                      sensors, automation and industrial materials.
                    </p>

                    <Link
                      href="/products"
                      className={Home.megaCta}
                      onClick={closeProductsMenu}
                    >
                      View all products
                    </Link>

                  </div>

                  <div className={Home.megaGrid}>

                    {productOrganizations.map((organization) => (

                      <div
                        className={Home.megaColumn}
                        key={organization.slug}
                      >

                        <div className={Home.organizationHeader}>

                          <div>

                            <h4>
                              {organization.organization}
                            </h4>

                          </div>

                        </div>

                        {organization.groups.slice(0, 3).map((group) => (

                          <div
                            className={Home.productGroup}
                            key={group.slug}
                          >

                            <div
                            //  href={`/products/${group.slug}`}
                              className={Home.productMainLink}
                              // onClick={closeProductsMenu}
                            >
                              {group.title}
                            </div>

                            <div className={Home.subProductList}>

                              {group.products.slice(0, 2).map((product) => (

                                <Link
                                  href={`/products/${product.slug}`}
                                  key={product.slug}
                                  className={Home.productItem}
                                  onClick={closeProductsMenu}
                                >
                                  <span className={Home.productDot}></span>

                                  {product.name}

                                </Link>

                              ))}

                            </div>

                            <Link
                              href={`/products`}
                              className={Home.viewAllProducts}
                              onClick={closeProductsMenu}
                            >
                              View All →
                            </Link>

                          </div>

                        ))}

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            )}

          </div>

          <Link href="/contactus" className={Home.navLink}>
            Contact
          </Link>

          <Link href="/faq" className={Home.navLink}>
            FAQ
          </Link>

          <Link
            href="/contactus"
            className={Home.quoteButton}
          >
            Get Quote
          </Link>

        </nav>

      </div>

    </header>

  );
};

export default Navigationbar;
