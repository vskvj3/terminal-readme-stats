    /**
     * create buttons in svg
     *
     * @param string fill color
     * @param string stroke color
     * @return svg background component
     */
const backgroundTerminal = (fill, stroke)=> {
    return(
        `
        <rect 
        id="rectangle"
        width="50%" 
        height="50%" 
        rx="5" 
        ry="5" 
        transform="matrix(1.849084 0 0 1.628943 27.87854 33.39513)"
        fill='${fill}'
        stroke='${stroke}' />
        `
    )
}

export default backgroundTerminal