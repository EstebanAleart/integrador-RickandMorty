import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const{onClose,characters}=props;
   return <div className={style.container}>
      {characters.map((item)=>{
         
         return(
            <Card key={item.id} 
            id={item.id}
            name={item.name} 
            status={item.status} 
            species={item.species} 
            gender={item.gender} 
            origin={item.origin.name} 
            image={item.image} 
            onClose={onClose}/>
         )
      })}
   </div>;
}
