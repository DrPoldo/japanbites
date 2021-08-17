var mysql = require('mysql2');

class Db{
    constructor(){
        this.connection = mysql.createConnection({
            host     : 'localhost',
            /*
            user     : 'japanbytes',
            password : '!hv548MnL#!',
            */
            
            user: 'root',
            password: 'sup3rP@$$w0rd',
            
            database : 'japanbites'
        });
    }   


    addUserProfile(userProfile, callback) {
        /*
        this.connection.connect(function(err){
            if(err)
                callback(err);
        });
        */
        this.connection.query("insert into users(id, username, email) values(?, ?, ?)", 
        [
            userProfile.id,
            userProfile.nickname,
            userProfile.emails[0].value
        ], callback);
    }

    userProfileExists(userId, callback) {
        /*
        this.connection.connect(function(err){
            if(err)
                callback(err);
        });
        */
        this.connection.query("select 1 from users where id = ?", [userId], callback)
    }
}

module.exports = Db;