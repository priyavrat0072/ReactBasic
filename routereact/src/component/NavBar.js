import { Link, useParams, NavLink } from "react-router-dom"

function NavBar() {

    return (
        <>
            <ul className="navbar">
                <li> <NavLink className="nav-bar-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/about" >About</NavLink></li>
                <li> <NavLink className="nav-bar-link" to="/contact">Contact</NavLink></li>
                <li> <NavLink className="nav-bar-link" to="/filter">Filter</NavLink></li>
                <li> <NavLink className="nav-bar-link" to="/login">Login</NavLink> </li>
            </ul>
        </>
    )
}
export default NavBar