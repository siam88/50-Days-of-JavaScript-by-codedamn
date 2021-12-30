const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here

    return parseInt(Array.from(num.toString()).reverse().join(""));
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
