---
title: Analytics and Measurement Plan
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-21
status: draft
type: analytics and beta measurement plan
language: nl-en
use: privacy-first beta learning plan and future analytics taxonomy
---

# Analytics and Measurement Plan

This plan defines how to learn from private beta use of the **High-Complexity
Contribution Tool** / **Instrument Complexiteit naar Bijdrage** without turning
the product into surveillance, employee evaluation, or a sensitive-data system.

It is a product-learning plan only. It does not add an analytics provider,
cookies, tracking scripts, backend APIs, accounts, payments, databases, or
stored beta submissions.

## 1. Purpose

The purpose of measurement is to learn whether the current workbook-first
package is clear, useful, safe enough to use, commercially credible, and still
bounded as a non-diagnostic role-design tool.

Measurement should support beta decisions such as:

- Which audience path has the strongest pull: adult, coach/facilitator,
  manager/HR, employer pilot, workshop, or professional pack.
- Whether users understand the problem framing without needing diagnostic or
  identity-heavy language.
- Whether the workbook, manager guide, responsible-use materials, and privacy
  boundaries help people reach a useful next step.
- Whether a real use can produce one bounded 30-day role-design experiment or
  a responsible decision to pause, narrow, or refer elsewhere.
- Whether pricing and packaging hypotheses are credible enough to test manually.

Measurement must not be used to evaluate individual employees, monitor adult
behavior, compare people, infer giftedness, assess performance, or report usage
back to employers.

## 2. Measurement Principles

- Privacy first: measure the smallest useful signal and prefer manual,
  aggregate learning over automated tracking.
- No sensitive personal data: do not collect health, diagnosis, IQ, disability,
  burnout, legal, HR, disciplinary, performance, accommodation, conflict, or
  third-party personal details.
- Minimum necessary data: collect only what is needed for beta access, product
  learning, responsible-use screening, or commercial validation.
- Aggregate learning over individual tracking: summarize patterns across users
  instead of building individual histories.
- Adult agency: the adult controls what private workbook material stays private
  and what may be shared in a work conversation.
- Responsible employer use: employer-side measurement must focus on
  role/context conditions, not judging or ranking the adult.
- No hidden analytics: if real analytics are ever added, disclose what is
  measured, why, where it goes, how long it is kept, and how to opt out.
- No performance-management use: never use analytics to rate employees,
  determine support, justify employment decisions, or monitor completion.
- No workbook-content analytics: do not collect completed scans, free-text
  workbook answers, personal examples, or manager notes as analytics events.
- Human review stays central: metrics can guide product decisions, but cannot
  certify safety, fit, validation, diagnosis, or employment outcomes.

## 3. Current Prototype State

Current state:

- Static website.
- Front-end-only beta form.
- No backend.
- No accounts.
- No analytics provider.
- No payments.
- No stored beta submissions.
- No cookies.
- No external tracking scripts.
- No database.
- No file upload.
- No automated scoring, ranking, interpretation, recommendation, or employee
  decision workflow.

The current beta form can be typed into, but it does not submit, store, email,
or persist anything. Any real beta interest must be handled manually until a
privacy-reviewed intake process exists.

## 4. Core Questions to Answer in Beta

The beta should answer product and market questions before infrastructure is
built.

- Do adults recognize the problem framing around role fit, complexity,
  learning, autonomy, quality, sparring, translation, energy, and boundaries?
- Does the workbook produce useful reflection without pushing adults to
  overshare or identify too heavily with a label?
- Does the manager conversation guide make the conversation safer, more
  practical, and less likely to become diagnosis, blame, or performance review?
- Can coaches, HR partners, or facilitators use the materials without direct
  author explanation?
- Which use case has strongest pull: individual self-use, coach/facilitator
  use, employer pilot, professional pack, or workshop?
- What language converts without feeling diagnostic, elitist, identity-heavy,
  medical, or HR-coded?
- What pricing path feels credible: individual workbook, professional pack,
  workshop, employer pilot, or manual service layer?
- What evidence or trust gap blocks use: safety, privacy, proof, examples,
  facilitation, terms, pricing, export quality, or missing artifacts?
- Do beta users understand what the tool is not for?
- Does use lead to one bounded 30-day experiment, a useful conversation, or a
  responsible decision to pause or refer elsewhere?

## 5. Metrics Framework

These metrics are learning categories, not automated dashboards. Manual beta
measurement is enough for the current stage.

