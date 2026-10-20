# Placeholders needing real information

Search the code for `[PLACEHOLDER` to find each one.

## Company & contact (`web/src/content/site.ts`)
- General enquiries email, phone number, registered office address
- CIN, date of incorporation
- `contact.emailHref`: a `mailto:` link once the address exists

## About (`web/src/app/about/page.tsx`)
- Founder / leadership profiles (name, role, qualifications, bio, photo). Only real, approved information.

## Services (`web/src/content/services.ts`)
- Data Management FAQ: EDC platforms the team has experience with
- Statistical Programming FAQ: programming languages and tools (SAS / R / Python)
- Regulatory Affairs FAQ: regions and authorities supported

## Technology (`web/src/app/technology/page.tsx`)
- Product names, status (in development / available) and screenshots

## Careers (`web/src/app/careers/page.tsx`)
- Open roles (none listed yet)

## Contact (`web/src/app/contact/page.tsx`)
- Capabilities deck (not yet prepared)

## Legal (`web/src/app/legal/*`): all drafts, counsel review required
- Privacy: service providers and cross-border transfers, retention periods, grievance officer / data protection contact
- Terms: limitation of liability wording, governing jurisdiction and courts
- Confirm cookie notice wording once analytics is chosen

## Infrastructure
- Production domain (`NEXT_PUBLIC_SITE_URL`), Resend account and verified sending domain, `MAIL_TO` inbox
- Plausible domain (optional)
- Django `DJANGO_SECRET_KEY`, production database and hosting
