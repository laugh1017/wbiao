window.onload=function(){
   ask()
}


function ask(){
    var tab = document.getElementById("data_base")
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            for (var i = 0; i < data.length; i++) {
                tab.innerHTML += `
                <li>
                <div class="goods-img">
                    <img src="${data[i].img}" alt="">

                </div>
                <div class="goods-txt">
                    <p class="tPrc">
                        <em class="month-tag">月付</em>
                        <span class="fenqi-price">￥${data[i].paymonthly}</span>
                        <span class="s-price">￥${data[i].price}</span>
                    </p>
                    <a href="#" class="s-goods-name">${data[i].title}</a>
                    <div class="goods-sale">销量${data[i].sales}</div>
                    <a href="#" class="s-shop">${data[i].shop}</a>
                    <p class="sale-tags"> <span>免息分期</span> <span>自营</span> </p>
                    <div class="goods-hover">
                        <a href="#" class="add-to-keep">加入收藏</a>
                        <a href="#" class="add-to-cart">加入购物车</a>
                    </div>
                </div>
            </li>
                `
            }

        }
    }
    xhr.open('GET', 'http://localhost:8081/wbiao/lixiangming/php/wbiao_select.php', true);
    xhr.send();
}