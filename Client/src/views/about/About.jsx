import React from "react";

import style from "./About.module.css"
import Img from "./about.jpeg";


const About=()=>{
    const{textContainer,container,img}=style;
    return(
        <div className={container}>
            <img className={img} src={Img} alt="about" />
            <div className={textContainer}>
                <p>¡Hola! Mi nombre es <a href="https://www.linkedin.com/in/esteban-aleart-0b9461181/" target="_blank">Esteban Aleart</a>, y soy un profesional de la salud con una pasión innata 
                    por la tecnología. Durante muchos años, he dedicado mi carrera al cuidado de la salud, 
                    donde he tenido el privilegio de ayudar a las personas a mejorar sus vidas. Sin embargo, 
                    mi amor por la tecnología y mi deseo de aprender más me llevaron por un 
                    camino emocionante.</p>
                <p>Hace algún tiempo, decidí embarcarme en una nueva aventura educativa y me inscribí en 
                    carreras afines a programación. Actualmente, estoy inmerso en un programa intensivo de 
                    Desarrollo Web full stack en la prestigiosa academia soyHenry. Esta experiencia me ha 
                    brindado numerosas herramientas para mi continuo aprendizaje y formacion.</p>
                <p>Uno de los proyectos más emocionantes en los que estoy trabajando es una aplicación web 
                    inspirada en la serie "Rick and Morty". A través de este proyecto, estoy explorando el 
                    emocionante mundo de la programación web y aprendiendo a crear soluciones innovadoras en 
                    línea.</p>
                <p>Mi viaje es un constante proceso de aprendizaje y crecimiento, y estoy emocionado por las 
                    oportunidades que la tecnología y la programación ofrecen para mejorar nuestra sociedad. 
                    Siempre estoy dispuesto a colaborar en proyectos emocionantes y a aprender más sobre cómo 
                    la tecnología puede marcar la diferencia en nuestras vidas.</p>
                <p>¡Gracias por visitar mi perfil! Siéntete libre de contactarme si deseas saber más sobre mí 
                    o colaborar en proyectos interesantes.</p>
            </div>
        </div>
    )
}

export default About