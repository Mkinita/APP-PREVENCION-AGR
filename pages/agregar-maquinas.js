import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import LayoutAdmin from "../layout/LayoutAdmin"



export default function Pedido() {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch('/api/area')
          .then(response => response.json())
          .then(data => setOptions(data))
          .catch(error => console.log(error));
    }, []);
      


    


    const 
    { 
        AgregarMaquina,
        nombre,setNombre,
        area,setArea

    } = useCombustible()


    const comprobarPedido = useCallback(() => {
        return area === "" || area.length <5;
        
    },[area])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])


    



   return (
        
        <LayoutAdmin pagina='Agregar Maquina'>

            <h1 className="text-2xl font-black text-center">Agregar Maquina</h1>
            <p className="text-2xl my-10"></p>

            <div class="container mx-auto">

                <form 
                    onSubmit={AgregarMaquina}
                    class="text-center"
                >
                    
                    <div class="grid grid-cols-1 md:grid-cols-2  gap-2">
                                
                        <div className="bg-gray-200 p-2 rounded-lg shadow-lg">
                            <div className="bg-white p-2 rounded-md shadow">
                                
                                <div>
                                    <h1 className="text-lg">➕</h1>
                                    <label for="ingreso" class="block text-lg font-medium text-gray-700 mb-1">Nombre</label>
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={nombre} onChange={e => setNombre(e.target.value)} />
                                    </div> 
                                    <div className="mt-6">
                                
                                    
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-200 p-2 rounded-lg shadow-lg">
                            <div className="bg-white p-2 rounded-md shadow pb-8">
                                
                                <div>
                                    <h1 className="text-lg">➕</h1>
                                    <label 
                                    htmlFor="area"
                                    className="block text-lg font-medium text-gray-700 mb-1">Area</label>
                                    <select
                                        id="area"
                                        className="bg-gray-200 w-full p-2 rounded-md"
                                        value={area}
                                        onChange={e => setArea(e.target.value)}
                                        >
                                        <option value="">-</option>
                                        {options.map(option => (
                                            <option key={option.value} value={option.value}>{option.nombre}</option>
                                        ))}
                                    </select>

                                
                                </div>

                            </div>
                        </div>


                        
                                
                    </div>

                    <div class="grid grid-cols-1 gap-4 w-1/2 m-auto py-5">

                        <input
                            type="submit"
                            className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-lime-400 hover:bg-lime-500'}  lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                            value="Ingresar"
                            disabled={comprobarPedido()}
                                                
                        />

                    </div>
                </form> 
            </div>
        </LayoutAdmin>
        
        
   )
}