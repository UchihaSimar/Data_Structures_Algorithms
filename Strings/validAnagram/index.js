class Solution {
    anagramStrings(s, t) {
        // A good first check for anagrams, though XOR would also catch this.
        if (s.length !== t.length) {
            return false;
        }

        let xorSum = 0;

        // XOR all character codes from string s
        for (let i = 0; i < s.length; i++) {
            xorSum ^= s.charCodeAt(i);
        }

        // XOR all character codes from string t
        for (let i = 0; i < t.length; i++) {
            xorSum ^= t.charCodeAt(i);
        }

        return xorSum === 0;
    }
}