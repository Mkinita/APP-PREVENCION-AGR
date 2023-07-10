import formidable from 'formidable';
import fs from 'fs-extra';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = './public/uploads'; // Directorio donde se guardarán las fotos

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al procesar la solicitud' });
      }

      const { titulo } = fields;
      const { area } = fields;
      const { maquina } = fields;
      const { tipo } = fields;
      const { foto } = files;

      try {
        const { path, name } = foto;
        const destination = `${form.uploadDir}/${name}`;

        await fs.move(path, destination);

        await prisma.registro.create({
          data: {
            titulo,
            area,
            maquina,
            tipo,
            foto: name,
          },
        });

        res.status(200).json({ message: 'Registro guardado correctamente' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al guardar el registro' });
      }
    });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}



// import { PrismaClient } from '@prisma/client';
// import uploadMiddleware from '../../middleware/uploadMiddleware';

// const prisma = new PrismaClient();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     uploadMiddleware.single('foto')(req, res, async (err) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Error al procesar la solicitud' });
//       }

//       const { titulo, area, maquina, tipo } = req.body;
//       const { filename: foto } = req.file;

//       try {
//         await prisma.registro.create({
//           data: {
//             titulo,
//             area,
//             maquina,
//             tipo,
//             foto,
//           },
//         });

//         res.status(200).json({ message: 'Registro guardado correctamente' });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error al guardar el registro' });
//       }
//     });
//   } else {
//     res.status(405).json({ error: 'Método no permitido' });
//   }
// }

