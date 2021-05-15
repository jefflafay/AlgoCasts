// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const midPoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';
        
        for (let column = 0; column < 2 * n - 1; column++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }
}

pyramid(3);

function pyramidInstructorIterative(n) {
    const midPoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';
        
        for (let column = 0; column < 2 * n - 1; column++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }
}

function pyramidInstructorRecursive(n, row = 0, level = '') {
    const columnCount = 2 * n - 1;

    if (row === n) {
        return;
    }

    if (level.length === columnCount) {
        console.log(level);
        pyramidInstructorRecursive(n, row + 1);
        return;
    }

    const midpoint = Math.floor(columnCount / 2);
    let add;

    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    pyramidInstructorRecursive(n, row, level + add);
}

module.exports = pyramid;