| Metric | Definition | Why it matters | How to measure manually now | How to measure later if tooling is added | What not to measure |
|---|---|---|---|---|---|
| Awareness metric | Number and source pattern of qualified people who recognize the problem and ask to learn more. | Shows whether the framing attracts the right people before paid infrastructure is built. | Keep a weekly count of qualified conversations, inbound messages, beta requests, and stated audience paths. | Aggregate landing page views, source category, audience path clicks, and beta CTA clicks with no personal identifiers. | Do not track individual browsing histories, employee identities, employer employee lists, or sensitive use contexts. |
| Activation metric | User reaches a concrete next step: opens the tool pack, requests beta access, or can name the artifact they would use first. | Shows whether interest converts into practical engagement. | Ask beta leads which artifact they opened or would use first; record only category-level answers. | Track aggregate safe events such as tool pack link clicked, workbook opened/downloaded, or beta form attempted. | Do not track field contents, completed scan sections, time spent on personal prompts, or individual employee completion. |
| Completion metric | User completes enough of the relevant artifact to produce a shareable summary, manager preparation, session plan, or reviewable experiment. | Shows whether materials are usable beyond curiosity. | Ask for self-report or facilitator report: completed enough, got stuck, paused, or not used. | Use voluntary feedback forms with category answers; avoid storing workbook content. | Do not collect completed workbooks, private notes, raw examples, or HR case narratives. |
| Conversation-use metric | A real or realistic adult-manager, coach-client, HR, or facilitated conversation is run using the materials. | The product value depends on safer conversations, not just downloads. | Count reported conversations by audience path and facilitation type; summarize barriers. | Track optional feedback_received events and aggregate session-type categories only. | Do not monitor employees, record conversations, or send employer reports about individual participation. |
| Role-design experiment metric | Conversation ends in one bounded 30-day experiment or a responsible decision to pause, narrow, escalate, or stop. | This is the core workflow outcome. | Ask whether the output was experiment, pause/escalate, unclear, or no output; capture redacted reason categories. | Add optional post-use feedback categories for experiment_created, paused, adjusted, or stopped. | Do not judge performance, productivity, health, capability, giftedness, or employee value. |
| Beta feedback metric | Structured feedback is received on clarity, usefulness, safety, missing artifacts, wording, and trust gaps. | Improves the product without collecting sensitive personal content. | Use interviews or a spreadsheet with coded themes and anonymized notes. | Use privacy-reviewed feedback forms with category fields and redacted free text. | Do not request personal stories, completed scans, employee names, diagnosis, conflict details, or sensitive quotes. |
| Commercial intent metric | A user expresses credible willingness to pay, asks for pricing, requests a professional pack, or discusses a paid pilot. | Validates packaging before payments are built. | Record audience path, offer of interest, price reaction category, and next step. | Track pricing section views, paid_interest_expressed, and employer_pilot_interest_expressed as aggregate events. | Do not treat employer interest as validation of employee assessment use; do not record sensitive budget politics or named employees. |
| Safety/quality metric | Misuse risks, confusion, privacy concerns, unsafe use cases, or over-interpretation patterns are identified. | The product can only scale if misuse is visible and mitigated. | Log generalized categories such as wanted diagnosis, wanted hiring use, privacy concern, too abstract, too sensitive, unclear boundary. | Add optional safety_concern_category in feedback forms after privacy review. | Do not store detailed conflict facts, health status, HR history, or identifiable misuse stories. |
| Responsible-use metric | Users understand and accept the non-diagnostic, non-selection, no-performance-management boundaries before use. | Protects adults and keeps employer use role/context oriented. | Record whether beta orientation was accepted and whether any boundary concerns appeared. | Track disclosure/responsible-use page views and responsible-use acknowledgements if a reviewed intake process exists. | Do not turn acknowledgements into employee compliance records or proof that an employer may use the tool for HR decisions. |

## 6. Event Taxonomy for Later Implementation

The current site may include local no-op instrumentation for safe UI events.
No event is sent anywhere. A real provider must not be connected until the
privacy, consent, retention, opt-out, and property review requirements in this
document are satisfied.

Allowed properties should stay generic. Disallowed properties must never be
included in event payloads.

