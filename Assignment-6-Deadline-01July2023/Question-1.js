console.log(`
Question -1:A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return   any of them  .
Example 1:  
Input: s = "IDID"
Output:[0,4,1,3,2]
`);

////Programmmm....
function reconstructPermutation(s) {
    const n = s.length;
    const perm = [];
    let current = 0;

    for (let i = 0; i <= n; i++) {
        if (i === n || s[i] === 'I') {
            perm.push(current++);
        } else {
            perm.push(current--);
        }
    }

    return perm;
}

const s = "IDID";
const permutation = reconstructPermutation(s);
console.log(permutation);