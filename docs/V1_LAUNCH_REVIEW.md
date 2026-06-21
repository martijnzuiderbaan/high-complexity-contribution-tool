---
title: V1 Launch Review
project: High-Complexity Contribution Tool
working_name: Instrument Complexiteit naar Bijdrage
date: 2026-06-21
status: draft
type: launch readiness review
language: nl-en
use: multi-lens v1 launch readiness review for non-diagnostic workbook and static-site prototype
---

# V1 Launch Review

This review assesses the current v1 launch readiness of the **High-Complexity
Contribution Tool** / **Instrument Complexiteit naar Bijdrage** as a
Markdown-first workbook and static-site prototype.

The review is intentionally critical. It does not implement fixes and does not
change application, website, analytics, auth, account, payment, backend,
database, deployment, or third-party-service behavior.

## 1. Executive Summary

| Launch stage | Readiness score | Status | Reason |
|---|---:|---|---|
| Internal review | 8/10 | Go | The artifact set is coherent enough for maintainer and trusted expert review. Limits and boundaries are visible. |
| Private individual beta | 5/10 | Conditional go | The private-use path is promising, but real intake, contact, records handling, and stale navigation must be fixed before inviting participants. |
| Facilitated beta | 5/10 | Conditional go | Core materials and examples are strong, but the facilitator guide, scripts, tracker, and source-of-truth cleanup are still missing. |
| Employer pilot | 3/10 | No-go | Employer use needs written scope, voluntary/no-adverse-consequence terms, data handling, documentation boundaries, and facilitation governance. |
| Paid pilot | 2/10 | No-go | Pricing is a hypothesis. Terms, license, payment, refund, delivery, support, tax/VAT, and package readiness are not live. |
| Public launch | 2/10 | No-go | Public launch needs final privacy/terms/security/contact materials, deployment QA, live data-flow review, public claims review, and public-facing packaging. |

Overall judgment: the repository is ready for internal review and close to a
small, manually controlled private review cycle. It is not ready for real beta
data intake, employer pilots, paid pilots, or public launch. The strongest
current assets are the core workbook, interpretation guide, manager guide,
responsible-use boundaries, beta plan, onboarding, demo flow, and synthetic
examples. The biggest blockers are operational: no real contact route, no
manual records SOP, no live intake process, no final legal/privacy/security
materials, stale source-of-truth docs, and unresolved employer/pipeline
governance.

## 2. Review Method

Files inspected:

| Area | Files |
|---|---|
| Root orientation | `README.md`, `AGENTS.md`, `.gitignore` |
| Legacy source artifacts | `Adult Self-Scan v0.1.md`, `Employer Role Scan v0.1.md`, `Joint Conversation Canvas v0.1.md` |
| Core v1 tool pack | `docs/WORKBOOK_v1.md`, `docs/INTERPRETATION_GUIDE_v1.md`, `docs/MANAGER_CONVERSATION_GUIDE_v1.md`, `docs/USER_GUIDE.md`, `docs/V1_PACKAGE_INDEX.md` |
| Beta and responsible-use docs | `docs/BETA_PLAN.md`, `docs/BETA_DISCLOSURE_AND_CONSENT.md`, `docs/RESPONSIBLE_USE_GUIDE.md`, `docs/ONBOARDING.md`, `docs/DEMO_FLOW.md` |
| Trust, privacy, security, analytics | `docs/PRIVACY_PLACEHOLDER.md`, `docs/SECURITY.md`, `docs/TERMS_AND_USE_PLACEHOLDER.md`, `docs/TRUST_AND_LAUNCH_RISK_REVIEW.md`, `docs/ANALYTICS_AND_MEASUREMENT.md`, `docs/ACCESS_AND_ACCOUNTS_PLAN.md` |
| Commercial and claims | `docs/PRD_v1.md`, `docs/MONETIZATION.md`, `docs/MARKETING.md`, `docs/OPEN_ITEMS.md`, `docs/v1_audit.md` |
| Examples | `examples/example_adult_workflow.md`, `examples/example_manager_conversation.md`, `examples/example_30_day_experiment.md` |
| Static site | `site/index.html`, `site/styles.css`, `site/script.js`, `site/README.md` |

Review lenses used:

| Lens | How reviewed |
|---|---|
| Product and UX readiness | Subagent plus local consolidation |
| Core tool quality and coherence | Subagent plus local consolidation |
| Employer/manager responsible-use readiness | Subagent plus local consolidation |
| Privacy, security, and trust readiness | Subagent plus local consolidation |
| Evidence and claims discipline | Subagent plus local consolidation |
| Beta operations readiness | Subagent plus local consolidation |
| Commercial and monetization readiness | Local lens because the agent thread limit was reached |
| Website and onboarding readiness | Local lens, informed by product/UX subagent output |
| Documentation architecture and maintainability | Local lens, informed by core-quality subagent output |

Subagents were used. Six read-only review subagents were spawned before the
environment's agent thread limit was reached. The remaining three lenses were
simulated in the main thread and consolidated with the subagent findings.

Limits of the review:

- This is not a legal, privacy, data-protection, clinical, HR, employment-law,
  occupational-health, tax, or security assurance review.
