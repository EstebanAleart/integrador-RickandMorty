const axios= require("axios");

// function getCharById(res,id) {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=>{
//         const {origin, gender, name, image, species, status, id}=response.data;
//         res.writeHead(200,{"Content-Type":"application/json"});
//         res.end(JSON.stringify({origin, gender, name, image, species, status, id}))

//     })
//     .catch((error)=>{
//         res.writeHead(500,{"Content-Type":"text/plain"})
//         res.end(error.message)
//     })
// }



const URL="https://rickandmortyapi.com/api/character/";

const getCharById= function (req,res) {
    const {id}=req.params;
    axios.get(`${URL}${id}`)
    .then((response)=>{
            const {origin, gender, name, image, species, status, id}=response.data;
            const character={origin, gender, name, image, species, status, id};
            return character.name ? res.json(character) : res.status(404).send("Character not found");
        })
    .catch((error)=>{
        return res.status(500).send(error.messsage)
    })
    }
module.exports= {
        getCharById
     };