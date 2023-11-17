// const http= require("http");
// // const characters= require("./utils/data")
// const {getCharById} = require("./controllers/getCharById")

// http.createServer((req,res)=>{
//     const {url}=req
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if(url.includes("/rickandmorty/character")){
//        const id= Number(url.split("/").pop());
//     //    const character=characters.find((char)=>{return char.id===id})
//         getCharById(res,id)
//     //    if(character){
//     //     res.writeHead(200,{"Content-Type":"application/json"})
//     //     return res.end(JSON.stringify(character))
//     //     }
//     }else{
//         res.writeHead(404,{"Content-Type":"application/json"});
//         return res.end();   
//     }
// }).listen(3001,"localhost");
// const express= require("express");
// const router=require("./routes/index")

// const server=express();
const server= require("./app")
const PORT=3001;
const {conn}=require("./DB_connection");

// server.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Credentials', 'true');
//    res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//    );
//    res.header(
//       'Access-Control-Allow-Methods',
//       'GET, POST, OPTIONS, PUT, DELETE'
//    );
//    next();
// });

// server.use(express.json());

// server.use("/rickandmorty",router);

conn.sync({ force: false}).then(()=>{
    server.listen(PORT,()=>{
        console.log('Server raised in port: ' + PORT)})
    }
)

