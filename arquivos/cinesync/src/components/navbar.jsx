import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">CineSync</Link>
            </h2>
            <Link to="/favorite">Favorite</Link>
        </nav>
    );
};

export default Navbar;