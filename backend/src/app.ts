import express from "express";
import cors from "cors";
import router from "./routes/shortener";

const app = express();

app.use(cors()); // Permite requisições de outras origens
app.use(express.json()); // Interpreta JSON no corpo das requisições
app.use(router); // Usa as rotas definidas

export default app;
