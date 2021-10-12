const roll = [25, 7, 2, 6, 1, 5, 4, 3];


function selection_sort(ary){

    for(i = 0; i <= ary.length -1; i++){

        for(j = i+1; j <= ary.length -1; j++){

            if(ary[i] > ary[j]){
                const temp = ary[i];
                ary[i] = ary[j];
                ary[j] = temp;
            }
            
        }

    }
    return ary;
}

const result = selection_sort(roll);
console.log(result);