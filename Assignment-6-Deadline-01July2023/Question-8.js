console.log(`
Question-8 : Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

Example 1: Input: mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

Output:[[7,0,0],[-7,0,3]]
`);


/// Programmm......
function multiplySparseMatrices(mat1, mat2) {
    const m = mat1.length; // Number of rows in mat1
    const k = mat1[0].length; // Number of columns in mat1 (should be equal to the number of rows in mat2)
    const n = mat2[0].length; // Number of columns in mat2
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let x = 0; x < k; x++) {
                result[i][j] += mat1[i][x] * mat2[x][j];
            }
        }
    }

    return result;
}


const mat1 = [
    [1, 0, 0],
    [-1, 0, 3]
];
const mat2 = [
    [7, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
];
const multiplicationResult = multiplySparseMatrices(mat1, mat2);
console.log(multiplicationResult);