function findLowerBound(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let ans;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
}

console.log(findLowerBound([1,2,2,3],2));
console.log(findLowerBound([3,5,8,15,19],9));