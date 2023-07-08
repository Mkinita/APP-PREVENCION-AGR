import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const areas = await prisma.area.findMany({
  })

  res.status(200).json(areas);
  
  //Crear saldoes
  if (req.method === "POST") {
    const area = await prisma.area.create({
      data: {
        nombre: req.body.nombre,
      },
    });
    res.json(area);
  }
}