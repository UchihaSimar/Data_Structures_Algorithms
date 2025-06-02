// generate all permutations
function generatePermutations(arr, left, right, permutations) {
    if (left === right) {
        permutations.push([...arr]); // Push a COPY of the current state of arr
    } else {
        for (let i = left; i <= right; i++) {
            // Swap
            let temp = arr[left];
            arr[left] = arr[i];
            arr[i] = temp;

            generatePermutations(arr, left + 1, right, permutations);

            // Swap back (backtrack)
            temp = arr[left];
            arr[left] = arr[i];
            arr[i] = temp;
        }
    }
    return permutations;
}

function nextPermutation(arr) { // Corrected typo
    // Handle empty array case to avoid arr.length - 1 becoming -1 if not desired
    if (arr.length === 0) {
        console.log([[]]); // Or console.log([]) depending on definition of permutations of empty set
        return;
    }
    const permutationsResult = []; // Initialize an empty array for permutations
    generatePermutations(arr, 0, arr.length - 1, permutationsResult);
    console.log(permutationsResult);
}

nextPermutation([1, 2, 3]);
// Expected output with the fix:
// [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 2, 1],
//   [3, 1, 2]
// ]
// (Order might vary based on the exact permutation algorithm variant, but all 6 unique permutations should be there as distinct arrays)