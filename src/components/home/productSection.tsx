'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Product from '@/styles/home/productsSection.module.css';

const productCategories = [
    {
        category: 'Induction Furnace Assembly',
        description:
            'We Manufacture Induction Melting Furnace Assembly.',

        products: [
            {
                name: 'Steel Melting Furnace Assembly',
                image: '/steel-melting-furnace-assembly.png',
                link: '/products/steel-melting-furnace-assembly',
            },
            {
                name: 'Induction Furnace Coil',
                image: '/Inverter-Scr.jpg',
                link: '/products',
            },
            {
                name: 'Top Bottom Spares',
                image: '/pedestal-bearing.jpg',
                link: '/products',
            }
        ],
    },

    {
        category: 'Measuring Instruments',

        products: [
            {
                name: 'Temperature Tips , Lollypop Sampler & Thermocouple',
                image: '/Inverter-Scr.jpg',
                link: '/products',
            },
            {
                name: 'Measuring Instruments',
                image: '/valves.jpg',
                link: '/products',
            },{
                name: 'Powder Refractories Manufacturer',
                image: '/pedestal-bearing.jpg',
                link: '/products',
            }

        ],
    },

    {
        category: 'Automation Instruments',

        products: [
            {
                name: 'Fluke',
                image: '/Inverter-Scr.jpg',
                link: '/products',
            },
            {
                name: 'Kyrotisu',
                image: '/valves.jpg',
                link: '/products',
            },
            {
                name: 'Extech',
                image: '/pedestal-bearing.jpg',
                link: '/products',
            },
            {
                name: 'Metravi',
                image: '/pedestal-bearing.jpg',
                link: '/products',
            },
            {
                name: 'Testo',
                image: '/pedestal-bearing.jpg',
                link: '/products',
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

                            <p>{item.description}</p>

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
                            >

                                <div className={Product.imageWrapper}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
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
                        >
                            View All Products
                        </Link>

                    </div>

                </div>

            </section>
        </div>
    );
}