const result = [42, 54, 33, 31, 25, 26, 85, 98, 15, 9, 85, 99, 45, 12, 75, 79, 4, 88, 42, 61];

function bubble_sort(ary){

    for(i = 0; i <= ary.length - 1; i++){
        
        for(j = 0; j <= ary.length-i-1; j++){
            if(ary[j] > ary[j+1]){
                const temp = ary[j];
                ary[j] = ary[j+1];
                ary[j+1]=temp
            }
        }

    }
    return ary;

}

const res = bubble_sort(result);
console.log(res);
