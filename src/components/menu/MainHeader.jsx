import { useState } from "react";
import { RiMenuFoldFill } from "react-icons/ri";


const MainHeader = () => {
    const [showMenu,setShowMenu] = useState(false);

    return (
        <header className="fixed z-50 items-center w-full p-4 flex justify-end xl:justify-start h-[8vh] ">
            <nav 
                className = {`fixed  h-full w-[80%] md:w-[50%] xl:w-full ${ showMenu? "left-0 bg-emerald-200": "-left-full  "} 
                      top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all  duration-500 z-10 `}
            >
                <ul className= {"  h-full w-full  xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-5 lg:max-w-256 lg:justify-end xl: "}>
                    <li className="flex items-center">
                        <a className="menu-item" href="#home">
                        Inicio
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a className="menu-item" href="#contenido">
                        Contenido
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a className="menu-item" href="/">
                        Beneficios
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a className="menu-item" href="/">
                        ¿Quiénes somos?
                        </a>
                    </li><li className="flex items-center">
                        <a className="menu-item" href="/">
                        Contactanos
                        </a>
                    </li>

                </ul>
            </nav>
            <button className="xl:hidden text-2xl p-2 items-end"
                onClick={() => setShowMenu(!showMenu)}
            >
                <RiMenuFoldFill />
            </button>
        </header>
    )
}

export default MainHeader