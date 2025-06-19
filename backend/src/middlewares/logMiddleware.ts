import morgan from "morgan";
import fs from "fs";
import path from "path";

// Garante que a pasta "logs" exista
const logDir = path.join(__dirname, "../../logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Cria um stream para escrever no arquivo access.log
const accessLogStream = fs.createWriteStream(path.join(logDir, "access.log"), {
  flags: "a", // adiciona no final sem sobrescrever
});

// Cria e exporta o middleware do morgan
export const logMiddleware = morgan("combined", {
  stream: accessLogStream,
});
