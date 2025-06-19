import mongoose from "mongoose"; // Mongoose para conectar ao Mongo

// Conecta ao MongoDB e trata erros
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://mongo:27017/encurtador");
    console.log("MongoDB conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar no MongoDB:", error);
    process.exit(1); // Encerra o processo em caso de falha
  }
};
