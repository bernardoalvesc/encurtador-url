import winston from "winston";
import path from "path";
import fs from "fs";

// Garante que a pasta logs/ exista
const logDir = path.join(__dirname, "../../logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logFilePath = path.join(logDir, "app.log");

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: logFilePath }), //  caminho absoluto garantido
  ],
});
