import shortid from "shortid";

export const generateId = () => {
  return shortid.generate(); // Gera e retorna o ID curto
};
