import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// URLs da API
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

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

  // Função auxiliar para encontrar o diretor
  const getDirector = (crew) => {
    if (!crew) return "N/A";
    const director = crew.find(member => member.job === "Director");
    return director ? director.name : "N/A";
  };

  // Função auxiliar para obter os 5 primeiros membros do elenco
  const getCast = (cast) => {
    if (!cast) return [];
    return cast.slice(0, 5).map(actor => actor.name).join(", ");
  };

  return (
    <div className="movie-page">
      {movie && credits && (
        <div className="movie-details">
          {/* Fundo da página */}
          <div className="backdrop">
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
          </div>

          <div className="content">
            <h1 className="movie-title">{movie.title}</h1>
            <p className="movie-tagline">{movie.tagline}</p>

            <div className="meta-info">
              <span className="rating-container">
                <FaStar /> {movie.vote_average.toFixed(1)} / 10
              </span>
              <span>• {movie.runtime} min</span>
              <span>• {new Date(movie.release_date).getFullYear()}</span>
            </div>
            
            <p className="movie-overview">{movie.overview}</p>

            {/* Informações de Diretor e Elenco */}
            <div className="credits-info">
              <p><strong>Diretor:</strong> {getDirector(credits.crew)}</p>
              <p><strong>Elenco Principal:</strong> {getCast(credits.cast)}</p>
            </div>

            {/* Gêneros */}
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