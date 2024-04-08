import { Link } from "react-router-dom";

function Header() {

    return (
        <header>
            <nav className="top-0">   
                <ul className="flex flex-row items-center justify-center h-16 text-lg font-bold text-white bg-gradient-to-r from-pink-300 via-red-300 to-orange-300 gap-96">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'about'}>About</Link></li>
                    <li><Link to={'contact'}>Contact</Link></li>
                    <li><Link to={'project'}>Project</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;