---
title: Deployment Plan
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-22
status: draft with public GitHub Pages testing setup
type: deployment planning
language: nl-en
use: static-site deployment preparation and public testing setup
---

# Deployment Plan

## 1. Purpose

This document prepares the repository for static-site deployment of the
**High-Complexity Contribution Tool** / **Instrument Complexiteit naar
Bijdrage** and records the current public GitHub Pages testing setup.

It does not create a backend, connect a domain, add external services, make the
beta invite flow live, or imply public launch readiness. It remains a planning
document for static files only.

## 2. Current Site Architecture

Current architecture:

- Static HTML, CSS, and JavaScript live in `site/`.
- Hosted Markdown/document links in `site/index.html` point to GitHub
  repository files for public testing.
- `.github/workflows/pages.yml` deploys only the curated `site/` folder to
  GitHub Pages.
- The repository is public for testing so GitHub Pages can be enabled without a
  private-repository Pages plan.
- There is no build step.
- There is no backend.
- There is no form submission or external answer capture.
- `site/tool/` has browser-local input fields, optional localStorage after
  acknowledgement, and user-controlled Markdown export.
- There is no external analytics provider.
- There is no account, authentication, payment, checkout, license-delivery, or
  subscription system.
- `site/script.js` contains local no-op/debug analytics event names only. It
  does not send events to an external provider.

The local site can be opened directly from `site/index.html` or served from the
repository root at `/site/`. The Pages workflow publishes the contents of
`site/` as the curated public artifact.

## 3. Recommended Deployment Approach

### GitHub Pages

Fit:

- Good fit for a simple public static page when the repository or published
  branch can be public.
- Weaker fit for invite-only private beta because Pages is not a true access
  control mechanism.

Pros:

- Simple static hosting from a repository branch or folder.
- No build step is required for this project.
- Low operational burden.
- Easy to connect to repository history.

Cons:

- Public by default for normal Pages use.
- Limited preview and access-control options compared with other providers.
- Publishing the repository root can expose internal planning docs unless the
  deploy scope is curated first.

Privacy/trust implications:

- Acceptable for public orientation material only after privacy, terms,
  responsible-use, contact, and public-navigation decisions are ready.
- Not suitable as a privacy boundary for private beta materials.

Operational burden:

- Low.

Recommendation:

- Use later for a public static orientation site only if the package is curated
  and public launch gates are met. Do not use as the first private-beta
  deployment if access control or unlisted review matters.

### Netlify Static Site

Fit:

- Strong fit for a no-build static site and reviewer preview.
- Useful for branch deploys, preview deploys, simple rollback, and no-build
  static publishing.

Pros:

- No build command is required.
- Simple publish-directory setup.
- Preview deploys and rollback are operationally convenient.
- Can add redirects or headers later if needed.

Cons:

- Provider account and project configuration are still needed.
- Unlisted URLs are not the same as private access control.
- Password or access controls depend on provider features and plan choices.
- Root publishing can expose docs that should remain reviewer-only or repo-only.

Privacy/trust implications:

- Good first target for invite-only private beta review if the URL is treated
  as private-link only and no sensitive files are deployed.
- Provider logs and any default analytics/features must be reviewed before use.

Operational burden:

- Low to medium.

Recommendation:

- Recommended first deployment target for a static private-reviewer preview,
  provided the deployment remains private-link only, indexing is discouraged,
  and docs exposure is intentional.

### Vercel Static Site

Fit:

- Good fit for static hosting, preview deployments, and fast rollback.
- Better known for app deployments, but no build command is required for this
  static project.

Pros:

- Preview deployments are convenient.
- HTTPS and custom domains are straightforward.
- Good rollback and deployment history.

Cons:

- Provider defaults may assume app-style workflows.
- Access protection depends on project/account settings.
- Root publishing has the same docs-exposure risk as other static hosts.

Privacy/trust implications:

- Reasonable for reviewer previews if access settings, logs, and indexing are
  reviewed.
- Not a substitute for a privacy process or consent route.

