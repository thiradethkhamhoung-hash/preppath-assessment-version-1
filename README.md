# PrepPath Career Assessment

A 45-question career assessment that matches users to one of 32 career paths across 8 categories. Built as a static site — no backend, no build step, no dependencies.

## Try it

Open `index.html` in any browser. That's it.

To make it public, see [Deploying to GitHub Pages](#deploying-to-github-pages) below.

## How it works

**Part 1 — Self-reflection (40 questions)**
Each question is mapped to up to 4 career roles. Answer *Likely / Neutral / Not Likely*. A "Likely" awards +1 point to each linked role.

**Part 2 — Role-sorting (5 questions)**
Each question presents 4 options, each tied to one career role. Picking an option awards +1 to that role.

**Live scoring**
The top-3 leaderboard updates after every answer. Users who want a blind assessment can collapse the panel with the "Hide" toggle.

**Results**
The three highest-scoring roles are shown at the end, with a full 32-role breakdown available on demand.

## File structure

```
├── index.html      // Markup and structure
├── style.css       // All styles (cream/ink/accent palette, Instrument Serif + Manrope)
├── script.js       // Roles, questions, scoring logic, live updates
├── README.md       // This file
└── LICENSE         // MIT (change if needed)
```

The data lives at the top of `script.js`:
- `ROLES` — the 32 career paths
- `PART1` — the 40 core questions and their role mappings
- `PART2` — the 5 bonus role-sorting questions

Editing any of these immediately updates the assessment — no rebuild required.

## Deploying to GitHub Pages

GitHub Pages hosts static sites for free under `https://<username>.github.io/<repo>/`.

### One-time setup

1. **Create a new public repo on GitHub.** Go to [github.com/new](https://github.com/new) and create a repo (e.g. `preppath-assessment`). Don't initialize it with a README — we already have one.

2. **From this folder, push the files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: PrepPath assessment"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repo → **Settings** → **Pages** (left sidebar).
   - Under "Source", choose **Deploy from a branch**.
   - Select branch **`main`** and folder **`/ (root)`**. Click **Save**.

4. **Wait ~1 minute**, then visit `https://<your-username>.github.io/<your-repo>/`. The page is live.

### Updating later

Any push to `main` redeploys automatically:

```bash
git add .
git commit -m "Update questions"
git push
```

### Custom domain (optional)

In **Settings → Pages → Custom domain**, add your domain (e.g. `assessment.preppath.app`). Then set a CNAME record on your DNS pointing to `<your-username>.github.io`. GitHub Pages also offers free HTTPS.

## Customizing the questions

All data is in `script.js`. To change a question:

```js
{ id: 5, text: "Your new question text?", roles: [14, 15, 8] }
```

The `roles` array references role IDs from the `ROLES` object at the top.

To change scoring weights (e.g. make "Neutral" worth half a point), edit:

```js
const LIKERT = [
  { value: "likely",     label: "Likely",     points: 1 },
  { value: "neutral",    label: "Neutral",    points: 0.5 },   // changed
  { value: "not_likely", label: "Not Likely", points: 0 }
];
```

…and update `computeScores()` to use `LIKERT.find(l => l.value === ans).points` instead of the hardcoded `+= 1`.

## Data notes (read before going public)

The source spreadsheet's intent (per its STRUCTURE OVERVIEW) is for each of the 32 roles to appear exactly 5 times across Part 1. In practice, after mapping the spreadsheet's label-based `Roles Linked` column to the 32 official numbered roles, coverage is uneven:

| Role | Part 1 appearances |
|---|---|
| Role 32 — Entrepreneur | 10 (over-represented) |
| Roles 15, 16 — Policy / Teacher | 9 each |
| Roles 6, 24 — Cybersecurity / Hair & Beauty | 1 each |
| **Role 31 — Agriculture & Animal Care** | **0** (only reachable via Q45) |

A student who genuinely fits Agriculture can score at most 1 point. A student who fits Entrepreneur will score high almost regardless of other answers. Before launching publicly to students, consider rebalancing the `roles` arrays in `PART1` so every role appears a comparable number of times.

### Label-to-role assumptions

Several spreadsheet labels don't exactly match the 32 official role names. The interpretations used here:

| Spreadsheet label | Mapped to |
|---|---|
| Project Consultant | Business Analyst / Strategy Consultant (9) |
| Regulatory Officer | Policy, Government & Regulatory Officer (15) |
| Design Engineer | Visual & Design Specialist (21) |
| Sales/Hospitality Manager | Hospitality & Events Manager (23) |
| School Principal | Teacher / Educator (16) |
| Wellness Coach | Hair, Beauty & Wellness (24) |
| Architect | Visual & Design Specialist (21) |
| Diplomat / Int'l Policy Officer | Policy Officer (15) |
| Journalist | Creative Media & Content (19) |
| Economist | Finance Analyst (13) |
| Instructional Designer | Career Coach / Student Advisor (17) |
| Risk Analyst | Finance Analyst (13) |
| Product Designer | Mechanical / Manufacturing Engineer (26) |
| Project Manager | General Manager (8) |
| Tech Entrepreneur | Entrepreneur (32) |

## Browser support

Modern evergreen browsers (Chrome, Safari, Firefox, Edge). Uses ES6, CSS variables, CSS Grid — no IE11.

## License

MIT — see `LICENSE`. Swap it out if you'd rather keep this proprietary.
