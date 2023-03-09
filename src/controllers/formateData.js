import { stats } from "../model/stats.js"
import createSVG from "../view/createSVG.js"
import { whoamiSVG } from "../view/whoamiSVG.js";
import { statsSVG } from "../view/statsSVG.js";
import dotenv from "dotenv";

dotenv.config();
const token = process.env.TOKEN;


const formateRequest =  async (req)=> {
    let username = req.name
    console.log(req)
    
    const st = await stats(username, token);
    const statSVG = await statsSVG(st, 140, 20, 6400, 1600)
    

    const whoami = whoamiSVG(username, 80, 20, 1600, 1600);

    return createSVG(req, 640, 500, whoami, statSVG)
}

const renderStats = ()=> {

}


export {renderStats, formateRequest}