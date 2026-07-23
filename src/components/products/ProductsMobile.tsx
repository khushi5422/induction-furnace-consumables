import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
    productOrganizations,
    ProductOrganization,
    ProductGroup,
    Product,
} from "@/data/productsData";

import styles from "@/styles/products/ProductsPage.module.css";


export default function ProductsMobile() {
    const [search, setSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);


    const [activeOrganization, setActiveOrganization] =
        useState<ProductOrganization>(productOrganizations[0]);

    const [activeCategory, setActiveCategory] =
        useState<ProductGroup>(
            productOrganizations[0].groups[0]
        );

    const handleOrganizationChange = (
        organization: ProductOrganization
    ) => {
        setActiveOrganization(organization);
        setActiveCategory(organization.groups[0]);
    };

    const filteredProducts = useMemo(() => {

        if (!search.trim()) {

            return activeCategory.products;

        }


        const keyword = search.toLowerCase();


        return activeCategory.products.filter((product) => {


            const nameMatch =
                product.name
                    .toLowerCase()
                    .includes(keyword);


            const descriptionMatch =
                Array.isArray(product.shortDescription)

                    ? product.shortDescription.some((item) =>
                        item.toLowerCase().includes(keyword)
                    )

                    : product.shortDescription
                        .toLowerCase()
                        .includes(keyword);


            return nameMatch || descriptionMatch;


        });


    }, [search, activeCategory]);

    return (

        <section className={styles.mobileProducts}>
            
            <div className={styles.mobileFilters}>
                {/* Search */}

                <div className={styles.mobileSearch}>

                    <input
                        type="text"
                        placeholder="Search Products..."
                        value={search}
                        onChange={(e) => {

                            const value = e.target.value;

                            setSearch(value);

                            if (!value.trim()) {
                                setIsSearching(false);
                                setActiveOrganization(productOrganizations[0]);
                                setActiveCategory(productOrganizations[0].groups[0]);
                                return;
                            }


                            const keyword = value.toLowerCase();


                            for (const organization of productOrganizations) {

                                for (const group of organization.groups) {

                                    const matchedProduct = group.products.find((product) => {

                                        const nameMatch =
                                            product.name
                                                .toLowerCase()
                                                .includes(keyword);


                                        const descriptionMatch =
                                            Array.isArray(product.shortDescription)
                                                ? product.shortDescription.some((item) =>
                                                    item.toLowerCase().includes(keyword)
                                                )
                                                : product.shortDescription
                                                    .toLowerCase()
                                                    .includes(keyword);


                                        return nameMatch || descriptionMatch;

                                    });


                                    if (matchedProduct) {

                                        setActiveOrganization(organization);

                                        setActiveCategory(group);

                                        setIsSearching(true);

                                        return;

                                    }

                                }

                            }

                        }}
                    />


                    {search && (

                        <button
                            className={styles.clearSearch}
                            onClick={() => {

                                setSearch("");

                                setIsSearching(false);

                                setActiveOrganization(productOrganizations[0]);

                                setActiveCategory(productOrganizations[0].groups[0]);

                            }}
                        >
                            ×
                        </button>

                    )}

                </div>

                {/* Organizations */}

                <div className={styles.mobileOrganizations}>
                    {productOrganizations.map((organization) => (
                        <button
                            key={organization.slug}
                            onClick={() =>
                                handleOrganizationChange(organization)
                            }
                            className={
                                activeOrganization.slug === organization.slug
                                    ? styles.mobileOrganizationActive
                                    : styles.mobileOrganization
                            }
                        >
                            {organization.organization}
                        </button>
                    ))}
                </div>

                {/* Categories */}

                <div className={styles.mobileCategories}>
                    {activeOrganization.groups.map((group) => (
                        <button
                            key={group.slug}
                            onClick={() => setActiveCategory(group)}
                            className={
                                activeCategory.slug === group.slug
                                    ? styles.mobileCategoryActive
                                    : styles.mobileCategory
                            }
                        >
                            {group.title}
                        </button>
                    ))}
                </div>
            </div>
            {/* Products */}

            <div className={styles.mobileGrid}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className={styles.mobileCard}
                        >
                            <div className={styles.mobileImage}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className={styles.mobileProductImage}
                                />
                            </div>

                            <h3>{product.name}</h3>

                            <span>View Details →</span>
                        </Link>
                    ))
                ) : (
                    <div className={styles.noProducts}>
                        No products found.
                    </div>
                )}
            </div>

        </section>

    );
}