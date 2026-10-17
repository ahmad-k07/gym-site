"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MAX_DAYS, MIN_DAYS, splitsByDays, type DayTemplate, type Split } from "@/data/splits";
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
  const [open, setOpen] = useState<number | null>(null);
  const weekRef = useRef<HTMLOListElement>(null);

  // Close the popover when tapping outside the week strip or pressing Escape.
  useEffect(() => {
    if (open === null) return;
    function onPointerDown(event: PointerEvent) {
      if (!weekRef.current?.contains(event.target as Node)) setOpen(null);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(null);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <article className={styles.card}>
      <h2 className={styles.name}>{split.name}</h2>
      <p className={styles.summary}>{split.summary}</p>

      <ol ref={weekRef} className={styles.week} aria-label="Example week">
        {split.week.map((day, i) => (
          <li key={WEEKDAYS[i]} className={styles.cell}>
            {day ? (
              <TrainingDay
                day={day}
                weekday={WEEKDAYS[i]}
                index={i}
                open={open === i}
                onOpen={() => setOpen(i)}
                onToggle={() => setOpen(open === i ? null : i)}
                onClose={() => setOpen(null)}
              />
            ) : (
              <div className={styles.rest}>
                <span className={styles.weekday}>{WEEKDAYS[i]}</span>
                <span className={styles.dayLabel}>Rest</span>
              </div>
            )}
          </li>
        ))}
      </ol>
      <p className={styles.hint}>Hover or tap a day to see what to train, and in what order.</p>
    </article>
  );
}

function TrainingDay({
  day,
  weekday,
  index,
  open,
  onOpen,
  onToggle,
  onClose,
}: {
  day: DayTemplate;
  weekday: string;
  index: number;
  open: boolean;
  onOpen: () => void;
  onToggle: () => void;
  onClose: () => void;
}) {
  const popoverId = `${weekday}-${day.short}`.replace(/\W+/g, "-");
  // Keep the popover on screen: days near the edges open towards the middle.
  const align = index < 2 ? styles.alignStart : index > 4 ? styles.alignEnd : "";

  return (
    <div
      className={styles.dayWrap}
      // Only real mouse hovers open on hover; taps are handled by onClick.
      onPointerEnter={(event) => event.pointerType === "mouse" && onOpen()}
      onPointerLeave={(event) => event.pointerType === "mouse" && onClose()}
    >
      <button
        type="button"
        className={styles.train}
        aria-expanded={open}
        aria-controls={popoverId}
        onClick={onToggle}
      >
        <span className={styles.weekday}>{weekday}</span>
        <span className={styles.dayLabel}>{day.short}</span>
      </button>
      {open && (
        <div id={popoverId} className={`${styles.popover} ${align}`} role="dialog" aria-label={day.name}>
          <p className={styles.popoverTitle}>{day.name}</p>
          <p className={styles.popoverHint}>Train in this order:</p>
          <ol className={styles.targets}>
            {day.targets.map((target, i) => (
              <li key={target.href}>
                <Link href={target.href} className={styles.target}>
                  <span className={styles.step}>{i + 1}</span>
                  <span className={styles.targetLabel}>{target.label}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
