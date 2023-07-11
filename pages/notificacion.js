import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../layout/Layout';

const Notificacion = () => {
  const [mensaje, setMensaje] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setMensaje('Felicitaciones, enviado');
    }, 2000);
  }, []);


  useEffect(() => {
    setTimeout(() => {
      setEmoji('😁');
    }, 2000);
  }, []);

  return (
    <Layout pagina="Reporta">
      <div className="flex flex-col items-center">
        {mensaje ? (
          <div className="text-green-500 text-3xl animate-typewriter">{mensaje}</div>
        ) : (
          <div className="text-gray-500 text-3xl animate-pulse font-bold">Enviando reporte...</div>
        )}

        <div className='p-5'></div>

        {emoji ? (
          <div className="text-green-500 animate-typewriter text-9xl">{emoji}</div>
        ) : (
          <div className="text-gray-500 animate-pulse font-bold text-9xl">🙄</div>
        )}

        <div className='p-10'></div>
        <div className='bg-lime-400 hover:bg-lime-500 lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center'>
            <Link href="/formulario">Generar Nuevo Reporte</Link>
        </div>
        <div className='pb-20'></div>
      </div>
    </Layout>
  );
};

export default Notificacion;
