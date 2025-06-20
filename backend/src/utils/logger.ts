import { createLogger, transports, format } from "winston";
import path from "path";
import fs from "fs";

// Garante que a pasta "logs" exista
const logDir = path.join(__dirname, "../../logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Cria o logger de erro
export const errorLogger = createLogger({
  level: "error",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    format.json()
  ),
  transports: [
    new transports.File({
      filename: path.join(logDir, "app.log"), // arquivo de log de erros
      level: "error",
    }),
  ],
});
