import { Request, Response, NextFunction } from "express";
import { logger } from "./logger";

// Middleware que captura e loga erros da aplicação
export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`Erro em ${req.method} ${req.url}: ${err.stack}`);
  res.status(500).json({ message: "Erro interno do servidor." });
};
