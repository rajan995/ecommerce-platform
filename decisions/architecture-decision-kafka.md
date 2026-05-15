---
name: architecture-decision-kafka
description: Decision to incorporate Apache Kafka for event-driven architecture
metadata:
  type: decision
---

# Architecture Decision: Apache Kafka

## Decision
We will integrate Apache Kafka as the event streaming platform to decouple critical services and handle asynchronous processing.

## Why
- **Scalability:** E-commerce events (Order Placed, Payment Received, Inventory Updated) can trigger multiple downstream actions without blocking the main request.
- **Resilience:** If the Notification service is down, Kafka holds the "Order Confirmed" event until the service recovers.
- **Data Pipeline:** Kafka allows us to easily stream data into analytics or search indexes (like Elasticsearch) in real-time.

## How to Apply
- Use a Producer in the `api-server` to emit events to specific topics (e.g., `orders`, `inventory`, `users`).
- Create dedicated Consumer services (or separate workers within the monorepo) to process these events.
- Deploy via Helm charts on EKS for high availability.
