function traverse(ary, lastIndex) {
    if (lastIndex < 0) return 0;

    return ary[lastIndex] + traverse(ary, lastIndex - 1);
}

const ary = [1,2,3]
console.log(traverse(ary, ary.length - 1));