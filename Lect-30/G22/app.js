$(document).ready(()=>{

$("p").css("color","blue")

$(".item").css("background-color","yellow")
const obj={
    backgroundColor:"red",
    color:"blue",
    border:"2px solid blue"
};

$("#item1").css(obj)

$(".item").on("click",(event)=>{
    // event.target.style.color="green";
    // event.target.style.display="none";
    event.target.style.backgroundColor="green";

})

let ele=$("<li>this is li</li>")

$("ul").prepend(ele);

// // before after
// const el = $("<li>Vikas sir</li>")
// $(".item").before(el)


$("p").addClass("red");
$("p").removeClass("red");
$("p").toggleClass("red");

})


