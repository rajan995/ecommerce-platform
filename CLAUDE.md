# CLAUDE.md - e-app

## Project Overview
A full-scale e-commerce ecosystem consisting of a User Website, Admin Panel, and Mobile App, managed as a monorepo.

## Tech Stack
- **Monorepo:** Turborepo / Nx
- **Frontend:** Next.js (User Site), React.js (Admin Panel), React Native/Expo (Mobile App)
- **Backend:** Node.js, Express.js (Microservices)
- **Database:** MongoDB
- **Messaging:** Apache Kafka
- **Caching:** Redis
- **Payment:** Razorpay
- **DevOps:** Terraform, AWS EKS, S3, Jenkins, Grafana/Prometheus

## Architecture Decisions & ADRs
- Detailed Architecture Decision Records (ADRs) are maintained in the `decisions/` folder.
- **Monorepo:** Use Turborepo/Nx to share types, utility functions, and constants across all platforms. Shared code resides in `packages/`.
- **Microservices:** Backend is split into dedicated services: `Auth`, `Product`, `Order`, `Payment`, `Notification`, and an `API Gateway`. Services reside in `apps/services/`.
- **Event-Driven Architecture:** Use Apache Kafka to decouple critical services and handle asynchronous processing (e.g., Order Placed $\rightarrow$ Payment $\rightarrow$ Notification).
- **Distributed Caching:** Use Redis for database offloading (MongoDB), session management, and reducing API latency.
- **Payment Integration:** Razorpay is the primary gateway, using server-side order creation and signature verification via webhooks.

## Coding Standards & Best Practices
- **Type Safety:** Use TypeScript end-to-end. Shared interfaces should be in `@repo/types`.
- **API Design:**
  - Versioned REST APIs (`/api/v1/...`).
  - Standardized error handling.
- **Security:** 
  - JWT for authentication.
  - Role-Based Access Control (RBAC) for Admin vs. User.
  - Secure S3 bucket policies.
- **Performance:**
  - Next.js App Router for SEO.
  - Cache-Aside pattern with Redis for frequent queries.
- **Tooling:** Centralized ESLint, Prettier, and TypeScript configurations.

## Project Structure (Monorepo)
- `apps/`: Deployable applications
    - `services/`: Backend microservices (Auth, Product, Order, Payment, Notification)
    - `user-site/`: Next.js frontend
    - `admin-panel/`: React admin dashboard
    - `mobile-app/`: Expo mobile app
- `packages/`: Shared libraries and configurations
    - `@repo/types`: Shared TypeScript interfaces and schemas
    - `@repo/utils`: Common utility functions
    - `@repo/config`: Centralized ESLint, Prettier, and TS configurations
- `decisions/`: Architecture Decision Records (ADRs) documenting key technical choices.

## Current Progress (Phase 1 & 2)
- [x] Phase 1.1: Monorepo Foundation (Workspace, Shared Core, Tooling)
- [x] Phase 1.2: Contract-First API Design (OpenAPI Specs, Swagger, Type Generation)
- [ ] Phase 1.3: Backend Microservices Base (API Gateway, Service Scaffolding, Kafka/Mongo)
- [ ] Phase 1.4: Frontend Scaffolding (User Site, Admin Panel, Mobile App)
- [x] Phase 2.1: Local Development & Containerization (Docker, Compose)
- [ ] Phase 2.2: Cloud Foundation (Terraform, VPC, EKS, S3)
- [ ] Phase 2.3: CI/CD Pipeline & Deployment (Jenkins, K8s, Helm)
- [ ] Phase 2.4: Production Middleware & Observability (Kafka, Prometheus, Grafana)
