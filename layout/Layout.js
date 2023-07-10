import Head from "next/head";
import Image from "next/image";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";



// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     width: '390px',
//     height: '350px',
//     maxWidth: '100%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

export default function AdminLayout({ children, pagina }) {
  
  return (
    <>
      <Head>
        <title>AGRIFOR -- {pagina}</title>
        <meta name="description" content="Prevencion" />
      </Head>

      <div className="">
            <aside className="px-6 p-2">
            <Image
                    className="m-auto"
                    width={230}
                    height={80}
                    src="/uploads/AGRF.png"
                    alt="imagen logotipo"
                /> 
                      
            </aside>

            

            <main className="">
                <div className="px-6">
                  
                    {children}
                </div>
            </main>
      </div>
      
      {/* <ToastContainer /> */}

      
    </>
  );
}