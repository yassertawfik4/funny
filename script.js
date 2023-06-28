var button =document.querySelector('.btn')
var btncont=document.querySelector('.btn-cont')
var counter=1;
button.addEventListener('mouseover',()=>{
    if (counter===1){
        btncont.style.textAlign = "left";
        console.log('hhhh')
        counter=2;
    }
    else if(counter===2){
        btncont.style.textAlign = "center";
        counter=3;
    }
    else if(counter===3){
        btncont.style.textAlign = "right";
        counter=1;
    }
})
var btnacc=document.querySelector('.btn-acc')
btnacc.addEventListener('click',()=>{
    alert("I Love You And Want To Get Out ")
})