import { commandText, responseText } from "./components/IOcomponents.js"

/**
 * create whoami component
 * @param {String} name 
 * @param {int} pos 
 * @param {int} pos_inc 
 * @param {int} time 
 * @param {int} time_inc 
 * @returns 
 */
const whoamiSVG = (name, pos, pos_inc, time, time_inc)=>{
    return(`
    ${commandText("whoami", pos, time, 1)} 
    ${responseText(name, pos+pos_inc, time+time_inc, 2)} 
    `)
}

export {whoamiSVG}