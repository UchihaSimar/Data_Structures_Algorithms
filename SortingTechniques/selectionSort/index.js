function selectionSortCorrected(arr) {
    //time complexity : O(n^2)
    for (let i = 0; i < arr.length; i++) {
        let minimumIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minimumIndex]) {
                minimumIndex = j;
            }
        }

        if (minimumIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minimumIndex];
            arr[minimumIndex] = temp;
        }
    }
    return arr;
}

console.log(selectionSortCorrected([13, 46, 24, 52, 20, 9])); // Expected: [9, 13, 20, 24, 46, 52]
console.log(selectionSortCorrected([5, 1, 4, 2, 8]));    // Expected: [1, 2, 4, 5, 8]