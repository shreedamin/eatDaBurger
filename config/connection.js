var mysql = require("mysql");

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);   
}else{

    connection = mysql.createConnection({
        host: "jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "oglwgc00iefhbzlb	",
        password: "djmllfdh1094x7ts",
        database: "xbxjluamuauu7rys"
    });
};

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " +connection.threadid);
});


module.exports = connection;



