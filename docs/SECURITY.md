---
title: Security
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-21
status: draft
type: security posture
language: nl-en
use: security posture and pre-launch checklist for the static prototype
---

# Security

This document describes the current security posture for the
**High-Complexity Contribution Tool** / **Instrument Complexiteit naar
Bijdrage**.

It is a practical security placeholder for the current Markdown/static-site
prototype. It is not a formal security assessment, production hardening report,
incident-response plan, privacy policy, or legal document.

## 1. Purpose

The purpose of this document is to make the current security posture explicit
before beta form integration, analytics, payments, accounts, employer pilots,
or public deployment are added.

Current scope:

- Markdown documents.
- A dependency-free static site in `site/`.
- Local prototype behavior only.
- No hosted service or production system in this repository.

Security work at this stage is mostly about preventing accidental data
collection, avoiding overclaiming, preserving responsible-use boundaries, and
keeping future integrations reviewable.

## 2. Current Security Posture

The current prototype is intentionally low-infrastructure.

Current state:

- Static site.
- Markdown documents.
- No backend.
- No accounts.
- No payments.
- No database.
- No external analytics provider.
- No submitted beta form.
- No file upload.
- No email capture provider.
- No third-party scripts or services in the site.
- Local-only/no-op instrumentation where analytics event names are present.

The beta interest form in `site/index.html` can be typed into, but the
JavaScript prevents submission and does not send field values anywhere. The
current analytics helper in `site/script.js` exposes local no-op/debug events
only. It does not call `fetch`, `XMLHttpRequest`, `sendBeacon`, cookies, or an
external provider.

## 3. Supported Responsible Security Practices

Use these practices while the project remains a static prototype:

- Do not commit secrets, tokens, credentials, private URLs, private keys, or
  production configuration.
- Do not collect sensitive data until a real process exists for purpose,
  consent, access, retention, deletion, and incident handling.
- Do not store workbook contents in the repository or static site.
- Do not request completed scans, HR case details, health details, conflict
  narratives, or identifiable employee information through the static form.
- Review any future third-party service before use, including hosting, forms,
  analytics, email, payment, file delivery, support, and CRM tools.
- Keep beta intake manual and minimal until privacy/legal text and operational
  handling are ready.
- Keep completed workbook material under the adult's, facilitator's, or
  responsible organization's own appropriate process, not in this product
  repository.
- Keep employer-side records focused on role-design actions, review evidence,
  and stop conditions, not private personal interpretation.

## 4. Data Handling Assumptions

What the current repository/site handles:

- Blank Markdown artifacts and planning documents.
- Static landing-page HTML, CSS, and JavaScript.
- Local browser interaction with a no-submit prototype form.
- Optional local analytics debug logging if a user explicitly enables it.

What the current repository/site does not handle:

- Submitted beta requests.
- Stored form contents.
- User accounts or sessions.
- Payment, invoice, or customer records.
- Analytics provider records.
- Completed workbook responses.
- Employer pilot records.
- HR, health, legal, or occupational-health records.

Future beta processes must handle the following carefully:

- Minimal contact details for beta follow-up.
- Responsible-use acknowledgement.
- Consent or notice wording for contact and feedback.
- Retention and deletion requests.
- Accidental sensitive disclosures.
- Separation between contact records and product-learning notes.
- Employer-pilot governance if organizations are involved.

The static form should never collect:

- Completed scans or workbook responses.
- Health, diagnosis, disability, burnout, treatment, or occupational-health
  information.
- IQ scores, giftedness proof, or neurodivergence diagnosis.
- HR case details, personnel records, performance records, disciplinary
  details, grievance details, promotion decisions, or firing decisions.
- Full conflict narratives.
- Identifiable information about employees, managers, colleagues, clients,
  candidates, or other third parties.
- Files, screenshots, exports, or records from workplace systems.

## 5. Known Limitations

Known limitations:

- Not production hardened.
- No formal security testing has been performed.
- No formal legal, privacy, data-protection, tax, or employment-law review has
  been performed.
- No incident response process exists yet.
- No access-control model exists because there is no account system.
- No vulnerability disclosure process exists beyond the placeholder contact
  route below.
- No automated dependency scanning exists because there is no dependency
  manifest.
- No automated link, accessibility, or content-boundary checks exist yet.

These limitations are acceptable for local/private review of a static
prototype. They are blockers for public data collection, payments, employer
pilots, or production-like deployment.

## 6. Reporting Issues

Placeholder contact route:

> Contact route coming later. Until then, report issues directly to the
> maintainer through the private channel already used for this project.

Include:

- A short description of the issue.
- The affected file or site section.
- Steps to reproduce if it is a site behavior issue.
- Browser and operating system if relevant.
- Whether the issue could expose data, invite misuse, or create misleading
  claims.

Do not include:

- Secrets, passwords, tokens, or private keys.
- Completed workbook responses.
- Health, HR, legal, conflict, or occupational-health details.
- Identifiable employee, manager, colleague, client, or third-party data.
- Exploit code against a live system unless a reviewed reporting process exists.

## 7. Pre-Launch Security Checklist

### Before Beta Form Integration

- Define the exact minimum fields.
- Remove prompts that invite sensitive disclosure.
- Add consent, no-sensitive-content, retention, deletion, and contact wording.
- Decide where beta records are stored and who can access them.
- Define a response for unsuitable use requests.
- Define a process for accidental sensitive disclosures.
- Confirm completed scans are not requested.
- Confirm beta disclosure, privacy, responsible-use, terms, and security pages
  are linked.

### Before Analytics

- Confirm the product questions analytics must answer.
- Use aggregate, privacy-minimal events only.
- Do not track completed workbook content, keystrokes, session replay, heatmaps,
  fingerprinting, employee identities, or employer employee lists.
- Review provider terms, hosting region, retention, opt-out, and data export.
- Publish notice language before public tracking.
- Keep analytics separate from employment decisions and employer reporting.

### Before Payments

- Define what is being sold and what is not being promised.
- Publish terms, license scope, refund/support boundaries, and responsible-use
  limits.
- Review payment provider data flow and tax/VAT implications.
- Use hosted checkout rather than storing card data directly.
- Keep payment records separate from workbook content.
- Confirm download delivery sends blank materials only.

### Before Employer Pilots

- Require voluntary participation.
- Confirm adult control over what is shared.
- Prohibit hiring, selection, promotion, performance, discipline, ranking,
  diagnosis, support entitlement, health, legal, disability, and
  occupational-health use.
- Confirm completed private scans are not stored in HR files.
- Define what will be documented and who receives it.
- Define stop, exit, escalation, and facilitation routes.
- Use written pilot scope before any commercial employer use.

### Before Public Deployment

- Replace placeholders with reviewed public-facing privacy, terms, contact,
  reporting, and support materials.
- Run link, accessibility, content-boundary, and static-hosting checks.
- Review all external services and data flows.
- Confirm no live beta submission, payment, analytics, or account flow is
  implied unless it actually exists and has been reviewed.
- Confirm copy does not imply diagnosis, validation, hiring suitability,
  promotion suitability, performance rating, mental-health assessment, GDPR/legal
  compliance, stored analytics, or live payment.
