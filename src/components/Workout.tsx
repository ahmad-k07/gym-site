import { exercises } from "@/data/exercises";
import type { ExerciseSlot, MuscleGroup, Region } from "@/data/muscles";
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
  const firstId = region.slots[0].exerciseIds[0];

  return (
    <>
      <BackLink href={backHref} label={backLabel} />
      <h1>{title}</h1>
      <p className="lead">{region.blurb}</p>
      {group.tip && <Tip>{group.tip}</Tip>}
      {region.note && <Tip label="Note">{region.note}</Tip>}

      <Prescription />

      <WarmUp moves={region.warmUp ?? group.warmUp} />

      <ExercisesHeading slots={region.slots} />
      {region.slots.map((slot) => (
        <section key={slot.exerciseIds[0]} className={styles.slot}>
          {region.slots.length > 1 && (
            <h3 className={styles.slotHeading}>
              {slot.label}
              <span className={styles.badge}>{slot.optional ? "Optional" : `Pick ${slot.pick}`}</span>
            </h3>
          )}
          <ul className={styles.list}>
            {slot.exerciseIds.map((id) => (
              <li key={id}>
                <ExerciseCard
                  exercise={exercises[id]}
                  priority={id === firstId}
                  headingLevel={region.slots.length > 1 ? 4 : 3}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

function ExercisesHeading({ slots }: { slots: ExerciseSlot[] }) {
  if (slots.length === 1) {
    const [{ pick, optional, exerciseIds }] = slots;
    const count = exerciseIds.length;
    const text = count === 1 ? "Exercise" : `Pick ${pick} of these ${count} exercises`;
    return <h2>{optional ? `Optional: ${text.toLowerCase()}` : text}</h2>;
  }

  const total = slots.filter((slot) => !slot.optional).reduce((sum, slot) => sum + slot.pick, 0);
  return (
    <>
      <h2>Pick {total} exercises</h2>
      <p className={styles.intro}>Choose from each group below.</p>
    </>
  );
}
