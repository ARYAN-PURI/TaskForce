const express=require('express');
const app=express();
const connect=require('./connect');
const cors=require('cors');
const controller=require('./controllers/CardData')
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
connect.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('DataBase Connected SuccessFully');
    }
});
app.get('/getcards',controller.getcards);
app.post('/addcard',controller.addcard);
app.delete('/deletecard',controller.deletecard);
app.listen(3000,()=>{console.log('DataBase is Listening at port 3000')});