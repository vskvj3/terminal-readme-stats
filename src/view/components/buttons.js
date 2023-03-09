    /**
     * create buttons in svg
     *
     * @param string color of the close button
     * @param string color of the maximize button
     * @param string color of the minimize button
     * @param boolean position of buttons, left if true, else right
     * @return svg button component
     */
const buttons = (close, maximize, minimize, left)=> {
    if(left){
        return (`
        <circle cx="45" cy="50" r="6" style="fill:${close}" />
        <circle cx="75" cy="50" r="6" style="fill:${maximize}" />
        <circle cx="60" cy="50" r="6" style="fill:${minimize}" />
        `)
    }
    else{
        return (`
        <circle cx="565" cy="50" r="6" style="fill:${minimize}" />
        <circle cx="580" cy="50" r="6" style="fill:${maximize}" />
        <circle cx="595" cy="50" r="6" style="fill:${close}" />
        
        `)
    }
}

export default buttons;