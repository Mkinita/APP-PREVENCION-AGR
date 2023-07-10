const express = require('express');
const next = require('next');
const { join } = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Sirve los archivos estáticos desde la carpeta "public"

  server.use('/uploads', express.static(join(__dirname, 'public/uploads')));


  // Maneja todas las demás rutas usando Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Inicia el servidor
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});

