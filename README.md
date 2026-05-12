# WrightOps — course site

A small static site: a WrightOps landing page, a course catalogue, and the
**AI 101** course (4 modules, 9 sections). No build step, no backend — plain
HTML/CSS/vanilla JS, deployable as-is (e.g. GitHub Pages from the repo root).

## Structure

```
index.html                      WrightOps landing page ("Courses" in the nav)
courses.html                    course catalogue — AI 101 is listed as Free
courses/ai-101/
  index.html                    AI 101 overview / syllabus
  m1-s1_the-ai-moment.html       9 lesson pages (proper standalone HTML5 docs)
  m1-s2_three-shifts-at-once.html
  ... (7 more)
assets/css/brand.css            WrightOps brand system: :root tokens (neutral
                                palette), Chakra Petch, site chrome + marketing
                                components
assets/css/lesson.css           shared lesson styling — the .ts-* design system
                                with its tokens remapped to the WrightOps
                                palette, plus the bottom course-nav
```

Each lesson page links `brand.css` then `lesson.css`, then keeps a small inline
`<style>` for that page's interactive widget (slider, carousel, quiz, dial,
etc.). Lesson interactivity is vanilla JS inline at the end of each page.

## Branding

WrightOps v3 — warm dark neutrals only (no accent colour), Chakra Petch, square
corners, hard lines, uppercase headings/labels. Palette tokens live in
`assets/css/brand.css` (`--wo-ink … --wo-bone`); changing them re-skins the
whole site. Marketing copy on the landing/about/contact sections is placeholder.

## Local preview

```
python3 -m http.server 8000   # then open http://localhost:8000/
```

## Notes / possible follow-ups

- The members area / auth / course-progress tracking discussed earlier is **not**
  built here — this pass is the course area only.
- Lesson interactive widgets keep their original colours where colour carries
  meaning (e.g. quiz right/wrong); a deeper pass could neutralise the diagram
  palettes further.
- The duplicated flip-card script could be factored into a shared
  `assets/js/flip-cards.js` in a later pass.
