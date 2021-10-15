function gcd(a,b){
    console.log('A =',a, '/', "B =",b, '/', "A%B =", a%b);
    if(a%b === 0) return b;

    return gcd(b,a%b);
}

console.log(gcd(468,30));