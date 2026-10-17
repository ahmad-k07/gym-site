export type WarmUpMove = {
  name: string;
  /** How much to do, e.g. "10 each way" or "15 seconds each side". */
  dose: string;
  how: string;
};

export type Region = {
  slug: string;
  name: string;
  /** One line shown on the region picker and under the page heading. */
  blurb: string;
  /** Extra words people might search for, e.g. "upper pecs". */
  synonyms: string[];
  /** How many of the listed exercises to pick for a session. Shown as "Pick X of these". */
  pick?: number;
  /** Overrides the group's warm-up when this region needs different moves. */
  warmUp?: WarmUpMove[];
  exerciseIds: string[];
};

export type MuscleGroup = {
  slug: string;
  name: string;
  synonyms: string[];
  /** Advice shown on the group page and its workouts. */
  tip?: string;
  /** Mobility moves done before the warm-up set. */
  warmUp: WarmUpMove[];
  /** A group with a single region skips the picker and goes straight to exercises. */
  regions: Region[];
};

export const muscleGroups: MuscleGroup[] = [
  {
    slug: "chest",
    name: "Chest",
    synonyms: ["pecs", "pec", "pectorals"],
    tip: "Doing one flat movement (e.g. bench press or pec deck) and one upper chest movement (e.g. incline Smith press) is highly recommended.",
    warmUp: [
      { name: "Arm circles", dose: "10 forwards, 10 backwards", how: "Arms straight out to the sides, making big slow circles." },
      { name: "Cross-body arm swings", dose: "10 swings", how: "Swing your arms open wide, then across your chest, hugging yourself." },
      { name: "Doorway chest stretch", dose: "15 seconds each side", how: "Forearm on a door frame, step through gently until you feel a light stretch." },
      { name: "Push-ups", dose: "10 easy reps", how: "Slow and controlled to get blood into the chest." },
    ],
    regions: [
      {
        slug: "upper",
        name: "Upper chest",
        blurb: "The top of the chest near the collarbone, trained by pressing and flying at an incline.",
        synonyms: ["upper pecs", "clavicular", "incline"],
        exerciseIds: [
          "smith-incline-press",
          "barbell-incline-bench-press",
          "incline-dumbbell-press",
          "low-to-high-cable-fly",
        ],
      },
      {
        slug: "whole",
        name: "Whole chest",
        blurb: "Flat pressing and flys that work the whole chest.",
        synonyms: ["flat", "mid chest", "middle chest", "flat bench"],
        exerciseIds: ["barbell-bench-press", "smith-bench-press", "chest-dip", "pec-deck"],
      },
    ],
  },
  {
    slug: "back",
    name: "Back",
    synonyms: [],
    warmUp: [
      { name: "Cat-cow", dose: "8 slow reps", how: "On hands and knees, round your back up, then let it sag down." },
      { name: "Band pull-aparts", dose: "15 reps", how: "Hold a light band at chest height and pull it apart to your chest." },
      { name: "Dead hang", dose: "20–30 seconds", how: "Hang from a pull-up bar and let your shoulders stretch." },
    ],
    regions: [
      {
        slug: "upper-back",
        name: "Upper and mid back",
        blurb: "The traps, rhomboids and muscles between your shoulder blades, trained by rowing.",
        synonyms: ["upper back", "mid back", "middle back", "rhomboids", "traps", "back thickness", "rows"],
        exerciseIds: ["barbell-row", "t-bar-row", "seated-cable-row", "one-arm-dumbbell-row"],
      },
      {
        slug: "lower-back",
        name: "Lower back",
        blurb: "The muscles along your spine that keep your back strong and stable.",
        synonyms: ["erectors", "spinal erectors", "low back"],
        warmUp: [
          { name: "Cat-cow", dose: "8 slow reps", how: "On hands and knees, round your back up, then let it sag down." },
          { name: "Glute bridges", dose: "12 reps", how: "Lying on your back, drive your hips up and squeeze your glutes." },
          { name: "Bodyweight good mornings", dose: "10 reps", how: "Hands on your head, push your hips back with a flat back, then stand up." },
        ],
        exerciseIds: ["deadlift", "good-morning", "back-extension", "reverse-hyperextension"],
      },
    ],
  },
  {
    slug: "shoulders",
    name: "Shoulders",
    synonyms: ["shoulder", "delts", "deltoids"],
    warmUp: [
      { name: "Arm circles", dose: "10 forwards, 10 backwards", how: "Start small and make the circles bigger each rep." },
      { name: "Band dislocates", dose: "10 reps", how: "Hold a band wide with straight arms and move it over your head and behind you." },
      { name: "Band external rotations", dose: "12 each arm", how: "Elbow tucked at your side, rotate your forearm outwards against a light band." },
    ],
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
        exerciseIds: ["upright-row", "lateral-raise", "seated-lateral-raise", "incline-lateral-raise"],
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
    ],
  },
  {
    slug: "biceps",
    name: "Biceps",
    synonyms: ["bicep", "bis", "arms", "guns", "curls"],
    tip: "One curl is enough. Pick the one you like best and focus on getting stronger at it.",
    warmUp: [
      { name: "Arm circles", dose: "10 each way", how: "Big slow circles to loosen the shoulders and elbows." },
      { name: "Forearm rotations", dose: "10 each way", how: "Elbows bent at your sides, turn your palms up and down." },
      { name: "Light band curls", dose: "15 reps", how: "Easy curls with a light band to get blood into the arms." },
    ],
    regions: [
      {
        slug: "curls",
        name: "Curls",
        blurb: "The front of the upper arm, trained by curling.",
        synonyms: [],
        pick: 1,
        exerciseIds: [
          "barbell-curl",
          "ez-bar-curl",
          "dumbbell-curl",
          "incline-dumbbell-curl",
          "preacher-curl",
          "cable-curl",
        ],
      },
    ],
  },
  {
    slug: "triceps",
    name: "Triceps",
    synonyms: ["tricep", "tris", "arms"],
    tip: "All triceps movements hit all three heads, so you don't need a separate exercise for each.",
    warmUp: [
      { name: "Arm circles", dose: "10 each way", how: "Big slow circles to loosen the shoulders." },
      { name: "Overhead triceps stretch", dose: "15 seconds each arm", how: "Reach one hand down your back and gently push the elbow with the other hand." },
      { name: "Light band pushdowns", dose: "15 reps", how: "Easy pushdowns with a light band or cable." },
    ],
    regions: [
      {
        slug: "triceps",
        name: "Triceps",
        blurb: "Pressing and extensions for the back of the arm.",
        synonyms: [],
        exerciseIds: [
          "single-arm-pushdown",
          "overhead-cable-extension",
          "rope-pushdown",
          "jm-press",
          "triceps-dip",
        ],
      },
    ],
  },
  {
    slug: "legs",
    name: "Legs",
    synonyms: ["leg", "lower body", "leg day"],
    warmUp: [
      { name: "Leg swings", dose: "10 each leg, front-to-back and side-to-side", how: "Hold on to something and swing each leg loosely." },
      { name: "Bodyweight squats", dose: "10 reps", how: "Slow, deep squats with your chest up." },
      { name: "Walking lunges", dose: "10 steps", how: "Long steps, lowering your back knee towards the floor." },
    ],
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
        warmUp: [
          { name: "Leg swings", dose: "10 each leg", how: "Hold on to something and swing each leg front-to-back." },
          { name: "Inchworms", dose: "5 reps", how: "From standing, walk your hands out to a push-up position, then walk them back." },
          { name: "Bodyweight good mornings", dose: "10 reps", how: "Hands on your head, push your hips back with a flat back, then stand up." },
        ],
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
        warmUp: [
          { name: "Glute bridges", dose: "12 reps", how: "Lying on your back, drive your hips up and squeeze your glutes." },
          { name: "Leg swings", dose: "10 each leg, side-to-side", how: "Hold on to something and swing each leg across your body." },
          { name: "Bodyweight squats", dose: "10 reps", how: "Slow, deep squats with your chest up." },
        ],
        exerciseIds: ["hip-thrust", "bulgarian-split-squat", "cable-pull-through", "cable-kickback"],
      },
      {
        slug: "calves",
        name: "Calves",
        blurb: "The lower legs, trained by raising your heels.",
        synonyms: ["calf", "lower legs"],
        warmUp: [
          { name: "Ankle circles", dose: "10 each way, each foot", how: "Lift one foot and draw slow circles with your toes." },
          { name: "Bodyweight calf raises", dose: "15 reps", how: "On a step, rise up and lower your heels into a full stretch." },
        ],
        exerciseIds: [
          "standing-calf-raise",
          "seated-calf-raise",
          "leg-press-calf-raise",
          "smith-calf-raise",
        ],
      },
    ],
  },
  {
    slug: "abs",
    name: "Abs",
    synonyms: ["abdominals", "core", "stomach", "six pack", "ab"],
    warmUp: [
      { name: "Cat-cow", dose: "8 slow reps", how: "On hands and knees, round your back up, then let it sag down." },
      { name: "Dead bugs", dose: "8 each side", how: "On your back, lower the opposite arm and leg while keeping your lower back pressed down." },
      { name: "Standing torso twists", dose: "10 each side", how: "Feet planted, rotate your upper body side to side." },
    ],
    regions: [
      {
        slug: "abs",
        name: "Abs",
        blurb: "The front of your stomach, trained by crunching and raising your legs.",
        synonyms: ["upper abs", "lower abs", "crunches"],
        exerciseIds: [
          "cable-crunch",
          "ab-crunch-machine",
          "hanging-leg-raise",
          "captains-chair-knee-raise",
          "reverse-crunch",
        ],
      },
      {
        slug: "obliques",
        name: "Obliques",
        blurb: "The sides of your waist, trained by twisting, bending sideways and resisting rotation.",
        synonyms: ["oblique", "side abs", "love handles", "waist"],
        exerciseIds: ["cable-woodchop", "pallof-press", "dumbbell-side-bend", "oblique-crunch"],
      },
    ],
  },
  {
    slug: "forearms",
    name: "Forearms",
    synonyms: ["forearm", "grip", "wrists", "wrist"],
    warmUp: [
      { name: "Wrist circles", dose: "10 each way", how: "Make slow circles with both fists." },
      { name: "Wrist flexor and extensor stretch", dose: "15 seconds each way", how: "Arm straight out, gently pull your fingers back, then push the back of your hand down." },
      { name: "Fist clenches", dose: "15 reps", how: "Squeeze your hands into tight fists, then spread your fingers wide." },
    ],
    regions: [
      {
        slug: "forearms",
        name: "Forearms",
        blurb: "Hammer curls, reverse curls and wrist curls to cover the whole forearm.",
        synonyms: [],
        exerciseIds: ["hammer-curl", "reverse-curl", "cable-wrist-curl", "reverse-wrist-curl"],
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
