import {Link} from 'react-router-dom';

export const Header = () =>{
    return(
        <header className="header">
            <h1 className="site-name">
                <Link to="/">TechyStar</Link>
            </h1>
            <nav className="header__nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="#about">About</Link>
                <Link className="nav-link" to="#brands">Brands</Link>
                <Link className="nav-link" to="/services">Services</Link>
            </nav>
        </header>
    )
}