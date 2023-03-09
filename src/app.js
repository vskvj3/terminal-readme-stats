import  Express  from "express";
import dotenv from "dotenv";

import { formateRequest } from "./controllers/formateData.js";


dotenv.config()

// testing
const token = process.env.TOKEN;


const app = Express()
const PORT = process.env.PORT;


app.get('/', (req, res)=> { 
    res.send({status:"working"});
}) 

app.get('/svg/', async (req, res)=> {

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(
        await formateRequest(req.query)
    ); 
})

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
    console.log(`TOKEN Variable: ${process.env.TOKEN}`)
})