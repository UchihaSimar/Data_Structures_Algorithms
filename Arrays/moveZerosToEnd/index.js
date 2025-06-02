function moveZeroes(nums) {
    // find first zero index
    let j;
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] === 0) {
            j = i;
            break;
        }
    }

    for (let i = j + 1; i <= nums.length - 1; i++) {
        if (nums[i] != 0) {
            let temp = nums[i];
            nums[i] = 0;
            nums[j] = temp;
            j++;
        }
    }
    return nums;
}

console.log(moveZeroes([0, 1, 4, 0, 5, 2]));
console.log(moveZeroes([0, 0, 0, 1, 3, -2]))