# AGENTS.md

## Project Summary

This repository appears to contain draft Markdown artifacts for the **High-Complexity Contribution Tool** (`Instrument Complexiteit naar Bijdrage`). The current files are non-diagnostic role-design and reflection tools for gifted, hoogbegaafde, or high-complexity adults and their work context.

The project currently looks like an Obsidian/Markdown content workspace, not an executable software application. Its artifacts help users prepare structured conversations about sustainable contribution, role fit, complexity, autonomy, learning, quality dialogue, sparring, translation, energy, and boundaries.

## Repository Layout

Root-level files currently found:

- `Adult Self-Scan v0.1.md` - self-reflection scan for adults preparing a work conversation.
- `Employer Role Scan v0.1.md` - role/context scan for managers, employers, HR partners, or coaches.
- `Joint Conversation Canvas v0.1.md` - shared conversation canvas for agreeing on a bounded 30-day work experiment.
- `AGENTS.md` - instructions for future Codex runs.

There are no application source directories, package manifests, README, test directories, or build configuration files in the current checkout.

## Dependencies

No dependency manifest was found. Specifically, there is no `package.json`, `pyproject.toml`, `requirements.txt`, `Makefile`, `go.mod`, `Cargo.toml`, or equivalent setup file in the repository root.

Current state: no install step is required for the Markdown artifacts.

If future automation is added, document the exact verified install command here.

## Running Locally

No executable app or CLI runner was found.

Current local usage is to open and edit the Markdown files in Obsidian or another Markdown editor. Do not invent a runtime command unless a future manifest, script, or README verifies it.

## Tests, Linting, Formatting, and Type Checks

No configured tests, linting, formatting, or type-check commands were found in the current repository.

Do not claim verification with tooling that is not present. If future work adds automation, update this section with the exact commands and expected scope.

## Engineering and Content Conventions

- Keep changes small, reviewable, and covered by tests where practical.
- Preserve the YAML frontmatter shape unless there is a deliberate reason to change it:
  - `title`
  - `project`
  - `working_name`
  - `date`
  - `status`
  - `type`
  - `language`
  - `use`
- Preserve the non-diagnostic boundary language. These artifacts must not become IQ tests, psychometric tests, hiring tools, selection tools, promotion tools, performance-review tools, burnout diagnoses, occupational-health determinations, or disability determinations.
- Keep the project focused on person-role-context fit and sustainable contribution, not on ranking people or proving giftedness.
- Keep the bilingual `nl-en` character of the material where it already exists.
- Prefer concrete work examples, role levers, fit dimensions, and bounded 30-day experiments over abstract labels.
- Preserve the adult's control over what personal information is kept private or shared.
- When adding new artifacts, follow the existing Markdown style: clear purpose, boundaries, practical tables, prompts, interpretation notes, and explicit safeguards.
- Avoid adding hidden decision automation or scoring unless the repository later defines a reviewed and ethical assessment model. Even then, keep human review and context explicit.

## Security and Privacy Rules

- Do not commit personal completed scan responses, employee data, health data, HR case data, assessment results, or identifiable workplace conflict details unless the user explicitly asks and the privacy implications are clear.
- Do not add secrets, tokens, credentials, private URLs, or local machine paths unrelated to the project.
- Treat any real participant examples as sensitive. Prefer anonymized, synthetic, or generalized examples.
- Do not position these artifacts as medical, psychological, legal, occupational-health, or HR decision advice.
- Keep human agency explicit: the adult controls disclosure, and employer-side use must remain role/context oriented rather than person-ranking oriented.

## Definition of Done

For future tasks, "done" means:

- The requested change is implemented in the smallest reasonable scope.
- Related Markdown artifacts remain internally consistent in terminology, boundaries, and structure.
- Any new or changed commands are verified before being documented.
- Tests, linting, formatting, or type checks are run when such commands exist and are relevant.
- If no verification command exists, the final response says so plainly.
- No unrelated files are changed.
- Privacy, non-diagnostic use, and human-review boundaries are preserved.

## TODO: Automation to Consider

These are suggestions only; they are not currently verified project commands:

- Add a README describing the artifact set, intended use, and maintenance workflow.
- Add a Markdown lint or formatting workflow if the project grows.
- Add a lightweight content validation script if frontmatter consistency becomes important.
- Add a review checklist for non-diagnostic boundary language and privacy safeguards.
