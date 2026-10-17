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
  headingLevel = 3,
}: {
  exercise: Exercise;
  /** 4 when the card sits under a group heading, so the page outline stays correct. */
  headingLevel?: 3 | 4;
  /** Load the image straight away instead of lazily (for the first card, which is visible on load). */
  priority?: boolean;
}) {
  const src = `/exercises/${exercise.imageId}`;
  const Heading = headingLevel === 4 ? "h4" : "h3";
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
        <p className={styles.chips}>
          <span className={styles.chip}>{equipmentLabel[exercise.equipment]}</span>
          <span className={styles.chip}>{exercise.mechanic === "compound" ? "Compound" : "Isolation"}</span>
        </p>
        <Heading className={styles.name}>{exercise.name}</Heading>
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

        {/* A search link, not an embed: no video is hosted or copied here. */}
        <a
          className={styles.video}
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${exercise.name} proper form`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch a video demo
          <span className="visually-hidden"> (opens YouTube in a new tab)</span>
          <span aria-hidden="true"> ↗</span>
        </a>
      </div>
    </article>
  );
}
