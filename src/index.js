import  Express  from "express";
import createSVG  from "./components/createSVG.js";
import dotenv from "dotenv";
dotenv.config()

// testing
const token = process.env.TOKEN;
import topThreeRepo from "./dataFetch/fetchData.js";
const res = await  topThreeRepo("vskvj3"); 

const app = Express()
const PORT = process.env.PORT;

app.get('/', (req, res)=> {
    res.send({status:"working"});
}) 

app.get('/svg/', (req, res)=> {
    res.send(
        createSVG(req.query)
    ); 
})



app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
    console.log(`TOKEN Variable: ${process.env.TOKEN}`)
    console.log(res);
})