import {useState, useEffect} from 'react'
import LayoutAdmin from "../layout/LayoutAdmin"
import Link from 'next/link'
import useSWR from 'swr'
import axios from 'axios'  

const admin = () => {

  const [reportes, setReportes] = useState(0);
  const fetcher = () => axios('/api/reportes').then(datos => datos.data);
  const { data, error, isLoading } = useSWR('/api/reportes', fetcher, { refreshInterval: 100 });
  useEffect(() => {
    if (data) {
      setReportes(data.length);
    }
  }, [data]);

  const [condiciones, setCondiciones] = useState(0);
  const fetchercondicion = () => axios('/api/condicion').then(datos => datos.data);
  const { data:datacondicion, error:errorcondicion, isLoading:isLoadingconsicion } = useSWR('/api/condicion', fetchercondicion, { refreshInterval: 100 });
  useEffect(() => {
    if (datacondicion) {
      setCondiciones(datacondicion.length);
    }
  }, [datacondicion]);

  const [incidente, setIncidente] = useState(0);
  const fetcherincidente = () => axios('/api/incidente').then(datos => datos.data);
  const { data:dataincidente, error:errorincidente, isLoading:isLoadingincidente } = useSWR('/api/incidente', fetcherincidente, { refreshInterval: 100 });
  useEffect(() => {
    if (dataincidente) {
      setIncidente(dataincidente.length);
    }
  }, [dataincidente]);


  const [pendiente, setPendiente] = useState(0);
  const fetcherpendiente = () => axios('/api/pendiente').then(datos => datos.data);
  const { data:datapendiente, error:errorpendiente, isLoading:isLoadingpendiente } = useSWR('/api/pendiente', fetcherpendiente, { refreshInterval: 100 });
  useEffect(() => {
    if (datapendiente) {
      setPendiente(datapendiente.length);
    }
  }, [datapendiente]);

  const [resuleto, setResulto] = useState(0);
  const fetcherresuleto = () => axios('/api/resuleto').then(datos => datos.data);
  const { data:dataresuleto, error:errorresuleto, isLoading:isLoadingresuleto } = useSWR('/api/resuleto', fetcherresuleto, { refreshInterval: 100 });
  useEffect(() => {
    if (dataresuleto) {
      setResulto(dataresuleto.length);
    }
  }, [dataresuleto]);



  const [currentEmoji, setCurrentEmoji] = useState('✔️');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji(prevEmoji => prevEmoji === '✔️' ? '❌' : '✔️');
    }, 1500);

    return () => clearInterval(interval);
  }, []);


   

  return (
    <>
      <LayoutAdmin pagina='Admin'>
         <div  className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
               <div className="flex items-center">
                  <div className="flex-shrink-0">
                     <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Reportes</span>
                     <Link href="/reporte" className="">
                        <h3 className="text-base font-normal text-gray-500">Revisar</h3>
                     </Link>
                  </div>
                  <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 font-bold text-2xl">
                     {reportes}
                  </div>
               </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
               <div className="flex items-center">
                  <div className="flex-shrink-0">
                     <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Listado</span>
                     <div className='grid grid-cols-3 gap-1'>
                        <div>
                           <Link href="/listado-reporte">
                              <h3 className="text-base font-normal text-gray-500">Reportes</h3>
                           </Link>
                        </div>
                        <div>
                           <Link href="/listado-areas-excel">
                              <h3 className="text-base font-normal text-gray-500">Areas</h3>
                           </Link>
                        </div>
                        <div>
                           <Link href="/listado-maquinas-excel">
                              <h3 className="text-base font-normal text-gray-500">Maquinas</h3>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 font-bold text-2xl">
                     <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"><rect width="16" height="9" x="28" y="15" fill="#21a366"></rect><path fill="#185c37" d="M44,24H12v16c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V24z"></path><rect width="16" height="9" x="28" y="24" fill="#107c42"></rect><rect width="16" height="9" x="12" y="15" fill="#3fa071"></rect><path fill="#33c481" d="M42,6H28v9h16V8C44,6.895,43.105,6,42,6z"></path><path fill="#21a366" d="M14,6h14v9H12V8C12,6.895,12.895,6,14,6z"></path><path d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z" opacity=".05"></path><path d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C25.333,34.603,23.936,36,22.213,36z" opacity=".07"></path><path d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z" opacity=".09"></path><linearGradient id="flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1" x1="4.725" x2="23.055" y1="14.725" y2="33.055" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#18884f"></stop><stop offset="1" stop-color="#0b6731"></stop></linearGradient><path fill="url(#flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1)" d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"></path><path fill="#fff" d="M9.807,19h2.386l1.936,3.754L16.175,19h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,29H9.526	l3.193-5.018L9.807,19z"></path></svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4'>
            <div  className="mt-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
               <div className="bg-white shadow rounded-lg p-2 sm:p-3 xl:p-4 ">
                  <div className="flex items-center">
                     <div className="flex-shrink-0">
                        <span className="text-2xl sm:text-lg leading-none font-bold text-gray-900">Incidente</span>
                        <Link href="/reporte-condicion" className="">
                           <h3 className="text-base font-normal text-gray-500">Revisar</h3>
                        </Link>
                     </div>
                     <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-2xl font-bold">
                        {condiciones}
                     </div>
                  </div>
               </div>
               <div className="bg-white shadow rounded-lg p-2 sm:p-3 xl:p-4 ">
                  <div className="flex items-center">
                     <div className="flex-shrink-0">
                        <span className="text-2xl sm:text-lg leading-none font-bold text-gray-900">Condicion</span>
                        <Link href="/reporte-incidente" className="">
                           <h3 className="text-base font-normal text-gray-500">Revisar</h3>
                        </Link>
                     </div>
                     <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-2xl font-bold">
                        {incidente}
                     </div>
                     </div>
                  </div>
               </div>
               <div className="mt-4 bg-white shadow rounded-lg p-2 sm:p-3 xl:p-4">
                  <div className="flex items-center">
                     <div className="flex-shrink-0">
                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Estado</span>
                        <Link href="/reporte-pendiente" className="grid grid-cols-2">
                           <h3 className="text-base font-normal text-gray-500 py-5 pb-1">Pendientes </h3>
                           <p className='py-5 pb-1 px-2 text-green-500 font-bold'>{pendiente}</p>
                        </Link>
                        
                        <Link href="/reporte-resuleto" className="grid grid-cols-2">
                           <h3 className="text-base font-normal text-gray-500">Resueltos</h3>
                           <p className=' px-2 text-green-500 font-bold'>{resuleto}</p>
                        </Link>
                     </div>
                     <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 font-bold text-2xl">
                        <div className="">
                           <div className="text-4xl">{currentEmoji}</div>
                        </div>
                  </div>
               </div>
            </div>
         </div>     
      </LayoutAdmin>
    </>
  )
}

export default admin