function isArraySorted(arr, n){
    if(n === 1) return 1;
    return arr[n-1]<arr[n-2] ? 0 : isArraySorted(arr, n-1);
}

console.log([1,2,3,4,5], 5);