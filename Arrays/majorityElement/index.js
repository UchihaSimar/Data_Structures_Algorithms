function majorityElement(nums) {
    // moore's voting algo
    let count = 1;
    let element = nums[0]

    for (let i = 1; i <= nums.length - 1; i++){
        if(count === 0){
            count = 1;
            element = nums[i];
            continue;
        }

        if(element === nums[i]) ++count;
        else --count;
    }

    // verification step
    let verificationCount = 0;
    for(let i =0;i<=nums.length-1;i++){
        if(nums[i] === element) ++verificationCount;
    }

   if(verificationCount > parseInt(nums.length / 2)) return element;
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))