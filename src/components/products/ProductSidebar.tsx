import styles from '@/styles/products/ProductSidebar.module.css';

type Group = {
  title: string;
  slug: string;
};

type Props = {
  groups: Group[];
  activeCategory: string;
  setActiveCategory: (slug: string) => void;
};

export default function ProductSidebar({
  groups,
  activeCategory,
  setActiveCategory
}: Props) {

  return (

    <aside className={styles.sidebar}>

      <span>
        PRODUCT CATEGORIES
      </span>

      {groups.map((group) => (

        <button
          key={group.slug}
          className={
            activeCategory === group.slug
              ? styles.active
              : ''
          }
          onClick={() => setActiveCategory(group.slug)}
        >
          {group.title}
        </button>

      ))}

    </aside>
  );
}