import Link from "next/link";
import { LinkGrid } from "@/components/LinkGrid";
import { MuscleSearch } from "@/components/MuscleSearch";
import { muscleGroups } from "@/data/muscles";
import styles from "./page.module.css";

const POPULAR = ["chest", "back", "biceps", "legs"];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <span className="eyebrow">Your gym guide</span>
        <h1>
          What are you <span className="accent">training</span> today?
        </h1>
        <p className="lead">
          Search a muscle and get the exercises, sets, reps and rest times. No fluff.
        </p>
        <MuscleSearch />
        <p className={styles.popular}>
          <span>Popular:</span>
          {POPULAR.map((slug) => {
            const group = muscleGroups.find((g) => g.slug === slug)!;
            return (
              <Link key={slug} href={`/train/${slug}`} className={styles.chip}>
                {group.name}
              </Link>
            );
          })}
        </p>
      </section>

      <section className={styles.section}>
        <h2>Pick a muscle group</h2>
        <LinkGrid
          items={muscleGroups.map((group) => ({
            href: `/train/${group.slug}`,
            title: group.name,
            meta:
              group.regions.length > 1
                ? group.regions.map((region) => region.name).join(" · ")
                : undefined,
          }))}
        />
      </section>

      <section className={styles.section}>
        <Link href="/splits" className={styles.splits}>
          <span className="eyebrow">Plan your week</span>
          <span className={styles.splitsTitle}>Find your split</span>
          <span className={styles.splitsText}>
            Tell us how many days you can train and we&apos;ll show you how to split it up.
          </span>
          <span className={styles.splitsArrow} aria-hidden="true">
            →
          </span>
        </Link>
      </section>
    </>
  );
}
