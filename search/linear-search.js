
// algorithm
// Linear Search

const roll = [5, 12, 54, 78, 9, 1, 65, 89, 99];

function linear_search(ary, x){

    for(i = 0; i <= ary.length; i++){
        if(ary[i] === x){
            return true;
        }
    }
    return false;

}

const result = linear_search(roll, 89);
console.log(result);