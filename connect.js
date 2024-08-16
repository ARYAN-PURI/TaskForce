const mysql=require('mysql');
let connect=mysql.createConnection({
    host:'sql12.freemysqlhosting.net',
    user:'sql12726075',
    password:'XuGmzSkWcK',
    database:'sql12726075'
});
module.exports=connect;