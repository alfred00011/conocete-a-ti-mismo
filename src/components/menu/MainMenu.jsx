import { Link } from "react-router-dom"

const MainMenu = () => {
    return (
        <nav className="w-full">
                <ul className="flex justify-end text-gray-100">
                    <li className="flex items-center">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link>Contenido</Link>
                    </li>
                    <li>
                        <Link>Beneficios</Link>
                    </li>
                    <li>
                        <Link>¿Quiénes somos?</Link>
                    </li>
                    <li>
                        <Link>Contáctanos</Link>
                    </li>
                </ul>
            </nav>
    )
}

export default MainMenu