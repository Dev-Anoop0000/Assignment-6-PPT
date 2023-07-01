console.log(`
Question-7; Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
Example 1:= Input: n = 3

Output: [[1,2,3],[8,9,4],[7,6,5]]
`);

/// Programmmm.....

function generateMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let num = 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;

    while (num <= n * n) {
        // Fill top row from left to right
        for (let i = colStart; i <= colEnd; i++) {
            matrix[rowStart][i] = num++;
        }
        rowStart++;

        // Fill right column from top to bottom
        for (let i = rowStart; i <= rowEnd; i++) {
            matrix[i][colEnd] = num++;
        }
        colEnd--;

        // Fill bottom row from right to left
        for (let i = colEnd; i >= colStart; i--) {
            matrix[rowEnd][i] = num++;
        }
        rowEnd--;

        // Fill left column from bottom to top
        for (let i = rowEnd; i >= rowStart; i--) {
            matrix[i][colStart] = num++;
        }
        colStart++;
    }

    return matrix;
}


const n = 3;
const spiralMatrix = generateMatrix(n);
console.log(spiralMatrix);