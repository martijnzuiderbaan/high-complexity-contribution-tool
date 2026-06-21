---
title: Access and Accounts Plan
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-21
status: draft
type: access accounts and beta capture plan
language: nl-en
use: planning decision for v1 access model beta intake accounts and responsible data handling
---

# Access and Accounts Plan

This document decides whether the **High-Complexity Contribution Tool** /
**Instrument Complexiteit naar Bijdrage** needs user accounts, gated access, or
beta capture infrastructure for v1.

This is a planning document only. It does not implement authentication,
accounts, payments, database storage, backend APIs, email capture, analytics, or
deployment.

The product must remain a non-diagnostic role-design and conversation aid. It
must not become an IQ test, giftedness diagnosis, psychometric assessment,
hiring tool, selection tool, promotion tool, performance-review tool, burnout
diagnosis, occupational-health determination, disability determination,
support-entitlement tool, employee ranking system, or automated decision
system.

## 1. Executive Decision

Accounts are not needed for v1.

Accounts are also not needed for private beta. The current product is a
Markdown-first workbook and facilitation package, not a web application. The
riskiest data is not login data. The riskiest data is completed workbook
content, sensitive personal context, health-adjacent notes, workplace conflict
details, and employer-side misuse. An account system would increase
infrastructure and privacy burden before it solves the core beta questions.

A simple manual access model is better initially:

- Keep public orientation, boundaries, sample material, and static website
  content open.
- Use manual beta intake for qualified early users.
- Deliver beta materials manually by email, private link, or shared folder only
  after responsible-use and privacy/disclosure copy is accepted.
- Track only minimal operational records: who requested access, which audience
  path they represent, whether they accepted the beta conditions, what material
  was sent, and whether follow-up feedback was received.
- Do not collect completed scans, HR case details, health details, conflict
  details, or identifiable employee information through the product owner.

Recommendation: use a **public static site plus manual beta intake and manual
delivery** for the next version. Do not build accounts, gated portals,
subscriptions, analytics, database storage, or self-serve checkout until beta or
paid-pilot evidence creates a clear operational need.

## 2. Product Context

Current product shape:

- The repository is a workbook-first content package.
- The core workflow is private adult reflection, manager or employer
  role-context preparation, a facilitated or joint conversation, and one
  bounded 30-day experiment.
- The strongest current artifacts are the v1 workbook, interpretation guide,
  manager conversation guide, user guide, package index, PRD, audit, static
  website, and monetization plan.
- The intended output is a role-design hypothesis and experiment, not a score,
  diagnosis, prediction, or employment decision.

Current Markdown/static site structure:

- `README.md` gives the product overview, boundaries, roadmap, and package
  structure.
- `docs/` contains the audit, PRD, user guide, workbook, interpretation guide,
  manager guide, package index, monetization plan, open items, and this access
  plan.
- `site/` contains a dependency-free static landing page prototype.
- The beta access area in `site/index.html` has no input fields and explicitly
  stores, submits, emails, and sends nothing.
- There is no build step, backend, database, checkout, account portal, email
  provider, analytics provider, or deployment configuration.

Current buyer and user hypotheses:

- The strongest early paid buyer is likely a coach, HR partner, advisor,
  people-development professional, or facilitator who already recognizes the
  pattern and needs reusable, responsible materials.
- Adult end users may benefit from a workbook, but some will need privacy and
  disclosure guidance before sharing anything at work.
- Employer and team use is commercially attractive but higher risk. It should
  move through scoped, manually qualified pilots with responsible-use terms.
- The monetization plan favors a professional/facilitator pack and
  founder-led early use before broad self-serve sales.

Current beta stage:

- The product is not publicly launched.
- The package is still draft and evidence-seeking.
- Private beta should test clarity, safety, terminology, workflow,
  facilitation readiness, commercial packaging, and willingness to pay.
- Beta capture should qualify use cases and prevent misuse, not gather
  sensitive workbook content.

What should not be overbuilt yet:

- Account portals.
- Full SaaS onboarding.
- Databases for completed workbook responses.
- Payment subscriptions.
- License automation.
- Analytics dashboards.
- Employer workspaces.
- Automated interpretation or recommendation systems.
- Any system that makes the tool look like an assessment platform.

## 3. Access Models Considered

