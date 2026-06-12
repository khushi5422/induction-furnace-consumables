import styles from "@/styles/products/ProductSidebar.module.css";
import { productOrganizations } from "@/data/productsData";

type Props = {
  activeCategory: string;
  setActiveCategory: (slug: string) => void;
};

export default function ProductSidebar({
  activeCategory,
  setActiveCategory
}: Props) {

  return (

    <aside className={styles.sidebar}>

      <div className={styles.sidebarInner}>

        <span className={styles.heading}>
          PRODUCT CATEGORIES
        </span>

        {productOrganizations.map((organization) => (

          <div
            key={organization.slug}
            className={styles.organizationCard}
          >

            <div className={styles.organizationTop}>

              <div className={styles.organizationBadge}>
                {organization.organization.charAt(0)}
              </div>

              <div>

                <h3>
                  {organization.organization}
                </h3>

                <p>
                  {organization.description}
                </p>

              </div>

            </div>

            <div className={styles.groupList}>

              {organization.groups.map((group) => (

                <button
                  key={group.slug}
                  className={
                    activeCategory === group.slug
                      ? styles.active
                      : styles.categoryButton
                  }
                  onClick={() => setActiveCategory(group.slug)}
                >

                  <span>
                    {group.title}
                  </span>

                  <small>
                    {group.products.length}
                  </small>

                </button>

              ))}

            </div>

          </div>

        ))}

      </div>

    </aside>

  );
}