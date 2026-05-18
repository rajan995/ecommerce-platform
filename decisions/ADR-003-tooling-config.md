# ADR 003: Tooling & Configuration Baseline

## Status
Accepted

## Context
To avoid "configuration drift" and ensure consistent code quality across the monorepo, we need a centralized way to manage TypeScript, ESLint, and Prettier configurations.

## Decision
Implement a centralized configuration package named `@repo/config`.
- **TypeScript**: Base configurations in `packages/config/typescript/base.json`.
- **ESLint**: Shared rules in `packages/config/eslint/base.js`.
- **Prettier**: Formatting rules in `packages/config/prettier/base.json`.

## Rationale
- **Consistency**: All developers and CI/CD pipelines use the exact same rules.
- **Ease of Updates**: Changes to the linting or TS rules only need to be made in one place to propagate throughout the monorepo.

## Consequences
- Individual apps/packages will "extend" these base configurations rather than defining their own.
- Dependency on `@repo/config` will be added to all workspace members.
