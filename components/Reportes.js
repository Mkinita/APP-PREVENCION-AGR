import {formatiarFecha} from "helpers/fecha"
import useCombustible from '../hooks/useCombustible';



const OrdenGeneral = ({registro}) => {

    const {id,titulo,createdAt,area,maquina,tipo,foto} = registro
   
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
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="bg-white border-b hover:bg-lime-300 text-sm">
                                    <td className="px-6 py-4 w-1/12 text-center border border-lime-400">{formatiarFecha(createdAt)}</td>
                                    <td className="px-6 py-4 w-2/3 text-center border border-lime-400">{titulo}</td>
                                    <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{area}</td>
                                    <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{maquina}</td>
                                    <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{tipo}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

                <div className="">
                    <h3 className="text-xl font-bold pb-1"></h3>
                    <img src={`/uploads/${foto}`} alt="Imagen" className="m-auto"/>
                </div>
            </div>  
      </div>
    </>
  )
}

export default OrdenGeneral