import mapaNA from '../../assets/img/mapa.png'

const Contenido = () => {
    return (
        <section className='cont-section'>
            <div className='container'>
                <div className='relative justify-center'>
                    <div className='relative text-center'>
                        <span className='subheading'>Contenido del Curso</span>
                        <h1 className='mb-4'>Recorrido a travéz del curso</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center'>
                    <img className='img' src={mapaNA} alt="" width="100%" height="100%"/>
                </div>
            </div>
        </section>
    )
}

export default Contenido