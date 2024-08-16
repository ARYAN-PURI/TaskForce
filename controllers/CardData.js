let connect=require('../connect');
let getcards=(req,res)=>{
    let sql='select * from CardData';
    console.log('Get Request made');
    connect.query(sql,(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    })
};
let deletecard=(req,res)=>{
    console.log('Delete Request Made');
    let sql='delete from CardData where id=?';
    connect.query(sql,[req.body.id],(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
}
let addcard=(req,res)=>{
    console.log('Add Request Made');
    let sql='insert into CardData (question,answer) values(?,?)';
    connect.query(sql,[req.body.question,req.body.answer],(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
}
module.exports={getcards,addcard,deletecard};