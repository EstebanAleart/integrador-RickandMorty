const {User}=require("../DB_connection");

const postUser= async (req, res)=>{
const {email, password}=req.body
try {
    if(!email || !password){
        return res.status(400).json({error: "Faltan Datos"})    
    }
    
    const [newUser,created]= await User.findOrCreate({
        where:{email},
        defaults: {
            password
        }
    })
    created ? res.status(200).json(newUser) : res.status(403).json({error: "el email ya se encuentra"})
    
} catch (error) {
    res.status(500).json({error:error.message})
}
}

module.exports=postUser;