import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { sendSuccess } from '@repo/common';

export async function healthRoutes(fastify: FastifyInstance) {
  fastify.get('/health', async (request: FastifyRequest, reply: FastifyReply) => {
    return sendSuccess(reply, {
      status: 'UP',
      service: 'order-service',
      timestamp: new Date().toISOString(),
    });
  });
}
