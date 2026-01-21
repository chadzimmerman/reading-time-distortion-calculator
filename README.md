# Reader’s Time Distortion Calculator

A one-page React + TypeScript project exploring how reading time _feels_ rather than how long it objectively takes.

This project was built as a **deliberate daily coding exercise** while waiting for final requirements from a client project. Instead of pausing development, I wanted a small but complete idea that could be planned, implemented, and refined in a single sitting — reinforcing the habit of coding every day.

---

![Reader’s Time Distortion Calculator Screenshot](src/assets/readme.png)

## Motivation

When client work is temporarily blocked by unclear or pending requirements, it’s easy to lose momentum. Rather than waiting, I use that time to:

- Practice core skills in isolation
- Revisit fundamentals I don’t want to atrophy
- Build small, idea-driven projects that model real thinking, not boilerplate

This project came from a simple observation:
**reading time is not linear**. The same number of pages can feel radically different depending on language ability, text difficulty, and focus level.

---

## Project Goals

This project was intentionally scoped to a **single page** with no backend and no external libraries. The goal was not feature depth, but clarity of thought and execution.

Specifically, I wanted to practice and reinforce:

- **React state management** using `useState`
- **Derived state vs stored state** (calculations instead of persisted results)
- **TypeScript domain modeling** with union types and `Record<>`
- **Separating calculation logic from presentation**
- **Controlled form inputs** (number inputs, dropdowns)
- **Simple UX modeling** using multipliers rather than hard rules

The Matrix-style green-on-black theme was added purely for fun and to keep the project visually distinct.

---

## Planning & Design Approach

Before writing any code, I planned the project in terms of **variables and relationships**, not components.

### Conceptual model

I started by defining a baseline:

- **1 page = 1 minute**
  (native speaker, easiest text, full focus)

From there, all other factors scale _multiplicatively_:

- **Language proficiency** increases decoding effort
- **Text difficulty** increases conceptual density
- **Focus level** affects efficiency

Each of these is represented as a multiplier. The total perceived time is calculated as:

```
total minutes =
  pages
  × base time per page
  × language multiplier
  × difficulty multiplier
  × focus multiplier
```

This approach keeps the logic:

- Simple
- Transparent
- Easy to tweak or extend later

---

## Implementation Notes

- All calculations are **pure functions**, not stored in state
- The result is derived on render, reinforcing React’s declarative model
- TypeScript is used to enforce valid inputs and prevent silent errors
- The UI is intentionally minimal to keep focus on the logic

The final output is presented as a formatted string (minutes or hours + minutes), emphasizing **perceived experience** rather than raw numbers.

---

## Why This Exists

This project isn’t meant to be a production tool. It exists as:

- A record of daily practice
- A compact demonstration of React + TypeScript fundamentals
- An example of thinking in models instead of CRUD

Small projects like this allow me to stay sharp, experiment freely, and keep building even when larger work is temporarily paused.

---

## Possible Extensions

- Live (auto-updating) calculations instead of a submit button
- Preset profiles (e.g. “academic reading”, “casual reading”)
- Visualization of how each factor contributes to total time
- Unit tests for the calculation logic

---
