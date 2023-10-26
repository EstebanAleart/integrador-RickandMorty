import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
// import Card from "../components/Card/Card";
// import Cards from "../components/Cards/Cards";
// import style from "../components/Card/Card.module.css"

const Detail=()=>{
    const {id}=useParams()
    const [characters, setCharacters]= useState({})
    useEffect(() => {
        // `https://rickandmortyapi.com/api/character/${id}`
     axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
        if (data.name) {
             setCharacters(data);
        } else {
            window.alert('No hay personajes con ese ID');
        }
         });
        return setCharacters({});
        }, [id]);

    return(
        <div>
            <span>
            <h2 >{characters.name}</h2>
            <h2 >{characters.status}</h2>
            <h2 >{characters.species}</h2>
            <h2 >{characters.gender}</h2>
            <h2 >{characters.origin?.name}</h2>
            </span>
            <img  src={characters.image} alt={characters.name} />
        </div>
    )
}

export default Detail;