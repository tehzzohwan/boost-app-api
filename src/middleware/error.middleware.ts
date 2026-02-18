// middleware/error.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../Utility/AppError';
import { logger } from '../Utility/logger';
import { QueryFailedError, EntityNotFoundError } from 'typeorm';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  // Operational errors — known, expected
  if (err instanceof AppError) {
    logger.warn(`${err.statusCode} - ${err.message} - ${req.originalUrl}`);
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // TypeORM errors — map to readable responses
  if (err instanceof QueryFailedError) {
    const detail = (err as any).detail || 'Database error';
    logger.error(`DB QueryFailed: ${detail}`);
    // catch unique constraint violations
    if ((err as any).code === '23505') {
      return res.status(409).json({ success: false, message: 'Resource already exists' });
    }
    return res.status(400).json({ success: false, message: detail });
  }

  if (err instanceof EntityNotFoundError) {
    return res.status(404).json({ success: false, message: 'Resource not found' });
  }

  // Unhandled — log the full stack
  logger.error(`Unhandled error: ${err.message}`, { stack: err.stack });
  res.status(500).json({ success: false, message: 'Internal server error' });
};