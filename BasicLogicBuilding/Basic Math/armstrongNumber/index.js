function isArmstrong(n) {
    let countOfDigits = parseInt(Math.log10(n) + 1);
    let originalNumber = n;
    let result = 0;
    while(n > 9){
        result = result + (n%10)**countOfDigits;
        n = parseInt(n/10);
    }
    result = result + n**countOfDigits;
    return result == originalNumber;
}
