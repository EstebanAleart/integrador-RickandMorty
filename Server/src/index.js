const http= require("http");
// const characters= require("./utils/data")
const {getCharById} = require("./controllers/getChar")

http.createServer((req,res)=>{
    const {url}=req
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(url.includes("/rickandmorty/character")){
       const id= Number(url.split("/").pop());
    //    const character=characters.find((char)=>{return char.id===id})
        getCharById(res,id)
    //    if(character){
    //     res.writeHead(200,{"Content-Type":"application/json"})
    //     return res.end(JSON.stringify(character))
    //     }
    }else{
        res.writeHead(404,{"Content-Type":"application/json"});
        return res.end();   
    }
}).listen(3001,"localhost");