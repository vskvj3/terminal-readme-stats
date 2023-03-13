import axios from "axios";
import {findUnique} from "../../utils/findUnique.js";
import fetch from "node-fetch";


const fontStyle = async (fontdata, Gfamily="Fira Code", weight=700, text="$ op-languageswhoami 69vskvj3 stats -> [cy34@aurora]$ total pull requests: 1 java: 58.4% lua: 43% javascript: 3% total commits: 169")=> {
    const BASE_URL = "https://fonts.googleapis.com/css2"
    const uniqText = findUnique(text+fontdata)

    try {
        const resp = await axios.get(`${BASE_URL}?family=${Gfamily}:wght@${weight}&text=${uniqText}`);

        let fontProperties = resp.data
        let url = findURL(fontProperties);
        console.log("fontStyle.js: fonturl: ", url);
        let fontdata = await downloadFont(url);
        let encoded_font = fontToB64(fontdata);

        let font_data = `
        @font-face {
          font-family: '${Gfamily}';
          font-style: normal;
          font-weight: ${weight};
          font-size: 25
          font-display: fallback;
          src: url(${encoded_font}) format('truetype');
}`

        return(
            `
            <style>
            ${font_data}
        </style>
            `
        );

      } catch (errors) {
        console.error(errors);

        return(
            `<style>
            @font-face {
              font-family: 'Fira Code';
              font-style: normal;
              font-weight: 700;
              font-display: fallback;
              src: url(data:font/truetype;base64,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) format('truetype');
            }
            </style>`
        )

      }
};

/**
 * Download the font and convert it into base64
 * @param {String} url
 * @returns {arrayBuffer} trutype font as a arraybuffer
 */
const downloadFont = async (url) => {
  try {
  const response = await fetch(url);
    if (response.ok) {
      const data = await response.arrayBuffer();
      return data;
    } else {
      throw new Error('Failed to download font');
    }
  }
  catch (error) {
    console.error(error);
  }
}

/**
 * convert the downloaded font into base64
 * @param {arrayBuffer} fontData as a array buffer
 * @returns {String} fontData encoded with base64
 */
const fontToB64 = (fontData) => {
  try {
    const base64Font =  Buffer.from(fontData, 'utf8').toString('base64') 
    const fontUrl = `data:font/ttf;base64,${base64Font}`;
    return fontUrl;
  } catch (error) {
    console.error(error);
  }
  
}

/**
 * find the url of the font from the font face
 * @param {String} fontface 
 * @returns {String} url of the font
 */
const findURL = (fontface)=> {
  const regex = /\((https\:\/\/fonts\.gstatic\.com.+?)\) format\(\'(.*?)\'\)/;
  const found = fontface.match(regex);
  return found[1];
}

export default fontStyle;