- No browser rendering, accessibility audit, link checker, deployment test, or
  static-hosting test was run.
- No test, lint, type-check, build, or content validation command exists in the
  repository.
- The review is file-grounded, but it does not validate market demand,
  participant safety, efficacy, payment readiness, legal compliance, or
  commercial outcomes.

## 3. Current Artifact Inventory

| Artifact | Purpose | Audience | Current status | Readiness concerns |
|---|---|---|---|---|
| `README.md` | Main overview, workflow, status, boundaries | All reviewers | Strong orientation | Needs link to this review; status should stay aligned with package index |
| `docs/WORKBOOK_v1.md` | Adult-facing and joint-use workbook | Adults, coaches, managers | Strong draft | Long first-use path; needs minimum route and optional/required markers |
| `docs/INTERPRETATION_GUIDE_v1.md` | Qualitative pattern interpretation | Adults, coaches, HR, managers | Strong safeguards | Needs a filled example of restrained interpretation |
| `docs/MANAGER_CONVERSATION_GUIDE_v1.md` | Manager-facing conversation guide | Managers, HR, facilitators | Strong practical guide | Manager notes need extra protection against personnel-file drift |
| `docs/USER_GUIDE.md` | Practical use guide | All users | Stale | Routes users to v0.1 artifacts as if they are current |
| `docs/V1_PACKAGE_INDEX.md` | Package map and launch-gap inventory | Users, maintainers | Useful but stale | Omits newer docs/examples and still lists now-present items as missing |
| Root v0.1 files | Earlier adult/employer/joint artifacts | Maintainers, comparison users | Legacy/prototype | Need explicit legacy/reference labeling in user-facing docs |
| `docs/ONBOARDING.md` | Entry paths and safety orientation | Beta users, reviewers | Current and useful | Should become primary entry guide until `USER_GUIDE.md` is refreshed |
| `docs/DEMO_FLOW.md` | Guided synthetic demo | Reviewers, facilitators, managers | Strong | Good for beta review; not a substitute for live intake |
| `examples/` | Synthetic adult, manager, and experiment examples | Reviewers, facilitators, users | Strong | Needs tighter connection from core guides |
| `docs/BETA_PLAN.md` | Manual private beta operating plan | Maintainer | Strong plan | Real contact route, tracker, storage, retention, deletion, and response process not implemented |
| `docs/BETA_DISCLOSURE_AND_CONSENT.md` | Draft beta disclosure and consent wording | Beta participants | Strong draft | Not final legal text; employer no-adverse-consequence wording should be operationalized |
| `docs/RESPONSIBLE_USE_GUIDE.md` | Allowed/disallowed use boundaries | All users, employers | Strong | Employer pilot checklist should become enforceable scope template before pilots |
| `docs/PRIVACY_PLACEHOLDER.md` | Static-prototype privacy posture | Users, reviewers | Good placeholder | Must be replaced/reviewed before live collection, paid use, employer pilots, or public launch |
| `docs/SECURITY.md` | Static-prototype security posture | Reviewers, maintainers | Good placeholder | Needs real contact/reporting route and public deployment checklist before launch |
| `docs/TERMS_AND_USE_PLACEHOLDER.md` | Acceptable/prohibited use placeholder | Users, buyers | Good placeholder | Not final terms, contract, license, refund policy, or employer pilot agreement |
| `docs/ANALYTICS_AND_MEASUREMENT.md` | Privacy-first measurement plan | Maintainer | Strong plan | No provider should be connected until notice, retention, opt-out, and property review exist |
| `docs/MONETIZATION.md` | Pricing and packaging hypotheses | Maintainer | Useful plan | Contains some "validated" and "prove" language that conflicts with claims discipline |
| `docs/MARKETING.md` | Source copy and claims guidance | Maintainer | Strong source doc | Should not be applied to live channels without readiness and claims review |
| `site/` | Static landing page prototype | Public/reviewers | Useful prototype | Not public-launch ready; local docs links depend on deployment root; form is placeholder only |
| `docs/OPEN_ITEMS.md` | Persistent backlog | Maintainer | Useful | Needs Step 14 additions without duplicating existing blockers |

## 4. Product and UX Readiness

Strengths:

- The product promise is understandable: turn complex role-fit tension into
  one bounded 30-day role-design experiment.
- Boundaries are visible across README, site, workbook, manager guide, beta
  disclosure, responsible-use guide, privacy placeholder, and terms placeholder.
- The workflow is practical: private reflection, interpretation, manager-safe
  summary, manager conversation, experiment design, review.
- Demo and synthetic examples make the abstract model much easier to inspect.
- The static site honestly says there is no backend, no account system, no
  payment, no external analytics provider, and no real form submission.

Risks:

- The public/static site exposes a form with name, email, role, and intended-use
  fields even though it does not submit. This can invite typing sensitive
  details before a real intake process exists.
- The site tells users to contact the maintainer directly, while the footer says
  the contact route is still coming later.
- User-facing navigation is inconsistent: `ONBOARDING.md` and the site point to
  the v1 pack, while `docs/USER_GUIDE.md` still routes users to the v0.1 files.
