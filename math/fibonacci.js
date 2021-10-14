// rule
// f0 = 1, f1 = 1
// fn = fn-1 + fn-2


function fibonacci(n){
    const result = [1,1];
    for(let i = 2; i <= n+1; i++){
        result.push(result[i-1] + result[i-2]);
    }
    return result;
}

const result = fibonacci(10);
console.log(result);