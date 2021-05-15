// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i = 0; i < n; i++) {
        console.log('#'.repeat(i + 1).padEnd(n));
    }
}

function stepsInstructorSolutionOne(n) {
    for (let row = 0; row < n; row++) {
        let step = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log(step);
    }
}

function stepsInstructorSolutionTwo(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    // we're at the end of the row
    if (n === stair.length) {
        console.log(stair);
        stepsInstructorSolutionTwo(n, row + 1);
        return;
    }

    // still building the row
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    stepsInstructorSolutionTwo(n, row, stair);
}

module.exports = steps;
