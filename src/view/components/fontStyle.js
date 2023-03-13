import axios from "axios";
import {findUnique} from "../../utils/findUnique.js";
import fetch from 'node-fetch';


const fontStyle = async (fontdata, Gfamily="Fira Code", weight=700, text="$ op-languageswhoami 69vskvj3 stats -> [cy34@aurora]$ total pull requests: 1 java: 58.4% lua: 43% javascript: 3% total commits: 169")=> {
    const BASE_URL = "https://fonts.googleapis.com/css2"
    const uniqText = findUnique(text+fontdata)

    try {
        const resp = await axios.get(`${BASE_URL}?family=${Gfamily}:wght@${weight}&text=${uniqText}`);
        let fontProperties = resp.data
        //let fontCode = await fetchFontContent(findURL(fontProperties));
        console.log(fontProperties);

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
            `@font-face {
                font-family: 'Fira Code';
                font-style: normal;
                font-weight: 700;
                src: url(https://fonts.gstatic.com/l/font?kit=uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_NprFVfpP-aAyFlsQfEipErTlw) format('truetype');
              }`
        )

      }
};

/**
 * 
 * @param {String} url
 * @returns {ttf} ttf file of font
 */
const fetchFontContent = async (url )=> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
  const data = await response.toString();
  const imageURL = URL.createObjectURL(data)
  return imageURL;
}

/**
 * 
 * @param {String} fontface 
 * @returns {String} url of the font
 */
const findURL = (fontface)=> {
  const regex = /\((https\:\/\/fonts\.gstatic\.com.+?)\) format\(\'(.*?)\'\)/;
  const found = fontface.match(regex);
  return found[1];
}

export default fontStyle;