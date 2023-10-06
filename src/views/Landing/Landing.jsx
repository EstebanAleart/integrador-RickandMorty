import React from "react";
import Form from "../../components/forms/Form";
import style from "./Landing.module.css";
import imgLogin from "./login.jpg";

const Landing=(props)=>{
    const {login}= props;
    const {container,img}=style;
    return(
        <div className={style.container}>
            <img className={img}src={imgLogin} alt="Login" />
            <Form login={login}/>
        </div>
    )
}

export default Landing