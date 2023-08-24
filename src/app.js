import express, { json } from "express";
import index from "./routes/index.js";
import db from "./config/dbconnect.js";
import projetos from "./routes/projeto.js";
import chalk from "chalk"; 

const app = express();

app.use (json());
app.use ("/", index);
app.use ("/projetos", projetos);

db.on("error", console.log.bind(console, "erro de conexão"));
db.once ("open", () =>{
    console.log(
        chalk.green.bgRgb(180, 180, 180).bold("conexão com o banco feita com sucesso")
    );
});

export default app;