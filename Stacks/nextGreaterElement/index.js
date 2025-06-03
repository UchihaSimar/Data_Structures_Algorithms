class Solution {
    /**
     * Finds the next greater element for each element in a non-circular array.
     * The next greater element is the nearest element on the right that is greater.
     * @param {number[]} nums The input array of numbers.
     * @returns {number[]} An array where each element is the next greater element, or -1 if none exists.
     */
    nextGreaterElementRight(nums) {
        const n = nums.length;
        if (n === 0) {
            return [];
        }

        // Initialize the result array with -1
        const nge = new Array(n).fill(-1);
        // Stack will store elements from the array that are candidates for being
        // a "next greater element" for elements to their left.
        const st = []; // Use a JavaScript array as a stack

        // Iterate from right to left through the input array
        for (let i = n - 1; i >= 0; i--) {
            const currentElement = nums[i];

            // While the stack is not empty and the element at the top of the stack
            // is less than or equal to the currentElement, pop from the stack.
            // These popped elements cannot be the next greater element for currentElement
            // (or any element to the left of currentElement that currentElement itself
            // would be greater than).
            while (st.length > 0 && st[st.length - 1] <= currentElement) {
                st.pop();
            }

            // After the while loop:
            // If the stack is not empty, the element at the top of the stack is the
            // next greater element for currentElement.
            if (st.length > 0) {
                nge[i] = st[st.length - 1];
            }
            // If the stack is empty, it means there's no greater element to the right
            // for currentElement, so nge[i] remains -1 (as initialized).

            // Push the currentElement onto the stack. It might be the next greater
            // element for elements to its left.
            st.push(currentElement);
        }

        return nge;
    }
}

// Example Usage based on the problem description:
const sol = new Solution();

const arr1 = [1, 3, 2, 4];
const result1 = sol.nextGreaterElementRight(arr1);
console.log(`Input: [${arr1.join(', ')}], Output: [${result1.join(', ')}]`);
// Expected: Input: [1, 3, 2, 4], Output: [3, 4, 4, -1]

const arr2 = [6, 8, 0, 1, 3];
const result2 = sol.nextGreaterElementRight(arr2);
console.log(`Input: [${arr2.join(', ')}], Output: [${result2.join(', ')}]`);
// Expected: Input: [6, 8, 0, 1, 3], Output: [8, -1, 1, 3, -1]

const arr3 = [5, 7, 1, 2, 6, 0]; // The example from your Python code
const result3 = sol.nextGreaterElementRight(arr3);
console.log(`Input: [${arr3.join(', ')}], Output: [${result3.join(', ')}]`);
// Expected (non-circular):
// 5 -> 7
// 7 -> -1
// 1 -> 2
// 2 -> 6
// 6 -> -1
// 0 -> -1
// Output: [7, -1, 2, 6, -1, -1]