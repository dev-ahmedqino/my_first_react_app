import { useState, useEffect } from 'react'; 

import MovieCard from "./MovieCard"

import "./App.css"
import SearchICon from "./search.svg"
const API_URL = "http://www.omdbapi.com?apikey=bdad88a2";

const movie1 = {
        "Title": "Spiderman",
        "Year": "1990",
        "imdbID": "tt0100669",
        "Type": "movie",
        "Poster": "N/A"
    }

const App = () =>{
    const [movies, setMovies] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 

    const searchMovie = async (title)=> {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }
    
    useEffect(() =>{
        searchMovie('spiderman')
    },[]) 
    
    return (
        <div className="app">
            <h1>Ahmed Qino Movie Land</h1>

            <div className='search'>
                <input 
                    placeholder='Search for a movie'
                    value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value);}}
                />
                <img 
                    src='SearchIcon'
                    alt='Search'
                    onClick={()=> searchMovie(searchTerm)}
                />
            </div>

        {
            movies?. length>0
            ?
            ( <div className='container'>
                    {movies.map((movie)=> (<MovieCard movie={movie} />))} 
                </div> ) : ( 
            <div className='empty'>
                <h2>
                    No Movies Found
                </h2>
            </div>
        )
        }



        </div>
    )
};

export default App; 
