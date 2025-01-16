function roundTo(num, places) {
    const factor = Math.pow(10, places);
    return Math.round(num * factor) / factor;
}

let number = 4.56789;
let roundedToTwoDecimals = roundTo(number, 2);