| Event name | Trigger | Purpose | Allowed properties | Disallowed properties | Privacy notes | Implementation status |
|---|---|---|---|---|---|---|
| `landing_page_view` | Static landing page loads. | Understand whether public orientation is being reached. | Page category, language, coarse source category if later available. | IP enrichment, user ID, employer name, employee ID, session replay, fingerprint. | Aggregate only; no cookies or hidden tracking. | Local no-op/debug only. |
| `primary_cta_clicked` | Primary CTA such as beta access is clicked. | See whether the main offer is understandable. | CTA label, destination category. | Name, email, role text, intended-use text, personal context. | Click only; no form values. | Local no-op/debug only. |
| `secondary_cta_clicked` | Secondary CTA such as tool-pack navigation is clicked. | Compare beta interest with education/tool-pack interest. | CTA label, destination category. | Personal identifiers or completed workbook data. | Aggregate navigation signal only. | Local no-op/debug only. |
| `tool_pack_link_clicked` | Link to workbook, guide, package index, README, audit, or PRD is clicked. | Learn which artifacts draw interest. | Artifact label, artifact type. | User identity, file contents, completed templates. | Artifact interest only; not completion. | Local no-op/debug only. |
| `beta_form_started` | User focuses or starts the beta form. | Later proxy for form intent if needed. | Form name, audience path category only if selected and consented later. | Field values, keystrokes, text contents, email address, name. | Avoid for now because focus tracking can feel invasive. | Planned only; not implemented. |
| `beta_form_attempted` | Placeholder beta form is submitted. | Understand beta request intent once a real process exists. | Form name, submit action category. | Name, email, role value, intended-use text, hidden metadata. | Current form still sends nothing. | Local no-op/debug only. |
| `beta_disclosure_viewed` | Beta disclosure link is clicked. | See whether users review beta boundaries. | Document label. | Reader identity, consent status, personal context. | Viewing is not consent. | Local no-op/debug only. |
| `privacy_placeholder_viewed` | Privacy placeholder link is clicked. | See whether users seek data-handling information. | Document label. | Name, email, employer, employee details. | Viewing is not a privacy-policy acceptance. | Local no-op/debug only. |
| `responsible_use_viewed` | Responsible-use guide link is clicked. | See whether users review safe-use boundaries. | Document label. | Employee identity, manager identity, case details. | Viewing does not authorize employer use. | Local no-op/debug only. |
| `sample_flow_viewed` | Static sample-flow section enters view. | Learn whether people reach the example workflow. | Section label. | Scroll depth tied to a user profile, heatmaps, session replay. | Aggregate section view only if later disclosed. | Local no-op/debug only. |
| `pricing_section_viewed` | Pricing hypothesis section enters view. | Learn whether visitors reach commercial framing. | Section label. | Individual price sensitivity, employer budget detail. | Pricing is hypothesis, not a live offer. | Local no-op/debug only. |
| `beta_email_sent_manually` | Maintainer sends beta materials by email or private link. | Track manual delivery and follow-up. | Respondent code, audience path, material version, sent date. | Completed scans, personal narratives, HR records, health data. | Internal manual record only. | Manual spreadsheet only. |
| `workbook_downloaded_or_opened` | User opens or downloads blank workbook material. | Understand activation into the core artifact. | Artifact version, audience path if voluntarily known. | Completed workbook content, answers, time on personal sections. | Blank-material access only. | Planned/manual only. |
| `feedback_received` | Beta feedback is received. | Track product-learning volume and themes. | Respondent code, audience path, feedback category, redacted theme. | Identifiable stories, names, diagnoses, conflict facts, completed responses. | Separate contact records from learning notes. | Manual spreadsheet only. |
| `paid_interest_expressed` | User asks about paid workbook, professional pack, workshop, or service. | Validate commercial route. | Offer category, price reaction category, audience path. | Personal financial detail, employer politics, named employees. | Interest is not product validation. | Manual spreadsheet only. |
| `employer_pilot_interest_expressed` | Employer or HR buyer asks about a pilot. | Validate responsible employer demand. | Organization type, pilot category, boundary accepted yes/no. | Employee lists, employee identities, HR case facts, performance issues. | Manually screen for misuse before any pilot. | Manual spreadsheet only. |

## 7. Manual Beta Measurement Workflow

Until a reviewed intake process exists, beta leads should be tracked manually
and minimally.

How to track beta leads without a backend:

1. Receive interest through direct contact or a manually reviewed route.
2. Repeat the beta disclosure and no-sensitive-content boundary before asking
   any follow-up question.
3. Assign a simple respondent code such as `BETA-001`.
4. Keep contact records separate from product-learning notes.
5. Record only the minimum data needed to follow up and learn from the beta.
6. Do not copy completed workbook content into product notes.
7. Delete or redact accidental sensitive disclosures where practical.

