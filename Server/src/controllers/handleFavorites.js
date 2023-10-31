let myFavorites=[];

const postFav= function (req,res) {
    myFavorites.push(req.body);
    return res.json(myFavorites);
    };

const deleteFav= (req,res)=> {
    const {id}=req.params;
    const deleteChar=myFavorites.filter((char)=>char.id !== id);
    myFavorites=deleteChar;
    return res.json(myFavorites);
};

module.exports={postFav,deleteFav};