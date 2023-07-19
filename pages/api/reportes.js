import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const reportes = await prisma.reporte.findMany({
    where: {
      estado:false
  }
  })

  res.status(200).json(reportes);
  
  //Crear saldoes
  if (req.method === "POST") {
    const reporte = await prisma.reporte.create({
      data: {
        titulo: req.body.titulo,
        enlace: req.body.enlace,
        area: req.body.area,
        maquina: req.body.maquina,
        tipo: req.body.tipo,
      },
    });
    res.json(reporte);
  }
}