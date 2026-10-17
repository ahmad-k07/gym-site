import { exercises } from "@/data/exercises";
import type { MuscleGroup, Region } from "@/data/muscles";
import { BackLink } from "./BackLink";
import { ExerciseCard } from "./ExerciseCard";
import { Prescription } from "./Prescription";
import { Tip } from "./Tip";
import { WarmUp } from "./WarmUp";
import styles from "./Workout.module.css";

/** The results page body: heading, tip, sets/reps/rest summary, warm-up moves, then the exercises. */
export function Workout({
  group,
  region,
  backHref,
  backLabel,
}: {
  group: MuscleGroup;
  region: Region;
  backHref: string;
  backLabel: string;
}) {
  // A group with one section (e.g. Biceps) is titled by the group, not the section.
  const title = group.regions.length === 1 ? group.name : region.name;
  const count = region.exerciseIds.length;

  return (
    <>
      <BackLink href={backHref} label={backLabel} />
      <h1>{title}</h1>
      <p className="lead">{region.blurb}</p>
      {group.tip && <Tip>{group.tip}</Tip>}

      <Prescription />

      <WarmUp moves={region.warmUp ?? group.warmUp} />

      <h2>{region.pick ? `Pick ${region.pick} of these ${count} exercises` : "Exercises"}</h2>
      <ul className={styles.list}>
        {region.exerciseIds.map((id, i) => (
          <li key={id}>
            <ExerciseCard exercise={exercises[id]} priority={i === 0} />
          </li>
        ))}
      </ul>
    </>
  );
}
