export const SITE_NAME = "Training Guide";

/** The same structure is used for every exercise on the site. */
export const prescription = [
  {
    label: "Warm-up",
    value: "1 set",
    detail: "About 50% of your working weight, or lighter, for as many reps as you like.",
  },
  {
    label: "Working sets",
    value: "2–3",
    detail: "2 is recommended. Take each set close to failure.",
  },
  {
    label: "Reps",
    value: "6–10",
    detail: "Recommended for every exercise. Some exercises also list another range that suits them.",
  },
  {
    label: "Rest",
    value: "3+ min",
    detail: "At least 3 minutes, or until you feel ready. Take 5 or more if you need it, because resting too little costs you reps.",
  },
] as const;
