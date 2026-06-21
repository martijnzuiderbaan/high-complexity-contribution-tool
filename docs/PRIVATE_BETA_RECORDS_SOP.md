---
title: Private Beta Records SOP
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-22
status: draft
type: private beta records SOP
language: nl-en
use: manual records, contact, consent, feedback, deletion, and disclosure handling for invite-only private beta
---

# Private Beta Records SOP

This SOP defines the minimum manual records process for the invite-only private
beta of the **High-Complexity Contribution Tool** / **Instrument Complexiteit
naar Bijdrage**.

It does not add accounts, authentication, payments, backend APIs, databases,
external analytics, cookies, tracking scripts, third-party services, or live
form submission.

## 1. Purpose

Use this SOP to keep private beta records useful, minimal, and separate from
completed workbook content.

The records process supports:

- Manual contact and follow-up with invited participants.
- Responsible-use acknowledgement.
- Product feedback about clarity, usefulness, boundaries, missing artifacts,
  and commercial fit.
- Deletion, correction, redaction, and accidental-disclosure handling.
- Weekly beta learning without storing sensitive case narratives.

The records process must not become:

- A participant assessment file.
- A personnel, HR, health, legal, or occupational-health record.
- A store of completed workbook responses.
- A scoring, ranking, comparison, or decision log.

## 2. Contact Route

Private beta is invite-only until a reviewed public intake route exists.

Minimum rule:

- Each invited participant must have a direct private contact route agreed in
  the invitation before materials are sent.
- Record the route only in the private contact record, not in product-learning
  notes.
- If no direct route is agreed, do not invite the participant and do not ask for
  beta feedback.
- Do not use the static website for intake, support, privacy requests, or
  security reports.

Use the same direct private route for:

- Beta access questions.
- Support questions.
- Privacy/deletion/correction requests.
- Misuse or unsafe-positioning reports.
- Security or site-behavior reports.

Do not ask participants to include completed workbook responses, health
details, HR case facts, conflict narratives, or third-party personal data in any
report.

## 3. Storage and Access

Use one private, access-controlled local file or spreadsheet selected by the
maintainer. Do not commit the tracker, contact records, consent log, feedback
notes, or participant details to this repository.

Minimum storage rules:

- Keep contact records separate from product-learning notes.
- Limit access to the maintainer and explicitly involved reviewers.
- Do not share identifiable beta notes with employers, clients, public pages,
  or third parties without explicit permission.
- Store only what is needed for beta operations and product learning.
- Keep completed workbook responses out of product-owner records.

## 4. Contact Record Template

Use one row per participant.

| Field | Allowed content |
|---|---|
| Participant ID | Manual code such as `BETA-001` |
| Name or contact label | Minimal identifier needed for follow-up |
| Direct contact route | Email, DM, or other private route already agreed with the participant |
| Participant type | Adult, coach/advisor/facilitator, manager/HR, reviewer, employer pilot candidate |
| Wave | Wave 0, 1, 2, 3, or 4 |
| Date invited | Date only |
| Date onboarded | Date only |
| Docs sent | Document names or package version |
| Boundary acknowledgement | Yes, no, not yet, not applicable |
| Fit decision | Accept, clarify, waitlist, decline, refer elsewhere |
| Follow-up status | Next action and date |
| Deletion/correction status | None, requested, completed, not applicable |

Do not store sensitive narratives in this record.

## 5. Product-Learning Tracker Template

Use participant ID only. Keep this separate from the contact record.

| Field | Allowed content |
|---|---|
| Participant ID | Same code as contact record |
| Feedback date | Date only |
| Artifact or section | Document or site section name |
| Feedback category | Clarity, usefulness, safety, privacy, boundary, missing artifact, pricing, site behavior, other |
| Short product note | Product-focused note without personal case detail |
| Sensitive content included? | No, yes-redact, yes-delete |
| Action decision | No change, revise now, add to open items, future release |
| Owner | Maintainer or reviewer |
| Follow-up date | Date only |

