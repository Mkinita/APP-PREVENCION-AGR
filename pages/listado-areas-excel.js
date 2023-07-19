import LayoutAdmin from '../layout/LayoutAdmin'
import ListadoAreasExcel from '../components/ListadoAreasExcel'
import useSWR from 'swr'
import axios from 'axios' 
import * as XLSX from 'xlsx'; 



const reporte = () => {

    const fetcher = () => axios('/api/area').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/area',fetcher,{refreshInterval: 100} )


    const exportTo = (orden) => {
        const ws = XLSX.utils.json_to_sheet(orden)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Listado')
        XLSX.writeFile(wb, 'listado-areas.xlsx')
    }


  return (
    <>
    <LayoutAdmin pagina={`Areas`}>
        <h1 className="text-2xl font-black text-center py-2">Listado Areas</h1>
        <p className="text-2xl my-5"></p>
        <div className=''>
            {data && data.length ? data.map(reporte =>
                <div key={reporte.id} className=''>
                    <ListadoAreasExcel
                        reporte={reporte}
                    />
                </div>
            ): <p className='text-center'>No Hay Areas</p>}

        </div>
        <div  className="text-center m-10">
            <button className='p-1 hover:scale-110' onClick={() => exportTo(data)}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"><rect width="16" height="9" x="28" y="15" fill="#21a366"></rect><path fill="#185c37" d="M44,24H12v16c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V24z"></path><rect width="16" height="9" x="28" y="24" fill="#107c42"></rect><rect width="16" height="9" x="12" y="15" fill="#3fa071"></rect><path fill="#33c481" d="M42,6H28v9h16V8C44,6.895,43.105,6,42,6z"></path><path fill="#21a366" d="M14,6h14v9H12V8C12,6.895,12.895,6,14,6z"></path><path d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z" opacity=".05"></path><path d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C25.333,34.603,23.936,36,22.213,36z" opacity=".07"></path><path d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z" opacity=".09"></path><linearGradient id="flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1" x1="4.725" x2="23.055" y1="14.725" y2="33.055" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#18884f"></stop><stop offset="1" stop-color="#0b6731"></stop></linearGradient><path fill="url(#flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1)" d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"></path><path fill="#fff" d="M9.807,19h2.386l1.936,3.754L16.175,19h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,29H9.526	l3.193-5.018L9.807,19z"></path></svg>
            </button>
        </div>
    </LayoutAdmin>
    </>
  )
}

export default reporte