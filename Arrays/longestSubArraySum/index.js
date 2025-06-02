function longestSubArraySum_usingSubArraySum(arr, target) {
    let maxLen = 0;
    for (let i = 1; i <= arr.length - 1; i++) {
        for (j = i; j <= arr.length - 1; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum = sum + arr[k]
            }
            if (sum === target) maxLen = Math.max(maxLen, j - i + 1);
        }
    }
    console.log(maxLen);
}

function longestSubArraySum_usingSubArraySum_better(arr, target) {
    let maxLen = 0;
    for (let i = 1; i <= arr.length - 1; i++) {
        let sum = 0;
        for (j = i; j <= arr.length - 1; j++) {
            sum = sum + arr[j];
            if (sum === target) maxLen = Math.max(maxLen, j - i + 1);
        }
    }
    console.log(maxLen);
}

function longestSubArraySum_usingMap(arr, target) {
    // works optimally for positive and negatives
    // works sub-optimal for positives and zero
    let maxLen = 0;
    let prefixSumMap = new Map();
    let remainderSum = 0;
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i];
        if (sum === target) maxLen = Math.max(maxLen, i + 1);

        remainderSum = sum - target;
        if (prefixSumMap.has(remainderSum)) {
            maxLen = Math.max(maxLen, i - prefixSumMap.get(remainderSum));
        }

        if (!prefixSumMap.has(sum)) {
            prefixSumMap.set(sum, i);
        }
    }

    console.log(maxLen);
}

function longestSubArraySum_mostOptimal(arr, target) {
    // most optimal for positives and zero
    let left = 0, right = 0;
    let sum = arr[0];
    let maxLen = 0;
    let length = arr.length
    while (right < length) {
        while (left <= right && sum > target) {
            sum = sum - arr[left];
            ++left;
        }
        if (sum === target) maxLen = Math.max(maxLen, right - left + 1);
        ++right;
        if (right < length) sum = sum + arr[right];
    }
    console.log(maxLen);
}

longestSubArraySum_usingSubArraySum([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3);
longestSubArraySum_usingSubArraySum_better([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3);
longestSubArraySum_usingMap([1, 2, 3, 1, 1, 1, 1, 4, 2, 0, 0, 0, 0, 0, 3], 3);
longestSubArraySum_mostOptimal([1, 2, 3, 1, 1, 1, 1, 4, 2, 0, 0, 0, 0, 0, 3], 3);