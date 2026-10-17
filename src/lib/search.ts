import { muscleGroups } from "@/data/muscles";

export type SearchResult = {
  label: string;
  /** Shown under the label, e.g. "Chest" for "Upper chest". */
  context?: string;
  href: string;
  terms: string[];
};

function normalise(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

// Built once: every muscle group, plus each of its sections when it has more than one.
const index: SearchResult[] = muscleGroups.flatMap((group) => {
  const groupEntry: SearchResult = {
    label: group.name,
    href: `/train/${group.slug}`,
    terms: [group.name, ...group.synonyms].map(normalise),
  };
  if (group.regions.length === 1) return [groupEntry];
  const regionEntries = group.regions.map((region) => ({
    label: region.name,
    context: group.name,
    href: `/train/${group.slug}/${region.slug}`,
    terms: [region.name, `${group.name} ${region.name}`, ...region.synonyms].map(normalise),
  }));
  return [groupEntry, ...regionEntries];
});

/**
 * Scores each entry against the query: an exact term match beats a term that
 * starts with the query, which beats a term that merely contains it.
 */
export function search(query: string, limit = 6): SearchResult[] {
  const q = normalise(query);
  if (!q) return [];

  const scored = index
    .map((entry) => {
      let score = 0;
      for (const term of entry.terms) {
        if (term === q) score = Math.max(score, 3);
        else if (term.startsWith(q) || term.split(" ").some((word) => word.startsWith(q))) {
          score = Math.max(score, 2);
        } else if (q.length >= 3 && term.includes(q)) score = Math.max(score, 1);
      }
      return { entry, score };
    })
    .filter(({ score }) => score > 0);

  // Highest score first; on a tie, whole muscle groups before their regions (stable sort keeps index order).
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(({ entry }) => entry);
}
