---
name: architecture-decision-microservices
description: Decision to use a Microservices Architecture for the backend API
metadata:
  type: decision
---

# Architecture Decision: Microservices Architecture

## Decision
We will move away from a monolithic backend and instead implement a Microservices Architecture. Each core business domain will be managed by a dedicated service.

## Why
- **Independent Scalability:** The `product-service` can be scaled independently during high-traffic sales events without needing to scale the `auth-service`.
- **Fault Isolation:** A crash in the `notification-service` will not bring down the entire checkout process.
- **Technology Flexibility:** Different services can use different versions of Node.js or even different languages if a specific task requires it.
- **Parallel Development:** Different team members can work on different services without causing constant merge conflicts in a single monolithic codebase.

## Proposed Services
1. **Auth Service:** User registration, login, JWT issuance, and RBAC.
2. **Product Service:** Catalog management, categories, and inventory.
3. **Order Service:** Cart management and order lifecycle.
4. **Payment Service:** Razorpay integration and payment verification.
5. **Notification Service:** Twilio and SendGrid integration.
6. **API Gateway:** A single entry point to route requests to the appropriate microservice.

## Communication Strategy
- **Synchronous:** REST or gRPC for immediate requests (e.g., Auth $\rightarrow$ User Profile).
- **Asynchronous:** Apache Kafka for event-driven workflows (e.g., Order Placed $\rightarrow$ Trigger Payment $\rightarrow$ Trigger Notification).

## How to Apply
- In the monorepo, each service will reside in `apps/services/[service-name]`.
- Use a shared package `packages/common` for shared types, error handlers, and Kafka producers/consumers.
