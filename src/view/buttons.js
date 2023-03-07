const buttons = (close, minimize, maximize)=> {
    return (`
    <circle cx="45" cy="50" r="6" 
    style="fill:${close}" />
    <circle cx="60" cy="50" r="6" 
    style="fill:${minimize}" />
    <circle cx="75" cy="50" r="6" 
    style="fill:${maximize}" />
    `)
}

export default buttons;