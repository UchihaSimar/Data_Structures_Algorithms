function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let tempMaxCount = 0;
    for(let i = 0;i<=nums.length-1;i++){
        if(nums[i] === 1){
            ++tempMaxCount;
        }else{
            if(tempMaxCount > maxCount) maxCount = tempMaxCount;
            tempMaxCount = 0;
        }
    }
    return maxCount;
}

console.log(findMaxConsecutiveOnes([0, 0, 0, 0, 0, 0, 0, 0]));