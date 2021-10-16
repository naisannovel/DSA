
function traverse(ary,lastIndex){
    if(lastIndex < 0) return;

    traverse(ary,lastIndex -1);
    console.log(ary[lastIndex]);
}

const ary = [5,2,5,6,8,9,4,1,3,7]
traverse(ary, ary.length - 1);