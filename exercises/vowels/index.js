// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowels = str
        .toLowerCase()
        .replace(/[^aeiou]/g, '');

    return vowels.length;
}

function vowelsMyIterativeSolution(str) {
    let vowelCount = 0;

    for (let character of str.toLowerCase()) {
        if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
            vowelCount++;
        }
    }

    return vowelCount;
}

function instructorIterativeSolution(str) {
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (['a','e','i','u'].includes(char)) {
            count++
        }
    }

    return count;
}

function instructorSecondSolution(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;
