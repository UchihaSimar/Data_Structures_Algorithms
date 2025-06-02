function majorityElement(nums) {
    let count1 = 0
    let count2 = 0;
    let element1 = 0;
    let element2 = 0;

    for (let i = 0; i <= nums.length - 1; i++) {
        if (count1 === 0 && nums[i] !== element2) {
            ++count1;
            element1 = nums[i]
        } else if (count2 === 0 && nums[i] !== element1) {
            ++count2;
            element2 = nums[i];
        } else if (element1 === nums[i]) {
            ++count1;
        } else if (element2 === nums[i]) {
            ++count2;
        } else {
            --count1;
            --count2;
        }
    }

    let verificationCount1 = 0;
    let verificationCount2 = 0;

    for (let i = 0; i <= nums.length - 1; i++) {
        if (element1 === nums[i]) ++verificationCount1;
        if (element2 === nums[i]) ++verificationCount2;
    }
    let result = [];
    if (verificationCount1 > nums.length / 3) result.push(element1);
    if (verificationCount2 > nums.length / 3) result.push(element2);
    return result;
}

console.log(majorityElement([1, 2, 1, 1, 3, 2]));
console.log(majorityElement([1, 2, 1, 1, 3, 2, 2]));