---
title: Documentation Index
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-22
status: draft
type: documentation index
language: nl-en
use: navigable index for current private-beta documentation package
---

# Documentation Index

## 1. Purpose

This index is a navigable map of the **High-Complexity Contribution Tool** /
**Instrument Complexiteit naar Bijdrage** repository.

It separates current private-beta docs, beta operations, responsible-use
materials, planning docs, website files, examples, and legacy/reference
materials so reviewers do not confuse the current v1 package with older v0.1
draft artifacts or future launch plans.

## 2. Start Here

| File | Purpose |
|---|---|
| `README.md` | Main product overview, workflow, package map, status, and boundaries |
| `docs/PRIVATE_BETA_RELEASE_NOTES.md` | Current private-beta release summary, status, included materials, entry criteria, and exit criteria |
| `docs/CONTENT_QA_REPORT.md` | Current content QA report, consistency findings, edits made, remaining risks, and readiness judgment |
| `docs/ONBOARDING.md` | Practical starting paths for individuals, manager-supported use, coaches/facilitators, employer pilots, and reviewers |
| `docs/DEMO_FLOW.md` | Fictional demo path for reviewing the workflow without real participant data |
| `CHANGELOG.md` | Meaningful package and release changes |

## 3. Core Tool Documents

| File | Purpose |
|---|---|
| `docs/WORKBOOK_v1.md` | Current adult-facing and joint-use workbook for reflection, preparation, experiment design, and 30-day review |
| `docs/INTERPRETATION_GUIDE_v1.md` | Responsible qualitative interpretation guide for patterns and role-design hypotheses |
| `docs/MANAGER_CONVERSATION_GUIDE_v1.md` | Manager/employer-facing conversation guide with agendas, questions, templates, and boundary language |
| `docs/USER_GUIDE.md` | Practical guide for choosing and using the current workbook flow |
| `docs/V1_PACKAGE_INDEX.md` | Current package map, audience mapping, use order, and remaining gaps |

## 4. Examples and Demo

| File | Purpose |
|---|---|
| `docs/DEMO_FLOW.md` | Walkthrough for understanding the tool without using real personal or workplace data |
| `examples/example_adult_workflow.md` | Synthetic adult workflow with selected responses, interpretation, manager-safe summary, asks, and boundaries |
| `examples/example_manager_conversation.md` | Synthetic manager conversation with 30-minute and 60-minute paths, notes, and action plan |
| `examples/example_30_day_experiment.md` | Synthetic 30-day experiment, check-ins, review, decision options, and final summary |

## 5. Beta Operations

| File | Purpose |
|---|---|
| `docs/BETA_PLAN.md` | Manual private beta operating plan, waves, intake, onboarding, feedback, support, tracker, and exit criteria |
| `docs/BETA_DISCLOSURE_AND_CONSENT.md` | Plain-language beta disclosure, consent wording, participant expectations, and maintainer checklist |
| `docs/PRIVATE_BETA_RECORDS_SOP.md` | Manual contact, consent, feedback, retention, deletion, correction, and accidental-disclosure process |
| `docs/PRIVATE_BETA_RELEASE_NOTES.md` | Private-beta release summary, status, included materials, review path, entry criteria, and owner notes |
| `docs/CONTENT_QA_REPORT.md` | Step 17 content QA report, checklist, fixes, remaining risks, and readiness judgment |
| `docs/LAUNCH_CHECKLIST.md` | Staged checklist for private beta, facilitated beta, employer pilot, paid pilot, and public launch readiness |

## 6. Responsible Use, Privacy, Security, and Trust

| File | Purpose |
|---|---|
| `docs/RESPONSIBLE_USE_GUIDE.md` | Practical responsible-use rules for adults, coaches, managers, HR partners, and employer pilots |
| `docs/PRIVACY_PLACEHOLDER.md` | Current static-prototype privacy posture and future beta-intake privacy checklist |
| `docs/SECURITY.md` | Current static-prototype security posture, issue route placeholder, and pre-launch security checklist |
| `docs/TERMS_AND_USE_PLACEHOLDER.md` | Plain-language placeholder for terms, acceptable use, prohibited use, and future legal-review needs |
| `docs/TRUST_AND_LAUNCH_RISK_REVIEW.md` | Point-in-time trust, privacy/security, misuse, static-site, and launch-readiness risk review |
| `docs/PRIVATE_BETA_BLOCKER_FIXES.md` | Step 15 record of private-beta blocker fixes and remaining readiness status |

## 7. Product and Commercial Planning

| File | Purpose |
|---|---|
| `docs/PRD_v1.md` | Product requirements and launch positioning |
| `docs/MONETIZATION.md` | Monetization and pricing hypotheses for manual beta learning and future paid packaging |
| `docs/ACCESS_AND_ACCOUNTS_PLAN.md` | Access, accounts, manual beta, and payment/access decision plan |
| `docs/ANALYTICS_AND_MEASUREMENT.md` | Privacy-first beta measurement plan and future event taxonomy |
| `docs/MARKETING.md` | Marketing and launch messaging source, not live public copy |
| `docs/ROADMAP.md` | Evidence-gated staged roadmap |
| `docs/V1_LAUNCH_REVIEW.md` | Point-in-time readiness review for private beta, employer pilot, paid pilot, and public launch; use current release notes and QA report for current status |
| `docs/OPEN_ITEMS.md` | Persistent backlog for unresolved recommendations and future work |
| `docs/v1_audit.md` | Earlier point-in-time product and launch readiness audit |

