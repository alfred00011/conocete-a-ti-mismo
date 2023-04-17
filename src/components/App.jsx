import Carrusel from "./Inicio/Carrusel"
import Titulo from "./Inicio/Titulo"
import MainHeader from "./menu/MainHeader"



function App() {

  return (
    <div >
      <MainHeader/>
      <div className="pt-16 max-w-256 m-auto">
        <Titulo/>
        <Carrusel/>
      </div>
      
    </div>
  )
}

export default App
