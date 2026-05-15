---
name: architecture-decision-caching
description: Decision to use Redis for caching in the E-commerce platform
metadata:
  type: decision
---

# Architecture Decision: Redis Caching

## Decision
We will implement Redis as a distributed caching layer for the e-commerce platform.

## Why
- **Database Offloading:** MongoDB is our primary store, but frequently accessed data (e.g., product categories, top-selling items) should not hit the DB on every request.
- **Session Management:** Redis provides ultra-fast storage for user sessions, which is critical for a seamless shopping cart experience.
- **Latency Reduction:** Caching API responses for common queries reduces the TTFB (Time to First Byte) for the User Website.

## How to Apply
- **Cache-Aside Pattern:** The application will check Redis first. If data is missing (cache miss), it will fetch from MongoDB and then populate the cache.
- **TTL (Time-to-Live):** Set appropriate expiration times for different data types (e.g., 1 hour for product lists, 24 hours for categories).
- **Deployment:** Deploy as a cluster on AWS EKS using the Redis Operator or via AWS ElastiCache.
