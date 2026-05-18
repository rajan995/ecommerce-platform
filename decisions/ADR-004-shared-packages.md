# ADR 004: Shared Core Packages

## Status
Accepted

## Context
The platform involves multiple services that must agree on the structure of domain entities (Users, Products, Orders) and use common helper functions.

## Decision
Create two dedicated shared packages:
1. `@repo/types`: A TypeScript-only package containing shared interfaces and schemas for domain entities.
2. `@repo/utils`: A utility package for common helper functions (formatting, validation, etc.).

## Rationale
- **Type Safety**: Prevents duplication of interfaces across the frontend and backend, ensuring end-to-end type safety.
- **DRY (Don't Repeat Yourself)**: Common logic (like currency formatting) is implemented once and reused.

## Consequences
- Changes to `@repo/types` may require rebuilds/re-tests of dependent apps.
- All shared logic must be strictly typed and well-documented.
