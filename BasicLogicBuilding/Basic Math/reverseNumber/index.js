function reverseNumber(number) {
    let result = 0
    while (number >= 9) {
        result = (result * 10) + (number % 10);
        number = parseInt(number / 10);
    }

    result = (result * 10) + number;
    return result;
}