---
title: Deployment QA
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-22
status: draft
type: deployment QA checklist
language: nl-en
use: QA checklist for future static-site deployment
---

# Deployment QA

## 1. Purpose

This document is the QA checklist for any future static deployment of the
**High-Complexity Contribution Tool** / **Instrument Complexiteit naar
Bijdrage**.

It is a checklist only. It does not deploy the site, connect external services,
make beta intake live, or imply public launch readiness.

## 2. Local Preflight

Run the local static server from the repository root:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Open:

- `http://127.0.0.1:8765/site/`
- `http://127.0.0.1:8765/README.md`
- `http://127.0.0.1:8765/docs/PRIVATE_BETA_RELEASE_NOTES.md`
- `http://127.0.0.1:8765/docs/DEPLOYMENT.md`
- `http://127.0.0.1:8765/docs/DEPLOYMENT_QA.md`

Core links to test from the site:

- Workbook.
- Interpretation guide.
- Manager guide.
- Private beta release notes.
- Documentation index.
- Content QA report.
- Demo flow.
- Examples.
- Beta disclosure.
- Responsible-use guide.
- Privacy placeholder.
- Security.
- Terms placeholder.

Mobile viewport check:

- Check the homepage at a narrow mobile width.
- Confirm navigation, hero, beta placeholder, FAQ, and footer remain readable.

No-console-error check if practical:

- Open browser developer tools.
- Reload `/site/`.
- Confirm there are no JavaScript errors.
- Optional local no-op analytics debug logs are acceptable only when explicitly
  enabled with `?analyticsDebug=1` or local storage.

## 3. Link QA

Check links in:

- `README.md`
- `site/index.html`
- `site/README.md`
- `docs/DOCUMENTATION_INDEX.md`
- `docs/V1_PACKAGE_INDEX.md`
- `docs/PRIVATE_BETA_RELEASE_NOTES.md`
- `docs/LAUNCH_CHECKLIST.md`
- `docs/ROADMAP.md`
- `docs/OPEN_ITEMS.md`
- `examples/`
- Footer links in `site/index.html`
- Release/package links.

Confirm:

- Relative links resolve from the intended deployment root.
- For a site-only hosted deployment, hosted links to `docs/`, `examples/`, and
  `README.md` open the private GitHub repository for invited collaborators.
- If a later provider publishes the repository root, links from `/site/` to
  `../docs/`, `../examples/`, and `../README.md` work or are intentionally
  replaced.
- No link implies live beta intake, live payment, accounts, or public launch.
- Public-facing and internal/reviewer docs are not mixed accidentally on a
  public deployment.

## 4. Static Behavior QA

Confirm the deployed files still have:

- No input fields.
- No form submission.
- No backend calls.
- No external analytics provider.
- No cookies.
- No payment links.
- No checkout.
- No account, login, dashboard, portal, or authentication links.
- No file upload.
- No third-party capture service.
- No live beta invite request.

For `site/`, inspect for:

- `fetch`
- `XMLHttpRequest`
- `sendBeacon`
- External script URLs.
- External analytics URLs.
- Form, input, select, or textarea elements.

The current CSS may include unused form styles. That is not a live form by
itself; the HTML must still have no input fields or submission behavior.

## 5. Copy and Claim QA

Confirm copy still says:

- Private beta.
- Invite-only.
- Manual beta route.
- Non-diagnostic.
- No scoring.
- No hiring, selection, promotion, ranking, performance, support-entitlement,
  clinical, legal, occupational-health, disability, or formal accommodation
  use.
- No validation or outcome overclaims.
- No public launch.
- No production deployment.

Confirm copy does not imply:

- Public self-serve access.
- A live beta request flow.
- A validated assessment.
- A finished paid product.
- A production SaaS system.
- A legal, privacy, security, or clinical review has been completed.

## 6. Privacy and Security QA

Confirm:

- No secrets are present.
- No sensitive data is present.
- No workbook responses are present.
- No private beta records, consent logs, contact records, or feedback
  spreadsheets are present.
- Privacy, terms, security, beta disclosure, and responsible-use links are
  visible.
- Contact route wording is clear for the intended stage.
- The static site is not used for intake, support, privacy requests, or
  security reports unless a future reviewed process exists.
- Provider logs, analytics defaults, form features, identity features, and
  access settings have been reviewed.
- Search indexing exposure has been reviewed.

## 7. Accessibility and Usability QA

Check:

- Keyboard navigation reaches header links, CTA links, doc links, FAQ details,
  and footer links.
- Focus states are visible.
- Skip link works.
- Color contrast is acceptable in the main sections, beta panel, buttons, and
  footer.
- Mobile layout is readable.
- Text does not overlap or overflow obvious containers.
- Footer links remain usable on mobile.
- Reduced-motion behavior is acceptable where supported.

This checklist is a spot-check. A formal accessibility audit is still required
before public launch.

## 8. Deployment Provider QA

Before sharing a hosted URL, confirm:

- HTTPS is active.
- Custom domain or provider preview URL matches the intended stage.
- Robots/indexing decision is applied where practical.
- Provider analytics defaults are off or reviewed.
- Provider form handling is off.
- Provider identity/auth features are off unless deliberately reviewed.
- Logs retention and access are understood.
- Preview or access-control settings are understood.
- Redirects and headers, if configured, are reviewed.
- Cache behavior will not keep stale beta wording live for too long.

For private beta, remember:

- Unlisted URLs are not true privacy controls.
- Robots/noindex settings are not access controls.
- Do not host files that would be harmful if shared.

## 9. Post-Deployment Smoke Test

After any future deployment, test the deployed URL:

- Homepage loads.
- Documentation index loads.
- Private beta release notes load.
- Deployment docs load.
- Demo flow loads.
- Example files load.
- Privacy placeholder loads.
- Terms placeholder loads.
- Security page loads.
- Responsible-use guide loads.
- Beta section still has no input fields.
- Footer links resolve.
- No network calls beyond static assets occur where practical.
- No external analytics, cookies, forms, payments, accounts, or backend calls
  appear.

Record the exact environment and URL in the sign-off table.

## 10. Sign-Off Record

| Date | Environment/URL | Reviewer | Result | Issues found | Follow-up |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
