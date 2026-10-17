import styles from "./Tip.module.css";

/** A highlighted piece of advice, e.g. "One curl is enough". */
export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <aside className={styles.tip}>
      <span className={styles.label}>Tip</span>
      <p>{children}</p>
    </aside>
  );
}
