'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import Product from '@/styles/home/productsSection.module.css';

const productCategories = [
    {
        category: 'Induction Furnace Assembly',

        products: [
            {
                name: 'Steel Melting Furnace Assembly',
                image: '/home-steel-melting-furnace.png',
                link: '/products/steel-melting-furnace-assembly',
            },
            {
                name: 'Induction Furnace Coil',
                image: '/home-steel-melting-coil.png',
                link: '/products/melting-furnace-coil',
            },
            {
                name: 'Top Bottom Spares',
                image: '/home-refractory-top.png',
                link: '/products/furnace-top-cast',
            }
        ],
    },

    {
        category: 'Measuring Instruments',

        products: [
            {
                name: 'Temperature Tips , Lollypop Sampler & Thermocouple',
                image: '/fieldman-sensor.png',
                link: '/products/temperature-tips',
            },
            {
                name: 'Measuring Instruments',
                image: '/measuring-instruments-lance-receptacle.png',
                link: '/products/lance-receptacle',
            }, {
                name: 'Powder Refractories Manufacturer',
                image: '/home-powder-refractories.png',
                link: '/products/casting-powder',
            }

        ],
    },

    {
        category: 'Automation Instruments',

        products: [
            {
                name: 'Fluke',
                image: '/fieldman-control-system.png',
                link: '/products/fluke-instruments',
            },
            {
                name: 'Kyoritsu',
                image: '/kyoritsu.png',
                link: '/products/kyoritsu-instruments',
            },
            {
                name: 'Testo',
                image: '/testo.png',
                link: '/products/testo-instruments',
            }
        ],
    },
];

export default function ProductsSection() {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className={Product.productsHeading}>

                <span className={Product.productTag}>
                    OUR PRODUCTS
                </span>

                <h2>
                    Industrial Solutions Built
                    For Modern Manufacturing
                </h2>

                <p>
                    High-performance furnace systems, induction
                    solutions and industrial components engineered
                    for reliability and efficiency.
                </p>

            </div>
            <section className={Product.productsSection}>
                {/* LEFT SIDE CATEGORY TABS */}

                <div className={Product.leftPanel}>

                    {productCategories.map((item, index) => (

                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`${Product.categoryBtn} ${activeTab === index ? Product.activeCategory : ''
                                }`}
                        >

                            <h4>{item.category}</h4>

                        </button>

                    ))}

                </div>

                {/* RIGHT SIDE PRODUCTS */}

                <div className={Product.rightPanel}>

                    <div className={Product.productsGrid}>

                        {productCategories[activeTab].products.map((product, index) => (

                            <Link
                                href={product.link}
                                key={index}
                                className={Product.productCard}
                                scroll={true}
                            >

                                <div className={Product.imageWrapper}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className={Product.productImage}
                                    />
                                </div>

                                <div className={Product.cardContent}>
                                    <h3>{product.name}</h3>
                                </div>

                            </Link>

                        ))}

                    </div>
                    <div className={Product.viewAllWrapper}>

                        <Link
                            href="/products"
                            className={Product.viewAllBtn}
                            scroll={true}
                        >
                            View All Products
                        </Link>

                    </div>

                </div>

            </section>
        </div>
    );
}