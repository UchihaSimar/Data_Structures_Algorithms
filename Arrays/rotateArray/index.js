function rotateArray(arr, k) {
    let rotations = k % arr.length;
    reverse(arr, 0, rotations - 1);
    reverse(arr, rotations, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
    return arr;
}

function reverse(arr, start, end) {
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        ++start;
        --end;
    }
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 2));