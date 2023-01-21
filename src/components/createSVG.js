import backgroundTerminal from "./background.js";
import fontStyle from "./fontStyle.js";

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

    <!--- font style info should be here --->
    ${fontStyle()}


    <!-- command block 1-->
    <path id='path0'>
        <!-- Multiline -->
        <animate 
            id='d0' 
            attributeName='d' 
            begin='0s' 
            dur='1600ms' 
            fill="freeze"
            values='m0,50 h0 ; m0,50 h0 ; m0,50 h600 ; m0,50 h600'
            keyTimes='0;0;0.9375;1' />
    </path>
    <text 
        font-family='"Fira Code", monospace' 
        fill='#36BCF7' 
        font-size='12' 
        dominant-baseline='auto' 
        x='5%'
        text-anchor='start'>
        <textPath xlink:href='#path0'>
            $ whoami
        </textPath>
    </text>


    <!-- response block 1 -->
    <path id='path1'>
        <!-- Multiline -->
        <animate 
            id='d1' 
            attributeName='d' 
            begin='0s' 
            dur='3200ms' 
            fill="freeze"
            values='m0,70 h0 ; m0,70 h0 ; m0,70 h600 ; m0,70 h600' 
            keyTimes='0;0.5;0.96875;1' />
    </path>
    <text 
        font-family='"Fira Code", monospace' 
        fill='#F7F7F7' 
        font-size='12' 
        dominant-baseline='auto' 
        x='5%'
        text-anchor='start'>
        <textPath xlink:href='#path1'>
            ${query.name}
        </textPath>
    </text>

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


</svg>
    `);
};

export default createSVG;