- The site links internal planning files such as PRD and audit alongside user
  tool-pack files, which may confuse public users.
- The workbook is strong but long; a first beta user may not know the minimum
  viable path.

Missing pieces:

- Real beta/support/security contact route.
- Live-intake decision: disabled placeholder form, manual private route, or
  privacy-reviewed live form.
- Public-facing free starter/checklist or sample preview.
- Public/internal separation of docs and site links.
- Minimum viable workbook path.

Recommendations:

| Priority | Recommendation | Files |
|---|---|---|
| Must-fix | Define a real manual beta contact route or remove/disable the form fields before inviting real participants. | `site/index.html`, `docs/BETA_PLAN.md`, `docs/SECURITY.md` |
| Must-fix | Make the v1 pack the canonical flow and mark v0.1 files as legacy/reference. | `docs/USER_GUIDE.md`, `docs/V1_PACKAGE_INDEX.md`, root v0.1 files |
| Should-fix | Add a short "minimum viable path" to the workbook. | `docs/WORKBOOK_v1.md` |
| Should-fix | Separate public-facing links from maintainer/reviewer planning docs. | `site/index.html`, `README.md`, `docs/V1_PACKAGE_INDEX.md` |
| Later | Add export-ready previews and public sample pages after QA. | `site/`, future export files |

## 5. Core Tool Quality and Coherence

Workbook quality:

- Strong: clear boundaries, concrete prompts, role levers, privacy controls,
  experiment design, workload protection, and 30-day review.
- Risk: the 17-section flow is heavy for first beta use. The workbook says
  partial completion is acceptable, but it does not yet provide a compact
  first-use route with required/optional markers.

Interpretation guide quality:

- Strong: it repeatedly blocks diagnosis, scoring, ranking, blame, and fixed
  conclusions. It uses hypotheses, alternative explanations, and bounded tests.
- Risk: the final output template is blank. The adult example shows what a
  restrained interpretation looks like, but the guide itself does not include a
  filled example.

Manager guide quality:

- Strong: the guide gives safe openings, manager questions, conversation traps,
  templates, documentation boundaries, and 30/60-minute agendas.
- Risk: manager notes still use fields such as "blocked or underused capacity".
  That is workable in context, but employer pilots need explicit non-personnel,
  short-retention, work-context documentation language.

Demo and onboarding quality:

- Strong: `docs/DEMO_FLOW.md`, `docs/ONBOARDING.md`, and the example files show
  the complete path without real personal data.
- Risk: `docs/USER_GUIDE.md` conflicts with current onboarding and should not be
  treated as the primary entry guide until updated.

Consistency across concepts and language:

- Mostly coherent, but the dimension vocabulary drifts between six fit
  dimensions and expanded workbook/interpreter terms such as "Autonomy and
  Trust", "Values Sensitivity", "Context Fit", "Social and Communication Fit",
  and "Sustainable Contribution".
- The bilingual `nl-en` character is present, but the material is mostly
  English with Dutch labels rather than a full bilingual product.

Recommendations:

| Priority | Recommendation | Files |
|---|---|---|
| Must-fix | Refresh stale user/package docs so they match the current v1/demo package. | `docs/USER_GUIDE.md`, `docs/V1_PACKAGE_INDEX.md`, `docs/PRD_v1.md` |
| Should-fix | Add a canonical terminology map for dimensions, sub-signals, and allowed synonyms. | `README.md`, `docs/WORKBOOK_v1.md`, `docs/INTERPRETATION_GUIDE_v1.md` |
| Should-fix | Add a filled interpretation output example. | `docs/INTERPRETATION_GUIDE_v1.md`, `examples/example_adult_workflow.md` |
| Should-fix | Add a separate 30-day tracker/review handout. | `docs/WORKBOOK_v1.md`, new future artifact |
| Later | Decide whether `nl-en` means bilingual labels, Dutch-first, English-first, or full bilingual versions. | All user-facing docs |

## 6. Employer/Manager Responsible-Use Readiness

What is safe enough:

- The manager-facing and responsible-use materials strongly prohibit hiring,
  selection, promotion, performance review, ranking, discipline, firing,
  support entitlement, diagnosis, disability, occupational-health, legal, and
  employer-only evaluation uses.
- The examples model responsible documentation: agreed role-design actions,
  review evidence, stop conditions, and review date, not private workbook
  content.
- Employer pilot entry conditions are documented in `docs/ONBOARDING.md`,
  `docs/BETA_PLAN.md`, and `docs/RESPONSIBLE_USE_GUIDE.md`.

What is still risky:

- Real employer pilots are not ready. The project still lacks a written pilot
  agreement, final privacy/terms/security review, real contact route, records
  process, and facilitation/escalation governance.
- "No adverse consequence for declining" is present in guidance but should be
  repeated directly in employer consent/invite/pilot scope materials.
- Manager notes need tighter wording so they cannot become personnel-file
  characterizations.

Employer pilot conditions:

- Voluntary adult participation.
- No adverse consequence for declining or pausing.
- Written purpose, participant count, time box, outputs, data handling, owner,
  stop conditions, and review date.
