import Carrusel from "../Inicio/Carrusel";
import Titulo from "../Inicio/Titulo";

const Home = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-6 h-[90vh] bg-yellow-300">
                
            <div className="md:col-start-2 col-span-2 my-8 h-[70vh] p-4 bg-yellow-300 flex items-center justify-center xl:p-16 ">
                <Titulo/>
            </div>
            <div className="md:col-start-4 col-span-2 my-8 h-[70vh] p-4 bg-yellow-300 flex items-center justify-center" >
                <Carrusel/>
            </div>
                
            <div className="col-start-1 col-end-7 bg-white max-h-full w-full" >
                <svg id="svg" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="Wave_wave___meZb ">
                    <path d="M 0,300 C 0,400 0,200 0,200 C 74.42820512820512,185.56410256410254 148.85641025641024,171.1282051282051 234,172 C 319.14358974358976,172.8717948717949
                        415.0025641025642,189.05128205128207 496,198 C 576.9974358974358,206.94871794871793 643.1333333333333,208.66666666666666 712,206 C 780.8666666666667,203.33333333333334
                        852.4641025641026,196.2820512820513 929,209 C 1005.5358974358974,221.7179487179487 1087.0102564102565,254.20512820512818 1173,256 C 1258.9897435897435,257.7948717948718
                        1349.4948717948719,228.8974358974359 1440,200 C 1440,400 1440,400 1440,0 Z" 
                        stroke="none" stroke-width="0" fill="rgb(253 224 71)" fill-opacity="1" className="Wave_waves__cnuh1" transform="rotate(180 720 130)">
                    </path>
                </svg>
            </div>
        </section>
    )
}

export default Home;