| Model | What it enables | Operational complexity | Privacy implications | Commercial fit | Risks | When to use it |
|---|---|---|---|---|---|---|
| Fully open static website and docs | Maximum transparency, easy review, no account friction, simple sharing | Very low | Lowest product-side data risk if no forms store data; users still need warnings not to publish completed scans | Good for trust, public education, previews, and open sample material | Hard to qualify misuse; no lead capture; paid packaging is unclear | Use for public overview, boundaries, FAQ, samples, and free starter material |
| Public landing page plus manual beta intake | Public trust layer plus controlled access to draft beta materials | Low | Collects minimal lead data; requires consent, retention, deletion, and no-sensitive-content rules | Best fit for current evidence stage and professional/facilitated beta | Manual workload; slower response; needs clear intake workflow | Use now for private beta and early professional interest |
| Paid downloadable pack without accounts | One-time purchase and file delivery without maintaining login infrastructure | Medium | Payment and billing data exist, but completed scans stay outside the product system | Good for individual workbook and professional pack once terms, privacy, refund, and delivery are ready | Link sharing, manual update handling, unclear license enforcement | Use after beta when blank templates and license terms are ready |
| Email-gated download | Captures leads before giving a free checklist, sample, or beta preview | Low to medium | Creates mailing-list or lead records; needs consent, unsubscribe, retention, and privacy notice | Useful for free starter artifact and beta interest | Can feel extractive; may collect more data than needed; can imply readiness | Use only after privacy/disclosure copy and storage process exist |
| Lightweight account portal | Users log in to download files, see updates, and manage basic entitlements | Medium to high | Adds identity records, session/security risk, support burden, and data-subject handling | Possible later for professional update access or recurring paid users | Premature SaaS signal; distracts from workbook validation; increases compliance work | Use only after enough paid users need update access or support history |
| Full SaaS account system | Web app onboarding, stored workspaces, subscriptions, usage tracking, support workflows | High | High privacy risk if users enter personal or employer data; requires mature security, terms, retention, and governance | Poor fit for v1; possible only after strong demand and responsible-use design | Turns product into a data system; may invite assessment, analytics, and employer misuse | Use only if workbook delivery is proven and there is a justified app workflow |
| Employer/team workspace | Organization-level access, team pilot materials, multi-user collaboration, admin views | High | Highest misuse risk; could become an employee record or assessment repository | Possible future enterprise product, not v1 | Selection, ranking, performance, HR file, and sensitive-data risks | Use only after employer pilots prove governance, facilitation, and privacy safeguards |

The best current model is the public landing page plus manual beta intake. It
keeps the product visible while keeping sensitive access decisions human and
bounded.

## 4. Recommended v1 Access Model

Recommended model: **public static orientation plus manual beta-gated material
delivery**.

Why it fits the evidence stage:

- The main unknowns are product clarity, safe use, facilitation readiness,
  audience fit, pricing, and misuse risk.
- These questions need qualified conversations and structured feedback, not an
  account system.
- Manual intake allows unsuitable requests to be declined or redirected before
  materials are sent.

Why it fits trust needs:

- The tool sits near sensitive personal and workplace material.
- Adults need control over disclosure.
- Employers need visible boundaries before any role-context use.
- A manual flow can require explicit acknowledgement that completed scans will
  not be collected by the product owner.

Why it fits the monetization plan:

- The monetization plan recommends founder-led early use, professional packs,
  workshops, and employer pilots before broad self-serve checkout.
- Manual delivery is consistent with invoice or bank-transfer pilots.
- A paid downloadable pack can be added later without accounts if the beta
  validates demand.

Why it fits implementation burden:

- It avoids building authentication, storage, subscriptions, permissions, and
  support tooling before the product shape is proven.
- It keeps the static site simple.
- It reduces maintenance and security obligations.

What should be public:

- Product one-liner and audience paths.
- Non-diagnostic and non-selection boundaries.
- "When not to use this tool" guidance.
- Workflow overview.
- Sample pages, free mini-canvas, or checklist when ready.
- Pricing hypotheses or public pricing only when clearly labeled.
- FAQ, privacy/disclosure overview, and responsible-use overview.
- Contact or beta request route once consent and storage handling are ready.

What should be beta-gated:

- Full draft v1 workbook bundle if it is still being tested.
- Professional/facilitator pack.
- Synthetic worked examples before public release.
- Manager or employer pilot materials.
- Any materials that could be misused without orientation.
- Any pricing or license terms that are still being tested.

What should stay internal:

- Beta feedback notes with identifiable respondents.
- Intake qualification decisions.
- Misuse/refusal examples.
- Pricing sensitivity notes.
- Product-roadmap hypotheses.
- Draft legal/privacy language before review.
- Any operational record that links a person or organization to a sensitive use
  context.

