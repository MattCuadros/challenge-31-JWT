import * as dotenv from "dotenv";

dotenv.config();
import express from "express";
import cors from "cors";
import { pool } from "./db/query.js";
import morgan from "morgan";
import { handleErrors } from "./db/handleErrors.js";

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

      const { rows } = await pool.query(text, [email, password, role, language]);
      return res.status(201).json({
        ok:true,
        data:rows[0],
        msg:"Usuario registrado satisfactoriamente"
      });
    }
  } catch (error) {
    console.log(error);
    const { status, message } = handleErrors(error.code);
    return res.status(status).json({ ok: false, message });
  }
});
