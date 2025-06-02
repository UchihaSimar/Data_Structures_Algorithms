function twoSum(arr, target) {
    let result = [];
    let sumMap = new Map();
    for(let i=0;i<=arr.length-1;i++){
        if(sumMap.has(target-arr[i])){
            result = [sumMap.get(target-arr[i]),i];
        }else{
            sumMap.set(arr[i],i);
        }
    }
    return result;
}

console.log(twoSum([1, 6, 2, 10, 3],7));
console.log(twoSum([1, 3, 5, -7, 6, -3],0));

