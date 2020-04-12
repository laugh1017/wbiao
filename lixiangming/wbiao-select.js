

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