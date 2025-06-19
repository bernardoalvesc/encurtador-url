import mongoose from "mongoose"; // Importa o mongoose para trabalhar com MongoDB

export interface UrlDoc extends mongoose.Document {
  // Interface que define os campos de um documento URL
  id: string; // ID encurtado
  original: string; // URL original
}

const UrlSchema = new mongoose.Schema({
  // Define o esquema do MongoDB
  id: { type: String, unique: true }, // Campo único para não repetir URLs encurtadas
  original: String, // URL original que será redirecionada
});

export const Url = mongoose.model<UrlDoc>("Url", UrlSchema); // Exporta o modelo para uso no controller
