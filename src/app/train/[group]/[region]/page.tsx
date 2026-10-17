import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageLoading } from "@/components/PageLoading";
import { Workout } from "@/components/Workout";
import { getGroup, getRegion, muscleGroups } from "@/data/muscles";

type Params = PageProps<"/train/[group]/[region]">["params"];

// Build one static page per region, e.g. /train/chest/upper.
export function generateStaticParams() {
  return muscleGroups.flatMap((group) =>
    group.regions.map((region) => ({ group: group.slug, region: region.slug })),
  );
}

async function find(params: Params) {
  const { group: groupSlug, region: regionSlug } = await params;
  const group = getGroup(groupSlug);
  const region = group && getRegion(group, regionSlug);
  return { group, region };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { region } = await find(params);
  return { title: region?.name };
}

// Reading the URL is wrapped in <Suspense> so a navigation can show the page frame instantly.
export default function RegionPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<PageLoading />}>
      <RegionContent params={params} />
    </Suspense>
  );
}

async function RegionContent({ params }: { params: Params }) {
  const { group, region } = await find(params);
  if (!group || !region) notFound();

  const hasPicker = group.regions.length > 1;
  return (
    <Workout
      group={group}
      region={region}
      backHref={hasPicker ? `/train/${group.slug}` : "/"}
      backLabel={hasPicker ? group.name : "All muscles"}
    />
  );
}
