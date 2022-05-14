const db = require("./database")

module.exports = {
    getAllLabs :(callback)=>{
        const queryStr = `SELECT * FROM labs`;
        db.query(queryStr , function(err , result){
            err=>{
                console.log("Ops you have an error" , err)
                return;
            }
            callback(err , result)
        })
    } ,
    getOneLab :(params , callback)=>{
        const queryStr = `SELECT * FROM labs where lab_id = ?`;
        db.query(queryStr ,params ,  function(err , result){
            err=>{
                console.log("Ops you have an error" , err)
                return;
            }
            callback(err , result)
        })
    }, 
    

}