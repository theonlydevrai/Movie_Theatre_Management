const mysql=require('mysql2');
const db= mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root@123',
    database:"theatre",
    multipleStatements: true
});
db.connect((err)=>{
    if(!err)
    {
        console.log('DB connected');
    }
    else
    {
        console.log('DB not connected'+err);
    }
});
module.exports=db;