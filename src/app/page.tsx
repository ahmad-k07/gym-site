import Link from "next/link";
import { LinkGrid } from "@/components/LinkGrid";
import { MuscleSearch } from "@/components/MuscleSearch";
import { muscleGroups } from "@/data/muscles";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>What do you want to train?</h1>
      <p className="lead">
        Search for a muscle and get exercises with demos, sets, reps and rest times.
      </p>
      <MuscleSearch />

      <section className={styles.section}>
        <h2>Or pick a muscle group</h2>
        <LinkGrid
          items={muscleGroups.map((group) => ({ href: `/train/${group.slug}`, title: group.name }))}
        />
      </section>

      <section className={styles.section}>
        <Link href="/splits" className={styles.splits}>
          <span className={styles.splitsTitle}>Not sure how to plan your week? →</span>
          <span className={styles.splitsText}>
            Tell us how many days you can train and we&apos;ll show you which split to follow.
          </span>
        </Link>
      </section>
    </>
  );
}
