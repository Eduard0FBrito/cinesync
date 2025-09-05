import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const genresURL = import.meta.env.VITE_GENRES;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

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
    const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;
    const genresListURL = `${genresURL}?api_key=${apiKey}&`;
    
    getSearchedMovies(searchWithQueryURL);
    getGenres(genresListURL);
  }, [query]);

  return (
    <div className="container">
      <div className="moviesContainer">
        {movies.length > 0 && genres && Object.keys(genres).length > 0 && movies.map((movie) => (
          <MovieCard movie={movie} genres={genres} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Search;