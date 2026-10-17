import Link from "next/link";
import styles from "./LinkGrid.module.css";

type Item = {
  href: string;
  title: string;
  /** A short line under the title, e.g. the sections in a muscle group. */
  meta?: string;
  description?: string;
};

/**
 * A grid of tappable cards. `prefetch` loads each destination in the background so tapping feels instant.
 * Used for muscle groups (compact) and sections (with a description).
 */
export function LinkGrid({ items }: { items: Item[] }) {
  const hasDescriptions = items.some((item) => item.description);
  return (
    <ul className={hasDescriptions ? styles.listWide : styles.list}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={styles.card} prefetch>
            <span className={styles.title}>{item.title}</span>
            {item.meta && <span className={styles.meta}>{item.meta}</span>}
            {item.description && <span className={styles.description}>{item.description}</span>}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
