import { useEffect, useCallback, useState } from 'react';
import Layout from "../layout/Layout"

export default function Home() {
  const [titulo, setTitulo] = useState('');
  const [foto, setFoto] = useState('');
  const [area, setArea] = useState('');
  const [maquina, setMaquina] = useState('');
  const [tipo, setTipo] = useState('');

  const [options, setOptions] = useState([]);
  const [options01, setOptions01] = useState([]);

  useEffect(() => {
        fetch('/api/area')
          .then(response => response.json())
          .then(data => setOptions(data))
          .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch('/api/maquinas')
      .then(response => response.json())
      .then(data => setOptions01(data))
      .catch(error => console.log(error));
}, []);

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleMaquinaChange = (e) => {
    setMaquina(e.target.value);
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleTipoChange = (e) => {
    setTipo(e.target.value);
  };

  const handleFotoChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('area', area);
    formData.append('maquina', maquina);
    formData.append('tipo', tipo);
    formData.append('foto', foto);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Registro guardado correctamente');
      window.location.reload(); // Resetear la página
    } else {
      console.error('Error al guardar el registro');
    }
  };
  

  const comprobarPedido = useCallback(() => {
    return tipo === "" || tipo.length <1;
    
  },[tipo])

  useEffect(() => {
    comprobarPedido()
  },[comprobarPedido])



  return (
    <>
      <Layout pagina='Reporta'>
        <div>
          
          <form className='bg-white p-4 rounded-md shadow grid grid-cols-1' onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 pb-5'>
            <label htmlFor="titulo">Descripcion</label>
            <textarea
              className='border rounded-md'
              id="titulo"
              value={titulo}
              onChange={handleTituloChange}
            />
          </div>

            <label htmlFor="foto" className="file-label">Evidencia 📸</label>
            <div className='border rounded-md p-8' style={{ position: 'relative' }}>
              <input
                type="file"
                id="foto"
                onChange={handleFotoChange}
                style={{ display: 'none' }}
              />
              
              {foto && (
                <img
                  src={URL.createObjectURL(foto)}
                  alt="Vista previa de la imagen"
                  style={{ maxWidth: '100px', marginTop: '10px', }}
                />
              )}
            </div>

            <div className='py-3'>
              <label htmlFor="foto" className="file-label">Area</label>
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

            <div className='py-3'>
              <label htmlFor="foto" className="file-label">Maquina</label>
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

                <div className='py-3'>
              <label htmlFor="foto" className="file-label">Tipo</label>
                    <select
                        id="tipo"
                        className="border bg-gray-50 w-full lg:w-3/4 p-2 rounded-md"
                        value={tipo}
                        onChange={handleTipoChange}
                    >
                        <option value="">-</option>
                        <option value="Incidente">Incidente</option>
                        <option value="Condicion">Condicion</option>
                    </select>
                
                </div>

            <button className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-lime-400 hover:bg-lime-500'}  lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`} disabled={comprobarPedido()} type="submit">Enviar</button>
          </form>
        </div>
      </Layout>
    </>
  );
}
