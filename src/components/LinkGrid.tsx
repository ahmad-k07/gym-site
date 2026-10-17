import Link from "next/link";
import styles from "./LinkGrid.module.css";

type Item = {
  href: string;
  title: string;
  description?: string;
};

/**
 * A grid of tappable cards. `prefetch` loads each destination in the background so tapping feels instant.
 * Used for muscle groups (titles only) and regions (with a description).
 */
export function LinkGrid({ items }: { items: Item[] }) {
  const hasDescriptions = items.some((item) => item.description);
  return (
    <ul className={hasDescriptions ? styles.listWide : styles.list}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={styles.card} prefetch>
            <span className={styles.title}>{item.title}</span>
            {item.description && <span className={styles.description}>{item.description}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
