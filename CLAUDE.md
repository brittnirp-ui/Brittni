# Standing Instructions — brittnirp-ui/Brittni

This is Brittni's personal site (brittni.co) plus her `/games` hub. Apply these
rules on every session working in this repo, without being asked again:

1. **Push to live when done.** `main` is the live branch (GitHub Pages serves
   from it via the `CNAME` file). When a change is finished and verified,
   merge/push it straight to `main` so it's actually live — don't leave
   finished work sitting on a feature branch unless Brittni asks for a PR
   instead.
2. **Announce completion.** Tell Brittni when something she asked for is
   done and confirm whether it's live. Keep it short and concrete (what
   changed, where it lives on the page/site).
3. This applies **until Brittni says to stop** — it's a standing preference,
   not a one-off.

## Site structure

- `index.html` — the main homepage (single-page site: Home, About, Skills,
  Contact sections). Theme: black background, gold accent (`#c9a84c`),
  Oswald for headings, Poppins for body text.
- `games/index.html` — the games hub landing page, linked from the About
  section button. Same black/gold branding as the homepage. Lists game
  cards linking into subfolders.
- `games/<game-name>/index.html` — individual games, each self-contained
  (its own `<style>`/`<script>`, no shared build step). These can have
  their own visual theme distinct from the main site if it fits the game.

## Adding a new game

1. Build it at `games/<new-game-name>/index.html`.
2. Add a card for it in `games/index.html`'s `.game-grid`, replacing or
   sitting alongside the "More Soon" placeholder card.
3. Commit and push to `main`.
