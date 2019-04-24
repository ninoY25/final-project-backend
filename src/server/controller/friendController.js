//import services
const friendService = require('../service/friendService');

exports.getFriendList = function(req,res,next){
  friendService.getList({}).then(
    docs =>{
      console.log(docs);
      if(docs){
        res.status(200).json(docs);
      }
      else{
        res.status(404).json({message:"no friend"});
      }
    }
  ).catch(handleError(res));
};


let handleError = (res) =>{
   const error_callback = (err) =>{
     if(err){
       console.log(err);
       res.status(500).json({error:err});
     }
   }
   return error_callback;
};