## 5. Beta Capture Plan

Beta capture should answer whether the right people want the tool and whether
they can use it responsibly. It should not become a sensitive-data collection
channel.

Information to collect:

- Name.
- Email.
- Role or audience path.
- Country or region only if needed for logistics, timezone, or later VAT
  planning.
- Organization type, optional and broad.
- Intended use category, using non-sensitive choices.
- Whether the person is seeking adult self-use, professional facilitation,
  manager/HR use, employer pilot, or review/evaluation.
- Whether they agree not to submit completed workbook responses or sensitive
  personal, health, conflict, HR, or identifiable employee information.
- Whether they consent to be contacted about beta access and follow-up.
- Whether they accept that the tool is non-diagnostic and not for employment,
  health, legal, occupational-health, selection, promotion, ranking, or
  performance decisions.

Information not to collect:

- Completed workbook responses.
- IQ, diagnosis, giftedness proof, neurodivergence diagnosis, health status,
  burnout status, disability status, accommodation details, legal facts, or
  occupational-health information.
- Identifiable employee, manager, colleague, client, or workplace-conflict
  details.
- HR case details, performance records, disciplinary details, or promotion
  decisions.
- Free-text narratives that invite sensitive disclosure.
- Employee lists or team rosters.
- Any files from a participant's workplace.

How to avoid sensitive personal data:

- Keep the form short.
- Use audience and use-case categories instead of open-ended case descriptions.
- Put "do not include sensitive information" directly next to any text field.
- Do not provide upload fields.
- Do not ask for completed scans.
- Use a manual follow-up email that repeats the same boundary before asking
  for feedback.
- If a respondent sends sensitive details anyway, do not copy them into product
  notes. Reply with boundary language and ask them to restate feedback in
  generalized terms.

Suggested form fields:

| Field | Type | Required | Notes |
|---|---|---:|---|
| Name | Short text | Yes | Personal name or professional contact name |
| Email | Email | Yes | Used for beta follow-up only unless separately consented |
| Role path | Select | Yes | Adult, coach/advisor, manager, HR/people development, employer buyer, other evaluator |
| Intended use category | Select | Yes | Private reflection, facilitated client/session, manager conversation, employer pilot, professional review, other non-sensitive category |
| Organization type | Select | No | Independent, small employer, larger employer, education, coaching practice, other |
| Country or timezone | Short text | No | Use only if needed for scheduling or later billing planning |
| What are you hoping to evaluate? | Short text | No | Prompt must say: no personal, health, HR, conflict, or employee details |
| Consent to beta contact | Checkbox | Yes | Must link to privacy/disclosure copy before real collection |
| Responsible-use acknowledgement | Checkbox | Yes | Non-diagnostic, non-selection, no completed scans, no sensitive data |

Manual handling workflow:

1. Review each request manually.
2. Reject or redirect requests seeking diagnosis, scoring, proof of giftedness,
   selection, promotion, performance, ranking, health, legal,
   occupational-health, disability, or support-entitlement use.
3. Approve only requests that fit adult preparation, professional facilitation,
   role/context conversation, or scoped responsible-use evaluation.
4. Send a beta orientation email with boundaries, material scope, feedback
   expectations, retention language, and a reminder not to send completed scans.
5. Record the minimal beta record: request date, audience path, approved or
   declined, material sent, consent accepted, follow-up due date, and feedback
   status.
6. Send materials manually by email attachment, private link, or controlled
   shared folder.
7. Follow up after use with a structured feedback form or interview that asks
   about clarity, safety, usefulness, confusion, missing guidance, willingness
   to pay, and whether a 30-day experiment was created.
8. Store feedback in generalized product-learning notes whenever possible.
9. Delete or redact sensitive details that arrive by mistake.

Consent and disclosure requirements before real beta capture:

- State who is collecting the beta request.
- State the purpose of collection.
- State what data is requested and what must not be submitted.
- State how long beta intake records will be kept.
- State who can access beta records.
- State how a participant can request deletion or correction.
- State that the tool is not diagnostic, legal, medical, occupational-health,
  HR decision, hiring, selection, promotion, performance, or ranking advice.
- State that completed scans should stay with the adult or facilitator unless a
  separate, context-specific agreement exists.
- State that employer-side use must remain role/context oriented.
- Avoid claiming full GDPR readiness unless reviewed. Use conservative,
  practical data-minimization language instead.

Follow-up workflow:

