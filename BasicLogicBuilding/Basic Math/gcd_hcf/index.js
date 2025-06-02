function GCD(a, b) {
    while (a > 0 && b > 0) {
        if (a > b) a = a % b;
        b = b % a;
    }

    if (a === 0) return b;
    return a;
}