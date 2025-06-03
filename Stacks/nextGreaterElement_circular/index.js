class Solution {
    /**
     * Finds the next greater element for each element in a circular array.
     * @param {number[]} nums The input array of numbers.
     * @returns {number[]} An array where each element is the next greater element, or -1 if none exists.
     */
    nextGreaterElements(nums) {
        const n = nums.length;
        if (n === 0) {
            return [];
        }

        // Initialize the result array with -1
        const nge = new Array(n).fill(-1);
        // Stack to store indices or values. In this Python code, it stores values.
        const st = []; // Use a JavaScript array as a stack

        // Iterate effectively twice through the array to handle circularity.
        // We go from right to left on the "doubled" conceptual array.
        // Loop runs 2*n times. 'i' goes from 2*n-1 down to 0.
        for (let i = 2 * n - 1; i >= 0; i--) {
            const currentIndexInNums = i % n;
            const currentElement = nums[currentIndexInNums];

            // While stack is not empty and the top element of the stack
            // is less than or equal to the current element from nums
            while (st.length > 0 && st[st.length - 1] <= currentElement) {
                st.pop(); // Pop elements that are not greater
            }

            // This condition 'i < n' means we are in the "second pass" over the original array indices.
            // Only during this pass do we fill the nge array.
            // The first pass (when i >= n) is primarily to populate the stack correctly
            // considering elements that might wrap around.
            if (i < n) {
                if (st.length > 0) {
                    nge[currentIndexInNums] = st[st.length - 1]; // The top of the stack is the next greater element
                }
                // If stack is empty, nge[currentIndexInNums] remains -1 (as initialized)
            }

            // Push the current element onto the stack
            st.push(currentElement);
        }
        return nge;
    }
}

// Example Usage based on the Python main block:
if (typeof module !== 'undefined' && module.exports) {
    // For Node.js environment (if you want to run it directly)
    module.exports = Solution;
} else {
    // For browser or other environments
    const obj = new Solution();
    const v1 = [5, 7, 1, 2, 6, 0];
    const res1 = obj.nextGreaterElements(v1);
    console.log("Input: [5, 7, 1, 2, 6, 0]");
    console.log("The next greater elements (circular) are:");
    console.log(res1); // or console.log(...res1); for space-separated output
    // Expected: For [5, 7, 1, 2, 6, 0] -> [7, -1, 2, 6, 7, 5]
    // 5 -> 7
    // 7 -> (wraps around) -> none greater -> -1
    // 1 -> 2
    // 2 -> 6
    // 6 -> (wraps around) -> 7
    // 0 -> (wraps around) -> 5

    const v2 = [1, 2, 1];
    const res2 = obj.nextGreaterElements(v2);
    console.log("\nInput: [1, 2, 1]");
    console.log("The next greater elements (circular) are:");
    console.log(res2);
    // Expected: For [1, 2, 1] -> [2, -1, 2]

    const v3 = [1, 3, 2, 4]; // Example from the non-circular problem description
    const res3 = obj.nextGreaterElements(v3);
    console.log("\nInput: [1, 3, 2, 4]");
    console.log("The next greater elements (circular) are:");
    console.log(res3);
    // For [1, 3, 2, 4] (circular):
    // 1 -> 3
    // 3 -> 4
    // 2 -> 4
    // 4 -> (wraps around) -> none greater -> -1
    // Output: [3, 4, 4, -1] (This happens to be the same as non-circular for this specific case)
}