- Within 1-2 working days: acknowledge request and accept, reject, or ask for a
  non-sensitive clarification.
- Before sending materials: confirm responsible-use acknowledgement.
- After 1-2 weeks: ask whether the material was understandable and safe enough
  to use.
- After 30-45 days: ask whether a concrete experiment was created, paused,
  adjusted, or ruled out.
- For professional users: ask what scripts, examples, handouts, or guardrails
  were missing.
- For employer requests: ask whether role/context boundaries were accepted and
  whether any governance questions arose.

How to record beta feedback without creating privacy risk:

- Record learning themes instead of case stories.
- Use anonymous or coded respondent IDs.
- Separate contact records from product-learning notes.
- Avoid copying names of employers, employees, managers, teams, clients, or
  conflict parties.
- Record aggregate counts where possible, such as audience path, confusion
  topic, missing artifact, and willingness-to-pay signal.
- Store refusal reasons in generalized terms, such as "wanted hiring use" or
  "asked for diagnosis", not detailed personal stories.
- Do not store completed workbook content.

## 6. Account Decision Criteria

Accounts become justified only when they solve a proven operational problem
that manual access cannot handle responsibly.

Commercial triggers:

- There are enough paying professional users that update access, license
  periods, renewal reminders, and download history create material manual
  overhead.
- A recurring subscription is validated and users need self-service billing,
  cancellation, or renewal visibility.
- Paid users need access to versioned materials over time, and manual link
  delivery creates confusion or support load.

Privacy triggers:

- Users need a controlled way to access blank templates without emailing files
  repeatedly.
- Access logs are needed for contractual delivery, but the system can be kept
  separate from completed personal responses.
- A reviewed privacy, retention, access, deletion, and security model exists.

Delivery triggers:

- There are multiple product editions, update channels, or entitlement levels.
- Professional users need a stable library of materials and release notes.
- Support requests about lost links, versions, and license scope become common.

Employer/team triggers:

- Several paid pilots require controlled organization-level distribution of
  blank materials.
- Employer buyers accept responsible-use terms and no-HR-decision constraints.
- There is a reviewed governance model for organization access, participant
  privacy, and record separation.

Product analytics triggers:

- The product needs privacy-safe operational metrics such as download delivery,
  update access, or license activation.
- Any analytics plan explicitly excludes completed workbook content and
  individual employee comparison.
- Analytics questions cannot be answered through beta interviews, manual
  records, or aggregate sales/support data.

Anti-triggers where accounts would be premature:

- Wanting the product to look more like SaaS.
- Wanting to collect more data before knowing what decisions it supports.
- Trying to prevent file sharing before the paid offer is validated.
- Trying to run employer pilots without responsible-use governance.
- Wanting dashboards, completion tracking, or analytics on personal responses.
- Using accounts to store completed scans, case notes, or employee histories.
- Building subscription management before a subscription offer is validated.
- Adding login infrastructure before privacy, terms, support, and security
  responsibilities are clear.

## 7. Data Model, If Accounts Are Later Needed

This section is conceptual only. Do not implement it for v1.

The future data model should support access to blank materials and operational
records only. It should not store completed workbook responses.

### User

Minimal fields:

- `id`
- `name`
- `email`
- `role_path`
- `country_or_region`, optional
- `created_at`
- `last_access_at`
- `status`

Do not store:

- Diagnosis, IQ, giftedness proof, health status, disability status, burnout
  status, accommodation status, performance status, or legal status.
- Completed workbook answers.
- Sensitive workplace narratives.

### Organization

Minimal fields:

- `id`
- `name`
- `organization_type`
- `billing_contact_user_id`
- `country_or_region`
- `created_at`
- `status`

Do not store:

- Employee rosters unless a later, reviewed employer workspace truly requires
  them.
- Employee assessment results.
- HR case details or performance records.

### Purchase or Entitlement

Minimal fields:

- `id`
- `user_id` or `organization_id`
- `product`
- `edition`
- `license_scope`
- `start_date`
- `end_date`, if relevant
- `payment_reference`
- `status`

Do not store:

- Card details.
- Completed scans.
- Case-specific employer notes.

### Download or Access Record

Minimal fields:

- `id`
- `entitlement_id`
- `artifact_id`
- `version`
- `accessed_at`
- `delivery_method`

Do not store:

- How the user filled in the material.
- Personal interpretation results.
- Employee comparison or completion status.

### Beta Feedback Record

Minimal fields:

