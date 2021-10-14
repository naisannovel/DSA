function factorial(number){
    let factNumber = 1;
    for(i = 2; i <= number; i++){
        factNumber *= i;
    }
    return factNumber;
}

console.log(factorial(5));