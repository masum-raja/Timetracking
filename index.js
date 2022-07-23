let data=document.querySelectorAll("#navbar>div+div a")

data.forEach(function(ele,i){
    if(i===0||i===1||i===3){
        ele.addEventListener("click",function(){
            alert("Work on progress!"+"\n"+"please visit other page")
        })
    }
});


