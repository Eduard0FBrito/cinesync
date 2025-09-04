import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, genres }) => {
  const firstGenreId = movie.genre_ids[0];
  
  const firstGenreName = genres[firstGenreId];

  return (
    <div className="movie-card">
      <div className="movie-poster-container">
        <img src={imagesURL + movie.poster_path} alt={movie.title} />
        <div className="rating-overlay">
          <p>
            {movie.vote_average.toFixed(1)} / 10
          </p>
          <FaStar />
        </div>
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p className="movie-meta">
          {}
          {firstGenreName && `${firstGenreName} •`} {movie.release_date.substring(0, 4)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;