var brand = document.getElementsByClassName("branding");
var pinp = document.getElementsByClassName("pinpai");
var buxian = document.getElementById("buxian");
var live = document.getElementsByClassName("live");
var bux = document.getElementById("bux");
var wawatch = document.getElementsByClassName("wawatch");
var xhr = new XMLHttpRequest();
function aa(a, b) {
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var mess = JSON.parse(xhr.responseText);
            for (var i = a; i < b; i++) {
                wawatch[0].innerHTML += `
            <li>
                <img onclick="deta(${mess[i].id})" src="${mess[i].photo}">
                <p onclick="deta(${mess[i].id})" class="p1">${mess[i].shop_goods_list_text1}</p>
                <p class="p2">
                <span class="ckj">参考价：</span>￥${mess[i].shop_goods_list_totalprice1}</p>
            </li>
            `
            }
        }

    }
    xhr.open("GET", "http://localhost:8081/wbiao/php/choose-watch.php", true);
    xhr.send();
};
aa(0, 5);

function deta(id){
    window.open("http://localhost:8081/wbiao/Brands_commodity.html?id="+id);
};



for (var i = 0; i < brand.length; i++) {
    brand[i].onmouseenter = function () {
        num = parseInt(this.dataset.index);
        for (var j = 0; j < brand.length; j++) {
            pinp[j].style.display = "none";
            pinp[2].style.display = "none";
            brand[j].children[0].className = "";
        }
        this.children[0].className = "on";
        pinp[num + 1].style.display = "block";
        if (this.children[0].innerHTML == "A") {
            wawatch[0].innerHTML = "";
            aa(15, 20);
        } else {
            wawatch[0].innerHTML = "";
            aa(20, 25);
        }
    }
    live[i].onclick = function () {
        for (var a = 0; a < live.length; a++) {
            live[a].children[0].className = "";
        }
        this.children[0].className = "on";
        if (this.children[0].innerHTML == "商务正装") {
            wawatch[0].innerHTML = "";
            aa(5, 10);
        } else {
            wawatch[0].innerHTML = "";
            aa(10, 15);
        }

    }
};
buxian.onclick = function () {
    for (var j = 0; j < brand.length; j++) {
        pinp[j].style.display = "none";
        pinp[2].style.display = "none";
        brand[j].children[0].className = "";
    }
    pinp[0].style.display = "block";
    wawatch[0].innerHTML = "";
    aa(0, 5);
};
bux.onclick = function () {
    for (var a = 0; a < live.length; a++) {
        live[a].children[0].className = "";
    }
    wawatch[0].innerHTML = "";
    aa(0, 5);
};

var txt = document.getElementsByClassName("txt");

for (var i = 0; i < txt.length; i++) {
    txt[i].onclick = function () {
        sum = parseInt(this.dataset.index);
        if (sum == 0) {
            wawatch[0].innerHTML = "";
            aa(1, 6);
        } else if (sum == 1) {
            wawatch[0].innerHTML = "";
            aa(2, 7);
        } else if (sum == 2) {
            wawatch[0].innerHTML = "";
            aa(3, 8);
        } else if (sum == 3) {
            wawatch[0].innerHTML = "";
            aa(11, 16);
        } else if (sum == 4) {
            wawatch[0].innerHTML = "";
            aa(13, 18);
        } else {
            wawatch[0].innerHTML = "";
            aa(14, 19);
        }
    }
}