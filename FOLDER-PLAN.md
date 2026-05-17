# Folder Structure Plan — Web Systems & Technologies

## Rationale

Each week currently has a single `.htm` cheat sheet file at the root of `elective-2/` or `elective-3/`. As we add exercise materials, slide decks, and supporting resources, the root directory becomes cluttered. A per-week subfolder keeps assets co-located with their week.

## Proposed Structure

```
web-sys/
├── FOLDER-PLAN.md                          ← this file
│
├── elective-2/
│   ├── index.htm
│   ├── week-01-csharp-translation-bootcamp.htm
│   ├── week-02-interfaces-and-di-mental-model.htm
│   ├── ...                                  ← 16 week files (existing)
│   │
│   ├── week-01/
│   │   ├── resources/                       ← handouts, cheatsheets, links
│   │   ├── exercises/                       ← starter code, solutions, test files
│   │   └── presentations/                   ← keynote / powerpoint decks
│   ├── week-02/
│   │   ├── resources/
│   │   ├── exercises/
│   │   └── presentations/
│   ├── week-03/
│   ├── ...                                  ← weeks 03-15
│   └── week-16/
│       ├── resources/
│       ├── exercises/
│       └── presentations/
│
├── elective-3/
│   ├── index.htm
│   ├── week-01-modern-javascript-review.htm
│   ├── week-02-async-javascript-deep-dive.htm
│   ├── ...                                  ← 16 week files (existing)
│   │
│   ├── week-01/
│   │   ├── resources/
│   │   ├── exercises/
│   │   └── presentations/
│   ├── week-02/
│   │   ├── resources/
│   │   ├── exercises/
│   │   └── presentations/
│   ├── ...                                  ← weeks 03-15
│   └── week-16/
│       ├── resources/
│       ├── exercises/
│       └── presentations/
```

## Folder Purposes

| Subfolder     | Contents |
|---------------|----------|
| `resources/`  | Handouts, reference cards, link collections, supplementary readings |
| `exercises/`  | Starter code templates, solution branches/files, unit tests, exercise prompts |
| `presentations/` | Keynote (`.key`), PowerPoint (`.pptx`), PDF slide decks, slide assets |

## Populating the Folders (Planned)

1. Move existing exercise code (if any) from the `.htm` file into standalone files under `exercises/`
2. Extract keynote slides from the instructor's existing deck and drop into `presentations/`
3. Generate resource handouts from the "Core Concepts" section of each cheat sheet into `resources/`
4. Update each weekly `.htm` file to link to files inside its subfolder (e.g., `week-01/exercises/starter.zip`)

## Status

- [x] Folder skeleton created — 32 week folders, each with `resources/`, `exercises/`, `presentations/` (96 total subfolders)
- [ ] Populate exercises/ — starter code, solutions, test files per week
- [ ] Populate resources/ — handouts, reference cards, link collections
- [ ] Populate presentations/ — keynote / powerpoint slide decks
- [ ] Update `.htm` file links to point into subfolders instead of inline code blocks

## Folder Inventory

| Elective | Weeks | Subfolders per week | Total dirs |
|----------|-------|---------------------|------------|
| elective-2 | 01–16 | resources/, exercises/, presentations/ | 48 |
| elective-3 | 01–16 | resources/, exercises/, presentations/ | 48 |
