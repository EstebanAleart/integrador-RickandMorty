import { connect} from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css"
import { removeFav } from "../../redux/action";

const Favorites=(props)=>{
    
    return(
        <div className={style.container}>{props.myFavorites.map((item)=>{
            return(
            <Card key={item.id} 
            id={item.id}
            name={item.name} 
            status={item.status} 
            species={item.species} 
            gender={item.gender} 
            origin={item.origin.name} 
            image={item.image} />
            )
        })}</div>
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