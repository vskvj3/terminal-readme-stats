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
    let time = 1600
    let time_delay = 1600

    let fontdata = JSON.stringify(st)

    console.log(req.stime)
    
    if(req.stime){
        time = req.stime
        console.log("time:"+time)
    }
    if(req.delay){
        time_delay = req.delay
        console.log("time_delay: "+time_delay)
    }

    let whoami=""
    let statSVG=""
    if(req.whoami=='true'){
        console.log("whoami: "+time_delay)
        whoami = whoamiSVG(username, 80, 20, time, time_delay);
        time += 2*time_delay
        
    }
    if(req.stats=='true'){
        console.log("time inside stats :" + time)
        statSVG = await statsSVG(st, 140, 20, time, time_delay)
        time += 7*time_delay
    }
    

    return createSVG(req, 640, 500, whoami, statSVG, fontdata)
}

const renderStats = ()=> {

}


export {renderStats, formateRequest}