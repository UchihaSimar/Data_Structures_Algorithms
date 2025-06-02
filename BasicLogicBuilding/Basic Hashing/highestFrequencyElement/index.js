function mostFrequentElement(nums) {
    const dataMap = new Map()
    for (const elem of nums) {
        if (dataMap.has(elem)) dataMap.set(elem, dataMap.get(elem) + 1);
        else dataMap.set(elem, 1);
    }

    let maxFreq = 0
    let maxFreqElem;
    const dataObj = Object.fromEntries(dataMap);
    for (const key in dataObj) {
        if (maxFreq < dataObj[key]) {
            maxFreq = dataObj[key];
            maxFreqElem = key;
        }
    }
    return maxFreqElem;
}