Allowed product-learning notes:

- "Workbook section 6 felt too long."
- "Manager guide boundary language was clear."
- "Beta page looked like it collected data."
- "Participant asked whether a facilitator script exists."

Do not record:

- Completed workbook answers.
- Personal health, burnout, diagnosis, disability, treatment, or
  occupational-health details.
- Full employment-conflict narratives.
- HR, legal, grievance, disciplinary, promotion, performance, or firing
  details.
- Names or identifiable details about employees, managers, colleagues, clients,
  candidates, organizations, teams, or family members.

## 6. Consent and Disclosure Log

Before sending beta materials, record:

| Field | Allowed content |
|---|---|
| Participant ID | Manual code |
| Disclosure document | `docs/BETA_DISCLOSURE_AND_CONSENT.md` |
| Disclosure version/date | Document date or package date |
| Acknowledgement context | Email, call, DM, facilitated session, reviewer note |
| Non-diagnostic boundary acknowledged | Yes, no, not yet |
| No HR-decision use acknowledged | Yes, no, not applicable |
| No completed scans/sensitive details acknowledged | Yes, no, not yet |
| Quote/testimonial permission | Separate yes/no; default no |
| Notes | Only product/process notes |

Quote or testimonial permission must stay separate from beta participation.
Default to no public quote permission unless explicit wording is confirmed.

## 7. Retention and Deletion

Default retention:

- Keep active participant contact records only while follow-up is needed.
- Review records weekly during active beta waves.
- Delete declined, unsuitable, or inactive contact records within 30 days
  unless a concrete follow-up is agreed.
- Delete or anonymize contact records within 90 days after the participant's
  final beta follow-up unless explicit ongoing contact permission exists.
- Keep aggregate, anonymized product-learning themes only where possible.

Deletion and correction:

- Participants may ask for contact details or feedback notes to be deleted or
  corrected through the direct private route.
- Confirm deletion or correction when completed.
- If deletion is not practical for a specific operational reason, record the
  reason in the private contact record and remove unnecessary detail anyway.

## 8. Accidental Sensitive Disclosure

If a participant sends sensitive or out-of-scope information:

1. Do not copy it into the product-learning tracker.
2. Delete or redact it from notes where practical.
3. Reply through the direct private route with a short boundary reminder.
4. Ask for generalized product feedback instead.
5. Record only the category, such as `accidental sensitive disclosure - deleted`
   or `privacy boundary unclear`.
6. Pause the beta use if the situation appears legal, clinical,
   occupational-health, disciplinary, unsafe, or otherwise outside the tool.

Do not provide legal, clinical, occupational-health, HR, privacy, or security
advice. Refer the participant to an appropriate route when the issue is outside
product feedback.

## 9. Weekly Summary Template

Create one short internal summary per active beta week.

```text
Date range:
Wave:
Participants invited:
Participants onboarded:
Participants declined/waiting:
Main clarity issue:
Main privacy or misuse issue:
Main missing artifact:
Experiment outcome categories:
Commercial or pricing signal:
Sensitive disclosure events, category only:
Changes made this week:
Open items added:
Next action:
```

Do not include identifiable participant stories in the weekly summary.

## 10. Pre-Invite Checklist

Before inviting a real participant, confirm:

- A direct private contact route is agreed.
- The beta disclosure and responsible-use boundaries were sent or linked.
- The participant acknowledged the non-diagnostic and no-HR-decision boundary.
- The participant agreed not to send completed workbook responses or sensitive
  details.
- Contact records and product-learning notes are separated.
- Deletion/correction handling is available through the direct private route.
- Accidental-disclosure handling is understood.
- The static website is not used as an intake form.
- No auth, accounts, payments, backend APIs, databases, external analytics,
  cookies, tracking scripts, third-party services, or live form submission have
  been added for beta intake.
