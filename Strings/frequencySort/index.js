function frequencySort(s) {
    //your code goes here
    let frequencyMap = new Map();
    for (let i = 0; i <= s.length - 1; i++) {
        if (frequencyMap.has(s[i])) {
            frequencyMap.set(s[i], frequencyMap.get(s[i]) + 1);
        } else {
            frequencyMap.set(s[i], 1);
        }
    }
    return Array.from(frequencyMap).sort((a, b) => {
        if (b[1] === a[1]) return a[0].charCodeAt(0) - b[0].charCodeAt(0);
        return b[1] - a[1];
    }).map(item => item[0][0]);
}

console.log(frequencySort('tree'));
console.log(frequencySort('raaaajj'));
