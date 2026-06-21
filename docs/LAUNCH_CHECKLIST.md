---
title: Launch Checklist
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-22
status: draft
type: launch checklist
language: nl-en
use: staged checklist for private beta, facilitated beta, employer pilot, paid pilot, and public launch readiness
---

# Launch Checklist

## 1. Checklist Purpose

This checklist separates readiness for:

- Private beta.
- First beta invite.
- Facilitated beta.
- Employer pilot.
- Paid pilot.
- Public launch.

Passing one stage does not imply readiness for the next. The current package is
a private-beta Markdown/static-site package, not a public or commercial launch.

## 2. Private Beta Checklist

- [ ] Artifact readiness: README, workbook, interpretation guide, manager
  guide, user guide, package index, onboarding, demo flow, release notes, and
  documentation index are available.
- [ ] Site wording: static site says private beta is invite-only and manual.
- [ ] Site wording: beta area has no input fields.
- [ ] Site wording: no backend, storage, mailing-list integration, or real
  submission is implied.
- [ ] Manual contact route: each invited participant has a direct private route
  agreed outside the site.
- [ ] Invite-only wording: public/self-serve beta access is not implied.
- [ ] Disclosure/consent: `docs/BETA_DISCLOSURE_AND_CONSENT.md` is sent or
  linked before materials.
- [ ] Privacy placeholder: current privacy posture and no-sensitive-content
  rules are visible.
- [ ] Responsible-use guide: adult, coach, manager, HR, and employer rules are
  visible.
- [ ] Security/terms placeholders: current limitations are visible.
- [ ] Manual records SOP: contact record, consent log, product-learning
  tracker, retention, deletion, correction, and accidental-disclosure handling
  are ready outside the repository.
- [ ] Feedback questions: product-focused questions are ready.
- [ ] Tracker: beta tracking can be done manually without sensitive content.
- [ ] Demo/onboarding: synthetic examples and demo flow are ready.
- [ ] Open-items review: unresolved items are visible in `docs/OPEN_ITEMS.md`.
- [ ] Stop conditions: diagnosis, selection, performance, ranking, mandatory
  employer use, unsafe conflict, and sensitive disclosure conditions are
  defined.
- [ ] No overbuilding: no accounts, payments, backend APIs, databases,
  deployment, external analytics providers, cookies, tracking scripts,
  third-party services, or live form submission have been added.

## 3. First Beta Invite Checklist

What to send:

- [ ] Private invite message.
- [ ] `docs/BETA_DISCLOSURE_AND_CONSENT.md`.
- [ ] `docs/RESPONSIBLE_USE_GUIDE.md`.
- [ ] `docs/PRIVACY_PLACEHOLDER.md`.
- [ ] `docs/SECURITY.md`.
- [ ] `docs/TERMS_AND_USE_PLACEHOLDER.md`.
- [ ] Relevant current v1 docs from `docs/DOCUMENTATION_INDEX.md`.

What to ask:

- [ ] Whether the participant accepts the non-diagnostic boundary.
- [ ] Whether they accept no hiring, promotion, performance, ranking,
  diagnosis, or support-entitlement use.
- [ ] Whether they agree not to send completed scans or sensitive details.
- [ ] Which participant category applies.
- [ ] Which product materials they are willing to review.
- [ ] Whether feedback can be collected through the agreed direct private
  route.

What not to ask:

- [ ] Completed workbook responses.
- [ ] Diagnosis, IQ, health, burnout, disability, treatment, or
  occupational-health information.
- [ ] Legal, grievance, disciplinary, performance, promotion, or HR case
  details.
- [ ] Full conflict narratives.
- [ ] Employee, manager, colleague, client, candidate, organization, team, or
  family names.
- [ ] Workplace records, screenshots, exports, or confidential files.

What to record:

- [ ] Participant ID.
- [ ] Minimal contact route.
- [ ] Participant type.
- [ ] Wave.
- [ ] Docs sent.
- [ ] Boundary acknowledgement.
- [ ] Fit decision.
- [ ] Product feedback category.
- [ ] Follow-up status.
- [ ] Deletion/correction status if relevant.

Follow-up timing:

- [ ] After onboarding.
- [ ] After first review of materials.
- [ ] After use or attempted use.
- [ ] After 30 to 45 days if a work experiment was tried.

## 4. Facilitated Beta Checklist

- [ ] Facilitator readiness: facilitator has read responsible-use,
  interpretation, manager, beta, privacy, security, and terms materials.
- [ ] Boundaries: facilitator will not present the tool as diagnosis, scoring,
  certification, validation, or assessment.
