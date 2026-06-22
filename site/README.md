# Static Website Prototype

This folder contains a lightweight commercial landing page for the
High-Complexity Contribution Tool / Instrument Complexiteit naar Bijdrage.

The site introduces the tool, explains the responsible-use boundaries, links to
repository materials for public testing, and provides an invite-only beta
access panel with no input fields. It also links to the demo flow, onboarding
guide, synthetic examples, draft beta disclosure, responsible-use guide,
privacy placeholder, private beta plan, private beta records SOP, security
posture, and terms placeholder in the repository, plus the private beta release
notes, documentation index, and content QA report created for the release
package. Deployment planning is documented in `../docs/DEPLOYMENT.md` and
`../docs/DEPLOYMENT_QA.md`.

## Open Locally

Open `site/index.html` directly in a browser, or serve the repository root:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://127.0.0.1:8000/site/
```

The hosted page links to GitHub repository files rather than relative local
Markdown paths.

## Static or Mock Only

- No backend exists.
- The beta access panel has no input fields and does not submit, store, email,
  or persist anything.
- No analytics provider is connected.
- `script.js` includes optional provider-agnostic no-op analytics events for
  local debugging only. They log to the console only when explicitly enabled
  with `?analyticsDebug=1` or
  `localStorage.setItem("hcctAnalyticsDebug", "1")`.
- No checkout, payment, account, or license delivery flow exists.
- Draft disclosure, responsible-use, privacy-placeholder, security, and terms
  placeholder documents plus private beta release package docs exist in
  `../docs/` and the repository root; final legal/privacy terms and production
  security assurance are still not implemented.
- GitHub Pages hosting is intended only for public testing. The Pages artifact
  should publish only this `site/` folder. The public repository itself remains
  crawlable in practice, even with best-effort crawl discouragement on the
  hosted page.

## Deployment Planning

Use `../docs/DEPLOYMENT.md` for the static-hosting plan and
`../docs/DEPLOYMENT_QA.md` for the deployment QA checklist before any hosted
preview is shared.

For local preview, serve the repository root and open `/site/`:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Future hosting should publish this `site/` directory as a curated static export.

## To Connect Later

- Add privacy-reviewed beta email capture with explicit consent and retention
  rules only after the manual invite-only beta process is no longer enough.
- Follow `../docs/BETA_PLAN.md` for manual beta intake, feedback, support, and
  wave progression.
- Replace draft privacy/disclosure/security/terms copy before public launch.
- Follow `../docs/ANALYTICS_AND_MEASUREMENT.md` before connecting any real
  analytics provider.
- Choose a deployment target for static hosting using `../docs/DEPLOYMENT.md`.
- Add link checking or lightweight content validation if the site grows.
