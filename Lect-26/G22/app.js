//  let x= document.getElementById("box2");
//  console.log(x);
//  x.style.backgroundColor="red";

//  let x= document.getElementsByClassName("box");
//  console.log(x);
//  x[0].style.color="red";

//   let x=  document.getElementsByTagName("h1");
//    console.log(x);
//    x[1].style.color="blue";

// let x=document.querySelector(".box");
//  let x=document.querySelectorAll(".box");
//  console.log(x);
//  x[2].style.color="green";

//  let para=document.createElement("p");
//  console.log(para);
//  para.innerText="Mango ";
//  console.log(para);

//  let box=  document.getElementsByClassName("box");
//  console.log(box);
//  box[0].before("para");
//  box[4].after("para");


// DOM Traversal
// console.log(document);
//  let box1=document.getElementsByClassName("box")[0];
//  console.log(box1.parentElement.parentElement.children[1]);
//  console.log(box1.nextSibling.parentElement);


//classlist(add,remove toglle class)
// console.log(document.querySelectorAll(".box"));
// let element = document.querySelector("#box3");
// console.log(element);
// element.classList.add("circle");
// element.classList.remove("circle");
// element.classList.toggle("circle");

//  let image=document.getElementsByTagName("img")[0];
//  console.log(image);
//  image.src="Bhola.jpg";

let para = document.createElement("p");
    para.innerText = "Faham khan";
    // console.log(para);

    let boxes = document.getElementsByClassName("box");
    // boxes[3].after(para);
    boxes[3].before(para);
//     boxes[3].append(para);
//     boxes[3].before(para);
// boxes[3].appendChild(para);
// boxes[3].prepend(para);
// boxes[3].append(para);



    let paragraph = document.getElementsByTagName("p");
    console.log(paragraph);
    paragraph[1].style.color = "blue";


