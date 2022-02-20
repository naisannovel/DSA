
const roll = [8,1,4,5,7,6,3,2];

function merge(left, right){
    let sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){

        const leftEl = left[leftIndex];
        const rightEl = right[rightIndex];

        if (leftEl < rightEl){
            sorted.push(leftEl);
            leftIndex++;
        }else{
            sorted.push(rightEl);
            rightIndex++;
        }
    }
    return [...sorted, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}


function merge_sort(ary){

    if(ary.length <= 1){
        return ary;
    }

    let mid = Math.floor(ary.length / 2);

    const left = merge_sort(ary.slice(0, mid));
    const right = merge_sort(ary.slice(mid));
    return merge(left, right);
}

const res = merge_sort(roll)
console.log(res);