Operational burden:

- Low to medium.

Recommendation:

- Good fallback if the maintainer already uses Vercel. Keep it static-only and
  avoid adding functions, analytics, or form handling.

### Cloudflare Pages

Fit:

- Good fit for a no-build static site, custom domain, HTTPS, and edge delivery.
- Potentially useful if Cloudflare Access or related access controls are
  already part of the maintainer's operational stack.

Pros:

- Strong static hosting and CDN performance.
- HTTPS and custom domains are mature.
- Headers and redirects can be added later.
- Can pair with Cloudflare access controls if deliberately configured.

Cons:

- More provider surface area than needed for the first simple preview.
- Access-control setup can add operational complexity.
- Root publishing still needs careful docs-exposure decisions.

Privacy/trust implications:

- Strong option if access control and DNS are already managed there.
- Provider analytics, logs, and indexing behavior still need review.

Operational burden:

- Medium.

Recommendation:

- Good fallback when access control or existing DNS alignment matters more than
  the simplest deploy flow.

### Manual Static Hosting

Fit:

- Good fit for a deliberately curated ZIP or folder uploaded to an existing
  static host.
- Useful when the maintainer wants maximum control over exactly which files are
  exposed.

Pros:

- No provider-specific build configuration is needed.
- The deployed file set can be curated manually.
- Easy to avoid publishing internal planning docs.

Cons:

- Manual uploads are error-prone.
- Rollback and version traceability require discipline.
- Link checks must be run against the exact uploaded folder.

Privacy/trust implications:

- Good when the priority is to expose only a narrow private-beta package.
- Risk depends on the host's access logs, indexing, HTTPS, and access-control
  settings.

Operational burden:

- Medium to high.

Recommendation:

- Use as fallback if curated file exposure is more important than deployment
  automation.

### S3/CloudFront or Equivalent Object Storage/CDN

Fit:

- Good fit for production-grade static hosting when custom headers, caching,
  CDN behavior, and infrastructure control matter.
- Overbuilt for the first private-beta preview unless the maintainer already
  has this infrastructure.

Pros:

- Strong control over storage, CDN, headers, cache behavior, TLS, and rollback
  patterns.
- Can be hardened and documented for later public launch.

Cons:

- More setup and maintenance than the current package needs.
- Misconfiguration can expose more files than intended.
- Requires provider, DNS, cache, logging, and access-policy decisions.

Privacy/trust implications:

- Can be strong if configured carefully.
- Creates more operational surface area, including logs, bucket policy, cache
  invalidation, and access review.

Operational burden:

- High for this stage.

Recommendation:

- Defer until public launch or a production-grade static hosting requirement
  exists.

## 4. Recommended First Deployment Target

Current first target for public testing: **GitHub Pages from the public
repository**.

Previous private-repository attempt:

- GitHub rejected Pages while the repository was private with: `Your current
  plan does not support GitHub Pages for this repository.`
- Making the repository public removes that plan blocker, but it also makes the
  repository contents public.
- The Pages workflow still deploys only the curated `site/` folder, not the
  full Markdown package as a Pages artifact.

Why it fits public testing:

- The repository has no build step, so a no-build static deployment is enough.
- GitHub Pages keeps the public landing page close to repository history.
- The curated workflow avoids publishing the full docs tree as the website.
- It does not require adding backend APIs, accounts, payments, analytics,
  cookies, forms, or storage.

Important limit:

- A public repository and GitHub Pages site are not access controlled.
- Robots and noindex settings can discourage indexing of the hosted page, but
  they are not privacy controls and cannot reliably prevent crawling of public
  GitHub repository pages.
- Do not publish sensitive data, completed workbook responses, private beta
  records, or internal materials that would be harmful if shared.

Fallback option:

- Use manual static hosting with a curated file set if the first priority is
  controlling exactly which docs are exposed.
- Use Cloudflare Pages if existing DNS/access-control operations make that
  easier than Netlify.

## 5. Deployment Scope

What to deploy for a public landing page:

