
const Imagen = (props) => {
    return(
        <div className="flex">
            <img src={props.img} alt={props.title}/>
        </div>
    )
}

export default Imagen;