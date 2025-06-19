import winston from "winston";

// Cria e exporta o logger com dois destinos: console e arquivo
export const logger = winston.createLogger({
  level: "info", // níveis: error, warn, info, http, verbose, debug, silly
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // loga no terminal
    new winston.transports.File({ filename: "logs/app.log" }), // salva em logs/app.log
  ],
});
