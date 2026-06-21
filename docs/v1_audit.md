# v1 Launch Audit

Prepared for a v0.3-to-v1 launch review of the **High-Complexity Contribution Tool** / **Instrument Complexiteit naar Bijdrage**.

## 1. Executive summary

### What the tool currently does

The repository currently contains three draft Markdown artifacts for structured role-design conversations around high-complexity adults at work:

- `Adult Self-Scan v0.1.md`: a private self-reflection tool for adults preparing a work conversation.
- `Employer Role Scan v0.1.md`: a role/context scan for managers, employers, HR partners, or coaches.
- `Joint Conversation Canvas v0.1.md`: a shared conversation canvas for agreeing on a bounded 30-day work experiment.

The tool helps participants discuss person-role-context fit across six recurring dimensions:

- Complexity fit.
- Autonomy fit.
- Learning fit.
- Values and quality fit.
- Sparring and translation fit.
- Energy and boundary fit.

It explicitly frames itself as non-diagnostic and non-selective. The main output is not a score or label, but a practical hypothesis and a 30-day work experiment.

### What appears to work

The core conceptual model is coherent. The adult-side, employer-side, and joint artifacts use largely consistent terminology, fit dimensions, signal language, and pathway hypotheses.

The strongest working elements are:

- Clear non-diagnostic boundary language.
- Strong emphasis on concrete work examples instead of abstract labels.
- Balanced responsibility between adult agency and employer role/context design.
- A practical bridge from reflection to action through a 30-day experiment.
- Explicit safeguards around disclosure, ranking, diagnosis, and performance use.
- Useful role levers such as complexity lanes, decision zones, quality-dialogue formats, and focus-time protection.

### What appears incomplete or risky

The current state is a promising content prototype, not yet a launchable product. It lacks product framing, onboarding, examples, validation, packaging, versioning discipline, usage guidance, and privacy handling for completed responses.

The main risks are:

- Users may treat the artifacts as assessment instruments despite the boundary language.
- Employers may still misuse outputs for HR decisions if implementation guidance is weak.
- Adults may overshare sensitive information without enough preparation or support.
- The bilingual `nl-en` positioning is present, but the artifacts are mostly English with Dutch labels rather than fully localized materials.
- There is no README, launch guide, facilitator guide, sample completed flow, FAQ, or legal/privacy review.
- There is no test or content-validation process to protect boundary language, frontmatter consistency, or terminology consistency as the project grows.

## 2. User value

### Who the likely user is

The likely primary users are:

- Gifted, hoogbegaafde, or high-complexity adults who feel underused, overloaded, misunderstood, constrained, or at risk of conflict/exit in a work setting.
- Managers or employers who want to unlock contribution without turning the conversation into diagnosis, talent ranking, or special pleading.
- HR partners, coaches, career counselors, or facilitators who need a structured, careful conversation format.

The most realistic early adopter is probably a coach, facilitator, HR advisor, or independent professional who already understands giftedness/high-complexity patterns and needs a concrete tool to structure sensitive work conversations.

### What problem the tool solves

The tool gives language and structure to a problem that is often handled poorly: high cognitive complexity is either ignored, pathologized, turned into a giftedness debate, or reduced to performance/talent labels.

It reframes the issue as:

> Under what role and context conditions does complex capacity become useful, sustainable contribution?

That is commercially and ethically stronger than trying to prove giftedness or diagnose a person.

### The clearest "job to be done"

When a high-complexity adult and their work context are stuck, the tool helps them move from vague tension to a bounded role experiment:

> Help me prepare and run a safe, concrete conversation about how my work can better use my complexity, autonomy, learning speed, quality sensitivity, sparring needs, and energy limits, without turning the conversation into diagnosis, blame, or a performance judgment.

### The fastest path to a useful v1

The fastest useful v1 is a polished guided workbook, not a software platform.

Recommended v1 shape:

