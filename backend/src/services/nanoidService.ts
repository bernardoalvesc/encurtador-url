import { nanoid } from "nanoid"; // Importa o nanoid para gerar IDs únicos

// Função que gera um ID de 7 caracteres
export const generateId = () => {
  return nanoid(7);
};
