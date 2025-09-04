import { useState, useEffect} from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import MovieCard from "../components/movieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
    const [topMovies, setTopMovies] = useState([]) 

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url);

        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() => {

        const topRatedURL = `${moviesURL}top_rated?api_key=${apiKey}`;

        getTopRatedMovies(topRatedURL);

    }, [])
    return (

        <div className="container">
            <div className="haeder">
                <h1>Melhores Filmes</h1>
                <div className="searchBar">
                    <input type="text" placeholder="Pesquisar filme"/>
                    <button>
                        <BiSearchAlt2 />
                    </button>
                </div>
            </div>
            <div className="moviesContainer">
                {topMovies && topMovies.map((movie) => <MovieCard movie={movie}/>)}
            </div>
        </div>

    );
};

export default Home;