function secondLargestNumber(nums) {
    // time complexity: O(N)
    // space complexity: O(1)
    let max = nums[0];
    let secondMax = -Infinity;
    for (let i = 1; i <= nums.length - 1; i++) {
        if (max < nums[i]) {
            secondMax = max;
            max = nums[i];
        }

        if (max > nums[i] && nums[i] > secondMax) {
            secondMax = nums[i]
        }
    }

    return secondMax;
}

console.log(secondLargestNumber([3, 3, 6, 1]));