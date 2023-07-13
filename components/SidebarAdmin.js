import Link from "next/link"
import { useEffect, useCallback, useState } from "react"

export const SidebarAdmin = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
        
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
    };


    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };


    const toggleVisibility3 = () => {
        setIsVisible3(!isVisible3);
    };

    const toggleVisibility4 = () => {
        setIsVisible4(!isVisible4);
    };

    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const date = new Date();
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        setCurrentMonth(monthNames[date.getMonth()]);
    }, []);



    return (

        <div className="px-3 py-4 overflow-y-auto rounded bg-white">
            <ul className="space-y-2">


                <li>
                <button
                    className="w-full flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase"
                    onClick={toggleVisibility4}
                                    
                    >
                    {isVisible4 ? '➖ Area' : '🔧 Area'}
                    </button>
                                
                        
                    <div className="">
                    
                        {isVisible4 && (
                            <div className="p-2 space-y-1">

                                <Link href="/agregar-area" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                                    ➕
                                    <span className="ml-3">Agregar</span>
                                </Link>

                                <Link href="/listado-areas" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                                    📋
                                    <span className="ml-3">listado</span>
                                </Link>
                        
                            </div>
                    
                        )}

                    </div>
                </li>


        


                <li>
                    <button
                        className="w-full flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase"
                        onClick={toggleVisibility1}               
                    >
                    
                    {isVisible1 ? '➖ Maquinas' : '🔧 Maquinas'}
                    </button>

                                
                        
                    <div className="">
                    
                        {isVisible1 && (
                            <div className="p-2 space-y-1">

                                <Link href="/agregar-maquinas" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                                    ➕
                                    <span className="ml-3">Agregar</span>
                                </Link>

                                <Link href="/listado-maquinas" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                                    📋
                                    <span className="ml-3">Listado</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </li>
                <li>
                    <Link href="/reporte" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                        🤳
                        <span className="ml-3">Reportes</span>
                    </Link>
                </li>
                <li>
                    <Link href="/admin" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                        🏠
                        <span className="ml-3">Inicio</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
  }
  
  
  export default SidebarAdmin