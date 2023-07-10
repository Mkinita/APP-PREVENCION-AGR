const express = require('express');

const app = express();

app.use('/uploads', express.static('./public/uploads'));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log('funcionando en el puerto', PORT);
