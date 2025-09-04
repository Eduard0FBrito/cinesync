import { useState, useEffect, use } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
    const [topMovies, setTopMovies] = useState([]) 

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url);

        const data = await res.json();

    }

    useEffect(() => {

        const topRatedURL = `${moviesURL}top_rated?api_key=${apiKey}`;

        console.log(topRatedURL);

    }, [])
    return (
        <div>
            Home
        </div>
    );
};

export default Home;