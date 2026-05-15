---
name: architecture-decision-monorepo
description: Decision to use a Monorepo for the E-commerce platform
metadata:
  type: decision
---

# Architecture Decision: Monorepo

## Decision
We will use a monorepo structure (via Turborepo/Nx) to manage the User Website (Next.js), Admin Panel (React), and Mobile App (Expo) alongside the Node.js backend.

## Why
- **Shared Logic:** The e-commerce domain has many overlapping data models (Product, Order, User). A monorepo allows us to share TypeScript interfaces and validation logic across all three clients and the server.
- **Consistent Tooling:** Centralized ESLint, Prettier, and TypeScript configurations.
- **Atomic Changes:** A change in the API response can be updated in the backend and all three frontends in a single commit.

## How to Apply
- Use a `packages/` directory for shared code (e.g., `@repo/types`, `@repo/utils`).
- Use an `apps/` directory for the specific deployments (`user-web`, `admin-web`, `mobile-app`, `api-server`).
