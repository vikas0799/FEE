let btn=document.getElementById("btn");
btn.addEventListener("click",(event)=>{
    let correct=0;
    let one=document.getElementsByName("q1")
    console.log(one);
    one.forEach(radio=>
    {
           if(radio.checked)
             {console.log(radio.value);
             if(radio.value=="b")
             correct++;}
    });
    let two=document.getElementsByName("q2")
    two.forEach(radio=>
    {
           if(radio.checked)
             {if(radio.value=="a")correct++;}
    });
    let three=document.getElementsByName("q3")
    three.forEach(radio=>
    {
           if(radio.checked)
             {if(radio.value=="c")correct++;}
    });
    console.log(correct);
    localStorage.setItem("Correct",correct);
})
