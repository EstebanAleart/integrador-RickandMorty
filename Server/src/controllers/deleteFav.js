const {Favorite}=require ("../DB_connection");

const deleteFav=async (req,res)=>{
    let {id}=req.params;
    try {
        if(id){
            await Favorite.destroy({
                where:{id}
            })
            const fav= await Favorite.findAll()
            return res.status(200).json(fav)
        }else{
            return res.status(401).json({error: "Faltan Datos"})
        }

    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

module.exports=deleteFav;