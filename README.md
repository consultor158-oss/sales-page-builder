# Sales Page Builder

This repository currently contains a single React + TypeScript sales landing page for Nova Beauty Sérum. Despite the repository name, it is not yet a general-purpose page builder or reusable component toolkit.

The application is written in Brazilian Portuguese and includes product information, offer links, and supplied media. Product statements and commercial details are part of the current page content; verify them with the responsible business before relying on or republishing them.

## Stack

- React 19 and TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS
- Radix UI components and Lucide icons

## Development

Requires Node.js 22 or later and npm.

```bash
npm ci
npm run dev
```

The project currently defines these checks:

```bash
npm run lint
npm run build
```

GitHub Actions runs both commands for pull requests and pushes to `main`. There is no automated unit-test suite configured yet.

## Contributing

Please keep changes focused on the current application, explain the user problem being addressed, and include relevant verification in your pull request. Read [CONTRIBUTING.md](CONTRIBUTING.md) and check existing issues and pull requests before starting.

Useful contribution areas include accessibility, responsive behavior, content accuracy, and tests for isolated behavior.

## Media and third-party materials

Product photos, videos, brand assets, checkout destinations, and testimonials may have separate rights or commercial terms. The presence of a repository license does not establish permission to reuse those materials. Verify their ownership and applicable terms before redistributing or using them outside this project.
