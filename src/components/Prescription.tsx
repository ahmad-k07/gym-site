import { prescription } from "@/lib/prescription";
import styles from "./Prescription.module.css";

/** The warm-up / sets / reps / rest summary shown above every exercise list. */
export function Prescription() {
  return (
    <section aria-labelledby="prescription-heading" className={styles.panel}>
      <h2 id="prescription-heading" className="visually-hidden">
        Sets, reps and rest
      </h2>
      <dl className={styles.grid}>
        {prescription.map((item) => (
          <div key={item.label} className={styles.item}>
            <dt className={styles.label}>{item.label}</dt>
            <dd className={styles.value}>{item.value}</dd>
            <dd className={styles.detail}>{item.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
