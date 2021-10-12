
const roll = [5, 12, 54, 78, 9, 1, 65, 89, 99];


// worst - O(n)
function linear_search(ary, x){

    for(i = 0; i <= ary.length; i++){
        if(ary[i] === x){
            return true;
        }
    }
    return false;

}

const result = linear_search(roll, 3);
console.log(result);