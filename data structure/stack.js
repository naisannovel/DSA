
const ary = [1, 2, 3];

function push(ary, item){
    let i = ary.length;
    ary[i] = item;
}

push(ary,5)
push(ary,5)
push(ary,5)
push(ary,5)
console.log(ary);

function pop(ary){
    if(ary.length){
        const item = ary[ary.length-1];
        return item;
    }else{
        console.log('stack is empty');
    }
}

const r = pop(ary);
console.log(r);