// console.log("Hello G24");

// function outerFun(){
//    function inner(){
//     console.log("John wick");
//    }
//    return inner;
// }
// let x=outerFun();
// console.log(x);
// x();

// function add(a,b){
//     console.log("Sum=");
//     console.log(a+b);
//     return a*b;
// }
// let x=add(3,6);
// console.log(x);

// let x=function (a,b){
//     console.log(a+b);
// };
// x(2,5);

// let x=(a,b)=>{
//     console.log(a+b);
//     return a*b;
// };
// let y=x(3,6);
// console.log(y);

// let k=function(){
//     console.log("Hello G24");
//     return "vikas";
// };
// console.log((k));
// let str=k();
// console.log(str);


// let arr=[3,5,3,78,65,322];
// arr.sort();
// arr.sort(function(a,b){
//     return a-b;
// });
// console.log(arr);

// let arr=[1,4,3,6];
// function sqr(a){
//     return a*a;
// }
// let output=arr.map(sqr);
// let output=arr.map(function (a){
//     return a*a;
// });

// console.log(output);

// let arr=[3,6,4,2,7,4,44,33,65];
// function isEven(x){
//     return x%2==0;
// }
// let output=arr.filter(isEven);
// console.log(output);

let arr = [3, 6, 4];
function sum(acc, curr) {
    // acc=acc+curr;
    // return acc;
    if (curr > acc)
        acc = curr;
    return acc;
}
let output = arr.reduce(sum, 0);
console.log(output);






