import { connect, useDispatch} from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css"
import { addFav, removeFav } from "../../redux/action";
import {filterCards,orderCards} from "../../redux/action"
import { useState } from "react";

const Favorites=(props)=>{
   const dispatch=useDispatch()

    const[aux,setAux]=useState(false)

   const handleOrder= (event)=>{
    dispatch(orderCards(event.target.value))
    setAux(!aux)
   }
   const handleFilter=(event)=>{
    dispatch(filterCards(event.target.value))
   }
    
    return(
        <div >
            <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Todos">Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            </div>
            <div className={style.container}>
            {props.myFavorites.map((item)=>{
            return(
            <Card key={item.id} 
            id={item.id}
            name={item.name} 
            status={item.status} 
            species={item.species} 
            gender={item.gender} 
            origin={item.origin?.name} 
            image={item.image} />
            )
            })}
            </div>
        </div>
    )
};

const mapStateToProps=(state)=>{
    return{
        myFavorites: state.myFavorites,
        
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
       removeFav: (id) =>{
          dispatch (removeFav(id))
       }
    }
 }


export default connect(mapStateToProps,mapDispatchToProps) (Favorites);