- `site/index.html`
- `site/styles.css`
- `site/script.js`
- `site/robots.txt`

What to deploy for a later private-reviewer preview with broader materials:

- `site/README.md` if the host exposes Markdown docs for reviewers.
- Selected current docs needed by the page and invited reviewers.
- Selected synthetic examples from `examples/` if the demo flow is included.

What not to deploy:

- Completed workbook responses.
- Private beta contact records.
- Consent logs, feedback spreadsheets, or weekly beta summaries.
- Employee data, HR case data, health data, conflict details, or identifiable
  workplace examples.
- Secrets, tokens, private URLs, credentials, local environment files, or
  account-specific provider configuration.
- Any live form, intake endpoint, backend API, payment route, account route, or
  external analytics script.

Docs and examples exposure:

- During public repository testing, `docs/` and `examples/` are visible in the
  public GitHub repository even though they are not deployed as the Pages site.
- Before any broader public launch, separate public-facing docs from internal
  planning and reviewer docs.

Release docs:

- `docs/PRIVATE_BETA_RELEASE_NOTES.md`, `docs/DEPLOYMENT.md`, and
  `docs/DEPLOYMENT_QA.md` can be shared with private reviewers.
- Internal planning docs such as PRD, monetization, launch reviews, open items,
  and risk reviews should remain repo-only or private-link only until public
  navigation is deliberately curated.

Private beta effect:

- A static deployment may make the page easier to review, but it does not make
  the beta public, self-serve, or live.
- The direct private invitation route remains the only beta access route.

## 6. Pre-Deployment Decisions

Before changing deployment scope or sharing more broadly, decide:

- Domain or subdomain: whether to use a provider preview URL, a temporary
  subdomain, or a future public domain.
- Public vs unlisted/private-link: whether the page is meant for public
  visitors or only invited reviewers.
- Contact route: what direct private route invited beta users should use, and
  whether a public support/security/privacy route exists.
- Privacy/terms readiness: whether placeholders are acceptable for the stage
  or final reviewed materials are required.
- Docs exposure: which `docs/`, `examples/`, and root files should be publicly
  reachable.
- Release-doc exposure: which release, QA, roadmap, open-item, PRD, risk, and
  monetization docs are public, private-link only, or repo-only.
- Beta mode: whether beta is still invite-only and manual.
- Analytics decision: whether analytics remain off. For the current stage they
  should remain off.
- Robots/indexing decision: whether indexing should be discouraged with host
  settings, headers, robots metadata, or a later `robots.txt`.

Robots and noindex settings can discourage indexing, but they are not privacy
controls. Do not deploy sensitive material.

## 7. Static Hosting Setup Outline

Current GitHub Pages target: custom workflow in `.github/workflows/pages.yml`.

1. Repository/source selection: GitHub repository on `main`.
2. Pages build type: GitHub Actions workflow.
3. Publish artifact: copy `site/` into `_site` and upload that artifact only.
4. Entry point: `site/index.html` becomes the hosted Pages root `index.html`.
5. Docs and examples: not deployed in the Pages artifact; hosted links point to
   GitHub repository files for testing.
6. Build command: none beyond the copy step in the workflow.
7. Analytics/forms/accounts/payments: none.
8. Indexing: `site/index.html` includes `noindex,nofollow`; `site/robots.txt`
   is included for future root/custom-domain deployments.

Alternative target: Netlify static site preview.

High-level setup:

1. Repository/source selection: choose the repository and branch that contain
   the reviewed static files.
2. Publish directory: for a reviewer deployment, publish the repository root so
   `/site/`, `/docs/`, and `/examples/` relative links can resolve. For a
   future public deployment, use a curated deploy folder or update links first.
3. Build command: none.
4. Site root: share the `/site/` path as the entry point unless a later redirect
   from `/` to `/site/` is deliberately added.
5. Custom domain: leave unset for the first private-reviewer preview unless a
   domain/subdomain decision has been made.
