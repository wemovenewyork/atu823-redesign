# ATU Local 823 — Website Redesign Preview

Live preview of the redesigned ATU Local 823 website. Static HTML/CSS/JS — no build step, no dependencies, deploys anywhere.

## What's in here

- `index.html` — Homepage (Bold & Union-Proud direction)
- `news.html` — News & advisories listing
- `news-fmcsa.html` — Sample post: FMCSA Medical Certification Changes
- `news-bowling.html` — Sample post: Bowling Night
- `news-blizzard.html` — Sample post: Blizzard Advisory
- `officers.html` — Officers & stewards (the broken page on the live site, now fixed)
- `pick-schedules.html` — Pick schedules with IB / KP tabs
- `routes.html` — Route descriptions with IB / KP tabs
- `resources.html` — Contract, forms, external links
- `assets/style.css` — Shared design system
- `assets/crest.png` — Local 823 crest
- `assets/atu-logo.png` — ATU International wordmark

## ⚠️ Placeholder content

Items marked **placeholder** in the UI need confirmation from Elijah Spates Jr. before launch:

1. Founding year (currently shows "Chartered placeholder")
2. Total membership count (currently 1,200+)
3. Years in operation (currently 122)
4. Per-garage operator counts (~720 IB / ~480 KP)
5. Contact phone in header (973 · 374 · 4470)
6. What the "Read the Contract" and "File a Grievance" buttons should do

## Deploy to Vercel

### Option 1 — From GitHub (recommended)

```bash
# from this directory
git init
git add .
git commit -m "ATU 823 redesign preview"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/atu823-redesign.git
git push -u origin main
```

Then on [vercel.com](https://vercel.com):
1. Click **Add New… → Project**
2. Import the GitHub repo
3. Framework preset: **Other** (Vercel auto-detects static sites)
4. Click **Deploy**

That's it. Vercel will give you a `*.vercel.app` URL within ~30 seconds. Send that link to Elijah.

### Option 2 — Vercel CLI (no GitHub)

```bash
npm i -g vercel
vercel
```

Follow the prompts. First deployment creates the project; future `vercel --prod` calls deploy updates.

### Option 3 — Drag & drop

[netlify.com/drop](https://app.netlify.com/drop) — drag this folder onto the page, get a URL instantly. No account needed for the initial preview.

## Local preview

Just open `index.html` in any browser. No server needed for basic preview.

For a proper local server (so internal links work cleanly):

```bash
# Python 3
python3 -m http.server 8000

# Or Node.js
npx serve .
```

Then visit http://localhost:8000

## Design notes

**Colors:**
- Navy `#0F1F3D` (primary)
- Red `#DC2626` (accent / CTAs)
- Gold `#C9A14A` (premium accent, pulled from the crest)
- Cream `#F5F1E8` (light section backgrounds)

**Typography:**
- Headlines: `Archivo Black` (loaded from Google Fonts)
- Body: `Inter`

**Logo hierarchy:**
- The Local 823 crest is the primary brand mark (left side of header, large)
- The ATU International wordmark appears smaller, labeled "Affiliated With" — signaling the local's parent affiliation without competing for attention

## When this becomes the real site

This is a **preview** built in plain HTML to show Elijah the direction. The actual production site will be rebuilt in **Wix Studio** so Elijah retains the ability to post news, update pick schedules, and manage content himself without code.

The Wix Studio rebuild will use this exact design language — the layouts, colors, typography, and component patterns translate directly.

## Removing the preview banner

Before sending to anyone outside the project, you can remove the gold "PREVIEW" banner at the top of every page by deleting this block from each HTML file:

```html
<div class="demo-banner">
  <strong>PREVIEW</strong> &nbsp;·&nbsp; Redesign mockup for ATU Local 823
</div>
```

— or in bulk with `sed`:

```bash
# macOS / Linux
sed -i '' '/<div class="demo-banner">/,/<\/div>/d' *.html
```

## Questions / changes

Open an issue on the repo or text Elijah directly.

Solidarity.
