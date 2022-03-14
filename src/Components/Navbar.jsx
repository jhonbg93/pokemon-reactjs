import "../Style/Navbar.css"
function Navbar (){
    return(
        <header>
            <div className="logo">
                <img src="icons/Logo.png" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <a href="/"><li>Inicio</li></a>
                    <a href="#"><li>Pokédex</li></a>
                    <a href="#"><li>Legendarios</li></a>
                    
                </ul>
            </nav>
            
        </header>
    );
}

export default Navbar;