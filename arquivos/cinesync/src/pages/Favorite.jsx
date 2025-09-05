import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const apiKey = import.meta.env.VITE_API_KEY;
const genresURL = import.meta.env.VITE_GENRES;

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [genres, setGenres] = useState({});

  const getGenres = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const genreMap = {};
    data.genres.forEach((genre) => {
      genreMap[genre.id] = genre.name;
    });
    setGenres(genreMap);
  };

  useEffect(() => {
    // Carrega os filmes favoritos do localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(favorites);

    // Carrega os gêneros para exibir os nomes corretamente
    const genresListURL = `${genresURL}?api_key=${apiKey}&`;
    getGenres(genresListURL);
  }, []);

  return (
    <div className="moviesContainer">
      {favoriteMovies.length > 0 && Object.keys(genres).length > 0 ? (
        favoriteMovies.map((movie) => (
          <MovieCard movie={movie} genres={genres} key={movie.id} />
        ))
      ) : (
        <p className="no-favorites-message">Você ainda não tem filmes favoritos.</p>
      )}
    </div>
  );
};

export default Favorites;