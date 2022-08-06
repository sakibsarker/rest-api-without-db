const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
const usersRouter=require('./routes/users.route');


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/users',usersRouter);


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
    res.end;
});
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/views/about.html');
    res.end;
});
app.use((req,res,next)=>{
    res.status(404).json({
        mesage:"thsi page not fund"
    });
    res.end;
});

app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"Server error"
    });
    res.end;
});

module.exports=app;