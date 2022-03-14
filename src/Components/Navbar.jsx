import "../Style/Navbar.css"
function Navbar (){
    return(
        <header>
            <div className="logo">
                <img src="icons/Logo.png" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="#"><li>Pokédex</li></a>
                    <a href="#"><li>Legendaries</li></a>
                    
                </ul>
            </nav>
            
        </header>
    );
}

export default Navbar;