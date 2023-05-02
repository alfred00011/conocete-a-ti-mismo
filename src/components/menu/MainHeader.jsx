import { useState } from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const MainHeader = () => {
    const [showMenu,setShowMenu] = useState(false);

    return (
        <header className="fixed shadow-md z-50 items-center w-full p-4 flex justify-end xl:justify-start h-[8vh] bg-yellow-300">
            <nav 
                className = {`fixed bg-yellow-300 h-full w-[80%] md:w-[50%] xl:w-full ${ showMenu? "left-0": "-left-full"} 
                    top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-10`}
            >
                <ul className=" bg-yellow-300 h-full w-full  xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 lg:max-w-256 lg:justify-end">
                    <li className="flex items-center">
                        <Link className="menu-item" to="/">
                        Inicio
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link className="menu-item" to="/">
                        Contenido
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link className="menu-item" to="/">
                        Beneficios
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link className="menu-item" to="/">
                        ¿Quiénes somos?
                        </Link>
                    </li><li className="flex items-center">
                        <Link className="menu-item" to="/">
                        Contactanos
                        </Link>
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