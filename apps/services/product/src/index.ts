import Fastify from 'fastify';
import pino from 'pino';
import { config } from './config';
import { healthRoutes } from './api/health';
import { connectDb, disconnectDb } from '@repo/database';
import { getProducer, disconnectProducer } from '@repo/messaging';
import { commonPlugins } from '@repo/common';

const logger = pino({
  level: config.env === 'production' ? 'info' : 'debug',
});

const fastify = Fastify({ logger: false });

async function start() {
  try {
    // 1. Database Connection
    await connectDb();

    // 2. Messaging Setup
    await getProducer();

    // 3. Common Plugins
    await commonPlugins.registerErrorHandler(fastify);

    // 4. Register Routes
    healthRoutes(fastify);

    // 4. Start Server
    await fastify.listen({ port: config.port, host: '0.0.0.0' });
    logger.info(`Product service listening on port ${config.port}`);
  } catch (error) {
    logger.error(`Failed to start Product service: ${error}`);
    process.exit(1);
  }
}

// Graceful Shutdown
const shutdown = async (signal: string) => {
  logger.info(`Received ${signal}, shutting down...`);
  await fastify.close();
  await disconnectDb();
  await disconnectProducer();
  process.exit(0);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

start();
