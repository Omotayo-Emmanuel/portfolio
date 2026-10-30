# Omotayo Emmanuel Ayomide: Portfolio

Static portfolio (plain HTML/CSS, no build step, no backend) for GitHub Pages.

## File structure

```
.
├── index.html                  # Hero, featured projects, about, volunteer, footer
├── styles.css                  # Shared styles
├── .nojekyll                   # Tells GitHub Pages to serve files as-is
├── README.md
├── assets/
│   ├── headshot.jpg
│   └── cv.pdf
└── projects/                   # One case study per project
    ├── adaptive-tutor.html
    ├── brain-tumour-classification.html
    ├── vaw-mental-health.html
    ├── facial-recognition.html
    ├── business-finder.html
    └── mellow-app.html
```

All paths are relative (`./assets/...`, `../styles.css`), so the site works at
`username.github.io` and at `username.github.io/repo-name/`.

## Preview locally

```bash
cd path/to/this/folder
python3 -m http.server 8000
```

Open http://localhost:8000. (Opening `index.html` directly also works.)

## Deploy to GitHub Pages

1. Create a GitHub repository (for a root URL, name it `Omotayo-Emmanuel.github.io`; any other name gives `Omotayo-Emmanuel.github.io/repo-name/`).
2. Put all files in the repository root and push to the `main` branch.
3. In the repo go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and **Folder** to `/ (root)`, then click **Save**.
6. Wait 1–2 minutes. The live URL appears at the top of the Pages settings.

## Optional: custom domain

<!-- CNAME placeholder: create a file named CNAME in the repo root containing only your domain, e.g. www.example.com -->

1. Buy a domain from any registrar.
2. In **Settings → Pages → Custom domain**, enter the domain and save. GitHub creates a `CNAME` file in the repo (pull it before your next push), or create it yourself containing only the domain.
3. At your DNS provider:
   - **www subdomain:** add a `CNAME` record, host `www`, value `Omotayo-Emmanuel.github.io`.
   - **Apex domain (example.com):** add `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
4. When DNS propagates (up to 24 hours), tick **Enforce HTTPS** in Pages settings.

## Updating content

- Text lives directly in `index.html` and `projects/*.html`.
- When a project gets a live demo, add a link next to the GitHub button in its case study page.
- Replace `assets/cv.pdf` to update the CV download.
