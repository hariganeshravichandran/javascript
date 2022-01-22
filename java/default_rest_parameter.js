// // default prameters (ES6) // default values

// function sumWithDefault(a=0,b=1){
//     console.log(a,b)
//     return a+b
// }

// console.log(sumWithDefault(5,6))
// console.log(sumWithDefault(5))
// console.log(sumWithDefault())

// by using ES5
// function sumWithNoDefault(a,b){
//     //console.log(a,b)
//     a=(a===undefined)?0:a;
//     b=(b===undefined)?5:b;
//     return a+b
// }

// console.log(sumWithNoDefault(5,6))
// console.log(sumWithNoDefault(5))
// console.log(sumWithNoDefault())

//rest parameter  (ES6)

function printTotalRest(a,b,...vals){
    console.log("vals",vals,typeof vals);
    let sum=0;
    for (let val of vals){
        sum+=val;
    }
    return sum;
}

console.log("sum Rest", printTotalRest(1,2,3,4,10,20,30))

//arguments parameter

function printTotal(){
    console.log('arguments',arguments,typeof arguments)
    let sum=0;
    for (i=0;i<arguments.length;i++){
        //console.log("arguments[i]",arguments[1])
        sum += arguments[i];    //sum=sum + arguments[i]
    }
    return sum;
}

console.log("sum value",printTotal(1,2,3,4,5,6))
//return a+b+c+d+e;