// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    const numbers = Array(n).fill(0).map((_, i) => i + 1);

    for (let num of numbers) {
        const isMultipleOfThree = num % 3 === 0;
        const isMultipleOfFive = num % 5 === 0;

        let answer = '';

        if (isMultipleOfThree) { 
            answer += 'fizz';
        }

        if (isMultipleOfFive) {
            answer += 'buzz'
        }

        if (answer == '') {
            console.log(num);
        } else {
            console.log(answer);
        }
    }
}

function fizzBuzzInstructorSolution(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

module.exports = fizzBuzz;
