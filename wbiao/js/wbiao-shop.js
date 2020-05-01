var show = document.getElementsByClassName("upper_stages_b")[0];
var text = document.getElementsByClassName("upper_stages_flaw")[0];
show.onmouseover = function () {
    text.style.display = "block";
}
show.onmouseout = function () {
    text.style.display = "none";
}

var right = document.getElementById("right");
right.onmouseover = function (e) {
    if (e.target.children.length == 0) {
        e.target.parentNode.lastElementChild.style.display = "block"
    } else {
        e.target.lastElementChild.style.display = "block"
    }
}
right.onmouseout = function (e) {
    if (e.target.children.length == 0) {
        e.target.parentNode.lastElementChild.style.display = "none"
    } else {
        e.target.lastElementChild.style.display = "none"
    }
}
var title_text = document.getElementsByClassName("title_text")[0]
var lower_right_content = document.getElementsByClassName("lower_right_content")[0]

for (var i = 0; i < title_text.children.length; i++) {
    title_text.children[i].index = i
    lower_right_content.children[i].style.display = "none"
    title_text.children[i].onclick = function (e) {
        for (var j = 0; j < title_text.children.length; j++) {
            lower_right_content.children[j].style.display = "none"
            title_text.children[j].classList.remove("on")
        }
        e.target.classList.add("on")
        lower_right_content.children[e.target.index].style.display = "block"

    }
    lower_right_content.children[0].style.display = "block"

}


// 获取数据库中的值
window.onload = function () {
    var num1 = location.search.slice(4);
    var title = document.getElementById("title")
    var design = document.getElementById("design")
    var model = document.getElementById("model")
    var numder = document.getElementById("numder")
    var brand = document.getElementById("brand")
    var sales = document.getElementById("sales")
    var stages = document.getElementsByClassName("js_stages")[0]
    var upper_price_jiage_b = document.getElementsByClassName("upper_price_jiage_b")[0]
    var tab = document.getElementById("data_base")

    var Lc_img = document.getElementsByClassName("Lc-img")[0];
    var Ln_img = document.getElementsByClassName("Ln-img")[0];

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            title.innerHTML = data.title;
            design.innerHTML = data.design;
            model.innerHTML = data.model;
            numder.innerHTML = data.numder;
            brand.innerHTML = data.brand;
            sales.innerHTML = data.sales;
            stages.innerHTML = data.paymonthly;
            upper_price_jiage_b.innerHTML = data.price;
            Lc_img.innerHTML += `
            <li >
                <div class="smill" >
                        <img src="${data.img1}"
                    alt="">
                </div>
            </li>
            `
            Lc_img.innerHTML += `
            <li >
                <div class="smill" >
                        <img src="${data.img2}"
                    alt="">
                </div>
            </li>
            `
            Lc_img.innerHTML += `
            <li >
                <div class="smill" >
                        <img src="${data.img3}"
                    alt="">
                </div>
            </li>
            `
            Lc_img.innerHTML += `
            <li >
                <div class="smill" >
                        <img src="${data.img4}"
                    alt="">
                </div>
            </li>
            `
            Lc_img.innerHTML += `
            <li >
                <div class="smill" >
                        <img src="${data.img5}"
                    alt="">
                </div>
            </li>
            `
            Lc_img.innerHTML += `
            <li >
                <div class="smill" >
                        <img src="${data.img6}"
                    alt="">
                </div>
            </li>
            `
            Ln_img.innerHTML += `
            <li onmouseover=reveal(0)>
                <div class="Ln_box" style="display:none" ></div>
                        <img src="${data.img1}"
                    alt="">
                
            </li>
            `
            Ln_img.innerHTML += `
            <li onmouseover=reveal(1)>
                <div class="Ln_box" ></div>
                        <img src="${data.img2}"
                    alt="">
                
            </li>
            `
            Ln_img.innerHTML += `
            <li onmouseover=reveal(2)>
                <div class="Ln_box"> </div>
                        <img src="${data.img3}"
                    alt="">
               
            </li>
            `
            Ln_img.innerHTML += `
            <li onmouseover=reveal(3)>
                <div class="Ln_box" ></div>
                        <img src="${data.img4}"
                    alt="">
                
            </li>
            `
            Ln_img.innerHTML += `
            <li onmouseover=reveal(4)>
                <div class="Ln_box" ></div>
                        <img src="${data.img5}"
                    alt="">
                
            </li>
            `
            Ln_img.innerHTML += `
            <li onmouseover=reveal(5)>
                <div class="Ln_box" ></div>
                        <img src="${data.img6}"
                    alt="">
                
            </li>
            `
        }
        for (var j = 1; j < Lc_img.children.length; j++) {
            var cn2 = document.getElementsByClassName('smill')[j]
            var cn1 = document.getElementsByClassName('Ln_box')[j]
            cn1.style.display = "block"
            cn2.style.display = "none"
        }

    }
    xhr.open('GET', 'http://localhost:8081/wbiao/php/wbiao_shop.php?id=' + num1, true);
    xhr.send();

}

function reveal(c) {
    var Ln_img = document.getElementsByClassName("Ln-img")[0]
    for (var i = 0; i < Ln_img.children.length; i++) {
        var cn1 = document.getElementsByClassName('Ln_box')[i]
        cn1.style.display = "block"
    }
    var cn1 = document.getElementsByClassName('Ln_box')[c]
    cn1.style.display = "none"
    var Lc_img = document.getElementsByClassName("Lc-img")[0]
    for (var j = 0; j < Lc_img.children.length; j++) {
        var cn2 = document.getElementsByClassName('smill')[j]
        cn2.style.display = "none"
    }
    var cn2 = document.getElementsByClassName('smill')[c]
    cn2.style.display = "block"
}

var left1 = document.getElementsByClassName('w_left')[0];
var right1 = document.getElementsByClassName('w_right')[0];
var ul1 = document.getElementsByClassName('Ln-img')[0];
ul1.style.left = 0 + "px"
left1.onclick = function () {
    var len = ul1.children.length * 80 - 400
    var num = parseInt(ul1.style.left)
    if (num > -len) {
        ul1.style.left = num - 84 + 'px'
    }
}
right1.onclick = function () {
    var num1 = parseInt(ul1.style.left)
    if (num1 < 0) {
        ul1.style.left = num1 + 84 + 'px'
    }
}




var plus = document.getElementsByClassName("plus")[0];
var reduce = document.getElementsByClassName("reduce")[0];
var cont = document.getElementsByClassName("cont")[0];
plus.onclick = function () {
    var num = parseInt(cont.value)
    cont.value = num + 1
}
reduce.onclick = function () {
    var num1 = parseInt(cont.value)
    if (num1 == 1) {
        cont.value = 1
    } else {
        cont.value = num1 - 1
    }
}