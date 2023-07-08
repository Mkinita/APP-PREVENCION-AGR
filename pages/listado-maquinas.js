import LayoutAdmin from '../layout/LayoutAdmin'
import ListadoMaquinas from '../components/ListadoMaquinas'
import {useState, useEffect} from 'react'



export default function Solicitud() {

  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = '/api/maquinas'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
   //metodo de filtrado 2   
   const results = !search ? users : users.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])

  return (
    <LayoutAdmin pagina={`Proveedores`}>
        <p className='text-2xl mx-5 my-3 font-bold py-8'>Listado De Maquinas</p>
        <div className='mt-auto'>
            <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='text-gray-700  text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
        </div>
        <div className='px-6'>  
            <table className="table-auto w-full text-center bg-white text-gray-700">
                <tbody>
                    <tr className="bg-white text-black uppercase font-bold text-lg">
                        <td className="px-6 py-4 w-1/6 text-center">Nombre</td>
                        <td className="px-6 py-4 w-1/6 text-center">Area</td>
                        <td className="px-6 py-4 w-1/12 text-center">Editar ✏️</td>
                    </tr>
                </tbody>
            </table> 
            {results.map(maquina=>(
            <ListadoMaquinas key={maquina.id} maquina={maquina}/>
            ))}
      </div>
    </LayoutAdmin>
  )
}