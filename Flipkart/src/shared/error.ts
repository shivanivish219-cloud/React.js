import type { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { logger } from "../bootstrap/logger.js";

export interface HttpError extends Error {
  status: number;
}

export const httpError = (status: number, message: string): HttpError =>
  Object.assign(new Error(message), { status });

export const notFound = (req: Request, res: Response): void => {
  res.status(404).json({ error: `Route ${req.method} ${req.originalUrl} not found` });
};

// 4-arg signature required — express only treats this as error middleware if it takes 4 params
export const errorHandler = (
  err: HttpError | mongoose.Error.CastError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  void req;

  // A response can already be sent before its handler's promise settles (e.g. our
  // requestTimeout middleware fires while a slow query is still running) — writing
  // headers again here would throw ERR_HTTP_HEADERS_SENT. Delegating to Express's
  // built-in final handler is the documented way to close out such a request safely.
  if (res.headersSent) {
    next(err);
    return;
  }

  if (err instanceof mongoose.Error.CastError) {
    res.status(400).json({ error: `Invalid ${err.path}: ${String(err.value)}` });
    return;
  }

  const status = (err as HttpError).status ?? 500;
  if (status === 500) logger.error(err.stack ?? err.message);
  res.status(status).json({ error: err.message });
};
