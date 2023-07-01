console.log(`
Question-6 : An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

Example 1:

Input: changed = [1,3,4,2,6,8]

Output: [1,3,4]

Explanation: One possible original array could be [1,3,4]:

- Twice the value of 1 is 1  2 = 2.
- Twice the value of 3 is 3  2 = 6.
- Twice the value of 4 is 4  2 = 8.

Other original arrays could be [4,3,1] or [3,1,4].
`);

/// Programmm.....

function findOriginalArray(changed) {
    const n = changed.length;
    if (n % 2 !== 0) {
        // If the length is odd, it's not possible to form an original array
        return [];
    }

    const sorted = [...changed].sort((a, b) => a - b);
    const original = [];
    const count = new Map();

    for (let i = 0; i < n; i++) {
        count.set(changed[i], (count.get(changed[i]) || 0) + 1);
    }

    for (let i = 0; i < n; i++) {
        const curr = changed[i];
        if (count.get(curr) === 0) {
            // Skip if the current value is already used
            continue;
        }

        const double = curr * 2;
        if (count.get(double) === undefined || count.get(double) === 0) {
            // If the double value doesn't exist or is already used, it's not possible to form an original array
            return [];
        }

        original.push(curr);
        count.set(curr, count.get(curr) - 1);
        count.set(double, count.get(double) - 1);
    }

    return original;
}


const changed = [1, 3, 4, 2, 6, 8];
const original = findOriginalArray(changed);
console.log(original);