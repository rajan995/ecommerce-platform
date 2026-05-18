import 'dotenv/config';

export const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  env: process.env.NODE_ENV || 'development',
  services: {
    auth: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
    product: process.env.PRODUCT_SERVICE_URL || 'http://localhost:3002',
    order: process.env.ORDER_SERVICE_URL || 'http://localhost:3003',
    payment: process.env.PAYMENT_SERVICE_URL || 'http://localhost:3004',
    notification: process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3005',
  },
};
