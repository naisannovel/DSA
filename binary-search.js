const roll = [1, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76];

// logarithm formula
// log2 n
// n = 30
// log2 30
// 2*2*2*2 = 16
// 2*2*2*2*2 = 32
// 30 middle within 16 & 32 so 5 times


function binary_search(ary, num){
    let start = 0;
    let end = ary.length - 1;

    while(start <= end){
        const middle = Math.round((start + end) / 2);

        if(ary[middle] === num){
            return 'found';
        }

        if(ary[middle] > num){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
    }

    return 'not found';
}

const result = binary_search(roll, 46);
console.log(result);