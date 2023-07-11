import {formatiarFecha} from "helpers/fecha"
import useCombustible from '../hooks/useCombustible';
import { useRouter } from 'next/router';




const OrdenGeneral = ({registro}) => {

    const {id,titulo,createdAt,area,maquina,tipo,enlace} = registro

    const router = useRouter();

    const redirectToEnlace = () => {
      const enlaces = `${enlace}`;
      router.push(enlaces);
    };
   
  return (
   
    <>
      <div className='border shadow'>
      
            <div className="border p-2 space-y-2 grid-cols-1 md:grid-cols-1 py-8 pb-8">
                <div className='text-center'>
                    <h3 className="text-xl font-bold pb-8">Reporte Nº {id}</h3>
                    <div className='text-center'>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full text-center bg-white text-gray-700">
                                <thead className="text-center font-bold text-black">
                                <tr>
                                    <th>Fecha</th>
                                    <th>Descripción</th>
                                    <th>Área</th>
                                    <th>Máquina</th>
                                    <th>Tipo</th>
                                    <th>Img</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="bg-white border-b hover:bg-lime-300 text-sm">
                                    <td className="px-6 py-4 w-1/12 text-center border border-lime-400">{formatiarFecha(createdAt)}</td>
                                    <td className="px-6 py-4 w-2/3 text-center border border-lime-400">{titulo}</td>
                                    <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{area}</td>
                                    <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{maquina}</td>
                                    <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{tipo}</td>
                                    <td className="px-6 py-4 w-1/6 text-center border border-lime-400">
                                        <button onClick={redirectToEnlace}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

                
            </div>  
      </div>
    </>
  )
}

export default OrdenGeneral