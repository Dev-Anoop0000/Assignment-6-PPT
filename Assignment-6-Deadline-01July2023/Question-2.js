console.log(`
Question -2:You are given an m x n integer matrix matrix with the following two properties:
- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.

   Input:    matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output:    true

`);
////Programmm,,,,,

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
let target = 3;

function checkTarget(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
}

let result = checkTarget(matrix, target);
console.log(result);