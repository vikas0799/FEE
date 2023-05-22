
// function greet(name) {
//     console.log("Hello, " + name + "!");
//   }
  
//   var timeoutID = setTimeout(greet, 2000, "John");
  
//   // Later in the code, cancel the timeout
//   clearTimeout(timeoutID);
  


//   var date = new Date();

// var year = date.getFullYear();       
        
// var date = new Date();

// date.setFullYear(2022);      
// date.setMonth(8);             
// date.setDate(15);             
// date.setHours(10);           


let el=document.getElementById("btn");
el.addEventListener("click",(e)=>{
  let name=document.getElementById("name").value;
  localStorage.setItem("NAME",name);
  console.log("rashmil");
   console.log(localStorage.getItem("NAME"));
  document.getElementsByTagName("p")[0].innerText=localStorage.getItem("NAME");
});