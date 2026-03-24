import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as winston from 'winston';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.json(),
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple(),
        ),
      }),
    ],
  });

  use(req: Request, res: Response, next: NextFunction) {
    // Redact secrets
    const { authorization, ...headers } = req.headers;
    const maskedHeaders = authorization ? { ...headers, authorization: '[REDACTED]' } : headers;

    this.logger.info('HTTP', {
      method: req.method,
      url: req.url,
      ip: req.ip,
      userAgent: req.get('user-agent'),
      headers: maskedHeaders,
      body: req.body ? '[truncated]' : undefined,
    });

    const start = Date.now();
    res.on('finish', () => {
      const duration = Date.now() - start;
      this.logger.info('HTTP response', {
        method: req.method,
        url: req.url,
        statusCode: res.statusCode,
        duration: `${duration}ms`,
      });
    });

    next();
  }
}

