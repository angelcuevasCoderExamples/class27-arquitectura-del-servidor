const express = require('express');
const port = 3000;
const cors = require('cors')

const app = express();
app.use(cors({
    origin: ['http://127.0.0.1:5501']
}))

app.get('/test',(req, res)=>{
    res.send({status:"success"})
})

app.listen(port, ()=>console.log(`server up and running ${port}`))