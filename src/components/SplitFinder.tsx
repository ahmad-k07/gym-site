"use client";

import Link from "next/link";
import { useState } from "react";
import { MAX_DAYS, MIN_DAYS, splitsByDays, uniqueDays, type Split } from "@/data/splits";
import styles from "./SplitFinder.module.css";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const DAY_OPTIONS = Array.from({ length: MAX_DAYS - MIN_DAYS + 1 }, (_, i) => MIN_DAYS + i);

/** Lets the user pick how many days a week they can train, then shows the matching splits. */
export function SplitFinder() {
  const [days, setDays] = useState(4);
  const splits = splitsByDays[days];

  return (
    <>
      <fieldset className={styles.picker}>
        <legend className={styles.legend}>Days per week</legend>
        <div className={styles.options}>
          {DAY_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              className={styles.option}
              aria-pressed={option === days}
              onClick={() => setDays(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <p className={styles.note}>
          Training 7 days a week is excessive and raises your risk of injury. Your muscles grow while you
          rest, so take at least one day off.
        </p>
      </fieldset>

      <p className={styles.count} aria-live="polite">
        {splits.length === 1
          ? `For ${days} days a week, we recommend:`
          : `For ${days} days a week, choose one of these ${splits.length} splits:`}
      </p>

      <div className={styles.splits}>
        {splits.map((split) => (
          <SplitCard key={split.slug} split={split} />
        ))}
      </div>
    </>
  );
}

function SplitCard({ split }: { split: Split }) {
  return (
    <article className={styles.card}>
      <h2 className={styles.name}>{split.name}</h2>
      <p className={styles.summary}>{split.summary}</p>

      <ol className={styles.week} aria-label="Example week">
        {split.week.map((day, i) => (
          <li key={WEEKDAYS[i]} className={day ? styles.train : styles.rest}>
            <span className={styles.weekday}>{WEEKDAYS[i]}</span>
            <span className={styles.dayLabel}>{day ? day.short : "Rest"}</span>
          </li>
        ))}
      </ol>

      <div className={styles.days}>
        {uniqueDays(split).map((day) => (
          <div key={day.name}>
            <h3 className={styles.dayName}>{day.name}</h3>
            <ul className={styles.targets}>
              {day.targets.map((target) => (
                <li key={target.href}>
                  <Link href={target.href} className={styles.target}>
                    {target.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
