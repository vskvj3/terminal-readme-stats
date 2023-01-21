import  Express  from "express";
import createSVG  from "./components/createSVG.js";

const app = Express()
const PORT = 5000;

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
})