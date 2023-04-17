import Carrusel from "../Inicio/Carrusel";
import Titulo from "../Inicio/Titulo";

const Home = () => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <Titulo/>
            </div>
            <div>
                <Carrusel/>
            </div>
            
        </div>
    )
}

export default Home;