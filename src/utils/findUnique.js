/***
* find unique characters in a string
* @param string string to find unique characters
* @return string with only unique characters
***/
const findUnique = (str)=>{
        str = str.split("")
        str = new Set(str);
        str = [...str].join("");
         
        return str;    
}


export {findUnique};