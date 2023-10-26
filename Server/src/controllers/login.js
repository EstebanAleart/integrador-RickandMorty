const users = require("../utils/users")

const login=function (req,res) {
  
    const{email,password}=req.query;
    users.forEach((user)=>{
        if (user.email===email && user.password===password) {
            return res.json({access:true})
        }else{
            return res.json({access:false})
        }
    })
};

module.exports=login;