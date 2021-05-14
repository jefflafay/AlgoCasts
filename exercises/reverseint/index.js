// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const numStr = n.toString();
    const reversedNumStr = numStr
        .split('')
        .reverse()
        .join('')
        .replace('-', '');

    return Math.sign(n) == -1 ? parseInt(reversedNumStr) * -1 : parseInt(reversedNumStr);
}

function reverseIntInstructorSolution(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join();

    return parseInt(reversed) * Math.sign(n);
}


module.exports = reverseInt;