- `id`
- `respondent_code`
- `audience_path`
- `material_version`
- `feedback_date`
- `clarity_rating`, optional
- `safety_concern_category`, optional
- `missing_material_category`, optional
- `willingness_to_pay_signal`, optional
- `general_notes_redacted`
- `follow_up_status`

Do not store:

- Completed workbook content.
- Identifiable workplace stories.
- Names of employees, managers, clients, colleagues, teams, or conflict parties.
- Health, legal, HR, disciplinary, performance, disability, or accommodation
  facts.

### Consent or Disclosure Acceptance

Minimal fields:

- `id`
- `user_id`
- `document_version`
- `accepted_at`
- `acceptance_context`
- `status`

Do not store:

- Personal reasons for acceptance.
- Sensitive disclosure choices.
- Private workbook sections.

## 8. Authentication Options

| Option | Fit for this product | Pros | Cons | Privacy/security concerns | Implementation burden |
|---|---|---|---|---|---|
| No auth | Best fit for public pages, samples, README, and open docs | No login friction, no credential risk, simple static hosting | No access control, no entitlements, no download history | Lowest system-side risk if no forms collect data | Very low |
| Magic link | Possible later for professional download access | No password storage, user-friendly, good for occasional access | Requires email delivery, token handling, session management | Email account compromise can expose access; still creates identity records | Medium |
| Email plus password | Poor fit for early v1 | Familiar pattern, works without external identity providers | Password resets, storage, security hardening, support burden | Credential theft, password reuse, account takeover risk | Medium to high |
| OAuth | Weak fit unless users expect Google/Microsoft login | Reduces password handling, familiar to some users | Adds provider dependency and enterprise friction | External identity metadata; account linking issues | Medium to high |
| Third-party auth provider | Possible later if a portal is justified | Mature security features, hosted flows, admin tooling | Cost, vendor dependency, integration complexity | Must configure retention, logs, roles, and data processing carefully | Medium |
| Static password or private link for beta | Best lightweight beta option if materials are not public | Fast, simple, no account database, good for small cohorts | Easy to share, weak revocation, manual support | Link/password leakage; do not use for sensitive completed data | Low |

For v1, use no auth for public material and static private links or direct
manual delivery for beta material. Revisit magic-link or third-party auth only
after account decision triggers are met.

## 9. Payment and Access Relationship

How payment could work without accounts:

- Manual invoice or bank transfer for professional packs, workshops, and
  employer pilots.
- Send blank materials manually after payment and responsible-use acceptance.
- Use a private download link with an expiry date for individual or
  professional packs.
- Keep a simple internal record of purchase, material version, license scope,
  and delivery date.
- Handle updates by email during the beta or early v1 period.

How payment could work with accounts later:

- Payment creates an entitlement for a user or organization.
- The user logs in to download the latest blank materials.
- The portal shows license scope, version history, invoices, and update status.
- The portal still does not store completed workbook responses.

Manual invoice/payment option for pilots:

- Best for employer pilots, workshops, and custom professional use.
- Allows manual qualification before payment.
- Keeps unsuitable requests from converting automatically.
- Supports scoped statements of work and responsible-use acceptance.

Stripe Checkout without an account portal as an intermediate step:

- Use hosted checkout for one-time purchases when terms, privacy, refund,
  license, VAT, and delivery are ready.
- Redirect to a download page or send a private link after payment.
- Use Stripe for payment records, not as a workbook-response repository.
- Avoid building a custom backend until volume justifies it.

When subscription management becomes necessary:

- Professional users pay for annual update access.
- Renewal, cancellation, invoices, and access periods create material support
  workload.
- There are enough paying users that manual renewal handling becomes a risk.
- License tiers become complex enough to require self-service access.

Until then, accounts are not required for payment.

## 10. Privacy and Responsible-Use Implications

What must exist before collecting real beta data:

- Privacy/disclosure copy for beta intake.
- Consent language for contact and follow-up.
- Clear statement that no completed scans or sensitive case details should be
  submitted.
- Retention, access, deletion, and correction process for beta records.
- Manual process for redacting or deleting sensitive details received by
  mistake.
- Clear non-diagnostic and non-selection boundary language.

What must exist before employer use:

- Employer responsible-use guide.
- Explicit prohibition on hiring, selection, promotion, performance review,
  ranking, support entitlement, diagnosis, health, legal, disability, and
  occupational-health use.
- Agreement that adult private workbook content is not required and should not
  be pulled into HR records without clear purpose, consent, access, and
  retention handling.
