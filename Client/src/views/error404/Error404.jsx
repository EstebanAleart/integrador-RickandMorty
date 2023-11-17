import React from "react";
import imagen from "./error404.jpg"
import style from "./Error404.module.css"

const Error404=()=>{
    return(
        <div className={style.container}>
            <h1>Error 404</h1>
            <img className={style.img} src={imagen} alt="error 404 imagen"></img>
        </div>
    )
}

export default Error404;