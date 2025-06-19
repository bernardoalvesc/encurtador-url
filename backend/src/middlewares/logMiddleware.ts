import { Request, Response, NextFunction } from "express";
import { logger } from "./logger";

// Middleware que registra tempo de resposta de cada requisição
export const logMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = process.hrtime(); // marca o tempo de início

  res.on("finish", () => {
    const [sec, nano] = process.hrtime(start); // calcula o tempo decorrido
    const durationMs = (sec * 1000 + nano / 1e6).toFixed(2); // converte p/ ms

    logger.info(
      `${req.method} ${req.url} - ${res.statusCode} - ${durationMs} ms`
    );
  });

  next();
};
