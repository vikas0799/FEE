// // console.log("Hello G27");

// function Fun(){
//     function innerfun(){
//         console.log("Hello G27");
//     }
//     return innerfun;
// };
// let x=Fun;
// console.log(x);

// function add(a,b){
//     console.log(a+b);
//     return a*b;
// }
// let x=add(2,4);
// console.log(x);


// anonymus function
// let z=function (){
//     console.log("Hello Hi");
// }
// console.log(z);
// console.log(z());


// arrow function
// let rohan=(a)=>{
//     console.log(a*a);
//     return a*a*a;
// }
// let ans=rohan(2);
// console.log(ans);

// function Fun(){
//     function innerfun(){
//         console.log("Hello G27");
//     }
//     return innerfun;
// };
// let x=Fun();
// console.log(x);
// console.log(x());

// let arr=[3,5,2,4,6];
// arr.sort();
// arr.sort(function (a,b){
//     return a-b;
// });
// console.log(arr);

// function sqr(a){
//     return a*a;
// }
// let brr=arr.map(sqr);
// let brr=arr.map( (x)=>{
//     return 2*x;
// });
// console.log(brr);

// let arr=[3,5,2,4,6];
// let brr=arr.filter((a)=>{
//     return a%2==0;
// });
// console.log(brr);

let arr=[3,5,2,6];
function fun(acc,curr){
    // sum=sum+ar[i];
    acc=acc+curr;
    return acc;
}
let brr=arr.reduce(fun,0);
console.log(brr);

