const labModels = require("../models/labs");
module.exports = {
    getAllLabs : (req , res)=>{
        labModels.getAllLabs(function(err , result){
            err =>{
                console.log("ops you have an error" , err)
            }
            res.json(result)
        })
    },
    getOneLab : (req , res)=>{
        var params = [req.params.labId];
        labModels.getOneLab (params , function(err , result){
            err =>{
                console.log("ops you have an error" , err)
            }
            res.json(result)
        })
    }
    
}