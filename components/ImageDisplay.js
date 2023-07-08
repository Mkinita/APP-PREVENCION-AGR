import React from 'react';

const ListadoProduccion = ({ producciones }) => {
  const { foto } = producciones;

  return (
    <>
      <table className="table-auto w-full text-center bg-white text-gray-700">
        <tbody>
          <tr className="bg-white border-b hover:bg-lime-300 text-sm">
            <td className="px-2 py-4 w-1/5 text-center border border-lime-400">
              <img src={`/uploads/${foto}`} alt="Imagen" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListadoProduccion;
