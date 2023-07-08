import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const CombustibleContext = createContext()


const CombustibleProvider = ({children}) => {

    const router = useRouter()

    const [nombre, setNombre] = useState('')
    const [area, setArea] = useState('')

    const AgregarArea = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/area',{nombre})
            // Resetear la app
            setNombre('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/listado-areas')
            },2000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }


    const AgregarMaquina = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/maquinas',{nombre,area})
            // Resetear la app
            setNombre('')
            setArea('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/listado-maquinas')
            },2000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }
    



    return(
        <CombustibleContext.Provider
        value={{
            nombre,setNombre,
            area,setArea,
            AgregarArea,
            AgregarMaquina
        }}
        
        
        >
            {children}
        </CombustibleContext.Provider>
    )
}
export {
    CombustibleProvider
}


export default CombustibleContext