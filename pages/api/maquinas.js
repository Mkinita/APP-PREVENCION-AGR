import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const maquinas = await prisma.maquina.findMany({
  })

  res.status(200).json(maquinas);
  
  //Crear saldoes
  if (req.method === "POST") {
    const maquina = await prisma.maquina.create({
      data: {
        nombre: req.body.nombre,
        area: req.body.area
      },
    });
    res.json(maquina);
  }
}