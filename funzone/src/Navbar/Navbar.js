import './Navbar.css'
import { Link } from '@reach/router'
function Navbar() {
    return (
        <nav>
            <div className="branding">FUN ZONE</div>
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/game'>Game</Link>
                    </li>
                    <li>
                        <Link to='/movies'>Movies</Link>
                    </li>
                    <li>
                        <Link to='/songs'>Songs</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;