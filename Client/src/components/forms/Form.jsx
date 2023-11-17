import React, { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css"

const Form=(props)=>{
    const {login}=props
    const [userData,setUserData]=useState({
        email:"",
        password:""
    })

    const [error, setError]=useState({})

    // funcion para guardar usuario y password
    const handleChange=(event)=>{
        const property= event.target.name;
        const value= event.target.value

        setUserData({...userData, [property]: value });
        setError(validation({...userData, [property]: value }))
        
    }

    //funcion para usar login
    const handleSubmit=(event)=>{
        event.preventDefault()
        login(userData)
    }

    return(
         <div className={style.container    }>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input  className={style.input}
                    name="email" 
                    type="text" 
                    placeholder="Email..." 
                    value={userData.email} 
                    onChange={handleChange}/>
                     {error.email && <p>{error.email}</p>}
                     
                </div>
             
                <div>
                    <label htmlFor="password">Password</label>
                    <input  className={style.input}
                    name="password" 
                    type="password" 
                    placeholder="Password..." 
                    value={userData.password} 
                    onChange={handleChange}/>
                    {error.pass && <p>{error.pass}</p>}
                    
                </div>
                <button className={style.button}>Submit</button>
            </form>
         </div>
    )
}

export default Form