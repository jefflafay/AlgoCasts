// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};

    for (const char of str) {
        chars[char] = chars[char] + 1 || 1;
    }

    let maxCount = 0;
    let maxChar = '';

    for (const char of str) {
        if (chars[char] > maxCount) {
            maxCount = chars[char];
            maxChar = char;
        }
    }

    return maxChar;
}

function maxCharInstructorSolution(str) {
    const charMap = {};

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    let max = 0;
    let maxChar = '';

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
