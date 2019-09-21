var mysql      = require('mysql');
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);

}else{
connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '232400',
  database : 'burgers_db'


});

};
 
connection.connect(function(err){
    if(err) throw err;
    console.log('connected as' + connection.threadId)
});

module.exports = connection;