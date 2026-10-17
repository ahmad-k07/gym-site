export type Region = {
  slug: string;
  name: string;
  /** One line shown on the region picker. */
  blurb: string;
  /** Extra words people might search for, e.g. "lats". */
  synonyms: string[];
  /** Exercise IDs in order: compound movements first, isolation last. */
  exerciseIds: string[];
};

export type MuscleGroup = {
  slug: string;
  name: string;
  synonyms: string[];
  /** A group with a single region skips the picker and goes straight to exercises. */
  regions: Region[];
};

export const muscleGroups: MuscleGroup[] = [
  {
    slug: "chest",
    name: "Chest",
    synonyms: ["pecs", "pec", "pectorals"],
    regions: [
      {
        slug: "upper",
        name: "Upper chest",
        blurb: "The top of the chest near the collarbone, trained by pressing at an incline.",
        synonyms: ["upper pecs", "clavicular", "incline"],
        exerciseIds: [
          "barbell-incline-bench-press",
          "incline-dumbbell-press",
          "incline-machine-press",
          "incline-cable-fly",
        ],
      },
      {
        slug: "middle",
        name: "Middle chest",
        blurb: "The bulk of the chest, trained by pressing on a flat bench.",
        synonyms: ["mid chest", "middle pecs", "sternal"],
        exerciseIds: [
          "barbell-bench-press",
          "dumbbell-bench-press",
          "machine-chest-press",
          "pec-deck",
        ],
      },
      {
        slug: "lower",
        name: "Lower chest",
        blurb: "The bottom edge of the chest, trained by pressing downwards.",
        synonyms: ["lower pecs", "decline"],
        exerciseIds: [
          "chest-dip",
          "decline-barbell-bench-press",
          "decline-dumbbell-press",
          "cable-crossover",
        ],
      },
      {
        slug: "whole",
        name: "Whole chest",
        blurb: "A balanced mix covering the upper, middle and lower chest.",
        synonyms: [],
        exerciseIds: [
          "barbell-bench-press",
          "incline-dumbbell-press",
          "chest-dip",
          "pec-deck",
        ],
      },
    ],
  },
  {
    slug: "back",
    name: "Back",
    synonyms: [],
    regions: [
      {
        slug: "lats",
        name: "Lats",
        blurb: "The large muscles down your sides that give your back its width.",
        synonyms: ["lat", "latissimus", "back width", "wings"],
        exerciseIds: [
          "pull-up",
          "wide-grip-lat-pulldown",
          "close-grip-pulldown",
          "straight-arm-pulldown",
        ],
      },
      {
        slug: "upper-back",
        name: "Upper and mid back",
        blurb: "The traps, rhomboids and muscles between your shoulder blades that give your back its thickness.",
        synonyms: ["upper back", "mid back", "middle back", "rhomboids", "traps", "back thickness"],
        exerciseIds: [
          "barbell-row",
          "t-bar-row",
          "seated-cable-row",
          "one-arm-dumbbell-row",
        ],
      },
      {
        slug: "whole",
        name: "Whole back",
        blurb: "A mix of vertical pulls for width and rows for thickness.",
        synonyms: [],
        exerciseIds: [
          "pull-up",
          "barbell-row",
          "wide-grip-lat-pulldown",
          "seated-cable-row",
        ],
      },
    ],
  },
  {
    slug: "shoulders",
    name: "Shoulders",
    synonyms: ["shoulder", "delts", "deltoids"],
    regions: [
      {
        slug: "front",
        name: "Front delts",
        blurb: "The front of the shoulder, trained by pressing overhead.",
        synonyms: ["front delt", "front shoulders", "anterior delts"],
        exerciseIds: [
          "overhead-press",
          "dumbbell-shoulder-press",
          "machine-shoulder-press",
          "cable-front-raise",
        ],
      },
      {
        slug: "side",
        name: "Side delts",
        blurb: "The outside of the shoulder that makes your shoulders look wider.",
        synonyms: ["side delt", "lateral delts", "medial delts", "side shoulders"],
        exerciseIds: [
          "upright-row",
          "lateral-raise",
          "seated-lateral-raise",
          "incline-lateral-raise",
        ],
      },
      {
        slug: "rear",
        name: "Rear delts",
        blurb: "The back of the shoulder, often undertrained and good for posture.",
        synonyms: ["rear delt", "posterior delts", "rear shoulders"],
        exerciseIds: [
          "face-pull",
          "reverse-pec-deck",
          "cable-rear-delt-fly",
          "bent-over-rear-delt-raise",
        ],
      },
      {
        slug: "whole",
        name: "Whole shoulders",
        blurb: "Pressing for the front, plus raises for the side and rear.",
        synonyms: [],
        exerciseIds: [
          "overhead-press",
          "dumbbell-shoulder-press",
          "lateral-raise",
          "reverse-pec-deck",
        ],
      },
    ],
  },
  {
    slug: "biceps",
    name: "Biceps",
    synonyms: ["bicep", "bis", "arms", "guns"],
    regions: [
      {
        slug: "long-head",
        name: "Long head",
        blurb: "The outer part of the biceps that forms the peak. Trained with your arms behind your body.",
        synonyms: ["bicep long head", "biceps peak", "outer biceps"],
        exerciseIds: [
          "incline-dumbbell-curl",
          "drag-curl",
          "close-grip-ez-curl",
          "cable-curl",
        ],
      },
      {
        slug: "short-head",
        name: "Short head",
        blurb: "The inner part of the biceps. Trained with your arms in front of your body.",
        synonyms: ["bicep short head", "inner biceps"],
        exerciseIds: [
          "preacher-curl",
          "wide-grip-barbell-curl",
          "spider-curl",
          "concentration-curl",
        ],
      },
      {
        slug: "brachialis",
        name: "Brachialis",
        blurb: "The muscle under the biceps that pushes them up and adds arm thickness. Trained with a neutral grip.",
        synonyms: ["brachioradialis", "hammer"],
        exerciseIds: [
          "hammer-curl",
          "cross-body-hammer-curl",
          "reverse-barbell-curl",
          "rope-hammer-curl",
        ],
      },
      {
        slug: "whole",
        name: "Whole biceps",
        blurb: "A mix that covers both heads and the brachialis.",
        synonyms: [],
        exerciseIds: [
          "barbell-curl",
          "incline-dumbbell-curl",
          "preacher-curl",
          "hammer-curl",
        ],
      },
    ],
  },
  {
    slug: "triceps",
    name: "Triceps",
    synonyms: ["tricep", "tris", "arms"],
    regions: [
      {
        slug: "long-head",
        name: "Long head",
        blurb: "The largest part of the triceps, trained best with your arms overhead.",
        synonyms: ["tricep long head", "triceps long head"],
        exerciseIds: [
          "overhead-cable-extension",
          "ez-bar-skullcrusher",
          "overhead-dumbbell-extension",
          "lying-dumbbell-extension",
        ],
      },
      {
        slug: "lateral-medial",
        name: "Lateral and medial heads",
        blurb: "The outer horseshoe of the triceps, trained by pressing and pushdowns.",
        synonyms: ["lateral head", "medial head", "outer triceps", "horseshoe"],
        exerciseIds: [
          "close-grip-bench-press",
          "triceps-dip",
          "rope-pushdown",
          "bar-pushdown",
        ],
      },
      {
        slug: "whole",
        name: "Whole triceps",
        blurb: "Heavy pressing plus overhead and pushdown work for all three heads.",
        synonyms: [],
        exerciseIds: [
          "close-grip-bench-press",
          "triceps-dip",
          "overhead-cable-extension",
          "rope-pushdown",
        ],
      },
    ],
  },
  {
    slug: "legs",
    name: "Legs",
    synonyms: ["leg", "lower body", "leg day"],
    regions: [
      {
        slug: "quads",
        name: "Quads",
        blurb: "The front of the thighs, trained by squatting and straightening the knee.",
        synonyms: ["quad", "quadriceps", "thighs", "front of thighs"],
        exerciseIds: ["barbell-squat", "leg-press", "hack-squat", "leg-extension"],
      },
      {
        slug: "hamstrings",
        name: "Hamstrings",
        blurb: "The back of the thighs, trained by hip hinges and leg curls.",
        synonyms: ["hamstring", "hammies", "hams", "back of thighs"],
        exerciseIds: [
          "romanian-deadlift",
          "dumbbell-stiff-leg-deadlift",
          "lying-leg-curl",
          "seated-leg-curl",
        ],
      },
      {
        slug: "glutes",
        name: "Glutes",
        blurb: "The muscles of the hips and bum, trained by driving your hips forward.",
        synonyms: ["glute", "bum", "butt", "booty", "hips"],
        exerciseIds: [
          "hip-thrust",
          "bulgarian-split-squat",
          "cable-pull-through",
          "cable-kickback",
        ],
      },
      {
        slug: "calves",
        name: "Calves",
        blurb: "The lower legs, trained by raising your heels.",
        synonyms: ["calf", "lower legs"],
        exerciseIds: [
          "standing-calf-raise",
          "seated-calf-raise",
          "leg-press-calf-raise",
          "smith-calf-raise",
        ],
      },
      {
        slug: "whole",
        name: "Whole legs",
        blurb: "A squat, a hinge, a press and a curl to cover the front and back of your legs.",
        synonyms: [],
        exerciseIds: ["barbell-squat", "romanian-deadlift", "leg-press", "lying-leg-curl"],
      },
    ],
  },
  {
    slug: "abs",
    name: "Abs",
    synonyms: ["abdominals", "core", "stomach", "six pack", "ab"],
    regions: [
      {
        slug: "upper",
        name: "Upper abs",
        blurb: "Trained by curling your ribs down towards your hips.",
        synonyms: ["upper ab"],
        exerciseIds: ["cable-crunch", "ab-crunch-machine", "decline-crunch", "crunch"],
      },
      {
        slug: "lower",
        name: "Lower abs",
        blurb: "Trained by curling your hips up towards your ribs.",
        synonyms: ["lower ab"],
        exerciseIds: [
          "hanging-leg-raise",
          "captains-chair-knee-raise",
          "reverse-crunch",
          "lying-leg-raise",
        ],
      },
      {
        slug: "obliques",
        name: "Obliques",
        blurb: "The sides of your waist, trained by twisting, bending sideways and resisting rotation.",
        synonyms: ["oblique", "side abs", "love handles", "waist"],
        exerciseIds: ["cable-woodchop", "pallof-press", "dumbbell-side-bend", "oblique-crunch"],
      },
      {
        slug: "whole",
        name: "Whole core",
        blurb: "Upper, lower and obliques, plus a rollout for overall strength.",
        synonyms: [],
        exerciseIds: ["cable-crunch", "hanging-leg-raise", "barbell-rollout", "cable-woodchop"],
      },
    ],
  },
  {
    slug: "forearms",
    name: "Forearms",
    synonyms: ["forearm", "grip", "wrists", "wrist"],
    regions: [
      {
        slug: "flexors",
        name: "Flexors",
        blurb: "The palm side of the forearm, used for grip. Trained with palms-up wrist curls.",
        synonyms: ["forearm flexors", "wrist flexors", "inner forearm"],
        exerciseIds: [
          "barbell-wrist-curl",
          "dumbbell-wrist-curl",
          "cable-wrist-curl",
          "behind-back-wrist-curl",
        ],
      },
      {
        slug: "extensors",
        name: "Extensors",
        blurb: "The back of the forearm. Trained with palms-down movements.",
        synonyms: ["forearm extensors", "wrist extensors", "outer forearm"],
        exerciseIds: [
          "reverse-barbell-curl",
          "reverse-wrist-curl",
          "dumbbell-reverse-wrist-curl",
          "wrist-roller",
        ],
      },
      {
        slug: "whole",
        name: "Whole forearms",
        blurb: "Both sides of the forearm.",
        synonyms: [],
        exerciseIds: [
          "reverse-barbell-curl",
          "barbell-wrist-curl",
          "reverse-wrist-curl",
          "wrist-roller",
        ],
      },
    ],
  },
  {
    slug: "lower-back",
    name: "Lower back",
    synonyms: ["erectors", "spinal erectors", "low back"],
    regions: [
      {
        slug: "all",
        name: "Lower back",
        blurb: "The muscles along your spine that keep your back strong and stable.",
        synonyms: [],
        exerciseIds: ["deadlift", "good-morning", "back-extension", "reverse-hyperextension"],
      },
    ],
  },
];

export function getGroup(slug: string): MuscleGroup | undefined {
  return muscleGroups.find((group) => group.slug === slug);
}

export function getRegion(group: MuscleGroup, slug: string): Region | undefined {
  return group.regions.find((region) => region.slug === slug);
}
