const axios= require("axios");

function getCharById(res,id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{
        const {origin, gender, name, image, species, status, id}=response.data;
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({origin, gender, name, image, species, status, id}))

    })
    .catch((error)=>{
        res.writeHead(500,{"Content-Type":"text/plain"})
        res.end(error.message)
    })
}

module.exports= {
    getCharById
};