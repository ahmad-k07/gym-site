import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import Link from "next/link";
import { SITE_NAME } from "@/lib/prescription";
import "./globals.css";
import styles from "./layout.module.css";

// Condensed display font for headings, Inter for everything else. next/font serves both from this site.
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="en" className={`${display.variable} ${inter.variable}`}>
      <body>
        <header className={styles.header}>
          <div className={`container ${styles.headerInner}`}>
            <Link href="/" className={styles.logo}>
              <span className={styles.mark} aria-hidden="true" />
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
        {/* Vercel Web Analytics: anonymous page views, no cookies. */}
        <Analytics />
      </body>
    </html>
  );
}
