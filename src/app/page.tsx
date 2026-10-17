import Link from "next/link";
import { LinkGrid } from "@/components/LinkGrid";
import { MuscleSearch } from "@/components/MuscleSearch";
import { learnTopics } from "@/data/learn";
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
        <h2>Learn the basics</h2>
        <ul className={styles.topics}>
          {learnTopics.map((topic) => (
            <li key={topic.slug}>
              <Link href={`/learn#${topic.slug}`} className={styles.topic}>
                <span className={styles.topicTitle}>{topic.title}</span>
                <span className={styles.topicSummary}>{topic.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
