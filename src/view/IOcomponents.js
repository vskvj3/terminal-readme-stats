const commandText = (command, prompt = "$")=>{
    console.log("creating command text")
    return(
    `
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
            ${prompt} ${command}
        </textPath>
    </text>
    `
    )
}

const responseText = (name)=> {
    console.log("creating response text")
    return(
    `
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
            ${name}
        </textPath>
    </text>
    `
    )
}

export  {commandText, responseText};