import Carrusel from "../Inicio/Carrusel";
import Titulo from "../Inicio/Titulo";
import Wavy from "../menu/Wavy";

const Home = () => {
    return (//grid grid-cols-1 md:grid-cols-6
        <section className="fondo-stilo flex items-center justify-center h-full ">   
            <div className="grid sm:grid-cols-1 md:grid-cols-10 lg:grid-cols-8  h-[92vh] w-full gap-4 justify-center fix fondo-stilo"> 
                <div className="sm:grid-cols-1 md:col-start-2 md:col-end-5 lg:col-start-2 lg:col-end-5 my-8 p-4 fondo-stilo flex items-center xl:p-8">
                    <Titulo/>
                </div>
                <div className="sm:grid-cols-1 md:col-start-6 md:col-end-10 lg:col-start-5 lg:col-end-8 my-8 p-4 fondo-stilo flex items-center xl:pr-10" >
                    <Carrusel/>
                </div>
                <div className="sm:grid-cols-1 md:col-span-10 lg:col-span-8  items-center bg-slate-50 -mt-10">
                    <Wavy/>
                </div>
            </div>
            
        </section>
    )
}

export default Home;