const numTo8bit = num => {
    const initialBit = "0" + num.toString(2).slice(-8)
    if (initialBit.length === 7) return "0" + initialBit
    else return initialBit
} 

const correctBitError = (tripleDigit) => {
    let zeroes = 0;
    let ones = 0;

    tripleDigit.split("").forEach(d => {
        if (d === "0") zeroes++ 
        else ones++
    })

    if (zeroes > ones) return "0"
    else return "1"
}

const encode = text => {
  return text.split("")
    .map(s => numTo8bit(s.charCodeAt(0)).split(""))
    .join(",")
    .split(",")
    .map(s => s.repeat(3))
    .join("");
}

const decode = (bits) => {
    const newBits = bits.toString().match(/.{1,3}/g)
    .map(s => correctBitError(s))

    const newEight = newBits
                        .join("")
                        .match(/.{1,8}/g)
                        .map(s => String.fromCharCode(parseInt(s,2).toString(10)))
                        .join("")
    return newEight;
}



module.exports = { encode, decode }