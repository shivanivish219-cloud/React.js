import { bootstrap } from "./bootstrap/index.js";
import { registerGracefulShutdown } from "./bootstrap/shutdown.js";
import app from "./app.js";

const { logger, env } = await bootstrap();

const server = app.listen(env.port, () => {
  logger.info(`Flipkart API listening on http://localhost:${env.port}`);
  logger.info(`Swagger docs at http://localhost:${env.port}/api-docs`);
});

registerGracefulShutdown(server);
