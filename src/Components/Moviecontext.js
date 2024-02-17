import React, {useState, createContext} from 'react'

export const Moviecontext = createContext()

export const MovieProvider= props => {
    const[movies, setmovies] = useState([
        {
            name: 'Avengers',
            price: '10$',
            id: 12
        },
        {
            name: 'Dead zone',
            price: '15$',
            id: 34
        },
        {
            name: 'game of thrones',
            price: '20$',
            id: 56
        }
    ]);
    return(
        <Moviecontext.Provider value={[movies, setmovies]}>
            {props.children}
        </Moviecontext.Provider>
);
    
};