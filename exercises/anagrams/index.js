// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    function charMap(str) {
        const charMap = {};
        const letters = str.replace(/[\W]/g, '').toLowerCase();

        for (const char of letters) {
            charMap[char] = charMap[char] + 1 || 1;
        }

        return charMap;
    }

    const charMapA = charMap(stringA);
    const charMapB = charMap(stringB);

    if (Object.keys(charMapA).length != Object.keys(charMapB).length) {
        return false;
    }

    for (const key in charMapA) {
        if (charMapA[key] !== charMapB[key]) {
            return false;
        }
    }

    return true;
}


function anagramsInstructorSolutionOne(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}


function buildCharMap(str) {
    const charMap = {};
    
    for (const char of str.replace(/[\W]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

function anagramsInstructorSolutionTwo(stringA, stringB) {
    function sortLetters(str) {
        return str
            .replace(/[\W]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    }

    return sortLetters(stringA) === sortLetters(stringB);
}


module.exports = anagrams;
