// Big O notion -> O(1), O(n)

// assignment operation -> x = 10
// comparison operation -> x > 9
// arithmetic operation -> x + 15
// function call (optional) -> eat()
// inside work of function -> eat(...)

// Time

// Constant Time Complexity - O(1)
// Linear Time Complexity - O(n)
// Quadratic Time Complexity - O(n to the power 2)
// Cubic Time Complexity - O(n to the power 3)


// Best case
// Average case
// Worst case


// The number of operations in a program that does not depend on its input is Order of 1

// O(1)
function sum(n1,n2){
    num1 = n1;  // assignment operation
    num2 = n2;  // assignment operation

    result = num1 + num2;   // assignment operation & arithmetic operation
    return result;
}
const res = sum(10,20);
// console.log(res);   // 30


// O(1)
function sum1(n){
    const result = n * (n + 1) / 2; // assignment operation & arithmetic operation
    console.log(result);
}
// sum1(5) // 15



// O(n)
function sum2(n){
    let result = 0;
    for(i = 1; i <= n; i++){
        result = result + i;
    }
    console.log(result);
}
// sum2(10) // 55



// O(n2)
function sum3(n){
    let result = 0;

    for(i = 1; i <= n; i++){

        for(j = 1; j <= n; j++){

            result = result + 1;
            console.log(result);

        }

    }
}
// sum3(3) // 9



// O(n3)
function sum4(n){
    let result = 0;

    for(i = 1; i <= n; i++){

        for(j = 1; j <= n; j++) {

            for(k = 1; k <= n; k++){

                result = result + 1;

            }

        }

    }
}
// sum4(3)  // 27

