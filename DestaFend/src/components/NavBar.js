import './NavBar.css'

function NavBar() {
    return(
        <nav>
            <ul>
                <a href="/"><li className="items">Home</li></a>
                <a href="/register"><li className="items">Register</li></a>
            </ul>
        </nav>
    );
    
}
export default NavBar;