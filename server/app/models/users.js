const db = require("./database")

module.exports = {
    getAllUsers :(callback)=>{
        const queryStr = `SELECT * FROM users `;
        db.query(queryStr , function(err , result){
            callback(err , result);

        })
    },

    createUser:(params , callback)=>{
        const queryStr = `INSERT INTO users(first_name,last_name,user_password,user_phone,user_type) VALUES (?,?,?,?,1);`;
        db.query(queryStr , params , function(err , result){
            callback(err , result)
        })
    },
    login :(params , callback)=>{
        const queryStr = `SELECT * FROM users WHERE user_phone = ? `;
        db.query(queryStr , params , function(err , result){
            callback(err , result)
        })
    }

}