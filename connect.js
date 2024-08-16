const mysql=require('mysql');
let connect=mysql.createConnection({
    connectionLimit : 100,
    waitForConnections : true,
    queueLimit :0,
    host:'sql12.freemysqlhosting.net',
    user:'sql12726075',
    password:'XuGmzSkWcK',
    database:'sql12726075',
    debug    :  true,
    wait_timeout : 28800,
    connect_timeout :10
});
module.exports=connect;
