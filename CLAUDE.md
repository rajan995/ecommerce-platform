# CLAUDE.md - E-Commerce Platform

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

## Architecture Decisions
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

## Current Progress (Phase 1 & 2)
- [ ] Monorepo Setup (Turborepo/Nx)
- [ ] Microservices Initialization (Auth, Product, Order, Payment, Notification)
- [ ] API Gateway Setup
- [ ] User Website (Next.js) & Admin Panel (React) & Mobile App (Expo) base setup
- [ ] Infrastructure as Code (Terraform) for VPC, EKS, S3
- [ ] Containerization (Docker) & CI/CD (Jenkins)
- [ ] Kafka Cluster deployment on EKS
- [ ] Observability (Prometheus & Grafana)
