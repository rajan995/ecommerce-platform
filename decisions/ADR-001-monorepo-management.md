# ADR 001: Monorepo Management

## Status
Accepted

## Context
The project requires managing multiple frontend applications (User Site, Admin Panel, Mobile App) and several backend microservices. A monorepo approach is needed to share types, utility functions, and configurations without the overhead of publishing multiple private packages.

## Decision
We will use **Turborepo** for monorepo management.

## Rationale
- **Efficient Task Execution**: Turborepo provides high-performance build caching and task orchestration.
- **Developer Experience**: It simplifies running tasks across multiple packages using a single CLI.
- **Compatibility**: Works seamlessly with npm workspaces.

## Consequences
- The project will rely on `turbo.json` for pipeline definitions.
- Local development will benefit from remote and local caching of build artifacts.
