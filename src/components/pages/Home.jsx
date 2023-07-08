import Carrusel from "../Inicio/Carrusel";
import Titulo from "../Inicio/Titulo";
import MainHeader from "../menu/MainHeader";
import Wavy from "../menu/Wavy";

import rightCornerImg from "../../assets/img/pattern (11).svg";
import leftCornerImg from "../../assets/img/pattern (5).svg";


const Home = () => {
    return (//grid grid-cols-1 md:grid-cols-6
    <div id="home"  className=" home w-full h-full">
        
            <img className="absolute" src={leftCornerImg} alt="" />
            <img className="absolute" src={rightCornerImg} alt="" />
        
        <div className="h-[8vh]">
        <MainHeader/>
        </div>
        <section id="titulo" className=" flex items-center justify-center h-[92vh] ">   
            <div className="grid sm:grid-cols-1 md:grid-cols-10 lg:grid-cols-8  h-[92vh] w-full lg:gap-4 justify-center fix "> 
                <div className="sm:grid-cols-1 md:col-start-2 md:col-end-5 lg:col-start-2 lg:col-end-5 my-8 p-4 xl:p-8 ">
                    <Titulo/>                    
                </div>
                <div className="sm:grid-cols-1 md:col-start-6 md:col-end-10 lg:col-start-5 lg:col-end-8 my-8 p-4 flex items-center xl:p-8" >
                    <Carrusel/>
                </div>
                <div className="sm:grid-cols-1 md:col-span-10 lg:col-span-8  items-center bg-yellow-100  -mt-10">
                    <Wavy/>
                </div>
            </div>
            
        </section>
    </div>
    )
}

export default Home;