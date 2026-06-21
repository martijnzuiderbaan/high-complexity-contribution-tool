---
title: Trust and Launch Risk Review
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-21
status: draft
type: trust and launch risk review
language: nl-en
use: security privacy trust and launch-risk hardening review for the static prototype
---

# Trust and Launch Risk Review

This review covers the current Markdown/static-site prototype for the
**High-Complexity Contribution Tool** / **Instrument Complexiteit naar
Bijdrage**.

It is a product and trust review, not a formal legal, privacy, clinical,
security, employment, or occupational-health review.

Point-in-time note: This review records the trust and static-site posture at
the time it was written. The static beta form fields and some contact-route
blockers described below were later changed in Step 15, then packaged in Step
16 and reviewed in Step 17. Use `docs/PRIVATE_BETA_BLOCKER_FIXES.md`,
`docs/PRIVATE_BETA_RELEASE_NOTES.md`, `docs/DOCUMENTATION_INDEX.md`, and
`docs/CONTENT_QA_REPORT.md` for current private-beta status.

## 1. Executive Summary

Current readiness level:

- Ready for private maintainer review of the static Markdown/site prototype.
- Close to private beta orientation, if beta access remains manual and no real
  data is collected through the static site.
- Not ready for public launch, paid self-serve checkout, employer rollout, live
  analytics, or stored beta submissions.

Biggest trust risks:

- Employer misuse for selection, performance management, ranking, discipline,
  or support entitlement.
- Adults oversharing private workbook, health-adjacent, conflict, or HR details.
- Coaches, facilitators, or buyers overclaiming validation, assessment value,
  diagnosis, prediction, or commercial proof.
- Static-site CTAs being mistaken for live beta submission or paid purchase
  readiness.
- Future analytics, forms, payments, or employer pilots creating new data flows
  before privacy, security, and responsible-use handling exists.

Safe for private beta only if:

- Intake is manual.
- Participants receive beta disclosure, privacy, responsible-use, terms
  placeholder, and security posture information.
- No completed workbook responses are collected by the product owner.
- Misuse requests are declined or redirected.
- Feedback is captured as generalized product learning, not personal case
  detail.

Not ready for public/commercial launch:

- No final legal/privacy/terms review.
- No live contact/support/security reporting route.
- No payment/refund/license workflow.
- No public deployment QA.
- No real beta intake process, retention process, or deletion process.
- No employer pilot agreement or governance process.

## 2. Current Artifact Inventory

| Artifact | Role in launch trust |
|---|---|
| `README.md` | Main public overview, package map, status, and safety boundaries. |
| `Adult Self-Scan v0.1.md` | Legacy adult private reflection artifact with disclosure controls. |
| `Employer Role Scan v0.1.md` | Legacy role/context scan with employer-side non-selection boundaries. |
| `Joint Conversation Canvas v0.1.md` | Legacy shared canvas for one bounded 30-day experiment. |
| `docs/WORKBOOK_v1.md` | Current core workbook with purpose, boundaries, safety stops, and experiment flow. |
| `docs/INTERPRETATION_GUIDE_v1.md` | Prevents over-interpretation, scoring, diagnosis, and employment conclusions. |
| `docs/MANAGER_CONVERSATION_GUIDE_v1.md` | Manager-facing guide for role/context conversations and documentation boundaries. |
| `docs/USER_GUIDE.md` | Practical use-order and pause/escalation guidance. |
| `docs/V1_PACKAGE_INDEX.md` | Package map and launch-gap inventory. |
| `docs/BETA_DISCLOSURE_AND_CONSENT.md` | Draft beta disclosure, consent wording, data warnings, and stop conditions. |
| `docs/RESPONSIBLE_USE_GUIDE.md` | Responsible-use rules for adults, coaches, managers, HR, and employer pilots. |
| `docs/PRIVACY_PLACEHOLDER.md` | Current privacy posture and future beta data-handling checklist. |
| `docs/ANALYTICS_AND_MEASUREMENT.md` | Privacy-first beta measurement plan and no-op/future event taxonomy. |
| `docs/ACCESS_AND_ACCOUNTS_PLAN.md` | Decision to avoid accounts and keep beta access manual for now. |
| `docs/MONETIZATION.md` | Pricing and payment hypotheses with explicit no-live-payment boundaries. |
| `docs/PRD_v1.md` | Product scope, metrics, launch checklist, and out-of-scope decisions. |
| `docs/v1_audit.md` | Earlier launch-readiness audit and content-risk review. |
| `docs/OPEN_ITEMS.md` | Persistent backlog for unresolved launch and trust work. |
| `docs/SECURITY.md` | Current static-prototype security posture and pre-launch security checklist. |
| `docs/TERMS_AND_USE_PLACEHOLDER.md` | Plain-language placeholder for terms and acceptable use. |
| `site/index.html` | Static landing page with prototype CTAs, form, FAQ, trust boundaries, and local doc links. |
| `site/script.js` | Local no-op analytics helper, section reveal behavior, and no-submit form handling. |
| `site/README.md` | Static-site limitations and future integration notes. |

