import axios from "axios";
import {findUnique} from "../../utils/findUnique.js";


const fontStyle = async (Gfamily="Fira Code", weight=700, text="$ op-languageswhoami 69vskvj3 stats -> [cy34@aurora]$ total pull requests: 1 java: 58.4% lua: 43% javascript: 3% total commits: 169")=> {
    const BASE_URL = "https://fonts.googleapis.com/css2"
    const uniqText = findUnique(text)

    try {
        const resp = await axios.get(`${BASE_URL}?family=${Gfamily}:wght@${weight}&text=${uniqText}`);
        let fontProperties = resp.data
        
    
        //console.log(fontProperties);

        return(
            `
            <style>
            ${fontProperties}
        </style>
            `
        );

      } catch (errors) {
        console.error(errors);

        return(
            `
            @font-face {
                font-family: 'Fira Code';
                font-style: normal;
                font-weight: 700;
                src: url(https://fonts.gstatic.com/l/font?kit=uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_NprFVfpP-aAyFlsQfEipErTlw&skey=33bc0af28fd31bc7&v=v21) format('truetype');
              }
            `
        )

      }
};


export default fontStyle;