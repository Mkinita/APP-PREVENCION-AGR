import { useState, useEffect } from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';

const OrdenGeneral = ({areas}) => {
    const {id,nombre} = areas

    const [newnombre, setNewNombre] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const 
    {   
      setNombre,
    } = useCombustible();
  
  
    function reloadPage() {
      window.location.reload();
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          await axios.post(`/api/editararea/${id}`, 
          { nombre: newnombre
          });
          setNombre(newnombre);
    
        } catch (error) {
          console.log(error);
        }
    };
    
    useEffect(() => {
        setNewNombre(nombre);
        
      }, [  
          nombre
    ]);


      
      
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    



    
  return (
   
    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                <tr className="bg-white border-b text-sm">
                    <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{nombre}</td>
                    <td className="px-6 py-4 w-1/12 text-center border border-lime-400">
                        <form onSubmit={handleSubmit} className='font-bold text-xs flex'>
                            {isVisible && (
                                <div className="items-center flex-1">
                                    <input className='text-center  h-8 border' type="text" value={newnombre} onChange={(event) => setNewNombre(event.target.value)} />
                                </div>
                            )}
                            <button
                                className="font-bold text-xs p-0 flex-auto"
                                onClick={toggleVisibility}
                            >
                                {isVisible ? <button onClick={reloadPage} type="submit" className='text-center border p-2 rounded-lg bg-lime-300 hover:scale-110'>Guardar</button> : '✏️'}
                            </button>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table> 

        
        
    
    </>
  )
}

export default OrdenGeneral