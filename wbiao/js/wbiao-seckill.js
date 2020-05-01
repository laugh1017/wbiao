(function () {
    function w() {
        var all = document.documentElement;  // 获取html元素
        var test = all.getBoundingClientRect().width;  // 获取当前设备的宽度
        rem = test / 6;

        if (rem > 600) {
            all.style.fontSize = 600 + 'px'
        } else {
            all.style.fontSize = rem + 'px'
        }
    }
    w();
    window.addEventListener("resize", function () {
        w()
    }, false)
})();
window.onload = function () {
    function get(num) {
        var con1 = document.getElementById("con_red")
        var con2 = document.getElementById("con_blue")
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                if(num==0){
                    con1.innerHTML=""
                    for (var i = 0; i < data.length; i++) {
                        con1.innerHTML += `
                    <li onclick=cld(${data[i].id})>
                        <div class="con_left">
                            <img src="${data[i].img}" alt="">
                        </div>
                        <div class="con_right">
                            <div class="conRtop">
                                <p>${data[i].title}</p>
                                <span class="box1">秒杀</span>
                                <span class="box2">04月30日23：59结束</span>
                            </div>
                            <div class="conRbottom">
                                <p>￥${data[i].seckill} <span class="box3">￥${data[i].price}</span></p>
                                <p class="box4">去抢购 <span>还剩5件</span></p>
                            </div>
        
                        </div>
                    </li>
                    `
                    }
                }else{
                    con2.innerHTML=""
                    for (var i = 0; i < data.length; i++) {
                        con2.innerHTML += `
                    <li onclick=cld(${data[i].id}>
                        <div class="con_left">
                            <img src="${data[i].img}" alt="">
                        </div>
                        <div class="con_right">
                            <div class="conRtop">
                                <p>${data[i].title}</p>
                                <span class="box1">秒杀</span>
                                <span class="box2">04月30日23：59结束</span>
                            </div>
                            <div class="conRbottom">
                                <p>￥${data[i].seckill} <span class="box3">￥${data[i].price}</span></p>
                                <p class="box4">去抢购 <span>还剩5件</span></p>
                            </div>
        
                        </div>
                    </li>
                    `
                    }
                }
                
            }
        }
        xhr.open('GET', 'http://localhost:8081/wbiao/php/wbiao_secill.php?paeger=' +num, true);
        xhr.send();
    }
    get(0)

    var top_img = document.getElementsByClassName("top-img")[0]
    top_img.onclick = function () {
        top_img.style.display = "none";
    }

    var red = document.getElementsByClassName("count_top_left")[0]
    var blue = document.getElementsByClassName("count_top_right")[0]
    var red1 = document.getElementsByClassName("con_red")[0]
    var blue1 = document.getElementsByClassName("con_blue")[0]
    var span = document.getElementsByClassName("red")[0]
    var span1 = document.getElementsByClassName("black")[0]
    red.onclick = function () {
        red.style.color = "red";
        span.style.backgroundColor = "red"
        span.style.color = "#fff"
        blue.style.color = "#000";
        span1.style.backgroundColor = "#fff"
        span1.style.color = "#ccc"
        blue1.style.display = "none";
        red1.style.display = "block";
        get(0)
    }
    blue.onclick = function () {
        red.style.color = "#000000";
        span.style.backgroundColor = "#fff"
        span.style.color = "#ccc"
        blue.style.color = "blue";
        span1.style.backgroundColor = "blue"
        span1.style.color = "#fff"
        blue1.style.display = "block";
        red1.style.display = "none";
        get(1)
    }
}
function cld(id){
    window.open("http://localhost:8081/wbiao/lixiangming/wbiao-shop.html?id="+id)
}