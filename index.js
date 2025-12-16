import express from "express";
import path from 'path';
import routes from "./routes/routes.js";

const app = express()

import { fileURLToPath } from "url";
import CheckTime from "./controllers/CheckTime.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(express.urlencoded({ extended: true })
);
app.use(express.static(path.join(__dirname, "publics")))

app.set('view engine', 'ejs')

app.set("views", path.join(__dirname, "views"))

app.use(CheckTime)

app.use(routes)

app.listen(3500, () => {
  console.log("serveur Demarrer sur le port 3500")
})
