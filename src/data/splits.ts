export type Target = { label: string; href: string };

export type DayTemplate = {
  name: string;
  /** Fits in the weekly calendar strip on a phone. */
  short: string;
  targets: Target[];
};

export type Split = {
  slug: string;
  name: string;
  summary: string;
  /** Monday to Sunday. `null` is a rest day. */
  week: (DayTemplate | null)[];
};

const chest = { label: "Chest", href: "/train/chest" };
const back = { label: "Upper and mid back", href: "/train/back/upper-back" };
const lowerBack = { label: "Lower back", href: "/train/back/lower-back" };
const shoulders = { label: "Shoulders", href: "/train/shoulders" };
const frontDelts = { label: "Front delts", href: "/train/shoulders/front" };
const sideDelts = { label: "Side delts", href: "/train/shoulders/side" };
const rearDelts = { label: "Rear delts", href: "/train/shoulders/rear" };
const biceps = { label: "Biceps", href: "/train/biceps" };
const triceps = { label: "Triceps", href: "/train/triceps" };
const forearms = { label: "Forearms", href: "/train/forearms" };
const quads = { label: "Quads", href: "/train/legs/quads" };
const hamstrings = { label: "Hamstrings", href: "/train/legs/hamstrings" };
const glutes = { label: "Glutes", href: "/train/legs/glutes" };
const calves = { label: "Calves", href: "/train/legs/calves" };
const adductors = { label: "Adductors", href: "/train/legs/adductors" };
const abs = { label: "Abs", href: "/train/abs" };

const fullBody: DayTemplate = {
  name: "Full body",
  short: "Full",
  targets: [chest, back, shoulders, quads, hamstrings, biceps, triceps, abs],
};
const upper: DayTemplate = {
  name: "Upper",
  short: "Upper",
  targets: [chest, back, shoulders, biceps, triceps, forearms],
};
const lower: DayTemplate = {
  name: "Lower",
  short: "Lower",
  targets: [quads, hamstrings, glutes, adductors, calves, lowerBack, abs],
};
const anterior: DayTemplate = {
  name: "Anterior (front)",
  short: "Front",
  targets: [chest, frontDelts, sideDelts, biceps, quads, abs],
};
const posterior: DayTemplate = {
  name: "Posterior (back)",
  short: "Back",
  targets: [back, lowerBack, rearDelts, triceps, hamstrings, glutes, calves],
};
const push: DayTemplate = {
  name: "Push",
  short: "Push",
  targets: [chest, frontDelts, sideDelts, triceps],
};
const pull: DayTemplate = {
  name: "Pull",
  short: "Pull",
  targets: [back, rearDelts, biceps, forearms],
};
const legs: DayTemplate = {
  name: "Legs",
  short: "Legs",
  targets: [quads, hamstrings, glutes, adductors, calves, abs],
};

const chestBack: DayTemplate = {
  name: "Chest and back",
  short: "Chest + back",
  targets: [chest, back],
};
const shouldersArms: DayTemplate = {
  name: "Shoulders and arms",
  short: "Delts + arms",
  targets: [shoulders, biceps, triceps, forearms],
};

const upperLower4: Split = {
  slug: "upper-lower",
  name: "Upper / Lower",
  summary: "Upper body one day, lower body the next. Every muscle gets trained twice a week.",
  week: [upper, lower, null, upper, lower, null, null],
};
const anteriorPosterior4: Split = {
  slug: "anterior-posterior",
  name: "Anterior / Posterior",
  summary: "The front of your body one day, the back the next. Every muscle gets trained twice a week.",
  week: [anterior, posterior, null, anterior, posterior, null, null],
};

export const MIN_DAYS = 2;
export const MAX_DAYS = 6;

export const splitsByDays: Record<number, Split[]> = {
  2: [
    {
      slug: "full-body",
      name: "Full body",
      summary: "Train every muscle each session, with one exercise per muscle. Two days is the minimum to keep making progress.",
      week: [fullBody, null, null, fullBody, null, null, null],
    },
  ],
  3: [
    {
      slug: "full-body",
      name: "Full body",
      summary: "Train every muscle each session, with one exercise per muscle. Leave a rest day between sessions.",
      week: [fullBody, null, fullBody, null, fullBody, null, null],
    },
  ],
  4: [upperLower4, anteriorPosterior4],
  5: [
    {
      slug: "ppl-upper-lower",
      name: "Push / Pull / Legs + Upper / Lower",
      summary: "Three days of push, pull and legs, then an upper and a lower day. Every muscle gets trained twice a week.",
      week: [push, pull, legs, null, upper, lower, null],
    },
  ],
  6: [
    {
      slug: "upper-lower",
      name: "Upper / Lower",
      summary: "Upper and lower days, three times each. Higher frequency with shorter sessions.",
      week: [upper, lower, upper, lower, upper, lower, null],
    },
    {
      slug: "anterior-posterior",
      name: "Anterior / Posterior",
      summary: "Front and back days, three times each.",
      week: [anterior, posterior, anterior, posterior, anterior, posterior, null],
    },
    {
      slug: "push-pull-legs",
      name: "Push / Pull / Legs",
      summary: "Push, pull and legs, twice through. Every muscle gets trained twice a week.",
      week: [push, pull, legs, push, pull, legs, null],
    },
    {
      slug: "batman",
      name: "Batman split",
      summary: "Chest and back, shoulders and arms, then legs, twice through. Gives your upper body extra attention.",
      week: [chestBack, shouldersArms, legs, chestBack, shouldersArms, legs, null],
    },
  ],
};

