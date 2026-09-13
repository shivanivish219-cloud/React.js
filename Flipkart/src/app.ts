import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import type { Request, Response, NextFunction } from "express";
import ordersRouter from "./features/orders/orders.router.js";
import productsRouter from "./features/products/products.router.js";
import cartRouter from "./features/cart/cart.router.js";
import wishlistRouter from "./features/wishlist/wishlist.router.js";
import usersRouter from "./features/users/users.router.js";
import { swaggerSpec } from "./docs/swagger.js";
import { notFound, errorHandler } from "./shared/error.js";
import { requestTimeout } from "./shared/timeout.js";
import { zstdCompression } from "./shared/zstd-compression.js";
import { logger } from "./bootstrap/logger.js";
import { redisClient } from "./bootstrap/redis.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(zstdCompression); // zstd first (Node 22.15+ only) - falls through to gzip/brotli below otherwise
app.use(compression());
app.use(express.json());
app.use(requestTimeout);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.on("finish", () => logger.http(`${req.method} ${req.originalUrl} ${res.statusCode}`));
  next();
});

app.get("/health", (req: Request, res: Response) => res.json({ status: "ok" }));

// Readiness only gates on Mongo - Redis being down must never make the app "unavailable"
app.get("/ready", (req: Request, res: Response) => {
  const mongoUp = mongoose.connection.readyState === 1;
  res.status(mongoUp ? 200 : 503).json({
    status: mongoUp ? "ready" : "not_ready",
    mongo: mongoUp ? "up" : "down",
    redis: redisClient.isReady ? "up" : "down",
  });
});

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/orders", ordersRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
