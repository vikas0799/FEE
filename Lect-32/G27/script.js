


// hide show toggle
// $("div").hide(2000)
// $("div").show(2000)
// $("div").toggle(2000)


// $("#btn").on("click",(event)=>{
//     $("div").toggle(2000)
//     $("div").toggle(2000)
// })
 

//
// fadeIn fadeOut fadeToggle fadeTo
// $("div").fadeOut(2000)
// $("div").fadeIn(2000)
// $("div").fadeTo(2000,0.5)



// $("div").slideUp(2000)
// slideUp , slideDown, slideToggle
// let timeID=setInterval(()=>{
//     $("div").slideUp(2000)
//     $("div").slideDown(2000)
    // $("div").slideToggle(2000)
// },5000)
// $("#stop").on("click",(event)=>{
// clearInterval(timeID);
// })



// $(document).ready(()=>{
//     $("#btn").on("click",function(){
//         $("div").animate({height:"500px",width:"200px"},6000);
//         console.log("hello");
//     });
// });


// $("#stop").on("click",function(){
//     $("div").stop(true);
// })


// $("#btn").click(function()
// {
//     $("div").fadeOut(3000);
//     $("div").slideDown(3000);
//     $("div").hide(3000);
// })


let timeID=setInterval(()=>{
    $("div").fadeOut(3000);
    $("div").slideDown(3000);
    $("div").hide(3000);
    $("div").slideUP(3000);
},10000);
$("#stop").click(()=>{
    console.log("helo");
clearInterval(timeID);
})