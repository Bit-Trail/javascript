// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }

// const counter = outer();
// counter;
// counter();
// counter();




// function makeMultiplier(n){
//     function multiply(x){
//         let res = x*n;
//         //return x*n;
//         console.log(res);
//     }
//     return multiply;
// }

// const double = makeMultiplier(3);
// double(5);  // 10
// double(9);  // 18


//inner function remembers the value of outer even after the outer function executed completely or dead.
// function which takes function as argument.

// function once(func){
//     let isFn = false;
//     function argument(){
//         if (isFn == false){
//             func();
//             isFn = true;
//         } return ;
//     }
//     return argument;
// }

// const sayHello = once(function() {
//   console.log("Hello!");
// });

// sayHello();
// sayHello();
// sayHello();



// Write a makeCounter that accepts a start number and a step number. Returns a function that increments by step each time.
// const countByTwos = makeCounter(0, 2);
// countByTwos(); // 2
// countByTwos(); // 4
// countByTwos(); // 6

// const countByFives = makeCounter(10, 5);
// countByFives(); // 15
// countByFives(); // 20

function makeCounter(x,y){
    let res = x;
    function countByNum(){
        res = res + y;
        console.log(res);
    }
    return countByNum;
}

const countByFives = makeCounter(10, 5);
countByFives(); // 15
countByFives(); // 20