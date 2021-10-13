const result = [54, 33, 31, 25, 26, 85, 98, 15, 9, 85, 99, 45, 12, 75, 79, 4, 88, 42, 61];

function insertion_sort(ary){

    for(i=0;i <= ary.length - 1;i++){
        
    const item = ary[i];
    let j = i - 1;

    while(j >= 0 && ary[j] > item){
        ary[j+1] = ary[j];
        j = j - 1;
    }

    ary[j + 1] = item;

    }
    return ary;
}

const res = insertion_sort(result);
console.log(res);
