const str = "JavaScript is awesome"

function reverseAString(str) {
    

    return Array.from(str).reverse().join("");
}

console.log(`Reversed string is: ${reverseAString(str)}`)
