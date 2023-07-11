import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import Layout from "../layout/Layout"



const formulario = () => {

    const 
    { 
        area,setArea,
        titulo,setTitulo,
        enlace,setEnlace,
        maquina,setMaquina,
        tipo,setTipo,
        AgregarReporte

    } = useCombustible()



    const [options, setOptions] = useState([]);
    const [options01, setOptions01] = useState([]);


    useEffect(() => {
        fetch('/api/area')
          .then(response => response.json())
          .then(data => setOptions(data))
          .catch(error => console.log(error));
    },  []);

    useEffect(() => {
        fetch('/api/maquinas')
            .then(response => response.json())
            .then(data => setOptions01(data))
            .catch(error => console.log(error));
    },  []);


    const comprobarPedido = useCallback(() => {
        return tipo === "" || tipo.length <1;
        
    },[tipo])
    
    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])


  return (
        <>
            <Layout pagina='Reporta'>

                <form
                    onSubmit={AgregarReporte}
                    className="bg-white p-4 rounded-md shadow grid grid-cols-1"
                >

                    <div className='grid grid-cols-1 pb-5'>
                        <label htmlFor="titulo" className="font-bold">Descripcion</label>
                        <textarea
                        className='border rounded-md'
                        id="titulo"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        />
                    </div>


                    <div className='py-5'>
                        <label htmlFor="foto" className="file-label font-bold">Area</label>
                        <select
                            id="area"
                            className="bg-gray-50 w-full p-2 rounded-md"
                            value={area}
                            onChange={e => setArea(e.target.value)}
                            >
                            <option value="">-</option>
                            {options.map(option => (
                                <option key={option.value} value={option.value}>{option.nombre}</option>
                            ))}
                        </select>   
                    </div>

                    <div className='py-5'>
                        <label htmlFor="foto" className="file-label font-bold">Maquina</label>
                        <select
                            id="maquina"
                            className="bg-gray-50 w-full p-2 rounded-md"
                            value={maquina}
                            onChange={e => setMaquina(e.target.value)}
                            >
                            <option value="">-</option>
                            {options01.map(option => (
                                <option key={option.value} value={option.value}>{option.nombre}</option>
                            ))}
                        </select> 
                    </div>


                    <div className='py-5'>
                        <label htmlFor="foto" className="file-label font-bold">Tipo</label>
                        <select
                            id="tipo"
                            className="bg-gray-50 w-full p-2 rounded-md"
                            value={tipo}
                            onChange={e => setTipo(e.target.value)}
                        >
                            <option value="">-</option>
                            <option value="Incidente">Incidente</option>
                            <option value="Condicion">Condicion</option>
                        </select>
                    </div>


                    <button className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-lime-400 hover:bg-lime-500'}  lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`} disabled={comprobarPedido()} type="submit">📸 Agregar Evidencia 📸</button>

                   
                    
                </form>
            </Layout>
        </>
    )
}

export default formulario