- One clear landing README.
- A printable/adaptable workbook bundle.
- Separate adult, employer, and joint versions.
- A facilitator guide.
- One or two anonymized worked examples.
- A privacy and non-diagnostic use note.
- A v1 review checklist for coaches/HR/facilitators.
- Optional lightweight Markdown/content validation, but no scoring engine.

The fastest path is to make the current artifacts easier and safer to use in a real conversation before adding automation.

## 3. Technical architecture

### Main modules and responsibilities

This is currently a Markdown content repository, not an executable application. The main modules are content artifacts:

- `Adult Self-Scan v0.1.md`
  - Captures the adult's private reflection.
  - Organizes observations across six fit dimensions.
  - Supports disclosure planning.
  - Produces a shareable conversation summary if safe and useful.

- `Employer Role Scan v0.1.md`
  - Examines the role and context rather than the adult as a person.
  - Identifies role levers and context conditions.
  - Adds leadership/context prompts and modifiers.
  - Produces role-design output before a joint conversation.

- `Joint Conversation Canvas v0.1.md`
  - Combines adult and employer signals.
  - Structures the shared conversation.
  - Converts the strongest hypothesis into one 30-day work experiment.
  - Provides review and next-decision prompts after the experiment.

- `AGENTS.md`
  - Defines repository conventions, boundaries, privacy rules, and future development expectations.

### Data flow

The intended human workflow appears to be:

1. The adult privately completes or partially completes the Adult Self-Scan.
2. The manager/employer/HR/coach completes the Employer Role Scan from the role/context side.
3. Both parties choose what is safe and useful to bring into a shared conversation.
4. The Joint Conversation Canvas combines signals, evidence, and constraints.
5. The parties choose one pathway hypothesis and one fit dimension to test.
6. They define a bounded 30-day work experiment.
7. They review evidence and decide whether to continue, adjust, formalize, escalate, or stop.

No automated data processing exists. All interpretation is manual and contextual.

### External dependencies

No external runtime dependencies are present. There is no `package.json`, `pyproject.toml`, `requirements.txt`, `Makefile`, `go.mod`, `Cargo.toml`, or equivalent dependency manifest.

Current usage requires only a Markdown editor, Obsidian, or a document/PDF export workflow chosen by the user.

### Configuration and environment variables

No configuration files or environment variables are currently used.

The only implicit configuration is the frontmatter convention in each artifact:

- `title`
- `project`
- `working_name`
- `date`
- `status`
- `type`
- `language`
- `use`

### Any hidden assumptions

The current artifacts assume:

- The adult is safe enough to reflect honestly and decide what to disclose.
- The employer-side participant has enough authority or influence to adjust role/context conditions.
- Both sides can work with qualitative signals without needing scores.
- Users understand the difference between role fit, health issues, performance issues, and formal accommodations.
- A 30-day experiment is feasible in the relevant work context.
- The conversation can be held in good faith, or with a facilitator if needed.
- The tool's non-diagnostic boundary language will be respected.
- The current English-first `nl-en` wording is acceptable to the intended audience.

Some of these assumptions need stronger handling before v1.

## 4. Quality risks

### Bugs or fragile areas

Because this is content rather than software, the main "bugs" are content and workflow failure modes:

- The signal options can be used like an informal score if users are not guided carefully.
- The term "risk signal" may be misread as a formal risk assessment.
- The pathway hypotheses could be over-interpreted as diagnoses or fixed categories.
- The adult and employer scans are aligned, but prompt counts and emphasis differ; that is acceptable, but v1 should make intentional differences explicit.
- The artifacts do not yet include enough instructions for cases where the relationship is unsafe, adversarial, legally sensitive, or medically/occupationally complex.
- The escalation option appears only at the end of the joint canvas; v1 should make earlier safety and escalation boundaries clearer.

### Missing tests

No automated tests or checks exist.

For a Markdown content product, useful checks would include:

- Frontmatter schema validation.
- Required boundary-language presence checks.
- Consistent dimension names across artifacts.
- Consistent signal vocabulary across artifacts.
- Link and heading checks once docs grow.
- A launch checklist for non-diagnostic, privacy, and human-review safeguards.

