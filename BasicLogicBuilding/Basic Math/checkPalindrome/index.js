function isPalindrome(n) {
    let reversedNumber = 0
    while (n >= 9) {
        reversedNumber = (reversedNumber * 10) + (n % 10);
        n = parseInt(n / 10);
    }

    reversedNumber = (reversedNumber * 10) + n;
    if (n === reversedNumber) return true;
    return false;
}