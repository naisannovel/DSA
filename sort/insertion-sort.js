const result = [33, 54, 4, 5, 85, 98, 15, 9, 85, 99, 45, 12, 75, 79, 88, 42, 61];

function insertion_sort(ary){

    for(i = 1; i <= ary.length-1; i++){
        
        const item = ary[i];
        let j = i - 1;

        while(j >= 0 && ary[j] > item){
            ary[j+1] = ary[j];
            j = j - 1;
        }

        ary[j+1] = item;

    }
    return ary;
}

const res = insertion_sort(result);
console.log(res);