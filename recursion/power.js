
function power(number,pow){
    if(pow === 0) return 1;

    let total = number * power(number, pow - 1)
    console.log("Number = ",number,'/', "Pow = ",pow,'/',"Total = ",total);
    return total;
}

console.log(power(5,3));