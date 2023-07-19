import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        

        const reporteActualizado = await prisma.reporte.update({
            where:{
                id: parseInt(id)
            },
            data:{
                estado:true
            }
        })
        res.status(200).json(reporteActualizado)

    }

}