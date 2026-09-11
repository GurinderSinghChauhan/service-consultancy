# The Software Consulting

Production website for The Software Consulting, built with React, TypeScript,
Vite, and React Router.

## Local development

Requirements: Node.js 22 and npm 10 or later.

```bash
npm ci
npm run dev
```

The development server prints its local URL. No environment variables are
required for the current static site.

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

The contact form intentionally opens the visitor’s email client; it does not
collect or store personal information on the website.

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
