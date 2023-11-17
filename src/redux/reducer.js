const initialState={
    myFavorites:[]
}

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ADD_FAV":
            return{...state, myFavorites: [...state.myFavorites, action.payload]}
        
        case "REMOVE_FAV":
            let remove= state.myFavorites.filter((char)=>char.id!==Number(action.id))
            return{...state, myFavorites: remove }    
        
        default: 
        return {...state}
    }
}

export default rootReducer;