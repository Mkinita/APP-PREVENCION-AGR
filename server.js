// const express = require('express');
// const next = require('next');
// const { join } = require('path');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   // Sirve los archivos estáticos desde la carpeta "public"

//   server.use('/uploads', express.static(join(__dirname, 'public/uploads')));


//   // Maneja todas las demás rutas usando Next.js
//   server.all('*', (req, res) => {
//     return handle(req, res);
//   });

//   // Inicia el servidor
//   server.listen(3000, (err) => {
//     if (err) throw err;
//     console.log('> Ready on http://localhost:3000');
//   });
// });


const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de Multer para almacenar los archivos en la carpeta 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  }
});

const upload = multer({ storage: storage });

// Configuración de Express para servir archivos estáticos y analizar formularios
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para manejar la carga de archivos
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se ha proporcionado una imagen.');
  }

  res.send('¡Imagen subida correctamente!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});