- Facilitation or onboarding for sensitive use.
- Separate guidance on what may be documented after the conversation.

What must exist before paid use:

- Terms of use and license scope.
- Privacy notice covering website, purchase, delivery, support, feedback, and
  services.
- Refund and cancellation language.
- Payment, invoice, VAT, and support workflow.
- Responsible-use terms for professional and employer buyers.
- Download/delivery process for blank templates only.

How to avoid turning the tool into a sensitive-data repository:

- Keep completion local to the adult, facilitator, or organization using the
  material under their own appropriate process.
- Do not offer uploads.
- Do not store completed scans.
- Do not ask for personal case narratives in beta forms.
- Keep feedback about product usability, not about personal facts.
- Use generalized examples and synthetic cases.
- Keep employer purchase records separate from employee content.
- If a future portal exists, use it for blank materials and entitlements, not
  personal responses.

How to keep the tool non-diagnostic and non-selection-oriented:

- Keep no-scoring, no-diagnosis, no-HR-decision language visible at every access
  point.
- Refuse beta or paid requests that ask for proof, ranking, selection,
  performance, diagnosis, or support entitlement.
- Keep interpretation qualitative, contextual, and human-reviewed.
- Focus access gating on responsible use, not on person categorization.
- Avoid dashboards, comparison views, completion scores, and automatic
  recommendations.

This document does not claim legal, GDPR, tax, payment, or security compliance
is complete. It defines conservative product and data-minimization direction for
planning.

## 11. Implementation Roadmap

### Now

- Publish this access decision as a planning document.
- Keep the static site and docs open for orientation and review.
- Do not implement accounts, payments, backend storage, analytics, or email
  capture.
- Add unresolved access and beta handling decisions to `docs/OPEN_ITEMS.md`.
- Prepare privacy/disclosure copy before any real beta capture.
- Define the manual beta intake and feedback storage process before sending
  beta materials to real users.

### Private Beta

- Use a manual intake form or email route with minimal fields and explicit
  responsible-use acknowledgement.
- Review each request manually.
- Send materials manually to approved participants.
- Keep contact records separate from product-learning notes.
- Collect structured feedback about clarity, safety, usefulness, missing
  materials, confusion risk, and willingness to pay.
- Do not collect completed workbook responses.

### First Paid Pilots

- Use manual invoice or bank transfer for professional packs, workshops, and
  employer pilots.
- Require responsible-use acceptance before delivery.
- Use private links or direct email delivery for blank materials.
- Track purchase, license scope, version, and delivery date internally.
- Use scoped statements of work for employer pilots.

### Public Launch

- Add reviewed privacy, terms, license, refund, support, and responsible-use
  pages.
- Decide whether the first paid delivery path is manual download, invoice,
  hosted checkout, or a combination.
- Consider Stripe Checkout for one-time purchases if delivery and VAT handling
  are ready.
- Keep public sample material open.
- Keep employer/team access manually qualified.
- Do not introduce accounts unless account decision triggers have been met.

### Later SaaS Version, Only If Justified

- Consider accounts only after beta and paid-pilot evidence proves a recurring
  access, update, entitlement, support, or organization-delivery need.
- Keep any portal limited to blank materials, entitlements, release notes,
  support, and billing.
- Do not store completed scans unless a separate, reviewed, purpose-limited,
  security-reviewed product decision is made.
- Avoid employer dashboards, employee comparison, scoring, ranking, automated
  interpretation, and HR decision workflows.

## 12. Recommendation Summary

Decision:

- No accounts for v1.
- No accounts for private beta.
- Use public static orientation plus manual beta intake and manual delivery.
- Keep sensitive workbook completion outside the product system.

Rationale:

- The current product is a Markdown/static-site workbook package, not an app.
- The evidence stage needs qualified beta learning, not login infrastructure.
- Trust is better served by minimizing stored data and manually screening
  access.
- The monetization plan favors professional packs, founder-led use, workshops,
  and pilots before self-serve SaaS.
- Accounts would add privacy, support, security, and compliance burden before
  they solve a proven problem.

Next implementation step:

- Create the manual beta intake workflow and privacy/disclosure copy before
  collecting real beta data or sending materials to real users.

Items to add to `docs/OPEN_ITEMS.md`:

- Decide manual beta intake workflow.
- Create consent/disclosure copy before collecting beta data.
- Decide whether first paid delivery is manual download, invoice, or hosted
  checkout.
- Define minimal beta feedback storage process.
- Revisit accounts only after a beta or paid-pilot trigger is met.
