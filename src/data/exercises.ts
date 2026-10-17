export type Equipment =
  | "barbell"
  | "dumbbell"
  | "ez-bar"
  | "cable"
  | "machine"
  | "bodyweight";

export type Exercise = {
  /** Stable ID. Never rename: v2 progress tracking will reference it. */
  id: string;
  name: string;
  /** Folder under public/exercises/ holding 0.jpg and 1.jpg (from free-exercise-db). */
  imageId: string;
  equipment: Equipment;
  /** Compound = several joints move (e.g. a press). Isolation = one joint (e.g. a curl). */
  mechanic: "compound" | "isolation";
  cues: string[];
  /** Another rep range that suits this exercise, shown next to the recommended 6–10. */
  altReps?: string;
  /** Other ways to do the same exercise, e.g. "Rope or straight bar". */
  variations?: string;
};

const HIGH_REPS = "10–15";

const exerciseList: Exercise[] = [
  // Chest
  {
    id: "smith-incline-press",
    name: "Incline Smith machine press",
    imageId: "Smith_Machine_Incline_Bench_Press",
    equipment: "machine",
    mechanic: "compound",
    cues: [
      "Set an incline bench at about 30° under the bar.",
      "Lower the bar to your upper chest, just below the collarbones.",
      "The fixed bar path lets you push hard without balancing the weight.",
    ],
  },
  {
    id: "barbell-incline-bench-press",
    name: "Incline barbell bench press",
    imageId: "Barbell_Incline_Bench_Press_-_Medium_Grip",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Set the bench to about 30°.",
      "Lower the bar to your upper chest, just below the collarbones.",
      "Keep your shoulder blades pulled back and down.",
    ],
  },
  {
    id: "incline-dumbbell-press",
    name: "Incline dumbbell press",
    imageId: "Incline_Dumbbell_Press",
    equipment: "dumbbell",
    mechanic: "compound",
    cues: [
      "Set the bench to 30–45°.",
      "Lower the dumbbells to the sides of your upper chest.",
      "Press up and slightly in, without clanking them together.",
    ],
  },
  {
    id: "low-to-high-cable-fly",
    name: "Low-to-high cable fly",
    imageId: "Low_Cable_Crossover",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Set both pulleys low and take a step forward.",
      "Sweep your hands up and together to chin height.",
      "Keep a slight, fixed bend in your elbows.",
    ],
  },
  {
    id: "barbell-bench-press",
    name: "Barbell bench press",
    imageId: "Barbell_Bench_Press_-_Medium_Grip",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Grip slightly wider than shoulder width.",
      "Lower the bar to mid-chest with elbows at roughly 45° from your body.",
      "Keep your feet planted and your upper back tight.",
    ],
  },
  {
    id: "smith-bench-press",
    name: "Smith machine bench press",
    imageId: "Smith_Machine_Bench_Press",
    equipment: "machine",
    mechanic: "compound",
    cues: [
      "Set a flat bench so the bar lines up with your mid-chest.",
      "Lower the bar to mid-chest with elbows at roughly 45°.",
      "Twist the bar to unrack and re-rack it.",
    ],
  },
  {
    id: "pec-deck",
    name: "Pec deck",
    imageId: "Butterfly",
    equipment: "machine",
    mechanic: "isolation",
    cues: [
      "Set the seat so your arms are at chest height.",
      "Squeeze the handles together in a wide arc.",
      "Open slowly until you feel a stretch, without letting the weights touch.",
    ],
  },
  {
    id: "chest-dip",
    name: "Weighted dip",
    imageId: "Dips_-_Chest_Version",
    equipment: "bodyweight",
    mechanic: "compound",
    cues: [
      "Lean your torso forward to put the work on your chest.",
      "Lower until you feel a stretch, with elbows flaring slightly.",
      "Add weight with a belt once 10 reps is easy, or use the assisted machine.",
    ],
     variations: "Add weight with a dip belt. Use the assisted machine if you can't do 6 reps yet.",
  },

  // Back
  {
    id: "barbell-row",
    name: "Barbell row",
    imageId: "Bent_Over_Barbell_Row",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Hinge forward until your torso is close to parallel with the floor.",
      "Pull the bar to your lower ribs.",
      "Keep your back flat; don't jerk the weight up.",
    ],
  },
  {
    id: "t-bar-row",
    name: "T-bar row",
    imageId: "T-Bar_Row_with_Handle",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Straddle the bar and hinge forward with a flat back.",
      "Pull the handle to your chest, squeezing your shoulder blades together.",
      "Lower under control.",
    ],
  },
  {
    id: "seated-cable-row",
    name: "Seated cable row",
    imageId: "Seated_Cable_Rows",
    equipment: "cable",
    mechanic: "compound",
    cues: [
      "Sit tall with a slight bend in your knees.",
      "Pull the handle to your stomach, leading with your elbows.",
      "Let your shoulders reach forward on the way back for a full stretch.",
    ],
  },
  {
    id: "one-arm-dumbbell-row",
    name: "One-arm dumbbell row",
    imageId: "One-Arm_Dumbbell_Row",
    equipment: "dumbbell",
    mechanic: "compound",
    cues: [
      "Support yourself with one hand and knee on a bench.",
      "Pull the dumbbell towards your hip.",
      "Keep your torso still; don't twist to lift the weight.",
    ],
  },

  // Shoulders
  {
    id: "overhead-press",
    name: "Standing overhead press",
    imageId: "Standing_Military_Press",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Start with the bar on your upper chest, grip just outside the shoulders.",
      "Squeeze your glutes and brace your core.",
      "Press straight up, moving your head back slightly to let the bar pass.",
    ],
  },
  {
    id: "dumbbell-shoulder-press",
    name: "Seated dumbbell shoulder press",
    imageId: "Dumbbell_Shoulder_Press",
    equipment: "dumbbell",
    mechanic: "compound",
    cues: [
      "Sit on a bench set upright.",
      "Start with the dumbbells at ear height.",
      "Press up until your arms are nearly straight.",
    ],
  },
  {
    id: "machine-shoulder-press",
    name: "Machine shoulder press",
    imageId: "Machine_Shoulder_Military_Press",
    equipment: "machine",
    mechanic: "compound",
    cues: [
      "Set the seat so the handles start at shoulder height.",
      "Press up without arching your lower back.",
      "Lower slowly.",
    ],
  },
  {
    id: "cable-front-raise",
    name: "Cable front raise",
    imageId: "Front_Cable_Raise",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Stand facing away from a low pulley.",
      "Raise the handle in front of you to shoulder height.",
      "Lower slowly; don't swing your body.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "upright-row",
    name: "Upright row",
    imageId: "Upright_Barbell_Row",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Grip the bar at shoulder width or a little wider.",
      "Pull it up, leading with your elbows.",
      "Stop at lower-chest height to keep your shoulders comfortable.",
    ],
  },
  {
    id: "lateral-raise",
    name: "Dumbbell lateral raise",
    imageId: "Side_Lateral_Raise",
    equipment: "dumbbell",
    mechanic: "isolation",
    cues: [
      "Raise the dumbbells out to your sides until your arms are level with your shoulders.",
      "Lead with your elbows, keeping a slight bend in them.",
      "Use a weight you can lift without swinging.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "seated-lateral-raise",
    name: "Seated dumbbell lateral raise",
    imageId: "Seated_Side_Lateral_Raise",
    equipment: "dumbbell",
    mechanic: "isolation",
    cues: [
      "Sit on the end of a bench with the dumbbells at your sides.",
      "Raise them out to shoulder height.",
      "Sitting stops you using your legs to swing the weight up.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "incline-lateral-raise",
    name: "Lying incline lateral raise",
    imageId: "One-Arm_Incline_Lateral_Raise",
    equipment: "dumbbell",
    mechanic: "isolation",
    cues: [
      "Lie sideways on an incline bench.",
      "Raise the dumbbell out to the side until it's in line with your shoulder.",
      "This version is hardest at the bottom, where standing raises are easiest.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "face-pull",
    name: "Face pull",
    imageId: "Face_Pull",
    equipment: "cable",
    mechanic: "compound",
    cues: [
      "Set a rope on a pulley at head height.",
      "Pull towards your face, splitting the rope apart.",
      "Finish with your hands beside your ears and elbows high.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "reverse-pec-deck",
    name: "Reverse pec deck",
    imageId: "Reverse_Machine_Flyes",
    equipment: "machine",
    mechanic: "isolation",
    cues: [
      "Sit facing the pad with the handles at shoulder height.",
      "Sweep your arms back in a wide arc.",
      "Think about pushing out, not squeezing your shoulder blades.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "cable-rear-delt-fly",
    name: "Cable rear delt fly",
    imageId: "Cable_Rear_Delt_Fly",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Set both pulleys at shoulder height and cross the cables.",
      "Pull your arms out and back with a slight elbow bend.",
      "Control the return.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "bent-over-rear-delt-raise",
    name: "Seated bent-over rear delt raise",
    imageId: "Seated_Bent-Over_Rear_Delt_Raise",
    equipment: "dumbbell",
    mechanic: "isolation",
    cues: [
      "Sit on the end of a bench and lean your chest towards your knees.",
      "Raise the dumbbells out to the sides.",
      "Keep your neck relaxed and use a light weight.",
    ],
    altReps: HIGH_REPS,
  },

  // Biceps
  {
    id: "barbell-curl",
    name: "Barbell curl",
    imageId: "Barbell_Curl",
    equipment: "barbell",
    mechanic: "isolation",
    cues: [
      "Grip the bar at shoulder width, palms up.",
      "Curl it up while keeping your elbows by your sides.",
      "Lower slowly; don't swing your back.",
    ],
  },
  {
    id: "ez-bar-curl",
    name: "EZ-bar curl",
    imageId: "EZ-Bar_Curl",
    equipment: "ez-bar",
    mechanic: "isolation",
    cues: [
      "Hold the EZ-bar on the angled grips.",
      "Curl up with your elbows by your sides.",
      "The angled grip is easier on the wrists than a straight bar.",
    ],
  },
  {
    id: "dumbbell-curl",
    name: "Dumbbell curl",
    imageId: "Dumbbell_Bicep_Curl",
    equipment: "dumbbell",
    mechanic: "isolation",
    cues: [
      "Stand with a dumbbell in each hand, palms facing forward.",
      "Curl both up without swinging your body.",
      "Lower slowly until your arms are straight.",
    ],
  },
  {
    id: "incline-dumbbell-curl",
    name: "Incline dumbbell curl",
    imageId: "Incline_Dumbbell_Curl",
    equipment: "dumbbell",
    mechanic: "isolation",
    cues: [
      "Lie back on a bench set to about 45°, arms hanging straight down.",
      "Curl up without moving your upper arms forward.",
      "The stretch at the bottom is the point of this exercise.",
    ],
  },
  {
    id: "cable-curl",
    name: "Cable curl",
    imageId: "Standing_Biceps_Cable_Curl",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Attach a straight bar to a low pulley.",
      "Curl up while keeping your elbows still.",
      "The cable keeps tension on your biceps through the whole rep.",
    ],
  },
  {
    id: "preacher-curl",
    name: "Preacher curl",
    imageId: "Preacher_Curl",
    equipment: "barbell",
    mechanic: "isolation",
    cues: [
      "Rest the backs of your upper arms on the preacher pad.",
      "Curl up, then lower until your arms are almost straight.",
      "Go slow at the bottom; don't let the weight drop.",
    ],
  },
  {
    id: "hammer-curl",
    name: "Hammer curl",
    imageId: "Hammer_Curls",
    equipment: "dumbbell",
    mechanic: "isolation",
    cues: [
      "Hold the dumbbells with palms facing each other.",
      "Curl up, keeping your palms facing in the whole time.",
      "Keep your elbows by your sides.",
    ],
     variations: "Dumbbells, or a cable with a rope attachment",
  },
  {
    id: "reverse-curl",
    name: "Reverse curl",
    imageId: "Reverse_Barbell_Curl",
    equipment: "barbell",
    mechanic: "isolation",
    cues: [
      "Grip with palms facing down, using a thumbless grip (thumbs on top).",
      "Curl up, keeping your wrists straight.",
      "Use a lighter weight than a normal curl.",
    ],
    variations: "Cable with cuffs, straight bar or EZ-bar",
  },

  // Triceps
  {
    id: "single-arm-pushdown",
    name: "Single-arm cable pushdown",
    imageId: "Cable_One_Arm_Tricep_Extension",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Hold a single handle on a high pulley, palm up or palm down.",
      "Push down until your arm is straight, keeping your elbow at your side.",
      "Do all reps on one arm, then switch.",
    ],
  },
  {
    id: "overhead-cable-extension",
    name: "Overhead cable extension",
    imageId: "Triceps_Overhead_Extension_with_Rope",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Face away from the pulley holding a rope behind your head.",
      "Extend your arms forward and up until they're straight.",
      "Keep your elbows pointing forward; don't let them flare.",
    ],
  },
  {
    id: "triceps-dip",
    name: "Triceps dip",
    imageId: "Dips_-_Triceps_Version",
    equipment: "bodyweight",
    mechanic: "compound",
    cues: [
      "Keep your torso upright on the bars.",
      "Lower until your elbows are at about 90°.",
      "Use the assisted machine if needed, or add weight once 10 is easy.",
    ],
     variations: "Add weight with a dip belt once 10 reps is easy.",
  },
  {
    id: "rope-pushdown",
    name: "Triceps pushdown",
    imageId: "Triceps_Pushdown_-_Rope_Attachment",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Attach a rope to a high pulley.",
      "Push down and split the rope apart at the bottom.",
      "Keep your elbows pinned to your sides.",
    ],
     variations: "Rope or straight bar",
  },
  {
    id: "jm-press",
    name: "JM press",
    imageId: "JM_Press",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Lie on a bench holding the bar with a shoulder-width grip.",
      "Lower the bar towards your chin by bending your elbows, letting them drift forward.",
      "Press back up. It's a mix of a close-grip bench press and a skullcrusher.",
    ],
  },

  // Legs
  {
    id: "barbell-squat",
    name: "Barbell back squat",
    imageId: "Barbell_Full_Squat",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Rest the bar on your upper back, feet about shoulder-width apart.",
      "Sit down between your heels until your thighs are at least parallel.",
      "Drive up, keeping your chest up and knees tracking over your toes.",
    ],
  },
  {
    id: "leg-press",
    name: "Leg press",
    imageId: "Leg_Press",
    equipment: "machine",
    mechanic: "compound",
    cues: [
      "Place your feet shoulder-width apart in the middle of the platform.",
      "Lower until your knees are well bent, keeping your lower back on the pad.",
      "Press up without locking your knees.",
    ],
  },
  {
    id: "hack-squat",
    name: "Hack squat",
    imageId: "Hack_Squat",
    equipment: "machine",
    mechanic: "compound",
    cues: [
      "Stand with your back against the pad and feet shoulder-width apart.",
      "Squat down as deep as you can with good form.",
      "Push through your whole foot to stand up.",
    ],
  },
  {
    id: "leg-extension",
    name: "Leg extension",
    imageId: "Leg_Extensions",
    equipment: "machine",
    mechanic: "isolation",
    cues: [
      "Line your knees up with the machine's pivot point.",
      "Straighten your legs and squeeze your quads at the top.",
      "Lower slowly.",
    ],
  },
  {
    id: "romanian-deadlift",
    name: "Romanian deadlift",
    imageId: "Romanian_Deadlift",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Start standing with the bar at your thighs.",
      "Push your hips back, keeping the bar close and your back flat.",
      "Go down until you feel a strong hamstring stretch, then stand back up.",
    ],
  },
  {
    id: "dumbbell-stiff-leg-deadlift",
    name: "Dumbbell stiff-legged deadlift",
    imageId: "Stiff-Legged_Dumbbell_Deadlift",
    equipment: "dumbbell",
    mechanic: "compound",
    cues: [
      "Hold the dumbbells in front of your thighs with a soft bend in your knees.",
      "Hinge at the hips and lower the dumbbells down your legs.",
      "Keep your back flat and stand up by squeezing your glutes.",
    ],
  },
  {
    id: "lying-leg-curl",
    name: "Lying leg curl",
    imageId: "Lying_Leg_Curls",
    equipment: "machine",
    mechanic: "isolation",
    cues: [
      "Lie face down with the pad just above your heels.",
      "Curl your heels towards your glutes.",
      "Keep your hips pressed into the bench.",
    ],
  },
  {
    id: "seated-leg-curl",
    name: "Seated leg curl",
    imageId: "Seated_Leg_Curl",
    equipment: "machine",
    mechanic: "isolation",
    cues: [
      "Sit with the pad above your heels and the thigh pad locked down.",
      "Curl your legs down and back as far as you can.",
      "Let them back up slowly.",
    ],
  },
  {
    id: "hip-thrust",
    name: "Barbell hip thrust",
    imageId: "Barbell_Hip_Thrust",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Rest your upper back on a bench with the bar across your hips. Use a pad.",
      "Drive through your heels to lift your hips until your body is flat.",
      "Squeeze your glutes at the top and keep your chin tucked.",
    ],
  },
  {
    id: "bulgarian-split-squat",
    name: "Bulgarian split squat",
    imageId: "Split_Squat_with_Dumbbells",
    equipment: "dumbbell",
    mechanic: "compound",
    cues: [
      "Rest your back foot on a bench, holding a dumbbell in each hand.",
      "Lower your back knee towards the floor.",
      "Lean forward slightly to put more work on your glutes.",
    ],
  },
  {
    id: "cable-pull-through",
    name: "Cable pull-through",
    imageId: "Pull_Through",
    equipment: "cable",
    mechanic: "compound",
    cues: [
      "Face away from a low pulley holding a rope between your legs.",
      "Push your hips back, then drive them forward to stand tall.",
      "Your arms just hold the rope; your hips do the work.",
    ],
  },
  {
    id: "cable-kickback",
    name: "Cable glute kickback",
    imageId: "One-Legged_Cable_Kickback",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Attach an ankle strap to a low pulley.",
      "Kick your leg back, squeezing your glute.",
      "Don't arch your lower back to get extra range.",
    ],
  },
  {
    id: "standing-calf-raise",
    name: "Standing calf raise",
    imageId: "Standing_Calf_Raises",
    equipment: "machine",
    mechanic: "isolation",
    cues: [
      "Stand on the edge of the step with your heels hanging off.",
      "Rise as high as you can onto your toes.",
      "Pause at the bottom in a deep stretch; don't bounce.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "seated-calf-raise",
    name: "Seated calf raise",
    imageId: "Seated_Calf_Raise",
    equipment: "machine",
    mechanic: "isolation",
    cues: [
      "Sit with the pad on your lower thighs and the balls of your feet on the step.",
      "Raise your heels as high as you can.",
      "Lower all the way into a stretch.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "leg-press-calf-raise",
    name: "Leg press calf raise",
    imageId: "Calf_Press_On_The_Leg_Press_Machine",
    equipment: "machine",
    mechanic: "isolation",
    cues: [
      "Put the balls of your feet on the bottom edge of the platform.",
      "Push the platform away by pointing your toes.",
      "Keep your knees almost straight, without locking them.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "smith-calf-raise",
    name: "Smith machine calf raise",
    imageId: "Smith_Machine_Calf_Raise",
    equipment: "machine",
    mechanic: "isolation",
    cues: [
      "Stand on a step under the Smith machine bar.",
      "Rise onto your toes as high as possible.",
      "Lower slowly until your heels drop below the step.",
    ],
    altReps: HIGH_REPS,
  },

  // Abs
  {
    id: "cable-crunch",
    name: "Cable crunch",
    imageId: "Cable_Crunch",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Kneel below a high pulley, holding a rope beside your head.",
      "Crunch down by curling your ribs towards your hips.",
      "Keep your hips still; don't just sit back.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "ab-crunch-machine",
    name: "Ab crunch machine",
    imageId: "Ab_Crunch_Machine",
    equipment: "machine",
    mechanic: "isolation",
    cues: [
      "Adjust the seat so the pads sit on your upper chest.",
      "Crunch forward using your abs, not your arms.",
      "Return slowly.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "hanging-leg-raise",
    name: "Hanging leg raise",
    imageId: "Hanging_Leg_Raise",
    equipment: "bodyweight",
    mechanic: "isolation",
    cues: [
      "Hang from a bar with straight arms.",
      "Raise your legs by curling your pelvis up, not just lifting your thighs.",
      "Lower slowly without swinging. Bend your knees to make it easier.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "captains-chair-knee-raise",
    name: "Captain's chair knee raise",
    imageId: "Knee_Hip_Raise_On_Parallel_Bars",
    equipment: "bodyweight",
    mechanic: "isolation",
    cues: [
      "Support yourself on your forearms with your back against the pad.",
      "Bring your knees up towards your chest.",
      "Curl your hips up at the top, then lower slowly.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "reverse-crunch",
    name: "Reverse crunch",
    imageId: "Reverse_Crunch",
    equipment: "bodyweight",
    mechanic: "isolation",
    cues: [
      "Lie on your back with your knees bent at 90°.",
      "Roll your hips off the floor towards your chest.",
      "Lower slowly; avoid using momentum.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "cable-woodchop",
    name: "Cable woodchop",
    imageId: "Standing_Cable_Wood_Chop",
    equipment: "cable",
    mechanic: "compound",
    cues: [
      "Set a pulley high and stand side-on to it.",
      "Pull the handle down and across your body, rotating through your torso.",
      "Control it back up. Do both sides.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "pallof-press",
    name: "Pallof press",
    imageId: "Pallof_Press",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Stand side-on to a pulley at chest height, handle at your chest.",
      "Press straight out and resist the pull from twisting you.",
      "Bring it back in slowly. Do both sides.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "dumbbell-side-bend",
    name: "Dumbbell side bend",
    imageId: "Dumbbell_Side_Bend",
    equipment: "dumbbell",
    mechanic: "isolation",
    cues: [
      "Hold one dumbbell at your side.",
      "Bend sideways towards the dumbbell, then pull yourself back up.",
      "Do all reps on one side, then switch.",
    ],
    altReps: HIGH_REPS,
  },
  {
    id: "oblique-crunch",
    name: "Oblique crunch",
    imageId: "Oblique_Crunches_-_On_The_Floor",
    equipment: "bodyweight",
    mechanic: "isolation",
    cues: [
      "Lie on your side with knees bent.",
      "Crunch your top shoulder towards your hip.",
      "Lower slowly, then switch sides.",
    ],
    altReps: HIGH_REPS,
  },

  // Forearms
  {
    id: "cable-wrist-curl",
    name: "Cable wrist curl",
    imageId: "Cable_Wrist_Curl",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Kneel or sit facing a low pulley with a straight bar, palms up.",
      "Rest your forearms on your thighs.",
      "Curl the bar up with your wrists, then lower slowly.",
    ],
    altReps: HIGH_REPS,
     variations: "Cable with a straight bar",
  },
  {
    id: "reverse-wrist-curl",
    name: "Reverse wrist curl",
    imageId: "Palms-Down_Wrist_Curl_Over_A_Bench",
    equipment: "cable",
    mechanic: "isolation",
    cues: [
      "Rest your forearms on a bench or your thighs, palms facing down.",
      "Lift the back of your hands up towards you.",
      "Use a light weight; this muscle is small.",
    ],
    altReps: HIGH_REPS,
    variations: "Cable with a straight bar (shown here with a barbell)",
  },

  // Lower back
  {
    id: "deadlift",
    name: "Deadlift",
    imageId: "Barbell_Deadlift",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Stand with the bar over your mid-foot and grip it just outside your legs.",
      "Flatten your back and push the floor away to stand up.",
      "Keep the bar touching your legs the whole way.",
    ],
  },
  {
    id: "good-morning",
    name: "Good morning",
    imageId: "Good_Morning",
    equipment: "barbell",
    mechanic: "compound",
    cues: [
      "Rest a light bar on your upper back like a squat.",
      "Push your hips back and lean forward with a flat back.",
      "Stop when you feel a hamstring stretch, then stand back up.",
    ],
  },
  {
    id: "back-extension",
    name: "Back extension",
    imageId: "Hyperextensions_Back_Extensions",
    equipment: "bodyweight",
    mechanic: "isolation",
    cues: [
      "Set the pad just below your hips.",
      "Lower your upper body, then raise it until it's in line with your legs.",
      "Don't overarch at the top. Hold a plate to make it harder.",
    ],
  },
  {
    id: "reverse-hyperextension",
    name: "Reverse hyperextension",
    imageId: "Reverse_Hyperextension",
    equipment: "machine",
    mechanic: "compound",
    cues: [
      "Lie face down on the machine with your hips at the edge.",
      "Swing your legs up until they're in line with your body.",
      "Lower under control. Use a bench if there's no machine.",
    ],
  },
];

export const exercises: Record<string, Exercise> = Object.fromEntries(
  exerciseList.map((exercise) => [exercise.id, exercise]),
);
