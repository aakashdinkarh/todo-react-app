import { useState } from "react";

// const API_KEY = '440ac858';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = () => {
        const resp = fetch(`https://www.omdbapi.com/?apikey=440ac858&s=har`);
        resp.then(data => console.log(data))
    }

    useEffect(() => {
      getMovies();
    }, [])
    
    return (
        <>
        <h1>Movies List</h1>
        {movies.map((movie) => <p>{movie.title}</p>)}
        </>
    )
};

export default Movies;
