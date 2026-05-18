import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export interface StandardResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

export async function sendSuccess(reply: FastifyReply, data: any, statusCode = 200) {
  return reply.status(statusCode).send({
    success: true,
    data,
    timestamp: new Date().toISOString(),
  });
}

export async function sendError(reply: FastifyReply, code: string, message: string, statusCode = 400, details?: any) {
  return reply.status(statusCode).send({
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  });
}

export const commonPlugins = {
  async registerErrorHandler(fastify: FastifyInstance) {
    fastify.setErrorHandler((error, request, reply) => {
      if (error instanceof z.ZodError) {
        return sendError(reply, 'VALIDATION_ERROR', 'Invalid request data', 400, error.errors);
      }
      const statusCode = error.statusCode || 500;
      const code = error.code || 'INTERNAL_SERVER_ERROR';
      const message = error.message || 'An unexpected error occurred';

      return sendError(reply, code, message, statusCode, error.details);
    });
  },
};

export function validateRequest<T>(schema: z.ZodSchema<T>, data: any): T {
  return schema.parse(data);
}
