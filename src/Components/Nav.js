import React, {useContext} from 'react'
import './navcss.css';
import { Moviecontext } from './Moviecontext';
const Nav =() => {
    const [movies,setmovies] = useContext(Moviecontext)
  return (
    <div className='navc'>
        <h3 className='cc'>Bini D</h3>
        <p>Movie lists: {movies.length} </p> 
    </div>
  );
};

export default Nav