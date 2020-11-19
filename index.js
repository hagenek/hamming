const numTo8bit = num => {
    const initialBit = "0" + num.toString(2).slice(-8)
    return (initialBit.length === 7) 
      ? "0" + initialBit
      : initialBit
  } 

const correctBitError = tripleDigit => [...tripleDigit]
    .reduce((a,b) => parseInt(a) + parseInt(b)) >= 2
    ? "1"
    : "0"


console.log(correctBitError("101"))
console.log(correctBitError("001"))
console.log(correctBitError("100"))
console.log(correctBitError("110"))

const encode = text => [...text]
    .map(s => numTo8bit(s.charCodeAt(0)).split(""))
    .join(",")
    .split(",")
    .map(s => s.repeat(3))
    .join("");


const decode = (bits) => bits
    .toString()
    .match(/.{1,3}/g)
    .map(s => correctBitError(s))
    .join("")
    .match(/.{1,8}/g)
    .map(s => String.fromCharCode(parseInt(s,2).toString(10)))
    .join("")

module.exports = { encode, decode }