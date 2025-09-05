import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaPlay, FaHeart, FaHeartBroken, FaTicketAlt } from "react-icons/fa";

// URLs da API
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Função para verificar e carregar o estado de favorito
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.id === parseInt(id)));
  }, [id]);

  const handleFavoriteToggle = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (isFavorite) {
      // Remover dos favoritos
      favorites = favorites.filter(fav => fav.id !== movie.id);
      setIsFavorite(false);
    } else {
      // Adicionar aos favoritos
      favorites.push(movie);
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };
  
  const getCredits = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCredits(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?api_key=${apiKey}`;
    const creditsUrl = `${moviesURL}${id}/credits?api_key=${apiKey}`;

    getMovie(movieUrl);
    getCredits(creditsUrl);
  }, [id]);

  const getDirector = (crew) => {
    if (!crew) return "N/A";
    const director = crew.find(member => member.job === "Director");
    return director ? director.name : "N/A";
  };

  const getCast = (cast) => {
    if (!cast) return [];
    return cast.slice(0, 5).map(actor => actor.name).join(", ");
  };

  return (
    <div className="movie-page">
      {movie && credits && (
        <div className="movie-details">
          <div className="backdrop">
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
          </div>

          <div className="content">
            {/* Título e botão de favorito */}
            <div className="title-and-favorite"> 
              <h1 className="movie-title">{movie.title}</h1>
              <button 
                onClick={handleFavoriteToggle} 
                className={`favorite-icon-btn ${isFavorite ? 'favorited' : ''}`}
              >
                <FaHeart /> 
              </button>
            </div>
            
            <p className="movie-tagline">{movie.tagline}</p>
            <div className="meta-info">
              <span className="rating-container">
                <FaStar /> {movie.vote_average.toFixed(1)} / 10
              </span>
              <span>• {movie.runtime} min</span>
              <span>• {new Date(movie.release_date).getFullYear()}</span>
            </div>
            
            <p className="movie-overview">{movie.overview}</p>

            <div className="credits-info">
              <p><strong>Diretor:</strong> {getDirector(credits.crew)}</p>
              <p><strong>Elenco Principal:</strong> {getCast(credits.cast)}</p>
            </div>

            <div className="genres-container">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="genre-tag">{genre.name}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;