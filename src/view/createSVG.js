import backgroundTerminal from "./background.js";
import fontStyle from "./fontStyle.js";
import buttons from "./buttons.js";
import { commandText, responseText } from "./IOcomponents.js";

let stylefont = await fontStyle();
 
const createSVG = (query)=> {
    return(`
    <svg 
    id="terminal" 
    Xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 360" 
    shape-rendering="geometricPrecision" 
    text-rendering="geometricPrecision">

    <!--- the terminal background should be here --->
    ${backgroundTerminal()}
    ${console.log("printing")}

    <!--- font style should be here --->
    ${stylefont}

    ${buttons('#BF616A', '#EBCB8B', '#A3BE8C')}
    

    ${commandText("whoami", 80, 1600, 1)} ${responseText(query.name, 100, 3200, 2)} ${commandText("stats", 120, 4800, 3)}

</svg>
    `);
};

export default createSVG;