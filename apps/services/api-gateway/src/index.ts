import Fastify from 'fastify';
import proxy from '@fastify/http-proxy';
import pino from 'pino';
import { config } from './config';
import { commonPlugins } from '@repo/common';

const logger = pino({
  level: config.env === 'production' ? 'info' : 'debug',
});

const fastify = Fastify({
  logger: false,
  disableRequestLogging: true
});

async function start() {
  try {
    // 1. Common Plugins
    await commonPlugins.registerErrorHandler(fastify);

    // 2. Proxy Routes
    await fastify.register(proxy, {
      upstream: config.services.auth,
      prefix: '/api/auth',
      http2: false
    });
    await fastify.register(proxy, {
      upstream: config.services.product,
      prefix: '/api/products',
      http2: false
    });
    await fastify.register(proxy, {
      upstream: config.services.order,
      prefix: '/api/orders',
      http2: false
    });
    await fastify.register(proxy, {
      upstream: config.services.payment,
      prefix: '/api/payments',
      http2: false
    });
    await fastify.register(proxy, {
      upstream: config.services.notification,
      prefix: '/api/notifications',
      http2: false
    });

    // Gateway Health Check
    fastify.get('/health', async () => ({
      status: 'UP',
      service: 'api-gateway',
      timestamp: new Date().toISOString(),
    }));

    await fastify.listen({ port: config.port, host: '0.0.0.0' });
    logger.info(`API Gateway listening on port ${config.port}`);
  } catch (error) {
    logger.error(`Failed to start API Gateway: ${error}`);
    process.exit(1);
  }
}

const shutdown = async (signal: string) => {
  logger.info(`Received ${signal}, shutting down Gateway...`);
  await fastify.close();
  process.exit(0);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

start();
