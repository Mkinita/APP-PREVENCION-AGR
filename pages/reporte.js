import LayoutAdmin from '../layout/LayoutAdmin'
import Reportes from '../components/Reportes'
import useSWR from 'swr'
import axios from 'axios'  



const reporte = () => {

    const fetcher = () => axios('/api/reporte').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/reporte',fetcher,{refreshInterval: 100} )

  return (
    <>
    <LayoutAdmin pagina={`Reportes`}>
        <h1 className="text-2xl font-black text-center py-8">Reportes</h1>
        <p className="text-2xl my-5"></p>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-3'>
            {data && data.length ? data.map(registro =>
                <div className=''>
                    <Reportes
                        key={registro.id}
                        registro={registro}
                    />
                </div>
                ):<p className='text-center'>No Hay Reportes Pendientes</p>}
        </div>

        
    </LayoutAdmin>
    </>
  )
}

export default reporte