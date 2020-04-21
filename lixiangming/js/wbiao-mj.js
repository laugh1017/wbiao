
// 点击切换 维修方式
var mj_on=document.getElementsByClassName("mj_on")[0];
var w_con=document.getElementsByClassName("W_gnTab_content")[0];
mj_on.children[0].style.color="#ffffff";
        mj_on.children[0].style.backgroundColor="#ab947d";
        w_con.children[1].style.display="none"
mj_on.onclick=function(e){
    for (var i=0;i<mj_on.children.length;i++){
        mj_on.children[i].style.color="#ab947d";
        mj_on.children[i].style.backgroundColor="#ffffff";
        mj_on.children[i].firstElementChild.index=i
        w_con.children[i].style.display="none"
    }
    if(e.target.children.length==0){
        mj_on.children[e.target.index].style.color="#ffffff";
        mj_on.children[e.target.index].style.backgroundColor="#ab947d";
        w_con.children[e.target.index].style.display="block";
    }else{
        mj_on.children[e.target.firstElementChild.index].style.color="#ffffff";
        mj_on.children[e.target.firstElementChild.index].style.backgroundColor="#ab947d";
        w_con.children[e.target.firstElementChild.index].style.display="block"
    }
}