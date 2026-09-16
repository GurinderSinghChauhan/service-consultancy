# The Software Consulting

Production website for The Software Consulting, built with React, TypeScript,
Vite, and React Router.

## Local development

Requirements: Node.js 22 and npm 10 or later.

```bash
npm ci
npm run dev
```

The development server prints its local URL. The contact form uses a Vercel
Function and requires these server-side environment variables in Vercel:

```bash
BREVO_API_KEY=xkeysib-...
CONTACT_FROM_EMAIL=contact@your-verified-domain.com
CONTACT_FROM_NAME="The Software Consulting"
CONTACT_TO_EMAIL=team@example.com
```

`CONTACT_FROM_EMAIL` must be a sender registered and verified in Brevo.
`CONTACT_FROM_NAME` is optional and defaults to `The Software Consulting`. Use
`vercel dev` when testing the email function locally.

## Quality checks

Run the full pre-deployment gate locally:

```bash
npm run check
```

This runs ESLint, strict TypeScript checking, and the production build. GitHub
Actions runs the same gate for pushes to `main` and `dev`, and for pull requests.

## Deployment

The application is configured for Vercel. `vercel.json` provides SPA routing,
the legacy `/portfolio` redirect, long-lived caching for fingerprinted assets,
and baseline browser security headers.

Recommended release flow:

1. Open a pull request from `dev` to `main`.
2. Confirm the Quality workflow and Vercel preview pass.
3. Merge to `main` and verify the production deployment.
4. Smoke-test `/`, `/services`, `/products`, `/contact`, and an unknown route.

The contact form posts to the same-origin `/api/contact` Vercel Function, which
validates the submission and sends it to the configured inbox through Brevo.
The Brevo API key is never exposed to the browser.

## Semantic versioning

Releases follow [Semantic Versioning](https://semver.org/) and are automated by
Semantic Release when changes reach `main`. Commit messages use the
[Conventional Commits](https://www.conventionalcommits.org/) format:

- `fix:` creates a patch release.
- `feat:` creates a minor release.
- `feat!:` or a `BREAKING CHANGE:` footer creates a major release.
- `perf:`, `refactor:`, `revert:`, and `docs:` create patch releases.
- `chore:`, `ci:`, `style:`, and `test:` do not create a release by themselves.

The release workflow validates the application, calculates the next version,
creates a `vX.Y.Z` Git tag, and publishes generated notes as a GitHub Release.
Preview the next release locally without writing tags or releases:

```bash
GITHUB_TOKEN="$(gh auth token)" npm run release:dry-run
```

The dry run requires an authenticated GitHub CLI session because it verifies
repository permissions, but it never creates a tag or release.
