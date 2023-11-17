// const users = require("../utils/users")

// const login=function (req,res) {
  
//     const{email,password}=req.query;
//     users.forEach((user)=>{
//         if (user.email===email && user.password===password) {
//             return res.json({access:true})
//         }else{
//             return res.json({access:false})
//         }
//     })
// };

// module.exports=login;
const {User}=require("../DB_connection");

const login= async (req,res)=>{
    const{email,password}=req.query;
    try {
        if(email && password){
            const findUser=await User.findOne({
                where: {email}
            })
            if(!findUser) return res.status(404).json({error: "Usuario no encontrado"})
            if(findUser.password!== password) return res.status(403).json({error: "Contraseña incorrecta"})
            return res.status(200).json({access:true})
        }else{
            return res.status(400).json({error: "Faltan datos"})
        }
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports=login