- Adult controls disclosure.
- No completed private workbooks in HR files.
- No HR decision, performance, promotion, discipline, support-entitlement,
  diagnosis, ranking, or employee-comparison use.
- Facilitator or neutral process owner when power dynamics are material.
- Clear exit and escalation route.

What must not happen:

- No employer-only evaluation.
- No use in hiring, selection, promotion, performance, discipline, firing,
  ranking, support entitlement, surveillance, diagnosis, occupational-health,
  disability, accommodation, legal, or formal HR decisions.
- No request for IQ, diagnosis, health details, conflict narratives, HR-case
  facts, or completed private workbook content.
- No dashboards, scores, employee analytics, or automated interpretation from
  completed responses.

Recommendations:

| Priority | Recommendation | Files |
|---|---|---|
| Must-fix | Create a one-page employer pilot scope/agreement before Wave 3 use. | `docs/BETA_PLAN.md`, `docs/RESPONSIBLE_USE_GUIDE.md`, new future artifact |
| Must-fix | Add explicit decline/pause-without-adverse-consequence language to employer-supported consent and invite copy. | `docs/BETA_DISCLOSURE_AND_CONSENT.md`, `docs/MARKETING.md` |
| Must-fix | Tighten manager documentation templates for non-personnel, role/context-only notes. | `docs/MANAGER_CONVERSATION_GUIDE_v1.md`, examples |
| Should-fix | Require the 60-minute facilitated path for employer pilots; reserve 30-minute path for low-risk prepared conversations. | `docs/MANAGER_CONVERSATION_GUIDE_v1.md`, `docs/ONBOARDING.md` |
| Later | Add employer onboarding handout and manager FAQ after pilot scope is stable. | Future artifact |

## 7. Privacy, Security, and Trust Readiness

Static prototype posture:

- The current site is static HTML/CSS/JavaScript.
- `site/script.js` prevents form submission and does not call `fetch`,
  `XMLHttpRequest`, `sendBeacon`, cookies, or an external provider.
- No backend, accounts, payments, database, file upload, external analytics, or
  real form submission exists.
- `.gitignore` is reasonable for local secrets, editor files, logs, temp files,
  dependencies, and build output.

Beta data collection readiness:

- The plans are strong, but the operational process is not ready.
- The repository still lacks an actual contact route, records storage
  location, access list, retention period, deletion/correction route,
  accidental sensitive disclosure process, and response cadence.
- The current free-text intended-use field is safe only because submission is
  blocked.

Analytics readiness:

- Analytics is currently local/no-op debug only.
- The event taxonomy is privacy-aware and excludes form values and workbook
  content.
- No real provider should be connected before privacy notice, provider review,
  retention, opt-out, event-property review, and public disclosure exist.

Terms/security/privacy placeholder readiness:

- The placeholders are useful for internal review and beta orientation.
- They are not final legal, privacy, security, support, refund, license, or
  employer-pilot materials.

Remaining gaps:

- Real contact/support/security route.
- Manual records SOP.
- Final reviewed privacy policy and terms before live collection, paid use, or
  public launch.
- Security/reporting route and issue-handling process.
- Public deployment QA, including links, accessibility, static-hosting path,
  content-boundary checks, and hosting/security headers.

Recommendations:

| Priority | Recommendation | Files |
|---|---|---|
| Must-fix | Define contact route, owner, response cadence, storage, access, retention, deletion, correction, and accidental-disclosure handling before real beta intake. | `docs/BETA_PLAN.md`, `docs/PRIVACY_PLACEHOLDER.md`, `docs/SECURITY.md` |
| Must-fix | Do not convert the existing form live as-is. Replace it with a reviewed intake route or disable fields before external sharing. | `site/index.html`, `site/script.js` |
| Should-fix | Add public deployment security-header checklist: CSP, frame protections, referrer policy, permissions policy, and hosting-path checks. | `docs/SECURITY.md`, `docs/OPEN_ITEMS.md` |
| Should-fix | Keep analytics provider-free until privacy and event-property review is complete. | `docs/ANALYTICS_AND_MEASUREMENT.md`, `site/script.js` |
| Later | Revisit accounts only after a proven delivery/support/entitlement need. | `docs/ACCESS_AND_ACCOUNTS_PLAN.md` |

## 8. Evidence and Claims Discipline

Whether claims are conservative enough:

- Overall, yes. The core docs repeatedly say the product is non-diagnostic,
  non-scoring, non-selection, non-performance-management, and not validated as a
  commercial assessment or outcome predictor.
- The marketing guide is unusually clear about safe wording and prohibited
  claims.

Whether the tool overclaims validation:

- The main system-wide boundary is good.
- Some commercial planning language conflicts with it. `docs/MONETIZATION.md`
  uses phrases such as "validated through founder-led early use" and "prove"
  in revenue milestones. These should become "tested", "qualified",
  "de-risked", or "commercially explored".
- The site heading "Where the beta should prove usefulness" should use "test",
  "explore", or "evaluate".

Whether any source/model is overweighted:

- No overweighted source was found. `docs/MARKETING.md` explicitly warns not to
  lean on Lapre or any single source too heavily.
- OI-008 correctly keeps evidence-balance review open before stronger public
  claims.

