import * as dotenv from "dotenv";

dotenv.config();
import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor listo en http://localhost:" + PORT);
});
