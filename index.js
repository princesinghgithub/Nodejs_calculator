const express=require('express');
const bodyparser=require('body-parser');
const app=express();

const PORT=process.env.PORT||3000
app.use(bodyparser.urlencoded({extended:true}));
app.get('/calculator',(req,res)=>{
res.sendFile(__dirname+"/calci.html")
});
app.post('/calculator',(req,res)=>{
    console.log(req.body);
    let n1=Number(req.body.v1);
    let n2=Number(req.body.v2)
    let sum=n1+n2
    res.send("the sum of the two number" + "" + sum);
    });
app.listen(PORT,()=>{
    console.log("server is connected");
})