import axios from 'axios';
import Image from 'next/image';

const Equipos = ({ propiedades }) => {
  return (
    <div>
      <h1>propiedades</h1>
      {propiedades.map((propiedad) => (
        <div key={propiedad.id}>
          <h2>{propiedad.imagen}</h2>
          <img src={`/${propiedad.imagen}`} alt={`Imagen Propiedad ${propiedad.titulo}`} />
          <div className="w-32">
                        <Image
                            width={400}
                            height={500}
                            src={`/uploads/${propiedad.imagen}`}
                            alt={`${propiedad.titulo}`}
                            
                        />
                    </div>

        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get('https://socal-production.up.railway.app/equipos');
    const propiedades = response.data;
    return {
      props: { propiedades },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { propiedades: [] },
    };
  }
}

export default Equipos;
