import express from 'express';
require('dotenv').config()

import './database/conection'
import routes from './routes'

const app = express();
app.use(express.json());
app.use(routes);
let PORT = process.env["PORT"];

console.log(`Porta de acesso: (${PORT})
Endereço de acesso: http://localhost:${PORT}`)

app.listen(PORT);