- [ ] Adult agency: adult controls what is shared.
- [ ] Session materials: workbook, interpretation guide, manager guide, demo,
  examples, and any tracker/review handout are ready.
- [ ] Feedback capture: feedback is about product clarity, session flow,
  missing scripts, trust, safety, and usefulness.
- [ ] No client details: completed client workbooks and sensitive stories are
  not sent to the maintainer.
- [ ] Escalation/stop conditions: health, legal, occupational-health,
  disciplinary, unsafe conflict, and formal HR issues are paused or referred
  outside the tool.
- [ ] Commercial boundary: no certification or validated-assessment claim is
  made.

## 5. Employer Pilot Checklist

- [ ] Written scope/agreement exists before any employer pilot.
- [ ] Purpose is role/context review and one bounded experiment.
- [ ] Participation is voluntary.
- [ ] Declining or pausing has no adverse consequence.
- [ ] Adult controls what private material is shared.
- [ ] Data boundaries are written.
- [ ] Completed workbook contents are not stored in HR files.
- [ ] Employer notes are role/context-only and minimum necessary.
- [ ] No adverse consequences are attached to non-participation or outcomes.
- [ ] No hiring, promotion, performance, ranking, support-entitlement,
  diagnosis, discipline, firing, or employee-comparison use.
- [ ] Facilitator or neutral process owner is identified where needed.
- [ ] Review criteria focus on role-design actions, evidence, workload, stop
  conditions, and learning.

## 6. Paid Pilot Checklist

- [ ] Offer definition: what is included and excluded.
- [ ] Pricing hypothesis: what price is being tested and why.
- [ ] Delivery method: manual download, facilitated session, workshop, or pilot
  materials.
- [ ] Invoice/payment route: manual route or reviewed hosted checkout.
- [ ] Refund/cancellation notes.
- [ ] License scope.
- [ ] Legal/privacy review appropriate to the paid data flow.
- [ ] Support process.
- [ ] No payment claim before the payment process exists.
- [ ] No account or portal unless a proven delivery/support need exists.
- [ ] No collection of completed workbook content through payment, support, or
  feedback routes.

## 7. Public Launch Checklist

- [ ] Final privacy policy.
- [ ] Final terms.
- [ ] Contact route.
- [ ] Support process.
- [ ] Security/reporting route.
- [ ] Production deployment.
- [ ] Domain.
- [ ] Link QA.
- [ ] Accessibility QA.
- [ ] Mobile spot-check.
- [ ] Analytics decision.
- [ ] Payment decision.
- [ ] Security review.
- [ ] Claims review.
- [ ] Evidence/validation wording reviewed.
- [ ] Data-flow review for every live form, payment, analytics, support, email,
  download, or third-party service.
- [ ] Public/internal navigation separation.
- [ ] Public package contents frozen.
- [ ] No live service is added without privacy, retention, consent, support,
  and deletion handling.

## 8. Do-Not-Launch Conditions

Do not launch beyond the current stage if any of the following is true:

- Any live form exists without a privacy process.
- The product claims validation, diagnosis, prediction, norming, clinical
  review, legal review, or proven outcomes without reviewed evidence.
- Employer-use boundaries are ambiguous.
- There is no contact route for the intended stage.
- There are no terms/privacy placeholders at minimum for private beta.
- Core links are broken.
- Payment claims are made without a payment process.
- Employer pilot starts without a written scope agreement.
- Public launch is implied while beta is still invite-only and manual.
- Completed workbook responses are requested by the product owner.
- External analytics, accounts, payments, or backend services are added without
  documented data-flow review.

## 9. Manual QA Checklist

- [ ] Static site renders locally.
- [ ] Local links from `site/` to `../docs/`, `../examples/`, and README work
  when serving the repository root.
- [ ] Docs links in README, package index, documentation index, and release
  notes are current.
- [ ] No external calls exist in `site/`.
- [ ] No form submission exists.
- [ ] No stale wording suggests public launch, live beta submission, payments,
  accounts, external analytics, backend, or production deployment.
- [ ] Mobile spot-check is acceptable.
- [ ] README navigation includes current release package docs.
- [ ] Open items remain in Markdown table format.
- [ ] Changelog and release notes describe private beta only.

## 10. Release Sign-Off Notes

Use this section for manual sign-off. Do not treat it as a certification,
legal review, privacy review, security assurance, or validation record.

| Field | Notes |
|---|---|
| Reviewed by |  |
| Date |  |
| Stage reviewed | Private beta / facilitated beta / employer pilot / paid pilot / public launch |
| Status | Go / conditional go / no-go |
| Conditions |  |
| Open blockers |  |
| Next review date |  |
