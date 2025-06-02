function maximumSubArraySum_usingAllSubArray(arr) {
    // tc -> O(N^3)
    let maxSumArray;
    let maxSum = -Infinity;
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i; j <= arr.length - 1; j++) {
            let sum = 0;
            let subArr = [];
            for (let k = i; k <= j; k++) {
                sum = sum + arr[k];
                subArr.push(arr[k]);
            }
            if (sum > maxSum) {
                maxSum = sum;
                maxSumArray = subArr;
            }
        }
    }

    console.log(maxSum);
    console.log(maxSumArray);
}

function maximumSubArraySum_usingAllSubArray_better(arr) {
    // tc -> O(N^2)
    let maxSumArray;
    let maxSum = -Infinity;
    for (let i = 0; i <= arr.length - 1; i++) {
        let sum = 0;
        let subArr = [];
        for (let j = i; j <= arr.length - 1; j++) {
            sum = sum + arr[j];
            subArr.push(arr[j]);
            if (sum > maxSum) {
                maxSum = sum;
                maxSumArray = subArr;
            }
        }
    }

    console.log(maxSum);
    console.log(maxSumArray);
}

function maximumSubArraySum_kadaneAlgo(arr) {
    let maxSum = -Infinity;
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i];

        if (sum > maxSum) maxSum = sum;

        // check if sum is less than zero, set it to zero
        if (sum < 0) sum = 0;
    }

    return maxSum;
}



maximumSubArraySum_usingAllSubArray([-2, -3, 4, -1, -2, 1, 5, -3]);
maximumSubArraySum_usingAllSubArray_better([-2, -3, 4, -1, -2, 1, 5, -3]);
console.log(maximumSubArraySum_kadaneAlgo([-2, -3, 4, -1, -2, 1, 5, -3]));