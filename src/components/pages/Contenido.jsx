import mapaNA from '../../assets/img/mapa.png'

const Contenido = () => {
    return (
        <section className='bg-gray-100' >
            <div className=''>
                <div className=''>
                    <div className='relative text-center p-4'>
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