6. HTTPS: use the provider-managed HTTPS default.
7. Redirects or headers: add only after decisions are made. A future root
   redirect to `/site/` and conservative security headers may be useful, but no
   provider-specific config is added in this step.
8. Cache settings: keep short or default cache behavior during private beta so
   document corrections appear quickly.

Do not add provider secrets, account IDs, live commands requiring account
access, functions, forms, analytics, identity features, or payment integrations
as part of this setup.

## 8. Security and Privacy Considerations

Before deployment, confirm:

- No secrets are in the repository or deployed files.
- No sensitive beta data is in deployed files.
- No workbook responses are in the repository or deployed files.
- No live capture is added without a reviewed privacy, consent, retention,
  deletion, support, and accidental-disclosure process.
- Hosting provider logs, analytics defaults, form features, identity features,
  and preview settings are reviewed.
- Search exposure and indexing behavior are reviewed.
- Headers are reviewed if the provider supports them, including content
  security policy, frame protection, referrer policy, and permissions policy.
- The site continues to have no backend calls, no external analytics provider,
  no cookies, no accounts, no payments, no file upload, and no real submission.
  Tool answers remain browser-local unless the user exports them.

## 9. Responsible-Use Deployment Considerations

Deployment must preserve the current boundaries:

- Keep non-diagnostic, non-selection, non-performance-management, and
  adult-agency boundaries visible.
- Do not make invite-only beta look open or public self-serve.
- Keep employer-use limits visible.
- Do not imply validation, production readiness, evidence of outcomes, public
  launch readiness, legal/privacy review completion, or commercial readiness.
- Keep completed workbook content out of hosted files and support routes.
- Keep the beta route manual and direct unless a future reviewed intake process
  is deliberately added.

## 10. Deployment Checklist

Before any external static deployment:

- [ ] Files ready.
- [ ] Links checked from the intended hosted root.
- [ ] No external calls added.
- [ ] No live form.
- [ ] No secrets.
- [ ] No sensitive beta data.
- [ ] No completed workbook responses.
- [ ] Privacy and terms placeholders are visible for private review, or final
      reviewed materials are ready for public use.
- [ ] Security and responsible-use links are visible.
- [ ] Contact route decision made.
- [ ] Docs exposure decision made.
- [ ] Robots/indexing decision made.
- [ ] Static server preview completed.
- [ ] Mobile spot-check completed.
- [ ] Provider log/default analytics settings reviewed.
- [ ] Rollback plan documented.

## 11. Rollback Plan

If a deployment needs to be reversed:

- Revert to the previous provider deployment from deployment history if the
  provider supports rollback.
- Remove or disable the current deployment if the wrong files or wording are
  exposed.
- Remove custom domain mapping or point the domain/subdomain away from the
  deployment if needed.
- Replace the beta page with a static unavailable notice only if the host and
  file scope are already reviewed.
- If public access needs to be removed, disable the site or project rather than
  relying only on robots or noindex settings.
- Communicate the change to invited beta users through the direct private route
  used for the invitation.
- Tell beta users what changed, whether any linked materials should be ignored,
  and where the current package lives.

Rollback communication should not include sensitive case detail or completed
workbook content.

## 12. Future Deployment Stages

Private preview:

- Static private-link preview for invited reviewers only.
- No live intake, analytics, payments, accounts, or backend.
- Docs exposure is deliberate and limited to reviewer needs.

Invite-only beta:

- Static site can orient invited users, but beta access remains manual.
- Direct private route and records SOP remain the operational process.
- Deployment QA must be run before sharing externally.

Paid pilot:

- Only after terms, privacy, support, refund, delivery, license, payment, and
  responsible-use boundaries are reviewed.
- Payments should remain separate from completed workbook content.

Public launch:

- Requires final public privacy, terms, support/contact, security/reporting,
  public navigation, claims review, deployment QA, and data-flow review.

SaaS/product version:

- Only justified later if evidence shows a real operational need for accounts,
  entitlements, update access, support, or delivery.
- It should not be added merely to make the workbook package look like
  software.
