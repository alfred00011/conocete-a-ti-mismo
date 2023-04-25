import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import imagenes from "../../helpers/ImagenNA";

const Carrusel = () => {

    const [index,setIndex] = useState(0);

    const prevSlide = () => {
        const primerSlide = index ===0;
        const nuevoIndex = primerSlide ? imagenes.length -1 : index-1
        setIndex(nuevoIndex)
    }

    const nextSlide = () => {
        const ultimoSlide = index === imagenes.length-1 ;
        const nuevoIndex = ultimoSlide ? 0 : index + 1
        setIndex(nuevoIndex)
    }

    const goToSlide = (imgIndex) =>{
        setIndex(imgIndex)
    }
    return (
        <div className="max-w-[1400px] h-[70vh] w-full m-auto relative group">
         
            <img  
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                src={imagenes[index].img} 
                alt={imagenes[index].title} 
            />
        
            <div className="hidden group-hover:block inset-0">
                <button 
                    className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl 
                                rounded-full p-2 bg-black/20 text-white cursor-pointer"
                    onClick={prevSlide}    
                >
                    <BsChevronCompactLeft/>
                </button>

                <button 
                    className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl 
                                rounded-full p-2 bg-black/20 text-white cursor-pointer"
                    onClick={nextSlide}    
                >
                    <BsChevronCompactRight/>
                </button>
            </div>
            <div className="flex top-4 justify-center py-2">
                {imagenes.map((imagen, imgIndex) => (
                    <div key={imgIndex} onClick={() => goToSlide(imgIndex)} className="text-2xl cursor-pointer">
                        <RxDotFilled/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carrusel;