Suggested lightweight spreadsheet columns:

| Column | Purpose |
|---|---|
| Respondent code | Pseudonymous beta reference. |
| Date received | Operational follow-up. |
| Audience path | Adult, coach/facilitator, manager/HR, employer pilot, workshop, other evaluator. |
| Source category | Direct outreach, referral, LinkedIn, workshop, existing network, other broad category. |
| Intended use category | Private reflection, facilitated session, manager conversation, professional review, employer pilot, workshop. |
| Responsible-use fit | Fit, needs clarification, decline, refer elsewhere. |
| Boundary concern category | Diagnosis request, HR decision use, privacy concern, unsafe context, unclear. |
| Material version sent | Version of blank materials shared, if any. |
| Beta disclosure accepted | Yes, no, not yet, not applicable. |
| Follow-up due | Date only. |
| Feedback received | Yes, no, partial. |
| Clarity signal | Clear, partly clear, confusing, not reviewed. |
| Safety signal | Safe enough, needs facilitation, too sensitive, unsafe use. |
| Usefulness signal | Useful, partly useful, not useful, not used. |
| Experiment outcome | Experiment created, pause/escalate, no experiment, unknown. |
| Commercial signal | Individual interest, professional pack, workshop, employer pilot, no paid interest, unknown. |
| Redacted learning notes | Product feedback only, no personal case detail. |

What not to record:

- Completed workbook responses.
- Personal or health details.
- IQ scores, diagnosis, giftedness proof, disability, burnout, treatment, or
  occupational-health information.
- HR case, performance, disciplinary, promotion, termination, grievance, legal,
  or accommodation details.
- Names of employees, managers, colleagues, clients, teams, or conflict parties.
- Employer employee lists or participant rosters.
- Personal stories copied verbatim unless explicit quote permission exists and
  the quote has been reviewed.

How to anonymize notes:

- Use respondent codes in learning notes.
- Replace organization names with broad categories such as independent coach,
  small employer, HR partner, or manager.
- Convert stories into product-learning themes such as "needs clearer
  disclosure boundary" or "manager guide too long."
- Store refusal reasons as categories, not narratives.
- Separate commercial follow-up records from workbook-content discussion.

How to separate workbook content from product feedback:

- Ask about whether prompts were clear, useful, too sensitive, missing, or hard
  to use.
- Do not ask users to send completed scans.
- If users want to discuss a specific situation, ask them to generalize it and
  remove names, health facts, HR facts, and conflict detail.
- For facilitated use, ask what the facilitator needed from the material, not
  what the adult wrote privately.

How to summarize feedback weekly:

- Count beta requests by audience path.
- Count accepted, declined, and needs-clarification requests.
- Summarize the top clarity issues.
- Summarize the top safety or misuse risks.
- Count reported conversations and 30-day experiment outcomes.
- Summarize missing artifacts.
- Summarize pricing or paid-interest signals.
- Decide what copy, artifact, or boundary change should be tested next.

## 8. Beta Interview Guide

Use interviews to learn about clarity, usefulness, trust, safety, commercial
willingness, missing artifacts, and language friction. Do not ask for completed
workbook answers or sensitive workplace facts.

### Adult Users

- What made the tool feel relevant or irrelevant to your work situation?
- Which wording helped you recognize the problem without feeling labeled?
- Which wording felt too diagnostic, identity-heavy, elitist, medical, or risky
  to share at work?
- Did the workbook help you choose what stays private and what could be shared?
- Which prompt produced useful reflection?
- Which prompt felt too personal, unclear, or unsafe?
- Could you draft one practical role-design request?
- Could you define a bounded 30-day experiment?
- What would make you use this alone, with a coach, with HR, or not at all?
- What would make the individual workbook worth paying for?

### Coaches and Facilitators

- Could you run a session from the current materials without author support?
- Which artifacts would you use first with a client?
- Which prompts protect privacy and agency well?
- Where would a client likely over-disclose or over-interpret?
- What session script, handout, worked example, or checklist is missing?
- How would you explain the tool without making assessment claims?
- What would make a professional pack worth paying for?
- What license or update access would you expect?
- What misuse or liability concern would block your use?
- What feedback should the beta collect from facilitators after each use?

### Managers, HR, and Employers

- Does the manager guide help you focus on role/context conditions rather than
  judging the adult?
