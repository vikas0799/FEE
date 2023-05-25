// $("div").css("color","red")

// $("div").hide(10000)
// $("div").show(10000)
// setInterval(()=>{
//     console.log("hello")
//     $("div").hide(10000)
//     $("div").show(10000)
// },4000)


// $("div").slideUp(2000);
// $("div").slideDown(4000);

// $("#btn").on("click",()=>{
// clearInterval(timeID);
// })

//  let timeID= setInterval(()=>{
//     $("div").fadeOut(2000);
//     $("div").fadeIn(1000);
// },3000)
// $("div").fadeOut(6000);
// $("div").fadeIn(6000);
// $("div").fadeToggle(6000);

$(document).ready(()=>{
    $("#btn").on("click",function(){
        $("div").animate({height:"50px",width:"200px"},6000);
        console.log("hello");
    });
});




