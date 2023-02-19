import backgroundTerminal from "./background.js";
import fontStyle from "./fontStyle.js";
//import commandText from "./commandText.js";
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



    ${commandText("whoami")}
    ${responseText(query.name)}




    <!-- command block 2 -->
    <path id='path2'>
        <!-- Multiline -->
        <animate 
            id='d2' 
            attributeName='d' 
            begin='0s' 
            dur='4800ms' 
            fill="freeze"
            values='m0,90 h0 ; m0,90 h0 ; m0,90 h600 ; m0,90 h600' 
            keyTimes='0;0.5;0.96875;1' />
    </path>
    <text 
        font-family='"Fira Code", monospace' 
        fill='#36BCF7' 
        font-size='12' 
        dominant-baseline='auto' 
        x='5%'
        text-anchor='start'>
        <textPath xlink:href='#path2'>
            $ stats
        </textPath>
    </text>

    <!-- response block 2 -->
    <path id='path3'>
        <!-- Multiline -->
        <animate 
            id='d1' 
            attributeName='d' 
            begin='0s' 
            dur='4800ms' 
            fill="freeze"
            values='m0,110 h0 ; m0,110 h0 ; m0,110 h600 ; m0,110 h600' 
            keyTimes='0;0.5;0.96875;1' />
    </path>
    <text 
        font-family='"Fira Code", monospace' 
        fill='#F7F7F7' 
        font-size='12' 
        dominant-baseline='auto' 
        x='5%'
        text-anchor='start'>
        <textPath xlink:href='#path3'>
            get
        </textPath>
    </text>


</svg>
    `);
};

export default createSVG;