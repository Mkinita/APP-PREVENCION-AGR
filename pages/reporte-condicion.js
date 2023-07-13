import LayoutAdmin from '../layout/LayoutAdmin'
import Reportes from '../components/Reportes'
import useSWR from 'swr'
import axios from 'axios'  



const reporte = () => {

    const fetcher = () => axios('/api/condicion').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/condicion',fetcher,{refreshInterval: 100} )


  return (
    <>
    <LayoutAdmin pagina={`Reportes-condicion`}>
        <h1 className="text-2xl font-black text-center py-2">Reportes</h1>
        <p className="text-2xl my-5"></p>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-3'>
            {data && data.length ? data.map(reporte =>
                <div key={reporte.id} className=''>
                    <Reportes
                        reporte={reporte}
                    />
                </div>
            ): <p className='text-center'>No Hay Reportes Pendientes</p>}

        </div>

        
    </LayoutAdmin>
    </>
  )
}

export default reporte