Whether language leans too much on giftedness identity:

- Not overdominant system-wide.
- The first-viewport site copy leads with "gifted, hoogbegaafde, and
  high-complexity adults". This is acceptable for the current audience, but a
  public version should lead more with role/context complexity and name
  giftedness as one audience path.

Recommendations:

| Priority | Recommendation | Files |
|---|---|---|
| Must-fix | Replace "validated/prove" commercial language with "test/learn/qualify" language. | `docs/MONETIZATION.md`, `site/index.html` |
| Should-fix | Soften absolute "safe" and outcome phrasing where it appears outside explicit boundary examples. | `README.md`, `site/index.html`, `docs/PRD_v1.md` |
| Should-fix | Add a lightweight claims register: claim, allowed wording, support, prohibited stronger wording, required review stage. | New future artifact or `docs/MARKETING.md` |
| Later | Rebalance public hero language toward role/context complexity if the product moves beyond a giftedness-aware audience. | `site/index.html`, `README.md` |

## 9. Beta Operations Readiness

Manual intake:

- The manual-intake plan is well thought through.
- The actual route is missing. The site and docs still indicate the maintainer
  route is coming later.

Consent/disclosure:

- Disclosure wording is strong.
- Acknowledgement capture should be operationalized with document version,
  accepted date, acceptance context, and status.

Onboarding:

- `docs/ONBOARDING.md` is current and useful.
- `docs/USER_GUIDE.md` is stale and should not be the primary user entry point
  until updated.

Feedback workflow:

- Feedback categories, timing, and privacy boundaries are strong.
- The tracker and weekly feedback summary are not actual artifacts yet.

Tracker:

- `docs/BETA_PLAN.md` lists spreadsheet columns.
- No blank tracker template exists yet.

Stop conditions:

- Stop conditions are clear across beta disclosure, responsible-use guide,
  onboarding, manager guide, and trust review.
- Response scripts remain thin for decline, pause, accidental disclosure, and
  "use another support route".

Recommendations:

| Priority | Recommendation | Files |
|---|---|---|
| Must-fix | Create a concrete manual beta records SOP and tracker before real participant intake. | `docs/BETA_PLAN.md`, new future artifact |
| Must-fix | Define the real contact route and response ownership. | `site/index.html`, `docs/SECURITY.md`, `docs/BETA_PLAN.md` |
| Should-fix | Add consent log fields with document version and acceptance context. | `docs/BETA_PLAN.md`, `docs/ACCESS_AND_ACCOUNTS_PLAN.md` |
| Should-fix | Add weekly beta feedback summary template. | `docs/BETA_PLAN.md`, `docs/ANALYTICS_AND_MEASUREMENT.md` |
| Should-fix | Add short scripts for decline, pause, accidental disclosure, and support-route referral. | `docs/BETA_DISCLOSURE_AND_CONSENT.md`, `docs/RESPONSIBLE_USE_GUIDE.md` |

## 10. Commercial and Monetization Readiness

Pricing hypothesis:

- Pricing tiers are explicit and correctly labeled as hypotheses.
- The suggested ranges are plausible for exploration, but not validated.
- Commercial docs correctly distinguish free preview, individual workbook,
  professional pack, employer/team pack, workshop/guided implementation, and
  custom advisory.

Packaging:

- The professional/facilitator pack is the most coherent early paid direction.
- The current package is not yet ready for paid delivery because facilitator
  materials, tracker/review handout, license scope, delivery process, support
  route, refund terms, and export quality are incomplete.

Paid-pilot readiness:

- Not ready.
- No checkout, payment, account access, invoice workflow, license delivery,
  refund/support boundaries, final terms, final privacy notice, VAT/tax review,
  or real support route exists.

What can be sold now:

- Nothing as a live self-serve product.
- Manual commercial discovery, product feedback conversations, future
  professional-pack interest, future workshop/pilot interest, and pricing
  hypothesis conversations are appropriate.

What should not be sold yet:

- Public self-serve checkout.
- Broad employer rollout.
- Certification or train-the-trainer program.
- Validated assessment, talent identification, high-potential program, employee
  dashboard, automated interpretation, or account-based completion tracking.

Recommendations:

| Priority | Recommendation | Files |
|---|---|---|
| Must-fix before paid pilot | Finalize terms, license scope, refund/support boundaries, privacy notice, delivery model, and payment/invoice/tax workflow. | `docs/MONETIZATION.md`, `docs/TERMS_AND_USE_PLACEHOLDER.md`, `docs/PRIVACY_PLACEHOLDER.md` |
| Must-fix before paid pilot | Define the first paid offer and prove responsible-use acceptance through manual conversations. | `docs/MONETIZATION.md`, `docs/BETA_PLAN.md` |
| Should-fix | Build professional-pack deliverables before taking paid commitments. | `docs/MONETIZATION.md`, future facilitator/tracker artifacts |
| Later | Add hosted checkout only after delivery, privacy, refund, license, VAT, and support are ready. | Future implementation |

## 11. Website and Onboarding Readiness

Landing page clarity:

- The landing page communicates the product category and boundaries well.
- It is clear that the current product is a workbook/static-site prototype, not
  an application.

