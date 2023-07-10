import multer from 'multer';
import { join } from 'path';

// Configuración de Multer para guardar los archivos en "public/uploads"
const storage = multer.diskStorage({
  destination: join(process.cwd(), './public/uploads'),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadMiddleware = multer({ storage });

export default uploadMiddleware;
