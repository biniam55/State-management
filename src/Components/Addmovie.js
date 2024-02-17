import React, {useState, useContext} from "react";
import { Moviecontext } from "./Moviecontext";
const Addmovie = () => {
    const [name, setname] = useState("");
    const [price, setprice] =useState("");
    const [movies, setmovies] = useContext(Moviecontext)

    const updateName = (e) =>{
        setname(e.target.value)
    }
    const updatePrice = (e) =>{
        setprice(e.target.value)
    }
    const addmovie = e  =>{
        e.preventDefault();
        setmovies(prevmovies => [...prevmovies, {name: name, price:price}])
    }
    return(
        <form onSubmit={addmovie} className="addmovie">
            <input type="text" name="name" value={name} onChange={updateName} className="namef"/>
            <input type="text" name="price" value={price} onChange={updatePrice} className="pricef"/>
            <button>Submit</button>
        </form>
    )
}
export default Addmovie
