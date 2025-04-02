import "dotenv/config"
import express from "express";

const app = express();
const {PORT} = process.env;

app.get('/', (req, res) => {
 res.json('Olá mundo')
})

app.listen(3001, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
});

