import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){
    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        const {nombre} = req.body
        

        const areaActualizada = await prisma.area.update({
            where: { id: parseInt(id) },
            data: {nombre: nombre},
          })

        res.status(200).json(areaActualizada)
    }
}