CTA clarity:

- The primary CTA says "View beta placeholder", which is honest but not a real
  conversion path.
- The page gives no actionable contact route for manual beta.

Static/no-submit clarity:

- The beta section and form note clearly say no backend, no storage, and no
  mailing-list integration.
- The visible fields can still tempt users to type sensitive information. That
  is acceptable for local review, but not for real candidates without stronger
  handling.

Demo links:

- Demo and example links are useful and now part of the site.
- Links depend on serving the repository root. Public hosting or serving only
  `site/` will break `../docs/` and `../examples/` paths.

Mobile/basic UX risks:

- The CSS includes responsive rules and a skip link.
- No browser, mobile, accessibility, or link QA was run in this step.
- The site has no deployment target or hosting-header plan.

Recommendations:

| Priority | Recommendation | Files |
|---|---|---|
| Must-fix before private beta | Add real manual contact route or remove the form fields before external sharing. | `site/index.html`, `site/README.md` |
| Should-fix | Replace "prove usefulness" with "test usefulness" or similar claim-safe wording. | `site/index.html` |
| Should-fix | Add public/internal navigation separation so external users see the pack, examples, demo, onboarding, privacy, and responsible-use materials before planning docs. | `site/index.html` |
| Must-fix before public launch | Run static-hosting, link, accessibility, mobile, and content-boundary QA. | `site/`, `docs/OPEN_ITEMS.md` |
| Later | Add free starter/checklist or sample preview when ready. | Future artifact, `site/index.html` |

## 12. Documentation Architecture and Maintainability

File organization:

- The repo is easy to inspect with `rg --files`.
- Most docs have consistent YAML frontmatter.
- Core docs, beta docs, trust docs, commercial docs, examples, and site files
  are distinguishable by folder and filename.

Duplication:

- Boundary language is intentionally repeated. That is appropriate for this
  product.
- Some status and missing-artifact lists are now stale and conflict across
  `README.md`, `docs/USER_GUIDE.md`, `docs/V1_PACKAGE_INDEX.md`, and
  `docs/PRD_v1.md`.

Navigation:

- `README.md`, `site/index.html`, `docs/ONBOARDING.md`, and
  `docs/DEMO_FLOW.md` are good entry points.
- `docs/USER_GUIDE.md` is a problematic entry point because it still centers
  the legacy v0.1 files.

Source-of-truth issues:

- There is no single current package manifest that accurately separates:
  public/user-facing docs, beta-operational docs, internal planning docs,
  legacy/reference docs, and future missing artifacts.
- `docs/V1_PACKAGE_INDEX.md` should be the right place, but it is stale.

Naming issues:

- Root v0.1 files are still visible and useful as source references, but they
  can confuse beta users if not labeled legacy/reference.
- The project name is still dual English/Dutch. That is acceptable for now, but
  public launch needs a product naming strategy.

Recommendations:

| Priority | Recommendation | Files |
|---|---|---|
| Must-fix | Update `docs/USER_GUIDE.md` and `docs/V1_PACKAGE_INDEX.md` to reflect the actual current v1 package. | `docs/USER_GUIDE.md`, `docs/V1_PACKAGE_INDEX.md` |
| Should-fix | Add explicit categories: public/user-facing, beta operations, internal planning, legacy/reference. | `README.md`, `docs/V1_PACKAGE_INDEX.md`, `site/index.html` |
| Should-fix | Add content QA checklist for frontmatter, required boundaries, terminology, and links. | New future artifact |
| Later | Add automated content validation only if the repo grows enough to justify it. | Future script |

## 13. Must-Fix Before Private Beta

| ID | Issue | Why it matters | File(s) | Recommended fix | Owner/timing |
|---|---|---|---|---|---|
| PVB-001 | No real beta/contact route | Participants cannot request access or report issues through a known monitored channel. | `site/index.html`, `docs/BETA_PLAN.md`, `docs/SECURITY.md` | Define contact route, owner, response cadence, and routing for beta/support/security/privacy issues. | Maintainer before inviting real participants |
| PVB-002 | Manual records process not operational | Contact details and feedback need storage, access, retention, deletion, correction, and accidental-disclosure handling before real intake. | `docs/BETA_PLAN.md`, `docs/PRIVACY_PLACEHOLDER.md`, `docs/BETA_DISCLOSURE_AND_CONSENT.md` | Create a concrete manual beta records SOP and tracker. | Maintainer before intake |
| PVB-003 | Placeholder form has live-looking fields | Users may type sensitive data even though the form does not submit. | `site/index.html`, `site/script.js` | Remove/disable fields before external sharing or replace with reviewed live intake. | Maintainer before external traffic |
| PVB-004 | Stale user/package navigation | Users may start with legacy v0.1 files instead of the current v1 pack. | `docs/USER_GUIDE.md`, `docs/V1_PACKAGE_INDEX.md`, `docs/PRD_v1.md` | Make v1 artifacts canonical and label v0.1 files legacy/reference. | Maintainer before beta onboarding |
| PVB-005 | Claim-risk words in current materials | "Validated", "prove", and overly absolute "safe" language can undermine non-validation discipline. | `docs/MONETIZATION.md`, `site/index.html`, `README.md`, `docs/PRD_v1.md` | Replace with test/learn/qualify/safer/bounded wording where needed. | Maintainer before sharing with beta candidates |