- Which role levers are easiest to act on?
- Which language would be safe enough for an employer setting?
- Which language sounds too much like diagnosis, special status, performance,
  or HR decision support?
- What would you need before using this with an employee voluntarily?
- What should never be stored in HR records?
- Would a facilitated session be required in your context?
- What governance or privacy question would block an employer pilot?
- What would make a pilot credible without turning it into assessment?
- What outcome after 30 days would justify continuing?

### Paid-Pilot Prospects

- Which offer fits the problem: individual workbook, professional pack,
  workshop, facilitated session, or employer pilot?
- What would need to be included for the price to feel credible?
- What evidence would you need before paying?
- What terms, privacy language, or responsible-use commitments would you need
  before proceeding?
- Which claims would you distrust?
- What would make you decline even if the tool seems useful?
- Would you accept a manual pilot with no accounts, no dashboard, and no
  employee analytics?
- What support or facilitation level would you expect?
- What would count as a useful paid-pilot outcome?
- What would make the product feel too early?

## 9. Success Criteria

Use these criteria to decide what to do next. They are beta decision rules, not
validation claims.

Continue current direction when:

- Qualified beta users recognize the problem framing.
- Users understand that the tool is non-diagnostic and not for HR decisions.
- Adults report clearer disclosure boundaries.
- Coaches or facilitators can use the package with limited author explanation.
- At least some uses produce a bounded 30-day experiment or responsible pause.
- Misuse risks can be handled through copy, guides, screening, or facilitation.

Narrow audience when:

- One audience path produces useful feedback and safe use while others create
  confusion or misuse risk.
- Professionals show stronger pull than self-guided adults or employers.
- Employer interest exists but needs heavier facilitation than the current pack
  can support.

Change positioning when:

- The current language attracts diagnosis, IQ, proof, ranking, or performance
  expectations.
- "Gifted" or "hoogbegaafd" framing blocks trust or feels too identity-heavy.
- Users respond better to role fit, complexity, learning, autonomy, quality,
  sparring, translation, energy, and sustainable contribution.

Add facilitation when:

- Adults find the workbook useful but too sensitive to use alone.
- Managers need help staying out of performance or person-judgment framing.
- Coach, HR, or employer users ask for scripts, agendas, examples, or boundary
  interventions.
- Sensitive conversations need a neutral process owner.

Build download/payment flow when:

- A clear paid offer has repeated credible demand.
- Blank materials are stable enough to distribute.
- Terms, privacy, refund, license scope, delivery, and support workflow are
  ready.
- Payment can stay separate from completed workbook content.

Build accounts later when:

- Paid users need update access, license management, download history, support
  visibility, or organization delivery.
- Manual delivery creates real operational risk.
- A reviewed privacy, security, retention, deletion, and access model exists.
- The portal can be limited to blank materials, entitlements, and support.

Delay employer sales when:

- Employer prospects want selection, performance, support entitlement,
  high-potential, ranking, or assessment use.
- Adults may feel pressured to disclose private material.
- Privacy, responsible-use, governance, facilitation, or terms are not ready.
- The conversation is adversarial, disciplinary, legal, health, or formal HR
  territory.

Stop or redesign part of the tool when:

- A section repeatedly pushes users toward diagnosis, proof, scoring, or
  employee judgment.
- Users cannot turn prompts into concrete work examples.
- The workflow rarely produces a bounded experiment or responsible pause.
- The material increases over-disclosure, blame, or unsafe employer use.
- A metric is easy to collect but does not support a responsible product
  decision.

## 10. Analytics Implementation Roadmap

### Now: No Provider, Optional Local Console/No-Op Instrumentation Only

- Keep the site static.
- Do not add external analytics providers.
- Do not add cookies.
- Do not add tracking scripts.
- Do not send data anywhere.
- Optional JavaScript instrumentation may define event names centrally and log
  to the browser console only when explicitly enabled locally, for example with
  `?analyticsDebug=1` or
  `localStorage.setItem("hcctAnalyticsDebug", "1")`.
- Do not log form field values.
- Use the measurement plan as the source of truth for future event names.

### Private Beta: Manual Measurement

- Use manual intake and direct follow-up.
- Track beta leads in a lightweight spreadsheet.
- Keep contact records separate from product-learning notes.
- Do not collect completed workbook responses.
- Summarize feedback weekly.

### First Paid Pilots: Lightweight Manual CRM/Spreadsheet

