const OrdenGeneral = ({reporte}) => {

    const {id,nombre,area} = reporte

    
   
  return (
   
    <>
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <tbody>
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="w-1/2 py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{nombre}</td>
                                <td class="w-1/2 py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{area}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>              
    </>
  )
}

export default OrdenGeneral