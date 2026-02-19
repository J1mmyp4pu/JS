const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir los archivos estáticos de la carpeta "public"
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});