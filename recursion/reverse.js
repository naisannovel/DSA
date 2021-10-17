

function reverse(ary,firstIndex,lastIndex){

    if(firstIndex > lastIndex){
        return;
    }

    const temp = ary[firstIndex];
    ary[firstIndex] = ary[lastIndex];
    ary[lastIndex] = temp;
    reverse(ary, firstIndex + 1, lastIndex - 1)

}


const ary = [5,4,3,2,1];
reverse(ary,0,ary.length - 1);
console.log(ary);