These checks should protect the content without turning the tool into a scoring or decision system.

### Missing error handling

There is no software error handling because there is no executable system.

There is missing workflow handling for:

- What to do if the adult does not feel safe sharing.
- What to do if the employer wants to use the tool for performance evaluation.
- What to do if health, burnout, disability, legal, or formal HR issues dominate the situation.
- What to do if the 30-day experiment creates hidden workload.
- What to do if manager and adult disagree sharply about evidence.
- What to do if the role cannot realistically be changed.

### Security/privacy issues

The current repository contains only blank templates, not completed personal data.

The main privacy risk is downstream use:

- Completed scans may contain sensitive personal, health-adjacent, workplace-conflict, performance, or HR information.
- Adults may disclose giftedness, neurodivergence, burnout risk, conflict risk, or exit risk without understanding how the information may be retained or used.
- Employers may store completed scans in HR systems without clear consent, retention, or purpose limitation.
- Coaches/facilitators may need explicit handling guidance for notes, exports, and client records.

v1 needs a plain-language privacy and disclosure guide. If the tool later becomes a web app, data minimization and local/private completion should be central design principles.

### Performance/scalability concerns

There are no technical performance concerns in the current Markdown form.

The scalability concern is operational:

- The tool may require facilitation for sensitive situations.
- Without examples and onboarding, users may need too much expert interpretation.
- A pure free-form format is flexible, but hard to compare across cases or improve from user feedback.
- Any future analytics would raise ethical and privacy concerns and should not be added casually.

## 5. Commercialization readiness

### What would block a paying user from using it today

Likely blockers:

- No README or product overview.
- No clear v1 package structure.
- No explanation of who should use which artifact first.
- No facilitator guide.
- No worked example.
- No privacy/disclosure guide.
- No terms of use or non-diagnostic disclaimer outside the artifacts themselves.
- No polished export format such as PDF, DOCX, or printable workbook.
- No localization decision: fully English, fully Dutch, or deliberately bilingual.
- No evidence of user testing or expert review.
- No brand promise, pricing, website, or purchase/download flow.

### What needs to exist before launch

Before a public v1 launch, add:

- Product README with intended audience, use cases, boundaries, and workflow.
- v1 artifact set with stable names and version numbers.
- Facilitator guide for coaches, HR, and managers.
- Adult privacy and disclosure guide.
- Employer responsible-use guide.
- One anonymized worked example.
- A review checklist for non-diagnostic and non-HR-decision use.
- Printable/exported versions.
- Clear license or terms of use.
- Basic content QA process.
- A feedback route for early users.

### Suggested monetization model

The safest commercial model is not a per-person assessment product. It should avoid scoring, ranking, or claims of measuring giftedness.

Suggested model:

- Free lead magnet: short overview, conversation checklist, or mini-canvas.
- Paid workbook: adult scan, employer scan, joint canvas, examples, and review templates.
- Professional license: coach/HR/facilitator pack with usage guide, scripts, workshop format, and client handouts.
- Services layer: facilitated sessions, workshops, implementation support, or manager training.
- Organization package: responsible-use license for teams, with privacy/disclosure guardrails.

Avoid monetization that depends on assessment results, certification of giftedness, automated ranking, or employment decision support.

### Suggested website/landing-page strategy

The landing page should sell the job to be done, not the label.

Recommended positioning:

- Headline around converting complex capacity into sustainable contribution.
- Audience paths for adults, managers, and coaches/HR.
- Clear explanation of the 3-part workflow.
- Visible non-diagnostic boundary.
- Concrete outcomes: better conversation, clearer role levers, 30-day experiment, review.
- Sample preview pages.
- FAQ addressing giftedness labels, privacy, HR misuse, burnout, and when not to use the tool.
- Simple call to action: download free checklist, buy workbook, or book facilitated session.

The website should avoid IQ-test imagery, high-potential ranking language, medical claims, and generic productivity positioning.

