// function Myfunction(a) {
//     return (b) => {
//         return (c) => {
//             return a* b* c
//         }
//     }
// }

// console.log(Myfunction(5)(5)(6));

// function curry(f) { //curry(f) does the curriying function
//     return function (a) {
//         return function(b) {
//             return f(a,b);
//         };
//     };
// }

// // usage
// function sum(a,b) {
//     return a+b;
// }
// let curriedsum =curry(sum);

// console.log(curriedsum(2)(3));


// as you can see,the implementation is straightforward: it's just two wrappers.

//the reult of curry(func) is a wrapper function(a).
//whwn it is called like curriedsum(1), the argument is saved in the lexical environment, and a new wrapper is returned function(b).
//then this wrapper is called with 2 as an argument, and it passes the call  to the orginal sum.