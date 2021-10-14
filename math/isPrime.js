
function isPrime(num){
    for(i = 2; i < Math.sqrt(num); i++){
        // console.log('running');
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

const result = isPrime(27277);
console.log(result);


// best case = O(1)
// average case = O(n)
// worst case = O(n)


function minNumber(ary){
    let min = ary[0];
    for(i = 0; i <= ary.length -1; i++){
        if(ary[i] < min){
            min = ary[i];
        }
    }
    return min;
}

const res = minNumber([5,2,6,8,9,2]);
// console.log(res);


function isEven(num){
    return num % 2 === 0;
}

const r = isEven(6);
console.log(r);