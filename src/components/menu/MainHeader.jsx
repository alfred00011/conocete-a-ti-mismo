import MainMenu from "./MainMenu"

const MainHeader = () => {
    return (
        <div className="fixed bg-gradient w-full z-10">
            <div className="w-full m-auto flex items-center lg:max-w-200" >
                <MainMenu/>
                
            </div>
            
        </div>
    )
}

export default MainHeader