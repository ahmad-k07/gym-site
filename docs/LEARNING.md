# How this site works: the concepts

This guide walks through the ideas behind the code, using this project's own files as examples. Read it with the code open beside it. Each section links to the file it's talking about.

---

## 1. The big picture

```
You run `npm run build`
        │
        ▼
Next.js reads src/data/*.ts and runs every page once
        │
        ▼
39 finished HTML pages (/, /splits, /train/chest, /train/chest/upper, …)
        │
        ▼
Vercel serves those files to anyone who visits
```

The key idea is **static generation**: every page is built **once, ahead of time**, not each time someone visits. This works because the content (muscles, exercises) only changes when you edit the code. It's why the site is fast, why hosting is free, and why there's no database.

Compare it with a site that has accounts (your v2). There, the page depends on *who* is asking, so the server has to build it per request. You'll need that later for progress tracking, but not yet.

## 2. From HTML to React components (JSX)

React lets you write HTML-like code inside TypeScript. This is called **JSX**. Look at [src/components/BackLink.tsx](../src/components/BackLink.tsx):

```tsx
export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className={styles.back}>
      ← {label}
    </Link>
  );
}
```

- A **component** is a function that returns UI. Its name starts with a capital letter.
- **Props** are its inputs (`href`, `label`), like function parameters. You use it like a tag: `<BackLink href="/" label="All muscles" />`.
- `{curly braces}` mean "this is JavaScript, put its value here".
- It's `className`, not `class`, because `class` is a reserved word in JavaScript.

**Why bother?** The back link appears on several pages. Written once as a component, any change to it applies everywhere. That's the same idea as functions in any language: don't repeat yourself.

**Lists:** [Workout.tsx](../src/components/Workout.tsx) turns an array of exercise IDs into cards with `.map()`:

```tsx
{region.exerciseIds.map((id, i) => (
  <li key={id}>
    <ExerciseCard exercise={exercises[id]} priority={i === 0} />
  </li>
))}
```

`key` gives React a unique ID for each item, so it can tell which ones changed.

## 3. TypeScript: types as documentation that's checked for you

Open [src/data/exercises.ts](../src/data/exercises.ts):

```ts
export type Exercise = {
  id: string;
  name: string;
  equipment: Equipment;          // only "barbell" | "dumbbell" | "ez-bar" | ...
  mechanic: "compound" | "isolation";
  cues: string[];
  altReps?: string;              // ? means optional
};
```

Every one of the 68 exercises must match this shape. If you typo `equipment: "dumbell"`, the editor underlines it in red before you even run the code. With 68 hand-written entries, mistakes like that are guaranteed, and TypeScript catches them all.

`Record<string, Exercise>` (at the bottom of the file) is a **dictionary/hash map**: look up an exercise by ID in O(1) time, e.g. `exercises["pull-up"]`.

## 4. Separate data from UI

This is the most important design decision in the project:

| `src/data/`: *what* to show | `src/components/` and `src/app/`: *how* to show it |
|---|---|
| muscles, regions, synonyms | layout, cards, grids |
| exercises and cues | styling |
| splits and warm-ups | interaction |

To change which exercises appear for upper chest, you edit one array in [muscles.ts](../src/data/muscles.ts) and touch no UI code. To redesign the exercise card, you change no data. Each half can change without breaking the other. It's also exactly what will make adding a database easy later, because only the place the data comes from changes.

## 5. Routing: folders become URLs

Next.js uses **file-based routing**. The folder structure *is* the URL structure:

```
src/app/page.tsx                        →  /
src/app/splits/page.tsx                 →  /splits
src/app/train/[group]/page.tsx          →  /train/chest, /train/back, …
src/app/train/[group]/[region]/page.tsx →  /train/chest/upper, …
```

Square brackets mean a **dynamic segment**: `[group]` matches any value, and the page receives it as `params.group`. One file therefore handles all 9 muscle groups.

[generateStaticParams](../src/app/train/[group]/page.tsx) tells Next.js every value to pre-build at build time:

```ts
export function generateStaticParams() {
  return muscleGroups.map((group) => ({ group: group.slug }));
}
```

If someone visits `/train/neck`, `getGroup` returns `undefined` and we call `notFound()`, which shows [not-found.tsx](../src/app/not-found.tsx).

## 6. Server components vs client components

This is the concept that confuses most people new to Next.js.

- **Server components** (the default) run at build time on the server. Their output is plain HTML, and **none of their JavaScript is sent to the browser**. Almost every file in this project is one.
- **Client components** start with `"use client"` and *also* run in the browser, so they can respond to clicks and typing.

Only **two** files here need to be client components: [MuscleSearch.tsx](../src/components/MuscleSearch.tsx), because it reacts as you type, and [SplitFinder.tsx](../src/components/SplitFinder.tsx), because it reacts when you pick a number of days. Everything else is static content. The rule of thumb is to use client components only where you need interactivity, because less JavaScript sent to the browser means faster pages.

## 7. State: how the search box remembers things

In [MuscleSearch.tsx](../src/components/MuscleSearch.tsx):

```tsx
const [query, setQuery] = useState("");
```

**State** is data a component remembers between renders. `useState` returns the current value and a function to change it. When you call `setQuery("pec")`, React re-runs the component function with the new value and updates the screen to match.

That's the core mental model of React: **UI = function(state)**. You never manually show or hide the dropdown. You set `open` to true or false, and the JSX describes what the screen should look like in each case:

