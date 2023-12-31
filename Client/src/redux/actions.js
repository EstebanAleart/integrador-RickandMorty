import axios from "axios";


// export const addFav= (character)=>{
//     return {
//         type: "ADD_FAV",
//         payload: character
//     }
// }

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   // return (dispatch) => {
   //    axios.post(endpoint, character).then(({ data }) => {
   //       return dispatch({
   //          type: 'ADD_FAV',
   //          payload: data,
   //       });
   //    });
   // };
   return async (dispatch) => {
      try {
        const response = await axios.post(endpoint, character);
        const { data } = response;
        return dispatch({
          type: 'ADD_FAV',
          payload: data,
        });
      } catch (error) {
        console.error("Error add fav:", error.message);
        console.log(error)
      }
    };
};

// export const removeFav= (id)=>{
//     return {
//         type: "REMOVE_FAV",
//         payload: id
//     }
// }
export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   // return (dispatch) => {
   //    axios.delete(endpoint).then(({ data }) => {
   //       return dispatch({
   //          type: 'REMOVE_FAV',
   //          payload: data,
   //    });
   //    });
   // };
   try {
      return async (dispatch)=>{
         const response= await axios.delete(endpoint);
         const {data}=response;
         return dispatch({
            type: "REMOVE_FAV",
            payload:data,
         })
      }
      
   } catch (error) {
      console.error("Error delete fav:", error);
   }
};

export const filterCards = (gender)=>{
    return{
        type: "FILTER",
        payload: gender
    }
}

export const orderCards= (order)=>{
    return{
        type: "ORDER",
        payload: order
    }

}

// export const allFav=()=>{
//     return {
//         type:"ALL-FAV"
//     }
// }