---
title: Private Beta Blocker Fixes
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-22
status: draft
type: private beta blocker fix record
language: nl-en
use: Step 15 record of private-beta must-fix blockers, fixes made, and remaining launch status
---

# Private Beta Blocker Fixes

## 1. Purpose

This file records what Step 15 fixed and what remains after the private-beta
blocker pass.

Scope is limited to issues marked as must-fix before private beta in
`docs/V1_LAUNCH_REVIEW.md`. It does not implement public launch, employer
pilot, paid pilot, auth, accounts, payments, backend APIs, databases,
deployment, external analytics, cookies, tracking scripts, third-party
services, or real form submission.

## 2. Source Review

Source review: [`docs/V1_LAUNCH_REVIEW.md`](V1_LAUNCH_REVIEW.md).

Private-beta must-fix items considered:

- `PVB-001`: No real beta/contact route.
- `PVB-002`: Manual records process not operational.
- `PVB-003`: Placeholder form has live-looking fields.
- `PVB-004`: Stale user/package navigation.
- `PVB-005`: Claim-risk words in current materials.

## 3. Fix Summary

| Blocker ID | Issue | File(s) | Fix made | Verification | Status |
|---|---|---|---|---|---|
| PVB-001 | No real beta/contact route | `site/index.html`, `site/README.md`, `docs/BETA_PLAN.md`, `docs/SECURITY.md`, `docs/PRIVATE_BETA_RECORDS_SOP.md`, `docs/OPEN_ITEMS.md` | Defined invite-only private beta contact routing: each participant must have a direct private route agreed in the invitation; the static site is not used for intake, support, privacy requests, or security reports. Public monitored route remains out of scope for this step. | Search for invite-only route wording; confirm no live form submission was added. | Fixed for invite-only private beta |
| PVB-002 | Manual records process not operational | `docs/PRIVATE_BETA_RECORDS_SOP.md`, `docs/BETA_PLAN.md`, `docs/PRIVACY_PLACEHOLDER.md`, `docs/BETA_DISCLOSURE_AND_CONSENT.md`, `docs/OPEN_ITEMS.md` | Added concrete manual records SOP with separate contact record, product-learning tracker, consent log, retention/deletion/correction rules, accidental-disclosure process, weekly summary, and pre-invite checklist. Linked it from beta, privacy, and disclosure docs. | Confirm SOP exists and is linked; confirm open item status updated. | Fixed for invite-only private beta |
| PVB-003 | Placeholder form has live-looking fields | `site/index.html`, `site/script.js`, `site/README.md`, `docs/BETA_PLAN.md`, `docs/SECURITY.md`, `docs/PRIVACY_PLACEHOLDER.md`, `docs/BETA_DISCLOSURE_AND_CONSENT.md`, `docs/ANALYTICS_AND_MEASUREMENT.md`, `docs/ACCESS_AND_ACCOUNTS_PLAN.md`, `docs/MARKETING.md`, `docs/OPEN_ITEMS.md` | Removed visible name, email, role, and intended-use fields from the static beta section. Replaced them with no-input invite-only wording and no-submit/no-store/no-send language. Removed dead form-submit handling from the site script and aligned current-state docs that described the old form. | Confirm site says no input fields, no backend, no storage, no mailing-list integration, and no real submission; confirm no external network calls were added. | Fixed |
| PVB-004 | Stale user/package navigation | `docs/USER_GUIDE.md`, `docs/V1_PACKAGE_INDEX.md`, `docs/PRD_v1.md`, `README.md`, `Adult Self-Scan v0.1.md`, `Employer Role Scan v0.1.md`, `Joint Conversation Canvas v0.1.md`, `docs/OPEN_ITEMS.md` | Made the v1 workbook, interpretation guide, manager guide, onboarding, package index, and beta docs the canonical private-beta route. Marked v0.1 artifacts as legacy/reference and added legacy notices to the root v0.1 files. | Confirm current v1 docs are listed as entry points and v0.1 files are labeled legacy/reference. | Fixed |
| PVB-005 | Claim-risk words in current materials | `docs/MONETIZATION.md`, `site/index.html`, `README.md`, `docs/PRD_v1.md`, `docs/ANALYTICS_AND_MEASUREMENT.md`, `docs/ACCESS_AND_ACCOUNTS_PLAN.md`, `docs/MARKETING.md`, `docs/OPEN_ITEMS.md` | Replaced overclaiming launch language such as validation/proof framing with test, learn, bounded, exploratory, and commercial-learning wording where it functioned as a product claim. Kept negative boundary wording such as "does not prove giftedness" where it prevents misuse. | Targeted search for `validated`, `validation`, `prove`, `proven`, and absolute `safe` wording in affected files. | Fixed for private-beta sharing; claims register remains open for paid/public copy |

## 4. Non-Fixed Items

No private-beta must-fix item from `docs/V1_LAUNCH_REVIEW.md` remains unfixed
for an invite-only private individual beta.

Remaining related items that were not fixed because they are outside this
private-beta blocker step:

| Item | Reason not fixed | Still needed |
|---|---|---|
| Public monitored support/security/privacy route | Step 15 keeps private beta invite-only and manual; public route is needed for public, paid, or employer-facing use. | Keep `OI-017` open for the public monitored route. |
| Claims register | The private-beta wording was tightened, but a full claims register is broader paid/public copy governance. | Keep `OI-025` open for paid/public copy. |
| Facilitator scripts, separate tracker handout, content QA, and public/internal navigation separation | These are should-fix, facilitated-beta, or public-launch items, not private-beta blockers in this step. | Keep existing open items unchanged. |

## 5. Private Beta Status After Fixes

| Stage | Status | Rationale |
|---|---|---|
| Internal review | Go | The blocker fixes are documented, current docs are linked, and no live services were added. |
| Private individual beta | Conditional go | Suitable only for small invite-only beta with direct private contact route, SOP-based records handling, no completed scans sent to the maintainer, and no use of the static site for intake. |
| Facilitated beta | Conditional go | Source-of-truth and manual records blockers are improved, but broader facilitated use still needs the facilitator scripts, handouts, and tracker refinements already listed in open items. |
