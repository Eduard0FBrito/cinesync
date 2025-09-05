import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, genres }) => {
  // Converte os IDs de gênero para nomes usando o mapa de gêneros
  // Verifica se movie.genre_ids existe e mapeia para o nome do gênero
  const movieGenres = movie.genre_ids 
    ? movie.genre_ids.map(id => genres[id]).join(', ') 
    : movie.genres.map(g => g.name).join(', ');

  const formattedVote = (movie.vote_average / 2).toFixed(1);

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <div className="rating-overlay">
        <FaStar />
        <span>{formattedVote}</span>
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p className="movie-meta">
          {movieGenres} • {new Date(movie.release_date).getFullYear()}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;