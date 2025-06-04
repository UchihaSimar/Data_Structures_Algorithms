// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
    addBinary(a, b) {
        let i = a.length - 1;
        let j = b.length - 1;
        let carry = 0;
        let result = "";

        // Loop from the least significant bit to the most significant bit
        while (i >= 0 || j >= 0 || carry > 0) {
            const digitA = i >= 0 ? parseInt(a[i]) : 0;
            const digitB = j >= 0 ? parseInt(b[j]) : 0;

            const sum = digitA + digitB + carry;
            const currentDigit = sum % 2;
            carry = Math.floor(sum / 2);

            result = currentDigit + result; // Prepend the current digit to build the result

            i--;
            j--;
        }

        // If the result is empty (e.g., inputs were "" and ""), the sum is "0"
        if (result === "") {
            return "0";
        }

        // Remove leading zeros, unless the number itself is "0"
        // For example, if result is "0010", it should become "10".
        // If result is "000", it should become "0".
        let startIndex = 0;
        while (startIndex < result.length - 1 && result[startIndex] === '0') {
            startIndex++;
        }

        return result.substring(startIndex);
    }
}