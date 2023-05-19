const app = require("express")();

app.use('/',(req,res)=>{
    return res.send(`<h1>You are on HomePage</h1>`);
})
//one new commit

app.listen('3005',()=>{
    console.log('listening on port 3005')
})