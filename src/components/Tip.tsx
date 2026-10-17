import styles from "./Tip.module.css";

/** A highlighted piece of advice, e.g. "One curl is enough". */
export function Tip({ children, label = "Tip" }: { children: React.ReactNode; label?: string }) {
  return (
    <aside className={styles.tip}>
      <span className={styles.label}>{label}</span>
      <p>{children}</p>
    </aside>
  );
}
