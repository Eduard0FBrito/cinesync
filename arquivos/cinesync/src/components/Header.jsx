import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const headerText = location.pathname === "/favorites"
    ? "Meus Filmes Favoritos"
    : "Melhores Filmes";

  const isMoviePage = location.pathname.includes("/movie/");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <header id="header">
      <nav id="navbar">
        <h2>
          <Link to="/">CINE<span>Sync</span></Link>
        </h2>
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/favorites">Favoritos</Link>
        </div>
      </nav>

      {!isMoviePage && (
        <div className="home-header">
          <h1>{headerText}</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Pesquise um filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit">
              <BiSearchAlt2 />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;