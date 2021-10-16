function sumOfDigit(num) {
    if (num === 0) return 0;
    console.log(num);
    return (num % 10) + sumOfDigit(parseInt(num / 10))
}

console.log(sumOfDigit(123));