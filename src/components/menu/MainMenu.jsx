import { Link } from "react-router-dom"

const MainMenu = () => {

  return (
    <nav className="w-full">
      <ul className="flex justify-end ">
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
  )
}

export default MainMenu
