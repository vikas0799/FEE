// let x=document.getElementsByClassName("box");
//HTML Collection
// console.log(x);
// x[0].innerHTML="<ul><li>item1</li><li>item1</li></ul>"


//  let boxes= document.getElementsByClassName("box");
//  console.log(boxes);
//  boxes[0].style.backgroundColor="red";
function add() {
    let para = document.createElement("p");
    // console.log(para);
    para.innerText = "rishabh jain";
    // console.log(para);

    let boxes = document.getElementsByClassName("box");
    //   console.log(boxes[3]);
    boxes[3].after(para);
//     boxes[3].before(para);
// boxes[3].appendChild(para);
// boxes[3].prepend(para);
// boxes[3].append(para);

    let paragraph = document.getElementsByTagName("p");
    console.log(paragraph);
    paragraph[1].style.backgroundColor = "bisque";
}
