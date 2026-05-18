# ADR 002: Project Structure

## Status
Accepted

## Context
A clear separation is needed between deployable applications and shared logic to maintain scalability and avoid circular dependencies.

## Decision
The project will follow a standard Turborepo layout:
- `apps/`: Contains all deployable applications (e.g., `user-site`, `admin-panel`, `mobile-app`, and microservices).
- `packages/`: Contains shared internal libraries (e.g., `@repo/config`, `@repo/types`, `@repo/utils`).

## Rationale
- **Scalability**: New services or apps can be added to `apps/` without affecting the shared core.
- **Maintainability**: Shared logic is centralized in `packages/`, making it easier to update across all platforms.

## Consequences
- All shared code must be properly versioned and exported from the `packages/` directory.
- App-specific logic must remain within the `apps/` directory.
