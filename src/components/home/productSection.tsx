'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Product from '@/styles/home/productsSection.module.css';

const productCategories = [
    {
        category: 'Steel Products',
        description:
            'Advanced refractory and casting solutions for steel industries.',

        products: [
            {
                name: 'Slide Gate Refractories',
                image: '/valves.jpg',
                link: '/products',
            },
            {
                name: 'Tundish Boards',
                image: '/Inverter-Scr.jpg',
                link: '/products',
            },
            {
                name: 'Casting Powder',
                image: '/pedestal-bearing.jpg',
                link: '/products',
            }
        ],
    },

    {
        category: 'Foundry Equipments',

        products: [
            {
                name: 'Tundish Boards',
                image: '/Inverter-Scr.jpg',
                link: '/products',
            },
            {
                name: 'Slide Gate Refractories',
                image: '/valves.jpg',
                link: '/products',
            },{
                name: 'Casting Powder',
                image: '/pedestal-bearing.jpg',
                link: '/products',
            }

        ],
    },

    {
        category: 'Induction Systems',

        products: [
            {
                name: 'Tundish Boards',
                image: '/Inverter-Scr.jpg',
                link: '/products',
            },
            {
                name: 'Slide Gate Refractories',
                image: '/valves.jpg',
                link: '/products',
            },
            {
                name: 'Slide Gate Refractories',
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