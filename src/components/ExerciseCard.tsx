import Image from "next/image";
import type { Exercise } from "@/data/exercises";
import styles from "./ExerciseCard.module.css";

const equipmentLabel: Record<Exercise["equipment"], string> = {
  barbell: "Barbell",
  dumbbell: "Dumbbells",
  "ez-bar": "EZ-bar",
  cable: "Cable",
  machine: "Machine",
  bodyweight: "Bodyweight",
};

export function ExerciseCard({
  exercise,
  priority = false,
}: {
  exercise: Exercise;
  /** Load the image straight away instead of lazily (for the first card, which is visible on load). */
  priority?: boolean;
}) {
  const src = `/exercises/${exercise.imageId}`;
  return (
    <article className={styles.card}>
      {/* Two photos (start and end position) that swap back and forth, like a GIF. */}
      <div className={styles.demo}>
        <Image
          src={`${src}/0.jpg`}
          alt={`${exercise.name}: start position`}
          fill
          sizes="(min-width: 704px) 330px, 100vw"
          loading={priority ? "eager" : "lazy"}
        />
        <Image
          src={`${src}/1.jpg`}
          alt={`${exercise.name}: end position`}
          fill
          sizes="(min-width: 704px) 330px, 100vw"
          loading={priority ? "eager" : "lazy"}
          className={styles.endFrame}
        />
      </div>

      <div className={styles.body}>
        <p className={styles.meta}>
          {equipmentLabel[exercise.equipment]} · {exercise.mechanic === "compound" ? "Compound" : "Isolation"}
        </p>
        <h3 className={styles.name}>{exercise.name}</h3>
        {exercise.variations && (
          <p className={styles.variations}>
            <strong>Options:</strong> {exercise.variations}
          </p>
        )}

        <p className={styles.reps}>
          <strong>6–10 reps</strong> recommended
          {exercise.altReps && <> · {exercise.altReps} also works well</>}
        </p>

        <ul className={styles.cues}>
          {exercise.cues.map((cue) => (
            <li key={cue}>{cue}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
