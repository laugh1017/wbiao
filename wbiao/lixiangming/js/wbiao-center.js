var active = document.getElementsByClassName("advantage_nav")[0];
var box = document.getElementsByClassName("box_box")[0];
box.children[0].style.display = "block"
active.onmouseover = function (e) {
    for (var i = 0; i < active.children.length; i++) {
        active.children[i].classList.remove("active");
        box.children[i].style.display = "none"
        active.children[i].index = i
    }
    e.target.classList.add("active");
    box.children[e.target.index].style.display = "block"
}

var car = document.getElementById('con_car')
car.style.left = 0 + "px";


setInterval(function(){
    num=parseInt(car.style.left)
    if(num<-2949){
        car.style.left=0
    }else{
        car.style.left=num-590+"px" 
    }
    
},2000)



