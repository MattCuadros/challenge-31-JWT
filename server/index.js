import * as dotenv from "dotenv";

dotenv.config();
import express from "express";
import cors from "cors";
import format from "pg-format";
import { pool } from "./db/query.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor listo en http://localhost:" + PORT);
});

/* Rutas */

app.post("/usuarios", async (req, res) => {
  const { email, password, role, language } = req.body;
  console.log(req.body);
  try {
    /* Inserción SQL */
    if (!email || !password || !role || !language) {
      throw res.json({
        ok: false,
        msg: "Ingrese todos los datos",
      });
    } else {
      const text =
        "INSERT INTO usuarios (email, password, role, language) VALUES ( $1, $2, $3, $4 ) RETURNING *";
      const values = [email, password, role, language];

      const { rows } = await pool.query(text, [values]);
      return rows;
    }
  } catch (error) {
    console.log(error);
  }
});
