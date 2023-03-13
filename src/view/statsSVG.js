import { commandText, responseText } from "./components/IOcomponents.js"
import { stats } from "../model/stats.js"
import { createAP } from "../utils/createAP.js"

/**
 * 
 * @param {JSON} stats: github stats as a json object
 * @param {int} pos: starting position
 * @param {int} pos_inc: increase in pos
 * @param {*} time : starting time
 * @param {*} time_inc: increase in time 
 * @returns 
 */

const statsSVG = (stats, pos, pos_inc, time, time_inc)=>{
    const positions = createAP(120, 20, 6)
    const times = createAP(4800, 1600, 6)
    //console.log(stats)


    return (
        `
        ${commandText("stats", `${positions[0]}`, `${times[0]}`, 4)} 
        ${responseText("Total Stars: " + `${stats.totalStars}`, `${positions[1]}`, `${times[1]}`, 5)}
        ${responseText("Total Commits: " + `${stats.totalCommits}`, `${positions[2]}`, `${times[2]}`, 6)}
        ${responseText("Total PRs: " + `${stats.totalPRs}`, `${positions[3]}`, `${times[3]}`, 7)}
        ${responseText("Total Issues: " + `${stats.totalIssues}`, `${positions[4]}`, `${times[4]}`, 8)}
        ${responseText("Contributed to: " + `${stats.contributedTo}`, `${positions[5]}`, `${times[5]}`, 9)} 
        `
    )
}

export {statsSVG}