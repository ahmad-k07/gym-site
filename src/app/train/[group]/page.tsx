import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BackLink } from "@/components/BackLink";
import { LinkGrid } from "@/components/LinkGrid";
import { PageLoading } from "@/components/PageLoading";
import { Tip } from "@/components/Tip";
import { Workout } from "@/components/Workout";
import { getGroup, muscleGroups } from "@/data/muscles";

// Build one static page per muscle group at build time.
export function generateStaticParams() {
  return muscleGroups.map((group) => ({ group: group.slug }));
}

export async function generateMetadata({ params }: PageProps<"/train/[group]">): Promise<Metadata> {
  const group = getGroup((await params).group);
  return { title: group?.name };
}

// Reading the URL is wrapped in <Suspense> so a navigation can show the page frame instantly.
export default function GroupPage({ params }: PageProps<"/train/[group]">) {
  return (
    <Suspense fallback={<PageLoading />}>
      <GroupContent params={params} />
    </Suspense>
  );
}

async function GroupContent({ params }: { params: PageProps<"/train/[group]">["params"] }) {
  const group = getGroup((await params).group);
  if (!group) notFound();

  // Groups with only one section (e.g. biceps) skip the picker.
  if (group.regions.length === 1) {
    return <Workout group={group} region={group.regions[0]} backHref="/" backLabel="All muscles" />;
  }

  return (
    <>
      <BackLink href="/" label="All muscles" />
      <h1>{group.name}</h1>
      <p className="lead">Which part do you want to focus on?</p>
      {group.tip && <Tip>{group.tip}</Tip>}
      <LinkGrid
        items={group.regions.map((region) => ({
          href: `/train/${group.slug}/${region.slug}`,
          title: region.name,
          description: region.blurb,
        }))}
      />
    </>
  );
}
