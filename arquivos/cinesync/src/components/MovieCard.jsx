import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, genres }) => {
  const firstGenreId = movie.genre_ids[0];
  const firstGenreName = genres[firstGenreId];

  const formattedVote = (movie.vote_average / 2).toFixed(1);

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="movie-poster-container">
        <img src={imagesURL + movie.poster_path} alt={movie.title} />
        <div className="rating-overlay">
          <p>
            {formattedVote} / 5
          </p>
          <FaStar />
        </div>
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p className="movie-meta">
          {firstGenreName && `${firstGenreName} •`} {movie.release_date.substring(0, 4)}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;