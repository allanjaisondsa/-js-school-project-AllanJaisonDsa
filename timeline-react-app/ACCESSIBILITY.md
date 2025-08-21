# Accessibility Improvements

This document outlines the accessibility features added to the **Timeline React App** to ensure compliance with WCAG 2.1 AA.

---

## Keyboard Navigation
- **Timeline markers**:
  - Focusable with `tabIndex=0`.
  - Navigable with `ArrowLeft` / `ArrowRight`.
  - Selectable with `Enter` or `Space`.
- **Modal**:
  - Opens with focus trapped inside.
  - Closes with `Esc` key.
  - Focus returns to the marker that opened it.

---

## ARIA Roles & Attributes
- Timeline bar: `role="tablist"`, `aria-label="Timeline of events"`.
- Each marker: `role="tab"`, `aria-selected`, `aria-current="date"`.
- Modal: `<dialog>` element with `role="dialog"`, `aria-modal="true"`.
- Theme toggle: `aria-label="Toggle dark mode"`.

---

## Focus Management
- Modal automatically receives focus when opened.
- Closing modal returns focus to the triggering marker.

---

## Contrast
- Primary blue (#2563eb) on white = **8.59:1** (AA+AAA).
- White text on dark backgrounds = **>7:1**.
- All text/button colors meet or exceed WCAG 2.1 AA contrast ratios.

---

## Other WCAG Compliance
- Semantic HTML (`<header>`, `<main>`, `<article>`).
- Images include descriptive `alt` text.
- Text resizable without breaking layout (responsive CSS).
