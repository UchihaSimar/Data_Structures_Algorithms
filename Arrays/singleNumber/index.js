function singleNumber(nums) {
    let result = nums[0];
    for (let i = 1; i <= nums.length - 1; i++) {
        result = result ^ nums[i];
    }

    return result;
}