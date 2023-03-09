import backgroundTerminal from "./components/background.js";
import fontStyle from "./components/fontStyle.js";
import buttons from "./components/buttons.js";
import { whoamiSVG } from "./whoamiSVG.js";
import { statsSVG } from "./statsSVG.js";


 
const createSVG = async(query, width, height, whoami, stats, fontdata)=> {
    let stylefont = await fontStyle(fontdata);
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
    
    

    ${whoami}
    ${stats}


</svg>
    `);
};

export default createSVG;