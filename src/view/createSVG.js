import backgroundTerminal from "./background.js";
import fontStyle from "./fontStyle.js";
import buttons from "./buttons.js";
import { commandText, responseText } from "./IOcomponents.js";

let stylefont = await fontStyle();
 
const createSVG = (query, width, height)=> {
    return(`
    <svg 
    id="terminal" 
    Xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 ${width} ${height}" 
    <--- 640 360 --->
    shape-rendering="geometricPrecision" 
    text-rendering="geometricPrecision">

    <!--- the terminal background should be here --->
    ${backgroundTerminal("#4C566A", "#a1a1a1")}

    <!--- font style should be here --->
    ${stylefont}

    ${buttons('#BF616A', '#EBCB8B', '#A3BE8C', true)}
    
    

    ${commandText("whoami", 80, 1600, 1)} 
    ${responseText(query.name, 100, 3200, 2)} 
    ${commandText("stats", 120, 4800, 3)}
    ${responseText("total stars: 1", 140, 5400, 4)} 
    ${responseText("total pull requests: 1", 160, 7000, 5)} 
    ${responseText("total commits: 169", 180, 8600, 6)}
    ${commandText("top-languages", 200, 10200, 7)}
    ${responseText("java: 58.4%", 220, 11800, 8)} 
    ${responseText("lua: 43%", 240, 13400, 9)} 
    ${responseText("javascript: 3%", 260, 15000, 10)}


</svg>
    `);
};

export default createSVG;