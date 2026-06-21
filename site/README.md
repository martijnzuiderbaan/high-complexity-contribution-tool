# Static Website Prototype

This folder contains a lightweight commercial landing page for the
High-Complexity Contribution Tool / Instrument Complexiteit naar Bijdrage.

The site introduces the tool, explains the responsible-use boundaries, links to
the local Markdown tool pack, and provides a front-end-only beta interest form.
It also links to the draft beta disclosure, responsible-use guide, privacy
placeholder, security posture, and terms placeholder in `../docs/`.

## Open Locally

Open `site/index.html` directly in a browser, or serve the repository root so
the relative links to `docs/` and `README.md` continue to work:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://127.0.0.1:8000/site/
```

Serving only the `site/` directory also renders the page, but links to
`../docs/` will not resolve because those files sit outside that server root.

## Static or Mock Only

- No backend exists.
- The beta form does not submit, store, email, or persist anything.
- No analytics provider is connected.
- `script.js` includes optional provider-agnostic no-op analytics events for
  local debugging only. They log to the console only when explicitly enabled
  with `?analyticsDebug=1` or
  `localStorage.setItem("hcctAnalyticsDebug", "1")`.
- No checkout, payment, account, or license delivery flow exists.
- Draft disclosure, responsible-use, privacy-placeholder, security, and terms
  placeholder documents exist in `../docs/`; final legal/privacy terms and
  production security assurance are still not implemented.

## To Connect Later

- Add privacy-reviewed beta email capture with explicit consent and retention
  rules.
- Replace draft privacy/disclosure/security/terms copy before public launch.
- Follow `../docs/ANALYTICS_AND_MEASUREMENT.md` before connecting any real
  analytics provider.
- Choose a deployment target for static hosting.
- Add link checking or lightweight content validation if the site grows.
