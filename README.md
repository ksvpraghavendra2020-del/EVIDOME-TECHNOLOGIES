# Evidome website

Marketing site for **EVIDOME TECHNOLOGIES (OPC) PRIVATE LIMITED**: *Evidence, engineered.*

| Part | Stack | Folder |
| --- | --- | --- |
| Frontend | Next.js (App Router), TypeScript strict, Tailwind CSS v4, Framer Motion | [web/](web) |
| Backend API | Django 6 + Django REST Framework, Resend email | [api/](api) |

Django receives the enquiry and careers forms (validation, honeypot, per-IP rate limit of 5/min, storage, Resend email) and
provides an admin at `/admin/` to review submissions. All page content is static, typed data in the frontend.

## Run locally

**API** (port 8000)
```powershell
cd api
python -m venv .venv
.venv\Scripts\pip install -r requirements.txt
copy .env.example .env          # then edit
.venv\Scripts\python manage.py migrate
.venv\Scripts\python manage.py createsuperuser   # optional, for /admin/
.venv\Scripts\python manage.py runserver 8000
```

**Web** (port 3000)
```powershell
cd web
npm install
copy .env.example .env.local
npm run dev
```

Checks: `npm run lint`, `npx tsc --noEmit`, `npm run build`, `npx prettier --check src`.

## Environment variables

`web/.env.local`
- `NEXT_PUBLIC_SITE_URL`: canonical origin (sitemap, Open Graph, JSON-LD)
- `NEXT_PUBLIC_API_URL`: Django base URL
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: optional; analytics loads only after the visitor accepts the cookie notice

`api/.env`
- `DJANGO_SECRET_KEY`, `DJANGO_DEBUG` (`0` in production), `DJANGO_ALLOWED_HOSTS`, `CORS_ALLOWED_ORIGINS` (the site origin)
- `RESEND_API_KEY`, `MAIL_FROM`, `MAIL_TO`: without these, submissions are still saved and visible in `/admin/`; no email is sent

## Editing content

Everything lives in [web/src/content/](web/src/content):
- `site.ts`: company details, navigation, contact info, lifecycle stages, industries, values
- `services.ts`: the nine service pages (overview, deliverables, frameworks, engagement models, FAQ)
- `insights.ts`: articles; add an object to publish a post

Search for `[PLACEHOLDER` to find everything awaiting real information (see [PLACEHOLDERS.md](PLACEHOLDERS.md)).

## Deployment

- **Web on Vercel**: import the repo, set root directory to `web`, add the env vars above.
- **Web on Cloudflare Pages / AWS (static)**: the site has no server-side rendering needs; add `output: "export"` to
  `next.config.ts` (remove the `headers()` block and set equivalent security headers at the CDN, e.g. a `_headers` file on
  Cloudflare Pages) and publish `web/out`.
- **API**: any Python host (Render, Railway, Fly.io, AWS). Install `requirements.txt`, set `DJANGO_DEBUG=0`, a real
  `DJANGO_SECRET_KEY`, the allowed host and `CORS_ALLOWED_ORIGINS`; run behind gunicorn and a managed database
  (SQLite is configured by default and is only suitable for development).

## Guardrails built in

No invented clients, testimonials, certifications or statistics. Sample charts are labelled *illustrative*. Standards
(ICH-GCP, CDISC, 21 CFR Part 11, GVP) are described as frameworks the company works within, never as certifications.
Legal pages are drafts that must be reviewed by counsel.
