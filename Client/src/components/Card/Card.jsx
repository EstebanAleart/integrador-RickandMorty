import { Link, useLocation } from "react-router-dom";
import style from "./Card.module.css"
import {addFav, removeFav} from "../../redux/actions"
import { connect } from "react-redux";
import { useState,useEffect } from "react";


const Card =(props)=> {
   const {id, name, status, species, gender, origin, image,onClose, myFavorites, addFav, removeFav} = props;
   // console.log({id, name, status, species, gender, origin, image,onClose, myFavorites, addFav, removeFav})
   const [isFav, setIsFav] = useState(false);
   

   const handleFavorite = function (){
      // if(isFav){
      //    removeFav(id)
      //    setIsFav(!isFav)
      // }else{
      //    addFav(props)
         
      // };
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
         }
      });
   }, [myFavorites]);

   

   return (
      
      <div className={style.container}>
         <div className={style.containerButtonsStatus}>
         <h2 className={style.status}>{status}</h2>
         {useLocation().pathname === "/favorites" ? null : (
            <button onClick={()=>{onClose(id)}} className={style.button}>X</button>
       )}
         
         <button onClick={handleFavorite} className={style.favoriteButtonClass} >
        {isFav ? '💛' : '🤍'}
      </button>
         
         </div>
         
         <span className={style.spanSpeGen}>
            <h2 className={style.species}>{species}</h2>
            <h2 className={style.gender}>{gender}</h2>
         </span>
         <h2 className={style.origin}>{origin?.name}</h2>
         <span className={style.spanImgName}>
         <Link to={`/detail/${id} `}>
            <h2 className={style.name}>{name}</h2>
         </Link>
            <img className={style.img} src={image} alt='' /> 
         </span>
      </div>
      
   );
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFav: (character)=>{
         dispatch (addFav(character))
      },
      removeFav: (id) =>{
         dispatch (removeFav(id))
      }
   }
}
const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps) (Card);