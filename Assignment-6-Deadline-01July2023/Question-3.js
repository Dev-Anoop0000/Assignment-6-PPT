console.log(`
Question -3:Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Example 1:

Input: arr = [2,1]

Output:false;
`);


//// Progarmmmm.......

function validMountainArray(arr) {
    const n = arr.length;
    let i = 0;

    // Step 1: Find the peak
    while (i < n - 1 && arr[i] < arr[i + 1]) {
        i++;
    }

    // Step 2: Check if peak is not at the beginning or end
    if (i === 0 || i === n - 1) {
        return false;
    }

    // Step 3: Check the descending part of the array
    while (i < n - 1 && arr[i] > arr[i + 1]) {
        i++;
    }

    // Step 4: Check if the entire array is traversed
    return i === n - 1;
}


const arr = [0, 2, 3, 4, 5, 2, 1, 0];
const isValidMountainArray = validMountainArray(arr);
console.log(isValidMountainArray);