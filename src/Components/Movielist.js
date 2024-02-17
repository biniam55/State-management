import React, {useState, useContext} from 'react'
import Movie from './Movie';
import { Moviecontext } from './Moviecontext';
const Movielist =() => {
    const [movies, setmovies] = useContext(Moviecontext)
  return (
    <div>
       {movies.map(movie =>(
        <Movie  name={movie.name} price={movie.price} key={movie.id}/>
       ))}
    </div>
  );
};

export default Movielist;