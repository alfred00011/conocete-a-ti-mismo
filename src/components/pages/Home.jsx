import Carrusel from "../Inicio/Carrusel";
import Titulo from "../Inicio/Titulo";
import Wavy from "../menu/Wavy";

const Home = () => {
    return (//grid grid-cols-1 md:grid-cols-6
        <section className="h-[90vh] bg-yellow-200 items-center justify-center ">   
            <div className="grid sm:grid-cols-1 md:grid-cols-10 lg:grid-cols-8  h-[80vh] gap-4 justify-center"> 
                <div className="sm:grid-cols-1 md:col-start-2 md:col-end-5 lg:col-start-2 lg:col-end-5 my-8 p-4 bg-yellow-200 flex items-center xl:p-8">
                    <Titulo/>
                </div>
                <div className="sm:grid-cols-1 md:col-start-6 md:col-end-10 lg:col-start-5 lg:col-end-8 my-8 p-4 bg-yellow-200 xl:pr-10" >
                    <Carrusel/>
                </div>
            </div>
            <div className="bg-white w-full">
                <Wavy/>
            </div>
        </section>
    )
}

export default Home;