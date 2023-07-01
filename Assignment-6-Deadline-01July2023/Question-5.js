console.log(`
Question -5 : The product sum of two equal-length arrays a and b is equal to the sum of a[i]  b[i] for all 0 <= i < a.length (0-indexed).

- For example, if a = [1,2,3,4] and b = [5,2,3,1], the product sum would be 15 + 22 + 33 + 41 = 22.

Given two arrays nums1 and nums2 of length n, return the minimum product sum if you are allowed to rearrange the order of the elements in nums1.

Example 1:

Input: nums1 = [5,3,4,2], nums2 = [4,2,2,5]

Output: 40

Explanation:

We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 34 + 52 + 42 + 25 = 40.
`);


//////// Programmm...

let array1 = [5, 3, 4, 2];
let array2 = [4, 2, 2, 5];

function maxProduct() {
    // For maximum 
    let maxProductSum = 0;
    array1 = array1.sort((a, b) => { return a - b; })
    array2 = array2.sort((a, b) => { return a - b; })

    for (let i = 0; i < array1.length; i++) {

        maxProductSum += array1[i] * array2[i];
        console.log(maxProductSum)
    }
    return maxProductSum;
}

function miniProduct() {
    let miniProductSum = 0;
    // Ascending order
    array1 = array1.sort((a, b) => { return a - b; })
        // descending order
    array1 = array1.sort((a, b) => { return b - a; })

    for (let i = 0; i < array1.length; i++) {
        miniProductSum += array1[i] * array2[i];
    }
    return miniProductSum;
}



let maximumProduct = maxProduct();
let minimumProduct = miniProduct();

console.log("Maximum Product of Sum : ", maximumProduct);
console.log("Minimum Product of Sum : ", minimumProduct);