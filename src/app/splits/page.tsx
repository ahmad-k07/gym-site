import type { Metadata } from "next";
import { SplitFinder } from "@/components/SplitFinder";

export const metadata: Metadata = {
  title: "Splits",
  description: "Find a training split based on how many days a week you can get to the gym.",
};

export default function SplitsPage() {
  return (
    <>
      <h1>Find your split</h1>
      <p className="lead">
        How many days a week can you get to the gym? We&apos;ll show you how to split up your training.
      </p>
      <SplitFinder />
    </>
  );
}
