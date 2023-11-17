const {Favorite}=require ("../DB_connection");

// const postFav=async (req, res)=>{
//     const {id, name, origin,status,image,species,gender}=req.body;
//     try {
//         if(!id || !name || !origin || !status || !image || !species || !gender){
//             return res.status(401).json({error: "Faltan datos"})
            
//         }
//         const [favChar,created]=await Favorite.findOrCreate({
//             where:{id, name, origin,status,image,species,gender}
//         })
//         if(!created){
//             return res.status(409).json({error:"El personaje ya se encuentra en favoritos"})
//         }
//         const fav= await Favorite.findAll()
//         return res.status(200).json(fav)

            
        
    
//     } catch (error) {
//         return res.status(500).json({error:error.message})
//     }
// }

const postFav = async (req, res) => {
    try {
      const { id, name, status, origin, gender, image, species } = req.body;
      if (!id || !name || !status || !origin || !gender || !image || !species) {
        return res.status(401).json({ error: "Faltan Datos" });
      }
      const [charFav, created] = await Favorite.findOrCreate({
        where: { id, name, status, origin, gender, image, species },
      });
      if (!created) {
        return res
          .status(409)
          .json({ error: "El personaje ya existe en favoritos" });
      }
  
      const allFavorites = await Favorite.findAll();
      return res.json(allFavorites);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
  

module.exports=postFav