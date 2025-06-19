import { RequestHandler } from "express";

import { Url } from "../models/urlModel";

import { generateId } from "../services/nanoidService";

export const shortenUrl: RequestHandler = async (req, res) => {
  // Extrai a lista de URLs do corpo da requisição (espera um array de strings)
  const urls: string[] = req.body.urls || [];

  // Processa todas as URLs ao mesmo tempo usando Promise.all
  const results = await Promise.all(
    urls.map(async (original) => {
      // Gera um ID curto e aleatório com nanoid (ex: "abc1234")
      const id = generateId();

      // Monta a URL encurtada com base no ID (você pode trocar o domínio depois)
      const shortened = `http://localhost:8080/r/${id}`;

      // Salva a URL original e seu ID correspondente no MongoDB
      await Url.create({ id, original });

      // Retorna os dados formatados para resposta
      return { original, shortened };
    })
  );

  // Retorna a lista de resultados como resposta JSON
  res.json({ results });
};

export const redirectUrl: RequestHandler = async (req, res) => {
  // Extrai o parâmetro de rota "id" da URL encurtada
  const { id } = req.params;

  // Busca no MongoDB por uma URL que tenha esse ID
  const entry = await Url.findOne({ id });

  if (entry) {
    // Se a URL existir, redireciona o cliente para a URL original
    res.redirect(entry.original);
  } else {
    // Se não existir, retorna erro 404
    res.status(404).send("URL não encontrada");
  }
};
