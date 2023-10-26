const initialState={
    myFavorites:[],
    allCharacters:[]
}

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ADD_FAV":
            // ...state, myFavorites: [...state.myFavorites, action.payload]
            if (!state.myFavorites.some(card => card.id === action.payload.id))
            { 
                return { ...state, myFavorites: action.payload, allCharacters: action.payload };
                // return {
                //     ...state,
                //     allCharacters: [...state.allCharacters, action.payload],
                //     myFavorites:[...state.myFavorites, action.payload]
                // };
            }

        // case "REMOVE_FAV":
        //     let remove= state.myFavorites.filter((char) => char.id !== Number(action.payload))
        //     return{...state, myFavorites: remove }
        case 'REMOVE_FAV':
            return { ...state, myFavorites: action.payload };

        case "FILTER":
            if (!state.myFavorites.some(card => card.id === action.payload.id)){
            return{
                ...state, myFavorites:[...state.allCharacters.filter((char)=>char.gender ===action.payload)]
            }    
            }
        case "ORDER":
            if (!state.myFavorites.some(card => card.id === action.payload.id))
            { 
            return{
                ...state, myFavorites: [...state.allCharacters.sort(function(a, b) {
                    if(action.payload==="A"){
                        return a.id - b.id
                    }
                    if(action.payload==="D"){
                        return b.id - a.id;
                    }
                    })]
            }
            }
        // case "ALL-FAV":
        //     return {...state}  
        default:
            return {...state}
    }
}

export default rootReducer;