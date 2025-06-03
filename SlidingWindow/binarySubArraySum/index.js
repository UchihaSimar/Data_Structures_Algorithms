function numSubarraysWithSum(nums, goal) {
    //your code goes here
    let count = 1 << nums.length;
    let result = 0;
    for (let num = 0; num <= count - 1; num++) {
        let sum = 0;
        for (let j = num; j <= nums.length - 1; j++) {
            sum = sum + nums[j];
            if (sum === goal) ++result;
        }

    }
    return result;
}

console.log(numSubarraysWithSum([1, 1, 0, 1, 0, 0, 1], 3));
console.log(numSubarraysWithSum([0, 0, 0, 0, 1],0));