## 3. Claims Review

| Claim area | Current state | Risk | Recommended adjustment | Adjusted in this step |
|---|---|---|---|---|
| Evidence-informed claims | Current wording says evidence-informed but not validated as a commercial instrument. | "Evidence-informed" can still be read as validation if isolated from boundaries. | Keep "not validated", "hypothesis", and "30-day experiment" close to evidence wording. | Yes, reinforced in this review and terms placeholder. |
| Non-diagnostic boundaries | Strong and repeated across README, workbook, guides, beta disclosure, site FAQ, and trust section. | Users may still seek proof of giftedness or diagnosis. | Keep refusal language and avoid score/result language. | No copy change needed. |
| Employer use boundaries | Strong boundaries against hiring, selection, promotion, performance rating, ranking, support entitlement, diagnosis, and HR files. | Employer pilots can still pressure disclosure or standardize too early. | Require written pilot scope and voluntary participation before employer use. | Added open item and risk register entries. |
| Beta/prototype status | Site and docs state the form is static and does not submit; the beta area is labeled as a placeholder. | Future copy or integration could still make beta capture look live before it is reviewed. | Keep no-submit copy visible and avoid adding any live-looking integration. | Footer/form links updated to security/terms context; no backend added. |
| Privacy/data claims | Current copy says the static site stores no form data and has no provider. `script.js` only reads optional local debug state. | Future forms or analytics would create a new data flow. | Keep provider-free posture and require privacy review before integration. | Yes, documented in `docs/SECURITY.md`. |
| Commercial/pricing claims | Pricing is labeled as hypothesis and payments are not live. | Users may infer offers are purchasable soon or outcomes are guaranteed. | Keep "not final offers" and no live payment language visible. | No copy change needed. |
| Analytics claims | Analytics plan and site README state no external provider; script logs no-op events only when explicitly debug-enabled. | Any future provider could collect more than intended. | Require provider/property/retention/opt-out review before real analytics. | Yes, captured in security checklist and open items. |

## 4. Misuse Risk Review

| Misuse risk | Risk | Existing mitigation | Remaining gap | Open item if needed |
|---|---|---|---|---|
| Employer selection misuse | Tool could be used for hiring, candidate comparison, or screening. | Repeated prohibition in README, responsible-use guide, beta disclosure, site FAQ, and terms placeholder. | Public/employer pilots still need enforceable terms and qualification. | Covered by OI-018/OI-019 style launch blockers and employer-pilot agreement need. |
| Performance-management misuse | Workbook content could be used as performance evidence or disciplinary narrative. | Manager guide and responsible-use guide say not to store completed scans or use outputs for rating. | Real employer use needs written documentation boundaries. | Add employer pilot agreement before employer pilots. |
| Adult over-identification | Adults may use patterns as fixed identity proof or giftedness validation. | Interpretation guide and responsible-use guide emphasize hypotheses and concrete work examples. | More examples may be needed to show grounded, non-identity-heavy summaries. | Existing example/worked-flow gaps remain. |
| Coach overclaiming | Coaches may sell it as validated assessment, certification, or diagnosis. | Responsible-use guide prohibits validated-assessment and certification claims. | Professional-pack terms and marketing copy still need review before paid use. | Covered by final terms/legal review open item. |
| HR standardization too early | HR may convert a sensitive reflection tool into a quasi-assessment process. | Responsible-use guide requires bounded, voluntary pilots and warns against standardization. | Pilot governance and facilitator onboarding are not final. | Add employer pilot agreement/governance before employer pilot. |
| Data capture creep | Forms, analytics, payments, support, or feedback could collect sensitive details. | Privacy placeholder, access plan, analytics plan, and security doc require minimal fields and no completed scans. | No live retention/deletion process exists. | Keep real beta capture blocked until process exists. |
| Evidence-base overclaiming | Commercial claims could imply proven outcomes, ROI, diagnosis, or validation. | Monetization and site copy list claims to avoid. | Evidence citations and claim review are still needed before stronger public claims. | Existing OI-008 remains open. |
| Unsafe conflict contexts | Tool could intensify adversarial, legal, disciplinary, or health-related situations. | User guide, beta disclosure, interpretation guide, and manager guide include pause/escalation rules. | Facilitator scripts and referral language are still incomplete. | Existing facilitator-guide/example gaps remain. |

