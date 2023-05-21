import mapaNA from '../../assets/img/mapa.png'

const Contenido = () => {
    return (
        <div className='bg-gray-100 flex flex-col items-center h-[90vh]' id='contenido' >
            <div className=''>
                <div className=''>
                    <div className='relative text-center p-4'>
                        <span className='subheading'>Contenido del Curso</span>
                        <h1 className='mb-4'>Recorrido a travéz del curso</h1>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='flex flex-col items-center p-4'>
                    <img className='img' src={mapaNA} alt="" width="1025px" />
                </div>
            </div>
        </div>
    )
}

export default Contenido