## 6. Recommended v1 scope

### Must-have

- Stable v1 versions of the three current artifacts.
- README/product guide.
- Adult privacy and disclosure guide.
- Responsible employer-use guide.
- Facilitator notes for safe use.
- One completed synthetic example.
- Clear workflow from individual preparation to 30-day experiment review.
- Consistent terminology and frontmatter.
- Non-diagnostic and non-selection boundaries preserved in every artifact.
- Launch-ready export format.

### Should-have

- Fully Dutch or fully bilingual versions, with a deliberate language strategy.
- A short intake page to help users choose the right artifact.
- A 30-day experiment tracker.
- A review checklist.
- A content QA script for frontmatter, headings, and required boundary phrases.
- Lightweight version history or changelog.
- Feedback form for private beta users.

### Nice-to-have

- Obsidian template pack.
- PDF workbook edition.
- DOCX edition for HR/coaching contexts.
- Workshop slide outline.
- Facilitator email templates.
- Website preview snippets.
- Optional self-hosted static site.

### Explicitly out of scope

- IQ testing.
- Psychometric scoring.
- Giftedness diagnosis.
- Hiring, selection, promotion, performance, or high-potential decisions.
- Burnout diagnosis or occupational-health determination.
- Disability or accommodation determination.
- Automated recommendations that bypass human review.
- Employee ranking dashboards.
- Analytics on completed personal responses without explicit privacy design.

## 7. Suggested milestone plan

### v0.4 stabilization

Goal: make the current content set internally stable and safe to review.

Recommended work:

- Rename artifacts or add v0.4 copies with stable versioning.
- Add README with purpose, audience, workflow, and boundaries.
- Add a terminology map for the six fit dimensions and pathway hypotheses.
- Add a content consistency pass across all three artifacts.
- Add a short responsible-use note.
- Add a basic changelog.
- Decide whether `nl-en` means bilingual labels only or full bilingual materials.

Exit criteria:

- A reviewer can understand the tool, workflow, and boundaries from the repository alone.
- The three artifacts use consistent terminology.
- No artifact suggests diagnosis, scoring, ranking, or HR decision use.

### v0.5 usable MVP

Goal: make the tool usable by a real adult-manager-coach trio without direct author explanation.

Recommended work:

- Add a facilitator guide.
- Add an adult privacy/disclosure guide.
- Add an employer responsible-use guide.
- Add one synthetic worked example.
- Add a 30-day experiment tracker.
- Add "when not to use this tool" guidance.
- Add print/export formatting notes.

Exit criteria:

- A coach or HR partner can run a session from the materials.
- An adult can decide what to keep private before the joint conversation.
- The 30-day experiment output is concrete enough to review.

### v0.8 private beta

Goal: test the tool with a small, controlled audience and improve based on evidence.

Recommended work:

- Package the materials as a private beta workbook.
- Recruit a small set of coaches, adults, and managers.
- Collect structured feedback on clarity, safety, usefulness, and misuse risk.
- Review terminology that creates confusion or over-interpretation.
- Add content QA checks for required safeguards and schema consistency.
- Prepare website copy and offer structure.

Exit criteria:

- At least several real or realistic facilitated uses have been reviewed.
- Known misuse risks have mitigation language.
- The product offer and audience paths are clear.
- The v1 artifact set is mostly frozen.

### v1.0 public launch

Goal: publish a polished, safe, commercially usable version.

Recommended work:

- Release v1 workbook/package.
- Publish website or landing page.
- Publish clear license, terms, privacy/disclosure guidance, and responsible-use boundaries.
- Provide sample pages and a free entry artifact.
- Offer a paid workbook/professional license/facilitated service path.
- Create a maintenance workflow for feedback and revisions.

Exit criteria:

- A paying user can understand, buy/download, use, and review the tool without private explanation.
- The product remains firmly non-diagnostic and role-design oriented.
- Privacy, human agency, and employer-side responsible use are explicit.
- There is a path for feedback, support, and future version updates.