## 14. Must-Fix Before Employer Pilot

| ID | Issue | Why it matters | File(s) | Recommended fix | Owner/timing |
|---|---|---|---|---|---|
| EP-001 | No written employer pilot scope/agreement | Employer use has the highest misuse and power-dynamics risk. | `docs/BETA_PLAN.md`, `docs/RESPONSIBLE_USE_GUIDE.md`, `docs/ONBOARDING.md` | Create one-page pilot scope with purpose, participant count, time box, outputs, data handling, stop conditions, and owner. | Maintainer before Wave 3 |
| EP-002 | Voluntary/no-adverse-consequence language not operationalized | Adults must be able to decline or pause without penalty. | `docs/BETA_DISCLOSURE_AND_CONSENT.md`, `docs/MARKETING.md` | Put explicit no-adverse-consequence wording in employer consent/invite/scope copy. | Maintainer before employer use |
| EP-003 | Documentation boundaries need tightening | Manager notes could drift into personnel-file characterizations. | `docs/MANAGER_CONVERSATION_GUIDE_v1.md`, examples | Mark notes as role/context-only, non-personnel, minimum necessary, and retention-limited. | Maintainer before employer pilot |
| EP-004 | Facilitation and escalation route incomplete | Employer pilots need neutral process handling when power dynamics are material. | `docs/ONBOARDING.md`, `docs/BETA_PLAN.md` | Require facilitated 60-minute flow or neutral process owner for pilot use and add pause/referral scripts. | Maintainer before Wave 3 |
| EP-005 | Pilot data handling not final | Employer notes and feedback can contain sensitive workplace information. | `docs/PRIVACY_PLACEHOLDER.md`, `docs/SECURITY.md`, `docs/TERMS_AND_USE_PLACEHOLDER.md` | Define pilot records, access, retention, deletion, and no-HR-file rules. | Maintainer before employer pilot |

## 15. Must-Fix Before Paid Pilot

| ID | Issue | Why it matters | File(s) | Recommended fix | Owner/timing |
|---|---|---|---|---|---|
| PP-001 | No final terms, license, refund, or support boundaries | Paid delivery creates commercial and customer-support obligations. | `docs/TERMS_AND_USE_PLACEHOLDER.md`, `docs/MONETIZATION.md` | Replace placeholder with reviewed paid-use terms, license scope, refund/cancellation, support, and acceptable-use materials. | Maintainer before payment or invoice |
| PP-002 | No final privacy/payment workflow | Leads, purchases, support, delivery, and feedback become real data flows. | `docs/PRIVACY_PLACEHOLDER.md`, `docs/ACCESS_AND_ACCOUNTS_PLAN.md`, `docs/MONETIZATION.md` | Define privacy notice, payment/invoice handling, tax/VAT review, retention, deletion, and vendor/data-flow review. | Maintainer before paid pilot |
| PP-003 | Paid package not frozen | Buyers need clear deliverables and version scope. | `docs/MONETIZATION.md`, `README.md`, future artifacts | Define the first paid offer and package contents; include blank templates only. | Maintainer before paid commitment |
| PP-004 | Support/contact route missing | Paid users need a monitored way to ask access, refund, misuse, privacy, and support questions. | `docs/SECURITY.md`, `site/index.html` | Create support/security/privacy contact route and issue workflow. | Maintainer before paid pilot |
| PP-005 | Commercial validation not established | Pricing and packaging are hypotheses, not evidence of willingness to pay. | `docs/MONETIZATION.md`, `docs/ANALYTICS_AND_MEASUREMENT.md` | Use manual beta/commercial discovery to qualify one paid route before charging. | Maintainer during beta |

## 16. Must-Fix Before Public Launch

| ID | Issue | Why it matters | File(s) | Recommended fix | Owner/timing |
|---|---|---|---|---|---|
| PL-001 | Placeholder legal/privacy/security materials | Public users need reviewed public terms, privacy, security/contact, and support materials. | `docs/PRIVACY_PLACEHOLDER.md`, `docs/TERMS_AND_USE_PLACEHOLDER.md`, `docs/SECURITY.md` | Replace placeholders with reviewed public-facing materials. | Maintainer before public launch |
| PL-002 | Public deployment QA not run | Broken links, accessibility issues, path problems, or hidden claims can damage trust. | `site/`, `docs/OPEN_ITEMS.md` | Run link, accessibility, mobile, static-hosting path, security-header, and content-boundary QA. | Maintainer before deployment |
| PL-003 | Live data-flow review missing | Intake, analytics, payments, email, support, or hosting would create new data flows. | `docs/ANALYTICS_AND_MEASUREMENT.md`, `docs/ACCESS_AND_ACCOUNTS_PLAN.md` | Review every live vendor, data flow, retention, opt-out, and event property before connecting services. | Maintainer before live services |
| PL-004 | Public claims need final review | Public copy must not imply validation, diagnosis, outcomes, HR decision support, or legal/security compliance. | `docs/MARKETING.md`, `site/index.html`, `README.md` | Create claims register and run final public claim review. | Maintainer before launch copy |
| PL-005 | Public/internal doc separation incomplete | Public users should not navigate internal PRD/audit docs as if they are product materials. | `site/index.html`, `README.md`, `docs/V1_PACKAGE_INDEX.md` | Separate public package pages from internal planning/reviewer materials. | Maintainer before public traffic |
| PL-006 | Product package not public-ready | Public launch needs stable package, sample preview, starter artifact, license, and export quality. | `README.md`, `docs/MONETIZATION.md`, future artifacts | Freeze public package and add free starter/sample preview only after QA. | Maintainer before public launch |

