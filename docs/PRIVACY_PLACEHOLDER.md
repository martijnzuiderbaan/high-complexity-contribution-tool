---
title: Privacy Placeholder
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-21
status: draft
type: privacy placeholder
language: nl-en
use: plain-language current prototype privacy posture and future beta intake preparation
---

# Privacy Placeholder

This document describes the current prototype privacy posture for the
**High-Complexity Contribution Tool** / **Instrument Complexiteit naar
Bijdrage**.

It is a plain-language placeholder for the current static prototype. It is not
a final legal privacy policy and should not be presented as one.

## 1. Purpose

The purpose of this placeholder is to make the current privacy posture explicit
before real beta intake, employer pilots, analytics, payments, accounts, or
deployment are added.

It explains:

- What the current repository and static site do.
- What data is currently collected by the repository/site.
- What data should not be collected at this stage.
- What principles should guide future beta intake.
- What must be prepared before real deployment.

This document should be replaced or reviewed before public launch, paid use,
employer pilots, or any live data collection.

## 2. Current Prototype Privacy Posture

The current prototype is static and local.

Current posture:

- Static site.
- Static beta access panel with no input fields and no submission.
- Client-only self-scan prototype with browser-local input fields, optional
  localStorage after acknowledgement, and user-controlled Markdown export.
- Local/static Markdown documents.
- No accounts.
- No analytics provider.
- No payments.
- No backend database.
- No email capture provider.
- No file upload.
- No automated scoring, ranking, interpretation, or recommendation system.

The static website can be opened locally in a browser. The Markdown files can
be read or edited locally. The current repository does not provide a backend,
hosted account service, or live intake system.

## 3. What Data Is Currently Collected

The repository and static site do not collect data unless a user manually
contacts the maintainer or edits files locally.

Current static beta page behavior:

- The beta access area has no input fields.
- It does not send content anywhere.
- It does not write to a backend.
- It does not create an email, mailing-list record, database row, account,
  analytics event, or payment record.
- The repository/site does not collect beta interest or support requests.

Current self-scan tool behavior:

- The `/site/tool/` prototype has browser-local input fields.
- The user chooses whether to save in the current browser or continue without
  saving.
- Local save uses the browser's `localStorage` under `hcct.selfScan.v1`.
- Answers are not submitted to a backend, email service, analytics provider, or
  maintainer.
- Markdown export is controlled by the user and happens in the browser.

Local document behavior:

- If a user downloads, copies, or edits Markdown files locally, those files are
  under that user's control.
- Completed workbook responses are not sent to the maintainer by the current
  repository/site.
- If a user manually emails, uploads, shares, or stores completed responses
  elsewhere, that sharing is outside the current static prototype.

## 4. What Data Should Not Be Collected Yet

Do not collect the following through beta forms, product-owner records, or
manual beta notes at this stage:

- Sensitive health details.
- Diagnostic information.
- IQ scores, giftedness proof, neurodivergence diagnosis, disability details,
  treatment details, burnout details, or occupational-health information.
- Full employment-conflict narratives.
- HR or personnel records.
- Performance, disciplinary, promotion, termination, or grievance details.
- Third-party personal data about managers, colleagues, employees, candidates,
  clients, or family members.
- Completed private self-scan responses.
- Completed employer scans from real organizations.
- Files copied from a workplace system.
- Anything not needed for beta fit, access, contact, or product feedback.

If a participant sends sensitive details anyway, do not copy them into product
notes. Reply with boundary language and ask for generalized product feedback
instead.

## 5. Future Beta Intake Data

Future beta intake should stay minimal and purpose-bound.

Invite-only private beta records are handled manually under
`docs/PRIVATE_BETA_RECORDS_SOP.md`. That SOP defines the direct contact route,
contact record, product-learning tracker, consent log, retention, deletion,
correction, and accidental-disclosure process. Do not use the static site for
intake.

Suggested minimal fields:

- Name.
- Email.
- Role path: adult, coach/advisor, manager, HR/people development, employer
  buyer, or responsible-use evaluator.
- Intended use category using non-sensitive choices.
- Optional country or timezone if needed for scheduling or logistics.
- Consent to be contacted about beta access and follow-up.
- Acknowledgement that the tool is non-diagnostic and not for employment,
  clinical, legal, occupational-health, selection, promotion, ranking, or
  performance decisions.
- Acknowledgement not to submit completed scans or sensitive personal, health,
  conflict, HR, or third-party information.

