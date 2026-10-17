"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { search } from "@/lib/search";
import styles from "./MuscleSearch.module.css";

/**
 * A search box with suggestions (an accessible "combobox"). Arrow keys move through
 * suggestions, Enter opens the highlighted one (or the top one), Escape closes the list.
 */
export function MuscleSearch() {
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const results = search(query);
  const showList = open && query.trim() !== "";

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const choice = results[active] ?? results[0];
    if (choice) go(choice.href);
    else setOpen(true);
  }

  return (
    <form role="search" className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={`${listId}-input`} className="visually-hidden">
        Search for a muscle
      </label>
      <div className={styles.row}>
        <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          id={`${listId}-input`}
          className={styles.input}
          type="text"
          autoComplete="off"
          placeholder="e.g. chest, lats, quads"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={showList && results[active] ? `${listId}-${active}` : undefined}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </div>

      {showList && (
        <ul id={listId} role="listbox" className={styles.list}>
          {results.length === 0 ? (
            <li className={styles.empty}>No muscle matches “{query.trim()}”.</li>
          ) : (
            results.map((result, i) => (
              <li
                key={result.href}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={i === active}
                className={styles.option}
                // onMouseDown (not onClick) fires before the input's blur closes the list.
                onMouseDown={(event) => {
                  event.preventDefault();
                  go(result.href);
                }}
                onMouseEnter={() => setActive(i)}
              >
                <span>{result.label}</span>
                {result.context && <span className={styles.context}>{result.context}</span>}
              </li>
            ))
          )}
        </ul>
      )}
    </form>
  );
}
