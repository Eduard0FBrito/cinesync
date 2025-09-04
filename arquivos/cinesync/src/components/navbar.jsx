import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">CINE<span>Sync</span></Link>
            </h2>
            <Link to="/">Home</Link>
            <Link to="/favorite">Favorite</Link>
        </nav>
    );
};

export default Navbar;