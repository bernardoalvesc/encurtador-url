import { Router } from "express";
import { shortenUrl, redirectUrl } from "../controllers/shortenerController";
// Importa os controladores responsáveis pelas ações

const router = Router(); // Cria uma nova instância de roteador

// Rota POST: recebe uma lista de URLs e retorna versões encurtadas
router.post("/api/shorten", shortenUrl);

// Rota GET: redireciona para a URL original com base no ID fornecido
router.get("/r/:id", redirectUrl);

export default router;
