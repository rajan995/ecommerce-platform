import 'dotenv/config';

export const config = {
  port: parseInt(process.env.PORT || '3003', 10),
  env: process.env.NODE_ENV || 'development',
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
  dbName: process.env.DB_NAME || 'ecommerce_order',
  kafkaBrokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
};
