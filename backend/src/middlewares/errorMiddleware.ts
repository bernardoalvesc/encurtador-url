import { Request, Response, NextFunction } from "express";
import { errorLogger } from "../utils/logger";

// Middleware para capturar erros não tratados
export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  errorLogger.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl,
  });

  res.status(500).json({ error: "Erro interno do servidor" });
};
