import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const reportes = await prisma.reporte.findMany({
    where: {
      tipo:'Incidente'
    }
  })

  res.status(200).json(reportes);
  
  
  
}