## 5. Static-Site Risk Review

| Area | Current state | Risk | Decision |
|---|---|---|---|
| Form does not submit | `site/script.js` prevents default submission and shows no-submit status text. | User may still think the CTA sends a request. | Keep copy explicit; no backend added. |
| No analytics provider | No external provider, fetch, beacon, XHR, or cookie usage was found in `site/`. | Future provider could change privacy posture. | Require review before adding any provider. |
| Local-only instrumentation | Event names exist, but tracking only logs local no-op debug output when explicitly enabled. | Debug terminology may be confused with stored analytics. | Site README and security doc state no-op/local-only behavior. |
| External links/assets/scripts | Site links only local CSS/JS/docs; no external scripts/assets found. | Public hosting could break local `../docs/` links depending on deployment root. | Link/static-hosting QA needed before public deployment. |
| Accessibility and clarity risks | Static site has semantic sections and skip link, but no automated accessibility audit was run. | UI issues could reduce trust or hide boundaries. | Run accessibility QA before public deployment. |
| Broken relative links | Current local-root serving should resolve links; serving `site/` alone will not resolve `../docs/`. | Deployed path could break docs links. | Site README documents the constraint; public deployment needs link check. |
| Misleading CTA risk | Beta CTAs and the form are labeled as placeholder/no-submit. | User may still enter data if they miss the explanatory copy. | Copy states no submit/no storage and form status repeats it. |

## 6. Repo Hygiene Review

| Area | Review result | Follow-up |
|---|---|---|
| Secrets search | Likely secret-pattern search found only policy/planning text and future Stripe/auth references, not actual credentials. | Keep `.env` and local-secret files ignored. |
| Env files | No `.env*` files visible in current inventory. | Added conservative `.gitignore` patterns. |
| Build/dependency manifests | No package, Python, Go, Rust, Make, or other dependency manifest visible. | No dependency install or scan exists. |
| Generated artifacts | No generated build output visible in `rg --files`. | Keep generated exports out unless intentionally added. |
| Large or irrelevant files | Current visible files are Markdown/static-site assets only. | No cleanup needed. |
| `.gitignore` status | No `.gitignore` was visible before this step. | Added conservative ignore file for secrets, logs, temp files, editor clutter, and common dependency/build folders. |

## 7. Beta Readiness Decision

| Stage | Status | Conditions |
|---|---|---|
| Private review | Ready | Use local/static files only; do not collect real participant data through the site. |
| Private beta | Conditionally ready | Manual intake only; send disclosure, privacy, responsible-use, security, and terms placeholder; collect minimal feedback; avoid completed scans. |
| Employer pilot | Not ready | Needs written pilot scope, voluntary participation rules, data handling, documentation boundary, facilitation route, and final terms/privacy review. |
| Paid pilot | Not ready | Needs final terms, license, refund/support boundaries, payment/invoice handling, privacy notice, and delivery process. |
| Public launch | Not ready | Needs final legal/privacy/security review, contact/support route, deployment QA, link/accessibility checks, and reviewed live data flows. |

## 8. Risk Register

