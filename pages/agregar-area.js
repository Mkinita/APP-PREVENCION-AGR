import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import LayoutAdmin from "../layout/LayoutAdmin"



export default function Pedido() {

    


    const 
    { 
        AgregarArea,
        nombre,setNombre

    } = useCombustible()


    const comprobarPedido = useCallback(() => {
        return nombre === "" || nombre.length <1;
        
    },[nombre])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])



   return (
        
        <LayoutAdmin pagina='Agregar Area'>

            <h1 className="text-2xl font-black text-center">Agregar Areas De Trabajo</h1>
            <p className="text-2xl my-10"></p>

            <div class="container mx-auto">

                <form 
                    onSubmit={AgregarArea}
                    class="text-center"
                >
                    
                    <div class="grid grid-cols-1">
                                
                        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                            <div className="bg-white p-4 rounded-md shadow">
                                
                                <div>
                                    <h1 className="text-lg">➕</h1>
                                    <label for="ingreso" class="block text-lg font-medium text-gray-700 mb-1">Nombre</label>
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={nombre} onChange={e => setNombre(e.target.value)} />
                                    </div> 
                                    <div className="mt-6">
                                
                                    
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