function sortZeroOneTwo(nums) {
    // Dutch National Flag Algorithm
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            swap(nums, low, mid);
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            swap(nums, mid, high);
            high--;
        }
    }
    console.log(nums);
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

console.log(sortZeroOneTwo([1, 0, 2, 1, 0]))