## 17. Should-Fix Improvements

| ID | Improvement | Value | File(s) | Suggested timing |
|---|---|---|---|---|
| SF-001 | Add a workbook minimum viable path | Reduces first-use friction and supports partial completion. | `docs/WORKBOOK_v1.md` | Before private beta |
| SF-002 | Add canonical terminology map | Prevents dimension drift and supports future QA. | `README.md`, `docs/WORKBOOK_v1.md`, `docs/INTERPRETATION_GUIDE_v1.md` | Before facilitated beta |
| SF-003 | Add filled interpretation example | Shows how restrained qualitative interpretation should look. | `docs/INTERPRETATION_GUIDE_v1.md`, `examples/` | Before private/facilitated beta |
| SF-004 | Add blank beta tracker and weekly summary template | Makes beta operations concrete without building software. | `docs/BETA_PLAN.md`, future tracker artifact | Before real beta intake |
| SF-005 | Add decline, pause, accidental-disclosure, and referral scripts | Makes stop conditions operational. | `docs/BETA_DISCLOSURE_AND_CONSENT.md`, `docs/RESPONSIBLE_USE_GUIDE.md` | Before real beta |
| SF-006 | Add facilitator guide and 60-minute facilitation script | Supports the strongest early buyer/user path. | Future artifact, `docs/MANAGER_CONVERSATION_GUIDE_v1.md` | Before facilitated beta |
| SF-007 | Add separate 30-day tracker/review handout | Makes the product output easier to use outside the long workbook. | Future artifact | Before facilitated or paid pilot |
| SF-008 | Add lightweight claims register | Keeps commercial copy conservative and reviewable. | `docs/MARKETING.md` or new artifact | Before paid/public copy |
| SF-009 | Add content QA checklist | Protects frontmatter, boundaries, terminology, and links as docs grow. | Future artifact | Before public launch |
| SF-010 | Add deployment/header checklist | Captures CSP, frame, referrer, permissions, hosting path, and link checks. | `docs/SECURITY.md`, `docs/OPEN_ITEMS.md` | Before public deployment |

## 18. Later Improvements

| ID | Improvement | Why later | Trigger |
|---|---|---|---|
| LI-001 | Export-ready PDF/DOCX editions | Layout QA is only useful after the package stabilizes. | Package freeze and real beta feedback |
| LI-002 | Full bilingual Dutch/English editions | Language strategy is not yet decided. | Repeated beta demand by language path |
| LI-003 | Sample report | Report format can imply assessment if introduced too early. | After responsible-use and documentation boundaries are stronger |
| LI-004 | Hosted checkout | Payment infrastructure should follow validated offer, terms, privacy, refund, VAT, and delivery readiness. | Credible paid route with reviewed materials |
| LI-005 | Accounts or portal | Accounts add privacy/security/support burden before proven need. | Repeated paid update/access/support need |
| LI-006 | External analytics provider | Manual learning is enough for current stage. | Public traffic plus reviewed privacy/event plan |
| LI-007 | Employer/team workspace | Highest misuse risk and not aligned with v1. | Multiple governed paid pilots prove responsible use |
| LI-008 | Certification or train-the-trainer | Certification implies maturity and authority not yet established. | Evidence, governance, legal review, and mature professional pack |

## 19. Go/No-Go Recommendation

| Stage | Status | Recommendation |
|---|---|---|
| Internal review | Go | Continue internal and trusted expert review of static files. |
| Private individual beta | Conditional go | Proceed only after contact route, manual records SOP/tracker, stale guide cleanup, and placeholder-form decision are handled. |
| Facilitated beta | Conditional go | Proceed only after private-beta operations are ready and facilitator scripts/tracker/source-of-truth fixes are added. |
| Employer pilot | No-go | Do not run until written scope, voluntary/no-adverse-consequence language, documentation boundary, facilitation route, and pilot data handling exist. |
| Paid pilot | No-go | Do not charge or invoice until paid offer, terms, privacy, license, refund/support, delivery, and payment/tax workflow are ready. |
| Public launch | No-go | Do not publicly launch until public terms/privacy/security/contact, deployment QA, claims review, vendor/data-flow review, and public package readiness are complete. |

## 20. Recommended Next Implementation Step

Step 15 should be: **Private beta readiness hardening**.

Focus only on making a real private beta safe enough to invite a small number
of trusted participants: define the contact route, manual records SOP, tracker,
consent log, accidental-disclosure handling, and source-of-truth navigation
cleanup.
