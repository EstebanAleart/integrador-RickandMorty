import style from "./SearchBar.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import PATHROUTES from "../helper/PathRoutes.helper";

export default function SearchBar(props) {
   const {onSearch, random, logout}=props
   const [id,setId]=useState("");
   const handleChange= (event)=>{
      setId(event.target.value)
   }
   const {container,buttonHyA,span,button,input}=style
   return (

      <div className={container}>
         <span className={span}>
         <button className={buttonHyA}><Link to={PATHROUTES.HOME}>Home</Link></button>
         <button className={buttonHyA}><Link to={PATHROUTES.ABOUT}>About</Link></button>
         <button className={buttonHyA}><Link to={PATHROUTES.FAVORITES}>Favorites</Link></button>
         </span>
         <span className={span}>
         <input id="inputID" className={input} type='search' onChange={handleChange} />
         <button className={button} onClick={()=>{random()}}>Random</button>
         <button className={button} onClick={()=>{onSearch(id)}}>Add Char</button>
         <button className={button} onClick={()=>{logout()}}>Logout</button>
         </span>
      </div>
   );
}
