import express from "express";
import cors from "cors";
import router from "./routes/shortener";
import { logMiddleware } from "./middlewares/logMiddleware";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(cors()); // Permite requisições de outras origens
app.use(express.json()); // Interpreta JSON no corpo das requisições
app.use(logMiddleware); // Aplica o middleware globalmente
app.use(router); // Usa as rotas definidas
app.use(errorMiddleware); // captura e loga erros

export default app;
