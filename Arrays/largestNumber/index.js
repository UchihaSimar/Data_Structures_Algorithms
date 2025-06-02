function largestNumber_bruteForce(nums) {
    // time complexity: NlogN
    // space complexity -> Input space: O(N)
    return nums.sort()[nums.length - 1];
}

function largestNumber_linearSearch(nums) {
    // time complexity: O(N)
    // space complexity -> Input space: O(N) + Auxiliary Space:O(1)
    let max = -Infinity;
    for (let i = 0; i <= nums.length - 1; i++) {
        if (max < nums[i]) max = nums[i];
    }

    return max;
}

console.log(largestNumber_bruteForce([3, 3, 6, 1]));
console.log(largestNumber_linearSearch([3, 3, 6, 1]));