import  Express  from "express";
import createSVG  from "./view/createSVG.js";
import dotenv from "dotenv";
dotenv.config()

// testing
const token = process.env.TOKEN;
import topThreeRepo from "./model/fetchData.js";


const app = Express()
const PORT = process.env.PORT;

const resp = await topThreeRepo("vskvj3"); 

app.get('/', (req, res)=> {
    res.send({status:"working"});
}) 

app.get('/svg/', (req, res)=> {

    res.send(
        createSVG(req.query, 640, 500)
    ); 
})



app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
    console.log(`TOKEN Variable: ${process.env.TOKEN}`)
})