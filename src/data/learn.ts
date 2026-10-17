export type LearnTopic = {
  slug: string;
  title: string;
  /** One or two sentences, shown on the home page. */
  summary: string;
  /** Longer explanation, shown on the Learn page. */
  body: string[];
};

export const learnTopics: LearnTopic[] = [
  {
    slug: "progressive-overload",
    title: "Progressive overload",
    summary:
      "Doing a little more over time so your muscles keep having a reason to grow.",
    body: [
      "Your body only adapts when it's pushed past what it's used to. If you lift the same weight for the same reps every week, you give it no reason to build more muscle or strength.",
      "On this site that means a method called double progression. Keep the weight the same and add reps until you hit 10 on every working set. Then add the smallest weight jump available and build back up from around 6.",
      "Progress won't be a straight line. If you stall for a few weeks, check your sleep and food, and make sure you're really resting at least 3 minutes between sets.",
    ],
  },
  {
    slug: "hypertrophy",
    title: "Hypertrophy",
    summary: "The scientific word for muscle growth.",
    body: [
      "Muscles grow when you train them hard, recover properly, and eat enough to rebuild them. All three matter.",
      "Effort is the most important part of training. The last few reps of each working set should be a real struggle, finishing with 0–2 reps left in the tank. Lighter weights can build muscle too if you go close to failure, but 6–10 reps is an efficient middle ground.",
      "For recovery, aim for 7–9 hours of sleep and around 1.6 g of protein per kg of bodyweight a day.",
    ],
  },
  {
    slug: "calorie-deficit",
    title: "Calorie deficit",
    summary:
      "Eating fewer calories than you burn, so your body uses stored energy, mostly fat, to make up the difference.",
    body: [
      "The number of calories you burn in a day, including exercise, is called your maintenance. Eat below it and you lose weight; eat above it and you gain.",
      "Online calculators only give a rough estimate. A more accurate way is to track what you eat for two weeks while weighing yourself each morning. If your average weight stays the same, that's your maintenance.",
      "A moderate deficit of 300–500 calories a day is easier to stick to and helps you keep muscle while you lose fat.",
    ],
  },
  {
    slug: "cutting",
    title: "Cutting",
    summary: "A phase where you eat in a calorie deficit to lose fat while keeping your muscle.",
    body: [
      "The goal of a cut is to lose fat without losing the muscle you've built. Keep training just as hard, because lifting heavy tells your body the muscle is still needed.",
      "Keep protein high, around 1.6–2.2 g per kg of bodyweight, which also helps you feel full.",
      "Aim to lose around 0.5–1% of your bodyweight per week. Weigh yourself daily and compare weekly averages, since daily weight jumps around with water and food.",
    ],
  },
  {
    slug: "bulking",
    title: "Bulking",
    summary:
      "A phase where you eat slightly more than you burn to give your body extra material to build muscle.",
    body: [
      "Building muscle is easier with a small calorie surplus, because your body has spare energy to put towards growth.",
      "Keep the surplus small, around 200–300 calories a day above maintenance. Eating everything in sight (a \"dirty bulk\") mostly adds fat, which you'll have to cut off later.",
      "Gaining around 0.5–1% of your bodyweight per month is a sensible pace for most people. Beginners can gain a bit faster.",
    ],
  },
];
