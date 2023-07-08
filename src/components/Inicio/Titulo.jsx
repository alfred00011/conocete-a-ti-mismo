import logo from "../../assets/img/nacusco.png";

const Titulo = () => {

    return (
        <div className="lg:p-8 lg:m-8  flex-row justify-center items-center">
            <img className="logo-titulo" src={logo} alt="logo nueva acropolis cusco" />
            <span className="titulo1">Curso</span>
            <h1 className="titulo2">Conócete a ti mismo</h1>
            <p className="titulo3">y responde tus preguntas sobre la vida</p>
        </div>
    )
}

export default Titulo;