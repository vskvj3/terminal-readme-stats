const commandText = (command, xpos, dur, path, prompt = "[cy34@aurora]$ ")=>{
    console.log("creating command text")
    return(
    `
    <!-- command block ${path}-->
    <path id='path${path}'>
        <!-- Multiline -->
        <animate 
            id='d${path}' 
            attributeName='d' 
            begin='0s' 
            dur='${dur}ms'
            fill="freeze"
            values='m0, ${xpos}, h0; m0, ${xpos}, h0; m0, ${xpos}, h600; m0, ${xpos}, h600'
            keyTimes='0;0.5;0.75;1' />
    </path>
    <text 
        font-family='"Fira Code", monospace' 
        fill='#36BCF7' 
        font-size='12' 
        dominant-baseline='auto' 
        x='5%'
        text-anchor='start'>
        <textPath xlink:href='#path${path}'>
            ${prompt} ${command}
        </textPath>
    </text>
    `
    )
}

const responseText = (name, xpos, dur, path)=> {
    console.log("creating response text")
    return( 
    `
    <!-- response block ${path} -->
    <path id='path${path}'>
        <!-- Multiline -->
        <animate 
            id='d${path}' 
            attributeName='d' 
            begin='0s' 
            dur='${dur}ms' 
            fill="freeze"
            values='m0,${xpos}, h0; m0, ${xpos}, h0; m0, ${xpos}, h600; m0, ${xpos}, h600'
            keyTimes='0;0.5;0.75;1' />
    </path>
    <text 
        font-family='"Fira Code", monospace' 
        fill='#F7F7F7' 
        font-size='12' 
        dominant-baseline='auto' 
        x='5%'
        text-anchor='start'>
        <textPath xlink:href='#path${path}'>
            ${name}
        </textPath>
    </text>
    `
    )
}

export  {commandText, responseText};