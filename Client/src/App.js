import './App.css';
import {useState,useEffect} from "react";
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import axios from "axios";
import {Routes, Route, useLocation, useNavigate } from "react-router-dom"; 
import About from './views/about/About';
import Detail from './views/Detail';
import PATHROUTES from './helper/PathRoutes.helper';
import Error404 from './views/Error404';
import Landing from "./views/Landing/Landing"
import Favorites from './components/Favorites/Favorites';



function App() {
   const {pathname}=useLocation();

   const [characters,setCharacters]= useState([]);
   
   //FUNCION PARA BUSCAR LAS TARJETAS
   function onSearch(id) {
      // `https://rickandmortyapi.com/api/character/${id}`
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            if(characters.some((char)=>char.id===data.id)){
               window.alert("El personaje ya ha sido agregado")
            }else{
            setCharacters((oldChars) => [...oldChars, data]);
            }
         }
      })
      .catch((error)=>{
         if(error){
         window.alert('¡No hay personajes con este ID!');
         console.error("Error al buscar el personaje:", error);
         }
      });
      
      document.getElementById("inputID").value="";
   }

   //FUNCION PARA PODER CERRAR LAS TARJETAS
   function onClose(id){
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id)
         })
      )
   };  

   // FUNCION PARA BATON RANDOM
   function random() {
      let randomId= Math.floor((Math.random()*825)+1)
      return onSearch(randomId)
   }


   //PARA EL LOGIN

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '1234567';

   const login=(userData)=> {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
      }
   }

   // useEffect(() => {
   // !access && navigate('/');
   // }, [access]);

   const logout=()=>{
      setAccess(false)
      navigate("/")
     
   }
   
   return (
      <div className='App'>
       
        { pathname!== "/" && <SearchBar onSearch={onSearch} random={random} logout={logout}/>}
         
         
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
         <Routes>
            <Route path="/" element={<Landing login={login}/>}></Route>
            <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />}> </Route>
            <Route path={PATHROUTES.ABOUT} element={<About/>}></Route>
            <Route path={PATHROUTES.DETAIL} element={<Detail/>}></Route>
            <Route path={PATHROUTES.FAVORITES} element={<Favorites/>}></Route>
            <Route path={"*"}  element={<Error404/>}></Route> 
         </Routes>
      </div>
   );
}

export default App;
