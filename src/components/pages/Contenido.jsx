import mapaNA from '../../assets/img/mapa.png'

const Contenido = () => {
    return (
        <div className='h-full w-ful relative'>
        <div className='bg-gray-100 flex flex-col items-center justify-center h-[90vh]' id='contenido' >
            <div className=''>
                <div className=''>
                    <div className='relative text-center p-4'>
                        <span className='subheading'>Contenido del Curso</span>
                        <h1 className='mb-4'>Recorrido a travéz del curso</h1>
                    </div>
                </div>
            </div>
            <div className='w-[100vh]'>
                <div className='flex flex-col items-center p-4'>
                    <img className='img' src={mapaNA} alt="" width="100%" height='100%' />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contenido