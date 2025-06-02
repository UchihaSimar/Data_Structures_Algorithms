function missingNumber(nums) {
    const sum = (nums.length * (nums.length + 1)) / 2;
    const arrSum = nums.reduce((acc, item) => {
        acc = acc + item;
        return acc;
    }, 0);
    return sum - arrSum;
}

function missingNumber_xor(nums) {
    let result = 0;
    for (let i = 1; i <= nums.length; i++) {
        result = result ^ i;
    }

    for (let i = 0; i <= nums.length - 1; i++) {
        result = result ^ nums[i]
    }
    return result;
}

console.log(missingNumber([0, 2, 3, 1, 4]));
console.log(missingNumber_xor([0, 2, 3, 1, 4]));