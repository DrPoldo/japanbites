var mysql = require('mysql');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'japanbites',
	password : '!hv548MnL#!',
	database : 'japanbites'
});

function addUserProfile(userProfile, callback){
    connection.query
}