Purpose of collection:

- Decide whether the requested beta use fits the current product stage.
- Contact the person about beta access.
- Send appropriate draft materials manually.
- Request product feedback about clarity, usefulness, boundaries, packaging,
  and pricing.

Retention principle:

- Keep beta contact and feedback records only as long as needed for beta
  operations and product learning.
- Avoid storing sensitive case detail.
- Review and delete outdated beta records on a defined schedule.

Access principle:

- Limit beta records to the maintainer or explicitly involved collaborators.
- Do not share beta contact details, feedback notes, or identifiable stories
  with employers, clients, public pages, or third parties without explicit
  permission.

Deletion principle:

- Provide a route for beta participants to ask for their contact details or
  feedback notes to be deleted.
- Delete accidental sensitive disclosures from product notes where practical.
- Do not retain completed workbook responses unless a specific reviewed
  process exists.

Consent and disclosure principle:

- Explain the purpose before collecting data.
- Explain that the tool is a prototype and not a validated assessment.
- Explain what not to submit.
- Separate beta participation from quote/testimonial permission.
- Do not use participant quotes publicly without explicit permission and
  wording confirmation.

## 6. Employer Pilot Privacy Notes

Employer pilots require stricter privacy boundaries than individual beta use.

Employer pilot principles:

- The adult controls what private material is shared.
- Completed private workbook responses should not be stored in HR files.
- Use summaries and role-design actions where possible.
- Separate reflection from employment decisions.
- Do not collect or centralize private scans for manager review.
- Do not require diagnostic, health, giftedness, IQ, disability, treatment, or
  occupational-health disclosure.
- Do not use the tool to create employee profiles, scores, rankings, or
  capability records.

When documentation is needed, prefer:

- Agreed role-design experiment.
- Manager and adult actions.
- Review date.
- Review evidence.
- Stop conditions.
- Practical operational commitments.

Avoid documenting:

- Private workbook notes.
- Diagnostic or health details.
- Full conflict narratives.
- Personal interpretations about identity, ability, attitude, or mental health.
- Information about third parties.

## 7. Before Real Deployment

Before real deployment or live data collection, prepare:

- Final privacy policy.
- Terms and responsible-use page.
- Data flow map.
- Processor/vendor review if tools are added.
- Contact route.
- Retention and deletion process.
- Security review.
- Consent and disclosure wording for beta intake.
- Manual beta records SOP if private beta is still handled without a reviewed
  public intake route.
- Process for accidental sensitive disclosures.
- Process for quote/testimonial permission.
- Review of payment, email, analytics, hosting, form, and storage providers if
  any are added.

Do not add accounts, analytics, payment, email capture, backend APIs, database
storage, or employer workspaces before the privacy and responsible-use process
has been defined for that feature.

## 8. Privacy Checklist

### Before Beta Form Integration

- Define the minimum fields.
- Remove prompts that invite sensitive disclosure.
- Add consent and no-sensitive-content wording.
- Define storage location and access.
- Define retention and deletion handling.
- Define response handling for unsuitable use requests.
- Confirm no completed scans are requested.
- Confirm the beta disclosure and responsible-use guide are linked.

### Before Analytics

- Decide what product question analytics must answer.
- Avoid analytics on completed workbook content.
- Avoid collecting sensitive audience or case details.
- Use the minimum events needed.
- Add clear disclosure before public use.
- Review the provider and data flow before integration.

### Before Payments

- Define what product or service is being sold.
- Define license scope, refund/support boundaries, and delivery method.
- Review payment provider data flow.
- Keep payment records separate from workbook content.
- Make privacy, responsible-use, and terms materials visible before purchase.

### Before Employer Pilots

- Confirm voluntary participation.
- Confirm adult control over sharing.
- Confirm the employer will not store completed private scans in HR files.
- Confirm the pilot is not tied to performance, promotion, selection,
  discipline, firing, ranking, or support entitlement.
- Define what will be documented.
- Define who receives outputs.
- Define exit and escalation routes.

### Before Public Launch

- Replace this placeholder with reviewed public privacy materials.
- Publish responsible-use and terms materials.
- Confirm contact, retention, deletion, and support routes.
- Review all live vendors and data flows.
- Review website copy for non-diagnostic and non-selection boundaries.
- Confirm no claims imply validation, diagnosis, clinical usefulness, legal
  usefulness, or employment-decision support.
