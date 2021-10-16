function sum(n){
    let total = 0;
    if(n===0) return 0;
    
    total = n + sum(n-1);
    console.log('N = ', n);
    return total;
}

console.log(sum(5));