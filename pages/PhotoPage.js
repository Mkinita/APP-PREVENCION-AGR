import useSWR from 'swr'
import axios from 'axios'
import ImageDisplay from '../components/ImageDisplay'
import React, { useState, useEffect } from 'react';






export default function AdminProducciones() {

  const fetcher = () => axios('/api/imagenes').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/imagenes',fetcher,{refreshInterval: 100} )



  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

    
  const [data1, setData1] = useState([]);
    useEffect(() => {
      async function fetchData() {
      const response1 = await fetch('/api/imagenes');
      const data1 = await response1.json();
      setData1(data1);
    }

    fetchData();
  }, []);


  //función para traer los datos de la API
  const URL = '/api/imagenes'
  
  const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setUsers(data)
    }   
     //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
  //  metodo de filtrado 2   
  const results = !search ? users : users.filter((dato)=> JSON.stringify(dato.foto).toLowerCase().includes(search.toLowerCase()))
   useEffect( ()=> {
    showData()
  }, [])


  
 


  return(
    <>
      <p className="text-2xl my-10"></p>
      <div className='flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-black text-center">ImageDisplay</h2>
        <input value={search} onChange={searcher} type="text" placeholder='Filtrar Por Fecha 🔍' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 
      </div>


           

          {data && data.length ? results.map(producciones =>
            <ImageDisplay
              key={producciones.id}
              producciones={producciones} 
            />
            ):
            <p className='text-center m-10'>Sin Produccion</p>
          }

            
</>
  ) 
}
