import { exercises } from "@/data/exercises";
import type { Region } from "@/data/muscles";
import { BackLink } from "./BackLink";
import { ExerciseCard } from "./ExerciseCard";
import { Prescription } from "./Prescription";
import styles from "./Workout.module.css";

/** The results page body: heading, the sets/reps/rest summary, then the exercises in order. */
export function Workout({
  region,
  backHref,
  backLabel,
}: {
  region: Region;
  backHref: string;
  backLabel: string;
}) {
  return (
    <>
      <BackLink href={backHref} label={backLabel} />
      <h1>{region.name}</h1>
      <p className="lead">{region.blurb}</p>

      <Prescription />

      <h2>Exercises</h2>
      <p className={styles.hint}>
        Do them in this order: the heavier compound movements come first, while you&apos;re fresh.
      </p>
      <ol className={styles.list}>
        {region.exerciseIds.map((id, i) => (
          <li key={id}>
            <ExerciseCard exercise={exercises[id]} number={i + 1} priority={i === 0} />
          </li>
        ))}
      </ol>
    </>
  );
}
