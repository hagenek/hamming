const _ = require('rambda')

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

const numTo8bit = (num) => "00000000"+num.toString(2).slice(-8);

console.log(numTo8bit(101));

const encode = (text) => {
    // Converting to ASCII
  const bits = text.split("").map(s => dec2bin(s.charCodeAt(0)).repeat(3)).join("");
    return bits;
}

const decode = (bits) => {
    return text
}

module.exports = { encode, decode }