const express = require('express');

const app = express();

app.use('/uploads', express.static('./public/uploads'));

const PORT = process.env.PORT || 5486;

app.listen(PORT);
console.log('funcionando en el puerto', PORT);
