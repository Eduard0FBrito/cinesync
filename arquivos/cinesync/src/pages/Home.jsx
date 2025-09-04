import { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import Header from "../components/Header"; // Importa o novo componente Header

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const genresURL = import.meta.env.VITE_GENRES;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [genres, setGenres] = useState({});

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
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
        const topRatedURL = `${moviesURL}top_rated?api_key=${apiKey}`;
        const genresListURL = `${genresURL}?api_key=${apiKey}`;

        getTopRatedMovies(topRatedURL);
        getGenres(genresListURL);
    }, []);

    return (
        <div className="container">
            {}
            <div className="moviesContainer">
                {topMovies.length > 0 && genres && Object.keys(genres).length > 0 && topMovies.map((movie) => (
                    <MovieCard movie={movie} genres={genres} key={movie.id} />
                ))}
            </div>
        </div>
    );
};

export default Home;