- Track prospects, responsible-use fit, material version, delivery, feedback,
  and commercial next steps manually.
- Keep employer pilot records separate from adult private workbook material.
- Record refusal or misuse reasons as generalized categories.
- Do not build accounts, dashboards, or automated analytics unless a proven
  operational need appears.

### Public Launch: Privacy-Conscious Analytics Provider Only After Policy Is Ready

- Choose a provider only after privacy policy, notice, retention, opt-out, data
  processing, event properties, and no-sensitive-content rules are reviewed.
- Prefer no-cookie, aggregate analytics if analytics are still needed.
- Disclose the provider and measurement purpose.
- Keep event properties generic.
- Do not enable session replay, heatmaps, fingerprinting, ad pixels, or
  cross-site tracking for this product.

### Later SaaS Version: Account/Product Analytics Only If Justified

- Use account/product analytics only if the product becomes a justified portal
  for blank materials, entitlements, updates, support, or organization delivery.
- Keep completed workbook content out of analytics.
- Do not provide employer dashboards about individual employees.
- Do not compare adults, score completion, infer traits, or recommend HR
  decisions.

## 11. Privacy and Consent Requirements Before Real Analytics

Before connecting any real analytics or intake tooling, prepare and review:

- Privacy policy covering website, beta intake, feedback, purchases, services,
  analytics, retention, access, deletion, and processor use.
- Clear consent or notice wording that explains what is measured and why.
- Provider review, including data location, retention, subprocessors, security,
  opt-out support, and whether cookies or fingerprinting are used.
- Cookie or no-cookie decision, with preference for no-cookie aggregate
  analytics if analytics are necessary.
- Data retention period for event data and manual beta records.
- Opt-out path or no-tracking path.
- Event property review to ensure no personal, sensitive, workbook, HR, or
  employee data is included.
- Data flow map for website, form, email, spreadsheet, payment, support, and
  analytics tools.
- Process for accidental sensitive disclosures.
- Explicit rule that no sensitive workbook content is collected as analytics.
- Employer-facing statement that analytics are not for employee monitoring,
  performance management, or reporting.

## 12. Measurement Anti-Patterns

Avoid these patterns even if tooling makes them easy:

- Tracking individual employees for employer reporting.
- Capturing workbook content, free-text answers, private examples, or manager
  notes.
- Treating completion as success without checking outcome quality, safety, and
  role-design usefulness.
- Optimizing for conversion before trust.
- Using analytics to justify validation, efficacy, ROI, retention, productivity,
  burnout, or conflict-reduction claims that have not been proven.
- Over-standardizing too early and turning qualitative reflection into scores.
- Building dashboards before the product needs them.
- Tracking form typing, keystrokes, scroll histories, session replay, heatmaps,
  or field-level behavior.
- Treating employer pilot interest as permission to collect employee data.
- Using beta feedback as public testimonials without explicit quote permission.
- Recording refusal reasons as detailed personal stories.

## 13. Review Cadence

### Weekly Beta Review

Decide:

- Which beta requests were qualified, declined, or need clarification.
- Which audience path is producing useful and safe feedback.
- Which wording created confusion or misuse risk.
- Which artifact caused friction.
- Whether any sensitive disclosure must be redacted or deleted.
- What single copy or artifact change should be tested next.

### Monthly Product Review

Decide:

- Whether the current audience focus should continue or narrow.
- Whether the workbook, manager guide, privacy/disclosure pack, or
  responsible-use guide needs revision.
- Whether missing artifacts such as facilitator guide, synthetic example,
  tracker, review checklist, FAQ, or export formats are now blockers.
- Whether commercial interest is real enough to test a paid offer manually.

### Pre-Paid-Pilot Review

Decide:

- Whether terms, privacy, responsible-use acceptance, refund/license scope,
  delivery, support, and payment handling are ready.
- Whether the buyer accepts no diagnosis, no selection, no performance use, no
  ranking, no completed-scan collection, and no employee analytics.
- Whether facilitation is required.
- What manual records will be kept and for how long.

### Pre-Public-Launch Review

Decide:

- Whether public copy still preserves non-diagnostic, non-selection, and
  non-performance-management boundaries.
- Whether a final privacy policy and terms exist.
- Whether any analytics provider is necessary.
- Whether the event taxonomy and properties are still minimum necessary.
- Whether opt-out, retention, deletion, support, and misuse-reporting routes
  are ready.
- Whether public claims are limited to what the product has actually shown.
