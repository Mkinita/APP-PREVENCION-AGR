import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const secados = await prisma.registro.findMany({

      
  })

  res.status(200).json(secados);

}