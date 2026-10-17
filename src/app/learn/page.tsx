import type { Metadata } from "next";
import { learnTopics } from "@/data/learn";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Learn",
  description: "Short explanations of progressive overload, hypertrophy, calorie deficits, cutting and bulking.",
};

export default function LearnPage() {
  return (
    <>
      <h1>Learn the basics</h1>
      <p className="lead">The few ideas that matter most, in plain English.</p>

      <nav aria-label="Topics" className={styles.toc}>
        <ul>
          {learnTopics.map((topic) => (
            <li key={topic.slug}>
              <a href={`#${topic.slug}`}>{topic.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {learnTopics.map((topic) => (
        <section key={topic.slug} id={topic.slug} className={styles.topic}>
          <h2>{topic.title}</h2>
          {topic.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
    </>
  );
}
