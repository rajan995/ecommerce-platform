---
name: architecture-decision-payments
description: Decision to use Razorpay as the payment gateway
metadata:
  type: decision
---

# Architecture Decision: Razorpay Integration

## Decision
Razorpay will be used as the primary payment gateway for the e-commerce platform.

## Why
- **Regional Support:** Strong support for Indian payment methods (UPI, NetBanking, Cards).
- **Developer Experience:** Robust API and SDKs for React, Next.js, and Node.js.
- **Security:** PCI-DSS compliance ensures payment data is handled securely outside our primary servers.

## How to Apply
- **Frontend Flow:** Use the Razorpay Standard Checkout for a seamless payment experience.
- **Backend flow:** 
    1. Create an order on the server using the Razorpay API.
    2. Send the order ID to the frontend.
    3. On payment success, verify the signature on the server.
- **Webhooks:** Implement a dedicated `/api/webhooks/razorpay` endpoint to handle asynchronous payment updates (e.g., payment.captured).
