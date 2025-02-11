function toCamelCase(cssStyle) {
    return cssStyle.replace(/-([a-z])/g, function(match, letter) {
        return letter.toUpperCase();
    });
}

console.log(toCamelCase("font-size")); 
console.log(toCamelCase("background-color")); 
console.log(toCamelCase("text-align"));     