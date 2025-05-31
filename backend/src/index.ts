import express, { RequestHandler } from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/encurtador");

interface UrlDoc extends mongoose.Document {
  id: string;
  original: string;
}

const UrlSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  original: String,
});

const Url = mongoose.model<UrlDoc>("Url", UrlSchema);

// Rota para encurtar URLs
app.post("/api/shorten", async (req, res) => {
  const urls: string[] = req.body.urls || [];
  const results = await Promise.all(
    urls.map(async (original) => {
      const id = Math.random().toString(36).substring(2, 9);
      const shortened = `http://localhost:8080/r/${id}`;
      await Url.create({ id, original });
      return { original, shortened };
    })
  );
  res.json({ results });
});

// Rota para redirecionar links encurtados
const redirectHandler: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const url = await Url.findOne({ id });
    if (url) {
      res.redirect(url.original);
    } else {
      res.status(404).send("URL não encontrada");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro interno");
  }
};

app.get("/r/:id", redirectHandler);

app.listen(PORT, () => {
  console.log(`Backend pronto na porta ${PORT}`);
});
