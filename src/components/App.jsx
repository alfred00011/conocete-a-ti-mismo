import MainHeader from "./menu/MainHeader"
import Contenido from "./pages/Contenido"
import Home from "./pages/Home"


function App() {

  return (
    <div className="flex flex-col">
      <div className="h-[8vh]">
        <MainHeader/>
      </div>
      <Home/>
      <Contenido/>
    </div>
  )
}

export default App
