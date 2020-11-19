const _ = require('rambda')

const numTo8bit = num => {
    const initialBit = "0" + num.toString(2).slice(-8)
    if (initialBit.length === 7) return "0" + initialBit
    else return initialBit
} 

const charToAscii = character => character.charCodeAt(0);

const stringToArrayOfAscii = text => {
    const array = text.split("")
}

console.log(numTo8bit(charToAscii('T')))
console.log(charToAscii("T"));

const encode = text => {
  return text.split("")
    .map(s => numTo8bit(s.charCodeAt(0)).split(""))
    .join(",")
    .split(",")
    .map(s => s.repeat(3))
    .join("");
}

const decode = (bits) => {
    return text
}

module.exports = { encode, decode }