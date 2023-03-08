import { stats } from "../model/stats.js"
import createSVG from "../view/createSVG.js"
import dotenv from "dotenv";

dotenv.config();
const token = process.env.TOKEN;


const formateRequest =  async (req)=> {
    let username = req.name
    
    const s = await stats("vskvj3", token);
    console.log(s)

    return createSVG(req, 640, 500)
}

const renderStats = ()=> {

}


export {renderStats, formateRequest}