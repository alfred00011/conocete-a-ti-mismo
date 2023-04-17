import MainHeader from "./menu/MainHeader"
import Home from "./pages/Home"



function App() {

  return (
    <div >
      <MainHeader/>
      <div className="pt-16 max-w-256 m-auto">
        <Home/>
      </div>
      
    </div>
  )
}

export default App
