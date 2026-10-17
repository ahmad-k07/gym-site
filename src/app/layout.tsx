import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/prescription";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Search for a muscle and get exercises with demos, sets, reps and rest times.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div className={`container ${styles.headerInner}`}>
            <Link href="/" className={styles.logo}>
              {SITE_NAME}
            </Link>
            <nav aria-label="Main">
              <ul className={styles.nav}>
                <li>
                  <Link href="/">Train</Link>
                </li>
                <li>
                  <Link href="/splits">Splits</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className={`container ${styles.main}`}>{children}</main>

        <footer className={styles.footer}>
          <div className="container">
            <p>
              General training information, not medical advice. Exercise images from{" "}
              <a href="https://github.com/yuhonas/free-exercise-db">free-exercise-db</a>{" "}
              (public domain).
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
