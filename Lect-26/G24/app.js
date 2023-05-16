// let x=document.getElementsByClassName("box");
// console.log(x);
//HTML Collection
// x[0].innerHTML="<ul><li>item1</li><li>item1</li></ul>"
// x[0].style.backgroundColor="red";
function add(){
 let para= document.createElement("p");
 para.innerText="John Wick chapter 4";
//  console.log(para);

let boxes=  document.getElementsByClassName("box");
boxes[4].after(para);
// boxes[4].before(para);
// boxes[4].appendChild(para);
// boxes[4].prepend(para);
// boxes[4].append(para);





 let x=document.getElementsByTagName("p");
 x[0].style.backgroundColor="rgb(189, 189, 218)";
}

