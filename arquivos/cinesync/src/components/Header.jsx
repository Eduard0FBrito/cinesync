import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const headerText = () => {
    if (location.pathname === "/favorites") {
      return "Meus Filmes Favoritos";
    }
    if (location.pathname === "/search") {
      return `Resultados para: ${query}`;
    }
    return "Melhores Filmes";
  };

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
          <Link to="/favorite">Favoritos</Link>
        </div>
      </nav>

      {!isMoviePage && (
        <div className="home-header">
          <h1>{headerText()}</h1>
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