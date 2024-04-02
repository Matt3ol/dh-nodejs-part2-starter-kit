import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "./controllers/planets.js";

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(morgan("dev"));

// ottenere tutti i pianeti
app.get("/api/planets", getAll);

// ottenere un pianeta specifico
app.get("/api/planets/:id", getOneById);

// aggiunge un nuovo pianeta
app.post("/api/planets", create);

// modifica un pianeta
app.put("/api/planets/:id", updateById);

// elimina un pianeta
app.delete("/api/planets/:id", deleteById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});