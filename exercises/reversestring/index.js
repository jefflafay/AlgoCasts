// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        const charToAppend = str[i];
        reversedStr += charToAppend;
    }

    return reversedStr;
}

function reverseInstructorSolutionOne(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

function reverseInstructorSolutionTwo(str) {
    let reversed = '';

    for (const character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

function reverseInstructorSolutionThree(str) {
    return str
        .split('')
        .reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
