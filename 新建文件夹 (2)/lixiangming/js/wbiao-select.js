var head = document.getElementsByClassName("nav-head")[0];
var wrap1=document.getElementsByClassName("wrap")[0];
var post=document.getElementsByClassName("post")[0]
post.onclick=function(){
    head.style.display="none";
    wrap1.style.display="none"
}
var blast=document.getElementsByClassName("bot-foot-ul-1")[0]

blast.onclick=function(){
 var ul2=document.getElementsByClassName("ul2")[0] 
    if(ul2.classList.contains("blok")){
        ul2.classList.remove("blok")
    }else{
        ul2.classList.add("blok")
    }
}

var ul=document.getElementById("c-click");
ul.onclick=function(e){
    // 清除c-click上bg-black的类名
    for(var i=0;i<ul.children.length;i++){
        ul.children[i].children[1].classList.remove("bg-black")
    }
    e.target.children[1].classList.add("bg-black")
}

var bg_ul=document.getElementById("bg-fff");
var hot=document.getElementsByClassName("conten-left-hot")[0];
var word=document.getElementsByClassName("conten-left-word")[0];
bg_ul.onmouseover=function(e){
    for(var j=0;j<bg_ul.children.length;j++){
        bg_ul.children[j].style.color="rgb(153,153,153)"
    }
    if(e.target.className=="word"){
        word.style.display="block";
        hot.style.display="none";
        e.target.style.color="rgb(102,102,102)"
    }else{
        hot.style.display="block";
        word.style.display="none";
        e.target.style.color="rgb(102,102,102)"
    }
}