```tsx
{showList && <ul role="listbox">…</ul>}
```

The input is a **controlled input**: its `value` comes from state, and every keystroke calls `setQuery`. React state is the single source of truth.

## 8. The search algorithm (the CS bit)

[src/lib/search.ts](../src/lib/search.ts) is a small ranking problem:

1. **Build an index once:** a list of every group and region with all its search terms ("upper chest", "upper pecs", "clavicular"…).
2. **Normalise** text so "Upper-Chest!" and "upper chest" compare equal: lowercase, strip punctuation, collapse spaces.
3. **Score** each entry: exact match = 3, a word starts with the query = 2, contains it = 1 (only for queries of 3+ characters, so "a" doesn't match everything).
4. **Sort** by score and take the top 6.

That's O(n × t) per keystroke for n entries with t terms each. With about 40 entries that's instant, so there's no need for a search library or server. Knowing when a simple solution is enough is good engineering.

## 9. CSS: tokens, modules and layout

**Design tokens** ([globals.css](../src/app/globals.css)): every colour and spacing value is a variable like `var(--space-3)`. Dark mode redefines just the colour variables inside `@media (prefers-color-scheme: dark)`, and the whole site follows automatically.

**CSS Modules:** `ExerciseCard.module.css` is imported as `styles`, and `styles.card` becomes a unique class name such as `ExerciseCard-module__EazbRG__card`. Two components can both have a `.card` class without clashing.

**Grid and the `minmax(0, 1fr)` bug:** while building this, the exercise cards stretched off the right side of the screen. A grid column sized `1fr` refuses to shrink below its content's natural width, and an unwrapped line of cue text is very wide. `minmax(0, 1fr)` says the column may shrink to zero, so text wraps instead. This is one of the most common CSS layout bugs, and now you've seen it in real code.

**The animated demo:** each card stacks two photos (start and end position). A CSS animation flips the top one between visible and invisible every second, which looks like a GIF. People who've turned on "reduce motion" in their device settings get a still image via `@media (prefers-reduced-motion: reduce)`.

## 10. Accessibility

- **Semantic HTML:** `<header>`, `<main>`, `<nav>`, `<ol>` for the warm-up steps, and `<dl>` (description list) for warm-up/sets/reps/rest.
- **The search box is an ARIA combobox:** `role="combobox"`, `aria-expanded` and `aria-activedescendant` let a screen reader announce "Upper chest, 1 of 3" as you arrow through suggestions.
- **Alt text** on every image describes the position ("Pull-up: start position").
- **`:focus-visible`** shows an outline for keyboard users.
- **Visually hidden labels:** the search label isn't shown on screen, but screen readers still read it.

Try using the whole site with only Tab, the arrow keys and Enter. It all works.

## 11. Performance

- **`next/image`** automatically resizes the 850px photos down to what each screen needs and converts them to modern formats, so a phone never downloads more pixels than it can show.
- **Lazy loading:** images further down the page only load as you scroll. The first card loads **eagerly**, because it's visible straight away.
- **`prefetch`** on the grid links means that when a card appears on screen, Next.js quietly loads its destination in the background, so tapping feels instant.
- **`<Suspense>`:** the pages that read the URL are wrapped in `<Suspense fallback={<PageLoading />}>`. Next.js 16 warned that without it, navigation would have to wait for the URL data. The fallback lets the page frame appear immediately.

## 12. Git

```
f6f12c6  Add project plan README
5a69777  Add first HTML prototype page with Learn section
077e092  Style the HTML prototype (Lesson 2: CSS)
0bc27dd  Build v1 of the site in Next.js
```

Each commit is a snapshot you can return to. The HTML prototype was deleted in the last commit but still exists in history. Try `git show 077e092:prototype/index.html`.

---

## Try it yourself

These exercises go from easiest to hardest. Run `npm run dev`, and the browser updates as you save.

1. **Add a synonym:** make "boulders" find Shoulders. *(muscles.ts, one word.)*
2. **Change the accent colour** in `globals.css` for both light and dark mode.
3. **Swap an exercise:** in `muscles.ts`, replace `"reverse-crunch"` in the Abs list with `"pallof-press"` and watch the page change. Then change it back.
4. **Add a brand-new exercise:** pick one from [free-exercise-db](https://github.com/yuhonas/free-exercise-db/tree/main/exercises), copy its `0.jpg` and `1.jpg` into `public/exercises/<Its_Id>/`, add an entry to `exercises.ts`, and reference its ID in `muscles.ts`. TypeScript will tell you if you've missed a field.
5. **Add a feature:** show the number of working sets as small dots (●●○) on each card. You'll need a new component and some CSS.

## Glossary

| Term | Meaning |
|---|---|
| Component | A function that returns UI |
| Props | A component's inputs |
| State | Data a component remembers; changing it re-renders the UI |
| JSX | HTML-like syntax inside JavaScript/TypeScript |
| Static generation | Building pages once at build time instead of on every visit |
| Dynamic segment | `[name]` in a folder name, matching any URL value |
| Server component | Runs on the server only; sends HTML, no JavaScript |
| Client component | `"use client"`; also runs in the browser for interactivity |
| CSS Module | A CSS file whose class names are scoped to one component |
| Design token | A named variable for a colour, spacing value, etc. |
| ARIA | HTML attributes that describe widgets to assistive technology |
| Prefetch | Loading a page in the background before it's clicked |
