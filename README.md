# Gym Site

A simple, calm website that tells you what to do in the gym. Search for a muscle, pick the area you want to focus on, and get exercises with a demo, sets, reps and rest.

> Status: planning. No code yet.

## How it works

1. Search for a muscle group (e.g. "chest", or a synonym like "pecs").
2. Pick a sub-region (e.g. upper, middle, lower or whole chest). Groups with no sub-regions skip this step.
3. See 4 exercises, ordered from compound to isolation, each with a demo GIF and form cues.

## Training prescription

Every exercise uses the same structure:

| | |
|---|---|
| Warm-up | 1 set at about 50% of your working weight (or lighter), for as many reps as you like |
| Working sets | 2–3 sets (2 recommended) |
| Reps | 6–10 recommended. Other rep ranges are shown where they suit an exercise (e.g. calves, abs, forearms). |
| Rest | At least 3 minutes, or until you feel ready. Take 5+ minutes if you need it. Resting too little costs you reps. |

Equipment assumes a full gym.

## Muscle groups (v1)

| Group | Sub-regions |
|---|---|
| Chest | Upper · Middle · Lower · Whole |
| Back | Lats (width) · Upper/mid back (thickness) · Whole |
| Shoulders | Front · Side · Rear · Whole |
| Biceps | Long head · Short head · Brachialis · Whole |
| Triceps | Long head · Lateral/medial heads · Whole |
| Legs | Quads · Hamstrings · Glutes · Calves · Whole |
| Abs | Upper · Lower · Obliques · Whole |
| Forearms | Flexors · Extensors · Whole |
| Lower back | (none) |

## Learn section

Short articles on progressive overload, hypertrophy, calorie deficits, cutting and bulking.

## Planned stack

- Next.js + TypeScript
- Exercise data in a local typed file (no database in v1)
- MDX for articles
- Hosted on Vercel

## Roadmap

- [ ] Phase 1: Web fundamentals (HTML, CSS, JavaScript) and a plain HTML/JS prototype
- [ ] Phase 2: Tooling (Git, npm, TypeScript)
- [ ] Phase 3: React and Next.js; rebuild the prototype
- [ ] Phase 4: Content and data (exercise data, GIF source and licence)
- [ ] Phase 5: Design (wireframes, type, colour, spacing)
- [ ] Phase 6: Build out (search with synonyms, results, exercise pages, learn section)
- [ ] Phase 7: Polish and deploy (accessibility, mobile testing, disclaimer, Vercel)
- [ ] v2: Accounts and progression tracking

## Disclaimer

This site gives general training information, not medical advice.