## 8. Website

| File | Purpose |
|---|---|
| `site/index.html` | Dependency-free static landing page prototype with no input fields and no live intake |
| `site/styles.css` | Static site styling |
| `site/script.js` | Local no-op/debug instrumentation and UI behavior; no external calls |
| `site/README.md` | Local preview instructions, static-site limits, and future integration notes |

Local preview:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://127.0.0.1:8000/site/
```

Serving only the `site/` directory renders the page but breaks `../docs/` and
`../examples/` links because those files sit outside that server root.

## 9. Legacy/Reference Materials

| File | Purpose |
|---|---|
| `Adult Self-Scan v0.1.md` | Legacy/reference adult private reflection artifact retained for comparison and source material |
| `Employer Role Scan v0.1.md` | Legacy/reference manager/employer role-context scan retained for comparison and source material |
| `Joint Conversation Canvas v0.1.md` | Legacy/reference joint conversation canvas retained for comparison and source material |
| `AGENTS.md` | Repository instructions for future Codex runs and content boundaries |

The v0.1 artifacts are not the default private-beta starting path. Use the v1
core documents for current review and beta use.

## 10. Recommended Reading Paths

Individual adult:

1. `README.md`
2. `docs/BETA_DISCLOSURE_AND_CONSENT.md`
3. `docs/USER_GUIDE.md`
4. `docs/WORKBOOK_v1.md`
5. `docs/INTERPRETATION_GUIDE_v1.md`

Manager or HR:

1. `README.md`
2. `docs/RESPONSIBLE_USE_GUIDE.md`
3. `docs/MANAGER_CONVERSATION_GUIDE_v1.md`
4. `docs/USER_GUIDE.md`
5. `docs/BETA_DISCLOSURE_AND_CONSENT.md`

Coach or facilitator:

1. `docs/PRIVATE_BETA_RELEASE_NOTES.md`
2. `docs/RESPONSIBLE_USE_GUIDE.md`
3. `docs/ONBOARDING.md`
4. `docs/DEMO_FLOW.md`
5. `docs/WORKBOOK_v1.md`
6. `docs/INTERPRETATION_GUIDE_v1.md`
7. `docs/MANAGER_CONVERSATION_GUIDE_v1.md`

Beta reviewer:

1. `docs/PRIVATE_BETA_RELEASE_NOTES.md`
2. `docs/LAUNCH_CHECKLIST.md`
3. `docs/CONTENT_QA_REPORT.md`
4. `docs/BETA_PLAN.md`
5. `docs/PRIVATE_BETA_RECORDS_SOP.md`
6. `docs/OPEN_ITEMS.md`
7. `site/README.md`

Product or commercial reviewer:

1. `docs/PRD_v1.md`
2. `docs/MONETIZATION.md`
3. `docs/ACCESS_AND_ACCOUNTS_PLAN.md`
4. `docs/ANALYTICS_AND_MEASUREMENT.md`
5. `docs/MARKETING.md`
6. `docs/ROADMAP.md`
7. `docs/V1_LAUNCH_REVIEW.md`

Maintainer:

1. `README.md`
2. `docs/DOCUMENTATION_INDEX.md`
3. `docs/V1_PACKAGE_INDEX.md`
4. `docs/CONTENT_QA_REPORT.md`
5. `docs/OPEN_ITEMS.md`
6. `CHANGELOG.md`
7. `docs/LAUNCH_CHECKLIST.md`
8. `AGENTS.md`

## 11. Source-of-Truth Notes

Canonical current private-beta docs:

- `README.md`
- `docs/DOCUMENTATION_INDEX.md`
- `docs/PRIVATE_BETA_RELEASE_NOTES.md`
- `docs/CONTENT_QA_REPORT.md`
- `docs/V1_PACKAGE_INDEX.md`
- `docs/WORKBOOK_v1.md`
- `docs/INTERPRETATION_GUIDE_v1.md`
- `docs/MANAGER_CONVERSATION_GUIDE_v1.md`
- `docs/USER_GUIDE.md`
- `docs/BETA_PLAN.md`
- `docs/PRIVATE_BETA_RECORDS_SOP.md`
- `docs/RESPONSIBLE_USE_GUIDE.md`

Historical/reference docs:

- `Adult Self-Scan v0.1.md`
- `Employer Role Scan v0.1.md`
- `Joint Conversation Canvas v0.1.md`
- `docs/v1_audit.md`
- `docs/V1_LAUNCH_REVIEW.md`
- `docs/TRUST_AND_LAUNCH_RISK_REVIEW.md`

Planning docs:

- `docs/PRD_v1.md`
- `docs/MONETIZATION.md`
- `docs/ACCESS_AND_ACCOUNTS_PLAN.md`
- `docs/ANALYTICS_AND_MEASUREMENT.md`
- `docs/MARKETING.md`
- `docs/ROADMAP.md`

How to avoid outdated v0.1 use:

- Do not send the root v0.1 artifacts as the current beta workbook.
- Do not route beta participants to v0.1 artifacts unless comparison is the
  explicit purpose.
- Use `docs/WORKBOOK_v1.md`, `docs/INTERPRETATION_GUIDE_v1.md`,
  `docs/MANAGER_CONVERSATION_GUIDE_v1.md`, and `docs/USER_GUIDE.md` as the
  current v1 tool path.
- Keep all future release notes clear about which files are current,
  historical, planning-only, or placeholder.
- When older audits or reviews mention pre-fix blockers, use current release
  notes, blocker-fix records, and content QA reports for the current status.
