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

## Versioning

The version in `package.json` is displayed in the footer and follows Semantic
Versioning. Create a release with one of:

```bash
npm run release:patch
npm run release:minor
npm run release:major
```

Then push the release commit and tag:

```bash
git push origin main --follow-tags
```
