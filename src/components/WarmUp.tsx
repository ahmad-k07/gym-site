import type { WarmUpMove } from "@/data/muscles";
import styles from "./WarmUp.module.css";

/** Mobility moves to do before the warm-up set. */
export function WarmUp({ moves }: { moves: WarmUpMove[] }) {
  return (
    <section aria-labelledby="warm-up-heading" className={styles.section}>
      <h2 id="warm-up-heading">Warm up first</h2>
      <p className={styles.intro}>
        Do these to loosen up, then do your warm-up set before your working sets.
      </p>
      <ol className={styles.list}>
        {moves.map((move) => (
          <li key={move.name} className={styles.move}>
            <div className={styles.header}>
              <span className={styles.name}>{move.name}</span>
              <span className={styles.dose}>{move.dose}</span>
            </div>
            <p className={styles.how}>{move.how}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
