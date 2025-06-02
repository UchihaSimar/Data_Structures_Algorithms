function countDigit(number) {
    // Brute Force
    let count = 0;
    while(number > 9){
        ++count;
        number = parseInt(number/10);
    }   
    return ++count;
}