| ID | Risk | Severity | Likelihood | Current mitigation | Remaining action | Owner or timing | Status |
|---|---|---|---|---|---|---|---|
| R-001 | Static beta form mistaken for live submission | Medium | Medium | Visible no-submit copy and JavaScript prevents submission | Keep status text and avoid live-looking integrations until ready | Before real beta form | Open |
| R-002 | Completed workbook content stored by product owner | High | Medium | Privacy, responsible-use, beta, analytics, and security docs prohibit this | Define accidental-disclosure response and retention/deletion process | Before real beta intake | Open |
| R-003 | Employer uses output for hiring, performance, or ranking | High | Medium | Repeated non-selection boundaries and employer guidance | Add written employer pilot agreement and qualification workflow | Before employer pilot | Open |
| R-004 | Coach/facilitator markets tool as validated assessment | High | Medium | Responsible-use and terms placeholder prohibit overclaiming | Review professional-pack copy and license before paid use | Before paid professional pack | Open |
| R-005 | Privacy or legal compliance overclaimed | High | Low | Current docs state placeholders are not final legal/privacy text | Obtain review before public data collection or paid use | Before public/paid launch | Open |
| R-006 | Future analytics collects sensitive or identifying data | Medium | Medium | Analytics plan limits events and forbids workbook content | Provider/data-flow/property review before integration | Before analytics provider | Open |
| R-007 | Relative docs links break when deployed | Medium | Medium | Site README explains serving repository root | Run link check against deployment target | Before public deployment | Open |
| R-008 | Unsafe conflict, legal, health, or occupational-health context uses ordinary workbook flow | High | Medium | Stop/escalation language across guides | Add facilitator scripts and referral templates | Before employer/facilitated beta | Open |
| R-009 | Pricing hypotheses read as live offers | Medium | Low | Site states checkout/payment/license delivery are not live | Keep payment disabled until terms/privacy/refund are ready | Before payment integration | Open |
| R-010 | No monitored issue/security contact route | Medium | Medium | Placeholder route in security doc | Define real maintainer/security/support route | Before public deployment | Open |

## 9. Hardening Actions Taken in This Step

- Created `docs/SECURITY.md` to document current static-prototype security
  posture, data assumptions, reporting placeholder, and pre-launch checklist.
- Created `docs/TRUST_AND_LAUNCH_RISK_REVIEW.md` to consolidate claims,
  misuse, static-site, repo hygiene, readiness, and risk-register review.
- Created `docs/TERMS_AND_USE_PLACEHOLDER.md` to make acceptable and prohibited
  uses visible before final legal terms exist.
- Updated `README.md` to link the new security, trust, and terms artifacts.
- Updated `site/index.html` footer/form links so security and terms placeholders
  are visible from the static page.
- Updated `site/README.md` to mention the new security and terms placeholders.
- Updated `docs/OPEN_ITEMS.md` to resolve the terms-placeholder item and add
  follow-up launch blockers.
- Added `.gitignore` with conservative local-secret, log, temp, editor,
  dependency, and build-output patterns.

## 10. Remaining Launch Blockers

Must fix before real beta data collection:

- Define a real contact route.
- Define manual intake storage, access, retention, correction, and deletion.
- Add final beta form consent/notice text if any form becomes live.
- Define accidental sensitive disclosure handling.
- Confirm no completed scans are requested or stored.

Must fix before paid use:

- Final terms of use and license scope.
- Privacy notice for purchases, delivery, support, and feedback.
- Refund/cancellation and support boundaries.
- Payment/invoice/tax workflow review.
- Delivery process for blank templates only.

Must fix before employer pilot:

- Written employer pilot scope and responsible-use acceptance.
- Voluntary participation and no-adverse-consequence language.
- Documentation boundary and HR-file rules.
- Facilitator/escalation route.
- Data handling for any pilot notes or feedback.

Must fix before public launch:

- Public privacy policy, terms, responsible-use, security/contact, and support
  route.
- Static-hosting, link, accessibility, and content-boundary QA.
- Final claim review for diagnosis, validation, hiring, promotion, performance,
  mental health, GDPR/legal compliance, live payment, live beta submission, and
  stored analytics implications.
- Review of any live vendors or third-party services.
