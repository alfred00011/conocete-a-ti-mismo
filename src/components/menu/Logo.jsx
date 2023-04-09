import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className='flex'>
            <Link to="/">
                <img
                    src="https://scontent.faqp2-3.fna.fbcdn.net/v/t39.30808-1/313401610_482892373865910_4469825383933793093_n.png?stp=dst-png_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeH__liCjejpaMgnjlcpiQcj04z2dbpDKzPTjPZ1ukMrM04vTmMcT2lymSVJYDyrMNtRn5j0jDh4qA5Vbu48SUXc&_nc_ohc=X_GO-V17PXkAX9SR7-T&_nc_ht=scontent.faqp2-3.fna&oh=00_AfDLU_RSQun7d9VtNpBJxmY8pRn9G0alhCzUSX7OIwuxUA&oe=64336E01" 
                    alt="Logo NuevaAcropolisCusco" 
                />
            </Link>
        </div>
    )
}

export default Logo