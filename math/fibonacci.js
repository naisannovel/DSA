// rule
// f0 = 1, f1 = 1
// fn = fn-1 + fn-2


function fibonacci(n){
    const result = [1,1];
    for(let i = 2; i <= n; i++){
        console.log('run');
        result.push(result[i-1] + result[i-2]);
    }
    return result;
}

const result = fibonacci(5);
console.log(result);



// recursion

function fibo(n){
console.log('runing');
    if(n === 1 || n === 0){
        return 1;
    }

    return fibo(n-1) + fibo(n-2);
}

const r = fibo(5);
console.log(r);