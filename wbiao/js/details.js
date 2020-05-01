var address = window.location.search;
var num=address.split("=")[1];
var nw=document.getElementById("nw");
var dtit=document.getElementById("dtit");
var xhr = new XMLHttpRequest();
var det = document.getElementById("det");
var time=document.getElementById("time");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var mess = JSON.parse(xhr.responseText);

        time.innerHTML=mess[num-1].time;
        nw.innerHTML=mess[num-1].title;
        dtit.innerHTML=mess[num-1].title;
             
        det.innerHTML = `
        <div>${mess[num-1].onetxt}                            
        </div>

        <div><img src="${mess[num-1].oneimg}">
        </div>

        <div>${mess[num-1].twotxt}
        </div>

        <div>${mess[num-1].threetxt}                                 
        </div>

        <div>
        <img src="${mess[num-1].twoimg}">
        </div>

        <div> ${mess[num-1].fourtxt}             
        </div>

        <div><img src="${mess[num-1].threeimg}">
        </div>

        <div> ${mess[num-1].fivetxt}       
        </div>

        <div>
        <img src="${mess[num-1].fourimg}">
        </div>

        <div>${mess[num-1].sixtxt}
        </div>
                       
`
        }
    
};
xhr.open("GET", "http://localhost:8081/wbiao/php/getdata.php", true);
xhr.send();