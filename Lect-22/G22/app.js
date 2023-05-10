// console.log("Helo G22");

// function add(a,b){
//     console.log("Sum=");
//     console.log(a+b);
// }

// add(2,5);

// anonymus function
// let add=function (a,b){
//     console.log("Sum=");
//     console.log(a+b);
// }
// add(5,4);

// arrow function
// let add=(a,b)=>{
//     console.log("Sum=");
//         console.log(a+b);
// });
// add(5,3);


// HOF=>
// function Fun(){
//     function innerfun(){
//         console.log("innerfunction in console");
//     }
//     return innerfun;
//     // return 9;
// }
// let x=Fun();
// console.log(x);
// x();

// let arr=[3,2,5,4];
// arr.sort();
// arr.sort(function(a,b){return a-b});
// console.log(arr);

// let arr=[3,6,4,2,7,4,44,33,65];
// function double(x){
//    return  x*2;
// }
// let output=arr.map(double);
// let output=arr.map(function (x){
//     return x*2;
// });
// let output=arr.map((x)=>{
//     return x*2;
// })
// console.log(output);
// let arr=[3,6,4,2,7,4,44,33,65];
// function isEven(x){
//     return x%2==0;
// }
// let output=arr.filter(isEven);
// console.log(output);

let arr=[3,6,4];
function sum(acc,curr){
    acc=acc+curr;
    return acc;
}
let output=arr.reduce(sum,0);
console.log(output);



