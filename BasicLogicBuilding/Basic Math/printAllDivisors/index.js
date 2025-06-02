function divisors(n) {
    let result = [];
    for(let i = 1;i<=parseInt(Math.sqrt(n));i++){
        if(n%i === 0){
            result.push(i);
            if((n/i) != i ) result.push(parseInt(n/i));
        }
    }
    return result;
}